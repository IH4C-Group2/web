import { MapProvider } from './mapProvider';
import { MapComponent } from './map';

export default function Home() {

  return (
    <MapProvider>
      <MapComponent />
    </MapProvider>
  );
}