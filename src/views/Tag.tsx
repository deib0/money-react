import Layout from "components/Layout"
import React from "react"
import { useParams } from "react-router-dom"
import { useTags } from 'useTags';
type Params ={tagId:string}
const Tag=()=>{
    const {tags} =useTags()
    const {tagId} = useParams() as Params
    let tagName = tags.filter(item=>item.tagId===parseInt(tagId))[0].tagName
    return (
        <Layout>
            <h2>编辑标签</h2>
            <div>
                {tagName}
            </div>
        </Layout>
    )
}
export {Tag}