const React = require('react');

module.exports = React.createClass({
    render: () => (
        <div className={ this.props.type }>
            { this.props.type }
        </div>
    )
});