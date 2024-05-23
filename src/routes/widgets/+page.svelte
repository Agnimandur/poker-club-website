<script>
  let inputText = '';
  let outputText = '';

  function processInput() {
    const lines = inputText.split('\n');
    const wizard = {};

    for (const line of lines) {
      const items = line.trim().split(',');
      if (items.length !== 2 || items[0] === 'Hand') continue;
      const hand = items[0];
      const freq = parseFloat(items[1]);

      if (hand.slice(-1) === 's') {
        for (const a of 'dhcs') {
          wizard[`${hand[0]}${a}${hand[1]}${a}`] = freq;
        }
      } else if (hand.length === 2) {
        for (const [a, b] of [['d', 'h'], ['d', 'c'], ['d', 's'], ['h', 'c'], ['h', 's'], ['c', 's']]) {
          if (a !== b) wizard[`${hand[0]}${a}${hand[1]}${b}`] = freq;
        }
      }
    }

    const items = Object.entries(wizard);
    outputText = items.map(([key, value], index) => `${key}: ${value}${index < items.length - 1 ? ',' : ''}`).join('');
  }

  function copyOutput() {
    navigator.clipboard.writeText(outputText);
  }
</script>

<div class="container">
  <div class="box">
    <h3>HRC </h3>
    <textarea bind:value={inputText} on:input={processInput}></textarea>
  </div>
  <div class="box">
    <h3>GTOWizard</h3>
    <textarea bind:value={outputText} readonly></textarea>
    <button on:click={copyOutput}>Copy</button>
  </div>
</div>

<style>
  .container {
    display: flex;
  }
  .box {
    flex: 1;
    padding: 10px;
  }
  textarea {
    width: 100%;
    height: 200px;
  }
</style>
