<script type="javascript">
    import Ably from 'ably';
    const ably = new Ably.Realtime({ key: '-3RqkQ.kJK_GA:22iwzIiUwfQ_sL1ga-jp2OpbWBSQShDU3R-XnKO9RIY' });
    var tournament = ably.channels.get('tournament');
    ably.channels.get('tournament', {
        params: {rewind: '1'}
    }).subscribe(msg => changeDOM(msg));

    var T = 1;
    var S = 1;

    function changeDOM(msg) {
        console.log(msg);

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
        console.log(seat_id);
        var andrew = document.getElementById(seat_id).value;
        var result = fetchLocal();
        result[seat_id] = andrew;
        tournament.publish("add",result);
        alert(andrew + " was added to " + seat_id);
    }

    function bust(seat_id) {
        console.log(seat_id);
        var result = fetchLocal();
        result[seat_id] = "";
        tournament.publish("bust",result);
    }

    export let t;
</script>

<div class="section">
    <h4>Table {t}</h4>
    <label for="t{t}s1">Seat 1:</label>
    <input type="text" id="t{t}s1" size="13" />
    <button class="add" on:click={() => add("t" + t + "s1")}>Add</button>
    <button class="bust" on:click={() => bust("t" + t + "s1")}>Bust</button>
    
    <br/>
    <br/>

    <label for="t{t}s2">Seat 2:</label>
    <input type="text" id="t{t}s2" size="13" />
    <button class="add" on:click={() => add("t" + t + "s2")}>Add</button>
    <button class="bust" on:click={() => bust("t" + t + "s2")}>Bust</button>

    <br/>
    <br/>

    <label for="t{t}s3">Seat 3:</label>
    <input type="text" id="t{t}s3" size="13" />
    <button class="add" on:click={() => add("t" + t + "s3")}>Add</button>
    <button class="bust" on:click={() => bust("t" + t + "s3")}>Bust</button>

    <br/>
    <br/>

    <label for="t{t}s4">Seat 4:</label>
    <input type="text" id="t{t}s4" size="13" />
    <button class="add" on:click={() => add("t" + t + "s4")}>Add</button>
    <button class="bust" on:click={() => bust("t" + t + "s4")}>Bust</button>

    <br/>
    <br/>

    <label for="t{t}s5">Seat 5:</label>
    <input type="text" id="t{t}s5" size="13" />
    <button class="add" on:click={() => add("t" + t + "s5")}>Add</button>
    <button class="bust" on:click={() => bust("t" + t + "s5")}>Bust</button>

    <br/>
    <br/>

    <label for="t{t}s6">Seat 6:</label>
    <input type="text" id="t{t}s6" size="13" />
    <button class="add" on:click={() => add("t" + t + "s6")}>Add</button>
    <button class="bust" on:click={() => bust("t" + t + "s6")}>Bust</button>

    <br/>
    <br/>

    <label for="t{t}s7">Seat 7:</label>
    <input type="text" id="t{t}s7" size="13" />
    <button class="add" on:click={() => add("t" + t + "s7")}>Add</button>
    <button class="bust" on:click={() => bust("t" + t + "s7")}>Bust</button>

    <br/>
    <br/>

    <label for="t{t}s8">Seat 8:</label>
    <input type="text" id="t{t}s8" size="13" />
    <button class="add" on:click={() => add("t" + t + "s8")}>Add</button>
    <button class="bust" on:click={() => bust("t" + t + "s8")}>Bust</button>

    <br/>
    <br/>

    <label for="t{t}s9">Seat 9:</label>
    <input type="text" id="t{t}s9" size="13" />
    <button class="add" on:click={() => add("t" + t + "s9")}>Add</button>
    <button class="bust" on:click={() => bust("t" + t + "s9")}>Bust</button>
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
</style>