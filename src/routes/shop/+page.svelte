<script>
  import NavBar from '$lib/components/NavBar.svelte';
</script>

<NavBar />

<br />
<br />
<br />
<br />
<br />

<h1 class="shop-title">CMU Poker Club Shop</h1>

<ul class="shop-list">
  <li class="box">
    <div class="image-container">
      <img src="/shop/hoodieT.png" alt="CMU Poker Club hoodie" />
      <div class="overlay">
        <div class="details">
          <p>Color: Black</p>
          <p>Material: Cotton/Polyester Blend</p>
          <p>Sizes: S, M, L, XL</p>
        </div>
      </div>
    </div>
    <h2>CMU Poker Club Hoodie</h2>
    <p>$150 ($90 with club membership)</p>
  </li>
  <li class="box">
    <div class="image-container">
      <img src="/shop/IMG_1064.jpg" alt="CMU Poker Club patch" />
      <div class="overlay">
        <div class="details">
          <p>Size: 4" x 1.74"</p>
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
      <img src="/shop/button.jpg" alt="CMU Poker Club dealer button" />
      <div class="overlay">
        <div class="details">
          <p>Diameter: 2.55"</p>
          <p>Thickness: 3/8"</p>
          <p>Material: Acrylic</p>
          <p>Perfect for home games</p>
        </div>
      </div>
    </div>
    <h2>CMU Poker Club Button</h2>
    <p>$10</p>
  </li>
</ul>

<style>
  .shop-title {
    text-align: center;
    font-size: 2.5em;
    margin-top: 20px;
    margin-bottom: 40px;
  }

  .shop-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0;
    margin: 0;
  }

  .box {
    list-style-type: none;
    border: 1px solid #aaa;
    border-radius: 4px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
    padding: 1em;
    width: 30%;
    margin-bottom: 20px;
    transition: transform 0.3s ease-in-out;
  }

  .box:hover {
    transform: translateY(-5px);
  }

  .image-container {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  .image-container img {
    width: 100%;
    height: auto;
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

  @media screen and (max-width: 768px) {
    .shop-list {
      flex-direction: column;
      align-items: center;
    }

    .box {
      width: 80%;
    }
  }
</style>
