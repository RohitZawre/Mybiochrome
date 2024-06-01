document.addEventListener("DOMContentLoaded", function() {
  let currentImageIndex = 0;
  const images = document.querySelectorAll('.hero-image');
  const navigationCircles = document.querySelectorAll('.navigation-circle');

  setInterval(() => {
    images[currentImageIndex].classList.remove('active');
    navigationCircles[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('active');
    navigationCircles[currentImageIndex].classList.add('active');
  }, 5000); // Change the duration (in milliseconds) between transitions as needed

  // Add click event listeners to navigation circles
  navigationCircles.forEach((circle, index) => {
    circle.addEventListener('click', () => {
      images[currentImageIndex].classList.remove('active');
      navigationCircles[currentImageIndex].classList.remove('active');
      currentImageIndex = index;
      images[currentImageIndex].classList.add('active');
      navigationCircles[currentImageIndex].classList.add('active');
    });
  });
});
 

/* for copy of div*/
/* var copy = document.querySelector(".logos-slide").cloneNode(true)
document.querySelector(".logos").appendChild(copy) */


/********************* For accordian Subproduct *********************/
    

/*
document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll(".accordion-header");

    headers.forEach(header => {
        header.addEventListener("click", () => {
            const isActive = header.classList.contains("active");
            const content = header.nextElementSibling;

            // Close all headers
            headers.forEach(h => {
                h.classList.remove("active");
                h.nextElementSibling.style.maxHeight = null;
                h.nextElementSibling.classList.remove("open");
            });

            // If not previously active, activate it
            if (!isActive) {
                header.classList.add("active");
                content.classList.add("open");
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});  */

document.addEventListener("DOMContentLoaded", function() {
    const headers = document.querySelectorAll(".accordion-header");
    headers.forEach(header => {
        header.addEventListener("click", function() {
            const isActive = this.classList.contains("active");

            // Close all accordion content
            headers.forEach(h => {
                h.classList.remove("active");
                h.nextElementSibling.style.maxHeight = null;
            });

            // Toggle the clicked one
            if (!isActive) {
                this.classList.add("active");
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + "px";
            }
        });
    });

    const subcategoryLinks = document.querySelectorAll(".accordion-item a");
    subcategoryLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const subcategory = this.getAttribute("data-subcategory");
            loadPage(`${subcategory}-page1`);
        });
    });

    function loadPage(page) {
        fetch(`content/${page}.html`)
            .then(response => response.text())
            .then(data => {
                document.getElementById("product-section").innerHTML = data;
                const paginationLinks = document.querySelectorAll(".pagination a");
                paginationLinks.forEach(link => {
                    link.addEventListener("click", function(event) {
                        event.preventDefault();
                        const newPage = this.getAttribute("data-page");
                        loadPage(newPage);
                    });
                });
            })
            .catch(error => {
                console.error('Error loading page:', error);
            });
    }
});






  