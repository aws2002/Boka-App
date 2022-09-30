import React from "react";
import { FlatList } from "react-native";

import AccordionItem from "./AccordionItem";
// import PropTypes from 'prop-types';

const AccordionList = ({
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
    <AccordionItem
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
export default AccordionList;
