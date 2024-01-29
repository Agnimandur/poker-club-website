<script lang="ts">
	import NavBar from './NavBar.svelte';

	export let height: string = '300px';
	export let title: string;
	export let description: string;
</script>

<NavBar />
<div class="container" style="height: {height};margin-top: 70px;">
	<div class="homeTitleDiv flex" style="height: 100%;">
		<div class="box">
			<h1 style="font-size: 100px;">{title}</h1>
			<br />
			<h4>{description}</h4>
		</div>
	</div>
</div>

<style>
	.container {
		background: var(--primary-black-gradient);
	}
	.homeTitleDiv {
		width: 100%;
		background: url('/tournament.png');
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;
		background-attachment: fixed;
	}
	.homeTitleDiv .box {
		color: var(--white);
	}

	.homeTitleDiv .box h1 {
		text-align: center;
		font-family: GilroyRegular, 'Inconsolata', monospace;
		font-weight: 300;
	}

	.homeTitleDiv .box h4 {
		margin: 0;
		padding: 0;
		font-family: GilroyRegular, 'Inconsolata', monospace;
		font-size: 25px;
		font-weight: 100;
		text-align: center;
	}
</style>
