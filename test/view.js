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

const getRend = comp => {
    const rend = TestUtils.createRenderer();
    rend.render(comp);
    return rend;
};
const getOutput = comp => getRend(comp).getRenderOutput();
const getInstance = comp => getRend(comp)._instance._instance;

describe('View', () => {
    beforeEach(() => {
        store = Store();
        viewCtrl = React.createElement(ViewCtrl, { store: store });
    });
    it('should show three Shapes to choose from', () => {
        const shapeList = getOutput(viewCtrl).props.children[2];

        shapeList.forEach((shape, i) => {
            expect(shape.props.type).to.equal(shapes[i]);
        });
    });
    shapes.forEach((shape, i) => {
        context('on select ' + shape, () => {
            it('should show who\'s won', () => {
                const shapesList = getOutput(viewCtrl).props.children[2];

                expect(getInstance(viewCtrl).state).not.to.have.property('winner');
                shapesList[i].props.onSelect();

                expect(getInstance(viewCtrl).state).to.have.property('winner');
            });
            it('should show opponent\'s Shape', () => {
                const children = getOutput(viewCtrl).props.children;
                const opShape = children[1];
                const shapesList = children[2];

                expect(opShape.props.type).not.to.exist;

                shapesList[i].props.onSelect();

                const revealedOpShape = getOutput(viewCtrl).props.children[1];

                expect(revealedOpShape.props.type).to.exist;
            });
        });
    })
});

