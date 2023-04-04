import { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import { MapPins } from 'const';
import { Offer } from 'types';
import { useAppSelector, useMap } from 'hooks';

interface Props {
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

export default function Map({ offers, selectedOffer, className }: Props) {
  const mapRef = useRef(null);

  const location = useAppSelector((item) => item.city.location);
  const map = useMap(location, mapRef);

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
