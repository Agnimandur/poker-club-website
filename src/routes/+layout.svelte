<script>
	import 'carbon-components-svelte/css/g10.css';
	import { page } from '$app/stores';
</script>

<main>
	<slot />
</main>
<footer>
	<div class="rowFooter">
		<div class="col">
			<h4>Carnegie Poker Club</h4>
			<p>
				The Carnegie Poker Club is the official university poker club for Carnegie Mellon University.
				Join us to play some poker, connect with our sponsors, and have fun!
			</p>
		</div>
		<div class="col">
			<h4>Links</h4>
			<p><a href="/events/calendar">Events</a></p>
			<p><a href="/exec">Exec Board</a></p>
			<p><a href="/#faq">FAQs</a></p>
			<p><a href="/sponsors">Sponsors</a></p>
		</div>
		<div class="col">
			<h4>Stay Connected</h4>
			<p>
				<b>Email <i class="fa-regular fa-envelope" />: </b><a
					href="mailto:pokerclub@andrew.cmu.edu">pokerclub@andrew.cmu.edu</a
				><br />
			</p>
			<p>
				<b>Discord <i class="fa-brands fa-discord" />: </b><a
					href="https://discord.gg/TVc2rXRfGY">Club Discord</a
				><br />
			</p>
			<p>
				<b>Instagram <i class="fa-brands fa-instagram" />: </b><a
					href="https://www.instagram.com/carnegiepokerclub/">@carnegiepokerclub</a
				><br />
			</p>
			<p>
				<b>Youtube <i class="fa-brands fa-youtube" />: </b><a
					href="https://www.youtube.com/channel/UCJj5eZ7qO_YhrkshV3Y57RQ">CMU Poker Club</a
				><br />
			</p>
		</div>
	</div>
	<div class="bottomSection">
		<div class="rowThree">
			<div>
				<p>
					<a href="https://tartanconnect.cmu.edu/feeds?type=club&type_id=68212&tab=home">Join Poker Club!</a>
				</p>
			</div>
			<div>
				<p style="text-align: center;">©️ 2024 by Carnegie Poker Club - All Rights Reserved</p>
			</div>
			<div>
				<p style="text-align: right;">
					Website by <a href="https://github.com/Agnimandur" target="_blank">Shiva Oswal</a>
				</p>
			</div>
		</div>
	</div>
</footer>

<style>
	:global(:root) {
		font-family: 'M PLUS Rounded 1c', sans-serif;
		--white: #ffffff;
		--black: #000000;
		--off-black: #0a0202;
		--dark-gray: rgb(53, 53, 53);
		--darker-gray: rgb(34, 34, 34);
		--primary: #bc0001;
		--primary-light-tint: #d84e4e;
		--primary-dark: #2b0303;
		--primary-light: #f7c1c1;
		--primary-black-gradient: radial-gradient(#2b0303, #0a0202);
		--bronze: #cd7f32;
		--silver: #c0c0c0;
		--gold: #ffd700;
		--platinum: #cce5ff;
	}

	footer {
		width: 100%;
		background-color: var(--darker-gray);
	}

	.rowFooter {
		display: grid;
		grid-template-columns: 55% 20% 27.5%;
		padding: 10px;
	}

	.rowThree {
		display: grid;
		grid-template-columns: 33.3% 33.3% 33.3%;
	}

	@media only screen and (max-width: 700px) {
		.rowFooter,
		.rowThree {
			grid-template-columns: auto;
		}
	}

	.rowFooter .col {
		padding: 10px;
	}

	footer p,
	footer h4 {
		color: var(--white);
		margin: 0;
		padding: 2px;
	}

	footer h4 {
		font-weight: 600;
	}

	footer a {
		color: var(--white);
		opacity: 0.9;
		text-decoration: none;
	}

	footer a:hover {
		text-decoration: underline;
	}

	footer .bottomSection {
		background-color: var(--off-black);
		padding: 10px;
	}

	p {
		font-size: 14px;
		opacity: 0.6;
	}
</style>
