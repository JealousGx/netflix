import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./Featured.scss";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="animation">Animation</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        width="100%"
        src="https://images.pexels.com/photos/6177572/pexels-photo-6177572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="profile picture"
      />
      <div className="info">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fofficialpsds.com%2Fimageview%2Fr0%2Fx3%2Fr0x3mw_large.png%3F1521316558&f=1&nofb=1"
          alt=""
        />
        <span className="desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, nisi
          rem. Numquam, eum. Molestias veritatis debitis quas modi doloribus in
          odio, ratione dicta hic dolore sunt quia perspiciatis, aspernatur
          iste!
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
