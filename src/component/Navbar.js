import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return(
    <>
      <NavContainer>
        <Menus>
          <PageLink to="/">
            <Menu>홈</Menu>
          </PageLink>
          <PageLink to="/board1">
            <Menu>게시판1</Menu>
          </PageLink>
          <PageLink to="/board2">
            <Menu>게시판2</Menu>
          </PageLink>
          <PageLink to="/board3">
            <Menu>게시판3</Menu>
          </PageLink>
          <PageLink to="/write">
            <Menu>글쓰기</Menu>
          </PageLink>
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
`;
const PageLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;  
const Menu = styled.li`
  display: block;
  padding: 8px 12px;

  &:hover {
    border-bottom: 1px solid #fff;
    box-sizing: border-box;
  }
`;

export default Navbar;