import { Device } from "../types"

export interface DevicesState {
  devices: Device[]
  loading: boolean
}

type SetDevicesAction = {
  type: "SET_DEVICES"
  payload: Device[]
}

type ToggleLoadingAction = {
  type: "TOGGLE_LOADING"
  payload: boolean
}

export type DevicesActions = SetDevicesAction | ToggleLoadingAction

export const setDevicesAction = (devices: Device[]): SetDevicesAction => ({
  type: "SET_DEVICES",
  payload: devices
})

export const toggleLoadingAction = (loading: boolean): ToggleLoadingAction => ({
  type: "TOGGLE_LOADING",
  payload: loading
})

export const initialDevicesState: DevicesState = {
  devices: [],
  loading: false
}

export const devicesReducer = (state: DevicesState, action: DevicesActions) => {
  switch (action.type) {
    case "SET_DEVICES":
      return { ...state, devices: action.payload }
    case "TOGGLE_LOADING":
      return { ...state, loading: action.payload }
    default:
      return state
  }
}
