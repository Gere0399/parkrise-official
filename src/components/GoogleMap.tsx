import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";

export const MapView = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDlVOodXI2zifZnS4PkaLF92Al12zhO6bQ",
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="w-full h-[300px] lg:h-[calc(100vh-160px)] mx-auto ">
      <div className="relative w-full  rounded-lg  h-full  overflow-hidden">
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "100%",
          }}
          center={{ lat: 37.7749, lng: -122.4194 }}
          zoom={14}
        >
          <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
        </GoogleMap>
      </div>
    </div>
  );
};
