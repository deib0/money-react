import styled from 'styled-components';
import React,{useRef, useState} from 'react';
const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  > label {
    display:flex;
    align-items: center;
    > span { margin-right: 16px; white-space: nowrap; }
    > input {
      display:block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`;

const NotesSection:React.FC=()=>{
  let [note,setNote]=useState<string>('')
  let refInput = useRef<HTMLInputElement>(null) 
  let changeNote=()=>{
    setNote(refInput.current!.value)
  }
  return (
        <Wrapper>
          <label>
            <span>备注</span>
            <input type="text"  
            onBlur={()=>changeNote()}
            defaultValue={note}
            ref={refInput}
            />
          </label>
        </Wrapper>
        )
}

export {NotesSection}