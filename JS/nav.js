const createNav = () => {
    let nav = document.querySelector('.navbar');


nav.innerHTML = `
          <div class="nav">
              <img src="images/Logo.jpeg" class="brand-logo" alt="LOGO IMAGE LOADING">
              <div class="search">
                  <input type="text" class="search-box" placeholder="Search product...">
                  <button class="search-btn">search</button>
              </div>
              <a class="nav-items" href="#"><img src="images/user.png" alt="user image"></a>
              <a class="nav-items" href="#"><img src="images/cart.png" alt="cart image"></a>              
          </div>

          <ul class="links-container">
              <li class="link-item"><a href="index.html" class="link">Home</a></li>
              <li class="link-item"><a href="product.html" class="link">Women</a></li>
              <li class="link-item"><a href="product.html" class="link">Men</a></li>
              <li class="link-item"><a href="search.html" class="link">Accessories</a></li>
              <li class="link-item"><a href="search.html" class="link">New Collection</a></li>

          </ul> 
`;
}

createNav();