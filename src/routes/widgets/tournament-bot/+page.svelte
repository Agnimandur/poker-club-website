<script>
    import NavBar from '$lib/components/NavBar.svelte';
	import Carousel from 'svelte-carousel'
  
  	let carousel; // for calling methods of the carousel instance
	const tournaments = ["2024 SIG Tournament","2024 Lunar New Year Tournament", "2023 Fall Tournament", "2023 Heads Up Tournament", "2023 Spring Xuan Liu Tournament", "2022 Citadel Tournament", "2022 Spring Tournament"]
	const winners = ["Afonso Tinoco dos Santos","Tiannan Zhang","Anthony Jiang", "Allen Yang","Nadim Motaghedi","Derek Wong","Ryan Driscoll"];

	/**
	 * @param {number} index
	 */
	function changeInformation(index) {
		// @ts-ignore
		document.getElementById('tournament').innerText = tournaments[index];
		// @ts-ignore
		document.getElementById('winner').innerText = winners[index];
	}

    import { onMount } from "svelte";
    import * as Ably from "ably";

    let tournament = null;

    onMount(() => {
        const ably = new Ably.Realtime.Promise({ key: '-3RqkQ.rUdiCA:3aN1Lry6dpqMMNURsX1GMnlR4gQSxij-rMUdRKG1b0s' });    

        tournament = ably.channels.get("tournament",{params: {rewind: '1'}});
        tournament.subscribe(msg => changeDOM(msg));

        return () => {
            tournament.unsubscribe(tournament);
            tournament.detach();
        };
    });

	function changeDOM(msg) {
        Object.entries(msg.data).forEach(([key, value]) => {
            var elem = document.getElementById(key);
            elem.value = value;
        });
    }

	let seat_nums = [1,2,3,4,5,6,7,8,9];

	let windowWidth = 0;
	const MOBILE = 700;
	const TITLE_BREAKPOINT = MOBILE + 350;
</script>

<svelte:window bind:innerWidth={windowWidth} />

<NavBar />
<br />
<br />
<br />
<br />
<br />

<div class="section">
	<h2 style="text-align: center;">Tournament Seat View</h2>

	<div class="row">
		{#each [1,2,3,4] as t}
			<div class="section column">
				<h3>Table {t}</h3>
	
				<label for="table{t}:seat0">Dealer:</label>
				<input type="text" id="table{t}:seat0" size="13" readonly />
				<br/>
				<br/>
				{#each seat_nums as s}
					<label for="table{t}:seat{s}">Seat {s}:</label>
					<input type="text" id="table{t}:seat{s}" size="13" readonly />
					<br/>
				{/each}
			</div>
		{/each}
	</div>
	<div class="row">
		{#each [5,6,7,8] as t}
			<div class="section column">
				<h3>Table {t}</h3>
	
				<label for="table{t}:seat0">Dealer:</label>
				<input type="text" id="table{t}:seat0" size="13" readonly />
				<br/>
				<br/>
				{#each seat_nums as s}
					<label for="table{t}:seat{s}">Seat {s}:</label>
					<input type="text" id="table{t}:seat{s}" size="13" readonly />
					<br/>
				{/each}
			</div>
		{/each}
	</div>
	<div class="row">
		{#each [9,10,11,12] as t}
			<div class="section column">
				<h3>Table {t}</h3>
	
				<label for="table{t}:seat0">Dealer:</label>
				<input type="text" id="table{t}:seat0" size="13" readonly />
				<br/>
				<br/>
				{#each seat_nums as s}
					<label for="table{t}:seat{s}">Seat {s}:</label>
					<input type="text" id="table{t}:seat{s}" size="13" readonly />
					<br/>
				{/each}
			</div>
		{/each}
	</div>
	<div class="row">
		{#each [13,14,15,16] as t}
			<div class="section column">
				<h3>Table {t}</h3>
	
				<label for="table{t}:seat0">Dealer:</label>
				<input type="text" id="table{t}:seat0" size="13" readonly />
				<br/>
				<br/>
				{#each seat_nums as s}
					<label for="table{t}:seat{s}">Seat {s}:</label>
					<input type="text" id="table{t}:seat{s}" size="13" readonly />
					<br/>
				{/each}
			</div>
		{/each}
	</div>
</div>

<style>
	/* Container for flexboxes */
	.row {
		display: flex;
		flex-wrap: wrap;
	}

	/* Create four equal columns */
	.column {
		flex: 25%;
		padding: 20px;
		box-sizing: border-box;
	}
	  .title {
    margin: 20px auto;
    max-width: 1000px;
    text-align: center;
    background-color: black;
    color: white;
    padding: 20px;
    border: 2px solid red;
  }
	label, input {
		font-size: 18px;
	}

	/* On screens that are 992px wide or less, go from four columns to two columns */
	@media screen and (max-width: 992px) {
		.column {
			flex: 50%;
		}
	}

	/* On screens that are 600px wide or less, make the columns stack on top of each other instead of next to each other */
	@media screen and (max-width: 600px) {
		.row {
			flex-direction: column;
		}
	}
</style>
