import React from "react"
import cssClasses from "./Devices.module.css"
import { Device } from "../types"
import { useDevices } from "./Devices.hooks"
import { devicesReducer, initialDevicesState } from "./Devices.reducer"

export const Devices = () => {
  const [{ devices, loading }, dispatch] = React.useReducer(
    devicesReducer,
    initialDevicesState
  )

  useDevices(dispatch)

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
