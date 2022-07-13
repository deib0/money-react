import React from 'react';
import { Wrapper } from './NumberPadComponents/Wrapper';
import { generateOutput } from './NumberPadComponents/generateOutput';
type Record = {
  tagId:number[],
  notes:string,
  category:string,
  amount:string
}
type Props = {value:string,onChange:(amount:string)=>void,onOk:()=>void}
const NumberPadSection: React.FC<Props> = (props:Props) => {
  let output = props.value
  const setOutput = (output: string) => {
    if (output.length > 16) {
      output = output.slice(0, 16);
    } else if (output.length === 0) {
      output = '0';
    }
    props.onChange(output)
  };
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) {return;}
    if (text === 'OK') {
      props.onOk()
      return;
    }
    if ('0123456789.'.split('').concat(['删除', '清空']).indexOf(text) >= 0) {
      setOutput(generateOutput(text, output));
    }

  };
  return (
    <Wrapper>
      <div className="output">
        {output}
      </div>
      <div className="pad clearfix" onClick={onClickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">OK</button>
        <button className="zero">0</button>
        <button className="dot">.</button>
      </div>
    </Wrapper>
  );
};


export {NumberPadSection};