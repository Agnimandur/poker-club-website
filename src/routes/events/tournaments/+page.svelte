<script>
    import NavBar from '$lib/components/NavBar.svelte';
	import Carousel from 'svelte-carousel'
  
  	let carousel; // for calling methods of the carousel instance
	const tournaments = ["2024 Fall Main Event", "2024 SIG Tournament","2024 Lunar New Year Tournament", "2023 Fall Tournament", "2023 Heads Up Tournament", "2023 Spring Xuan Liu Tournament", "2022 Citadel Tournament", "2022 Spring Tournament"]
	const winners = ["Jeffery Guo", "Afonso Tinoco dos Santos","Oliver Zhang","Anthony Jiang", "Allen Yang","Nadim Motaghedi","Derek Wong","Ryan Driscoll"];

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
	<h2 style="text-align: center;">Tournaments</h2>
	<div class="flex"><div style="width: 50%;"><hr /></div></div>
	{#if windowWidth > TITLE_BREAKPOINT}
		<div class="row-uneven">
			<div class="col">
				<p><strong>Our Tournaments</strong></p>
				<p>
					Poker Club generally hosts a few tournaments a semester. These tournaments draw up to 200 participants and have prize pools of over $5000! Some of our tournaments have a specific theme, such as our last tournament, the Lunar New Year High Roller!
				</p>
				<br />
				<p><strong>Sponsored Tournaments</strong></p>
				<p>
					Poker Club's sponsors also host sponsored tournaments. These tournaments are free to enter, with sponsored prizes! Every year, SIG sends down a team of traders to deal and network at their tournament.
				</p>
				<br />
				<p><strong>IPA</strong></p>
				<p>
					CMU Poker Club participates in IPA: the Intercollegiate Poker Association. If you want to take tournament poker more seriously, consider joining the IPA team! Last year, we finished in second place. The IPA team also travels together to tournament stops across the country
				</p>
				<br />
			</div>

			<div class="col" style="text-align: center;">
				<p style="margin: auto;"><strong id="tournament">{tournaments[0]}</strong></p>
				<p style="margin: auto;"><em id="winner">{winners[0]}</em></p>
				<Carousel
					bind:this={carousel}
					on:pageChange={
						event => changeInformation(event.detail)
					}
				>	
					<img src="/winners/jeef.jpg" style="width: 80%; object-fit: fill;" alt="tournament winner"/>
					<img src="/winners/afonso.jpg" style="width: 80%; object-fit: fill;" alt="tournament winner"/>
					<img src="/winners/tiannan.jpg" style="width: 80%; object-fit: fill;" alt="tournament winner"/>
					<img src="/winners/anthony.jpg" style="width: 80%; object-fit: fill;" alt="tournament winner"/>
					<img src="/winners/allen.jpg" style="width: 80%; object-fit: fill;" alt="tournament winner"/>
					<img src="/winners/nadim.jpg" style="width: 80%; object-fit: fill;" alt="tournament winner"/>
					<img src="/winners/derek.jpg" style="width: 80%; object-fit: fill;" alt="tournament winner"/>
					<img src="/winners/ryan.jpg" style="width: 80%; object-fit: fill;" alt="tournament winner"/>
				</Carousel>
			</div>
		</div>
	{:else}
		<p><strong>Our Tournaments</strong></p>
		<p>
			Poker Club generally hosts several tournaments per semester. These club sponsored tournaments usually have a buyin of $20, with a prizepool consisting of both club funds and member buyins. We guaranteed $5000 in our April 2023 tournament with Xuan Liu!
		</p>
		<br />
		<p><strong>Sponsored Tournaments</strong></p>
		<p>
			Poker Club's sponsors, including quant companies like SIG and Citadel, also host sponsored tournaments. These tournaments are free to enter, and include prizes. The SIG tournament is dealt by traders from SIG!
		</p>
		<br />
		<p><strong>IPA</strong></p>
		<p>
			CMU Poker Club participates in IPA: the Intercollegiate Poker Association. If you want to take tournament poker more seriously, and join our IPA team, let a member of our Exec board know!
		</p>
		<br />
	{/if}
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
