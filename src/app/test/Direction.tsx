'use client';

import React, { useState, useCallback } from "react";
import { DirectionsRenderer, DirectionsService } from "@react-google-maps/api";

interface DirectionProps {
  lat: number;
  lng: number;
}

export default function Direction(props: DirectionProps) {
  const origin = { lat: props.lat, lng: props.lng }; // A地点: 現在地
  const destination = { lat: 35.681236, lng: 139.767125 }; // B地点: 東京駅

  const [currentDirection, setCurrentDirection] = useState(null);
  const [distance, setDistance] = useState<string>('');
  const [duration, setDuration] = useState<string>('');

  const directionsCallback = useCallback((googleResponse) => {
    if (googleResponse && googleResponse.status === "OK") {
      setCurrentDirection(googleResponse);
      setDistance(googleResponse.routes[0].legs[0].distance.text);
      setDuration(googleResponse.routes[0].legs[0].duration.text);
    }
  }, []);

  return (
    <>
      <DirectionsService
        options={{
          origin,
          destination,
          travelMode: "DRIVING",
          optimizeWaypoints: true,
        }}
        callback={directionsCallback}
      />
      {currentDirection && (
        <DirectionsRenderer
          options={{
            directions: currentDirection,
          }}
        />
      )}
      <div>
        <p>距離: {distance}</p>
        <p>移動時間: {duration}</p>
      </div>
    </>
  );
}
