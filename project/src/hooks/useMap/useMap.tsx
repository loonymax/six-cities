import { useState, useEffect, MutableRefObject, useRef } from 'react';
import leaflet, { Map } from 'leaflet';
import { City } from 'mocks';
import 'leaflet/dist/leaflet.css';

export default function useMap(city: City, mapRef: MutableRefObject<HTMLElement | null>): Map | null {
  const { latitude, longitude, zoom } = city;
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: latitude,
          lng: longitude,
        },
        zoom: zoom,
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
  }, [mapRef, map, latitude, longitude, zoom]);

  return map;
}
