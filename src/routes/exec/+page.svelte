<script>
	import NavBar from '$lib/components/NavBar.svelte';
	import execs from "$lib/langs/execs.json";
	import alums from "$lib/langs/alums.json";
	let exec_entries = Object.entries(execs);
	let alum_entries = Object.entries(alums);
</script>

<NavBar />
<br/>
<br/>
<br/>
<br/>
<div class="section">
	<h2 style="text-align: center;">Exec Board</h2>
	<div class="flex"><div style="width: 50%;"><hr /></div></div>
	<ol>
		{#each exec_entries as [name,exec]}
			<li>
				<h3 style="display:inline-block;">
					<img src="/execs/{exec.id}.png" style="width:20%; vertical-align:middle; border-radius: 30%;" alt="Exec" /> 
					{name}
					<a target="_blank" rel="noreferrer" href={exec.linkedin}><i class="fa-brands fa-linkedin" style="color: #0a66c2;"></i></a>
				</h3>
				<p>{exec.description}</p>
			</li>
		{/each}
	</ol>
</div>

<div class="section">
	<h2 style="text-align: center;">Alumni</h2>
	<div class="flex"><div style="width: 50%;"><hr /></div></div>
	<ol>
		{#each alum_entries as [name,alum]}
			<li>
				<h3 style="display:inline-block;">
					<img src="/alums/{alum.id}.png" style="width:20%; vertical-align:middle; border-radius: 30%;" alt="Alumni Exec" /> 
					{name}
					{#if alum.linkedin}
						<a target="_blank" rel="noreferrer" href={alum.linkedin}>
							<i class="fa-brands fa-linkedin" style="color: #0a66c2;"></i>
						</a>
					{/if}
				</h3>
				<p>{alum.description}</p>
			</li>
		{/each}
	</ol>
</div>
<style>
	* {
		box-sizing: border-box;
	}

	p {
		margin: 0;
		line-height: 1.6;
	}

	ol {
		list-style: none;
		counter-reset: list;
		padding: 0 1rem;
	}

	li {
		--stop: calc(100% / var(--length) * var(--i));
		--l: 62%;
		--l2: 88%;
		--h: calc((var(--i) - 1) * (180 / var(--length)));
		--c1: hsl(var(--h), 71%, var(--l));
		--c2: hsl(var(--h), 71%, var(--l2));
		
		position: relative;
		counter-increment: list;
		max-width: 45rem;
		margin: 2rem auto;
		padding: 2rem 1rem 1rem;
		box-shadow: 0.1rem 0.1rem 1.5rem rgba(0, 0, 0, 0.3);
		border-radius: 0.25rem;
		overflow: hidden;
		background-color: white;
	}

	h3 {
		display: flex;
		align-items: baseline;
		margin: 0 0 1rem;
		color: rgb(70 70 70);
	}

	@media (min-width: 40em) {
		li {
			margin: 3rem auto;
			padding: 3rem 2rem 2rem;
		}
		
		h3 {
			font-size: 2.25rem;
			margin: 0 0 2rem;
		}
		
		h3::before {
			margin-right: 1.5rem;
		}
	}
</style>
