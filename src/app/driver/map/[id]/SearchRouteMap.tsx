'use client';

import type { FC } from 'react';
import { useEffect, useState, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxLanguage from '@mapbox/mapbox-gl-language';
import 'mapbox-gl/dist/mapbox-gl.css';
import { getRouteInformation, geocode, getEstimatedArrivalTime, getCurrentPosition } from './MapboxHelper';
import { useRouter } from 'next/navigation';

type Props = {
  departure: string;
  destination: string;
};

const SearchRouteMap: FC<Props> = ({ departure, destination }) => {
  const router = useRouter();

  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ?? '';
  const mapContainer = useRef(null);
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const [route, setRoute] = useState({
    geometry: {
      type: '' as any,
      coordinates: [],
    },
  });
  const [routeDistance, setRouteDistance] = useState(0);
  const [estimatedArrivalTime, setEstimatedArrivalTime] = useState(0);
  const [departureCoordinates, setDepartureCoordinates] = useState<number[]>([]);
  const [destinationCoordinates, setDestinationCoordinates] = useState<number[]>([]);
  const [isDeparted, setIsDeparted] = useState(false);
  const [currentLocation, setCurrentLocation] = useState<GeolocationPosition | null>(null);
  const [currentMarker, setCurrentMarker] = useState<mapboxgl.Marker | null>(null);
  const [countdown, setCountdown] = useState(10);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const countdownRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const initializeMap = async ({
      setMap,
      mapContainer,
    }: {
      setMap: any;
      mapContainer: any;
    }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        center: [139.7670516, 35.6811673],
        zoom: 15,
        style: 'mapbox://styles/mapbox/streets-v12',
      });
      // 言語変更設定
      const language = new MapboxLanguage({ defaultLanguage: 'ja' });
      map.addControl(language);

      map.on('load', async () => {
        setMap(map);
        map.resize();

        // 出発地と目的地の座標を取得
        const departureCoords = await geocode(departure);
        const destinationCoords = await geocode(destination);

        if (departureCoords && destinationCoords) {
          setDepartureCoordinates(departureCoords);
          setDestinationCoordinates(destinationCoords);

          // ルート検索
          await handleRouteSearch(map, departureCoords, destinationCoords);
        }
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map, departure, destination]);

  // ルート検索を実行する関数
  async function handleRouteSearch(
    map: any,
    startCds: number[],
    endCds: number[],
  ) {
    if (startCds && endCds) {
      const routeInformation = await getRouteInformation(startCds, endCds);
      setRouteDistance(routeInformation.distance / 1000);

      const estimatedTime = await getEstimatedArrivalTime(startCds, endCds);
      setEstimatedArrivalTime(estimatedTime);

      if (map.getSource('route')) {
        map.getSource('route').setData({
          type: 'Feature',
          properties: {},
          geometry: routeInformation.geometry,
        });
      } else {
        // ルートが存在しない場合は、出発地と目的地のピンを作成
        const departureLongitude = startCds[0];
        const departureLatitude = startCds[1];
        const destinationLongitude = endCds[0];
        const destinationLatitude = endCds[1];

        // 出発地のマーカー（ピン）を作成
        const departureMarker = new mapboxgl.Marker({
          color: 'green', // マーカーの色を指定
          draggable: false, // true: ドラッグ可能, false: ドラッグ不可
        });

        // 目的地のマーカー（ピン）を作成
        const destinationMarker = new mapboxgl.Marker({
          color: 'red', // マーカーの色を指定
          draggable: false, // true: ドラッグ可能, false: ドラッグ不可
        });

        // マーカーを地図に追加
        departureMarker.setLngLat([departureLongitude, departureLatitude]).addTo(map);
        destinationMarker.setLngLat([destinationLongitude, destinationLatitude]).addTo(map);

        // ルートを描画
        map.addLayer({
          id: 'route',
          type: 'line',
          source: {
            type: 'geojson',
            data: {
              type: 'Feature',
              properties: {},
              geometry: routeInformation.geometry,
            },
          },
          layout: {
            'line-join': 'round',
            'line-cap': 'round',
          },
          paint: {
            'line-color': '#0000FF',
            'line-width': 8,
          },
        });

        if (
          routeInformation.geometry &&
          routeInformation.geometry.coordinates.length > 0
        ) {
          // ルートの座標を取得
          const coordinates = routeInformation.geometry.coordinates;
          let minLng = coordinates[0][0];
          let minLat = coordinates[0][1];
          let maxLng = coordinates[0][0];
          let maxLat = coordinates[0][1];

          for (let i = 1; i < coordinates.length; i++) {
            const [lng, lat] = coordinates[i];
            if (lng < minLng) minLng = lng;
            if (lat < minLat) minLat = lat;
            if (lng > maxLng) maxLng = lng;
            if (lat > maxLat) maxLat = lat;
          }

          // ルートが収まるように地図の表示範囲を変更
          map.fitBounds(
            [
              [minLng, minLat],
              [maxLng, maxLat],
            ],
            {
              padding: { top: 50, bottom: 50, left: 50, right: 50 },
            },
          );
        }
      }
    } else {
      console.error('Unable to geocode one or both place names.');
    }
  }

  // 出発ボタンを押したときにズームする関数
  const handleDepartureZoom = () => {
    if (map && departureCoordinates.length > 0) {
      console.log('Departure Coordinates:', departureCoordinates); // 座標を確認するためのログ
      map.fitBounds(
        [
          [departureCoordinates[0] - 0.01, departureCoordinates[1] - 0.01],
          [departureCoordinates[0] + 0.01, departureCoordinates[1] + 0.01],
        ],
        {
          padding: { top: 50, bottom: 50, left: 50, right: 50 },
          maxZoom: 15
        }
      );
      setIsDeparted(true);

      // GPS追跡を開始
      startTracking();
    }
  };

  // GPS追跡を開始する関数
  const startTracking = async () => {
    const position = await getCurrentPosition().catch((error) => {
      console.error("Error getting current position:", error);
      return null;
    });
    if (position) {
      const { longitude, latitude } = position.coords;
      setCurrentLocation(position);
      if (map) {
        if (currentMarker) {
          currentMarker.setLngLat([longitude, latitude]);
        } else {
          const newMarker = new mapboxgl.Marker({ color: 'blue' }).setLngLat([longitude, latitude]).addTo(map);
          setCurrentMarker(newMarker);
        }
      }

      const updatePosition = async () => {
        const newPosition = await getCurrentPosition().catch((error) => {
          console.error("Error getting current position:", error);
          return null;
        });
        if (newPosition && currentLocation) {
          const { longitude: newLng, latitude: newLat } = newPosition.coords;
          const { longitude: prevLng, latitude: prevLat } = currentLocation.coords;
          if (newLng !== prevLng || newLat !== prevLat) {
            setCurrentLocation(newPosition);
            if (currentMarker) {
              currentMarker.setLngLat([newLng, newLat]);
            }
            if (destinationCoordinates.length > 0) {
              await handleRouteSearch(map, [newLng, newLat], destinationCoordinates);
            }
          }
        }
      };

      intervalRef.current = setInterval(() => {
        updatePosition();
        setCountdown(10); // リセットカウントダウン
      }, 10000);

      countdownRef.current = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown > 1) return prevCountdown - 1;
          return 0;
        });
      }, 1000);
    }
  };

  const handleManualUpdate = async () => {
    const position = await getCurrentPosition().catch((error) => {
      console.error("Error getting current position:", error);
      return null;
    });
    if (position && currentLocation) {
      const { longitude: newLng, latitude: newLat } = position.coords;
      const { longitude: prevLng, latitude: prevLat } = currentLocation.coords;
      if (newLng !== prevLng || newLat !== prevLat) {
        setCurrentLocation(position);
        if (currentMarker) {
          currentMarker.setLngLat([newLng, newLat]);
        }
        if (destinationCoordinates.length > 0) {
          await handleRouteSearch(map, [newLng, newLat], destinationCoordinates);
        }
      }
    }
  };

  const handleReturnCalender = () => {
    router.push('/driver/schedule');
  }

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (countdownRef.current) {
        clearInterval(countdownRef.current);
      }
    };
  }, []);

  return (
    <div className='relative w-full h-screen'>
      <div className='absolute top-0 left-0 m-4 p-2 z-10'>
        <button
          className='bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded'
          onClick={handleReturnCalender}
        >
          カレンダーに戻る
        </button>
        <div className='mt-4 bg-white text-gray-700 p-2 rounded shadow'>
          距離: {routeDistance.toFixed(2)} km
          <br />
          予想到着時間: {Math.round(estimatedArrivalTime)} 分
        </div>
      </div>
      <div className='absolute top-0 right-0 m-4 p-2 bg-white text-gray-700 z-10 rounded shadow'>
        <div>残り {countdown} 秒</div>
        <button
          className='bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mt-2'
          onClick={handleManualUpdate}
        >
          GPSを再取得
        </button>
      </div>
      <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 mb-4 z-10 flex space-x-4'>
        {isDeparted ? (
          <button className='bg-green-600 hover:bg-green-800 text-white font-bold py-3 px-6 rounded'>
            到着
          </button>
        ) : (
          <button 
            className='bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded'
            onClick={handleDepartureZoom}
          >
            出発
          </button>
        )}
        <button className='bg-red-600 hover:bg-red-800 text-white font-bold py-3 px-6 rounded'>
          緊急
        </button>
      </div>
      <div
        ref={mapContainer}
        className='w-full h-full'
      />
    </div>
  );
  
}

export default SearchRouteMap;
