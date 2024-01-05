import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

interface KakaoMapProps {
  setCustomValues?: (id: string, value: number) => void;
  latitude: number;
  longitude: number;
  detailPage?: boolean;
}

const KakaoMap = ({
  setCustomValues,
  latitude,
  longitude,
  detailPage = false,
}: KakaoMapProps) => {
  const handleClick = (mouseEvent: kakao.maps.event.MouseEvent) => {
    if (detailPage) {
      return;
    }
    setCustomValues!("latitude", mouseEvent.latLng.getLat());
    setCustomValues!("longitude", mouseEvent.latLng.getLng());
  };

  return (
    <Map
      center={{ lat: latitude, lng: longitude }}
      style={{ width: "100%", height: "360px" }}
      onClick={(_, mouseEvent) => handleClick(mouseEvent)}
    >
      <MapMarker position={{ lat: latitude, lng: longitude }}></MapMarker>
    </Map>
  );
};

export default KakaoMap;
