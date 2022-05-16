import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useCallback, useRef } from "react";

export function useCustomBottomSheetModal() {
  const reference = useRef<BottomSheetModal>(null);
  const showModal = useCallback(() => {
    reference.current?.present();
  }, []);
  return { reference, showModal };
}
