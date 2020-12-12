import React from "react";
import { MainContainer } from "./popup.styles";
const Popup = ({ info }) => {
  return <MainContainer>{info}</MainContainer>;
};

export default Popup;

// "New exercise has been added to library"
// "New workout has been created and added"
// "Training has been finished. The workout creator and the current workout have been reset. Training saved in the archive"
