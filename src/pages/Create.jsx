import axios from "axios";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHod, addStudent, addTeacher } from "../apiCalls";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FormWrapper = styled.div`
  height: 600px;
  width: 600px;
  background-color: burlywood;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const FormInput = styled.input`
  padding: 5px;
  margin: 10px;
  width: 80%;
  border: none;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;

const FormSelect = styled.select`
  margin-top: 10px;
  width: 80%;
  padding: 5px;
  border: none;
  &:focus {
    outline: none;
  }
`;
const FormOption = styled.option``;
const AddstudentButton = styled.button`
  width: 100px;
  border: none;
  color: blue;
  background-color: white;
  height: 20px;
`;
const Submit = styled.button`
  width: 100px;
  border: none;
  color: blue;
  background-color: white;
  height: 20px;
`;

const Create = () => {
  const [department, setDepartment] = useState();
  const [newstudent, setnewStudent] = useState();
  const [newTeacher, setnewTeacher] = useState();
  const [newDepartment, setnewDepartment] = useState({});
  const [newHod, setnewHod] = useState({});
  const dispatch = useDispatch({});

  // const hods = useSelector((state) => state.hod.hods);
  // if (hods) {
  //   alert(hods);
  // }

  //  Getting all Departments
  useEffect(() => {
    axios.get("https://collage-data-management-lglq.onrender.com/department/create").then((response) => {
      setDepartment(response.data);
    });
  }, []);

  const handleChange = (e) => {
    setnewStudent((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
    setnewTeacher((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
    setnewHod((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  // ADD STUDENT DETAILS
  const addStudentdetails = (e) => {
    addStudent(newstudent, dispatch);
  };

  // ADD TEACHER DETAILS
  const addTeacherdetails = (e) => {
    addTeacher(newTeacher, dispatch);
  };

  // ADD HOD DETAILS
  const addHoddetails = (e) => {
    addHod(newHod, dispatch);
  };

  const addnewDepartment = async (e) => {
    try {
      const res = await axios.post("https://collage-data-management-lglq.onrender.com/department/new", {
        name: newDepartment,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const submitAll = (e) => {

    addStudentdetails();
    addTeacherdetails();
    addHoddetails();
    
  };

  return (
    <Container>
      <FormWrapper>
        <Form>
          <FormInput
            onChange={(e) => setnewDepartment(e.target.value)}
            placeholder="department Name"
            name="newDepartment"
          />
          <AddstudentButton onClick={addnewDepartment}>add</AddstudentButton>
        </Form>

        <Form>
          <FormSelect name="department" onChange={handleChange}>
            {department?.map((item) => (
              <FormOption value={item.name} key={item._id}>
                {item.name}
              </FormOption>
            ))}
          </FormSelect>

          <FormInput
            name="name"
            placeholder="Student Name"
            onChange={handleChange}
            
            // value={newstudentname}
          />
          <FormInput
            name="age"
            placeholder="Student Age"
            onChange={handleChange}
            // value={newstudentname}
          />
          <FormInput
            name="gender"
            placeholder="Student Gender"
            onChange={handleChange}
            // value={newstudentname}
          />
          {/* <AddstudentButton onClick={addStudentdetails}>add</AddstudentButton> */}
          <FormInput
            name="teacherName"
            placeholder="Teacher Name"
            onChange={handleChange}
          />
          <FormInput
            name="teacherAge"
            placeholder="Teacher Age"
            onChange={handleChange}
          />
          <FormInput
            name="teacherGender"
            placeholder="Teacher Gender"
            onChange={handleChange}
          />
          {/* <AddstudentButton onClick={addTeacherdetails}>add</AddstudentButton> */}
          <FormInput
            name="hodName"
            placeholder="Hod Name"
            onChange={handleChange}
          />
          <FormInput
            name="hodAge"
            placeholder="Hod Age"
            onChange={handleChange}
          />
          <FormInput
            name="hodGender"
            placeholder="Hod Gender"
            onChange={handleChange}
          />
          {/* <AddstudentButton onClick={addHoddetails}>add</AddstudentButton> */}
          <Submit type="Submit" onClick={submitAll}>
            Submit
          </Submit>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default Create;
