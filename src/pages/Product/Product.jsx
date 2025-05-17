import React, { useContext } from "react";
import "./Product.css";

import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";
import Bredcrumd from "../../components/Breadcrumd/Bredcrumd";
import { ShopContext } from "../../Context/ShopContext";
import { useParams } from "react-router-dom";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div className="product">
      <Bredcrumd product={product} />
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
