import { View, Text, TextInput, StyleSheet } from "react-native";

export default function CustomInput({ value, onChangeText, placeholder,title ,secureTextEntry,onBlur}) {
  return (
    <View style={style.container}>
      <Text style={style.inputTitle}>{title}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={style.input}
        placeholder={placeholder}
        onBlur={onBlur}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    borderColor: "#E5E7EB",
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 8,
  },
  inputTitle: {
    paddingHorizontal: 15,
    paddingTop: 10,
    color: "#6B7280",
    fontSize: "12",
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
});
