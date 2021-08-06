import axios from "axios";
import {
  getMoviesFail,
  deleteMovieFail,
  getMoviesStart,
  deleteMovieStart,
  getMoviesSuccess,
  deleteMovieSuccess,
  createMovieStart,
  createMovieSuccess,
  createMovieFail,
  updateMovieStart,
  updateMovieSuccess,
  updateMovieFail,
} from "./MovieActions";

export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());
  try {
    const res = await axios.get(
      "https://warm-taiga-58602.herokuapp.com/api/movies",
      {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      }
    );
    dispatch(getMoviesSuccess(res.data));
  } catch (err) {
    dispatch(getMoviesFail(err));
  }
};

//CREATE
export const createMovie = async (movie, dispatch) => {
  dispatch(createMovieStart());
  try {
    const res = await axios.post(
      "https://warm-taiga-58602.herokuapp.com/api/movies/",
      movie,
      {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      }
    );
    dispatch(createMovieSuccess(res.data));
  } catch (err) {
    dispatch(createMovieFail(err));
  }
};

//DELETE
export const deleteMovie = async (id, dispatch) => {
  dispatch(deleteMovieStart());
  try {
    await axios.delete(
      "https://warm-taiga-58602.herokuapp.com/api/movies/" + id,
      {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      }
    );
    dispatch(deleteMovieSuccess(id));
  } catch (err) {
    dispatch(deleteMovieFail(err));
  }
};

//PUT or UPDATE
export const updateMovie = async (movie, dispatch) => {
  dispatch(updateMovieStart());
  try {
    const res = await axios.put(
      "https://warm-taiga-58602.herokuapp.com/api/movies/" + movie._id,
      movie,
      {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      }
    );
    dispatch(updateMovieSuccess(res.data));
  } catch (err) {
    dispatch(updateMovieFail(err));
  }
};
