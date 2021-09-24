import { useState } from "react";
import Modal from "react-modal";
import './ProductCard.css';


const ProductCard = (props) => {
  const [showDesc, setShowDesc] = useState(false);

  const handleBukaDeskripsi = () => setShowDesc(true);
  const handleTutupDeskripsi = () => setShowDesc(false);

  return (
    <div style={{ border: "2px solid black" }}>
      <img
        src={props.product.image}
        alt={props.product.title}
        style={{
          height: 240,
        }}
      />
      <h3>{props.product.title}</h3>
      <button onClick={handleBukaDeskripsi}>Lihat deskripsi paket</button>
      <Modal isOpen={showDesc}>
        <div>
          <b>Deskripsi Paket :</b>
          <p>{props.product.description}</p>
          <button onClick={handleTutupDeskripsi}>Tutup</button>
        </div>
      </Modal>
      <p>Harga : RP {props.product.price} </p>
    </div>
  );
};

export default ProductCard;
