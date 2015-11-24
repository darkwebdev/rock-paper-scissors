const rules = require('./rules');
const shapes = Object.keys(rules.winner);

module.exports = () => {
    'use strict';

    var state = {};

    const getRandomIntExcluding = max => Math.round(Math.random() * max);
    const getRandomElem = (arr, randomFn) =>
        arr[(randomFn || getRandomIntExcluding)(arr.length)];

    return {
        selectShapes: (shape1, shape2) => {
            shape2 = shape2 || getRandomElem(shapes);
            state = {
                shape1: shape1,
                shape2: shape2,
                winner: rules.winner[shape1][shape2]
            };
        },
        getRandomElem: getRandomElem,
        getRandomIntExcluding: getRandomIntExcluding,

        getState: () => {
            return state;
        }
    };
};