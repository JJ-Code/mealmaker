const menu = {
    _courses: {
        _appetizers: [],
        _mains: [],
        _desserts: [],

        get appetizers() {
            return this._appetizers;
        },
        set appetizers(appetizersIn) {
            this._appetizers = appetizersIn;
        },

        get mains() {
            return this._mains;
        },

        set mains(mainsIn) {
            this._mains = mainsIn;
        },

        get desserts() {
            return this._desserts;
        },

        set desserts(dessertsIn) {
            this.desserts = dessertsIn;
        }
    }, //end of _courses object 

    get courses() {
        return {
            appetizers: this._courses.appetizers,
            mains: this._courses.mains,
            desserts: this._courses.desserts
        };
    }, //end of courses()

    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };
        this._courses[courseName].push(dish); //pushing dish into courses array
    },

    //random course generator 
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName]; //retrieve array of given course from _course object
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },

    //random  meal generator
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is $${totalPrice.toFixed(2)}.`;
    }

} // end of menu



menu.addDishToCourse('appetizers', 'Salad', 5.25);
menu.addDishToCourse('appetizers', 'Soup', 4.25);
menu.addDishToCourse('appetizers', 'Spring Roll', 5.50);

menu.addDishToCourse('mains', 'Salmon', 16.00);
menu.addDishToCourse('mains', 'Ribeye Steak', 18.95);
menu.addDishToCourse('mains', 'Lamb', 15.95);

menu.addDishToCourse('desserts', 'Cheese Cake', 5.50);
menu.addDishToCourse('desserts', 'Creme Brule', 8.25);
menu.addDishToCourse('desserts', 'Lava Cake', 7.25);

let meal = menu.generateRandomMeal();
console.log(menu._courses.mains)
console.log(menu._courses._appetizers)
console.log(meal);