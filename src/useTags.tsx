import { createId } from 'lib/createId';
import {useState} from 'react';
function useTags(){
     let [tags,setTags] =useState([{tagId:createId(),tagName:'衣'},{tagId:createId(),tagName:'食'},{tagId:createId(),tagName:'住'},{tagId:createId(),tagName:'行'}]) 
     return {tags,setTags}
}
export {useTags}