import styled from "styled-components";
import { NavLink } from "react-router-dom";
import React from "react";
import Icon from "./Icons";

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow:0 0 3px rgba(0,0,0,.25);
  > ul {
    display:flex;
    > li{
      width: 33.3333%;
      text-align:center;
      display: flex;
      flex-direction: column;
      padding: 4px 0;
      justify-content: center;
      align-items: center;
      a {
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
          .icon {
          width: 24px;      
          height: 24px;
        }
        &.selected{
          color:red;
            .icon {
              fill: red;
            }
        }
      }
    }
  }
`;
function Nav(){
    return (
        <NavWrapper>
            <ul>
            <li>
              <NavLink activeClassName="selected" to="/tags">
              <Icon name="labels" />
                标签页
              </NavLink>
            </li>
            <li>
              <NavLink to="/money" activeClassName="selected">
              <Icon name="money" />
                记账页
                </NavLink>
            </li>
            <li>
              <NavLink to="/statistics" activeClassName="selected">
              <Icon name="account" />
                统计页
              </NavLink>
            </li>
                </ul>
        </NavWrapper>
    )
}
export default Nav

