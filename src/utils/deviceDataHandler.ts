import * as DeviceInfo from "expo-device";
import * as Network from "expo-network";
import * as Application from "expo-application";

export async function getDeviceData() {
  let uniqueID;

  if (DeviceInfo.osName === "Android") {
    uniqueID = Application.androidId;
  } else if (DeviceInfo.osName === "iOS") {
    uniqueID = await Application.getIosIdForVendorAsync();
  }

  return {
    uniqueID,
    brand: DeviceInfo.brand,
    modelName: DeviceInfo.modelName,
    ipAddress: await Network.getIpAddressAsync(),
  };
}
