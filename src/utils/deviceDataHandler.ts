import * as DeviceInfo from "react-native-device-info";

type DeviceData = {
  uniqueID: string;
  brand: string;
  model: string;
};

export function getDeviceData(): DeviceData {
  const uniqueID = DeviceInfo.getUniqueId();
  const deviceBrand = DeviceInfo.getBrand();
  const deviceModel = DeviceInfo.getModel();
  return {
    uniqueID,
    brand: deviceBrand,
    model: deviceModel,
  };
}
