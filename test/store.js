'use strict';

const expect = require('chai').expect;

const Store = require('../src/Store');
const rules = require('../src/rules');

const shapes = Object.keys(rules.winner);
var store;

describe('Store', () => {
    beforeEach(() => {
        store = Store();
    });
    it('should return proper state', () => {
        [
            {
                shape1: 'rock',
                shape2: 'paper',
                winner: 2
            },
            {
                shape1: 'rock',
                shape2: 'scissors',
                winner: 1
            },
            {
                shape1: 'paper',
                shape2: 'scissors',
                winner: 2
            },
            {
                shape1: 'rock',
                shape2: 'rock',
                winner: 0
            }
        ].forEach(testParams => {
            const expectedState = {
                shape1: testParams.shape1,
                shape2: testParams.shape2,
                winner: testParams.winner
            };
            store.selectShapes(testParams.shape1, testParams.shape2);

            expect(store.getState()).to.deep.equal(expectedState);
        });
    });

    describe('shape generator', () => {
        beforeEach(() => {
            store = Store();
        });
        shapes.forEach((shape, i) => {
            it('should return ' + shape, () => {
                const fakeRandom = () => i;

                expect(shapes.indexOf(store.getRandomElem(shapes, fakeRandom))).to.equal(i);
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
