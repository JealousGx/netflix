import { useState, useEffect } from "react";
import axios from "axios";
import Featured from "../../components/Featured/Featured";
import List from "../../components/List/List";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.scss";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMDZjYmE5Nzg1ZTY5NDc3NDJlOTMyZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyNzk4NTE0MywiZXhwIjoxNjI4NDE3MTQzfQ.ATh_4WVwxK5_-d1EeupmPP95nIwkddTV8HCGlSDI_a8",
            },
          }
        );
        console.log(res);
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomList();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list, id) => (
        <List key={id} list={list} />
      ))}
    </div>
  );
};

export default Home;
