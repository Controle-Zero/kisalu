import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React from "react";

export type Props = {
  reference: React.Ref<BottomSheetModal>;
  onSubmit: (serviceDescription: string) => void;
};
