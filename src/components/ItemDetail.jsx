import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ( {detalle} ) => {
  return (
    
      <div className=" detail-container row g-3">
        <div className="col-md-4">
          <img
            src={detalle.imagen}
            className="img-fluid rounded-start"
            alt={"Foto " + detalle.titulo}
          />
        </div>
        <div className="mx-5 col-md-6 ">
          <div className="card-body">
            <h5 className="card-title">{detalle.titulo}</h5>
            <h2>{detalle.precio * 200}AR$</h2>
            <ItemCount stock={detalle.stock} />
            <p className="card-text">{detalle.descripcion}</p>
            <p className="card-text">
              <small className="text-muted">{detalle.category}</small>
            </p>
          </div>
        </div>
      </div>
  );
};

export default ItemDetail;
