<script>
    import NavBar from '$lib/components/NavBar.svelte';
</script>

<NavBar />
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<ul>
	<li class="box">
		<h2>Poker Club Hoodie</h2>
		<img src="https://www.cmupoker.club/shop/hoodie.jpg" alt="Poker club hoodie" width="200px">
		<p>$150 ($90 for club members)</p>
	</li>
	
	<li class="box">
		<h2>CMU Dealer Button</h2>
		<img src="https://www.cmupoker.club/shop/button.jpg" alt="Poker club dealer button" width="200px">
		<p>$10 (free with hoodie purchase)</p>
	</li>
	
	<li  class="box">
		<h2>Poker Club Patch</h2>
		<img src="/shop/patch.jpg" alt="Poker club patch" width="200px">
		<p>$3 (free with hoodie purchase)</p>
	</li>
</ul>

<style>
	.box {
		list-style-type: none; /* Remove bullets */
		display: inline block;
		border: 1px solid #aaa;
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
		padding: 1em;
		margin-right: 10px;
		margin-top: 15px;
	}
</style>

