import React, {useState, useRef} from "react";
import styled from "styled-components";

const Images = () => {
  const [images, setImages] = useState([]);

  const nextId = useRef(1);

  const onUploadImage = (e) => {
    const nowImage = Array.from(e.target.files); // 유사객체를 복사해 새로운 배열을 만든다

    const files = nowImage.map((file) => {
      // 각각의 파일 객체에 대하여 3개의 속성을 갖는 객체를 만든다.
      const image = {
        id: nextId.current,
        imageFile: file,
        blob: URL.createObjectURL(file),
      };
      nextId.current++;
      return image;
    });
    setImages(images.concat(files));
  };

  const onRemove = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  const renderImages = (files) => {
    return files.map((file) => {
      return (
        <ImageContainer key={file.id}>
          <DeleteButton onClick={() => onRemove(file.id)} key={file.id}>
            <div />
          </DeleteButton>
          <ImageBox src={file.blob} key={file.blob} alt="이미지" />
        </ImageContainer>
      );
    });
  };

  return (
    <>
      <label htmlFor="input-file" />
      <input
        type="file"
        multiple="multiple"
        id="input-file"
        accept="image/*"
        onChange={onUploadImage}
      />
      <ImagesContainer>{renderImages(images)}</ImagesContainer>
    </>
  );
};

const ImagesContainer = styled.div`
  width: 700px;
  display: flex;
  flex-wrap: wrap;
`;
const ImageContainer = styled.div`
  position: relative;
`;
const ImageBox = styled.img`
  width: 200px;
  height: 200px;
  margin: 10px;
  border-radius: 10px;
`;

const DeleteButton = styled.div`
  width: 25px;
  height: 25px;
  background-color: #115ed9;
  border-radius: 20px;
  position: absolute;
  left: 195px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  div {
    width: 10px;
    height: 2px;
    background-color: #fff;
  }
`;

export default Images;

// 이미 추가된 파일이 또 추가되는 문제해결하기!
// url state에 add상태:true/false 추가하기
