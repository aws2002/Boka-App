import React from "react";
import { FlatList } from "react-native";
import AccordionItemServices from "./AccordionItemServices";
const AccordionListServices = ({
  data,
  customTitle,
  customBody,
  customIcon,
  containerItemStyle,
  animationDuration,
  customIconText,
  isRTL,
  ...props
}) => {
  const renderItem = ({ item }) => (
    <AccordionItemServices
      containerStyle={containerItemStyle}
      customTitle={() => customTitle(item)}
      customBody={() => customBody(item)}
      customIconText={() => customIconText(item)}
      animationDuration={animationDuration}
      isRTL={isRTL}
    />
  );
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      {...props}
    />
  );
};
export default AccordionListServices;
