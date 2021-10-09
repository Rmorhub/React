import React from 'react';
import { useParams } from 'react-router-dom';

function Contacts() {
  const { productId } = useParams();
  return <div className="product">{productId}</div>;
}

export default Contacts;
