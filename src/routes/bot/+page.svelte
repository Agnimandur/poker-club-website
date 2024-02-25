<script type="javascript">
    import { onMount } from "svelte";
    import * as Ably from "ably";

    let tournament = null;

    onMount(() => {
        const ably = new Ably.Realtime({ key: '-3RqkQ.kJK_GA:22iwzIiUwfQ_sL1ga-jp2OpbWBSQShDU3R-XnKO9RIY' });    

        tournament = ably.channels.get("tournament",{params: {rewind: '1'}});
        tournament.subscribe(msg => changeDOM(msg));

        return () => {
            tournament.unsubscribe(tournament);
            tournament.detach();
        };
    });

    function changeDOM(msg) {
        Object.entries(msg.data).forEach(([key, value]) => {
            var elem = document.getElementById(key);
            elem.value = value;
        });
    }

    function fetchLocal() {
        const seats = document.querySelectorAll('input[type=text]');
        var keys = Object.values(seats).map((seat) => seat.id);
        var values = Object.values(seats).map((seat) => seat.value);
        
        var result = {};
        keys.forEach((key, i) => {result[key] = values[i]});
        return result;
    }

    function add(seat_id) {
        var andrew = document.getElementById(seat_id).value;
        var result = fetchLocal();
        result[seat_id] = andrew;
        tournament.publish("add",result);
        alert(andrew + " was added to " + seat_id);
    }

    function bust(seat_id) {
        var result = fetchLocal();
        result[seat_id] = "";
        tournament.publish("bust",result);
    }

    function table_break(dealer_id) {
        var table = dealer_id.split(':')[0];
        var result = fetchLocal();
        var players = [];
        for (var key of Object.keys(result)) {
            if (key.split(':')[0] == table && result[key].length > 0) {
                if (key != dealer_id) players.push(result[key]);
                result[key] = "";
            }
        }
        
        for (var player of players) {
            var seat_id = random_low_seat(result);
            if (seat_id.length > 0) {
                result[seat_id] = player;
                console.log("player " + player + " was added to " + seat_id);
            }
        }
        tournament.publish("break",result);
    }

    function search() {
        var andrew = document.getElementById("site-search").value;
        const seats = document.querySelectorAll('input[type=text]');
        var keys = Object.values(seats).map((seat) => seat.id);
        var values = Object.values(seats).map((seat) => seat.value);
        var i = values.indexOf(andrew);
        if (i >= 0) {
            alert(andrew + " is in " + keys[i]);
        } else {
            alert(andrew + " is not in the tournament!");
        }
    }

    function random_low_seat(seats) {
        var available = {};
        for (var key in seats) {
            if (key.split(':')[1] == "seat0" && seats[key].length > 0) {
                var table = key.split(':')[0];
                available[table] = 0;
            }
        }
        
        var ava = false;
        for (var key in seats) {
            var table = key.split(':')[0];
            var active = Object.keys(available);
            if (key.split(':')[1] != "seat0" && active.includes(table) && seats[key].length == 0) {
                available[table] += 1;
                ava = true;
            }
        }

        if (ava == false) {
            alert("NO AVAILABLE DEALERS");
            return "";
        }

        var m = Math.max(...Object.values(available));
        var cands = [];
        for (var key in seats) {
            var table = key.split(':')[0];
            if (table in available && available[table] == m && seats[key].length == 0) {
                cands.push(key);
            }
        }
        if (cands.length == 0) {
            alert("NO AVAILABLE SEATS");
            return "";
        }
        const random = Math.floor(Math.random() * cands.length);
        return cands[random];
    }

    function random_add() {
        var andrew = document.getElementById("random-add").value;
        var seats = fetchLocal();
        var seat_id = random_low_seat(seats);
        if (seat_id.length > 0) {
            seats[seat_id] = andrew;
            tournament.publish("add",seats);
            alert(andrew + " was added to " + seat_id);
        }
    }

    let seat_nums = [1,2,3,4,5,6,7,9];
</script>

<div class="section">
    <label for="site-search">Search the tournament:</label>
    <input type="search" id="site-search"/>
    <button class="deal" on:click={search}>Search</button>

    <label for="random-add">Randomly Add a Player:</label>
    <input type="search" id="random-add"/>
    <button class="deal" on:click={random_add}>Add</button>
</div>

