import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  margin: 10px;
`;

const Wrapper = styled.div``;
const Heading = styled.h1``;

const Home = () => {
  return (
    <Container>
      <Heading>Collage Data Management</Heading>
      <Wrapper>
        <Link to={"/create"}>
          <Button>Create</Button>
        </Link>
        <Link to={"/Read"}>
          <Button>Read</Button>
        </Link>
        <Link to={"/Update"}>
          <Button>Update</Button>
        </Link>
        <Link to={"/Delete"}>
          <Button>Delete</Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Home;
