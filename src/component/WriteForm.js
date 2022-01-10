import React, {useState} from "react";
import styled from "styled-components";

const WriteForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [boardType, setBoardType] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(boardType, title, content);
  }
  return (
    <>
      <WriteContainer onSubmit={onSubmit}>
        <BoardSelect onChange={(e) => setBoardType(e.target.value)}>
          <option value="" hidden>분류</option>
          <option value="1">게시판 1</option>
          <option value="2">게시판 2</option>
          <option value="3">게시판 3</option>
        </BoardSelect>
        <TitleSection>
          <TitleInput
            placeholder="제목"
            onChange={(e) => setTitle(e.target.value)
          }/>
        </TitleSection>
        <ContentSection>
          <ContentInput
            placeholder="내용"
            onChange={(e) => setContent(e.target.value)
          }/>
        </ContentSection>
        <SaveButton type="submit">글쓰기</SaveButton>
      </WriteContainer>
    </>
  );
};

// Container
const WriteContainer = styled.form`
  width: 700px;
  margin: 30px auto;
`;
// Select Board
const BoardSelect = styled.select`
  width: 50%;
  height: 30px;
  color: #7a7974;
  margin-bottom: 10px;
  padding-left: 8px;
  outline: none;

  option {
    color: #000;
  }
`;
// Title
const TitleSection = styled.div`
  width: 100%;
  border-bottom: 1px solid;
`;
const TitleInput = styled.input `
  width: 100%;
  border: none;
  outline: none;
  font-size: 24px;
  padding: 20px 10px;
`;
// Content
const ContentSection = styled.div`
  width: 100%;
  border-bottom: 1px solid;
`;
const ContentInput = styled.textarea`
  display: block;
  width: 100%;
  height: 400px;  
  border: none;
  outline: none;
  overflow: hidden;
  resize: none;
  font-size: 20px;
  padding: 20px 10px;
`;
// Button
const SaveButton = styled.button`
  display: block;
  width: 100px;
  height: 50px;
  border: none;
  border-radius: 4px;
  margin: 20px auto;
  background-color: #115ed9;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  
`;

export default WriteForm;
