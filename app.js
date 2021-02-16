const arrBtns = ["All Items", "Hamburguers", "Fries", "Sodas"];
const main = document.getElementById('stores');

const arrHamburgers = [
    {image : "/img/hamburgers/hamburger1.jpg", product : "iVansteak - $7.96", description : "A half pound portion of lean, ground beef, lightly seasoned and grilled to order."},
    {image : "/img/hamburgers/hamburger2.jpg", product : "iVanbacon - $8.74", description : "A 100% All beef patty with crisp lettuce, onion and tomato with thick strips of bacon."},
    {image : "/img/hamburgers/hamburger3.jpg", product : "iVancheezie - $9.55", description : "A burger generously coated with melted cheese, beef and served on a tasty toasted bun."},
    {image : "/img/hamburgers/hamburger4.jpg", product : "iVanspecial - $11.32", description : "Ten ounces of angus beef, grilled vidalia onions, lettuce, and tomato on a home-baked roll."}    
];

const arrFries = [
    {image : "/img/fries/fries1.jpg", product : "Fries1 - $3.45", description : "Delicious french fries with Ketchup"},
    {image : "/img/fries/fries2.jpg", product : "Fries2 - $4.56", description : "Delicious french fries with Ketchup"},
    {image : "/img/fries/fries3.jpg", product : "Fries3 - $5.67", description : "Delicious french fries with Ketchup"},
    {image : "/img/fries/fries4.jpg", product : "Fries4 - $6.78", description : "Delicious french fries with Ketchup"}
];

const arrSodas = [
    {image : "/img/sodas/soda1.jpg", product : "Coke - $1.50", description : "Coke"},
    {image : "/img/sodas/soda2.jpg", product : "Canada Dry - $1.23", description : "Ginger Ale"},
    {image : "/img/sodas/soda3.jpg", product : "Fanta - $1.23", description : "Orange"},
    {image : "/img/sodas/soda4.jpg", product : "Fanta - $1.23", description : "Cherry"}
]

const arrAllItems = [];
arrAllItems.push(arrHamburgers);
arrAllItems.push(arrFries);
arrAllItems.push(arrSodas);

const arrChefs = [
    {image : "/img/chefs/chef2.jpg", product : "Giada De Laurentiis", description : "She is the author of nine New York Times bestselling cookbooks, including her most recent, Giada’s Italy, in addition to her children's book series, Recipe for Adventure."},
    {image : "/img/chefs/chef1.jpg", product : "Gordon Ramsay", description : "Internationally renowned, multi-Michelin starred chef Gordon Ramsay has opened a string of successful restaurants across the globe."},
    {image : "/img/chefs/chef3.jpg", product : "Grayson Schmitz", description : "Grayson is a private chef with over two decades of experience in the culinary and hospitality industries."}
]

createButton(arrBtns, "store_items");
// showMeals(arrAllItems);

function createButton(arr, id) {
    var divEl = document.getElementById(id);

    for (const item in arr) { 
        var text = arr[item];  
        const btn = document.createElement("button");
        btn.setAttribute("class", "store_items_btn");
        var nameBtn = document.createTextNode(text);
        btn.appendChild(nameBtn);
        divEl.appendChild(btn)
    }
}

function showMeals(meals) {
    main.innerHTML = '';

    for (const arr in meals) {
        x = meals[arr];
        x.forEach(meal => {
            const { product, image } = meal;
            const mealEl = document.createElement("div");
            mealEl.classList.add('stores_images');
    
            mealEl.innerHTML = `
                <img src="${image}"
                <div class="stores_images_desc">
                    <p>${product}</p>
                    <button class="btnCartPlus" id="btnCartPlus">
                        <a><i class="fas fa-cart-plus"></i></a>
                    </button>
                </div>
            `
            // const a = document.createElement('a');
            // a.classList.add('btnCart_desc');
    
            main.appendChild(mealEl);
        });
    }
}

function showStaff(staff) {
    main.innerHTML = '';

    for (const arr in staff) {
        x = staff[arr]
        x.forEach(person => {
            const { product, image } = person;
            const personEl = document.createElement("div");
            personEl.classList.add('store_images');
    
            personEl.innerHTML = `
                <img src="${image}"
                <div class="store_images_desc">
                    <p>${product}</p>
                    <p>${description}</p>
                </div>
            `
            const a = document.createElement('a');
            a.classList.add('btnCart_desc');
    
            main.appendChild(personEl);
        });
    }
}

document.getElementById('navbar_btnCart').addEventListener('click', (e) => {
    window.alert('You pressed me')
});

document.getElementById('btnOrder').addEventListener('click', (e) => {
    document.getElementById("store").scrollIntoView();
});

document.getElementById('btnCartPlus').addEventListener('click', (e) => {
    window.alert("Item added to your cart");
});



