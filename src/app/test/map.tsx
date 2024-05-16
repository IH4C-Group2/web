'use client'

//Map component Component from library
import { GoogleMap } from "@react-google-maps/api";
import { styles } from "./mapstyles";
import Direction from './Direction';

//Map's styling
const defaultMapContainerStyle = {
    width: '100%',
    height: '100vh',
    borderRadius: '15px 0px 0px 15px',
};

//K2's coordinates
const defaultMapCenter = {
    lat: 35.6915744,
    lng: 139.6965973
}

//Default zoom level, can be adjusted
const defaultMapZoom = 18

//Map options
const defaultMapOptions = {
    // styles: styles,
    // zoomControl: true,
    // tilt: 0,
    // gestureHandling: 'auto',
    // disableDefaultUI: true,
    // mapTypeId: 'satellite',
  styles: styles,
  disableDefaultUI: true,
  // デフォルトUI（衛星写真オプションなど）をキャンセルします。
  zoomControl: true,
};

const MapComponent = () => {
    return (
        <div className="w-full">
            <GoogleMap
                mapContainerStyle={defaultMapContainerStyle}
                center={defaultMapCenter}
                zoom={defaultMapZoom}
                options={defaultMapOptions}
            >
              <Direction />
            </GoogleMap>
        </div>
    )
};

export { MapComponent };