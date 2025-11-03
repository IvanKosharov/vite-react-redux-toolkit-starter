import { useTransition, useState, useEffect } from "react"
import { Device } from "../types"
import { api } from "../api"

export const Transitions = () => {
  const [filter, setFilter] = useState("")
  const [devices, setDevices] = useState<Device[]>([])
  const [isPending, startTransition] = useTransition()

  const getDevices = async () => {
    // ensure only latest transition updates the state
    startTransition(async () => {
      const devices = await api.getDevices(filter)
      startTransition(() => {
        setDevices(devices)
      })
    })
  }

  useEffect(() => {
    getDevices()
  }, [filter])

  return (
    <div>
      <h2>devices</h2>
      <input
        type="text"
        onChange={(params: any) => {
          setFilter(params.target.value)
        }}
        value={filter}
      />
      {filter && <h3>Filtering by {filter}</h3>}
      {isPending && <div>Loading...</div>}
      <ul>
        {devices.map((device) => {
          return <li>{device.name}</li>
        })}
      </ul>
    </div>
  )
}

export default Transitions
