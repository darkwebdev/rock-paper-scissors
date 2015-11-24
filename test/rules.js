'use strict';

const expect = require('chai').expect;

const rules = require('../src/rules');

describe('Game rules', () => {
    context('Rock vs Paper', () => {
        it('Paper wins', () => {
            expect(rules.winner.rock.paper).to.equal(2);
            expect(rules.winner.paper.rock).to.equal(1);
        });
    });
    context('Rock vs Scissors', () => {
        it('Rock wins', () => {
            expect(rules.winner.rock.scissors).equal(1);
            expect(rules.winner.scissors.rock).equal(2);
        });
    });
    context('Paper vs Scissors', () => {
        it('Scissors win', () => {
            expect(rules.winner.paper.scissors).equal(2);
            expect(rules.winner.scissors.paper).equal(1);
        });
    });
    context('Same vs Same', () => {
        it('Stalemate', () => {
            expect(rules.winner.rock.rock).to.be.undefined;
            expect(rules.winner.paper.paper).to.be.undefined;
            expect(rules.winner.scissors.scissors).to.be.undefined;
        });
    });
});
