import { useState, useEffect } from "react";
import axios from "axios";
import Featured from "../../components/Featured/Featured";
import List from "../../components/List/List";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.scss";

const Home = ({ type, user }) => {
  const [lists, setLists] = useState([]);
  /* eslint-disable */
  const [genre, setGenre] = useState(null);
  /* eslint-enable */
  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios.get(
          `https://warm-taiga-58602.herokuapp.com/api/lists${
            type ? "?type=" + type : ""
          }${genre ? "&genre=" + genre : ""}`,
          {
            headers: {
              token:
                "Bearer " +
                JSON.parse(localStorage.getItem("user")).accessToken,
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomList();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar user={user} />
      <Featured type={type} />
      {lists.map((list, id) => (
        <List key={id} list={list} />
      ))}
    </div>
  );
};

export default Home;
