import React, {Component} from 'react';
import NavBar from './NavBar';

export default class Header extends Component {

    render() {
        return(
            <div>
                <div className="row">
                    <div className="col-md">
                        <h4>{this.props.tabs[1]['name']} - {this.props.tabs[2]['name']} 45 day(s)</h4>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col-md'}>
                        <h3>$ {this.props.priceSpread.toString()}</h3>
                    </div>
                </div>
                <NavBar tabs={this.props.tabs} actions={this.props.actions} />
            </div>
        );
    }
}