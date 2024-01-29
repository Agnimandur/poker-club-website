<script lang="ts">
	import { Button } from 'carbon-components-svelte';
	export let title: string;
	export let action: any = () => {};
	export let href: string = '';
	export let kind: string = 'primary';
</script>

{#if href != ''}
	<Button
		{kind}
		class="button"
		size="small"
		{href}
		type="submit"
		style="width: 30em; margin: 0; padding: 0;"
	>
		<p
			style="margin-left: auto; margin-right: auto; margin-top: auto; margin-bottom: auto; font-size: 1em;font-weight: 500;padding: 0;"
		>
			{title}
		</p>
	</Button>
{:else}
	<Button
		{kind}
		class="button"
		size="small"
		on:click={action}
		type="submit"
		style="width: 30em; border-radius: 2.5em; margin: 0; padding: 0;"
	>
		<p style="margin-left: auto; margin-right: auto; font-size: 1em;font-weight: 500;padding: 0;">
			{title}
		</p>
	</Button>
{/if}

<style>
	:global(.bx--btn--primary) {
		background-color: var(--primary);
		border: none;
		outline: none !important;
		box-shadow: none !important;
	}

	:global(.bx--btn--primary:hover) {
		background-color: var(--primary-light-tint);
	}

	:global(.bx--btn--primary:active),
	:global(.bx--btn--tertiary:active) {
		border: none;
		outline: none;
		box-shadow: none;
	}

	:global(.bx--btn--primary:active p) {
		text-decoration: underline;
	}

	:global(.bx--btn--tertiary) {
		border-color: white;
		color: white;
	}

	:global(.bx--btn--tertiary:hover) {
		background-color: var(--primary-light-tint);
	}
</style>
