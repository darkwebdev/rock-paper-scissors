'use strict';

const expect = require('chai').expect;
const doesFirstWin = {
    rock: {
        paper: false,
        scissors: true
    },
    paper: {
        rock: true,
        scissors: false
    },
    scissors: {
        rock: false,
        paper: true
    }
};
const things = Object.keys(doesFirstWin);

describe('Rock-paper-scissors', () => {
    describe('game logic', () => {
        context('Rock vs Paper', () => {
            it('Paper wins', () => {
                expect(doesFirstWin.rock.paper).to.be.false;
                expect(doesFirstWin.paper.rock).to.be.true;
            });
        });
        context('Rock vs Scissors', () => {
            it('Rock wins', () => {
                expect(doesFirstWin.rock.scissors).to.be.true;
                expect(doesFirstWin.scissors.rock).to.be.false;
            });
        });
        context('Paper vs Scissors', () => {
            it('Scissors win', () => {
                expect(doesFirstWin.paper.scissors).to.be.false;
                expect(doesFirstWin.scissors.paper).to.be.true;
            });
        });
    });
    describe('things generator', () => {
        things.forEach((thing, i) => {
            it('should return ' + thing, () => {
                const getRandomElem = (arr, randomFn) => arr[randomFn(arr.length)];
                const fakeRandom = () => i;

                expect(things.indexOf(getRandomElem(things, fakeRandom))).to.equal(i);
            });
        });
    });
    describe('random number generator', () => {
        it('should return integers within range', () => {
            const getRandomIntExcluding = max => Math.round(Math.random() * max);

            for (let i=0; i<100; i++) {
                expect(getRandomIntExcluding(3)).to.be.within(0, 3);
            }
        });
    });
});
