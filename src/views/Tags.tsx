import React from "react";
import Layout from 'components/Layout';
import { useTags } from "useTags";
import styled from 'styled-components';
import Icon from "components/Icons";
import { Link } from "react-router-dom";
import { Center } from 'components/Center';
import { Space } from 'components/Space';
import { Button } from 'components/Button';

const TagList = styled.ol`
  font-size: 16px; 
  background:white;
  > li{
    //#e5e5e7
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    margin-left: 16px;
    align-items: center;
    a {
      display:flex;
      padding: 12px 16px 12px 0;
      justify-content: space-between;
    }
    .oneLine{
      width:100%;
    }
    
  }
`;

function Tags() {
  const {tags,addTag} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(item =>
          <li key={item.tagId}>
            <Link to={"/tags/"+item.tagId} >
              <p className="oneLine">{item.tagName}</p>
              <Icon name="right"/>
            </Link>
          </li>
        )}
      </TagList>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button onClick={addTag}>新增标签</Button>
      </Center>
    </Layout>
  );
}

export default Tags;