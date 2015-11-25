'use strict';

const React = require('react');
const Shape = require('./Shape');
const rules = require('./rules');
const shapes = Object.keys(rules.winner);

module.exports = React.createClass({
    getInitialState: function() {
        return this.props.store.getState();
    },
    render: function() {
        const store = this.props.store;
        const gameOver = this.state.winner !== undefined;
        const headerMap = {
            undefined: 'Choose your figure',
            0: 'Stalemate!',
            1: 'You win!',
            2: 'You lose =('
        };
        const onChange = () => {
            this.replaceState(store.getState());
        };
        const onRestart = () => {
            store.restart();
            onChange();
        };
        const onSelect = shape => {
            store.selectShapes(shape);
            onChange();
        };
        return (
            <div className="board">
                <header>
                    <h1>{ headerMap[this.state.winner] }</h1>
                </header>

                <section className="opponent">
                    <Shape type={ this.state.shape2 || '?' } />
                </section>

                <section className="player">
                    {
                        shapes.map(shape => (<Shape type={ shape } onSelect={ () => onSelect(shape) } />))
                    }
                </section>

                <footer>
                    <button className={ 'btn-restart' + (gameOver ? ' btn-visible' : '') } onClick={ onRestart }>Play again?</button>
                </footer>
            </div>
        );
    }
});