import AsyncStorage from "@react-native-async-storage/async-storage";
import { AsyncStorageKeys, LoginFunction, User } from "./types";

export async function getAsyncStorageAuthData() {
  const storageUser = await AsyncStorage.getItem(AsyncStorageKeys.USER);
  const storageToken = await AsyncStorage.getItem(AsyncStorageKeys.TOKEN);

  return storageUser && storageToken
    ? {
        storageUser: JSON.parse(storageUser) as User,
        storageToken: storageToken,
      }
    : null;
}

export async function setAsyncStorageData(user: User, token: string) {
  await AsyncStorage.setItem(AsyncStorageKeys.USER, JSON.stringify(user));
  await AsyncStorage.setItem(AsyncStorageKeys.TOKEN, token);
}
