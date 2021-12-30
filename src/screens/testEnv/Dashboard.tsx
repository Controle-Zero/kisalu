import React, { useContext } from "react";
import { View, Button } from "react-native";
// import AuthContext from "../../contexts/AuthContext";

const Dashboard = () => {
  //   const { signOut } = useContext(AuthContext);

  function handleSignOut() {
    // signOut();
  }

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button title="Log out" onPress={handleSignOut} />
    </View>
  );
};

export default Dashboard;
