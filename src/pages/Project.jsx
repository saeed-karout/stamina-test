// Import necessary React modules
import { useState } from 'react';

// Mock product data
const productsData = [
  { id: 1, name: 'Product 1', size: 'Small', image: 'https://via.placeholder.com/150', price: '$10' },
  { id: 2, name: 'Product 2', size: 'Medium', image: 'https://via.placeholder.com/150', price: '$20' },
  { id: 3, name: 'Product 3', size: 'Large', image: 'https://via.placeholder.com/150', price: '$30' },
  { id: 4, name: 'Product 4', size: 'Small', image: 'https://via.placeholder.com/150', price: '$15' },
  { id: 5, name: 'Product 5', size: 'Medium', image: 'https://via.placeholder.com/150', price: '$25' },
  { id: 6, name: 'Product 6', size: 'Large', image: 'https://via.placeholder.com/150', price: '$35' },
];

// ProductCard component for displaying individual product
const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg dark:bg-gray-800  transition-all">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">{product.name}</h2>
        <p className="text-gray-500 dark:text-gray-300">{product.size}</p>
        <p className="text-gray-900 dark:text-gray-200 font-bold">{product.price}</p>
      </div>
    </div>
  );
};

// ProductFilter component for searching and filtering products
const ProductFilter = ({ search, setSearch, size, setSize }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center mb-8 gap-4">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by name..."
        className="p-3 rounded-lg w-full lg:w-1/3 dark:bg-gray-dark  border dark:border-gray-700 border-gray dark:text-white focus:outline-none focus:ring-2 focus:ring-orange"
      />
      <select
        value={size}
        onChange={(e) => setSize(e.target.value)}
        className="p-3 rounded-lg dark:bg-gray-dark  border dark:border-gray border-gray-300 dark:text-white w-full lg:w-1/4 focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        <option value="">All Sizes</option>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
    </div>
  );
};

// ProductList component for displaying products
const ProductList = () => {
  const [search, setSearch] = useState('');
  const [size, setSize] = useState('');

  // Filter products by name and size
  const filteredProducts = productsData.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesSize = size === '' || product.size === size;
    return matchesSearch && matchesSize;
  });

  return (
    <div className="2xl:container 2xl:mx-auto py-40 lg:px-20 md:px-6 px-4">
      <h1 className="text-3xl font-bold text-gray-800 text-orange mb-8">Our Products</h1>
      
      {/* Filter Section */}
      <ProductFilter search={search} setSearch={setSearch} size={size} setSize={setSize} />

      {/* Product Grid */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* No Products Message */}
      {filteredProducts.length === 0 && (
        <div className="text-center text-gray-500 dark:text-gray-300 mt-12">
          No products found matching your criteria.
        </div>
      )}
    </div>
  );
};

export default ProductList;
