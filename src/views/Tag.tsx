import Layout from "components/Layout"
import React from "react"
import {useParams } from "react-router-dom"
import { useTags } from 'useTags';
import styled from 'styled-components';
import Icon from 'components/Icons';
import { Center } from "components/Center";
import { Space } from "components/Space";
import { Button } from "components/Button";
import { Input } from "components/Money/Input";

const TopBar = styled.header`
  display:flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background:white;
`;
const InputWrapper = styled.div`
  background:white;
  padding: 0 16px;
  margin-top: 8px;
`;
type Params ={tagId:string}
const Tag=()=>{
    let urlId = (useParams()as Params).tagId
    const {findTag,updateTag,removeTag} =useTags()
    let tag = findTag(parseInt(urlId))
    const getBack =()=>{
        window.history.back()
    }
    return (
        <Layout>
      <TopBar>
        <Icon name="left" onClick={getBack} />
        <span>编辑标签</span>
        <Icon/>
      </TopBar>
      <InputWrapper>
        {tag?<Input 
        label="标签名" type="text" placeholder="标签名" value={tag.tagName}
        onChange={(e)=>{updateTag(tag.tagId,{name:e.target.value})}}
        />:''}
      </InputWrapper>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button onClick={()=>{removeTag(tag.tagId);window.history.back()}}>删除标签</Button>
      </Center>
    </Layout>
    )
}
export {Tag}