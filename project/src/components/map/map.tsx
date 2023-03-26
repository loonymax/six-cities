import { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import { MapPin } from 'const';
import { Offer, City } from 'mocks';
import { useMap } from 'hooks';

interface Props {
  city: City;
  offers: Offer[];
}

export default function Map({ city, offers }: Props) {
  const mapRef = useRef(null);
  const map = useMap(city, mapRef);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: MapPin.DefaultPin,
    iconSize: [27, 39],
    iconAnchor: [18, 39],
  });

  // const currentCustomIcon = leaflet.icon({
  //   iconUrl: MapPin.ActivePin,
  //   iconSize: [40, 40],
  //   iconAnchor: [20, 40],
  // });

  useEffect(() => {
    if (map) {
      offers.forEach((item) => {
        leaflet
          .marker({
            lat: item.location.latitude,
            lng: item.location.longitude,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offers, defaultCustomIcon]);

  return (
    <section className="cities__map map" style={{ width: '100%' }} ref={mapRef}></section>
  );
}
