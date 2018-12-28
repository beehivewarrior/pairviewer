import React, {Component} from 'react';

import RangeButton from './RangeButton';

export default class RangeBar extends Component {

    render() {
        return (
            <ul className={"nav nav-pills"}>
                {this.props.pills.map((pill, index) =>
                    <RangeButton
                        name={pill.name}
                        active={pill.active}
                        actions={this.props.actions}
                        key={index.toString()}
                        index={index}
                        id={pill.name.toLowerCase() + "-range"}
                    />
                )}
            </ul>
        );
    }
}