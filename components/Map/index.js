import dynamic from "next/dynamic"
const Map = dynamic(() => import("../Map/leafletMap"),
    { ssr: false });
export default Map