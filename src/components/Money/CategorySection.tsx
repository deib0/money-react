import styled from 'styled-components';
import React from 'react';
import {useState} from 'react';

const Wrapper = styled.section`
  font-size: 24px;
  > ul{
    display:flex;
    background:#c4c4c4;
    > li {
      width: 50%; 
      text-align:center;
      padding: 16px 0;
      position:relative;
      &.selected::after{
        content: '';
        display:block; 
        height: 3px;
        background:#333;
        position:absolute;
        bottom:0;
        width: 100%;
        left: 0;
      }
    }
  }
`;

const CategorySection =()=>{
  const [categoryList] = useState<('+'|'-')[]>(['-','+'])
  const categoryMap = {'+':'收入','-':'支出'}
  let [category,setCategory] = useState('-')
  const onClick =(value:string)=>{
   setCategory(value)
  }
  return (
      <Wrapper>
        <ul>
          {categoryList.map(item=>
            <li key={item} 
            onClick={()=>onClick(item)}
            className={item===category?'selected':''}
            >{categoryMap[item]}</li>
            )}
        </ul>
      </Wrapper>
  )
}

export {CategorySection}