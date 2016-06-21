"use strict";

var assert = require('chai').assert;
var expect = require('chai').expect;

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
        return Math.floor(Math.random() * 20) + 1;
    }
}

class D6 extends Dice {
    /**
     * Roll a Die for Randomly between 1-6
     * @override
     * @returns random Int
     */
    roll() {
        return Math.floor(Math.random() * 6) + 1;
    }
}



class D8 extends Dice {
    /**
     * Roll a Die for Randomly between 1-8
     * @override
     * @returns random Int
     */
    roll() {
        return Math.floor(Math.random() * 8) + 1;
    }
}

class D4 extends Dice {
    /**
     * Roll a Die for Randomly between 1-4
     * @override
     * @returns random Int
     */
    roll() {
        return Math.floor(Math.random() * 4) + 1;
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


describe('Dice', function() {
    describe('D4', function() {
        describe('roll', function() {

            it('returns a number', function() {
                //Given
                var dice = new D4();

                //when
                var myRoll = dice.roll();

                //Then
                expect(myRoll).to.be.a("number");
                //assert.typeOf(myRoll, "number")
            });

            it('return an whole number == integer', function() {
                //Given
                var dice = new D4();

                //when
                var myRoll = dice.roll();

                //Then
                assert.isTrue(myRoll % 1 === 0);
            });

            it('Between 1 and 4', function() {
                for (var i = 0; i < 1000; i++) {
                    //Given
                    var dice = new D4();
                    //when
                    var myRoll = dice.roll();
                    //Then
                    assert.isTrue(myRoll >= 1 && myRoll <= 4)
                }
            });

        });
    })
});
