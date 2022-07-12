import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import {TagsSection} from 'components/Money/TagsSection';
import {CategorySection} from 'components/Money/CategorySection';
import {NotesSection} from 'components/Money/NotesSection';
import {NumberPadSection} from 'components/Money/NumberPadSection';
import {useState} from 'react';

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`
function Money() {
  const [record,setRecord]=useState({
    tags:[] as string[],
    notes :'',
    category: '-',
    amount: '0'
  }
  )
  const onChange=(obj:Partial<typeof record>)=>{
    setRecord({...record, ...obj})
  }
  return (
    <MyLayout>
      <TagsSection
      value={record.tags}
      onChange={(tags)=>onChange({tags})}
      />
      <NotesSection 
      value={record.notes}
      onChange={(notes)=>onChange({notes})}
      />
      <CategorySection 
      value={record.category}
      onChange={(category)=>onChange({category})}
      />
      <NumberPadSection 
      value={record.amount}
      onChange={(amount)=>onChange({amount})}
      />
    </MyLayout>
  );
}

export default Money;