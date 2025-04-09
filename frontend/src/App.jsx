import React, { useState, useEffect } from 'react';
import { Package } from './components/Package';

function App() {
  const [allItems, setAllItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch('http://localhost:5000/items');
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        // console.log('Fetched items:', data);
        setAllItems(data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };
    fetchItems();
  }, []);
  const handleCheck = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };
  const handleSubmit = async () => {
    try {
      const res = await fetch('http://localhost:5000/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: selectedItems }),
      });
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      console.log(data)
      setPackages(data);
    }catch(error) {
      console.log('Error creating package:', error);
    }
  }
  return (
    <>
      <div>
        <h1>
          Items list
        </h1>
        <ul>

          {allItems&&allItems.map((item) => (
            <li key={item.name}>
              <label>
              {item.name} - ${item.price} - {item.weight}g
              </label>
              <input
                type="checkbox"
                onChange={() => handleCheck(item)}
              />{' '}
            </li>
          ))}
        </ul>
        <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Place Order
      </button>
      <Package packages={packages}/>
      </div>
    </>
  )
}

export default App
