const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
        <div class="footer-content">
              <img src="images/Logo.jpeg" class="logo" alt="">
              <div class="footer-ul-container">
                  <ul class="category">
                      <li class="category-title">Men</li>
                      <li><a href="#" class="footer-link">T-shirts</a></li>
                      <li><a href="#" class="footer-link">Shoes</a></li>
                      <li><a href="#" class="footer-link">Sweatshirts</a></li>
                      <li><a href="#" class="footer-link">Formals</a></li>
                      <li><a href="#" class="footer-link">Trousers</a></li>
                      <li><a href="#" class="footer-link">Shirts</a></li>
                      <li><a href="#" class="footer-link">Casuals</a></li>
                      <li><a href="#" class="footer-link">Jeans</a></li>
                      <li><a href="#" class="footer-link">Watches</a></li>
                      <li><a href="#" class="footer-link">Sports</a></li>
                  </ul>

                  <ul class="category">
                      <li class="category-title">Women</li>
                      <li><a href="#" class="footer-link">T-shirts</a></li>
                      <li><a href="#" class="footer-link">Sweatshirts</a></li>
                      <li><a href="#" class="footer-link">Shirts</a></li>
                      <li><a href="#" class="footer-link">Jeans</a></li>
                      <li><a href="#" class="footer-link">Trousers</a></li>
                      <li><a href="#" class="footer-link">Shoes</a></li>
                      <li><a href="#" class="footer-link">Casuals</a></li>
                      <li><a href="#" class="footer-link">Formals</a></li>
                      <li><a href="#" class="footer-link">Sports</a></li>
                      <li><a href="#" class="footer-link">Watches</a></li>
                  </ul>
              </div>

        </div>
        <p class="footer-credit"> Sales! & Top-Notch Threads! </p>

    `;
};

createFooter();