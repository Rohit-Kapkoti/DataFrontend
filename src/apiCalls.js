import axios from "axios";
import {
  deleteDepartmentFailure,
  deleteDepartmentStart,
  deleteDepartmentSuccess,
  getDepartmentFailure,
  getDepartmentStart,
  getDepartmentSuccess,
  updateDepartmentFailure,
  updateDepartmentStart,
  updateDepartmentSuccess,
} from "./departmentRedux";
import {
  addHodStart,
  addHodSuccess,
  deleteHodFailure,
  deleteHodStart,
  deleteHodSuccess,
  getHodStart,
  getHodSuccess,
  updateHodStart,
  updateHodSuccess,
} from "./hodRedux";
import {
  addStudentFailure,
  addStudentStart,
  addStudentSuccess,
  deleteStudentFailure,
  deleteStudentStart,
  deleteStudentSuccess,
  getStudentFailure,
  getStudentStart,
  getStudentSuccess,
  updateStudentFailure,
  updateStudentStart,
  updateStudentSuccess,
} from "./studentRedux";
import {
  addTeacherFailure,
  addTeacherStart,
  addTeacherSuccess,
  deleteTeacherFailure,
  deleteTeacherStart,
  deleteTeacherSuccess,
  getTeacherFailure,
  getTeacherStart,
  getTeacherSuccess,
  updateTeacherFailure,
  updateTeacherStart,
  updateTeacherSuccess,
} from "./teacherRedux";

const publicRequest = axios.create({
  baseURL: "https://collage-data-management-lglq.onrender.com",
});

// ADD STUDENT
export const addStudent = async (newstudentname, dispatch) => {
  dispatch(addStudentStart());
  // console.log(newstudntname)
  try {
    const res = await publicRequest.post("/student", newstudentname);
    dispatch(addStudentSuccess(res.data));
  } catch (error) {
    dispatch(addStudentFailure());
  }
};

// GET STUDENTS
export const getStudents = async (dispatch) => {
  dispatch(getStudentStart());
  try {
    const res = await publicRequest.get("/student");
    dispatch(getStudentSuccess(res.data));
  } catch (error) {
    dispatch(getStudentFailure());
  }
};

// UPDATE STUDENT
export const updateStudent = async (id, inputs, dispatch) => {
  dispatch(updateStudentStart());
  try {
    const res = await publicRequest.put(`/student/${id}`, inputs);
    dispatch(updateStudentSuccess({ id, inputs }));
  } catch (error) {
    dispatch(updateStudentFailure());
  }
};

// DELETE STUDENT
export const deleteStudent = async (id, dispatch) => {
  dispatch(deleteStudentStart());
  try {
    const res = await publicRequest.delete(`/student/${id}`);
    dispatch(deleteStudentSuccess(id));
  } catch (error) {
    dispatch(deleteStudentFailure());
  }
};

// ADD TEACHER
export const addTeacher = async (newTeacher, dispatch) => {
  dispatch(addTeacherStart());
  try {
    const res = await publicRequest.post("/teacher", newTeacher);
    dispatch(addTeacherSuccess());
  } catch (error) {
    dispatch(addTeacherFailure());
  }
};

// ADD HOD
export const addHod = async (newHod, dispatch) => {
  dispatch(addHodStart());
  try {
    const res = await publicRequest.post("/hod", newHod);
    dispatch(addHodSuccess(res.data));
    console.log(res.data);
  } catch (error) {
    dispatch(addStudentFailure());
  }
};

// GET HODS
export const getHods = async (dispatch) => {
  dispatch(getHodStart());
  try {
    const res = await publicRequest.get("/hod");
    dispatch(getHodSuccess(res.data));
  } catch (error) {
    dispatch(getHodSuccess());
  }
};

// UPDATE HOD
export const updateHod = async (id, inputs, dispatch) => {
  dispatch(updateHodStart());
  try {
    const res = await publicRequest.put(`/hod/${id}`, inputs);
    dispatch(updateHodSuccess({ id, inputs }));
  } catch (error) {
    dispatch(updateDepartmentFailure());
  }
};

// DELETE HODS
export const deleteHod = async (id, dispatch) => {
  dispatch(deleteHodStart());
  try {
    const res = await publicRequest.delete(`/hod/${id}`);
    dispatch(deleteHodSuccess(id));
  } catch (error) {
    dispatch(deleteHodFailure());
  }
};

// GET DEPARTMENT
export const getDepartment = async (dispatch) => {
  dispatch(getDepartmentStart());
  try {
    const res = await publicRequest.get("/department");
    dispatch(getDepartmentSuccess(res.data));
    console.log(res.data);
  } catch (error) {
    dispatch(getDepartmentFailure());
  }
};

// DELETE DEPARTMENT
export const deleteDepartment = async (id, dispatch) => {
  dispatch(deleteDepartmentStart());
  try {
    const res = await publicRequest.delete(`/department/${id}`);
    dispatch(deleteDepartmentSuccess(id));
  } catch (error) {
    dispatch(deleteDepartmentFailure());
  }
};

// UPDATE DEPARTMENTS
export const updateDepartment = async (id, inputs, dispatch) => {
  dispatch(updateDepartmentStart());
  try {
    const res = await publicRequest.put(`/department/${id}`, inputs);
    dispatch(updateDepartmentSuccess({ id, inputs }));
  } catch (error) {
    dispatch(updateDepartmentFailure());
  }
};
// GET DEPARTMENT
export const getTeacher = async (dispatch) => {
  dispatch(getTeacherStart());
  try {
    const res = await publicRequest.get("/teacher");
    dispatch(getTeacherSuccess(res.data));
    console.log(res.data);
  } catch (error) {
    dispatch(getTeacherFailure());
  }
};

// DELETE DEPARTMENT
export const deleteTeacher = async (id, dispatch) => {
  dispatch(deleteTeacherStart());
  try {
    const res = await publicRequest.delete(`/teacher/${id}`);
    dispatch(deleteTeacherSuccess(id));
  } catch (error) {
    dispatch(deleteTeacherFailure());
  }
};

// UPDATE DEPARTMENTS
export const updateTeacher = async (id, inputs, dispatch) => {
  dispatch(updateTeacherStart());
  try {
    const res = await publicRequest.put(`/teacher/${id}`, inputs);
    dispatch(updateTeacherSuccess({ id, inputs }));
  } catch (error) {
    dispatch(updateTeacherFailure());
  }
};
