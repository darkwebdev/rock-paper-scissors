'use strict';

const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
chai.use(require('sinon-chai'));

const React = require('react');

const Store = require('../src/Store');
const rules = require('../src/rules');

const shapes = Object.keys(rules.winner);
var store;

const ViewCtrl = require('../src/ViewCtrl');

var viewCtrl;

describe('Rock-paper-scissors', () => {
    beforeEach(() => {
        store = Store();
        viewCtrl = React.createElement(ViewCtrl, { store: store });
    });
});

