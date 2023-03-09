import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";

import axios from "axios";
import {
  deleteDepartment,
  deleteHod,
  deleteStudent,
  deleteTeacher,
  getDepartment,
  getHods,
  getStudents,
  getTeacher,
} from "../apiCalls";
import { useDispatch, useSelector } from "react-redux";

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
const DeleteButton = styled.button``;

const Delete = () => {
  const dispatch = useDispatch();
  
  const students1 = useSelector((state) => state.student.students);
  const hods1 = useSelector((state) => state.hod.hods);
  const departments1 = useSelector((state) => state.department.departments);
  const teachers1 = useSelector((state) => state.teacher.teachers);
  console.log(departments1);
  console.log(teachers1)

 
  useEffect(() => {
    getStudents(dispatch);
  }, [dispatch]);

  useEffect(() => {
    getHods(dispatch);
  }, [dispatch]);

  useEffect(() => {
    getTeacher(dispatch)
  }, [dispatch])


  // GET DEPARTMENTS
  useEffect(() => {
    getDepartment(dispatch);
  }, [dispatch]);




  const deleteStudents = (id) => {
    deleteStudent(id, dispatch);
  };
  
  const deleteTeachers = (id) => {
    deleteTeacher(id, dispatch);
  };
  const deleteHods = (id) => {
    deleteHod(id, dispatch);
  };

  const deleteDepartments = (id) => {
    deleteDepartment(id, dispatch);
  };

  // TABLE COLUMNS

  const columns = [
    { field: "_id", headerName: "ID", width: 240 },
    { field: "name", headerName: "Name", width: 240 },
    { field: "age", headerName: "Age", width: 240 },
  ];
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
            <DeleteButton onClick={() => deleteDepartments(params.row._id)}>
              delete
            </DeleteButton>
          </>
        );
      },
    },
  ];
  const hodsColumn = [
    { field: "_id", headerName: "ID", width: 240 },
    { field: "name", headerName: "Name", width: 240 },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <DeleteButton onClick={() => deleteHods(params.row._id)}>
              delete
            </DeleteButton>
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
            <DeleteButton onClick={() => deleteStudents(params.row._id)}>
              delete
            </DeleteButton>
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
            <DeleteButton onClick={() => deleteTeachers(params.row._id)}>
              delete
            </DeleteButton>
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
          rows={departments1}
          columns={departmentColumn}
          getRowId={(row) => row._id}
          pageSize={8}
          disableRowSelectionOnClick
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </Table>
      <Table>
        <Heading>HODs</Heading>
        <DataGrid
          rows={hods1}
          columns={hodsColumn}
          getRowId={(row) => row._id}
          pageSize={8}
          disableRowSelectionOnClick
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </Table>
      <Table>
        <Heading>Student</Heading>
        <DataGrid
          rows={students1}
          columns={studentColumn}
          getRowId={(row) => row._id}
          pageSize={8}
          disableRowSelectionOnClick
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </Table>
      <Table>
        <Heading>Teacher</Heading>
        <DataGrid
          rows={teachers1}
          columns={teacherColumn}
          getRowId={(row) => row._id}
          pageSize={8}
          disableRowSelectionOnClick
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </Table>
    </Container>
  );
};

export default Delete;
