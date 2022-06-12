import React, { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { View } from "react-native";
import * as AngolaSubdivisions from "../../../utils/angolaSubdivisions";
import * as DateFormatter from "../../../utils/dateFormatter";
import { Dropdown } from "react-native-element-dropdown";
import DateTimePicker from "@react-native-community/datetimepicker";
import TextButton from "../../Button/TextButton";
import TextField from "../../Input/TextField";
import Spacer from "../../layout/Spacer";
import ErrorText from "../ErrorText";
import { FlexRow, Label, SmallText } from "./style";
import { ClientSignUpFormType, Props } from "./types";
import { dropdownStyles } from "../ProviderSignUpForm/style";
import Button from "../../Button";

function getProvinces() {
  return AngolaSubdivisions.getAllProvinces().map((province) => ({ province }));
}

function getCountiesByProvince(province: string) {
  return AngolaSubdivisions.getAllCountiesFromProvince(province).map(
    (county) => ({ county })
  );
}

const ClientSignUpForm: React.FC<Props> = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext<ClientSignUpFormType>();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState("Luanda");
  let counties: {
    county: string;
  }[] = getCountiesByProvince(selectedProvince);
  const [selectedCounty, setSelectedCounty] = useState(counties[0].county);

  useEffect(() => {
    counties = getCountiesByProvince(selectedProvince);
    setSelectedCounty(counties[0].county);
  }, [selectedProvince]);

  const provinceData = getProvinces();
  const spaceBetweenInputs = 20;
  return (
    <View>
      {/* FullName */}
      <Controller
        control={control}
        name="fullName"
        render={() => (
          <TextField
            label="Nome Completo"
            onChangeText={(value) => setValue("fullName", value)}
            value={getValues("fullName")}
            hasError={!!errors.fullName}
          />
        )}
      />
      {errors.fullName && (
        <ErrorText text={errors.fullName.message as string} />
      )}
      <Spacer height={spaceBetweenInputs} />
      {/* BirthDate */}
      <Controller
        control={control}
        name="birthDay"
        render={() => (
          <FlexRow>
            <TextButton
              onPress={() => setShowDatePicker(true)}
              text="Data de nascimento"
            />
            <Label>{DateFormatter.formatDate(getValues("birthDay"))}</Label>
            {showDatePicker && (
              <DateTimePicker
                value={getValues("birthDay")}
                mode="date"
                maximumDate={new Date()}
                onChange={(_: any, date?: Date | undefined) => {
                  setValue("birthDay", date || getValues("birthDay"));
                  setShowDatePicker(false);
                }}
              />
            )}
          </FlexRow>
        )}
      />
      {errors.birthDay && (
        <ErrorText text={errors.birthDay.message as string} />
      )}
      <Spacer height={spaceBetweenInputs} />

      {/* Province and County */}
      <Label>Província e Município</Label>
      <FlexRow>
        <Controller
          control={control}
          name="province"
          render={() => (
            <Dropdown
              style={dropdownStyles.dropdown}
              placeholderStyle={dropdownStyles.placeholderStyle}
              selectedTextStyle={dropdownStyles.selectedTextStyle}
              inputSearchStyle={dropdownStyles.inputSearchStyle}
              containerStyle={dropdownStyles.container}
              data={provinceData}
              valueField="province"
              labelField="province"
              onChange={(value) => {
                setValue("province", value.province);
                setSelectedProvince(value.province);
              }}
              value={selectedProvince}
              search
              searchPlaceholder="Pesquise por uma província..."
              placeholder="Selecione uma província"
            />
          )}
        />
        <Spacer width={15} />
        <Controller
          control={control}
          name="county"
          render={() => (
            <Dropdown
              style={dropdownStyles.dropdown}
              placeholderStyle={dropdownStyles.placeholderStyle}
              selectedTextStyle={dropdownStyles.selectedTextStyle}
              inputSearchStyle={dropdownStyles.inputSearchStyle}
              containerStyle={dropdownStyles.container}
              data={counties}
              valueField="county"
              labelField="county"
              onChange={(value) => {
                setValue("county", value.county);
                setSelectedCounty(value.county);
              }}
              value={selectedCounty}
              search
              searchPlaceholder="Pesquise por um município..."
              placeholder="Selecione um município"
            />
          )}
        />
      </FlexRow>
      {errors.province && (
        <ErrorText text={errors.province.message as string} />
      )}
      {errors.county && <ErrorText text={errors.county.message as string} />}
      <Spacer height={spaceBetweenInputs} />

      {/* Distrito */}
      <Controller
        control={control}
        name="district"
        render={() => (
          <TextField
            label="Distrito"
            value={getValues("district")}
            onChangeText={(value) => setValue("district", value)}
            hasError={!!errors.district}
          />
        )}
      />
      {errors.district && (
        <ErrorText text={errors.district.message as string} />
      )}
      <Spacer height={spaceBetweenInputs} />

      {/* Bairro */}
      <Controller
        control={control}
        name="neighbor"
        render={() => (
          <TextField
            label="Bairro"
            value={getValues("neighbor")}
            onChangeText={(value) => setValue("neighbor", value)}
            hasError={!!errors.neighbor}
          />
        )}
      />
      <Spacer height={spaceBetweenInputs} />

      {/* BI */}
      <Controller
        control={control}
        name="bi"
        render={() => (
          <TextField
            label="BI"
            value={getValues("bi")}
            onChangeText={(value) => setValue("bi", value)}
            hasError={!!errors.bi}
            placeholder="O seu número do BI"
          />
        )}
      />
      {errors.bi && <ErrorText text={errors.bi.message as string} />}
      <Spacer height={spaceBetweenInputs} />

      {/* Email */}
      <Controller
        control={control}
        name="email"
        render={() => (
          <TextField
            label="Email"
            value={getValues("email")}
            onChangeText={(value) => setValue("email", value)}
            hasError={!!errors.email}
            placeholder="exemplo@exemplo.com"
          />
        )}
      />
      {errors.email && <ErrorText text={errors.email.message as string} />}
      <Spacer height={spaceBetweenInputs} />

      {/* Phone Number */}
      <Controller
        control={control}
        name="phoneNumber"
        render={() => (
          <TextField
            label="Número de Telefone"
            keyboardType="phone-pad"
            value={getValues("phoneNumber")}
            onChangeText={(value) => setValue("phoneNumber", value)}
            hasError={!!errors.phoneNumber}
            placeholder="9XX XXX XXX"
          />
        )}
      />
      {errors.phoneNumber && (
        <ErrorText text={errors.phoneNumber.message as string} />
      )}
      <Spacer height={spaceBetweenInputs} />

      {/* Password */}
      <Controller
        control={control}
        name="password"
        render={() => (
          <TextField
            label="Password"
            value={getValues("password")}
            onChangeText={(value) => setValue("password", value)}
            hasError={!!errors.password}
            secureText
          />
        )}
      />
      {errors.password ? (
        <ErrorText text={errors.password.message as string} />
      ) : (
        <SmallText>A password deve ter pelo menos 7 caracteres</SmallText>
      )}
      <Spacer height={spaceBetweenInputs} />

      {/* Password Confirmation */}
      <Controller
        control={control}
        name="passwordConfirmation"
        render={() => (
          <TextField
            label="Confirmar Password"
            value={getValues("passwordConfirmation")}
            onChangeText={(value) => setValue("passwordConfirmation", value)}
            hasError={!!errors.passwordConfirmation}
            secureText
          />
        )}
      />
      {errors.passwordConfirmation && (
        <ErrorText text={errors.passwordConfirmation.message as string} />
      )}

      <Spacer height={30} />
      <Button
        text="Cadastrar"
        onPress={handleSubmit<ClientSignUpFormType>(onSubmit, (error) =>
          console.log(error)
        )}
      />
    </View>
  );
};

export default ClientSignUpForm;
