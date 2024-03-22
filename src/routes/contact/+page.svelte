<script>
    import NavBar from '$lib/components/NavBar.svelte';

    let status = "";
    const handleSubmit = async data => {
        status = 'Submitting...'
        const formData = new FormData(data.currentTarget)
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
            status = result.message || "Success"
        }
    }
</script>

<NavBar />
<br />
<br />
<br />
<br />
<br />
<div class="section">
	<h2 style="text-align: center;">Contact Information</h2>
	<div class="flex"><div style="width: 50%;"><hr /></div></div>
    <p>For inquiries regarding sponsorships, events, tournaments, membership, or anything else, please contact us at <a href="mailto:pokerclub@andrew.cmu.edu">pokerclub@andrew.cmu.edu</a> or fill out the form below.</p>
</div>

<div class="section">
    <form on:submit|preventDefault={handleSubmit}>
        <input type="hidden" name="access_key" value="90a0899f-a54c-4dd6-873a-ca6f707cf4b9
        ">
        <div style="display:inline-block;">
            <label>
                Name
                <input type="text" name="name" required />
            </label>
        </div>
        <br/>
        <div style="display:inline-block;">
            <label>
                Email
                <input type="email" name="email" required />
            </label>
        </div>
        <br/>
        <div style="display:inline-block;">
            <label>
                Subject
                <input type="text" name="subject" required />
            </label>
        </div>
        <br/>
        <div style="display:inline-block;">
            <label>
                Message Us!
                <textarea name="message" required rows="3" cols="50"></textarea>
            </label>
        </div>
        
        <input id="sponsorbutton" type="submit" />
    </form>
    
    <div>{status}</div>
</div>

<style>
    input,
    textarea {
    font-family: inherit;
    font-size: inherit;
    max-width: 400px;
    width: 100%;
    padding: 12px;
    box-sizing: border-box;
    border: 1px solid var(--grey);
    border-radius: 4px;
    transition: all 150ms ease;
    background: var(--white);
    }
    input:focus,
    textarea:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgb(227, 227, 245);
    border-color: var(--grey);
    }

    input:disabled,
    textarea:disabled {
    color: #ccc;
    }

    #sponsorbutton {
    color: #fff;
    background-color: var(--primary);
    border: none;
    text-transform: uppercase;
    letter-spacing: 1.8px;
    outline: none;
    border-radius: 4px;
    display: block;
    margin-top: 12px;
    line-height: 1.8;
    font-size: 12px;
    padding: 10px 18px;
    min-width: 120px;
    transition: all 150ms ease;
    cursor: pointer;
    }

    label {
    display: block;
    color: var(--grey-dark);
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 4px;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 1.9px;
    line-height: 2;
    }
</style>