class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    set isCheckedOut(isCheckedOutStatus) {
        this._isCheckedOut = isCheckedOutStatus;
    }

    toggleCheckOutStatus() {
        this.isCheckedOut = !this.isCheckedOut
    }

    getAverageRating() {
        let ratingSum = this._ratings.reduce((accumulator, ratings) => accumulator + ratings, 0);
        return ratingSum / this.ratings.length;
    }

    addRating(value) {
        this.ratings.push(value);
    }

} //end of parent class 

class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this.pages;
    }
}

class Movie extends Media {
    constructor(director, runTime, title) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    get director() {
        return this._director;
    }

    get runTime() {
        return this.runTime;
    }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Everything', 544);

historyOfEverything.toggleCheckOutStatus();

console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(6);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('jAN DE Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(3);
speed.addRating(4);
speed.addRating(6);
console.log(speed.getAverageRating)



