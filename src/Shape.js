const React = require('react');

module.exports = React.createClass({
    render: function() {
        return (
            <div className={ this.props.type } onClick={ this.props.onSelect }>
                { this.props.type }
            </div>
        )
    }
});