import { View, FlatList } from "react-native";
import React, { useContext } from "react";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import Spacer from "../../../components/layout/Spacer";
import {
  Container,
  EmptyActivityImage,
  EmptyActivityText,
  Heading1,
} from "./style";
import { ThemeContext } from "styled-components";
import ProviderActivityCard from "../../../components/Cards/ProviderActivityCard";
import { ActivityHandler } from "./type";
import useAuth from "../../../hooks/useAuth";
import * as Socket from "../../../config/webSocket";

const Home = () => {
  const { COLORS } = useContext(ThemeContext);
  const { token } = useAuth();

  const socket = Socket.initConnection({});

  const handleActivityApply: ActivityHandler = (activityId) => {};

  const handleActivityReject: ActivityHandler = (activityId) => {};

  const handleActivityFinalize: ActivityHandler = (activityId) => {};

  return (
    <BottomSheetModalProvider>
      <View>
        <Spacer height={10} />
        <Heading1>Atividades</Heading1>
        <FlatList
          ItemSeparatorComponent={() => <Spacer height={26} />}
          endFillColor={COLORS.PRIMARY}
          ListHeaderComponent={() => <Spacer height={10} />}
          ListFooterComponent={() => <Spacer height={60} />}
          data={[]}
          ListEmptyComponent={() => (
            <Container>
              <EmptyActivityImage />
              <Spacer height={50} />
              <EmptyActivityText>Não possui atividades</EmptyActivityText>
            </Container>
          )}
          renderItem={({ item: activity }) => (
            <ProviderActivityCard
              activity={activity}
              onActivityApply={handleActivityApply}
              onActivityReject={handleActivityReject}
              onActivityDone={handleActivityFinalize}
            />
          )}
        />
      </View>
      {/* <BudgetModal reference={reference} onBudgetApply={handleActivityBudget} /> */}
    </BottomSheetModalProvider>
  );
};

export default Home;
