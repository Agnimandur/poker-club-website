<script>
    import NavBar from '$lib/components/NavBar.svelte';
	import Carousel from 'svelte-carousel'
  
  	let carousel; // for calling methods of the carousel instance
	const gbm_events = ["CMU Poker Club", "An Educational Session", "Doug Polk visited us","Boba!"]
	function changeInformation(index) {
		document.getElementById('gbm_event').innerText = gbm_events[index];
	}
</script>

<NavBar />
<br />
<br />
<br />
<br />
<br />
<div class="section">
	<h2 style="text-align: center;">General Body Meetings</h2>
	<div class="flex"><div style="width: 50%;"><hr /></div></div>
	<div class="row-uneven">
		<div class="col">
			<p><strong>Our GBMs</strong></p>
			<p>
				Poker Club generally hosts one GBM every two weeks. These GBMs are open to everyone, and are completely free. At these GBMs, you can relax, enjoy some food and drink, and of course play some poker! There are usually a couple of free to play tables, a few 0.10/0.20 tables, and one 1/2 table.
			</p>
			<br />
			<p><strong>Educational Sessions</strong></p>
			<p>
				Poker Club hosts educational sessions at the beginning of each school year. The goal is to introduce poker to people who have never played before, and then cover some basic poker strategy, and more advanced "game theory optimal" theory.
			</p>
			<br />
			<br />
		</div>
		<div class="col" style="text-align: center;">
			<p style="margin: auto;"><strong id="gbm_event">CMU Poker Club</strong></p>
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
</div>