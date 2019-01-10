import React, {Component} from 'react';

export default class SecurityDataTable extends Component {

    state = {
        stats:[

            {
                name: this.props.data[0]['name'],
                stat: this.props.data[0]['stat']
            },
            {
                name: this.props.data[1]['name'],
                stat: this.props.data[1]['stat']
            },
            {
                name: this.props.data[2]['name'],
                stat: this.props.data[2]['stat']
            },
            {
                name: this.props.data[3]['name'],
                stat: this.props.data[3]['stat']
            },
            {
                name: this.props.data[4]['name'],
                stat: this.props.data[4]['stat']
            },
            {
                name: this.props.data[5]['name'],
                stat: this.props.data[5]['stat']
            },
            {
                name: this.props.data[6]['name'],
                stat: this.props.data[6]['stat']
            },
            {
                name: this.props.data[7]['name'],
                stat: this.props.data[7]['stat']
            },
            {
                name: this.props.data[8]['name'],
                stat: this.props.data[8]['stat']
            },
            {
                name: this.props.data[9]['name'],
                stat: this.props.data[9]['stat']
            },
            {
                name: this.props.data[10]['name'],
                stat: this.props.data[10]['stat']
            },
            {
                name: this.props.data[11]['name'],
                stat: this.props.data[11]['stat']
            },
        ]
    };

    render() {
        return (
            <div className={'row'}>
                <div className={"col-md-6"}>
                    <div className={'row'}>
                        <div className={'col-md-6 col-sm-5 table-responsive'}>
                            <table className={"table table-bordered table-sm"}>
                                <tbody>
                                <tr className={"d-flex"}>
                                    <td className={'col-6'}>{this.state.stats[0]['name']}</td>
                                    <td className={"col-6 text-right font-weight-bold"}>{this.state.stats[0]['stat']}</td>
                                </tr>
                                <tr className={"d-flex"}>
                                    <td className={'col-6'}>{this.state.stats[1]['name']}</td>
                                    <td className={"col-6 text-right font-weight-bold"}>{this.state.stats[1]['stat']}</td>
                                </tr>
                                <tr className={"d-flex"}>
                                    <td className={'col-6'}>{this.state.stats[2]['name']}</td>
                                    <td className={"col-6 text-right font-weight-bold"}>{this.state.stats[2]['stat']}</td>
                                </tr>
                                <tr className={"d-flex"}>
                                    <td className={'col-6'}>{this.state.stats[3]['name']}</td>
                                    <td className={"col-6 text-right font-weight-bold"}>{this.state.stats[3]['stat']}</td>
                                </tr>
                                <tr className={"d-flex"}>
                                    <td className={'col-6'}>{this.state.stats[4]['name']}</td>
                                    <td className={"col-6 text-right font-weight-bold"}>{this.state.stats[4]['stat']}</td>
                                </tr>
                                <tr className={"d-flex"}>
                                    <td className={'col-6'}>{this.state.stats[5]['name']}</td>
                                    <td className={"col-6 text-right font-weight-bold"}>{this.state.stats[5]['stat']}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={'col-md-6 col-sm-5 table-responsive'}>
                            <table className={"table table-bordered table-sm"}>
                                <tbody>
                                <tr className={"d-flex"}>
                                    <td className={'col-6'}>{this.state.stats[6]['name']}</td>
                                    <td className={"col-6 text-right font-weight-bold"}>{this.state.stats[6]['stat']}</td>
                                </tr>
                                <tr className={"d-flex"}>
                                    <td className={'col-6'}>{this.state.stats[7]['name']}</td>
                                    <td className={"col-6 text-right font-weight-bold"}>{this.state.stats[7]['stat']}</td>
                                </tr>
                                <tr className={"d-flex"}>
                                    <td className={'col-6'}>{this.state.stats[8]['name']}</td>
                                    <td className={"col-6 text-right font-weight-bold"}>{this.state.stats[8]['stat']}</td>
                                </tr>
                                <tr className={"d-flex"}>
                                    <td className={'col-6'}>{this.state.stats[9]['name']}</td>
                                    <td className={"col-6 text-right font-weight-bold"}>{this.state.stats[9]['stat']}</td>
                                </tr>
                                <tr className={"d-flex"}>
                                    <td className={'col-6'}>{this.state.stats[10]['name']}</td>
                                    <td className={"col-6 text-right font-weight-bold"}>{this.state.stats[10]['stat']}</td>
                                </tr>
                                <tr className={"d-flex"}>
                                    <td className={'col-6'}>{this.state.stats[11]['name']}</td>
                                    <td className={"col-6 text-right font-weight-bold"}>{this.state.stats[11]['stat']}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}