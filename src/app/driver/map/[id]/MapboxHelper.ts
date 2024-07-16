const MAPBOX_API_URL = 'https://api.mapbox.com';
const MAPBOX_API_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

// 地名文字列から緯度経度含む地理情報の候補を取得する
// Mapbox Geocoding API を使用
// https://docs.mapbox.com/api/search/geocoding/#forward-geocoding
export const getAutocompleteSuggestions = async (query: string) => {
  if (!query) return [];
  const url = `${MAPBOX_API_URL}/geocoding/v5/mapbox.places/${encodeURIComponent(
    query,
  )}.json?autocomplete=true&access_token=${MAPBOX_API_TOKEN}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(
        'Failed to fetch autocomplete suggestions:',
        response.statusText,
      );
      return [];
    }
    const data = await response.json();
    return data.features.map((feature: any) => ({
      place_name: feature.place_name,
      coordinates: feature.center,
    }));
  } catch (error) {
    console.error('Error fetching autocomplete suggestions:', error);
    return [];
  }
};

// 2つの緯度経度から地名文字列を取得する
// Mapbox Directions API を使用
// https://docs.mapbox.com/api/navigation/directions/#retrieve-directions
// 以下では `driving` でのルート検索を行っているが、`cycling` や `walking` に変更することで自転車や徒歩でのルート検索も可能
export const getRouteInformation = async (start: any, end: any) => {
  const startCoord = `${start[0]},${start[1]}`;
  const endCoord = `${end[0]},${end[1]}`;
  const url = `${MAPBOX_API_URL}/directions/v5/mapbox/driving/${startCoord};${endCoord}?access_token=${MAPBOX_API_TOKEN}&geometries=geojson`;

  try {
    const response = await fetch(url, {
      method: 'GET',
    });
    if (!response.ok) {
      console.error(
        'Failed to fetch getRouteInformation:',
        response.statusText,
      );
      return [];
    }
    const result = await response.json();
    const route = result.routes[0];
    return route;
  } catch (error) {
    console.error('Error fetching route information:', error);
    return null;
  }
};

// 地名文字列から緯度経度を取得する
// Mapbox Geocoding API を使用
// https://docs.mapbox.com/api/search/geocoding/#forward-geocoding
export const geocode = async (placeName: string) => {
  const url = `${MAPBOX_API_URL}/geocoding/v5/mapbox.places/${encodeURIComponent(
    placeName,
  )}.json?access_token=${MAPBOX_API_TOKEN}`;
  try {
    const response = await fetch(url, {
      method: 'GET',
    });
    const result = await response.json();
    const { features } = result;
    if (features && features.length > 0) {
      const [longitude, latitude] = features[0].center;
      return [longitude, latitude];
    } else {
      console.error('No coordinates found for place name:', placeName);
      return null;
    }
  } catch (error) {
    console.error('Error geocoding place name:', error);
    return null;
  }
};

// 緯度経度から地名文字列を取得する
// Mapbox Geocoding API を使用
// https://docs.mapbox.com/api/search/geocoding/#reverse-geocoding
export async function reverseGeocode(lngLat: number[]) {
  const url = `${MAPBOX_API_URL}/geocoding/v5/mapbox.places/${lngLat[0]},${lngLat[1]}.json?access_token=${MAPBOX_API_TOKEN}`;
  const response = await fetch(url);
  const data = await response.json();
  if (data.features && data.features.length > 0) {
    return data.features[0].place_name;
  } else {
    console.error('No results found.');
    return null;
  }
}

export const getEstimatedArrivalTime = async (start: any, end: any) => {
  const startCoord = `${start[0]},${start[1]}`;
  const endCoord = `${end[0]},${end[1]}`;
  const url = `${MAPBOX_API_URL}/directions/v5/mapbox/driving/${startCoord};${endCoord}?access_token=${MAPBOX_API_TOKEN}&geometries=geojson`;

  try {
    const response = await fetch(url, {
      method: 'GET',
    });
    if (!response.ok) {
      console.error(
        'Failed to fetch getEstimatedArrivalTime:',
        response.statusText,
      );
      return null;
    }
    const result = await response.json();
    const route = result.routes[0];
    const duration = route.duration; // 秒単位の予想到着時間
    return duration / 60; // 分単位に変換
  } catch (error) {
    console.error('Error fetching estimated arrival time:', error);
    return null;
  }
};

// 現在の位置情報を取得する関数
export const getCurrentPosition = (): Promise<GeolocationPosition> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
