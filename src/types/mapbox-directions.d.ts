declare module '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions' {
  import { IControl, LngLatLike } from 'mapbox-gl';

  interface DirectionsOptions {
    accessToken: string;
    unit?: 'metric' | 'imperial';
    profile?: string;
  }

  class MapboxDirections implements IControl {
    constructor(options: DirectionsOptions);
    onAdd(map: mapboxgl.Map): HTMLElement;
    onRemove(map: mapboxgl.Map): void;
    setOrigin(origin: LngLatLike): void;
    setDestination(destination: LngLatLike): void;
    on(event: 'route', callback: (event: { route: any[] }) => void): void;
  }

  export default MapboxDirections;
}
