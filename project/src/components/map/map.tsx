import { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import { MapPins } from 'const';
import { Offer, City } from 'interfaces';
import { useMap } from 'hooks';

interface Props {
  city: City;
  offers: Offer[];
  selectedOffer: Offer | undefined;
  className: string;
}

const defaultIcon = leaflet.icon({
  iconUrl: MapPins.DefaultPin,
  iconSize: [27, 39],
  iconAnchor: [18, 39],
});

const currentIcon = leaflet.icon({
  iconUrl: MapPins.ActivePin,
  iconSize: [27, 39],
  iconAnchor: [18, 39],
});

export default function Map({ city, offers, selectedOffer, className }: Props) {
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
    <section className={className} style={{ width: '100%' }} ref={mapRef}></section>
  );
}
