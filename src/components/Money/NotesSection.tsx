import styled from 'styled-components';
import React,{useRef} from 'react';
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
type Props={value:string,onChange:(notes:string)=>void}
const NotesSection:React.FC<Props> =(props:Props)=>{
  let note= props.value
  let refInput = useRef<HTMLInputElement>(null) 
  let changeNote=()=>{
    props.onChange(refInput.current!.value)
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