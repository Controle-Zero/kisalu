import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";
import React, { FC, useState } from "react";
import Button from "../buttons/Button";
import Spacer from "../layout/Spacer";
import { Colors, TextStyles } from "../../styles/appTheme";
import Atividade from "../../models/Atividade";
import useAuth from "../../contexts/AuthContext";
import Cliente from "../../models/Cliente";
import { formatDate } from "../../utils/dateFormatter";
import apiConfig from "../../API/apiConfig";

interface Props {
  activity: Atividade;
  onActivityCancel: (activityId: string) => void;
  onAvaliate: (activityId: string) => void;
}

const ClientActivityCard: FC<Props> = ({
  activity,
  onActivityCancel,
  onAvaliate,
}) => {
  const {
    Categoria: { titulo },
    Prestador: { nome },
    estado,
    valorAssociado,
    dataCriado,
    id,
  } = activity;
  const { user } = useAuth();
  const { morada } = user as Cliente;
  const [generatePDF, setGeneratePDF] = useState(false);

  const handleGenerateReport = async () => {
    setGeneratePDF(true);
  };

  if (generatePDF) {
    return (
      <WebView
        source={{ uri: `${apiConfig.baseUrl}/atividade/${id}/docPDF` }}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Content>
        <LeftContent name={nome} categoryName={titulo} localizacao={morada} />
        <RightContent
          dataCriada={formatDate(new Date(dataCriado))}
          estado={estado}
          valorAssociado={valorAssociado}
        />
      </Content>
      <Actions>
        {estado !== "FINALIZADA" ? (
          <Button
            text="Cancelar"
            width="40%"
            onPress={() => {
              onActivityCancel(id);
            }}
          />
        ) : (
          <>
            <Button text="Avaliar" onPress={() => onAvaliate(id)} width="40%" />
            <Spacer width={20} />
            <Button
              width="50%"
              text="Comprovativo"
              onPress={handleGenerateReport}
            />
          </>
        )}
      </Actions>
    </View>
  );
};

const Content: FC = ({ children }) => (
  <View style={styles.contentContainer}>{children}</View>
);

interface LeftContentProps {
  name: string;
  categoryName: string;
  localizacao: string;
}

const LeftContent: FC<LeftContentProps> = ({
  name,
  categoryName,
  localizacao,
}) => (
  <View style={styles.content}>
    <Text style={[styles.text, styles.textPrimaryColor]}>{categoryName}</Text>
    <Text style={styles.text}>{name}</Text>
    <Text style={styles.text}>{localizacao}</Text>
  </View>
);

interface RightContentProps {
  estado: string;
  valorAssociado: number;
  dataCriada: string;
}

const RightContent: FC<RightContentProps> = ({
  dataCriada,
  estado,
  valorAssociado,
}) => (
  <View style={[styles.content, { alignItems: "flex-end" }]}>
    <Text style={styles.text}>
      Estado: <Text style={styles.textPrimaryColor}>{estado}</Text>
    </Text>
    {estado !== "PENDENTE" ? (
      <Text style={styles.text}>{valorAssociado} Kzs</Text>
    ) : (
      <Text style={styles.text}>Valor não informado</Text>
    )}

    <Text style={styles.text}>{dataCriada}</Text>
  </View>
);

const Actions: FC = ({ children }) => (
  <View style={styles.actionsContainer}>{children}</View>
);

export default ClientActivityCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 26,
    marginHorizontal: "2%",
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 14,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  content: {
    width: "50%",
  },
  textPrimaryColor: {
    color: Colors.primary,
  },
  text: {
    color: Colors.white,
    fontSize: 13,
    fontFamily: TextStyles.label.font,
    marginBottom: 10,
  },
});
