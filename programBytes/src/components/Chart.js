import React, {Component} from 'react'; 
import {Bar, Line} from 'react-chartjs-2'; 
import covidAPI from "../services/covidAPI";

class Chart extends Component{ 

    constructor(props, number){
        super(props); 

        this.state= { 
            chartData: 
            {
                labels: [number, "23/11", "24/11"],
                datasets: [
                    {
                        label:"Daily Deaths",
                        data:[ 
                            10000,
                            20000,
                            30000
                        ]
                    }
                ]
            }
        }
    }

    render(){ 
        return ( 
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    options={{ }}
                />
            </div>
            )
    }
}

export default Chart; 