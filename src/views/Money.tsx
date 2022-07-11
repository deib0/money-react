import React from "react";
import Layout from 'components/Layout';
import styled from 'styled-components';

const TagsSection =styled.div``
const NoteSection = styled.div``
const TypesSection = styled.div``
const NumberPadSection = styled.div``

function Money() {
    return( 
    <Layout>
      <TagsSection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button className="addTag">新增标签</button>
      </TagsSection>
      <NoteSection>
        <label>
          <span>备注</span>
          <input type="text"/>
        </label>
      </NoteSection>
      <TypesSection>
        <div className="output"></div>
        <div className="input"></div>
      </TypesSection>
      <NumberPadSection>
        <p>0</p>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>+</li>
          <li>删除</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>-</li>
          <li>清空</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>OK</li>
          <li>0</li>
          <li>.</li>
          <li></li>
        </ul>
      </NumberPadSection>
    </Layout>
    )
  }

export default Money
