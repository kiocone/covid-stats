import axios from "axios";
import React, { Component } from "react";

class CountryList extends Component {

    state = {
        res: {},
        loading: true
    }

    async componentDidMount() {
        const res = await axios.get('https://disease.sh/v3/covid-19/countries')
        if (res.status === 200) {
            console.log(res.data.active)
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
                        <td colSpan="2" className="text-center"><h3>Loading data...</h3></td>
                    </tr>
                </tbody>
        }
        else {

            //const fdate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).format(new Date(this.state.res.data.updated)) // 01/11/2021

            allData_html_table =
                this.state.res.data.map((item) => {
                    return (
                        <tr>
                            <td>{item.country}</td>
                            <td>{item.cases}</td>
                            <td>{item.todayCases}</td>
                            <td>{item.recovered}</td>
                            <td>{item.todayRecovered}</td>
                        </tr>
                    )
                })
        }


        return (
            <div>
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>
                                Country
                            </th>
                            <th>
                                Total Cases
                            </th>
                            <th>
                                New Cases
                            </th>
                            <th>
                                Total REcovered
                            </th>
                            <th>
                                New Recovered
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {allData_html_table}
                    </tbody>
                </table>

            </div>
        )
    }
}

export default CountryList