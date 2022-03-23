import { propsType, ReactDispatch } from "../../../helpers/GlobalType";

export type DialogsMuiTypeProps = {
  isOpen: boolean;
  onClose: (value: React.SetStateAction<boolean>) => void;
  title?: string;
} & propsType;
