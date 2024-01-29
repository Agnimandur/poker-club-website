<script lang="ts">
	import Title from '$lib/components/Title.svelte';
	import FullCalendar, { type CalendarOptions } from 'svelte-fullcalendar';
	import daygridPlugin from '@fullcalendar/daygrid';

	import {events} from "$lib/langs/events.js"
  
	let options: CalendarOptions = {
	  initialView: 'dayGridMonth',
	  height: 'auto',
	  timeZone: 'local',
	  events: events,
	  plugins: [daygridPlugin]
	};
  </script>

<Title
	title="EVENTS"
	description="CMU Poker Club runs an exciting array of events!"
/>
<br/>
<div style="margin: 20px">
	<FullCalendar {options} />
</div>