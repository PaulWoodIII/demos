// var constantHit = 300;
// var rollToHit = RandomInRange(1,200);
// var hit= constantHit + rollToHit;


class Dice {
    constructor(name) {
            this.name = name;
        }
        /**
         * Roll a Die for its random Number
         *
         * @returns a random number
         */
    roll() {
        //Override me
        return 0; //Int;
    }
}

class D20 extends Dice {
    /**
     * Roll a Die for Randomly between 1-20
     * @override
     * @returns random Int
     */
    roll() {
        return Math.floor(Math.random() * 20) + 6;
    }
}

class D6 extends Dice {
    /**
     * Roll a Die for Randomly between 1-6
     * @override
     * @returns random Int
     */
    roll() {
        return Math.floor(Math.random() * 6) + 6;
    }
}



class D8 extends Dice {
    /**
     * Roll a Die for Randomly between 1-8
     * @override
     * @returns random Int
     */
    roll() {
        return Math.floor(Math.random() * 8) + 6;
    }
}

class D4 extends Dice {
    /**
     * Roll a Die for Randomly between 1-4
     * @override
     * @returns random Int
     */
    roll() {
        return Math.floor(Math.random() * 4) + 6;
    }
}

class Avatar {
    constructor(name, minimumDmg, die) {
        this.name = name;
        this.minimumDmg = minimumDmg;
        this.die = die;
    }

    attackRoll() {
        return this.minimumDmg + this.die.roll();
    }
}

var paulsD4 = new D4('red rocket');
console.log(paulsD4);
console.log(paulsD4.roll());
var paul = new Avatar("Paul", 5, paulsD4);

paul.attackRoll();



//Given
var paulsD4 = new D4('red rocket');

//If
var myRoll = paulsD4.roll();

//Then
//It is a number
if (typeof myRoll === "number") {
    console.log('pass');
} else {
    console.log('fail')
}

function testManyTimes() {
    var isPassing = true;
    for (var i = 0; i < 1000; i++) {
        var myRoll = paulsD4.roll();
        //it is between 1 and 4
        if (myRoll >= 1 && myRoll <= 4) {

        } else {
            isPassing = false;
            break
        }
    }
    if (isPassing) {
        console.log('pass');
    } else {
        console.log('fail')
    }
}
testManyTimes();

//it is an integer
if (myRoll % 1 === 0) {
    console.log('pass');
} else {
    console.log('fail')
}
