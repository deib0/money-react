import { createId } from 'lib/createId';
import {useState} from 'react';
let defaultTags = [{tagId:createId(),tagName:'衣'},{tagId:createId(),tagName:'食'},{tagId:createId(),tagName:'住'},{tagId:createId(),tagName:'行'}]
function useTags(){
     let [tags,setTags] =useState(defaultTags)
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
     const updateTag = (id: number, obj: { name: string }) => {
          const index = findTagIndex(id);
          const tagsClone = JSON.parse(JSON.stringify(tags));
          tagsClone.splice(index, 1, {tagId: id, tagName: obj.name});
          setTags(tagsClone);
        };
     return {tags,setTags,findTag,updateTag}

}
export {useTags}