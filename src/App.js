import React, {Component} from 'react';
import './App.css';
import NavBar from './components/NavBar';


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
            <NavBar tabs={this.state.tabs} actions={this.handleTabChange}/>
        );
    }
}

export default App;
