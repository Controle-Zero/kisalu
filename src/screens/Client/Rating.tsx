import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import * as AtividadeAPI from "../../API/atividade.api";
import React, { useState } from "react";
import { TextStyles } from "../../styles/appTheme";
import Button from "../../components/buttons/Button";
import { ActivityNavProps } from "../../routes/types/Cliente/ActivityParamsList";

const Rating: (navProps: ActivityNavProps<"Rating">) => JSX.Element = ({
  route,
}) => {
  const [defaultRating, setdefaultRating] = useState(2);
  const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);

  const starImgFilled =
    "https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png";
  const starImgCorned =
    "https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png";

  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item) => {
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

  async function submit() {
    await AtividadeAPI.avaliarAtividade(route.params.activityId, defaultRating);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textstyle1}>Avalie o serviço</Text>
      <CustomRatingBar />
      <Text style={styles.textstyle2}>
        {defaultRating + " / " + maxRating.length}
      </Text>
      <Text style={styles.textstyle}>
        Isso ajuda o provedor a ter mais credibilidade
      </Text>
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
    bottom: 60,
  },
});
export default Rating;
