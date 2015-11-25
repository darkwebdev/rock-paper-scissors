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
var views;

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
    context('by default', () => {
        it('should show three Shapes to choose from', () => {
            const shapeList = getOutput(viewCtrl).props.children[2];

            shapeList.forEach((shape, i) => {
                expect(shape.props.type).to.equal(shapes[i]);
            });
        });
    });

    shapes.forEach((shape, i) => {
        context('on select ' + shape, () => {
            beforeEach(() => {
                views = getOutput(viewCtrl).props.children;
            });

            it('should show who\'s won', () => {
                const shapesList = views[2];

                expect(getInstance(viewCtrl).state).not.to.have.property('winner');
                shapesList[i].props.onSelect();

                expect(getInstance(viewCtrl).state).to.have.property('winner');
            });
            it('should show opponent\'s Shape', () => {
                const opShape = views[1];
                const shapesList = views[2];

                expect(opShape.props.type).to.equal('unknown');

                shapesList[i].props.onSelect();

                const revealedOpShape = getOutput(viewCtrl).props.children[1];

                expect(revealedOpShape.props.type).not.to.equal('unknown');
            });
            it('should show Restart Button', () => {
                const shapesList = views[2];
                const button = views[3];

                expect(button.props.className).not.to.contain('btn-visible');
                shapesList[i].props.onSelect();

                const revealedButton = getOutput(viewCtrl).props.children[3];
                expect(revealedButton.props.className).to.contain('btn-visible');
            });
        });
    });

    context('on Restart Button click', () => {
        it('should restart the game', () => {
            views = getOutput(viewCtrl).props.children;

            const button = views[3];
            button.props.onClick();

            expect(getInstance(viewCtrl).state).not.to.have.property('winner');
        })
    })

});

