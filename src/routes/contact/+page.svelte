<script>
    import NavBar from '$lib/components/NavBar.svelte';
  
    let status = "";
  
    const handleSubmit = async (data) => {
      status = 'Submitting...';
      const formData = new FormData(data.currentTarget);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
  
      const result = await response.json();
      if (result.success) {
        console.log(result);
        status = result.message || "Success";
      }
    };
  </script>
  
  <NavBar />
  
  <br />
  <br />
  <br />
  <br />
  <br />
  
  <div class="section">
    <h2 style="text-align: center;">Contact Us</h2>
    <div class="flex"><div style="width: 50%;"><hr /></div></div>
    
    <div class="form-container">
      <form on:submit|preventDefault={handleSubmit}>
        <input type="hidden" name="access_key" value="331e8a60-b227-49e0-be79-8c3b5136882a" />
        <div class="input-container">
          <label>
            Name
            <input type="text" name="name" required />
          </label>
        </div>
        <div class="input-container">
          <label>
            Email
            <input type="email" name="email" required />
          </label>
        </div>
        <div class="input-container">
          <label>
            Subject
            <input type="text" name="subject" required />
          </label>
        </div>
        <div class="input-container">
          <label>
            Message Us!
            <textarea
              name="message"
              required
              rows="3"
              placeholder="For inquiries regarding sponsorships, events, tournaments, membership, or anything else."
            ></textarea>
          </label>
        </div>
        <div class="button-container">
          <input id="sponsorbutton" type="submit" />
        </div>
      </form>
      <div>{status}</div>
    </div>
  </div>
  
  <style>
    input,
    textarea {
      font-family: inherit;
      font-size: inherit;
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
  
    .form-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  
    .input-container {
      width: 400px;
      margin-bottom: 20px;
    }
  
    .button-container {
      display: flex;
      justify-content: center;
    }
  
    @media (max-width: 600px) {
      .input-container {
        width: 100%;
      }
    }
  </style>