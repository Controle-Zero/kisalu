import Cliente from "../../../models/Cliente";
import { formatDate } from "../../../utils/dateFormatter";
import { ProfileDataType } from "./types";

const Icons = {
  birthDate: "calendar-blank",
  address: "home",
  email: "email",
  phone: "phone",
  bi: "card-bulleted",
};

export function buildProfileData({
  email,
  dataNasc,
  bi,
  morada,
  telefone,
}: Cliente): ProfileDataType {
  const formattedBirthDate = formatDate(new Date(dataNasc));
  return [
    {
      label: "Email",
      text: email,
      icon: Icons.email,
    },
    {
      label: "Data de nascimento",
      text: formattedBirthDate,
      icon: Icons.birthDate,
    },
    {
      label: "BI",
      text: bi,
      icon: Icons.bi,
    },
    {
      label: "Telefone",
      text: telefone,
      icon: Icons.phone,
    },
  ];
}
