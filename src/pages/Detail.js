import React from "react";
import styled, { keyframes } from "styled-components";
import { Grid, Text, Input, Button } from "../elements/Index";
import DetailImage from "../components/DetailImage";
import DetailCont from "../components/DetailCont";
import DImg from "../images/DImg.png";
import { history } from "../redux/configureStore";
import CloseIcon from "@mui/icons-material/Close";

const Detail = () => {
  //body 스크롤 멈추기
  React.useEffect(() => {
    document.body.classList.add("overflowHidden");
    window.scrollTo(0, 0);
    return () => {
      document.body.classList.remove("overflowHidden");
    };
  }, []);
  return (
    <Grid
      width="100%"
      height="100vh"
      margin="0 auto"
      background="rgba(0, 0, 0, 0.8)"
      position="absolute"
      top="0"
      left="0"
      zIndex="11"
    >
      <Grid
        className={"modalcont"}
        width="1060px"
        height="80vh"
        margin="100px auto 0 auto"
        background="#fff"
        radius="10px"
        flex
      >
        <CloseIcon
          style={{
            position: "absolute",
            top: "40px",
            right: "10px",
            color: "#fff",
            height: "50",
            fontSize: "100px",
          }}
          onClick={() => {
            history.push(`/main`);
          }}
        />
        <DetailImage backgroundImg={DImg}></DetailImage>
        <DetailCont></DetailCont>
      </Grid>
    </Grid>
  );
};

export default Detail;
