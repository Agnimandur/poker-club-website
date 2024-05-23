<script>
  import NavBar from '$lib/components/NavBar.svelte';

  let inputText = '';
  let outputText = '';

  function processInput() {
    const lines = inputText.split('\n');
    const wizard = {};

    for (const line of lines) {
      const items = line.trim().split(',');
      if (items.length !== 3) continue;

      const hand = items[0];
      const freq = parseFloat(items[1]);

      if (hand < '22' || hand > 'AA') continue;

      if (hand.length === 2) {
        if (hand.slice(-1) === 's') {
          for (const a of 'dhcs') {
            wizard[`${hand[0]}${a}${hand[1]}${a}`] = freq;
          }
        } else {
          for (const [a, b] of [['d', 'h'], ['d', 'c'], ['d', 's'], ['h', 'c'], ['h', 's'], ['c', 's']]) {
            if (a !== b) wizard[`${hand[0]}${a}${hand[1]}${b}`] = freq;
          }
        }
      } else if (hand.length === 3) {
        const [rank1, rank2, suit] = hand;
        const ranks = 'AKQJT98765432';
        const suits = 'shdc';

        const rank1Index = ranks.indexOf(rank1);
        const rank2Index = ranks.indexOf(rank2);
        const suitIndex = suits.indexOf(suit);

        if (rank1Index !== -1 && rank2Index !== -1 && suitIndex !== -1) {
          for (const s of 'shdc') {
            wizard[`${ranks[rank1Index]}${s}${ranks[rank2Index]}${s}`] = freq;
          }
        }
      }
    }

    const items = Object.entries(wizard);
    outputText = items.map(([key, value]) => `${key}: ${value}`).join(',');
  }

  function copyOutput() {
    navigator.clipboard.writeText(outputText);
  }
</script>

<NavBar />

<br />
<br />
<br />
<br />
<br />

<div class="instructions">
  <p>
    This tool converts a range exported from Holdem Resources Calculator (HRC) to one importable into GTOWizard. To export a range, right click the grid in HRC and select copy. To import a range, paste it into the option in GTO wizard (AI Solve).
  </p>
</div>

<div class="container">
  <div class="box">
    <h3>HRC Range:</h3>
    <textarea bind:value={inputText}></textarea>
    <button class="convert-btn" on:click={processInput}>Convert</button>
  </div>
  <div class="spacer"></div>
  <div class="box">
    <h3>GTO Wizard Range:</h3>
    <textarea bind:value={outputText} readonly></textarea>
    <button class="copy-btn" on:click={copyOutput}>Copy</button>
  </div>
</div>

<style>
  .instructions {
    margin: 20px auto;
    max-width: 800px;
    text-align: center;
  }

  .instructions p {
    font-size: 18px;
    line-height: 1.5;
  }

  .container {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    max-width: 1200px;
  }

  .box {
    flex: 1;
    padding: 10px;
    max-width: 500px;
  }

  .spacer {
    width: 40px;
  }

  textarea {
    width: 100%;
    height: 450px;
  }

  .convert-btn,
  .copy-btn {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #ff0000;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: transform 0.2s;
  }

  .convert-btn:hover,
  .copy-btn:hover {
    background-color: #cc0000;
  }

  .convert-btn:active,
  .copy-btn:active {
    transform: translateY(2px);
  }
</style>
