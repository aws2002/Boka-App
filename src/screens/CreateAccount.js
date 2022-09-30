import { StatusBar } from "expo-status-bar";
import CustomInput from "../components/customInput";
import { globalStyles } from "../styles/global";
import { useState } from "react";
import CustomButton from "../components/customButton";
import LayoutAuth from "../components/Layouts/LayoutAuth";
import { HStack, Text, Center, Link, View } from "native-base";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";

const createAccountValidation = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
});
export default function CreateAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onLoginPressed = () => {
    console.log("Login");
  };
  return (
    <LayoutAuth createAccont={false}>
      <Text style={globalStyles.text_h1}>Become a Provider On Boka</Text>
      <Text style={globalStyles.text_p}>
        Welcome to Boka! Enter your email or Phone to get started.
      </Text>
      <Formik
        initialValues={{ email: "" }}
        onSubmit={(values, actions) => {
          actions.resetForm();
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View>
            <CustomInput
              value={values.email}
              placeholder={"Enter your email or phone"}
              title="Email / Phone"
              secureTextEntry={false}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("password")}
            />
            <Text>{errors.email}</Text>

            <Text mb={10}>
              Creating an account means you are agree with Boka’s{" "}
              <Link href="">
                <Text underline color={"#1E88E5"}>
                  Privacy policy
                </Text>
              </Link>{" "}
              &{" "}
              <Link href="">
                <Text underline color={"#1E88E5"}>
                  Term of use
                </Text>
              </Link>
            </Text>

            <CustomButton text={"Continue"} onPress={handleSubmit} />
          </View>
        )}
      </Formik>
      <StatusBar style="auto" />
    </LayoutAuth>
  );
}
