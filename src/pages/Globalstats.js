import axios from "axios";
import React, { Component } from "react";


class Globalstats extends Component {

    state = {
        res: {},
        loading: true
    }

    async componentDidMount() {
        const res = await axios.get('https://disease.sh/v3/covid-19/all')
        if (res.status === 200) {
            // console.log(res.data.active)
            this.setState({
                res: res,
                loading: false
            })
        }
    }

    render() {


        var allData_html_table = "";
        if (this.state.loading) {
            allData_html_table =
                <tbody>
                    <tr>
                        <td colSpan="2" className="text-center">Cargado!</td>
                    </tr>
                </tbody>
        }
        else {

            const fdate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).format(new Date(this.state.res.data.updated)) // 01/11/2021

            allData_html_table =
                <tbody>
                    <tr>
                        <td>Updated</td>
                        <td>{fdate}</td>
                    </tr>
                    <tr>
                        <td>Total Cases</td>
                        <td>{this.state.res.data.cases}</td>
                    </tr>
                    <tr>
                        <td>Today Active Cases</td>
                        <td>{this.state.res.data.todayCases}</td>
                    </tr>
                    <tr>
                        <td>Total Deaths</td>
                        <td>{this.state.res.data.deaths}</td>
                    </tr>
                    <tr>
                        <td>Today Deaths</td>
                        <td>{this.state.res.data.todayDeaths}</td>
                    </tr>

                </tbody>

        }

        return (
            <div>
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th colSpan="2"><h3 className="text-center">Tabla Datos globales</h3></th>
                        </tr>
                    </thead>

                    {allData_html_table}

                </table>

            </div>
        )
    }

}

export default Globalstats