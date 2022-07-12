import React from "react";
import Layout from 'components/Layout';
import { useTags } from "useTags";

function Tags() {
    let {tags,setTags} = useTags()
    return (
    <Layout>
        <ul>
                {tags.map(item=><li key={item}>{item}</li>)}
        </ul>
    </Layout>
    )
  }

  export default Tags