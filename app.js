// items
const menu = [
    {
      id: 1,
      title: "Buttermilk Pancakes",
      category: "breakfast",
      price: 300,
      img: "item-1.jpeg",
      desc: `A pancake, also known as hotcake, griddlecake, or flapjack, is a flat cake, often thin and round.`,
    },
    {
      id: 2,
      title: "Diner Double",
      category: "lunch",
      price: 230,
      img: "item-2.jpeg",
      desc: `Tastes in food, menu items, and meal periods have changed dramatically over time.`,
    },
    {
      id: 3,
      title: "Fruit Milkshake",
      category: "shakes",
      price: 190,
      img: "item-3.jpeg",
      desc: `Milkshakes may be made from any flavor of ice cream; additional flavorings, such as chocolate syrup, malt syrup.`,
    },
    {
      id: 4,
      title: "Delight Sandwich",
      category: "breakfast",
      price: 200,
      img: "item-4.jpeg",
      desc: `A sandwich is a dish typically consisting of meat, cheese or vegetables used as a filling.`,
    },
    {
      id: 5,
      title: "Veg Burger",
      category: "lunch",
      price: 150,
      img: "item-5.jpeg",
      desc: `A veggie burger or meatless burger is a hamburger made with a patty that does not contain meat, or the patty of such a hamburger`,
    },
    {
      id: 6,
      title: "Oreo Dream",
      category: "shakes",
      price: 170,
      img: "item-6.jpeg",
      desc: `Oreos are an imitation of the Hydrox chocolate cream-centered cookie.`,
    },
    {
      id: 7,
      title: "Veggies Overflow",
      category: "breakfast",
      price: 400,
      img: "item-7.jpeg",
      desc: `The exact definition of "vegetable" may vary simply because of the many parts of a plant consumed as food worldwide.`,
    },
    {
      id: 8,
      title: "American Classic",
      category: "lunch",
      price: 540,
      img: "item-8.jpeg",
      desc: `Tastes in food, menu items, and meal periods have changed dramatically over time.`,
    },
    {
      id: 9,
      title: "Quarantine Buddy",
      category: "shakes",
      price: 210,
      img: "item-9.jpeg",
      desc: `Milkshakes may be made from any flavor of ice cream; additional flavorings, such as chocolate syrup, malt syrup.`,
    },
    {
      id: 10,
      title: "Steak Dinner",
      category: "dinner",
      price: 500,
      img: "item-10.jpeg",
      desc: `The divide between different meanings of "dinner" is not cut-and-dried based on either geography or socioeconomic class.`,
    },
  ];
  
  const sectionCenter = document.querySelector(".section-center");
  const container = document.querySelector(".btn-container");
  
  // load items
  window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
    displayMenuButtons();
  });
  
  function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      // console.log(item);
  
      return `<article class="menu-item">
            <img src=${item.img} class="photo" alt=${item.title} />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">Rs-${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
  
    sectionCenter.innerHTML = displayMenu;
  }
  
  function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button class="filter-btn" type="button" data-id=${category}>
        ${category}
        </button>`;
      })
      .join("");
    container.innerHTML = categoryBtns;
    const filterBtns = container.querySelectorAll(".filter-btn");
    // filter items
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
          // console.log(menuItem.category);
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        // console.log(menuCategory);
        if (category === "all") {
          displayMenuItems(menu);
        } else {
          displayMenuItems(menuCategory);
        }
      });
    });
  }