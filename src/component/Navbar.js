import React from 'react';
import styled from 'styled-components';
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {
  return(
    <>
      <NavContainer>
        <Menus>
          <Menu>홈</Menu>
          <Menu>게시판1</Menu>
          <Menu>게시판2</Menu>
          <Menu>게시판3</Menu>
          <Menu>글쓰기</Menu>
        </Menus>
      </NavContainer>
    </>
  )
}

const NavContainer = styled.div`
  display: flex;
  background-color: #02204f;
  height: 80px;
  justify-content: center;
  align-items: center;
`;
const Menus = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
`;
//const PageLink = styled(Link)``;  
const Menu = styled.li`
  display: block;
  padding: 8px 12px;

  &:hover {
    border-bottom: 1px solid #fff;
    box-sizing: border-box;
  }
`;

export default Navbar;