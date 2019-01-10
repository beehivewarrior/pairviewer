import React, {Component} from 'react';
import Plot from 'react-plotly.js';
import moment from 'moment';

import RangeBar from '../rangeBar/RangeBar';
import SecurityDataTable from './SecurityDataTable';

export default class SummaryView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            indexState: 0,
            pills: [
                {
                    name: "5D",
                    active: true,
                    days: 5
                },
                {
                    name: "1M",
                    active: false,
                    days: (moment().subtract(moment.duration(1, "months")).diff(moment(), "days") * -1)
                },
                {
                    name: "3M",
                    active: false,
                    days: (moment().subtract(moment.duration(3, "months")).diff(moment(), "days") * -1)

                },
                {
                    name: "YTD",
                    active: false,
                    days: (moment().subtract(moment.duration(24, "months")).diff(moment(), "days") * -1)
                },
                {
                    name: "1Y",
                    active: false,
                    days: (moment().subtract(moment.duration(12, "months")).diff(moment(), "days") * -1)
                },
                {
                    name: "2Y",
                    active: false,
                    days: (moment().subtract(moment.duration(24, "months")).diff(moment(), "days") * -1),
                }
            ],
            days: 5,
        };
    };

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
        console.log(this.state.pills[index].days);
        this.setState(prevState => ({
            days: prevState.pills[index].days
        }))
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

    dateMaker = () => {
        let datesToReturn = [];
        let daysNeeded = this.state.days;
        if (daysNeeded < 31) {
            for (let i = daysNeeded; i > 0; i--) {
                let daytoSend = moment().subtract(i, "days");
                let millis = daytoSend.valueOf();
                let thisNewDate = new Date(millis);
                datesToReturn.push(thisNewDate);
            }
        } else {
            let i = daysNeeded < 93 ? Math.round(daysNeeded / 7) : 52;
            for (i; i > 0; i--) {
                let daytoSend = moment().subtract(i, "weeks");
                let millis = daytoSend.valueOf();
                let thisNewDate = new Date(millis);
                datesToReturn.push(thisNewDate);
            }
        }
        return datesToReturn;
    };

    priceMaker = () => {
        let pricesToReturn = [];
        let daysNeeded = this.state.days;
        let i = daysNeeded < 93 ? Math.round(daysNeeded / 7) : 52;
        for (let i = daysNeeded; i > 0; i--) {
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
        let datesToDisplay = this.props.dateRange ? this.props.dateRange : this.dateMaker(25);

        let securityA = this.props.securities ? this.props.securities[0] : this.priceMaker(25);
        let securityB = this.props.securities ? this.props.securities[1] : this.priceMaker(25);
        let spread = this.differenceMaker(securityA, securityB);

        let data1 = {
            x: datesToDisplay.slice(-this.state.days),
            y: securityA.slice(-this.state.days),
            name: 'Gold',
            type: 'scatter',
            mode: 'lines',
            line: {color: '#ee7326'}
        };

        let data2 = {
            x: datesToDisplay.slice(-this.state.days),
            y: securityB.slice(-this.state.days),
            name: 'Silver',
            type: 'scatter',
            mode: 'lines',
            line: {color: '#d45479'}
        };

        let data3 = {
            x: datesToDisplay.slice(-this.state.days),
            y: spread.slice(-this.state.days),
            name: 'Spread',
            type: 'scatter',
            mode: 'lines',
            line: {color: '#825e91'}
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