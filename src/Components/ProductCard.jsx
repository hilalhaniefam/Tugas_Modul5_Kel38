import { useState } from "react";
import Modal from "react-modal";
import './ProductCard.css';


const ProductCard = (props) => {
  const [showDesc, setShowDesc] = useState(false);

  const handleBukaDeskripsi = () => setShowDesc(true);
  const handleTutupDeskripsi = () => setShowDesc(false);

  return (

    <div style={{ backgroundColor: "white", marginLeft: "30%", marginRight: "30%", marginBottom: "20px", marginTop: "20px", borderRadius: 20 }}>
      <img
        src={props.product.image}
        alt={props.product.title}
        style={{
          height: 240,
          margin: 20
        }}
      />
      <h3 style={{ margin: "0px"}}>{props.product.title}</h3>
      <h3 style={{ margin: "0px"}}>Harga : Rp {props.product.price} </h3>
      <button onClick={handleBukaDeskripsi}>Lihat deskripsi paket</button>
      <Modal isOpen={showDesc}>
        <div  style={{ margin: "20px"}}>
          <b>Deskripsi Paket :</b>
          <p>{props.product.description}</p>
          <button onClick={handleTutupDeskripsi}>Tutup</button>
        </div>
      </Modal>
    </div>
  );
};

export default ProductCard;
