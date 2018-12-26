import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';


class App extends Component {
    state = {
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
        ]
    };

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
        }))
    };

    render() {
        return (
            <div className='row'>
                <div className="col-md"> </div>
                <div className="col-md-10">
                    <Header tabs={this.state.tabs} actions={this.handleTabChange} spread={4.50}/>
                </div>
                <div className="col-md"> </div>
            </div>
        );
    }
}

export default App;
