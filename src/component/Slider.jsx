import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;
const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: green;
  height: 25px;
  width: 25px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer   ;
`;

const Slider = () => {
  return (
    <Container>
      <Arrow direction='left'>
        <ArrowLeftOutlined />
      </Arrow>
      <Arrow direction='right'>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
