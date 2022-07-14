import { createId } from 'lib/createId';
import {useEffect, useState} from 'react';
import { useUpdate } from './hooks/useUpdate';
function useTags(){
     let [tags,setTags] =useState<{tagId:number,tagName:string}[]>([])
     useEffect(()=>{
          let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
          if (localTags.length === 0) {
            localTags = [
              {tagId: createId(), tagName: '衣'},
              {tagId: createId(), tagName: '食'},
              {tagId: createId(), tagName: '住'},
              {tagId: createId(), tagName: '行'},
            ];
          }
          setTags(localTags);
        },[])
     useUpdate(() => {
          window.localStorage.setItem('tags', JSON.stringify(tags));
     }, [tags]);
     let findTag=(tagId:number)=>{
          return tags.filter(item=>item.tagId===tagId)[0]
     }
     const findTagIndex = (id: number) => {
          let result = -1;
          for (let i = 0; i < tags.length; i++) {
            if (tags[i].tagId === id) {
              result = i;
              break;
            }
          }
          return result;
        };
      const getTagName =(tagId:number)=>{
        return tags.filter(item=>item.tagId===tagId)[0].tagName
      }
     const updateTag = (id: number, obj: { name: string }) => {
          const index = findTagIndex(id);
          const tagsClone = cloneTag()
          tagsClone.splice(index, 1, {tagId: id, tagName: obj.name});
          setTags(tagsClone);
        };
     const removeTag=(tagId:number)=>{
          let index=findTagIndex(tagId)
          let tagsClone =cloneTag()
          tagsClone.splice(index, 1)
          setTags(tagsClone)
     }
     const cloneTag=()=>{
          return JSON.parse(JSON.stringify(tags))as typeof tags
     }
     const addTag=()=>{
        let tagName = prompt('请输入标签名')||''
        let tagNames:string[]=[]
        tags.map(item=>tagNames.push(item.tagName))
        let index =tagNames.indexOf(tagName)
        if(index>=0){
          alert('换个名字吧')
        }else{
          setTags([...cloneTag(),{tagName:tagName,tagId:createId()}])
        }
     }
     return {tags,setTags,findTag,updateTag,removeTag,addTag,getTagName}

}
export {useTags}