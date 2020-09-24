//These arrays will populate our ingredient list.
const meat = ["Chicken", "Beef", "Pork", "Bacon", "Beef Brisket", "Beef Fillet", "Chicken Breast", "Chicken Breasts", "Chicken Legs", "Chicken Thighs", "Chorizo", "Doner Meat", "Italian Fennel Sausages", "Lamb", "Lamb Loin Chops", "Lamb Mince", "Lean Minced Beef", "Parm Ham", "Duck", "Duck Legs", "Lamb Leg", "Lamb Shoulder", "Minced Beef", "Turkey Mince", "Lamb Kidney", "Beef Kidney", "Sausages", "Ham", "Haddock", "Smoked Haddock", "Beef Shin", "Minced Pork", "Ground Beef", "Goat Meat", "Tripe", "Ground Pork", "Pork Chops", "Kielbasa", "Polish Sausage"]

const seaFood = ["Salmon", "King Prawns", "Mackerel", "Prawns", "Raw King Prawns", "Oysters", "White Fish", "White Fish Fillets", "Mussels", "Monkey Fish", "Squid", "Baby Squid", "Clams", "Tiger Prawns", "Cod", "Salt Cod", "Smoked Salmon", "Herring"]

const veggies = ["Avacado", "Asparagus", "Carrots", "Chickpeas", "Cucumber", "Egg Plants", "Garlic Clove", "Greem Tomatoes", "Green Beans", "Green Chilli", "Green Olives", "Jalapeno", "Leek", "Onions", "Peas", "Plum Tomatoes", "Red Onions", "Red Pepper", "Spinach", "Spring Onions", "Spuash", "Stir-fry Vegetables", "Tomatoes", "Vine Leaves", "Zucchini", "Sweetcorn", "Haricot Beans", "Yellow Pepper", "Green Pepper", "Tinned Tomatoes", "Wild Mushrooms", "Cabbage", "Vine Tomatoes", "Brussel Sprouts", "Creamed Corn", "Water Chestnut", "Bean Sprouts", "Scallions", "Wood Ear Mushrooms", "Yellow Onion", "Persian Cucumber", "Dill Pickles", "Iceburg Lettuce", "Mulukhiyah", "Celery", "Chopped Onion", "Chopped Tomatoes", "Lettuce", "Pitted Black Olives", "Turnips", "Frozen Peas"];

const fruits = ["Lemon", "Lime", "Medjool Dates", "Orange", "Apricot", "Raspberries", "Blueberries", "Fruit Mix", "Dried Friut", "Cherry", "Glace Cherry", "Apples", "Pears", "Rhubarb"];

const bread = ["Basmati Rice", "Bowtie Pasta", "Bread", "Brown Rice", "Corn Tortillas", "Digestive Biscuits", "Flour Tortilla", "Jasmine Rice", "Rice", "Rice Noodles", "Rice Stick Noodles", "Rice Vermicelli", "Rigatoni", "Spaghetti", "Wholegrain Bread", "Vermicelli Pasta", "Pappardelle Pasta", "Paccheri Pasta", "Linguine Pasta", "Crusty Bread", "Tortillas", "Udon Noodles", "Noodles", "English Muffins", "Muffins", "Rice Krispies", "Bun", "Potatoe Buns", "Pita Bread", "Sesame Seed Burger Buns", "Buns"]

const nuts = ["Cashew Nuts", "Cashews", "Chickpeas", "Coriander Seeds", "Cumin Seeds", "Fennel Seeds", "Flaked Almonds", "Mustard Seeds", "Peanuts", "Peas", "Pine Nuts", "Sesame Seed", "Sugar Snap Peas", "Walnuts", "Pecan Nuts", "Chestnuts", "Almonds", "Oats"]

const spices = ["Basil", "Basil leaves", "Black Pepper", "Cardamom", "Chili Powder", "Cilantro", "Cinnamon", "Cloves", "Coriander Seeds", "Cumin", "Dill", "Dried Oregano", "Fajita Seasoning", "Fresh Thyme", "Garlic", "Ginger", "Italian Seasoning", "Lemon Zest", "Minced Garlic", "Mint", "Nutmeg", "Onion Salt", "Oregano", "Paprika", "Red Chilli Powder", "Salt", "Sea Salt", "Sage", "Tumeric", "Rosemary"]

