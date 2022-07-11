import styled from 'styled-components';
import React, { FC, useState } from 'react';

const Wrapper = styled.section`
  background: #FFFFFF; padding: 12px 16px;
  flex-grow: 1; display:flex; flex-direction: column;
  justify-content: flex-end; align-items: flex-start;
  > ol { margin: 0 -12px;
    > li{
       background: #D9D9D9; border-radius: 18px;
       display:inline-block; padding: 3px 18px; 
       font-size: 14px; margin: 8px 12px;
        &.selected {
          background: #606060;
          color:white;
        }
      }
  }
  > button{
    background:none; border: none; padding: 2px 4px;
    border-bottom: 1px solid #333; color: #666;
    margin-top: 8px;
  }
`;
const TagsSection:FC=()=>{
  let [tags,SetTags] = useState(['衣','食','住','行'])
  let [selectedTags,setSelectedTags] = useState<string[]>([])
  const addTag =()=>{
    let newTag =prompt('创建新的标签吧')
    if(newTag!==null){
      let index = tags.indexOf(newTag)
      if(index>=0){
        alert('换一个标签名呗')
      }else{
        SetTags([...tags,newTag])
      }
    }
  }
  const toggle=(tag:string)=>{
    let index =selectedTags.indexOf(tag)
    if(index>=0){
      setSelectedTags(selectedTags.filter(item=>item!==tag))
    }else{
      setSelectedTags([...selectedTags,tag])
    }
  }
  const toggleClass=(tag:string)=>{
    let index =selectedTags.indexOf(tag)
    if(index>=0){
      return 'selected'
    }else{
      return ''
    }
  }
  return (
    <Wrapper>
        <ol>
          {tags.map(tag=>
            <li onClick={()=>toggle(tag)}
            className={toggleClass(tag)}
            key={tag} >{tag}</li>
            )}
        </ol>
        <button onClick={()=>addTag()}>新增标签</button>
      </Wrapper>
  )
}

export {TagsSection};