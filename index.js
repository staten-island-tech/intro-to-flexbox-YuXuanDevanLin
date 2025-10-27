const products = [
    

    {
        name: "Matcha Green Tea Pocky",
        price: 12.34,
        inStock: true, // or false
        brand: "Bing Ling Tea",
        src: "MatchaGreenTeaPocky.jpeg",
        alt: "Matcha Green Tea Pocky"
    },

    {
        name: "Leijinji Breadstick Cheese Flavor",
        price: 12.34,
        inStock: true, // or false
        brand: "Bing Ling Tea",
        src: "LeijinjiBreadstickCheeseFlavor.png",
        alt: "Leijinji Breadstick Cheese Flavor"
    },

    {
        name: "Orion Choco Pie",
        price: 12.34,
        inStock: true, // or false
        brand: "Bing Ling Tea",
        src: "OrionChocoPie.png",
        alt: "Orion Choco Pie"
    },

    {
        name: "Want Want Chocolate Wafer Roll",
        price: 12.34,
        inStock: true, // or false
        brand: "Bing Ling Tea",
        src: "WantWantChocolateWaferRoll.jpeg",
        alt: "Want Want Chocolate Wafer Roll"
    },

    {
        name: "insert new product name",
        price: 12.34,
        inStock: true, // or false
        brand: "Bing Ling Tea",
        src: "",
        alt: "image alt text"
    },

    {
        name: "insert new product name",
        price: 12.34,
        inStock: true, // or false
        brand: "Bing Ling Tea",
        src: "",
        alt: "image alt text"
    },

    {
        name: "insert new product name",
        price: 12.34,
        inStock: true, // or false
        brand: "Bing Ling Tea",
        src: "",
        alt: "image alt text"
    },

    {
        name: "insert new product name",
        price: 12.34,
        inStock: true, // or false
        brand: "Bing Ling Tea",
        src: "",
        alt: "image alt text"
    },

    {
        name: "insert new product name",
        price: 12.34,
        inStock: true, // or false
        brand: "Bing Ling Tea",
        src: "",
        alt: "image alt text"
    },

    {
        name: "insert new product name",
        price: 12.34,
        inStock: true, // or false
        brand: "Bing Ling Tea",
        src: "",
        alt: "image alt text"
    },

    {
        name: "insert new product name",
        price: 12.34,
        inStock: true, // or false
        brand: "Bing Ling Tea",
        src: "",
        alt: "image alt text"
    },

    {
        name: "insert new product name",
        price: 12.34,
        inStock: true, // or false
        brand: "Bing Ling Tea",
        src: "",
        alt: "image alt text"
    },

    {
        name: "Milk Foam Peach Tea",
        price: 12.34,
        inStock: true, // or false
        brand: "Bing Ling Tea",
        src: "MilkFoamPeachTea.jpeg",
        alt: "Milk Foam Peach Tea"
    },

    {
        name: "Mango Slush Milk",
        price: 12.34,
        inStock: true, // or false
        brand: "Bing Ling Tea",
        src: "MangoSlushMilk.jpeg",
        alt: "Mango Slush Milk"
    },

    {
        name: "Mix Jelly Coconut Milk",
        price: 12.34,
        inStock: true, // or false
        brand: "Bing Ling Tea",
        src: "MixJellyCoconutMilk.jpeg",
        alt: "Mix Jelly Coconut Milk"
    },

    {
        name: "Milk Foam Mango Tea",
        price: 12.34,
        inStock: true, // or false
        brand: "Bing Ling Tea",
        src: "MilkFoamMangoTea.jpeg",
        alt: "Milk Foam Mango Tea"
    },

    {
        name: "Rose Lychee Fruit Tea",
        price: 12.34,
        inStock: true, // or false
        brand: "Bing Ling Tea",
        src: "RoseLycheeFruitTea.jpeg",
        alt: "Rose Lychee Fruit Tea"
    },

    {
        name: "Watermelon Coconut Milk",
        price: 12.34,
        inStock: true, // or false
        brand: "Bing Ling Tea",
        src: "WatermelonCoconutMilk.jpeg",
        alt: "Watermelon Coconut Milk"
    },

    {
        name: "Milk Foam Strawberry Tea",
        price: 12.34,
        inStock: true, // or false
        brand: "Bing Ling Tea",
        src: "MilkFoamStrawberryTea.jpeg",
        alt: "Milk Foam Strawberry Tea"
    },

    {
        name: "Milk Foam Grape Tea",
        price: 12.34,
        inStock: true, // or false
        brand: "Bing Ling Tea",
        src: "MilkFoamGrapeTea.jpeg",
        alt: "Milk Foam Grape Tea"
    },
];

function inject(product) {
    // insert one product card into the display container with a data-id
    const container = document.querySelector(".container");
    container.insertAdjacentHTML("afterbegin", `<div class="card">
        <img
            class="card-img"
            src=${product.src}
            alt="Product name"
        />
        <h2 class="card-title">${product.name}</h2>
        <h3 class="price">$${product.price}</h3>
        <button class="buy-btn">Buy Now</button>
        </a>
        </div>`)
        //query the container
        //using adjacentHTML to insert a card
}

products.forEach((product) => inject(product));

function addToCart() {
    const buttons = document.querySelectorAll(".buy-btn");
    const btnArray = Array.from(buttons);
    btnArray.forEach((btn) => {
        btn.addEventListener("click", function (event) {
            console.log(
                event.currentTarget.closest(".card").getAttribute("data-id"));
                event.currentTarget.textContent;
        });
    });
}

function addToCart() {
    const buttons = document.querySelector("add to cart");
    container.innerHTML = ""; // clear previous cards
    products.forEach((item, index) => inject(item, index));
    addToCart();
}

getCards();

//made an array
//using forEach to put array of cards on screen
//work on add to cart