import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Property } from '@/pages/Destinations';
import { toast } from 'sonner';
import { Input } from './ui/input';

interface MapProps {
  properties: Property[];
  selectedLocation: string;
}

export const Map = ({ properties, selectedLocation }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState(localStorage.getItem('mapbox_token') || '');

  useEffect(() => {
    if (!mapContainer.current) return;

    try {
      // Initialize map with token
      mapboxgl.accessToken = mapboxToken;
      
      if (!mapboxToken) {
        toast.error('Please enter your Mapbox token');
        return;
      }

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

      // Error handling for map load
      map.current.on('error', (e) => {
        console.error('Map error:', e);
        toast.error('Invalid Mapbox token. Please check your token and try again.');
      });

    } catch (error) {
      console.error('Error initializing map:', error);
      toast.error('Error initializing map. Please check your Mapbox token.');
    }

    return () => {
      map.current?.remove();
    };
  }, [properties, mapboxToken]);

  const handleTokenSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('mapbox_token', mapboxToken);
    toast.success('Mapbox token updated');
    window.location.reload();
  };

  return (
    <div className="w-full h-full rounded-lg overflow-hidden border shadow-lg">
      {!mapboxToken && (
        <form onSubmit={handleTokenSubmit} className="p-4 bg-white">
          <p className="text-sm text-gray-600 mb-2">
            Please enter your Mapbox token. You can find it at{' '}
            <a 
              href="https://account.mapbox.com/access-tokens/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Mapbox Access Tokens
            </a>
          </p>
          <div className="flex gap-2">
            <Input
              type="text"
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              placeholder="Enter your Mapbox token"
              className="flex-1"
            />
            <button 
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      )}
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};