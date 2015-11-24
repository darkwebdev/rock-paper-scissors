'use strict';

const expect = require('chai').expect;

const Store = require('../src/Store');
const rules = require('../src/rules');

const things = Object.keys(rules.winner);
var store;

describe('Store', () => {
    beforeEach(() => {
        store = Store();
    });
    it('should return proper state', () => {
        [
            {
                thing1: 'rock',
                thing2: 'paper',
                winner: 2
            },
            {
                thing1: 'rock',
                thing2: 'scissors',
                winner: 1
            },
            {
                thing1: 'paper',
                thing2: 'scissors',
                winner: 2
            },
            {
                thing1: 'rock',
                thing2: 'rock',
                winner: undefined
            }
        ].forEach(testParams => {
            const expectedState = {
                thing1: testParams.thing1,
                thing2: testParams.thing2,
                winner: testParams.winner
            };
            store.selectThings(testParams.thing1, testParams.thing2);

            expect(store.getState()).to.deep.equal(expectedState);
        });
    });

    describe('things generator', () => {
        beforeEach(() => {
            store = Store();
        });
        things.forEach((thing, i) => {
            it('should return ' + thing, () => {
                const fakeRandom = () => i;

                expect(things.indexOf(store.getRandomElem(things, fakeRandom))).to.equal(i);
            });
        });
    });
    describe('random number generator', () => {
        it('should return integers within range', () => {
            for (let i=0; i<100; i++) {
                expect(store.getRandomIntExcluding(3)).to.be.within(0, 3);
            }
        });
    });

});
