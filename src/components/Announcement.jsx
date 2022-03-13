import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #a8c3e6;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Gift Joy to your loved ones! Flat 40% off on selected items</Container>;
};

export default Announcement;
