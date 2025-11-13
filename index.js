const products = [
    

    {
        name: "Matcha Green Tea Pocky",
        price: 12.34,
        inStock: true, // or false
        brand: "Bing Ling Tea",
        category: "Snacks",
        img: "MatchaGreenTeaPocky.jpeg",
        alt: "Matcha Green Tea Pocky"
    },

    {
        name: "Leijinji Breadstick Cheese Flavor",
        price: 12.34,
        inStock: true, // or false
        brand: "Bing Ling Tea",
        category: "Snacks",
        img: "LeijinjiBreadstickCheeseFlavor.png",
        alt: "Leijinji Breadstick Cheese Flavor"
    },

    {
        name: "Orion Choco Pie",
        price: 12.34,
        inStock: true, // or false
        brand: "Bing Ling Tea",
        category: "Snacks",
        img: "OrionChocoPie.png",
        alt: "Orion Choco Pie"
    },

    {
        name: "Want Want Chocolate Wafer Roll",
        price: 12.34,
        inStock: true, // or false
        brand: "Bing Ling Tea",
        category: "Snacks",
        img: "WantWantChocolateWaferRoll.jpeg",
        alt: "Want Want Chocolate Wafer Roll"
    },

    {
        name: "insert new product name",
        price: 12.34,
        inStock: true, // or false
        brand: "Bing Ling Tea",
        category: "Misc",
        img: "",
        alt: "image alt text"
    },

    {
        name: "insert new product name",
        price: 12.34,
        inStock: true, // or false
        brand: "Bing Ling Tea",
        category: "Misc",
        img: "",
        alt: "image alt text"
    },

    {
        name: "insert new product name",
        price: 12.34,
        inStock: true, // or false
        brand: "Bing Ling Tea",
        catergory: "Misc",
        img: "",
        alt: "image alt text"
    },

    {
        name: "insert new product name",
        price: 12.34,
        inStock: true, // or false
        brand: "Bing Ling Tea",
        category: "Misc",
        img: "",
        alt: "image alt text"
    },

    {
        name: "insert new product name",
        price: 12.34,
        inStock: true, // or false
        brand: "Bing Ling Tea",
        category: "Misc",
        img: "",
        alt: "image alt text"
    },

    {
        name: "insert new product name",
        price: 12.34,
        inStock: true, // or false
        brand: "Bing Ling Tea",
        category: "Misc",
        img: "",
        alt: "image alt text"
    },

    {
        name: "insert new product name",
        price: 12.34,
        inStock: true, // or false
        brand: "Bing Ling Tea",
        category: "Misc",
        img: "",
        alt: "image alt text"
    },

    {
        name: "insert new product name",
        price: 12.34,
        inStock: true, // or false
        brand: "Bing Ling Tea",
        category: "Misc",
        img: "",
        alt: "image alt text"
    },

    {
        name: "Milk Foam Peach Tea",
        price: 12.34,
        inStock: true, // or false
        brand: "Bing Ling Tea",
        category: "Milk Tea",
        img: "MilkFoamPeachTea.jpeg",
        alt: "Milk Foam Peach Tea"
    },

    {
        name: "Mango Slush Milk",
        price: 12.34,
        inStock: true, // or false
        brand: "Bing Ling Tea",
        category: "Milk Tea",
        img: "MangoSlushMilk.jpeg",
        alt: "Mango Slush Milk"
    },

    {
        name: "Mix Jelly Coconut Milk",
        price: 12.34,
        inStock: true, // or false
        brand: "Bing Ling Tea",
        category: "Dairy free",
        img: "MixJellyCoconutMilk.jpeg",
        alt: "Mix Jelly Coconut Milk"
    },

    {
        name: "Milk Foam Mango Tea",
        price: 12.34,
        inStock: true, // or false
        brand: "Bing Ling Tea",
        category: "Milk Tea",
        img: "MilkFoamMangoTea.jpeg",
        alt: "Milk Foam Mango Tea"
    },

    {
        name: "Rose Lychee Fruit Tea",
        price: 12.34,
        inStock: true, // or false
        brand: "Bing Ling Tea",
        category: "Dairy free",
        img: "RoseLycheeFruitTea.jpeg",
        alt: "Rose Lychee Fruit Tea"
    },

    {
        name: "Watermelon Coconut Milk",
        price: 12.34,
        inStock: true, // or false
        brand: "Bing Ling Tea",
        category: "Dairy free",
        img: "WatermelonCoconutMilk.jpeg",
        alt: "Watermelon Coconut Milk"
    },

    {
        name: "Milk Foam Strawberry Tea",
        price: 12.34,
        inStock: true, // or false
        brand: "Bing Ling Tea",
        category: "Milk Tea",
        img: "MilkFoamStrawberryTea.jpeg",
        alt: "Milk Foam Strawberry Tea"
    },

    {
        name: "Milk Foam Grape Tea",
        price: 12.34,
        inStock: true, // or false
        brand: "Bing Ling Tea",
        category: "Milk Tea",
        img: "MilkFoamGrapeTea.jpeg",
        alt: "Milk Foam Grape Tea"
    },
];


// fix the filter button code at home vvv
const filterBy(category) 
function filtered = products.filter(product => product.category === "Snacks");

function inject(product, index) {
    // insert one product card into the display container with a data-id
    const container = document.querySelector(".container");
    container.insertAdjacentHTML(
        "beforeend",
        `<div class="card" data-id="${index}" data-category="${product.category || ''}">
        <img class= "card-img" src=${product.img} alt = ${product.alt} />
     <h2>${product.brand}</h2>
     <h3>${product.name}</h3>
     <p>$${product.price}</p>
     <button class="cart_button" ${!product.inStock ? "disabled" : ""}>
         ${product.inStock ? "Add to Cart" : "Out of Stock"}
       </button>
     </div>`
    );
    //query the container
    //using insertAdjacentHTML to insert a card
}

products.forEach((product, index) => inject(product, index));

function addToCart() {
    const buttons = document.querySelectorAll(".buy-btn");
    buttons.forEach((btn) => {
        btn.addEventListener("click", function (event) {
            const id = event.currentTarget.closest(".card").getAttribute("data-id");
            console.log(id);
            event.currentTarget.textContent = "Added";
        });
    });
}

const cart = [];
// attach listeners after injecting
addToCart();

//made an array
//using forEach to put array of cards on screen
//work on add to cart
function filterByCategory(category) {
    const cards = document.querySelectorAll(".card");}
 
    cards.forEach((card) => {
        if (category === "All" || card.getAttribute("data-category") === category) {
            card.style.display = "block";    
        } else {
            card.style.display = "none";
        }
    });


