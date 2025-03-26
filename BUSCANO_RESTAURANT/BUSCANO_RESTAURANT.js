document.addEventListener("DOMContentLoaded", function () {
    const restaurantCards = document.querySelectorAll(".restaurant-card");
    const restaurantList = document.getElementById("restaurant-list");
    const detailsContainer = document.getElementById("restaurant-details");
    const detailsContent = document.getElementById("details-content");
    detailsContainer.classList.add('show'); // Add animation when showing details

  
    const restaurantDetails = {
      "Fresh Lumpia": {
        address: "The Legazpi Sunday market (corner of Legazpi St and Rufino St)",
        phone: "(555) 123-4567",
        category: "Vegetables",
        hours: "11 AM - 11 PM",
        price: "PHP 100",
        description: "The fresh version of lumpia is a bit like a spring roll crossed with a burrito. On the side there’s a sweet sauce.",
        image: "lumpia.jpg"
      },
      "Lechon": {
        address: "Sabroso Lechon, one of my favourites (corner of E Rodriguez Ave and Tomas Morato)",
        phone: "490 24 6709",
        category: "Meat",
        hours: "5 PM - 10 PM",
        price: "PHP 200",
        description: "This juicy, crispy masterpiece is something I won’t even try to describe.",
        image: "lechon.jpg"
      },
      "Kare Kare": {
        address: "Most Filipino restaurants",
        phone: "(555) 555-1234",
        category: "Beef",
        hours: "12 PM - 10 PM",
        price: "PHP 100-200",
        description: "This is a classic Filipino stew, consisting of oxtail, tripe, eggplant and Chinese veges. It has a strong peanut flavour and is served with shrimp paste on the side.",
        image: "karekare.jpg"
      },
      "Crispy Pata": {
        address: "Kabila Museum Cafe at Ayala Museum",
        phone: "(555) 321-6789",
        category: "Meat",
        hours: "8 AM - 8 PM",
        price: "$$",
        description: "The crispy pata – a pork leg/knuckle deep fried to perfection and then sided with chili, calamansi and a variety of dipping sauces.",
        image: "crispypata.jpg"
      }
    };
  
    restaurantCards.forEach((card) => {
      card.addEventListener("click", function () {
        const restaurantName = card.getAttribute("data-name");
        const details = restaurantDetails[restaurantName];
  
        detailsContent.innerHTML = `
          <div class="d-flex border rounded shadow-lg overflow-hidden detail-box">
            <div class="col-md-5 position-relative">
              <img src="${details.image}" class="img-fluid h-100 w-100 object-fit-cover" alt="${restaurantName}">
              <div class="position-absolute top-50 start-0 bg-warning text-dark fw-bold py-2 px-3 vertical-text">
                ${restaurantName}
              </div>
            </div>
            <div class="col-md-7 p-4 bg-light">
              <h2 class="fw-bold text-danger">${restaurantName}</h2>
              <p><strong>Address:</strong> ${details.address}</p>
              <p><strong>Phone:</strong> ${details.phone}</p>
              <p><strong>Category:</strong> ${details.category}</p>
              <p><strong>Hours:</strong> ${details.hours}</p>
              <p><strong>Price:</strong> ${details.price}</p>
              <p>${details.description}</p>
            </div>
          </div>
        `;
        
        detailsContainer.style.display = "block";
      });
    });
  });
  
  // Hide details and show menu
  function hideDetails() {
    document.getElementById("restaurant-details").style.display = "none";
    function hideDetails() {
  detailsContainer.classList.remove('show'); // Remove animation class
  detailsContainer.style.display = "none";
}

  }
  
