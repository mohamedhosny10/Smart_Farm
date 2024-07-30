import MainNavBar from "../../../components/navbar"
import SideNav from "../../../components/water_quality/sidenav"
import EachCard from "../../../components/water_quality/EachCard"
import Footer from "../../../components/footer"
import DoughnutChart from "../../../components/charts/DoughnutChart"
import LeafletMap from "../../../components/Map/"

export const getStaticPaths = async () => {
    const rawSensorPromise = await fetch("http://localhost:5000/sensor_x_readings")
    const allSensors = await rawSensorPromise.json()
    const paths = allSensors.map(sensor => {
        return {
            params: { sensorId: sensor.id.toString() }
        }
    })
    return {
        paths,
        fallback: true
    }
}
export async function getStaticProps(context) {
    const sensorId = context.params.sensorId;
    let rawSensorReadingPromise = await fetch(`http://localhost:5000/sensor_x_readings/${sensorId}`)
    const sensorTelemetries = await rawSensorReadingPromise.json()
    const rawWaterQualityPrediction = await fetch("http://127.0.0.1:8000/api/v1/WQRandomforest/predict", {
        method: 'POST',
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(sensorTelemetries.Data),
    })
    let waterQualityPrediction = await rawWaterQualityPrediction.json();
    return {
        props: {
            sensorLatestReadings: sensorTelemetries,
            Prediction: (waterQualityPrediction.probability * 100)

        },
    }
}
function SensorReadings({ sensorLatestReadings, Prediction }) {


    console.log(Prediction)
    console.log(sensorLatestReadings)
    return (<>
        <div class="h-25 bg-success position-absolute w-100"></div>
        <MainNavBar></MainNavBar>
        <div class="container-fluid position-relative my-4 row ps-4">
            <SideNav></SideNav>
            <div className="col">
                <div className="row d-flex justify-content-center">
                    <div className="col-5 me-4 g-2">
                        <div className="card shadow-lg text-center  ">
                            <DoughnutChart title={`Water Quality Of Sensor ${sensorLatestReadings.id}`} yValues={[Prediction, 100 - Prediction]}></DoughnutChart>
                            <h3> {Math.floor(Prediction)} % Clear</h3>
                        </div>
                    </div>
                    <div className="col-6 g-2">
                        <div className=" w-100 h-100 card shadow-lg ">
                            <LeafletMap latitude={sensorLatestReadings.latitude} longituide={sensorLatestReadings.longituide}></LeafletMap>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col g-2">
                            <EachCard ReadingName={"PH Value"} Data={sensorLatestReadings.Data.ph} Time={sensorLatestReadings.Time} Date={sensorLatestReadings.Date}></EachCard>
                        </div>
                        <div className="col g-2">
                            <EachCard ReadingName={"Hardness"} Data={sensorLatestReadings.Data.Hardness} Time={sensorLatestReadings.Time} Date={sensorLatestReadings.Date}></EachCard>
                        </div>
                        <div className="col g-2">
                            <EachCard ReadingName={"Solids"} Data={sensorLatestReadings.Data.Solids} Time={sensorLatestReadings.Time} Date={sensorLatestReadings.Date}></EachCard>
                        </div>
                    </div>
                    <div className="row mt-3 ">
                        <div className="col g-2">
                            <EachCard ReadingName={"Chloramines"} Data={sensorLatestReadings.Data.Chloramines} Time={sensorLatestReadings.Time} Date={sensorLatestReadings.Date}></EachCard>
                        </div>
                        <div className="col g-2">
                            <EachCard ReadingName={"Sulfate"} Data={sensorLatestReadings.Data.Sulfate} Time={sensorLatestReadings.Time} Date={sensorLatestReadings.Date}></EachCard>
                        </div>
                        <div className="col g-2">
                            <EachCard ReadingName={"Conductivity"} Data={sensorLatestReadings.Data.Conductivity} Time={sensorLatestReadings.Time} Date={sensorLatestReadings.Date}></EachCard>
                        </div>
                    </div>
                    <div className="row my-3 ">
                        <div className="col g-2">
                            <EachCard ReadingName={"Organic_carbon"} Data={sensorLatestReadings.Data.Organic_carbon} Time={sensorLatestReadings.Time} Date={sensorLatestReadings.Date}></EachCard>
                        </div>
                        <div className="col g-2">
                            <EachCard ReadingName={"Trihalomethanes"} Data={sensorLatestReadings.Data.Trihalomethanes} Time={sensorLatestReadings.Time} Date={sensorLatestReadings.Date}></EachCard>
                        </div>
                        <div className="col g-2">
                            <EachCard ReadingName={"Turbidity"} Data={sensorLatestReadings.Data.Turbidity} Time={sensorLatestReadings.Time} Date={sensorLatestReadings.Date}></EachCard>
                        </div>
                    </div>

                </div>

            </div>
            <Footer></Footer>
        </div>
    </>)

}
export default SensorReadings