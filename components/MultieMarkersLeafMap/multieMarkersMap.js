import { icon } from "@fortawesome/fontawesome-svg-core"
import "leaflet/dist/leaflet.css"
import 'react-leaflet'
import { MapContainer, TileLayer ,Marker , Popup} from 'react-leaflet'
function MultiMurkersLeafletMap() {
    var greenIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        iconSize:     [30, 30], // size of the icon
    });
    return (<>
        <MapContainer className="w-100 h-100" center={[29.753312, -95.080447]} zoom={30} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[29.753312  , -95.08017]} icon={(greenIcon)}>
                <Popup>
                    Sensor 1.
                </Popup>
            </Marker>
            <Marker position={[29.753512, -95.080037]} icon={(greenIcon)}>
                <Popup>
                Sensor 2.
                </Popup>
            </Marker>
            <Marker position={[29.753212, -95.08117]} icon={(greenIcon)}>
                <Popup>
                Sensor 3.
                </Popup>
            </Marker>
            <Marker position={[29.753202, -95.081847]} icon={(greenIcon)}>
                <Popup>
                Sensor 4.
                </Popup>
            </Marker>   
            <Marker position={[29.753352, -95.080447]} icon={(greenIcon)}>
                <Popup>
                Sensor 5.
                </Popup>
            </Marker>  
        </MapContainer>
    </>
    );
}
export default MultiMurkersLeafletMap;