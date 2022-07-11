import React from "react";
import styled from 'styled-components';


function NoMatch() {
  const Explain = styled.p`
        a{
          color: blue
        }
      `
  return (
      <Explain>
        sorry,your page is missing! come to &nbsp; 
        <a href="#/" >Home page.</a>
        </Explain>
    );
}

export default NoMatch