import { icon } from "@fortawesome/fontawesome-svg-core"
import "leaflet/dist/leaflet.css"
import 'react-leaflet'
import { MapContainer, TileLayer ,Marker , Popup} from 'react-leaflet'
function LeafletMap({ latitude, longituide ,SensorId}) {
    console.log(SensorId)
    var greenIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        iconSize:     [30, 30], // size of the icon
    });
    return (<>
        <MapContainer className="w-100 h-100 border border-2" center={[29.753312, -95.080447]} zoom={50} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[latitude, longituide]} icon={(greenIcon)}>
                <Popup>
                    Sensor {SensorId}
                </Popup>
            </Marker>
        </MapContainer>
    </>
    );
}
export default LeafletMap;