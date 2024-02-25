<script type="javascript">
    import Table from '$lib/components/Table.svelte'

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
</script>

<div class="section">
    <label for="site-search">Search the tournament:</label>
    <input type="search" id="site-search"/>
    <button on:click={search}>Search</button>
</div>

<Table t=1 />
<br/>
<br/>
<Table t=2 />
<br/>
<br/>
<Table t=3 />
<br/>
<br/>
<Table t=4 />
<br/>
<br/>
<Table t=5 />
<br/>
<br/>
<Table t=6 />
<br/>
<br/>
<Table t=7 />
<br/>
<br/>
<Table t=8 />
<br/>
<br/>
<Table t=9 />
<br/>
<br/>
<Table t=10 />
<br/>
<br/>
<Table t=11 />
<br/>
<br/>
<Table t=12 />
<br/>
<br/>
<Table t=13 />
<br/>
<br/>
<Table t=14 />
<br/>
<br/>
<Table t=15 />