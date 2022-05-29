import storage from "@react-native-firebase/storage";

const PROFILE_PICTURE_DIR_PATH = "/images/user_avatar/";

const sendProfilePicture = async (uploadURI: string) => {
  try {
    const fileName = uploadURI.substring(uploadURI.lastIndexOf("/") + 1);
    const reference = storage().ref(PROFILE_PICTURE_DIR_PATH + fileName);
    await reference.putFile(uploadURI);
    const downloadResult = await reference.getDownloadURL();
    return downloadResult;
  } catch (error) {
    console.error(error);
    throw new Error("Erro on the firebase");
  }
};

export default { sendProfilePicture };
