import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Property } from '@/pages/Destinations';

interface MapProps {
  properties: Property[];
  selectedLocation: string;
}

export const Map = ({ properties, selectedLocation }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map
    mapboxgl.accessToken = 'YOUR_MAPBOX_TOKEN'; // Replace with your Mapbox token
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [135.5023, 34.6937], // Osaka coordinates
      zoom: 13
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add markers for each property
    properties.forEach((property) => {
      const marker = new mapboxgl.Marker()
        .setLngLat(property.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML(
              `<h3 class="font-medium">${property.name}</h3>
               <p class="text-sm">$${property.price}/night</p>`
            )
        )
        .addTo(map.current!);
    });

    return () => {
      map.current?.remove();
    };
  }, [properties]);

  return (
    <div className="w-full h-full rounded-lg overflow-hidden border shadow-lg">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};