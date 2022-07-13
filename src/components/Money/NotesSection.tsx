import styled from 'styled-components';
import React,{ChangeEventHandler} from 'react';
import { Input } from './Input';
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
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);
  };

  return (
        <Wrapper>
          <label>
            <Input label="备注" type="text" placeholder="填写备注。。" value={note}
            onChange={onChange}
            />
          </label>
        </Wrapper>
        )
}

export {NotesSection}