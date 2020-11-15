import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const NavLinkContainer = styled(NavLink)`
  height: 100px;
  /* background-color: #f7fafb; */
  background-color: black;
  /* color: #3598cc; */
  text-align: center;
  line-height: 100px;
  font-size: 20px;
  color: white;
  border: none;
  margin-bottom: 10px;
  &:focus {
    outline: none;
  }
`;
export const ButtonContainer = styled.div`
  margin-top: 25%;
  display: flex;
  flex-direction: column;
`;
export const MenuContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: white;
  position: absolute;
  left: 0;
  z-index: -1;
`;
