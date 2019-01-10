import React, {Component} from 'react';
import Plot from 'react-plotly.js';

import RangeBar from '../rangeBar/RangeBar';
import SecurityDataTable from './SecurityDataTable';

export default class SummaryView extends Component {

    constructor(props) {
        super(props);
        this.state = {
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
            ],
        };
    }

    handlePillChange = (index) => {
        this.setState(previousState => {
            for (let i = 0; i < previousState.pills.length; i++) {
                previousState.pills[i]['active'] = false;
            }
            return {
                pills: previousState.pills
            }
        });
        this.setState(prevState => ({
            active: prevState.pills[index].active = true
        }));
        this.setState(() => {
            return {
                indexState: index
            }
        });
    };

    oneDayView = () => {
        return (
            <img className={'img-fluid'} src={'./imgs/stockgraph1D.png'} alt="1 Day"/>
        );
    };

    fiveDayView = () => {
        return (
            <img className={'img-fluid'} src={'./imgs/stockgraph5D.png'} alt="5 Day"/>
        );
    };

    determineView = () => {
        let onIndex = this.state.indexState;
        if (onIndex === 0) {
            return this.oneDayView();
        } else if (onIndex > 0) {
            return this.fiveDayView();
        }
    };

    dateMaker = (number) => {
        let datesToReturn = [];
        for (let i = 0; i < (number + 1); i++) {
            let a = '2018-12-';
            let b = 'T00:00:00';
            let c = a + i + b;
            datesToReturn.push(new Date(c));
        }
        return datesToReturn;
    };

    priceMaker = (number) => {
        let pricesToReturn = [];
        for (let i = 0; i < (number + 1); i++) {
            pricesToReturn.push((Math.random() * 1000).toFixed(2));
        }
        return pricesToReturn;
    };

    differenceMaker = (x1, x2) => {
        let diffToReturn = [];
        for (let i = 0; i < x1.length; i++) {
            let diff;

            if (x1[i] > x2[i]) {
                diff = x1[i] - x2[i];
            } else if (x1[i] < x2[i]) {
                diff = x2[i] - x1[i];
            } else {
                diff = 0;
            }
            diff = Math.abs(diff);
            diffToReturn.push(diff)
        }
        return diffToReturn;
    };

    render() {

        let firstHalfData = [
            {
                name: "Previous Close",
                stat: 3.25
            },
            {
                name: "Open",
                stat: "4.20"
            },
            {
                name: "Day's Range",
                stat: "3.40 - 4.75"
            },
            {
                name: "52 Wk Range",
                stat: "2.95-5.25"
            },
            {
                name: "Combined Volume",
                stat: "95,801,974"
            },
            {
                name: "Comb. Ave. Vol",
                stat: "77,735,456"
            },
            {
                name: "Comb Mrkt. Cap",
                stat: "320.054B"
            },
            {
                name: "Beta (β)",
                stat: 1.32
            },
            {
                name: "Stnd. Deviation (σ)",
                stat: 3.25
            },
            {
                name: "PE Ratio (TTM)",
                stat: 22.80
            },
            {
                name: "ADF Statistic",
                stat: 3.02
            },
            {
                name: "50 Day MMA",
                stat: 3.85
            }
        ];
        let x1 = this.dateMaker(25);

        let y1 = this.priceMaker(25);
        let y2 = this.priceMaker(25);
        let y3 = this.differenceMaker(y1, y2);

        let data1 = {
            x: x1,
            y: y1,
            name: 'Gold',
            type: 'scatter',
            mode: 'lines',
            line: {color: '#17BECF'}
        };

        let data2 = {
            x: x1,
            y: y2,
            name: 'Silver',
            type: 'scatter',
            mode: 'lines',
            line: {color: '#950714'}
        };

        let data3 = {
            x: x1,
            y: y3,
            name: 'Spread',
            type: 'scatter',
            mode: 'lines',
            line: {color: '#614051'}
        };

        return (

            <div className={'row'}>
                <div className={'col-md w-100'}>
                    <RangeBar pills={this.state.pills} actions={this.handlePillChange}/>
                    <div className={'container-fluid'}>
                        <div className={'row'}>
                            <div className={'col'}>
                                <Plot data={[
                                    data1, data2, data3
                                ]}
                                      layout={{autosize: true}}
                                      useResizeHandler={true}
                                      style={{width: "100%"}}
                                />
                            </div>
                        </div>
                        <SecurityDataTable data={firstHalfData}/>
                    </div>
                </div>
            </div>
        );
    }
}