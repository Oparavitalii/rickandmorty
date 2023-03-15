import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import ItemDetails from "../ItemDetails/ItemDetails";

export default function DetailsCharacter() {
  const { characters, loading, error } = useSelector((state) => state.store);
  const { id } = useParams();

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Error />;
  }
  
  return (
    <div>
      <div>{characters.length && <ItemDetails />}</div>
    </div>
  );
}
