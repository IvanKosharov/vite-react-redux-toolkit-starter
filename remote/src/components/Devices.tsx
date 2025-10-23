import cssClasses from "./Devices.module.css"
import { useDevices } from "./Devices.hooks"
import { Device } from "../types"

export const Devices = () => {
  const { devices, loading } = useDevices()

  return (
    <div className={cssClasses.root}>
      {loading && <div>Loading...</div>}
      <ul>
        {devices.map((device: Device) => (
          <li key={device.id} className={cssClasses.device}>
            {device.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Devices
