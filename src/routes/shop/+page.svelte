<script>
  import NavBar from '$lib/components/NavBar.svelte';
</script>

<NavBar />

<br />
<br />
<br />
<br />
<br />
<br />

<ul>
  <li class="box">
    <div class="image-container">
      <img src="/shop/hoodieT.png" alt="CMU Poker Club hoodie" width="300px" />
      <div class="overlay">
        <div class="details">
          <p>Color: Black</p>
          <p>Material: 100% Cotton</p>
          <p>Sizes: S, M, L, XL</p>
        </div>
      </div>
    </div>
    <h2>CMU Poker Club Hoodie</h2>
    <p>$150 ($90 with club membership)</p>
  </li>
  <li class="box">
    <div class="image-container">
      <img src="/shop/patchT.png" alt="CMU Poker Club patch" width="300px" height="100px" />
      <div class="overlay">
        <div class="details">
          <p>Size: 3" x 2"</p>
          <p>Material: Embroidered</p>
          <p>Adhesive Backing</p>
        </div>
      </div>
    </div>
    <h2>CMU Poker Club Patch</h2>
    <p>$3 (included with hoodie purchase)</p>
  </li>
  <li class="box">
    <div class="image-container">
      <img src="/shop/button.jpg" alt="CMU Poker Club dealer button" width="300px" />
      <div class="overlay">
        <div class="details">
          <p>Diameter: 2"</p>
          <p>Material: Plastic</p>
          <p>Perfect for home games</p>
        </div>
      </div>
    </div>
    <h2>CMU Poker Club Button</h2>
    <p>$10</p>
  </li>
</ul>

<style>
  .box {
    list-style-type: none;
    display: inline-block;
    border: 1px solid #aaa;
    border-radius: 4px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
    padding: 1em;
    margin-right: 20px;
    margin-top: 20px;
    transition: transform 0.3s ease-in-out;
  }

  .box:hover {
    transform: translateY(-5px);
  }

  .image-container {
    position: relative;
    display: inline-block;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .image-container:hover .overlay {
    opacity: 1;
  }

  .details {
    text-align: center;
    line-height: 1.6;
  }

  h2 {
    margin-top: 10px;
    margin-bottom: 5px;
  }

  p {
    margin-top: 5px;
    margin-bottom: 10px;
  }
</style>
