import AsyncStorage from "@react-native-async-storage/async-storage";
import { AsyncStorageKeys, User, UserType } from "./types";

export async function getAsyncStorageAuthData() {
  const storageUser = await AsyncStorage.getItem(AsyncStorageKeys.USER);
  const storageToken = await AsyncStorage.getItem(AsyncStorageKeys.TOKEN);
  const storageUserType = (await AsyncStorage.getItem(
    AsyncStorageKeys.USER_TYPE
  )) as UserType;

  return storageUser && storageToken && storageUserType
    ? {
        storageUser: JSON.parse(storageUser) as User,
        storageToken,
        storageUserType,
      }
    : null;
}

export async function setAsyncStorageData(
  user: User,
  userType: UserType,
  token: string
) {
  await AsyncStorage.setItem(AsyncStorageKeys.USER_TYPE, userType);
  await AsyncStorage.setItem(AsyncStorageKeys.USER, JSON.stringify(user));
  await AsyncStorage.setItem(AsyncStorageKeys.TOKEN, token);
}
