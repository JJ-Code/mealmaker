class School {
    constructor(name, level, numberOfStudent) {
        this._name = name;
        this._level = level;
        this._numberOfStudent = numberOfStudent;
    }

    get name() {
        return this._name;
    }

    get level() {
        return this._level;
    }

    get numberOfStudent() {
        this._numberOfStudent;
    }

    set numberOfStudent(newNumberOfStudents) {
        if (newNumberOfStudents.isNaN()) {
            console.log('Invalid input: numberOfStudents must be set to a Number.')
        } else {
            this._numberOfStudent = newNumberOfStudents;
        }
    }

    quickFacts() {
        console.log(`${this.name} educates ${this.numberOfStudent} students at the ${this.level} school level.`)
    }

    static pickSubstituteTeacher(substituteTeacher) {
        const randInt = Math.floor(Math.random() * substituteTeacher.length);
            return substituteTeacher[randInt];
}

}

class PrimarySchool extends School{
    constructor(name, numberOfStudent, pickUpPolicy){
        super(name, 'primary', numberOfStudent);
        this._numberOfStudent = numberOfStudent;
        this._pickUpPolicy = pickUpPolicy;
    }
    get pickUpPolicy(){
        return this._pickUpPolicy;
    }
}

class HighSchool extends School {
    constructor(name, numberOfStudent, sportsTeam) {
        super(name, 'high', numberOfStudent);
        this._numberOfStudent = numberOfStudent;
        this._sportsTeam = sportsTeam;
    }
    get sportsTeam() {
        return this._sportsTeam;
    }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')

lorraineHansbury.quickFacts();

const sub = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
console.log(alSmith.sportsTeam)
