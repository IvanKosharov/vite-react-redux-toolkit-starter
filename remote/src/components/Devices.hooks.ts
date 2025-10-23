import React from "react"
import {
  DevicesActions,
  setDevicesAction,
  toggleLoadingAction
} from "./Devices.reducer"

export const useDevices = (
  dispatch: React.ActionDispatch<[action: DevicesActions]>
) => {
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
}
