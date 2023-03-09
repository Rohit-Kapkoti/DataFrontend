import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";

import axios from "axios";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Table = styled.div`
  height: 600px;
  margin-top: 50px;
  text-align: center;
  padding: 10px;
`;
const Heading = styled.h1``;
const Read = () => {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [hods, setHods] = useState([])

  const publicRequest = axios.create({
    baseURL: "https://collage-data-management-lglq.onrender.com",
  });

  useEffect(() => {
    const getStudent = async () => {
      try {
        const res = await publicRequest.get("/student");
        setStudents(res.data);
        console.log(res.data);
      } catch (error) {}
    };
    getStudent();
  }, []);

  useEffect(() => {
    const getTeacher = async () => {
      try {
        const res = await publicRequest.get("/teacher");
        setTeachers(res.data);
        console.log(res.data);
      } catch (error) {}
    };
    getTeacher();
  }, []);


// GET DEPARTMENTS

  useEffect(() => {
    const getDepartment = async () => {
      try {
        const res = await publicRequest.get("/department");
        setDepartments(res.data);
        console.log(res.data);
      } catch (error) {}
    };
    getDepartment();
  }, []);

// GET HODS

  useEffect(() => {
    const getHod = async () => {
      try {
        const res = await publicRequest.get("/hod");
        setHods(res.data);
        console.log(res.data);
      } catch (error) {}
    };
    getHod();
  }, []);

  // TABLE COLUMNS

  const columns = [
    { field: "_id", headerName: "ID", width: 240 },
    { field: "name", headerName: "Name", width: 240 },
    { field: "age", headerName: "Age", width: 240 },
  ];
  const departmentColumn = [
    { field: "_id", headerName: "ID", width: 240 },
    { field: "name", headerName: "Name", width: 240 },
  ];

  return (
    <Container>
      <Table>
        <Heading>Departments</Heading>
        <DataGrid
          rows={departments}
          columns={departmentColumn}
          getRowId={(row) => row._id}
          pageSize={8}
          disableSelectionOnClick
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </Table>
      <Table>
        <Heading>HODs</Heading>
        <DataGrid
          rows={hods}
          columns={departmentColumn}
          getRowId={(row) => row._id}
          pageSize={8}
          disableSelectionOnClick
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </Table>
      <Table>
        <Heading>Student</Heading>
        <DataGrid
          rows={students}
          columns={columns}
          getRowId={(row) => row._id}
          pageSize={8}
          disableSelectionOnClick
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </Table>
      <Table>
        <Heading>Teacher</Heading>
        <DataGrid
          rows={teachers}
          columns={columns}
          getRowId={(row) => row._id}
          pageSize={8}
          disableSelectionOnClick
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </Table>
    </Container>
  );
};

export default Read;
