"use strict";

var assert = require('chai').assert;
var expect = require('chai').expect;

function isPrime(n) {
    if (n === 2 || n === 1) {
        return true
    }
    var divisor = 2
    var dSquare = divisor * divisor
    while (dSquare <= n) {
        if (n % divisor === 0) {
            return false
        }
        divisor = divisor + 1
        dSquare = divisor * divisor
    }
    return true
}

function nthPrime(n) {
    var i = 1;
    var arrIndex = 0;
    var arr = [];
    while (arrIndex < n) {
        i++;
        if (isPrime(i)) {
            arr.push(i);
            arrIndex++;
        }
    }
    return arr[n - 1];
}

console.log(nthPrime(100));

describe('isPrime', function() {
    it('returns true if prime', function() {
        expect(isPrime(2)).to.be.true;
        expect(isPrime(3)).to.be.true;
        expect(isPrime(5)).to.be.true;
        expect(isPrime(7)).to.be.true;
    });

    it('returns false if not prime', function() {
        expect(isPrime(4)).to.be.false;
        expect(isPrime(8)).to.be.false;
        expect(isPrime(9)).to.be.false;
        expect(isPrime(16)).to.be.false;
        expect(isPrime(35)).to.be.false;
        expect(isPrime(14)).to.be.false;
        expect(isPrime(12)).to.be.false;
        expect(isPrime(123)).to.be.false;
    });
});

describe('nthPrime', function() {
    it('returns 1 for 1st prime', function() {
        expect(nthPrime(1)).to.equal(2);
    });
    it('returns 3 for 2nd prime', function() {
        expect(nthPrime(2)).to.equal(3);
    });
    it('returns 541 for 100th prime', function() {
        expect(nthPrime(100)).to.equal(541);
    });
    it('returns 523 for 99th prime', function() {
        expect(nthPrime(99)).to.equal(523);
    });
    // it('returns 5 for 4th prime', function(){
    //   expect(nthPrime(4)).to.equal(1);
    // });
    // it('returns 1 for 1st prime', function(){
    //   expect(nthPrime(1)).to.equal(1);
    // });
})

function isFizzable(n) {
    if (n % 3 === 0) {
        return true;
    } else if (n % 5 === 0) {
        return true;
    }
    return false;
}

describe('isFizzable', function() {

    it('returns true for multiples of 3', function() {
        expect(isFizzable(9)).to.be.true;
    });

    it('returns true for multiples of 5', function() {
        expect(isFizzable(10)).to.be.true;
    });

    it('returns false for multiples other than 3 and 5', function() {
        expect(isFizzable(7)).to.be.false;
    });

})
