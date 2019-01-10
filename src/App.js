import React, {Component} from 'react';
import Header from './components/header/Header';
import Viewer from './components/viewer/Viewer';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [
                {
                    name: 'Summary',
                    active: true
                },
                {
                    name: this.props.tickers[0],
                    active: false
                },
                {
                    name: this.props.tickers[1],
                    active: false
                },
                {
                    name: 'Statistics',
                    active: false
                },
                {
                    name: 'Historical Data',
                    active: false
                }
            ],
            classes: {
                row: 'row',
                colmd10: 'col-md-10',
                colmd: 'col-md'
            }
        };
    }

    handleTabChange = (index) => {
        this.setState(previousState => {
            for (let i = 0; i < previousState.tabs.length; i++) {
                previousState.tabs[i]['active'] = false;
            }
            return {
                tabs: previousState.tabs
            }
        });
        this.setState(prevState => ({
            score: prevState.tabs[index].active = true
        }));
    };

    render() {
        // let Header = import("./components/header/Header.js");
        // let Viewer = import("./components/viewer/Viewer.js");
        let emptyRow = <div className={this.state.classes.colmd}>&nbsp;</div>;
        return (
            <div>
                <div className={this.state.classes.row}>
                    {emptyRow}
                    <div className={this.state.classes.colmd10}>
                        <Header tabs={this.state.tabs} actions={this.handleTabChange} priceSpread={'4.50'}/>
                        <Viewer/>
                    </div>
                    {emptyRow}
                </div>
            </div>
        );
    }
}

export default App;
