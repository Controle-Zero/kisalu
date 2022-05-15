import storage from "@react-native-firebase/storage";

const PROFILE_PICTURE_DIR_PATH = "/images/user_avatar/";
const NO_PROFILE_PICTURE_PATH = PROFILE_PICTURE_DIR_PATH + "no-profile.png";

const sendProfilePicture = async (uploadURI: string | undefined) => {
  try {
    const fileName = uploadURI
      ? uploadURI.substring(uploadURI.lastIndexOf("/") + 1)
      : NO_PROFILE_PICTURE_PATH;
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
