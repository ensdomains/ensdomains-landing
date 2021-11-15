import styled from "@emotion/styled"
import mq from "../mediaQuery"

export const H2 = styled("h2")`
  font-family: Overpass;
  font-weight: 300;
  font-size: 28px;
  margin-top: 0;
  margin-bottom: 20px;
  color: #2c46a6;
  text-align: center;

  ${mq.medium`
    font-size: 60px;
  `}
`

export const P = styled("p")`
  font-size: 18px;
  font-family: Overpass;
  font-weight: 200;
  line-height: 1.5em;
  max-width: 750px;

  ${mq.medium`
    font-size: 28px;
  `}
`

export const Button = styled("a")`
  background: #5284ff;
  box-shadow: 0 10px 21px 0 rgba(38, 61, 145, 0.26);
  border-radius: 23px;
  font-family: Overpass;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0.5px;
  text-align: center;
  padding: 13px 30px;
  text-decoration: none;
`

export const Buttonv2 = styled("a")`
  background: linear-gradient(330.4deg, #44BCF0 4.54%, #7298F8 59.2%, #A099FF 148.85%);
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.04);
  border-radius: 12px;
  font-family: "JakartaSans";
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #FFFFFF;

  padding: 13px 30px;
  text-decoration: none;
  line-height: 21px;
`
