import MainNavBar from "../../components/navbar";
import EachCard from "../../components/water_quality/EachCard";
import Footer from "../../components/footer";
import PieChart from "../../components/charts/PieChart";
import DoughnutChart from "../../components/charts/DoughnutChart";
export async function getStaticProps() {
  let rawAverageValues = await fetch(`http://localhost:5000/Average_Values`)
  var currentAverageValues = await rawAverageValues.json();
  let rawAllSensorsData = await fetch(`http://localhost:5000/sensor_x_readings`)
  let allSensorsData = await rawAllSensorsData.json();
  let predictions = []
  for (let i = 0; i < 5; i++) {
    let telemetry = allSensorsData[i].Data
    const rawPromise = await fetch("http://127.0.0.1:8000/api/v1/WQRandomforest/predict", {
      method: 'POST',
      mode: "cors",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(telemetry),
    })
    let eachSensorPrediction = await rawPromise.json();
    predictions.push(eachSensorPrediction.probability * 100)
  }
  return {
    props: {
      averageValues: currentAverageValues,
      allReadings: allSensorsData,
      allPredictions: predictions
    },
  }
}
function WaterQuality({ averageValues, allPredictions }) {
  function getAverage() {
    let sum = 0
    for (let i = 0; i < 5; i++) {
      sum = sum + allPredictions[i]
    }
    return (sum / 5)
  }
  const averageWaterQuality = getAverage(allPredictions)
  return (
    <>
      <div>
        <div class="h-25 bg-success position-absolute w-100"></div>
        <MainNavBar></MainNavBar>
        <div class="container-fluid text-center position-absolute mt-1  ps-4">

          <div class="row mt-2">
            <div class="col-5  g-2">
              <div className="card shadow-lg pb-3">
                <div className="card-body my-4">
                  <h2> Total Number of sensors </h2>
                  <h1 className="m-3 fs-very-large "> 5 </h1>
                  <a
                    href={"water_quality/sensors/1"}
                    class="btn btn-lg btn-success w-100 mt-3 mb-3 w-75"
                  >
                    View More
                  </a>
                </div>
              </div>
            </div>
            <div className="col g-2">
              <div className="card  shadow-lg  ">
                <DoughnutChart title={"Average Water Quality Of All Sensors"} yValues={[averageWaterQuality, 100 - averageWaterQuality]}></DoughnutChart>
                <h3> {Math.floor(averageWaterQuality)} % Clear</h3>
              </div>
            </div>
            <div className="col g-2">
              <div className="card shadow-lg ">
                <PieChart yValues={allPredictions} title={"Each Sensor Water Quality Contribution"}></PieChart>
              </div>
            </div>
          </div>


          <div className="row mt-3">
            <div className="col g-2">
              <EachCard ReadingName={"Average PH Value"} Data={averageValues[0].Data.ph} Time={averageValues[0].Time} Date={averageValues[0].Date}></EachCard>
            </div>
            <div className="col g-2">
              <EachCard ReadingName={"Average Hardness"} Data={averageValues[0].Data.Hardness} Time={averageValues[0].Time} Date={averageValues[0].Date}></EachCard>
            </div>
            <div className="col g-2">
              <EachCard ReadingName={"Average Solids"} Data={averageValues[0].Data.Solids} Time={averageValues[0].Time} Date={averageValues[0].Date}></EachCard>
            </div>
          </div>
          <div className="row mt-3 ">
            <div className="col g-2">
              <EachCard ReadingName={"Average Chloramines"} Data={averageValues[0].Data.Chloramines} Time={averageValues[0].Time} Date={averageValues[0].Date}></EachCard>
            </div>
            <div className="col g-2">
              <EachCard ReadingName={"Average Sulfate"} Data={averageValues[0].Data.Sulfate} Time={averageValues[0].Time} Date={averageValues[0].Date}></EachCard>
            </div>
            <div className="col g-2">
              <EachCard ReadingName={"Average Conductivity"} Data={averageValues[0].Data.Conductivity} Time={averageValues[0].Time} Date={averageValues[0].Date}></EachCard>
            </div>
          </div>
          <div className="row my-3 ">
            <div className="col g-2">
              <EachCard ReadingName={"Average Organic_carbon"} Data={averageValues[0].Data.Organic_carbon} Time={averageValues[0].Time} Date={averageValues[0].Date}></EachCard>
            </div>
            <div className="col g-2">
              <EachCard ReadingName={"Average Trihalomethanes"} Data={averageValues[0].Data.Trihalomethanes} Time={averageValues[0].Time} Date={averageValues[0].Date}></EachCard>
            </div>
            <div className="col g-2">
              <EachCard ReadingName={"Average Turbidity"} Data={averageValues[0].Data.Turbidity} Time={averageValues[0].Time} Date={averageValues[0].Date}></EachCard>
            </div>
          </div>
          <Footer></Footer>
        </div>
      </div >
    </>
  );
}
export default WaterQuality;
