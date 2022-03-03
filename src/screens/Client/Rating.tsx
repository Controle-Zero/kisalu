import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { Colors, TextStyles } from "../../styles/appTheme";
import Button from "../../components/buttons/Button";
import Button1 from "../../components/buttons/Button1";

const Rating = () => {
  const [defaultRating, setdefaultRating] = useState(2);
  const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);

  const starImgFilled =
    "https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png";
  const starImgCorned =
    "https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png";

  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setdefaultRating(item)}
            >
              <Image
                style={styles.starImgStyle}
                source={
                  item <= defaultRating
                    ? { uri: starImgFilled }
                    : { uri: starImgCorned }
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  function submit() {
    console.log(" Avaliado ");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textstyle1}>Avalie o serviço</Text>

      <CustomRatingBar />
      <Text style={styles.textstyle2}>
        {defaultRating + " / " + maxRating.length}
      </Text>
      <Text style={styles.textstyle}>O que se passou de errado ?</Text>
      {
        <View style={styles.wrongarea}>
          <Button1 onPress={submit} text="Péssimo profissional" width="30%" />
          <Button1 onPress={submit} text="Chegou tarde" width="30%" />
          <Button1 onPress={submit} text="Roubou um artigo meu" width="30%" />
          <Button1
            onPress={submit}
            text="Má comunicação entre nós"
            width="40%"
          />
          <Button1 onPress={submit} text="outro assunto" width="30%" />
        </View>
      }
      <View style={styles.bottomView}>
        <Button onPress={submit} text="Avaliar" width="90%" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  starImgStyle: {
    height: 40,
    width: 40,
    resizeMode: "cover",
  },
  customRatingBarStyle: {
    justifyContent: "center",
    flexDirection: "row",
  },
  textstyle: {
    textAlign: "center",
    fontFamily: TextStyles.heading1.fontMedium,
    marginTop: "10%",
    fontSize: 18,
  },
  textstyle1: {
    padding: 15,
    fontFamily: TextStyles.heading1.fontMedium,
    fontSize: 18,
  },
  textstyle2: {
    padding: 15,
    fontFamily: TextStyles.heading1.fontMedium,
    fontSize: 18,
  },
  bottomView: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
  wrongarea: {
    marginTop: "10%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
export default Rating;
