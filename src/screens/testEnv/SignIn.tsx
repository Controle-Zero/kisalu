import React, { useContext } from "react";
import { View, Button } from "react-native";
// import AuthContext from "../../contexts/AuthContext";

const SignIn = () => {
  //   const { signed, signIn, user } = useContext(AuthContext);

  //   console.log(signed);
  //   console.log(user);

  function handleSignIn() {
    // signIn();
  }

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

export default SignIn;
