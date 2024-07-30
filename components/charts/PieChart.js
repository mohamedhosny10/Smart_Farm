import { Chart, Colors, Legend } from "chart.js/auto";
import { useEffect } from "react";
import "chart.js/auto";


function PieChart({ yValues ,title}) {
    var xValues = ["sensor 1", "sensor 2", "sensor 3 ", "sensor 4", "sensor 5"];;
    var barColors = [
        "#b91d47",
        "#00aba9",
        "#2b5797",
        "#e8c3b9",
        "#874C62"
    ];
    useEffect(() => 
    {
        var x = new Chart("myChart", {
            type: "pie",
            data: {
                labels: xValues,
                datasets: [{
                    backgroundColor: barColors,
                    data: yValues
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: title,
                        font: {
                            size: 20,
                        },

                    },
                    legend: {
                        display: true,
                        labels: {
                            boxWidth: 30,
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
            <canvas id="myChart" className="w-75 h-75 pb-5"></canvas>
        </div>
        </>


    )
}
export default PieChart;