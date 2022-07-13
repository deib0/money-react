import { createId } from 'lib/createId';
import {useState} from 'react';
let defaultTags = [{tagId:createId(),tagName:'衣'},{tagId:createId(),tagName:'食'},{tagId:createId(),tagName:'住'},{tagId:createId(),tagName:'行'}]
function useTags(){
     let [tags,setTags] =useState(defaultTags) 
     return {tags,setTags}
}
export {useTags}