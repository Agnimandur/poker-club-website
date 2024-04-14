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
		<h2>CMU Poker Club Hoodie</h2>
		<img src="/shop/hoodieT.jpg" alt="CMU Poker Club hoodie" width="300px">
		<p>$150 ($90 for club members)</p>
	</li>

	<li class="box">
		<h2>CMU Poker Club Patch</h2>
		<img src="/shop/patchT.jpg" alt="CMU Poker Club patch" width="300px" height="100px">
		<p>$3 (free with hoodie purchase)</p>
	</li>
	
	<li class="box">
		<h2>CMU Poker Club Button</h2>
		<img src="/shop/buttonT.jpg" alt="CMU Poker Club dealer button" width="300px">
		<p>$10</p>
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

