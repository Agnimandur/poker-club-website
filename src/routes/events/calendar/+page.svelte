<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';
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

<NavBar />
<br/>
<br/>
<br/>
<br/>

<div style="margin: 20px">
	<FullCalendar {options} />
</div>