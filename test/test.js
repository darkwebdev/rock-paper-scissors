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

describe('Rock-paper-scissors', () => {
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