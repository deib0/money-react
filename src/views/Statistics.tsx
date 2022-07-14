import React from "react";
import Layout from 'components/Layout';
import styled from 'styled-components';
import { useState,ReactNode } from 'react';
import { Record, useRecordList } from "useRecordList";
import { useTags } from "useTags";
import { CategorySection } from "components/Money/CategorySection";
import day from 'dayjs'

const CategoryWrapper = styled.div`
  background:white;
`;

const Item = styled.div`
  display:flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .note{
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;
const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`;

function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {recordList} = useRecordList();
  const {getTagName} = useTags();
  const hash: { [K: string]:Record[] } = {}; // {'2020-05-11': [item, item], '2020-05-10': [item, item], '2020-05-12': [item, item, item, item]}
  const selectedRecords = recordList.filter(r => r.category === category);// eslint-disable-next-line
  selectedRecords.map(r=> {
      const key = day(r.createdAt).format('YYYY年MM月DD日');
      if (!(key in hash)) {
        hash[key] = [] as Record[];
      }hash[key].push(r);
  });
  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0;
  });

  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category}
          onChange={value => setCategory(value)}/>
      </CategoryWrapper>
      {array.map(([date, recordList]) => <div>
        <Header>
          {date}
        </Header>
        <div>
          {recordList.map(r => {
            return <Item>
              <div className="tags oneLine">
                {r.tagIds
                  .map(tagId => <span key={tagId}>{getTagName(tagId)}</span>)
                  .reduce((result, span, index, array) =>
                    result.concat(index < array.length - 1 ? [span, '，'] : [span]), [] as ReactNode[])
                }
              </div>
              {r.notes && <div className="note">
                {r.notes}
              </div>}
              <div className="amount">
                ￥{r.amount}
              </div>
            </Item>;
          })}
        </div>
      </div>)}
    </Layout>
  );
}


export default Statistics;