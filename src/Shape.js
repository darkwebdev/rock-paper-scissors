const React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div className={ 'shape shape-' + this.props.type } onClick={ this.props.onSelect }>
                { this.props.type }
            </div>
        )
    }
});