import { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import { mapPins } from 'const';
import { Offer, City } from 'mocks';
import { useMap } from 'hooks';

interface Props {
  city: City;
  offers: Offer[];
  selectedOffer: Offer | undefined;
}

const defaultIcon = leaflet.icon({
  iconUrl: mapPins.DefaultPin,
  iconSize: [27, 39],
  iconAnchor: [18, 39],
});

const currentIcon = leaflet.icon({
  iconUrl: mapPins.ActivePin,
  iconSize: [27, 39],
  iconAnchor: [18, 39],
});

export default function Map({ city, offers, selectedOffer }: Props) {
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
            icon: (selectedOffer !== undefined && item.id === selectedOffer.id)
              ? currentIcon
              : defaultIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offers, selectedOffer]);

  return (
    <section className="cities__map map" style={{ width: '100%' }} ref={mapRef}></section>
  );
}
