import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const marker =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACUklEQVR4nO2ZS2sUQRCAP19EySoiEZUEAkFBiOCe4uYHeBO9RXPKWfAUBQ8eJCEs3kQ95PULPMSDt+BF8R1EL4K5JkhQE8FgFNfXSEMFliUmXdnqnh7xg4JlZqiaj+6p2emG/6zJbqAfmABmgA/Adwn3+7mcOyfXJschYBT4AmSe4a6dBA6TAC3AMLCiEGgMN1rXJFcutAEPmhBojCfAwdgSx4B5Q4nVmJPcUTgQSKJextUIyk6ZAlngeBz6mRmOIJFJVEO22Ga6kzZqQFcIkdGIEpnEuLVECficg8iK1DajX3kD34AbwAmgVcL9vinnNLn6LEUmFIXfAsfXyVWWa3zzjVmKzChGYj2JehnfkXlmKbLoWdRNJ19ueeZ8bylS8yzao8hZUYyyGb7TQNNhSp45v9ppwLsAIns8cy5YirzJcWq9thS561nUvSesH/YpS5Gq4sF0rXUjyooGMmQp0udZNJOXXdnwhXjaUmQ/8EtRvCZTpyINwEWvHPMdiQz4IU3BlFeKG7CKhxT8oyqTuBRC5Ghkid9AJ4F4GVHkPgE5H1HkbEgR130+RZBYAHYQmOsRRK4QgY5NfK5qYhnYSyTGAoqMEJH2QGtcH4F9RGYogMgFcmCX8WL2bIxO9TcGDEVOkSNbgRcGEvdIgLJsn21Wwu0lHiERqk2IDJIQLbJIoJVw29XbSIwK8FMh4f4ddJMoIwqRiyTMduCRh8S0dLyk6QCWNliUdtt4heCMfKo2Srhn6CQF4+oaIpcpIFuA23USd+RYISnJjtNT601N/lX+AJW6sAqkjpn4AAAAAElFTkSuQmCC";

export function Map({ latitude, longitude, makerName }) {
  const locationIcon = L.icon({
    iconUrl: marker,
    iconSize: [40, 40], // Adjust the icon size as needed
    iconAnchor: [20, 40], // Adjust the anchor point if necessary
  });

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={10}
      style={{ height: "200px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[latitude, longitude]} icon={locationIcon}>
        {makerName && <Popup>{makerName}</Popup>}
      </Marker>
    </MapContainer>
  );
}
