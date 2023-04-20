// Footer
const footer = document.getElementById("footer");
footer.innerHTML = showFooter();

function showFooter() {
  return `<div class="container-fluid footer">
            <div class="row justify-content-center">
              <div class="col-12 text-center footer-content">
                <div class="footer-title text-white">
                  <h1 class="fw-bold">MilanoCafe.</h1>
                  <ul class="list-unstyled text-uppercase">
                    <li>open from 07:00 AM - 11:00 PM</li>
                    <li class="mb-3">Bali - Arcade</li>
                  </ul>
                  <span class="me-3"><i class="fa-brands fa-instagram"></i> MilanoCafe</span>
                  <span><i class="fa-brands fa-whatsapp"></i> +6281234567</span>
                </div>
              </div>
            </div>
            <div class="text-footer text-white text-center">
              <p class="m-0 ml-5">
                Created with by Srabon</a> © 2022 Copyright | All Rights Reserved
              </p>
            </div>
          </div>`;
}

