const rules = require('./rules');

module.exports = () => {
    'use strict';

    let state = {};

    return {
        selectThings: (thing1, thing2) => {
            state = {
                thing1: thing1,
                thing2: thing2,
                winner: rules.winner[thing1][thing2]
            };
        },
        getRandomElem: (arr, randomFn) => arr[randomFn(arr.length)],
        getRandomIntExcluding: max => Math.round(Math.random() * max),

        getState: () => state
    };
};