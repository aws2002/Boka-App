import CustomInput from "../components/customInput";
import { globalStyles } from "../styles/global";
import { Text, View } from "native-base";
import CustomButton from "../components/customButton";
import LayoutAuth from "../components/Layouts/LayoutAuth";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useMutation } from "react-query";
import { loginService } from "../service";
const loginSchemaValidation = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .trim()
    .min(8, "Password is to short")
    .required("Password is required"),
});

export default function Login() {
  const navigation = useNavigation();

  const { mutate, isLoading, isError, error, isSuccess, data } = useMutation(
    loginService,
    {
      onSuccess: (data) => {
        return data;
      },
      onError: (error) => {
        return error;
      },
    }
  );
  const onLoginPressed = () => {
    console.log("login");
  };
  const onRecoverPasswordPressed = () => {
    navigation.navigate("recoverPassword");
  };
  return (
    <LayoutAuth createAccont={true}>
      {isError && (
        <Text>
          An error occurred: {error.message}
        </Text>
      )}

      <View style={{ flex: 2 }}>
        <Text style={globalStyles.text_h1}>Welcome Back!</Text>
        <Text style={globalStyles.text_p}>Get your business updates.</Text>
        <Formik
          validateOnChange={false}
          validateOnBlur={false}
          validationSchema={loginSchemaValidation}
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            mutate(values, { onSuccess: ()=> resetForm() });
            setSubmitting(false);
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

              {errors.email && (
                <Text color={"#f00"} fontWeight={500}>
                  * {errors.email}
                </Text>
              )}
              <CustomInput
                value={values.password}
                onBlur={handleBlur("password")}
                placeholder={"***********"}
                title="Password"
                secureTextEntry={true}
                onChangeText={handleChange("password")}
              />
              {errors.password && (
                <Text color={"#f00"} fontWeight={500}>
                  * {errors.password}
                </Text>
              )}
              <View>
                <Text
                  textAlign="right"
                  mt={2}
                  mb={4}
                  onPress={onRecoverPasswordPressed}
                >
                  Forgot Password?
                </Text>
              </View>
              <CustomButton text={"Login"} onPress={handleSubmit} />
            </View>
          )}
        </Formik>
      </View>
    </LayoutAuth>
  );
}
