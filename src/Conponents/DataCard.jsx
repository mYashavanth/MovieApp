import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styles from "./DataCard.module.css";

export default function DataCard({ data }) {
  const NavigateTo = useNavigate();

  const handleClick = () => {
    NavigateTo("/movie/" + data.imdbID);
  };
  return (
    <div className={styles.card} onClick={handleClick}>
      <h3>{data.Title}</h3>
      <img src={data.Poster} alt="" />
    </div>
  );
}
