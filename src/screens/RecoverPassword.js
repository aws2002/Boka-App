import { StatusBar } from "expo-status-bar";
import CustomInput from "../components/customInput";
import { globalStyles } from "../styles/global";
import { useState } from "react";
import { Text, Box, View, HStack } from "native-base";
import CustomButton from "../components/customButton";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup"
export default function RecoverPassword() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const onLoginPressed = () => {
    console.log("Login");
  };
  return (
    <Box style={{ flex: 1, paddingHorizontal: 20 }} safeAreaTop="20">
      <View style={{ width: "100%", height: 70 }}>
        <HStack>
          <MaterialIcons
            name="arrow-back-ios"
            onPress={navigation.goBack}
            size={24}
            color="#4B5563"
          />
          <Text color={"#4B5563"} fontSize={16}>
            Back
          </Text>
        </HStack>
      </View>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={{ flex: 2 }}>
          <Text style={globalStyles.text_h1}>Recover Password</Text>
          <Text style={globalStyles.text_p}>
            We will send you a code to reset your password.
          </Text>
          <CustomInput
            value={email}
            setValue={setEmail}
            placeholder={"Enter your email or phone"}
            title="Email / Phone"
            secureTextEntry={false}
          />
          <Box mt={10}>
            <CustomButton text={"Get recovery code"} onPress={onLoginPressed} />
          </Box>
        </View>
      </TouchableWithoutFeedback>

      <StatusBar style="auto" />
    </Box>
  );
}
