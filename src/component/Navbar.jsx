import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';

const Container = styled.div`
  height: 60px;
  background-color: #d7f0f0;
`;
const Wrapper = styled.div`
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Language = styled.div`
  font-size: 14px;
  font-family: Roboto;
  margin-right: 100px;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  height: 30px;
  cursor: pointer;
`;

const Input = styled.input`
  border: none;
  height: 100%;
  outline: none;
  padding: 10px;
`;
const MenuItem = styled.div`
margin-left: 25px;
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <SearchIcon style={{color:"grey", fontSize:'16px',background:'none'}} />
          </SearchContainer>
        </Left>
        <Center>PATIL.</Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGNUP</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color='primary'>
              <ShoppingCartIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
