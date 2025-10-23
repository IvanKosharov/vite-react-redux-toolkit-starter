import { Device } from "../types"

enum DEVICES_ACTION_TYPES {
  SET_DEVICES,
  TOGGLE_LOADING
}

type SetDevicesAction = {
  type: DEVICES_ACTION_TYPES.SET_DEVICES
  payload: Device[]
}

type ToggleLoadingAction = {
  type: DEVICES_ACTION_TYPES.TOGGLE_LOADING
  payload: boolean
}

export type DevicesActions = SetDevicesAction | ToggleLoadingAction

export const setDevicesAction = (devices: Device[]): SetDevicesAction => ({
  type: DEVICES_ACTION_TYPES.SET_DEVICES,
  payload: devices
})

export const toggleLoadingAction = (loading: boolean): ToggleLoadingAction => ({
  type: DEVICES_ACTION_TYPES.TOGGLE_LOADING,
  payload: loading
})

export interface DevicesState {
  devices: Device[]
  loading: boolean
}

export const initialDevicesState: DevicesState = {
  devices: [],
  loading: false
}

export const devicesReducer = (state: DevicesState, action: DevicesActions) => {
  switch (action.type) {
    case DEVICES_ACTION_TYPES.SET_DEVICES:
      return { ...state, devices: action.payload }
    case DEVICES_ACTION_TYPES.TOGGLE_LOADING:
      return { ...state, loading: action.payload }
    default:
      return state
  }
}
