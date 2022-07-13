import {useState} from 'react';
function useTags(){
     let [tags,setTags] =useState([{tagId:1,tagName:'衣'},{tagId:2,tagName:'食'},{tagId:3,tagName:'住'},{tagId:4,tagName:'行'}]) 
     return {tags,setTags}
}
export {useTags}