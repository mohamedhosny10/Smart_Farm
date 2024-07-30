import MainNavBar from '../components/navbar'
import MultiMurkersLeafletMap from '../components/MultieMarkersLeafMap'
import Footer from "../components/footer"

  ;
import EachCard from '../components/dashboard/EachCard';

export async function getStaticProps() {
  let rawAllSensorsData = await fetch(`http://localhost:5000/sensor_x_readings`)
  let allSensorsData = await rawAllSensorsData.json();
  let totalWarning = 0
  let totalNormal = 0
  let totalDanger = 0
  for (let i = 0; i < allSensorsData.length; i++) {
    totalWarning += allSensorsData[i].totalWarnings
    totalNormal += allSensorsData[i].totalNormals
    totalDanger += allSensorsData[i].totalDangers
  }
  return {
    props: {
      warnings: totalWarning,
      normals: totalNormal,
      dangers: totalDanger,
      allReadings: allSensorsData
    },
  }
}


export default function Home({ warnings, normals, dangers, allReadings }) {
  console.log(normals)
  console.log(allReadings)
  console.log(warnings)
  console.log(dangers)
  return (
    <>
      <div class="h-25 bg-success position-absolute w-100"></div>
      <MainNavBar></MainNavBar>
      <div class="container-fluid px-4 position-relative">
        <div className='row'>
          <div className="col gx-2">
            <EachCard title={"Danger Readings"} Data={dangers} time={allReadings[0].Time} date={allReadings[0].Date}></EachCard>
          </div>
          <div className="col gx-2">
            <EachCard title={"Warning Readings"} Data={warnings} time={allReadings[0].Time} date={allReadings[0].Date}></EachCard>
          </div>
          <div className="col gx-2">
            <EachCard title={"Normal Readings"} Data={normals} time={allReadings[0].Time} date={allReadings[0].Date}></EachCard>
          </div>
          <div className="row" >
            <div className="col-7 h-75 pb-3">
              <MultiMurkersLeafletMap></MultiMurkersLeafletMap>
            </div>
            <div className="col">
              <table className='table'>
                <thead> 
                  <tr>
                    <th scope="col" className="text-center">Sensor ID</th>
                    <th scope="col">Latituide</th>
                    <th scope="col">Logituide</th>
                    <th scope="col">Connection Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='shadow-sm'>
                    <th scope="row" className="text-center">{allReadings[0].id}</th>
                    <td>{allReadings[0].latitude}</td>
                    <td>{allReadings[0].longituide}</td>
                    <td className='text-primary'>Connected</td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-center">{allReadings[1].id}</th>
                    <td>{allReadings[1].latitude}</td>
                    <td>{allReadings[1].longituide}</td>
                    <td className='text-primary'>Connected</td>
                  </tr>
                  <tr className='shadow-sm'>
                    <th scope="row" className="text-center">{allReadings[2].id}</th>
                    <td>{allReadings[2].latitude}</td>
                    <td>{allReadings[2].longituide}</td>
                    <td className='text-primary'>Connected</td>
                  </tr>
                  <tr>
                    <th scope="row" className="text-center">{allReadings[3].id}</th>
                    <td>{allReadings[3].latitude}</td>
                    <td>{allReadings[3].longituide}</td>
                    <td className='text-primary'>Connected</td>
                  </tr>
                  <tr className='shadow-sm'>
                    <th scope="row" className="text-center">{allReadings[4].id}</th>
                    <td>{allReadings[4].latitude}</td>
                    <td>{allReadings[4].longituide}</td>
                    <td className='text-primary'>Connected</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Footer/>

          </div>
        </div>
      </div>

    </>

  )
}
