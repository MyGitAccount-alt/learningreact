import React from "react";
import { Image } from "react-native";
import { PIC_URL } from "./Urllinks";

const Imageprops = () => {
  let pic = `${PIC_URL}`;

  return (
    <Image
      source={pic}
      style={{
        width: 193,
        height: 110,
        marginTop: 50
      }}
    />
  );
};

export default Imageprops;
