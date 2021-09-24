import { useContext } from "react";
import {
  ProductStateContext,
  ProductDispatchContext,
  FetchingContext,
} from "../App";
import Sorter from "./Sorter";
import "./Selector.css";

const Selector = () => {
  const isFetching = useContext(FetchingContext);
  const productState = useContext(ProductStateContext);
  const productDispatch = useContext(ProductDispatchContext);

  const handleCategoryButton = (event) => {
    productDispatch({ type: "changeCategory", payload: event.target.name });
  };

  return (
      <div>
          {!isFetching && <h2 style={{textTransform: "uppercase"}}>Kategori : {productState.selectedCategory}</h2>}
        {isFetching ? (
          <b>Loading...</b>
          ) : (
          <ul>
            {productState.categories.map((category, index) => (
              <button
              key={index}
              name={category}
              onClick={handleCategoryButton}
              >{category}</button>
            ))}
          </ul>
        )}
        <Sorter />
      </div>
  );
};

export default Selector;
