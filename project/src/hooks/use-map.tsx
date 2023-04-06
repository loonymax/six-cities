import { useState, useEffect, MutableRefObject, useRef } from 'react';
import leaflet, { Map } from 'leaflet';
import { CityInfo} from 'types';
import 'leaflet/dist/leaflet.css';

export function useMap(city: CityInfo, mapRef: MutableRefObject<HTMLElement | null>): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: 10,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  useEffect(() => {
    if(map && city) {
      map.setView(new leaflet.LatLng(city.location.latitude, city.location.longitude));
    }
  }, [map, city]);

  return map;
}
