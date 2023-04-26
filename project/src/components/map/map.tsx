import { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import { AppRoute, MapPins } from 'const';
import { Offer } from 'types';
import { useAppSelector, useMap } from 'hooks';
import { useLocation } from 'react-router-dom';

interface Props {
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

export default function Map({ selectedOffer, className }: Props) {
  const mapRef = useRef(null);
  const offers = useAppSelector((state) => state.offers);
  const nearby = useAppSelector((state) => state.offers.nearbyOffers);
  const location = useLocation();

  const cityLocation = useAppSelector((state) => state.offers.city);
  const map = useMap(cityLocation, mapRef);

  useEffect(() => {
    if (map) {
      const layerGroup = leaflet.layerGroup().addTo(map);
      let offersList = offers.offers;

      if (location.pathname !== AppRoute.Main) {
        offersList = nearby;
      }

      offersList.forEach((item) => {
        leaflet
          .marker({
            lat: item.location.latitude,
            lng: item.location.longitude,
          }, {
            icon: (selectedOffer !== undefined && item.id === selectedOffer.id)
              ? currentIcon
              : defaultIcon,
          })
          .addTo(layerGroup);
      });

      return () => {
        map.removeLayer(layerGroup);
      };
    }
  }, [map, offers, selectedOffer, nearby, location.pathname]);

  return (
    <section className={className} style={{ width: '100%' }} ref={mapRef}></section>
  );
}
