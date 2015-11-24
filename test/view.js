'use strict';

const chai = require('chai');
const expect = chai.expect;

const React = require('react');
const TestUtils = require('react-addons-test-utils');

const rules = require('../src/rules');
const Store = require('../src/Store');
const ViewCtrl = require('../src/ViewCtrl');

const shapes = Object.keys(rules.winner);
var store;
var viewCtrl;

const getOutput = function (comp) {
    const rend = TestUtils.createRenderer();
    rend.render(comp);
    return rend.getRenderOutput();
};
const getInstance = function (comp) {
    const rend = TestUtils.createRenderer();
    rend.render(comp);
    return rend._instance._instance;
};

describe('View', () => {
    beforeEach(() => {
        store = Store();
        viewCtrl = React.createElement(ViewCtrl, { store: store });
    });
    it('should show three Shapes to choose from', () => {
        const shapeList = getOutput(viewCtrl).props.children[2];

        shapeList.forEach((shape, i) => {
            expect(shape.props.type).to.equal(shapes[i]);
        })
    });
    context('on select', () => {
        it('should show who won', () => {
            const shapesList = getOutput(viewCtrl).props.children[2];

            shapesList[0].props.onSelect();

            expect(store.getState().winner).to.be.within(0, 2);
        })
    })
});

