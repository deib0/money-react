import {useState} from 'react';
function useTags(){
     let [tags,setTags] =useState(['衣','食','住','行']) 
     return {tags,setTags}
}
export {useTags}