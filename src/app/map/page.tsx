'use client';

import { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';

mapboxgl.accessToken = 'pk.eyJ1Ijoia3VzYW5hZ2kwMjAxIiwiYSI6ImNseW1yZGNxYzA0cjgybHExdjV4YnoyeTEifQ.aJvZ_54qxj5QXYojX0hnFQ';

const Map = () => {
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [139.7670, 35.6814], // 東京駅
      zoom: 13
    });

    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'mapbox/driving' // 車での移動を仮定
    });

    map.addControl(directions, 'top-left');

    const geocode = async (address :string) => {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${mapboxgl.accessToken}`
      );
      const data = await response.json();
      if (data.features && data.features.length > 0) {
        return data.features[0].center;
      } else {
        throw new Error('Address not found');
      }
    };

    const setRoute = async () => {
      try {
        const origin = await geocode('東京駅');
        const destination = await geocode('コクーンタワー');
        directions.setOrigin(origin);
        directions.setDestination(destination);
      } catch (error) {
        console.error('Error setting route:', error);
      }
    };

    setRoute();

    directions.on('route', (event) => {
      const route = event.route[0];
      setDistance((route.distance / 1000).toFixed(2) + ' km');
      setDuration((route.duration / 60).toFixed(2) + ' 分');
    });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div>
      <div id='map' style={{ width: '100%', height: '500px' }} />
      <div>
        <p>距離: {distance}</p>
        <p>推定到着時間: {duration}</p>
      </div>
    </div>
  );
};

export default Map;
