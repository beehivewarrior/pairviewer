import React, {Component} from 'react';

import RangeBar from './RangeBar';

export default class SummaryView extends Component {

    state={
        indexState: 0,
        pills: [
            {
                name: "1D",
                active: true
            },
            {
                name: "5D",
                active: false
            },
            {
                name: "1M",
                active: false
            },
            {
                name: "3M",
                active: false
            },
            {
                name: "YTD",
                active: false
            },
            {
                name: "1Y",
                active: false
            },
            {
                name: "5Y",
                active: false
            }
        ]
    };

    handlePillChange = (index) => {
        this.setState(previousState => {
            for(let i = 0; i < previousState.pills.length; i++) {
                previousState.pills[i]['active'] = false;
            }
            return{
                pills: previousState.pills
            }
        });
        this.setState(prevState => ({
            active: prevState.pills[index].active = true
        }));
        this.setState(() => {
            return{
                indexState: index
            }
        });
    };

    oneDayView = () => {
        return (
            <img className={'img-fluid'} src={'./imgs/stockgraph1D.png'}/>
        );
    };

    fiveDayView = () => {
        return (
            <img className={'img-fluid'} src={'./imgs/stockgraph5D.png'}/>
        );
    };



    render() {
        let viewWindowVar;
        let onIndex = this.state.indexState;
        if(onIndex === 0){
            viewWindowVar = this.oneDayView();
        } else if(onIndex > 0){
            viewWindowVar = this.fiveDayView();
        }


        return (
            <div className={'row'}>
                <div className={'col-md'}>
                    <RangeBar pills={this.state.pills} actions={this.handlePillChange}/>
                    {viewWindowVar}
                </div>
            </div>
        );
    }
}