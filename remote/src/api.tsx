import { Device } from "./types"

export const api = {
  getDevices: async (filter: string) => {
    return new Promise<Device[]>((resolve) => {
      setTimeout(() => {
        resolve(
          [
            { id: "1", name: "Samsung Galaxy S24" },
            { id: "2", name: "IPhone 17 Pxo Max" },
            { id: "3", name: "LG TV" }
          ].filter((device) => device.name.includes(filter))
        )
      }, 3000)
    })
  }
}
