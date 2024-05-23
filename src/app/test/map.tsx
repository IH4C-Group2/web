'use client'

//Map component Component from library

import React, { useState } from "react";

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
  const [location, setLocation] = useState<{lat: number, lng: number}>({ lat: 0, lng: 0 });

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error("エラーが発生しました：", error);
        },
        { enableHighAccuracy: true }
      );
    } else {
      console.error("このブラウザは位置情報サービスをサポートしていません。");
    }
  };

  return (
    <div className="w-full">
      <div>
        <h1>現在の位置情報</h1>
        <button onClick={handleLocation}>位置情報を取得</button>
        <h1>現在の位置情報</h1>
        <p>緯度: {location.lat}</p>
        <p>経度: {location.lng}</p>
      </div>
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
      >
        {location ? (
          <div>
            <Direction lat={location.lat} lng={location.lng} />
          </div>
        ) : (
          <div>
            <p>取得してから表示</p>
          </div>
        )}
      </GoogleMap>
    </div>
  )
};

export { MapComponent };