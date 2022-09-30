import { View, Text, StyleSheet,Pressable ,TouchableOpacity} from "react-native";
import React from "react";

export default function CustomButton({onPress,text}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FF914D",
    width: "100%",
    borderRadius: 8,
    marginVertical: 8,
    padding: 15,
    alignItems:"center"
  },
  text: {
    color: "#fff",
    fontWeight:'700',
    fontSize:16
  },
});
