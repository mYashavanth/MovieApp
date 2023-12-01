import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../Conponents/Loading";
import styles from "./Details.module.css";
import { AuthContext } from "../AuthContext/AuthContextProvider";


export default function Details() {
  const [loading, setLoadin] = useState(false);
  const [datas, setDatas] = useState({});
  const params = useParams();
  const apiKey = "bdb533ec";
  const {isAuth} = useContext(AuthContext)
  const NavigateTo = useNavigate()
  console.log(params);

  useEffect(() => {
    fetchData(params.id);
  }, [params.id]);

  const fetchData = async (imdbID) => {
    setLoadin(true);
    try {
      let res = await axios.get(
        `https://omdbapi.com/?apikey=${apiKey}&i=${imdbID}`
      );
      setDatas(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadin(false);
    }
  };
  useEffect(() => {
    if (!isAuth) {
      NavigateTo("/login");
    }
  }, [isAuth]);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.details}>
          <h1>{datas.Title}</h1>
          <img src={datas.Poster} alt="" />
          <p>{datas.Plot}</p>
          <p>Year: {datas.Year}</p>
          <p>Genre: {datas.Genre}</p>
          <p>Rating: {datas.imdbRating}</p>
          <p>Runtime: {datas.Runtime}</p>
          <p>Director: {datas.Director}</p>
          <p>Actors: {datas.Actors}</p>
          <p>Language: {datas.Language}</p>
          <p>Country: {datas.Country}</p>
          <p>Awards: {datas.Awards}</p>
          <p>BoxOffice: {datas.BoxOffice}</p>
          <p>Metascore: {datas.Metascore}</p>
          <p>Released: {datas.Released}</p>
          <p>Writer: {datas.Writer}</p>
          <p>Type: {datas.Type}</p>
          <p>Website: {datas.Website}</p>
          <p>Response: {datas.Response}</p>
          <p>Rated: {datas.Rated}</p>
          <p>Production: {datas.Production}</p>
        </div>
      )}
    </div>
  );
}
