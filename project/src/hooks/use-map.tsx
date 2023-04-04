import { useState, useEffect, MutableRefObject, useRef } from 'react';
import leaflet, { Map } from 'leaflet';
import { City } from 'types';
import { useAppSelector } from 'hooks';
import 'leaflet/dist/leaflet.css';

export function useMap(city: City, mapRef: MutableRefObject<HTMLElement | null>): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  const location = useAppSelector((item) => item.city.location);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.latitude,
          lng: city.longitude,
        },
        zoom: city.zoom,
      })
        .setView(new leaflet.LatLng(location.latitude, location.longitude), location.zoom);
        // почему не меняется центр карты? :(

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

  return map;
}
