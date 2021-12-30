import React from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";
import { TouchableOpacity, Text, Pressable } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Spacer from "../components/layout/Spacer";

const DashboardProvedor = () => {
  return (
    <View>
      <ScrollView style={styles.container}>
        <View style={styles.button}>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/back.png")}
              style={styles.topicon}
            ></Image>
          </TouchableOpacity>

          <TouchableOpacity style={styles.perfilphoto}>
            <Image
              source={require("../assets/images/dog.jpg")}
              style={styles.topicon}
            ></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.searchandfilter}>
          <TextInput
            placeholder=" Trabalhos por fazer"
            style={styles.searchbutton}
          />
          <TouchableOpacity style={styles.perfilphoto}>
            <Image
              source={require("../assets/images/filter.png")}
              style={styles.filter}
            ></Image>
          </TouchableOpacity>
        </View>

        <View style={styles.worknotification}>
          <Text style={styles.texttopnotification}>
            Notificações de trabalho
          </Text>
          <View style={styles.detailsnotification}>
            <View style={styles.imagedetails}>
              <Image
                source={require("../assets/images/photoprofile.jpg")}
                style={styles.photonotification}
              ></Image>
            </View>
            <View style={styles.descriptionnotification}>
              <Text style={styles.titulonotification}>
                Titulo do post do trabalho
              </Text>
              <View style={styles.space}>
                <Text style={styles.colordescricao}> Nome do Cliente </Text>
                <Text style={styles.colordescricao}> xxx.xx Kz/h </Text>
              </View>
              <View style={styles.space}>
                <Text style={styles.colordescricao}> Localização </Text>
                <Text style={styles.colordescricao}> 22/12//2022</Text>
              </View>
              <View style={styles.btnaplicarvermais}>
                <Pressable style={styles.btndescricaoA}>
                  <Text style={styles.textbtnA}> Aplicar </Text>
                </Pressable>
                <Pressable style={styles.btndescricaoV}>
                  <Text style={styles.textbtnV}> Ver mais </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.extranotification}>
          <Text style={styles.texttopnotification}>Extras</Text>
          <View style={styles.eventos}></View>
        </View>
      </ScrollView>

      <View style={styles.menu}>
        <TouchableOpacity style={styles.menubtnwrapper}>
          <Image
            source={require("../assets/images/home.png")}
            style={styles.menuicon}
          ></Image>
        </TouchableOpacity>

        <Spacer width={60} />
        <TouchableOpacity style={styles.menubtnwrapper}>
          <Image
            source={require("../assets/images/user.png")}
            style={styles.menuicon}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#60DBDA",
    padding: 10,
    height: "100%",
  },
  button: {
    marginTop: 50,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topicon: {
    width: 40,
    height: 40,
    justifyContent: "space-between",
  },
  perfilphoto: {
    borderRadius: 50,
    overflow: "hidden",
  },
  searchandfilter: {
    flexDirection: "row",
    marginTop: 20,
    height: 50,
    width: "100%",
  },
  worknotification: {
    marginTop: 30,
    height: 300,
    width: "100%",
    flexDirection: "column",
  },
  extranotification: {
    height: 70,
    width: "100%",
  },
  searchbutton: {
    borderColor: "#000000",
    borderWidth: 2,
    borderRadius: 30,
    marginLeft: 15,
    marginTop: 10,
    height: 40,
    width: "75%",
  },
  filter: {
    marginTop: 10,
    marginLeft: "20%",
    width: 40,
    height: 40,
    borderRadius: 50,
    overflow: "hidden",
  },
  texttopnotification: {
    fontSize: 18,
    marginLeft: 15,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  detailsnotification: {
    marginTop: 10,
    borderRadius: 15,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#383D3B",
    height: 150,
  },
  imagedetails: {
    width: "30%",
  },
  photonotification: {
    marginLeft: 10,
    marginTop: 30,
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  descriptionnotification: {
    marginTop: 20,
    width: "70%",
    height: 100,
  },
  titulonotification: {
    color: "#60DBDA",
    fontSize: 16,
  },
  space: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 10,
  },
  colordescricao: {
    color: "white",
    fontSize: 16,
  },
  buttonsContainer: {
    height: 30,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  btnaplicarvermais: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btndescricaoA: {
    height: 30,
    width: 120,
    backgroundColor: "#60DBDA",
    marginTop: 10,
    marginRight: 10,
    borderRadius: 15,
    marginLeft: -20,
  },
  btndescricaoV: {
    height: 30,
    width: 120,
    borderColor: "#60DBDA",
    borderWidth: 2,
    marginTop: 10,
    marginRight: 10,
    borderRadius: 15,
  },

  textbtnA: {
    alignSelf: "center",
    marginTop: 8,
  },
  textbtnV: {
    color: "white",
    alignSelf: "center",
    marginTop: 8,
  },
  menu: {
    position: "relative",
    marginTop: "auto",
    justifyContent: "center",
    bottom: 0,
    height: 50,
    width: "100%",
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    shadowColor: "gray",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 2, height: 7 },
  },
  eventos: {
    height: 100,
  },
  menuicon: {
    width: 40,
    height: 40,
    justifyContent: "space-between",
  },
  menubtnwrapper: {
    backgroundColor: "white",
    marginTop: -30,
    height: 50,
    width: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",

    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { width: 2, height: 7 },
  },
});

export default DashboardProvedor;
