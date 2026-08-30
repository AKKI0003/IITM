# Libraries already installed for Spin2Build

Run `npm install` once before the event — these three are already in
`package.json`, so nobody has to install anything mid-build. You only need
one of these if you land on the matching Hard-level feature; everything
else on the wheel needs plain React only.

## 1. Live Status City Map → `react-leaflet` + `leaflet`

```jsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { mapPins } from "../data/mockData";

<MapContainer center={[28.6139, 77.2090]} zoom={13} style={{ height: 400 }}>
  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
  {mapPins.map((pin, i) => (
    <Marker key={i} position={[28.61 + i * 0.01, 77.20 + i * 0.01]}>
      <Popup>{pin.name} — {pin.status ?? pin.type}</Popup>
    </Marker>
  ))}
</MapContainer>
```

## 2. Two-View Complaint Analytics → `recharts`

```jsx
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { complaints } from "../data/mockData";

<BarChart width={400} height={250} data={dataGroupedByCategory}>
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Bar dataKey="count" fill="#1E7A6C" />
</BarChart>
```

## 3. Digital ID Generator & Checker → `qrcode.react`

```jsx
import { QRCodeSVG } from "qrcode.react";
import { generateCitizenId } from "../data/mockData";

const id = generateCitizenId();
<QRCodeSVG value={id} size={140} />
```

`generateCitizenId()` and `verifyCitizenId(id)` are already written for you
in `src/data/mockData.js` — the ID format and check-digit logic don't need
to be reinvented, just wired up to the UI.
