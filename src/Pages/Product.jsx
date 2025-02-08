import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    console.log("Product ID from URL:", productId);
    console.log("All Products:", all_product);

    if (all_product.length > 0) {
      const foundProduct = all_product.find((e) => Number(e.id) === Number(productId));
      setProduct(foundProduct);
    }
  }, [productId, all_product]); // Re-run when URL changes

  if (!all_product || all_product.length === 0) {
    return <h2>Loading Products...</h2>;
  }

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox/>
      <RelatedProduct/>
    </div>
  );
};

export default Product;
