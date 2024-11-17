document.addEventListener("DOMContentLoaded", () => {
  const carCardsContainer = document.getElementById("car-cards-container");
  const filters = {
    yearMin: null,
    yearMax: null,
    make: null,
    mileage: null,
    price: null,
    color: null,
  };


  // Function to display car cards
  function displayCars(cars) {
    carCardsContainer.innerHTML = "";
    cars.forEach((car) => {
      const card = document.createElement("div");
      card.classList.add("car-card");

      card.innerHTML = `
        <h3>${car.make} ${car.model} (${car.year})</h3>
        <p>Price: $${car.price}</p>
        <p>Mileage: ${car.mileage} miles</p>
        <p>Color: ${car.color}</p>
        <p>Gas Mileage: ${car.gasMileage}</p>
      `;

      carCardsContainer.appendChild(card);
    });
  }

  displayCars(usedCars);

  // Function to apply filters
  function applyFilters() {
    let filteredCars = usedCars;

    // Year Filter
    if (filters.yearMin) {
      filteredCars = filteredCars.filter((car) => car.year >= filters.yearMin);
    }
    if (filters.yearMax) {
      filteredCars = filteredCars.filter((car) => car.year <= filters.yearMax);
    }

    // Make Filter
    if (filters.make) {
      filteredCars = filteredCars.filter((car) => car.make === filters.make);
    }

    // Mileage Filter
    if (filters.mileage) {
      filteredCars = filteredCars.filter(
        (car) => car.mileage <= filters.mileage
      );
    }

    // Price Filter
    if (filters.price) {
      filteredCars = filteredCars.filter((car) => car.price <= filters.price);
    }

    // Color Filter
    if (filters.color) {
      filteredCars = filteredCars.filter((car) => car.color === filters.color);
    }

    displayCars(filteredCars);
  }

  document.querySelectorAll('input[type="radio"]').forEach((input) => {
    input.addEventListener("change", () => {
      if (input.name === "year") {
        if (input.id.includes("min")) {
          filters.yearMin = parseInt(input.value);
        } else if (input.id.includes("max")) {
          filters.yearMax = parseInt(input.value);
        }
      } else if (input.name === "make") {
        filters.make = input.value;
      } else if (input.name === "max-mileage") {
        filters.mileage = parseInt(input.value);
      } else if (input.name === "price") {
        filters.price = parseInt(input.value);
      } else if (input.name === "color") {
        filters.color = input.value;
      }

      applyFilters();
    });
  });
});
