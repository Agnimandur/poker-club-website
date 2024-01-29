<script lang="ts">
	import { Button } from 'carbon-components-svelte';
	export let title: string;
	export let href: string;
</script>

<div class="fancyButton">
	<Button kind="tertiary" class="button" size="small" {href} type="submit">
		<p
			style="margin-left: auto; margin-right: auto; margin-top: auto; margin-bottom: auto; font-size: 1em;font-weight: 500;padding: 0;"
			class="effect effect-1"
		>
			{title}
		</p>
	</Button>
</div>

<style>
	:global(.fancyButton .bx--btn--tertiary) {
		border-color: var(--primary);
		color: var(--primary);
		margin: 0;
		padding: 0;
		width: 100%;
	}

	:global(.fancyButton .bx--btn--tertiary:active) {
		border: none;
		outline: none;
		box-shadow: none;
	}

	:global(.fancyButton .bx--btn--tertiary:hover) {
		background-color: var(--primary-light-tint);
		color: var(--white);
	}

	.effect {
		text-align: center;
		display: inline-block;
		position: relative;
		text-decoration: none;
		text-transform: capitalize;
		size: 18px;
		padding: 20px 0px;
		width: 80%;
		overflow: hidden;
	}

	/* effect-1 styles */

	.effect.effect-1 {
		transition: all 0.2s linear 0s;
	}

	.effect.effect-1:before {
		content: '\f178';
		font-family: FontAwesome;
		font-size: 15px;
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		right: 0;
		top: 0;
		opacity: 0;
		height: 100%;
		width: 40px;
		transition: all 0.2s linear 0s;
	}

	.effect.effect-1:hover {
		text-indent: -20px;
	}

	.effect.effect-1:hover:before {
		opacity: 1;
		text-indent: 0px;
	}
</style>
