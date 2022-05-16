import storage from "@react-native-firebase/storage";

const PROFILE_PICTURE_DIR_PATH = "/images/user_avatar/";

const sendProfilePicture = async (uploadURI: string) => {
  try {
    const fileName = uploadURI.substring(uploadURI.lastIndexOf("/") + 1);
    console.log(fileName);
    if (uploadURI) {
      await storage().ref(fileName).putFile(uploadURI);
    }
    return await storage().ref(fileName).getDownloadURL();
  } catch (error) {
    console.error(error);
    throw new Error("Erro on the firebase");
  }
};

export default { sendProfilePicture };
