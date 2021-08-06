import axios from "axios";
import {
  getUsersStart,
  getUsersSuccess,
  getUsersFail,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFail,
  createUserStart,
  createUserSuccess,
  createUserFail,
  updateUserStart,
  updateUserSuccess,
  updateUserFail,
} from "./UsersActions";

export const getUsers = async (dispatch) => {
  dispatch(getUsersStart());
  try {
    const res = await axios.get(
      "https://warm-taiga-58602.herokuapp.com/api/users",
      {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      }
    );
    dispatch(getUsersSuccess(res.data));
  } catch (err) {
    dispatch(getUsersFail(err));
  }
};

//CREATE
export const createUser = async (user, dispatch) => {
  dispatch(createUserStart());
  try {
    const res = await axios.post(
      "https://warm-taiga-58602.herokuapp.com/api/users",
      user,
      {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      }
    );
    dispatch(createUserSuccess(res.data));
  } catch (err) {
    dispatch(createUserFail(err));
  }
};

//DELETE
export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    await axios.delete(
      "https://warm-taiga-58602.herokuapp.com/api/users/" + id,
      {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      }
    );
    dispatch(deleteUserSuccess(id));
  } catch (err) {
    dispatch(deleteUserFail(err));
  }
};

//PUT or UPDATE
export const updateUser = async (user, dispatch) => {
  dispatch(updateUserStart());
  try {
    const res = await axios.put(
      "https://warm-taiga-58602.herokuapp.com/api/users/" + user._id,
      user,
      {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      }
    );
    dispatch(updateUserSuccess(res.data));
  } catch (err) {
    dispatch(updateUserFail(err));
  }
};
