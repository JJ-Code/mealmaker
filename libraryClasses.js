class Media {
    constructor(title){
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title(){
        return this._title;
    }

    get isCheckedOut(){
        return this._isCheckedOut;
    }

    get ratings(){
        return this._ratings;
    }

    set isCheckedOut(isCheckedOutStatus){
        this._isCheckedOut = isCheckedOutStatus;
    }

    toggleCheckOutStatus(){
        this.isCheckedOut = !this.isCheckedOut
    }

    getAverageRating(){
        let ratingSum = this.ratings.reduce((accumulator, ratings) => accumulator, ratings);
        return ratingSum / this.ratings.length; 
    }

    addRating(value){
        this.ratings.push(value);
    }

}//end of parent class 

class Book extends Media{
    
}