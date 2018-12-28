import React, {Component} from 'react';
import {Line} from '@nivo/line'

import RangeBar from '../rangeBar/RangeBar';
import SecurityDataTable from './SecurityDataTable';

export default class SummaryView extends Component {

    state = {
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
        chartData: [
            {
                "id": "japan",
                "color": "hsl(310, 70%, 50%)",
                "data": [
                    {
                        "x": "plane",
                        "y": 91
                    },
                    {
                        "x": "helicopter",
                        "y": 225
                    },
                    {
                        "x": "boat",
                        "y": 249
                    },
                    {
                        "x": "train",
                        "y": 5
                    },
                    {
                        "x": "subway",
                        "y": 132
                    },
                    {
                        "x": "bus",
                        "y": 56
                    },
                    {
                        "x": "car",
                        "y": 260
                    },
                    {
                        "x": "moto",
                        "y": 122
                    },
                    {
                        "x": "bicycle",
                        "y": 15
                    },
                    {
                        "x": "others",
                        "y": 157
                    }
                ]
            },
            {
                "id": "france",
                "color": "hsl(172, 70%, 50%)",
                "data": [
                    {
                        "x": "plane",
                        "y": 103
                    },
                    {
                        "x": "helicopter",
                        "y": 263
                    },
                    {
                        "x": "boat",
                        "y": 209
                    },
                    {
                        "x": "train",
                        "y": 4
                    },
                    {
                        "x": "subway",
                        "y": 12
                    },
                    {
                        "x": "bus",
                        "y": 3
                    },
                    {
                        "x": "car",
                        "y": 230
                    },
                    {
                        "x": "moto",
                        "y": 52
                    },
                    {
                        "x": "bicycle",
                        "y": 182
                    },
                    {
                        "x": "others",
                        "y": 118
                    }
                ]
            },
            {
                "id": "us",
                "color": "hsl(249, 70%, 50%)",
                "data": [
                    {
                        "x": "plane",
                        "y": 177
                    },
                    {
                        "x": "helicopter",
                        "y": 256
                    },
                    {
                        "x": "boat",
                        "y": 142
                    },
                    {
                        "x": "train",
                        "y": 79
                    },
                    {
                        "x": "subway",
                        "y": 282
                    },
                    {
                        "x": "bus",
                        "y": 218
                    },
                    {
                        "x": "car",
                        "y": 206
                    },
                    {
                        "x": "moto",
                        "y": 178
                    },
                    {
                        "x": "bicycle",
                        "y": 148
                    },
                    {
                        "x": "others",
                        "y": 54
                    }
                ]
            },
            {
                "id": "germany",
                "color": "hsl(17, 70%, 50%)",
                "data": [
                    {
                        "x": "plane",
                        "y": 1
                    },
                    {
                        "x": "helicopter",
                        "y": 114
                    },
                    {
                        "x": "boat",
                        "y": 291
                    },
                    {
                        "x": "train",
                        "y": 85
                    },
                    {
                        "x": "subway",
                        "y": 82
                    },
                    {
                        "x": "bus",
                        "y": 158
                    },
                    {
                        "x": "car",
                        "y": 63
                    },
                    {
                        "x": "moto",
                        "y": 112
                    },
                    {
                        "x": "bicycle",
                        "y": 291
                    },
                    {
                        "x": "others",
                        "y": 155
                    }
                ]
            },
            {
                "id": "norway",
                "color": "hsl(344, 70%, 50%)",
                "data": [
                    {
                        "x": "plane",
                        "y": 70
                    },
                    {
                        "x": "helicopter",
                        "y": 50
                    },
                    {
                        "x": "boat",
                        "y": 109
                    },
                    {
                        "x": "train",
                        "y": 88
                    },
                    {
                        "x": "subway",
                        "y": 289
                    },
                    {
                        "x": "bus",
                        "y": 80
                    },
                    {
                        "x": "car",
                        "y": 10
                    },
                    {
                        "x": "moto",
                        "y": 101
                    },
                    {
                        "x": "bicycle",
                        "y": 119
                    },
                    {
                        "x": "others",
                        "y": 182
                    }
                ]
            }
        ]
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

        return (
            <div className={'row'}>
                <div className={'col-md'}>
                    <RangeBar pills={this.state.pills} actions={this.handlePillChange}/>
                    {this.determineView()}
                    <SecurityDataTable data={firstHalfData}/>
                    <Line
                        width={900}
                        height={400}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 60,
                            left: 80
                        }}
                        data={[{
                            id: 'fake corp. A', color: '#547687', data: [
                                {x: '#0', y: 0.4},
                                {x: '#1', y: 0.5},
                                {x: '#2', y: 0.7},
                            ]
                        }]}
                        animate
                        enableArea
                        yScale={{type: 'linear', stacked: true}}
                        curve="linear"
                        dotSize={8}
                        dotColor="#fff"
                        dotBorderWidth={2}
                    />
                </div>
            </div>
        );
    }
}