<div class="row">
    {#each [1,2,3,4] as t}
        <div class="section column">
            <h4>Table {t}</h4>

            <label for="table{t}:seat0">Dealer:</label>
            <input type="text" id="table{t}:seat0" size="13" />
            <button class="deal" on:click={() => add("table" + t + ":seat0")}>Deal</button>
            <button class="break" on:click={() => table_break("table" + t + ":seat0")}>Break</button>
            <br/>
            <br/>
            {#each seat_nums as s}
                <label for="table{t}:seat{s}">Seat {s}:</label>
                <input type="text" id="table{t}:seat{s}" size="13" />
                <button class="add" on:click={() => add("table" + t + ":seat" + s)}>Add</button>
                <button class="bust" on:click={() => bust("table" + t + ":seat" + s)}>Bust</button>
                <br/>
            {/each}
        </div>
    {/each}
</div>
<div class="row">
    {#each [5,6,7,8] as t}
        <div class="section column">
            <h4>Table {t}</h4>

            <label for="table{t}:seat0">Dealer:</label>
            <input type="text" id="table{t}:seat0" size="13" />
            <button class="deal" on:click={() => add("table" + t + ":seat0")}>Deal</button>
            <button class="break" on:click={() => table_break("table" + t + ":seat0")}>Break</button>
            <br/>
            <br/>
            {#each seat_nums as s}
                <label for="table{t}:seat{s}">Seat {s}:</label>
                <input type="text" id="table{t}:seat{s}" size="13" />
                <button class="add" on:click={() => add("table" + t + ":seat" + s)}>Add</button>
                <button class="bust" on:click={() => bust("table" + t + ":seat" + s)}>Bust</button>
                <br/>
            {/each}
        </div>
    {/each}
</div>
<div class="row">
    {#each [9,10,11,12] as t}
        <div class="section column">
            <h4>Table {t}</h4>

            <label for="table{t}:seat0">Dealer:</label>
            <input type="text" id="table{t}:seat0" size="13" />
            <button class="deal" on:click={() => add("table" + t + ":seat0")}>Deal</button>
            <button class="break" on:click={() => table_break("table" + t + ":seat0")}>Break</button>
            <br/>
            <br/>
            {#each seat_nums as s}
                <label for="table{t}:seat{s}">Seat {s}:</label>
                <input type="text" id="table{t}:seat{s}" size="13" />
                <button class="add" on:click={() => add("table" + t + ":seat" + s)}>Add</button>
                <button class="bust" on:click={() => bust("table" + t + ":seat" + s)}>Bust</button>
                <br/>
            {/each}
        </div>
    {/each}
</div>
<div class="row">
    {#each [13,14,15,16] as t}
        <div class="section column">
            <h4>Table {t}</h4>

            <label for="table{t}:seat0">Dealer:</label>
            <input type="text" id="table{t}:seat0" size="13" />
            <button class="deal" on:click={() => add("table" + t + ":seat0")}>Deal</button>
            <button class="break" on:click={() => table_break("table" + t + ":seat0")}>Break</button>
            <br/>
            <br/>
            {#each seat_nums as s}
                <label for="table{t}:seat{s}">Seat {s}:</label>
                <input type="text" id="table{t}:seat{s}" size="13" />
                <button class="add" on:click={() => add("table" + t + ":seat" + s)}>Add</button>
                <button class="bust" on:click={() => bust("table" + t + ":seat" + s)}>Bust</button>
                <br/>
            {/each}
        </div>
    {/each}
</div>



<style>
    .bust {
        display: inline-block;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        outline: none;
        color: #fff;
        background-color: red;
    }

    .add {
        display: inline-block;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        outline: none;
    }

    .break {
        display: inline-block;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        outline: none;
        color: #fff;
        background-color: red;
    }

    .deal {
        display: inline-block;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        outline: none;
        background-color: silver;
    }

    /* Container for flexboxes */
    .row {
        display: flex;
        flex-wrap: wrap;
    }

    /* Create four equal columns */
    .column {
        flex: 25%;
        padding: 20px;
        box-sizing: border-box;
    }

    /* On screens that are 992px wide or less, go from four columns to two columns */
    @media screen and (max-width: 992px) {
        .column {
            flex: 50%;
        }
    }

    /* On screens that are 600px wide or less, make the columns stack on top of each other instead of next to each other */
    @media screen and (max-width: 600px) {
        .row {
            flex-direction: column;
        }
    }
</style>