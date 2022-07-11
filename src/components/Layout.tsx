import React from "react";
import Nav from "components/Nav";
import styled from 'styled-components';
const Wrapper=styled.div`
    height:100vh;
    display: flex;
    flex-direction:column;
    justify-content:end;
    .children-wrapper{
        flex-grow:1;
    }
    
    `
function Layout(props:any){
return (
        <Wrapper>
        <div className="children-wrapper">
            {props.children}
        </div>
        <Nav/>
        </Wrapper>
)
}
export default Layout