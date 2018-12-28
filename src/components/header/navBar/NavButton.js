import React, {Component} from 'react';

export default class NavButton extends Component {

    handleClicked = this.props.actions;

    handleClick = (e) => {
        e.preventDefault();
        this.props.actions(this.props.index);
    };

    render() {
        return (
            <li className="nav-item">
                <a onClick={this.handleClick} className={this.props.active === true ? "nav-link active" : "nav-link"}
                   href={''}>{this.props.name}</a>
            </li>
        );
    }
}