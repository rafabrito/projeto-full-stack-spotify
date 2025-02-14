import React from "react";
import SingleItem from "./SingleItem";
import { Link, useLocation } from "react-router-dom";

const ItenList = ({ title, item, itemsArray, path, idPath }) => {
  const { pathname } = useLocation(); // recupera em qual rota está

  const isHome = pathname === "/"; // irá retornar verdadeiro de estiver na home e false caso contrário
  const finalItems = isHome ? item : Infinity; // finalItems será igual a quantidade item ou infinito

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>

        {isHome ? (
          <Link to={path} className="item-list__link">
            Mostrar tudo
          </Link>
        ) : (
          <></>
        )}
      </div>

      <div className="item-list__container">
        {itemsArray
          .filter((currentValue, index) => index < finalItems)
          .map((currObj, index) => (
            <SingleItem
              idPath={idPath}
              key={`${title}-${index}`}
              {...currObj}
            /> // cada elemento tem que ter uma key de valor único
          ))}
      </div>
    </div>
  );
};

export default ItenList;

// map: mapeia os elementos e retorna a mesma quantidade e elementos dada
// filter: retorna apenas uma quantidade de elementos a depender da condição estipulada
