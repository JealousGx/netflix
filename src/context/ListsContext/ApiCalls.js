import axios from "axios";
import {
  getListsStart,
  getListsSuccess,
  getListsFail,
  deleteListStart,
  deleteListSuccess,
  deleteListFail,
  createListStart,
  createListSuccess,
  createListFail,
  updateListStart,
  updateListSuccess,
  updateListFail,
} from "./ListsActions";

export const getLists = async (dispatch) => {
  dispatch(getListsStart());
  try {
    const res = await axios.get(
      "https://warm-taiga-58602.herokuapp.com/api/lists",
      {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      }
    );
    dispatch(getListsSuccess(res.data));
  } catch (err) {
    dispatch(getListsFail(err));
  }
};

//CREATE
export const createList = async (list, dispatch) => {
  dispatch(createListStart());
  try {
    const res = await axios.post(
      "https://warm-taiga-58602.herokuapp.com/api/lists",
      list,
      {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      }
    );
    dispatch(createListSuccess(res.data));
  } catch (err) {
    dispatch(createListFail(err));
  }
};

//DELETE
export const deleteLists = async (id, dispatch) => {
  dispatch(deleteListStart());
  try {
    await axios.delete(
      "https://warm-taiga-58602.herokuapp.com/api/lists/" + id,
      {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      }
    );
    dispatch(deleteListSuccess(id));
  } catch (err) {
    dispatch(deleteListFail(err));
  }
};

//PUT or UPDATE
export const updateList = async (list, dispatch) => {
  dispatch(updateListStart());
  try {
    const res = await axios.put(
      "https://warm-taiga-58602.herokuapp.com/api/list/" + list._id,
      {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      }
    );
    dispatch(updateListSuccess(res.data));
  } catch (err) {
    dispatch(updateListFail(err));
  }
};
