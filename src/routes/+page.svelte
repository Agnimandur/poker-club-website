<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import FancyButton from '$lib/components/FancyButton.svelte';
	import SignUpButton from '$lib/components/SignUpButton.svelte';
	import Title from '$lib/components/Title.svelte';
	import { Accordion, AccordionItem } from 'carbon-components-svelte';

	import faqs from "$lib/langs/faqs.json"
	let faq_entries = Object.entries(faqs);

	import sponsors from "$lib/langs/sponsors.json"
	let sponsor_entries = Object.entries(sponsors);
</script>

<Title title="CMU POKER CLUB" description="Poker at Carnegie Mellon University" height="calc(100vh - 70px)" />
<div class="section row">
	<div class="col">
		<h2>About the Club</h2>
		<div style="width: 50%;"><hr /></div>
		<p> The CMU Poker Club strives to be a hub for the poker community at Carnegie Mellon University to meet, learn, and play.</p>
		<br />
		<p>We aim to engage all manner of poker players with a wide array of events that include everything from charity tournaments and interactive workshops to guest speakers and networking opportunities.</p>
		<br />
		<p>Outside of CMU, we seek to build lasting connections with trading firms and other companies that are interested in students with the strategic and analytical skills developed through poker.</p>
		<br />
		<SignUpButton />
	</div>
	<div class="col flex fill" style="height: 100%;">
		<img src="/finaltable.png" alt="teaching" />
	</div>
</div>

<div class="section">
	<h2 style="text-align: center;">Our Events</h2>
	<div class="flex"><div style="width: 50%;"><hr /></div></div>
	<div class="row-uneven">
		<div class="col">
			<p><strong>General Body Meetings</strong></p>
			<p>
				Poker Club runs GBMs approximately once every two weeks. GBMs are a casual opportunity for club members to meet, eat pizza and drink boba, and of course play some poker! Everyone is welcome, regardless of poker skill level! Sometimes we also run educational sessions to teach poker strategy at our GBMs.
			</p>
			<br />
			<p><strong>Tournaments</strong></p>
			<p>
				Poker Club runs multiple poker tournaments every year. These tournaments usually have a buyin ranging from $20 to $50, and the top finishers get a share of the prizepool. We also run sponsored tournaments, which are free to enter and have prizes! We also occasionally invite poker pros as guest speakers to our tournaments.
			</p>
			<br />
			<br />
			<FancyButton title="View Calendar" href="/events" />
		</div>
		<div class="col">
			<p><strong>2023 Heads Up Tournament Winner</strong></p>
			<img
				src="/hutournamentwinner.png"
				style="width: 80%; object-fit: fill;"
				alt="Heads Up Tournament Winner"
			/>
		</div>
	</div>
</div>

<div class="section" id="faq">
	<h2>Frequently Asked Questions</h2>
	<div style="width: 50%;"><hr /></div>
	<Accordion size="sm" align="start">
		{#each faq_entries as [key,faq]}
			<AccordionItem>
				<svelte:fragment slot="title">
					<h5>{faq.question}</h5>
				</svelte:fragment>
				<p>
					{faq.answer}
				</p>
			</AccordionItem>			
		{/each}
	</Accordion>
</div>

<div class="section">
	<h2 style="text-align: center;">Sponsors</h2>
	<div class="flex"><div style="width: 50%;"><hr /></div></div>
	<div class="grid-three sponsor">
		{#each sponsor_entries as [name,company]}
			<div>
				<a href="/sponsors"
					><h2><strong>{name}</strong></h2>
					<div class="flex">
						<img
							src="/sponsors/{company.id}.png"
							style="width: 200px; height: 200px;object-fit: cover;"
							alt="{name} logo"
						/>
					</div>
				</a>
			</div>
		{/each}
	</div>
</div>

<style>
	.sponsor img {
		filter: saturate(0.5);
		transition: 1s;
	}

	.sponsor div {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.sponsor a {
		text-decoration: none;
	}

	.sponsor div a h2 {
		font-size: 15px;
		border: none;
		outline: none;
		text-transform: uppercase;
		color: black;
		text-align: center;
		margin-bottom: 5px;
	}

	.sponsor img:hover {
		filter: saturate(1);
	}

	:global(.bx--accordion__heading) {
		overflow: hidden;
		background-color: var(--primary-light);
	}

	:global(.bx--accordion__heading:hover::before) {
		background-color: #ffabab;
	}

	:global(.bx--accordion__heading:focus::before) {
		border: none;
	}

	:global(.bx--accordion__item--active .bx--accordion__content) {
		border: 2px solid var(--primary-light);
		margin-bottom: 10px;
		padding: 5px;
	}
</style>
