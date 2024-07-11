import React, { useState } from 'react';
import Select from 'react-select';
import Card from './Card'; // Asegúrate de importar tu componente Card
import './ProductContainer.css';

function ProductContainer() {
  const [products, setProducts] = useState([ /* Tu lista de productos */ ]);
  const [search, setSearch] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const tagOptions = [
    { value: 'Tag1', label: 'Tag1' },
    { value: 'Tag2', label: 'Tag2' },
    { value: 'Tag3', label: 'Tag3' },
    // Agrega más tags aquí
  ];

  const handleTagChange = selectedOptions => {
    setSelectedTags(selectedOptions || []);
  };

  const filteredProducts = products.filter(product => {
    const matchesName = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesPrice = product.price >= (minPrice || 0) && product.price <= (maxPrice || Infinity);
    const matchesTags = selectedTags.every(tag => product.tags.includes(tag.value));

    return matchesName && matchesPrice && matchesTags;
  });

  return (
    <>
    
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
        <Select
          isMulti
          options={tagOptions}
          value={selectedTags}
          onChange={handleTagChange}
          placeholder="Buscar por tags"
          className="tag-select"
          classNamePrefix="select"
        />
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
    </>
  );
}

export default ProductContainer;
