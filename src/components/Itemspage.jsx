import React, { useEffect, useState } from 'react';
import Items from './Items';

const Itemspage = ({ category }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const baseUrl = 'https://fakestoreapi.com/products';
      const url = category === 'all' ? baseUrl : `${baseUrl}/category/${encodeURIComponent(category)}`;

      try {
        const res = await fetch(url);
        const json = await res.json();
        setItems(json);
      } catch (err) {
        console.error('Fetch error:', err);
      }
    };

    fetchItems();
  }, [category]);

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {items.map((item, index) => (
        <Items
          key={index}
          title={item.title}
          description={item.description}
          src={item.image}
          rating={item.rating}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default Itemspage;
