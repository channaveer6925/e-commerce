import styled from 'styled-components';

const Conatiner = styled.div`
  height: 30px;
  background-color: teal;
  display: flex;
  justify-content: center;
  font-size: 16px;
  align-items: center;
  color: white;
  font-weight: 500;
`;
const Announcment = () => {
  return (
    <Conatiner>Super Deal! Free Shipping on Orders Over 1500 Rupees</Conatiner>
  );
};

export default Announcment;
