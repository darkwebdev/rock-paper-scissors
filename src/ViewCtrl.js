const React = require('react');
const Shape = require('./Shape');
const rules = require('./rules');
const shapes = Object.keys(rules.winner);

module.exports = React.createClass({
    getInitialState: function() {
        return this.props.store.getState();
    },
    render: function() {
        const gameOver = this.state.winner !== undefined;
        const headerMap = {
            undefined: 'Choose your figure',
            0: 'Stalemate!',
            1: 'You win!',
            2: 'You lose =('
        };
        const onSelect = shape => this.props.store.selectShapes(shape);
        return (
            <div class="board">
                <header>
                    <h1>{ headerMap[this.state.winner] }</h1>
                </header>

                <Shape type={ this.state.shape2 } />

                {
                    shapes.map(shape => (<Shape type={ shape } onSelect={ () => onSelect(shape) } />))
                }

                <button className={ 'btn-restart' + (gameOver ? 'btn-visible' : '') }></button>
            </div>
        );
    }
});