<script>
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
	import {Hamburger} from 'svelte-hamburgers';

	let windowWidth = 0;
	let open = false;
	let eventExpanded = false;

	function clickHandler() {
		eventExpanded = !eventExpanded;
	}

	const MOBILE = 700;
	const TITLE_BREAKPOINT = MOBILE + 350;
</script>

<svelte:head>
	<!-- Import base css -->
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/base.css"
	/>

	<!-- Import spin css (spin is default type) -->
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/types/spin.css"
	/>
</svelte:head>

<svelte:window bind:innerWidth={windowWidth} />

<div class="navbar">
	<div
		class:active={$page.url.pathname === '/'}
		style="text-align: left; float: left; font-weight: bold; text-decoration: none;"
	>
		<a style="text-decoration: none;" href="/">
			<img src="/transparentpokerclublogo.png" alt="poker club logo" />
			<h1 style="font-size: 24px;">
				{#if windowWidth > TITLE_BREAKPOINT}
					CARNEGIE MELLON UNIVERSITY POKER CLUB
				{:else}
					POKER CLUB
				{/if}
			</h1>
		</a>
	</div>
	<div style="float: right; height: 100%;">
		{#if windowWidth > MOBILE}
			<a
				href="https://youtube.com/@carnegiepokerclub"
				style="font-size: 20px;padding-right:0;margin-right:0;"
				><i class="fa-brands fa-youtube" /></a
			>
			<a
				href="https://www.instagram.com/carnegiepokerclub/"
				style="font-size: 20px;padding-right:0;margin-right:0;"
				><i class="fa-brands fa-instagram" /></a
			>
			<a
				href="https://discord.gg/TVc2rXRfGY"
				style="font-size: 20px;padding-right:0;margin-right:0;"
				><i class="fa-brands fa-discord" /></a
			>

			<div class="dropdown">
				<button class="dropbtn" class:active={$page.url.pathname === '/events'}>
					<a href="/events" style="padding: 0; margin: 0;"
						>Events <i class="fa fa-caret-down" style="margin-left: 2px;" /></a
					>
				</button>
				<div class="dropdown-content">
					<a href={`/events/gbm`}>General Body Meetings</a>
					<a href={`/events/tournaments`}>Tournaments</a>
					<a href={`https://cmudsc.com/pokerai`}>Poker AI Contest</a>
				</div>
			</div>
			<a href="/exec" class:active={$page.url.pathname === '/exec'}
				>Execs</a
			>
			<a href="/sponsors" class:active={$page.url.pathname === '/sponsors'}
				>Sponsors</a
			>
			<a href="/shop" class:active={$page.url.pathname === '/shop'}
				>Shop</a
			>
			<div class="dropdown">
				<button class="dropbtn" class:active={$page.url.pathname.startsWith('/widgets')}>
					<a href="/widgets" style="padding: 0; margin: 0;"
						>Widgets <i class="fa fa-caret-down" style="margin-left: 2px;" /></a
					>
				</button>
				<div class="dropdown-content">
					<a href={`/widgets/hrc-to-gtow`}>HRC to GTOw Range Converter</a>
					<a href={`/widgets/tournament-bot`}>Tournament Seat Viewer</a>
				</div>
			</div>
			<a href="/contact" class:active={$page.url.pathname === '/contact'}
				>Contact</a
			>
		{:else}
			<div class="mobileView" style="height: 100%;">
				<div style="height: 100%;" class="flex">
					<Hamburger bind:open --color="white" />
				</div>
				{#if open}
					<div class="nav">
						<a
							href="https://discord.gg/TVc2rXRfGY"
							class="textnav"
							transition:fly={{ y: -15, delay: 50 * 1 }}
						>
							<span>Discord</span>
						</a>

						<a
							href="/events"
							class="textnav"
							class:active={$page.url.pathname === '/events'}
							transition:fly={{ y: -15, delay: 50 * 2 }}
						>
							<span>Calendar</span>
						</a>
						<a
							href="/events/gbm"
							class="textnav"
							class:active={$page.url.pathname === '/events/gbm'}
							transition:fly={{ y: -15, delay: 50 * 2 }}
						>
							<span>GBM</span>
						</a>
						<a
							href="/events/tournaments"
							class="textnav"
							class:active={$page.url.pathname === '/events/tournaments'}
							transition:fly={{ y: -15, delay: 50 * 2 }}
						>
							<span>Tournaments</span>
						</a>
						<a
							href="https://cmudsc.com/pokerai"
							class="textnav"
							transition:fly={{ y: -15, delay: 50 * 2 }}
						>
							<span>AI Contest</span>
						</a>
						<a
							href="/exec"
							class="textnav"
							class:active={$page.url.pathname === '/exec'}
							transition:fly={{ y: -15, delay: 50 * 3 }}
						>
							<span>Execs</span>
						</a>
						<a
							href="/sponsors"
							class="textnav"
							class:active={$page.url.pathname === '/sponsors'}
							transition:fly={{ y: -15, delay: 50 * 4 }}
						>
							<span>Sponsors</span>
						</a>
						<a		
							href="/shop"
							class="textnav"
							class:active={$page.url.pathname === '/shop'}
							transition:fly={{ y: -15, delay: 50 * 4 }}
						>
							<span>Shop</span>
						</a>
						<a
							href="/widgets"
							class="textnav"
							class:active={$page.url.pathname.startsWith('/widgets')}
							transition:fly={{ y: -15, delay: 50 * 4 }}
						>
							<span>Widgets</span>
						</a>
						<a
							href="/widgets/hrc-to-gtow"
							class="textnav"
							class:active={$page.url.pathname === '/widgets/hrc-to-gtow'}
							transition:fly={{ y: -15, delay: 50 * 4 }}
						>
							<span>HRC to GTOw Range Converter</span>
						</a>
						<a
							href="/widgets/tournament-bot"
							class="textnav"
							class:active={$page.url.pathname === '/widgets/tournament-bot'}
							transition:fly={{ y: -15, delay: 50 * 4 }}
						>
							<span>Tournament Bot</span>
						</a>
						<a
							href="/contact"
							class="textnav"
							class:active={$page.url.pathname === '/contact'}
							transition:fly={{ y: -15, delay: 50 * 4 }}
						>
							<span>Contact</span>
						</a>
					</div>
				{/if}
			</div>
		{/if}
	</div>
</div>

<style>
	.navbar {
		position: fixed;
		top: 0;
		display: flex;
		justify-content: space-between;
		background-color: var(--darker-gray);
		width: 100%;
		height: 70px;
		z-index: 100;
	}

	h1 {
		font-family: GilroyRegular;
	}

	img {
		width: 2.5em;
		height: 2.5em;
		margin-right: 5px;
	}

	.navbar a {
		float: left;
		font-size: 16px;
		color: var(--white);
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 14px 16px;
		text-decoration: none;
		height: 100%;
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		transition: color 0.2s linear;
	}

	.dropdown {
		float: left;
		overflow: hidden;
		height: 100%;
	}

	.dropdown .dropbtn {
		font-size: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		border: none;
		outline: none;
		padding: 14px 16px;
		color: var(--white);
		height: 100% !important;
		background-color: inherit;
		font-family: inherit;
		margin: 0;
	}

	.active {
		color: var(--white) !important;
	}

	a:hover,
	button:hover {
		text-decoration: underline;
	}

	.dropdown-content {
		display: none;
		position: absolute;
		background-color: var(--darker-gray);
		min-width: 160px;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		z-index: 1;
	}

	.dropdown-content a {
		float: none;
		color: var(--white);
		padding: 12px 16px;
		text-decoration: none;
		display: block;
		text-align: left;
	}

	.dropdown-content a:hover {
		background-color: var(--dark-gray);
	}

	.dropdown:hover .dropdown-content {
		display: block;
	}

	.mobileView .nav {
		font-size: 1.5em;
		letter-spacing: 0.15em;
		top: 70px;
		width: 100%;
		right: 0;
		position: fixed;
		padding: 10px;
		background-color: var(--black);
	}

	.mobileView a {
		padding: 10px;
		width: 100%;
		color: var(--white);
		text-align: center;
	}
</style>
