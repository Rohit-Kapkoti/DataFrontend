import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { updateDepartment } from "../apiCalls";

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

const EditDepartment = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [inputs, setInputs] = useState({});
  const departmentId = location.pathname.split("/")[2]


  // const publicRequest = axios.create({
  //   baseURL: "http://localhost:8090",
  // });

  // useEffect(() => {
  //   const getDepartment = async () => {
  //     try {
  //       const res = await publicRequest.get("/department");
  //       setDepartments(res.data);
  //       console.log(res.data);
  //     } catch (error) {}
  //   };
  //   getDepartment();
  // }, []);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = () => {
    updateDepartment(departmentId, inputs, dispatch);
  };
  console.log(departmentId)

  // const department = departments.find(
  //   (departments) => departments._id === departmentId
  // );
  // console.log(department);

  return (
    <Container>
      <FormWrapper>
        <Title>
          <Form>
            <UpdateItem>
              <Heading>Change Department Name</Heading>
              <Input placeholder="Name" name="name" onChange={handleChange} />
              <EditButton onClick={handleClick}>EDIT</EditButton>
            </UpdateItem>
          </Form>
        </Title>
      </FormWrapper>
    </Container>
  );
};

export default EditDepartment;
