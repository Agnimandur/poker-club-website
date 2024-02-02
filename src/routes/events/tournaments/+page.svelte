<script>
    import NavBar from '$lib/components/NavBar.svelte';
	import Carousel from 'svelte-carousel'
  
  	let carousel; // for calling methods of the carousel instance
	const tournaments = ["Fall 2023 Tournament Winner", "2023 Heads Up Tournament Winner", "Xuan Liu Tournament Winner", "Citadel Tournament Winner", "2022 Tournament Winner"]
	const winners = ["Anthony Jiang", "Allen Yang","Nadim Motaghedi","Derek Wong","Ryan Driscoll"];

	/**
	 * @param {number} index
	 */
	function changeInformation(index) {
		// @ts-ignore
		document.getElementById('tournament').innerText = tournaments[index];
		// @ts-ignore
		document.getElementById('winner').innerText = winners[index];
	}
</script>

<NavBar />
<br />
<br />
<br />
<br />
<br />
<div class="section">
	<h2 style="text-align: center;">Tournaments</h2>
	<div class="flex"><div style="width: 50%;"><hr /></div></div>
	<div class="row-uneven">
		<div class="col">
			<p><strong>Our Tournaments</strong></p>
			<p>
				Poker Club generally hosts one tournament a semester. These club sponsored tournaments usually have a buyin of $20, with a prizepool consisting of both club funds and member buyins. We guaranteed $5000 in our April 2023 tournament with Xuan Liu!
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
		</div>
		<div class="col" style="text-align: center;">
			<p style="margin: auto;"><strong id="tournament">Fall 2023 Tournament Winner</strong></p>
			<p style="margin: auto;"><em id="winner">Anthony Jiang</em></p>
			<Carousel
				bind:this={carousel}
				on:pageChange={
					event => changeInformation(event.detail)
				}
			>
				<img src="/winners/anthony.jpg" style="width: 80%; object-fit: fill;" alt="tournament winner"/>
				<img src="/winners/allen.jpg" style="width: 80%; object-fit: fill;" alt="tournament winner"/>
				<img src="/winners/nadim.jpg" style="width: 80%; object-fit: fill;" alt="tournament winner"/>
				<img src="/winners/derek.jpg" style="width: 80%; object-fit: fill;" alt="tournament winner"/>
				<img src="/winners/ryan.jpg" style="width: 80%; object-fit: fill;" alt="tournament winner"/>
			</Carousel>
		</div>
	</div>
</div>