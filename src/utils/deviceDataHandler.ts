import * as DeviceInfo from "react-native-device-info";

type DeviceData = {
  uniqueID: string;
  device: {
    brand: string;
    model: string;
  };
};

export function getDeviceData(): DeviceData {
  const uniqueID = DeviceInfo.getUniqueId();
  const deviceBrand = DeviceInfo.getBrand();
  const deviceModel = DeviceInfo.getModel();
  return {
    uniqueID,
    device: {
      brand: deviceBrand,
      model: deviceModel,
    },
  };
}
