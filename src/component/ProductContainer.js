import React, { useState } from "react";
import Card from "./Card"; // Asegúrate de importar tu componente Card
import "./ProductContainer.css";

function ProductContainer() {
  const [products, setProducts] = useState([
    /* Tu lista de productos */
  ]);
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [tags, setTags] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesName = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesPrice =
      product.price >= (minPrice || 0) &&
      product.price <= (maxPrice || Infinity);
    const matchesTags = tags
      .split(",")
      .every((tag) => product.tags.includes(tag.trim()));

    return matchesName && matchesPrice && matchesTags;
  });

  return (
    <div className="product-container">
      <div className="search-filters">
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="number"
          placeholder="Precio mínimo"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Precio máximo"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Buscar por tags (separados por comas)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </div>
      <div className="cards-wrapper">
        {filteredProducts.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>

      <div className="cards-wrapper">
        {filteredProducts.map((product, index) => (
          <Card key={index} product={product} />
        ))}
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default ProductContainer;
