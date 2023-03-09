import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { getStudents, getTeacher } from "../apiCalls";

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
const EditButton = styled.button`
  padding: 5px;
`;

const Read = () => {
  // const dispatch = useDispatch();
  // const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [departments, setDepartments] = useState([]);

  const [hods, setHods] = useState([]);
  const dispatch = useDispatch();
  // const teachers = useSelector((state) => state.teacher.teachers);
  const students = useSelector((state) => state.student.students);

  const publicRequest = axios.create({
    baseURL: "https://collage-data-management-lglq.onrender.com",
  });

  useEffect(() => {
    getStudents(dispatch);
  }, [dispatch]);

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
  const departmentColumn = [
    { field: "_id", headerName: "ID", width: 240 },
    { field: "name", headerName: "Name", width: 240 },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/update/" + params.row._id}>
              <EditButton>Edit</EditButton>
            </Link>
          </>
        );
      },
    },
  ];
  const studentColumn = [
    { field: "_id", headerName: "ID", width: 240 },
    { field: "name", headerName: "Name", width: 240 },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/update/student/" + params.row._id}>
              <EditButton>Edit</EditButton>
            </Link>
          </>
        );
      },
    },
  ];
  const hodColumn = [
    { field: "_id", headerName: "ID", width: 240 },
    { field: "name", headerName: "Name", width: 240 },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/update/hod/" + params.row._id}>
              <EditButton>Edit</EditButton>
            </Link>
          </>
        );
      },
    },
  ];
  const teacherColumn = [
    { field: "_id", headerName: "ID", width: 240 },
    { field: "name", headerName: "Name", width: 240 },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/update/teacher/" + params.row._id}>
              <EditButton>Edit</EditButton>
            </Link>
          </>
        );
      },
    },
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

      {/* hods table */}

      <Table>
        <Heading>Head of Departments</Heading>
        <DataGrid
          rows={hods}
          columns={hodColumn}
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
          columns={studentColumn}
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
          columns={teacherColumn}
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
