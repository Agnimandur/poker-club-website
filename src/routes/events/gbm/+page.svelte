<script>
    import NavBar from '$lib/components/NavBar.svelte';
	import Carousel from 'svelte-carousel'
  
  	let carousel; // for calling methods of the carousel instance
	const gbm_events = ["CMU Poker Club", "An Educational Session", "Doug Polk visited us","Boba!"]
	function changeInformation(index) {
		document.getElementById('gbm_event').innerText = gbm_events[index];
	}

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
	<h2 style="text-align: center;">General Body Meetings</h2>
	<div class="flex"><div style="width: 50%;"><hr /></div></div>
	{#if windowWidth > TITLE_BREAKPOINT}
		<div class="row-uneven">
			<div class="col">
				<p><strong>Our GBMs</strong></p>
				<p>
					Poker Club generally hosts one GBM every two weeks. GBMs are casual meetings where club members can play some poker while meeting other members of the club. Games of any stake may start if there are interested players. Food and drink provided!
				</p>
				<br />
				<p><strong>Educational Sessions</strong></p>
				<p>
					Poker Club hosts educational sessions throughout the semester. The goal is to help new players step into poker. We cover everything from the rules and basic strategy to more advanced "game theory optimal" play. We also host tournament theory workshops to cover the basics of tournament strategy and ICM.
				</p>
				<br />
				<p><strong>A Texas Holdem Game</strong></p>
				<img src="/finaltable.png" style="width: 60%; object-fit: fill;" alt="final table"/>
				<br />
				<br />
			</div>
			<div class="col" style="text-align: center;">
				<p style="margin: auto;"><strong id="gbm_event">{gbm_events[0]}</strong></p>
				<Carousel
					bind:this={carousel}
					style="margin: auto;"
					on:pageChange={
						event => changeInformation(event.detail)
					}
				>
					<img src="/gbmphotos/cmupoker.jpg" style="width: 80%; object-fit: fill;" alt="cmu poker club"/>
					<img src="/gbmphotos/edusession.jpg" style="width: 80%; object-fit: fill;" alt="educational session"/>
					<img src="/gbmphotos/dougpolk.jpg" style="width: 80%; object-fit: fill;" alt="doug polk at cmu"/>
					<img src="/gbmphotos/boba.jpg" style="width: 80%; object-fit: fill;" alt="boba at GBM"/>
				</Carousel>
			</div>
		</div>
	{:else}
		<p><strong>Our GBMs</strong></p>
		<p>
			Poker Club generally hosts one GBM every two weeks. These GBMs are open to everyone, and are completely free. At these GBMs, you can relax, enjoy some food and drink, and of course play some poker in a friendly ring game style format.
		</p>
		<img src="/finaltable.png" style="width: 60%; object-fit: fill;" alt="final table"/>
		<br />
		<br />
		<p><strong>Educational Sessions</strong></p>
		<p>
			Poker Club hosts educational sessions at the beginning of each school year. The goal is to introduce poker to people who have never played before, and then cover some basic poker strategy, and more advanced "game theory optimal" theory. We also host tournament theory workshops to cover the basics of tournament strategy and ICM.
		</p>
		<img src="/gbmphotos/edusession.jpg" style="width: 60%; object-fit: fill;" alt="educational session"/>
		<br />
		<br />
	{/if}
</div>