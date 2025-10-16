const products = [
    {
        name: "Milk Foam Peach Tea",
        price: "6.70",
        inStock: true, // or false
        brand: "Bing Ling Tea",
        src: "MilkFoamPeachTea.jpeg",
        alt: "Milk Foam Peach Tea"
    },

    {
        name: "Mango Slush Milk",
        price: "6.70",
        inStock: true, // or false
        brand: "Bing Ling Tea",
        src: "MangoSlushMilk.jpeg",
        alt: "Mango Slush Milk"
    },

    {
        name: "Mix Jelly Coconut Milk",
        price: "6.70",
        inStock: true, // or false
        brand: "Bing Ling Tea",
        src: "MixJellyCoconutMilk.jpeg",
        alt: "Mix Jelly Coconut Milk"
    },

    {
        name: "Milk Foam Mango Tea",
        price: "6.70",
        inStock: true, // or false
        brand: "Bing Ling Tea",
        src: "MilkFoamMangoTea.jpeg",
        alt: "Milk Foam Mango Tea"
    },

    {
        name: "Rose Lychee Fruit Tea",
        price: "6.70",
        inStock: true, // or false
        brand: "Bing Ling Tea",
        src: "RoseLycheeFruitTea.jpeg",
        alt: "Rose Lychee Fruit Tea"
    },

    {
        name: "Watermelon Coconut Milk",
        price: "6.70",
        inStock: true, // or false
        brand: "Bing Ling Tea",
        src: "WatermelonCoconutMilk.jpeg",
        alt: "Watermelon Coconut Milk"
    },

    {
        name: "Milk Foam Strawberry Tea",
        price: "6.70",
        inStock: true, // or false
        brand: "Bing Ling Tea",
        src: "MilkFoamStrawberryTea.jpeg",
        alt: "Milk Foam Strawberry Tea"
    },

    {
        name: "Milk Foam Grape Tea",
        price: "6.70",
        inStock: true, // or false
        brand: "Bing Ling Tea",
        src: "MilkFoamGrapeTea.jpeg",
        alt: "Milk Foam Grape Tea"
    },

    {
        name: "Matcha Green Tea Pocky",
        price: "6.70",
        inStock: true, // or false
        brand: "Bing Ling Tea",
        src: "MatchaGreenTeaPocky.jpeg",
        alt: "Matcha Green Tea Pocky"
    },

    {
        name: "Leijinji Breadstick Cheese Flavor",
        price: "6.70",
        inStock: true, // or false
        brand: "Bing Ling Tea",
        src: "LeijinjiBreadstickCheeseFlavor.png",
        alt: "Leijinji Breadstick Cheese Flavor"
    },

    {
        name: "Orion Choco Pie",
        price: "6.70",
        inStock: true, // or false
        brand: "Bing Ling Tea",
        src: "OrionChocoPie.png",
        alt: "Orion Choco Pie"
    },

    {
        name: "Want Want Chocolate Wafer Roll",
        price: "6.70",
        inStock: true, // or false
        brand: "Bing Ling Tea",
        src: "WantWantChocolateWaferRoll.jpeg",
        alt: "Want Want Chocolate Wafer Roll"
    },

    {
        name: "insert new product name",
        price: "6.70",
        inStock: true, // or false
        brand: "Bing Ling Tea",
        src: "",
        alt: "image alt text"
    },

    {
        name: "insert new product name",
        price: "6.70",
        inStock: true, // or false
        brand: "Bing Ling Tea",
        src: "",
        alt: "image alt text"
    },

    {
        name: "insert new product name",
        price: "6.70",
        inStock: true, // or false
        brand: "Bing Ling Tea",
        src: "",
        alt: "image alt text"
    },

    {
        name: "insert new product name",
        price: "6.70",
        inStock: true, // or false
        brand: "Bing Ling Tea",
        src: "",
        alt: "image alt text"
    },

    {
        name: "insert new product name",
        price: "6.70",
        inStock: true, // or false
        brand: "Bing Ling Tea",
        src: "",
        alt: "image alt text"
    },

    {
        name: "insert new product name",
        price: "6.70",
        inStock: true, // or false
        brand: "Bing Ling Tea",
        src: "",
        alt: "image alt text"
    },

    {
        name: "insert new product name",
        price: "6.70",
        inStock: true, // or false
        brand: "Bing Ling Tea",
        src: "",
        alt: "image alt text"
    },

    {
        name: "insert new product name",
        price: "6.70",
        inStock: true, // or false
        brand: "Bing Ling Tea",
        src: "",
        alt: "image alt text"
    }
];

function inject(item) {
    //do something
    const container = document.querySelector(".display-container");
    container.insertAdjacentHTML("afterbegin", `<div class= "card">
        <img
        class= "card-img"
        src= ${item.src}
        alt= ${item.alt}
        />
        <h3 class= "card-title">${item.name}</h3>
        <h5 class= "price">${item.price}</h5>
        </div>

function addToCart() {
    const buttons = document.querySelectorAll("button");
    const btnArray = Array.from(buttons);
    btnArray.forEach((btn) => 
        btn.addEventListener("click", function (event) {
            console.log(
                event.target.closest(".display-card").getAttribute("data-id"));
                //replace .display-card and data-id with whatever you named it
                event.target.textContent;
        })
    );
    //find the item in the array
    //take that object and push into cart
}
getCards();

//made an array
//using forEach to put array of cards on screen
//work on add to cart