import React, { useRef, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Animated,
  LayoutAnimation,
} from "react-native";
import { View, Text, HStack, VStack } from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { toggleAnimation } from "../animations/toggleAnimation";
const AccordionItem = ({
  customBody,
  customTitle,
  customIcon,
  animationDuration,
  customIconText,
  isRTL,
}) => {
  const [showContent, setShowContent] = useState(false);
  const animationController = useRef(new Animated.Value(0)).current;

  const toggleListItem = () => {
    const config = {
      duration: animationDuration,
      toValue: showContent ? 0 : 1,
      useNativeDriver: true,
    };
    Animated.timing(animationController, config).start();
    LayoutAnimation.configureNext(toggleAnimation(animationDuration));
    setShowContent(!showContent);
  };
  const arrowTransform = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", isRTL ? "-90deg" : "90deg"],
  });
  return (
    <View
      style={[
        {
          backgroundColor: "#fff",
          borderColor: "#E5E7EB",
          borderWidth: 1,
          borderRadius: 8,
          marginVertical: 8,
          padding: 10,
        },
      ]}
    >
      <TouchableOpacity onPress={() => toggleListItem()}>
        <HStack justifyContent={"space-between"}>
          {!isRTL && customTitle()}
          
          {!customIcon ? (
            <HStack style={{ alignItems: "center", justifyContent: "center" }}>
              {!isRTL && customIconText()}
              <Animated.View
                style={{ transform: [{ rotateZ: arrowTransform }] }}
              >
                <MaterialIcons
                  name={isRTL ? "keyboard-arrow-left" : "keyboard-arrow-right"}
                  size={30}
                  color="#4B5563"
                />
              </Animated.View>
            </HStack>
          ) : (
            customIcon()
          )}
        </HStack>
        
        <View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          ></View>
        </View>
      </TouchableOpacity>
      {showContent && customBody()}
      
    </View>
  );
};
export default AccordionItem;
