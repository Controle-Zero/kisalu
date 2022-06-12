import { View, Text } from "react-native";
import React from "react";
import { useQuery } from "react-query";
import * as ProviderAPI from "../../../../API/provider";
import useAuth from "../../../../hooks/useAuth";
import { ActivityNavProps } from "../../../../routes/types/Provider/ActivityParamList";
import LoadingScreen from "../../../other/LoadingScreen";
import ActivityHeader from "../../../../components/ActivityHeader";

const Activity = ({ route: { params } }: ActivityNavProps<"Activity">) => {
  const { activityId } = params;
  const { token, user } = useAuth();
  const {
    data: activity,
    isLoading,
    error,
  } = useQuery("activity", getActivity);

  async function getActivity() {
    const activities = await ProviderAPI.getActivities(token);
    const activity = activities.find((activity) => activity.id === activityId);
    return activity;
  }

  if (error) console.error(error);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <View>
      <ActivityHeader
        clientProfilePicture={activity?.Cliente.imageUrl as string}
        creationDate={activity?.dataCriado as Date}
        providerProfilePicture={user?.imageUrl as string}
      />
      <Text>Activity</Text>
    </View>
  );
};

export default Activity;
