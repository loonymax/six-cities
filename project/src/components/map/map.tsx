import { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import { mapPins } from 'const';
import { Offer, City } from 'mocks';
import { useMap } from 'hooks';

interface Props {
  city: City;
  offers: Offer[];
}

const defaultCustomIcon = leaflet.icon({
  iconUrl: mapPins.DefaultPin,
  iconSize: [27, 39],
  iconAnchor: [18, 39],
});

// const currentCustomIcon = leaflet.icon({
//   iconUrl: mapPins.ActivePin,
// iconSize: [27, 39],
// iconAnchor: [18, 39],
// });

export default function Map({ city, offers }: Props) {
  const mapRef = useRef(null);
  const map = useMap(city, mapRef);

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
  }, [map, offers]);

  return (
    <section className="cities__map map" style={{ width: '100%' }} ref={mapRef}></section>
  );
}
