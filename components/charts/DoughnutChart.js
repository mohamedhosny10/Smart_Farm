import { Chart, Colors } from "chart.js/auto";
import { useEffect } from "react";
import "chart.js/auto";


function DoughnutChart({yValues,title}) {
    var xValues = ["Clear","Dirty"];
    var barColors = [
        "#0d6efd",
        "#C5C5C5"
    ];
    useEffect(() => {
        var x = new Chart("doughNutChart", {
            type: "doughnut",
            data: {
                labels: xValues,
                datasets: [{
                    backgroundColor: barColors,
                    data: yValues
                }]
            },
            options: {
                responsive:true,
                plugins: {
                    title: {
                        display: true,
                        text: title,
                        font:{
                            size:18,
                        },                  
                    },
                    legend:{
                        display:true,
                        labels: {
                            boxWidth:50,
                            font: {
                                size: 18
                            }
                        },
                    }
                  
                }
            }
        });
        return () => {
            x.destroy();
        }
    }, [])
    return (
        <>  <div className="d-flex justify-content-center align-items-center">
                <canvas id="doughNutChart" className="w-75 h-75 pb-2"></canvas>
                </div>
        </>


    )
}
export default DoughnutChart;