import Provedor from "../../../models/Provedor";
import { formatDate } from "../../../utils/dateFormatter";
import { ProfileDataType } from "./type";

const Icons = {
  birthDate: "calendar-blank",
  address: "home",
  email: "email",
  phone: "phone",
  bi: "card-bulleted",
  logout: "logout",
  iban: "bank",
  estado: "account",
};

export function buildProfileData({
  dataNasc,
  morada,
  email,
  telefone,
  bi,
  iban,
  estado,
}: Provedor): ProfileDataType {
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
      label: "Morada",
      text: morada,
      icon: Icons.address,
    },
    {
      label: "Telefone",
      text: telefone,
      icon: Icons.phone,
    },
    {
      label: "IBAN",
      text: iban,
      icon: Icons.iban,
    },
    {
      label: "Estado",
      text: estado as string,
      icon: Icons.estado,
    },
  ];
}
