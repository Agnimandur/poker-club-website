<script>
    import NavBar from '$lib/components/NavBar.svelte';
</script>

<NavBar />
<br/>
<br/>
<br/>
<br/>
<br/>

<div style="display: flex;">
	<div class="box">
		<h2>Club Hoodie</h2>
		<img src="/shop/hoodie.jpg" alt="Poker club hoodie" width="200" height="200">
		<p>$150 ($90 for club members)</p>
	</div>
	
	<div class="box">
		<h2>Dealer Button</h2>
		<img src="/shop/button.jpg" alt="Poker club dealer button" width="200" height="200">
		<p>$10 (free with hoodie purchase)</p>
	</div>
	
	<div  class="box">
		<h2>Club Patch</h2>
		<img src="/shop/patch.jpg" alt="Poker club batch" width="200" height="200">
		<p>$3 (free with hoodie purchase)</p>
	</div>
</div>

<style>
	.box {
		min-width: 100px;
		display: inline block;
		border: 1px solid #aaa;
		border-radius: 2px;
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
		padding: 1em;
		margin-right: 10px;
	}
</style>

