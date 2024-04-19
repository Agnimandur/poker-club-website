<script>
  import NavBar from '$lib/components/NavBar.svelte';

  // Set the fixed end date and time (YYYY, MM, DD, HH, MM, SS)
  const endDate = new Date(2024, 3, 26, 19, 59, 59);

  let timeRemaining = '';

  function updateTimeRemaining() {
    let now = new Date().getTime();
    let distance = endDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timeRemaining = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  setInterval(updateTimeRemaining, 1000);
</script>

<NavBar />

<br />
<br />
<br />
<br />
<br />

<h1 class="shop-title">CMU Poker Club Shop</h1>
<p class="purchase-info">To purchase, use the <a href="/contact">contact form</a> or contact any exec!</p>
<p class="sale-timer">LAUNCH WEEK SALE: Hoodies are now $75 with club membership<br>
Dealer Buttons now $10 <br>
Hoodies also come with your choice of black or white patch<br>
Ends In: {timeRemaining}</p>

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
    <p>$150 (<s>$90</s> $75 with club membership)</p>
  </li>
  <li class="box">
    <div class="image-container">
      <img src="/shop/patchT.png" alt="CMU Poker Club patch" class="slideshow-image" />
      <img src="/shop/patch2.png" alt="CMU Poker Club patch" class="slideshow-image" />
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
    <p>$3 (included with hoodie purchase)</p>
  </li>
  <li class="box">
    <div class="image-container">
      <img src="/shop/button.jpg" alt="CMU Poker Club dealer button" class="slideshow-image" />
      <img src="/shop/Button2.jpg" alt="CMU Poker Club dealer button" class="slideshow-image" />
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
    <p><s>$15</s> $10</p>
  </li>
</ul>

<style>
  .shop-title {
    text-align: center;
    font-size: 2.5em;
    margin-top: 20px;
    margin-bottom: 40px;
  }

  .sale-timer {
    text-align: center;
    font-size: 2.0em;
    margin-top: -30px;
    margin-bottom: 10px;
    color: #C41230;
  }

  .purchase-info {
    text-align: center;
    font-size: 1.1em;
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