const sugars = ["Caster Sugar", "Brown Sugar", "Chocolate Chips", "Coco Sugar", "Cocoa", "Dark Brown Sugar", "Granulated Sugar", "Greek Yogurt", "Plain Chocolate", "Sugar", "White Chocolate Chips", "Icing Sugar", "Carmel", "Milk Chocolate", "Dark Chocolate", "Powdered Sugar"]

const fats = ["Butter", "Chicken Stock", "Coconut Cream", "Cocunut Milk", "Cheddar Cheese", "Cheese", "Colby Jack Cheese", "Condensed Milk", "Cream", "Double Cream", "Egg White", "Egg Yolks", "Egg", "Feta", "Full Fat Yogurt", "Gouda Cheese", "Heavy Cream", "Milk", "Oils", "Olive Oil", "Paresan Cheese", "Peanut Butter", "Shredded Mexican Cheese", "Sour Cream", "Sunflower Oil", "Vegetable Oil", "Whole Milk", "Yogurt", "Cream Cheese", "Mozzerela", "Egg", "Brie", "Canola Oil", "Almond Milk"]

const powder = ["Baking Powder", "Bicarbonate Of Soda", "Corn Starch"]

const liquids = ["Apple Cider Vinegar", "Dark Soy Sauce", "Dry White Wine", "Enchilada Sauce", "English Mustard", "Extra Virgin Olive Oil", "Garlic Sauce", "Golden Syrup", "Honey", "Hotsauce", "Lemon Juice", "Mustard", "Raspberry Jam", "Red Wine", "Soy Sauce", "Tomato Ketchup", "Vanilla", "Vanilla Extract", "Vinegar", "White Vinegar", "White Wine", "Barbeque Sauce", "Red Wine Vinegar", "Tomato Sauce", "Maple Syrup", "Tabasco Sauce", "White Wine Vinegar", "Mayonnaise"]

//https://www.themealdb.com/api/json/v1/9973533/filter.php?i=

//This function takes a array from above, and the id name of a div, and appends everything in the array as a checkbox to that div. The checkbox, on being clicked, runs a function.
function ingredientPopulate(list, id) {
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        //the id is the same as the items individual ingredient call in the api. If I can get a list of the selected ids, I'm in the money.
        const listItem = `<input onclick="urlFinalizer('${element}')" class="ingredient" id=https://www.themealdb.com/api/json/v1/9973533/filter.php?i=${element.replace(" ", "_")} type="checkbox"><label for="${element}">${element}</label></input>`
        document.getElementById(id).innerHTML += listItem
    }
}

ingredientPopulate(meat, "meat")
ingredientPopulate(nuts, "nuts")

//these to variables enable me to check if an item is on the url string or not.
let urlEndObject = {}
let recipesObject = {}





//This function will take all selected ingredients and append them to the end of our API call.
function urlFinalizer(thisIngredient) {
    urlArray = []
    url = "https://www.themealdb.com/api/json/v2/9973533/filter.php?i="
    if (urlEndObject[thisIngredient] === "active") {
        urlEndObject[thisIngredient] = "inactive"
    } else {
        urlEndObject[thisIngredient] = "active"
    }
    for (const key in urlEndObject) {
        if (urlEndObject.hasOwnProperty(key)) {
            const element = urlEndObject[key];
            if (element === "active") {
                url += key.replace(" ", "_")
                url += ","
            }
        }
    }
    urlArray.push(url.slice(0, -1))
    let ingredients = document.getElementsByClassName("ingredient")
    for (let index = 0; index < ingredients.length; index++) {
        const element = ingredients[index];
        if (element.checked) {
            urlArray.push(element.id)
            // return ÷urlArray
        }
    }
    console.log(urlArray)
}

function boxFiller() {}
if (urlArray.length === 0) {
    fetch()
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];

}