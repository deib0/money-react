import styled from 'styled-components';
import React from 'react';
import { useTags } from 'useTags';

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
type Props ={value:number[],onChange:(selected:number[])=>void}
const TagsSection:React.FC<Props> =(props:Props)=>{
  let {tags,setTags} = useTags()
  let selectedTags=props.value
  const addTag =()=>{
    let newTag =prompt('创建新的标签吧')
    if(newTag!==null){
      let tagNames =[] as string[]
      tags.filter(item=>tagNames.push(item.tagName))
      let index = tagNames.indexOf(newTag)
      if(index>=0){
        alert('换一个标签名呗')
      }else{

        setTags([...tags,{tagId:Math.random(),tagName:newTag}])
      }
    }
  }
  const toggle=(tagId:number)=>{
    let index =selectedTags.indexOf(tagId)
    if(index>=0){
      props.onChange(selectedTags.filter(item=>item!==tagId))
    }else{
      props.onChange([...selectedTags,tagId])
    }
  }
  const toggleClass=(tagId:number)=>{
    let index =selectedTags.indexOf(tagId)
    if(index>=0){
      return 'selected'
    }else{
      return ''
    }
  }
  return (
    <Wrapper>
        <ol>
          {tags.map(item=>
            <li onClick={()=>toggle(item.tagId)}
            className={toggleClass(item.tagId)}
            key={item.tagId} >{item.tagName}</li>
            )}
        </ol>
        {selectedTags}
        <button onClick={()=>addTag()}>新增标签</button>
      </Wrapper>
  )
}

export {TagsSection};