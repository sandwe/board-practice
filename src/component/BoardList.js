import React from 'react';
import styled from 'styled-components';
import dummy from '../db/data.json';
const BoardList = () => {
  return (
    <>
      <Table>
        <Heading>번호</Heading>
        <Heading>제목</Heading>
        <Heading>작성일</Heading>
        {dummy.lists.map((list) =>
          <Row>
            <Column>{list.id}</Column>
            <Column>{list.title}</Column>
            <Column>{list.date}</Column>
          </Row> 
        )}
      </Table>
    </>
  )
};

const Table = styled.div`
  margin: 0 auto;
  display: table;
  width: 500px;
  height: 300px;
  border-top: 1px solid #949494;
  border-bottom: 1px solid #949494;
`;
const Heading = styled.div`
  display: table-cell;
  font-weight: bold;
  text-align: center;
`;
const Row = styled.div`
  display: table-row;

  &:hover {
    background-color: #02204f;
    color: #fff;
  }
`;
const Column = styled.div`
  display: table-cell;
  border-top: 1px solid #949494;
  text-align: center;
  padding: 16px 0;
`;

export default BoardList;