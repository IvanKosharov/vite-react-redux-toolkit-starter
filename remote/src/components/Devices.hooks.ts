import React from "react"
import {
  devicesReducer,
  initialDevicesState,
  setDevicesAction,
  toggleLoadingAction
} from "./Devices.reducer"

export const useDevices = () => {
  const [{ devices, loading }, dispatch] = React.useReducer(
    devicesReducer,
    initialDevicesState
  )

  React.useEffect(() => {
    const getData = async () => {
      dispatch(toggleLoadingAction(true))
      const response = await fetch("https://api.restful-api.dev/objects")
      const devices = await response.json()
      dispatch(setDevicesAction(devices))
      dispatch(toggleLoadingAction(false))
    }

    getData()
  }, [])

  return { devices, loading }
}
