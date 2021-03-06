import { Map as LeaftletMap, TileLayer } from "react-leaflet";

import "./Map.css";
import { showDataOnMap } from "../utils/showDataOnMap";

export const Map = ({ countries, casesType, center, zoom }) => {
  return (
    <div className="map">
      <LeaftletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType)}
      </LeaftletMap>
    </div>
  );
};
