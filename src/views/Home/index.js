import React, {useState, useEffect} from 'react';
import { ApexChart } from "../../components/sofbox";

const chart = {
    chart: {
        height: 680,
        type: 'bar',
        sparkline: {
            show: false

        },
        toolbar: {
            show: false
        },
    },
    colors: ['#0084ff', '#ffd400'],
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '30%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: false,
        width: 5,
        colors: ['#ffffff'],
    },
    series: [{
        name: 'Mobile',
        enabled: 'true',
        data: [44, 90, 90, 60, 115]
    }, {
        name: 'Desktop',
        data: [35, 80, 100, 70, 95]
    }],
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: function(val) {
                return "$ " + val + " thousands"
            }
        }
    }
}


export default function Home () {

    const [chartData, setChartData] = useState(chart);


    useEffect(() => {

    }, [])

    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                            <div className="iq-header-title">
                                {/* <h4 className="card-title">Cash flow</h4> */}
                            </div>
                        </div>
                        <ApexChart
                            element={"bar-chart-6"}
                            chartOption={ chartData }
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
