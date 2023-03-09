import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { updateHod } from "../apiCalls";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FormWrapper = styled.div`
  width: 500px;
`;
const Form = styled.form``;
const Title = styled.span``;
const UpdateItem = styled.div`
  margin: 10px;
`;
const Input = styled.input``;

const Heading = styled.h2``;
const EditButton = styled.button``;

const EditHod = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [inputs, setInputs] = useState({});
  const hodId = location.pathname.split("/")[3];

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = () => {
    updateHod(hodId, inputs, dispatch);
  };

  console.log(hodId);
  console.log(inputs);

  return (
    <Container>
      <FormWrapper>
        <Title>
          <Form>
            <UpdateItem>
              <Heading>Change HOD details</Heading>
              <Input placeholder="Name" name="name" onChange={handleChange} />
              <Input placeholder="Age" name="age" onChange={handleChange} />
              <Input
                placeholder="Gender"
                name="gender"
                onChange={handleChange}
              />

              <EditButton onClick={handleClick}>EDIT</EditButton>
            </UpdateItem>
          </Form>
        </Title>
      </FormWrapper>
    </Container>
  );
};

export default EditHod;
