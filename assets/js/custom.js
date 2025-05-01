document.addEventListener("DOMContentLoaded", function () {
  // Sticky header functionality
  const header = document.querySelector(".header");
  const stickyClass = "sticky";
  const stickyPoint = header.offsetTop;

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > stickyPoint) {
      header.classList.add(stickyClass);
    } else {
      header.classList.remove(stickyClass);
    }
  });

  // Mobile navigation toggle
  const mobileNavToggles = document.querySelectorAll(".toggle-bars");
  const navbar = document.querySelector(".nav");

  mobileNavToggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      navbar.classList.toggle("active");
    });
  });

  // Back to top button
  const btn = document.querySelector("#button");
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  });

  btn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Enquiry form toggle
  const toggleButton = document.querySelector(".toggle");
  const sidebarContact = document.querySelector(".sidebar-contact");

  toggleButton.addEventListener("click", function () {
    sidebarContact.classList.toggle("active");
    toggleButton.classList.toggle("active");
  });
});

// Carousel (Using Owl Carousel)
(function () {
  "use strict";
  var carousels = function () {
    $(".owl-carousel1").owlCarousel({
      loop: true,
      autoplay: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        680: {
          items: 1,
          nav: false,
          loop: false,
        },
        1000: {
          items: 1,
          nav: true,
        },
      },
    });
  };

  $(document).ready(function () {
    carousels();
  });
})();
//About us page Carousel (Using Owl Carousel)
$(document).ready(function () {
  $(".owl-carousel-about").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});
//Special Features Carousel (Using Owl Carousel)
$(document).ready(function () {
  $(".owl-carousel-features").owlCarousel({
    loop: true,
    margin: 40,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});

//Special owl-carousel-international Carousel (Using Owl Carousel)
$(document).ready(function () {
  $(".owl-carousel-international").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});

//Special owl-carousel-capability Carousel (Using Owl Carousel)
$(document).ready(function () {
  $(".owl-carousel-capability").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
});
//Special owl-carousel-key-features Carousel (Using Owl Carousel)
$(document).ready(function () {
  $(".owl-carousel-key-features").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});
//Special owl-carousel-creative-designs Carousel (Using Owl Carousel)
$(document).ready(function () {
  $(".owl-carousel-creative-designs").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});

//Special owl-carousel-web development  Carousel (Using Owl Carousel)
$(document).ready(function () {
  $(".owl-carousel-web").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});

//Special owl-carousel-seo  Carousel (Using Owl Carousel)
$(document).ready(function () {
  $(".owl-carousel-seo").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});

// *************************************
// owl carousel for  'why join us'(earn.html)
// $(document).ready(function () {
//     $(".owl-carousel-earn").owlCarousel({
//         loop: false,
//         margin: 20,
//         nav: false,
//         dots: true,
//         autoplay: true,
//         autoplayTimeout: 1000,
//         responsive: {
//             0: {
//                 items: 1
//             },
//             600: {
//                 items: 2
//             },
//             1000: {
//                 items: 3
//             }
//         }
//     });
// });

$(document).ready(function () {
  $(".owl-carousel-earn").owlCarousel({
    loop: true,
    margin: 20,
    item:1,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});

$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });
});


// banner script
function animate() {
  // Find the currently checked element
  var checked = document.querySelector(".sliderSelection:checked");

  // Get the next element or loop back to the first one if it's null
  var next = checked ? checked.nextElementSibling : null;

  // Check if next is null or not an input, and loop back if needed
  if (!next || !next.classList.contains("sliderSelection")) {
    next = document.querySelector(".sliderSelection");
  }

  // Set the next slider/input to checked
  if (next) {
    next.checked = true;
  }

  // Recursively call animate() every 3 seconds
  window.setTimeout(animate, 3000);
}

window.onload = function () {
  animate();
};

// tabs script in e-commerce page
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll("#material-tabs a");
  let currentTab = 0;

  const showTab = (index) => {
    tabs[currentTab].classList.remove("active");
    document.querySelector(tabs[currentTab].hash).style.display = "none";
    currentTab = index;
    tabs[currentTab].classList.add("active");
    document.querySelector(tabs[currentTab].hash).style.display = "block";
  };

  // Hide all tabs except the first one initially
  tabs.forEach((tab, index) => {
    if (index !== currentTab) {
      document.querySelector(tab.hash).style.display = "none";
    }
  });

  // Event listeners for tab clicks
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", function (e) {
      e.preventDefault();
      showTab(index);
    });
  });

  // Left and right arrow functionality
  const leftArrow = document.getElementById("left-arrow");
  const rightArrow = document.getElementById("right-arrow");

  leftArrow.addEventListener("click", function () {
    const newIndex = currentTab > 0 ? currentTab - 1 : tabs.length - 1;
    showTab(newIndex);
  });

  rightArrow.addEventListener("click", function () {
    const newIndex = currentTab < tabs.length - 1 ? currentTab + 1 : 0;
    showTab(newIndex);
  });
});

// tabs script
// script.js
function showTab(tabId) {
  // Hide all tab contents
  document.querySelectorAll(".tab-body").forEach((content) => {
    content.style.display = "none";
  });

  // Remove active class from all tabs
  document.querySelectorAll(".tab-button").forEach((tab) => {
    tab.classList.remove("active-tab");
  });

  // Show the selected tab content and add active class to the tab
  document.getElementById(tabId).style.display = "block";
  document
    .querySelector(`.tab-button[onclick="showTab('${tabId}')"]`)
    .classList.add("active-tab");
}

// Show the first tab by default
document.getElementById("content1").style.display = "block";
