<script>
  import NavBar from '$lib/components/NavBar.svelte';
</script>

<NavBar />

<br />
<br />
<br />
<br />
<br />

<div class="section">
	<h2 style="text-align: center;">Merch Store</h2>
	<div class="flex"><div style="width: 50%;"><hr /></div></div>
  <h3 style="text-align: center;">To purchase, use the <a href="/contact">contact form</a> or contact any exec!</h3>
  <br />
  <br />
  <ul class="shop-list">
    <li class="box">
      <div class="image-container">
        <img src="/shop/hoodieT.png" alt="CMU Poker Club hoodie" class="slideshow-image" />
        <img src="/shop/Hoodie2.png" alt="CMU Poker Club hoodie" class="slideshow-image" />
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
        <img src="/shop/patch2.png" alt="CMU Poker Club patch" class="slideshow-image" />
        <img src="/shop/patchT.png" alt="CMU Poker Club patch" class="slideshow-image" />
        <div class="overlay">
          <div class="details">
            <p>Size: 4" x 1.74"</p>
            <p>Color: Black, White</p>
            <p>Material: Embroidered</p>
            <p>Adhesive Backing</p>
          </div>
        </div>
      </div>
      <h2>CMU Poker Club Patch</h2>
      <p>$3</p>
    </li>
    <li class="box">
      <div class="image-container">
        <img src="/shop/Button2.jpg" alt="CMU Poker Club dealer button" class="slideshow-image" />
        <img src="/shop/button.jpg" alt="CMU Poker Club dealer button" class="slideshow-image" />
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
      <p>$15</p>
    </li>
  </ul>
</div>
<style>
  .title-container {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
  }

  .title-box {
    display: inline-block;
    border: 4px solid #C41230;
    background-color: #1a1a1a;
    padding: 20px;
    text-align: center;
  }
  .shop-title {
    font-size: 2.5em;
    color: white;
    font-weight: bold;
    margin: 0;
  }

  .purchase-info {
    font-size: 1.1em;
    color: white;
    margin: 0;
    margin-top: 10px;
  }

  .purchase-info a {
    color: white;
    text-decoration: underline;
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
    width: 100%;
    padding-top: 100%;
    overflow: hidden;
  }

  .slideshow-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    animation: slideshow 6s infinite;
  }

  .slideshow-image:nth-child(2) {
    animation-delay: 3s;
  }

  @keyframes slideshow {
    0%, 100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
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
