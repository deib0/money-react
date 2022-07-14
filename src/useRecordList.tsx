import { useState, useEffect } from 'react';
import { useUpdate } from './hooks/useUpdate';
type Record = {
    tagIds:number[],
    notes:string,
    category:string,
    amount:string,
    createdAt:string,
}
type NewRecord = Omit<Record, 'createdAt'>
let useRecordList =()=>{
   const [recordList,setRecordList]=useState<Record[]>([])
   useEffect(()=>setRecordList(JSON.parse(localStorage.getItem('recordList')||'[]')),[])
   useUpdate(()=>{localStorage.setItem('recordList',JSON.stringify(recordList))},[recordList])
   const addRecordList =(record:NewRecord)=>{
    let recordListClone =JSON.parse(JSON.stringify(recordList))as Record[]
    recordListClone.push({...record,createdAt:new Date().toISOString()})
    setRecordList(recordListClone)
   }
   return {recordList,setRecordList,addRecordList}
}
export {useRecordList}