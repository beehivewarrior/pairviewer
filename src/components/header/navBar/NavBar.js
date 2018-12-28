import React, {Component} from 'react';

import NavButton from './NavButton';


class NavBar extends Component {

    render() {
        return (
            <ul className="nav nav-tabs nav-fill" id="theTabs">
                {this.props.tabs.map((tab,index) =>
                    <NavButton
                        name={tab.name}
                        active={tab.active}
                        actions={this.props.actions}
                        key={index.toString()}
                        index={index}
                        id={tab.name.toLowerCase() + "-tab"}
                    />
                )}
            </ul>
        )
    }
}

export default NavBar;