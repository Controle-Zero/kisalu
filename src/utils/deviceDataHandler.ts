import * as DeviceInfo from "expo-device";
import * as Network from "expo-network";
import * as Application from "expo-application";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AsyncStorageKeys } from "../contexts/AuthContext/types";

export async function getDeviceData() {
  let uniqueID = await AsyncStorage.getItem(AsyncStorageKeys.UNIQUE_ID);

  if (!uniqueID && DeviceInfo.osName === "Android") {
    uniqueID = Application.androidId;
  } else if (!uniqueID && DeviceInfo.osName === "iOS") {
    uniqueID = await Application.getIosIdForVendorAsync();
  }

  return {
    uniqueID,
    brand: DeviceInfo.brand,
    modelName: DeviceInfo.modelName,
    ipAddress: await Network.getIpAddressAsync(),
  };
}
