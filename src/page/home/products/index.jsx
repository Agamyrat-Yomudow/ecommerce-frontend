import React, { useEffect } from 'react'
import { FaFilter } from 'react-icons/fa'
import Cards from '../../../components/cards'
import { useDispatch, useSelector } from 'react-redux';
import { filterProductsByCategory, setProducts, sortProducts } from '../../../redux/productSlice';





const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.filteredProducts );
  const allProducts=useSelector((state) => state.products.products );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/products.json');
        const data = await response.json();
        dispatch(setProducts(data));
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, [dispatch]);



  const handleFilterByCategory = (category) => {
    
    if (category) {
      dispatch(filterProductsByCategory(category));
    } else {
      // Eğer kategori belirtilmediyse, tüm ürünleri göster
      dispatch(setProducts(allProducts));
    }
  
  };
  const handleSort = (sortType) => {
    dispatch(sortProducts(sortType));
  };

     
  return (
    <div className='max-w-screen-2xl mx-auto px-4 xl:px-28 mb-12 container'>
      <h2 className='text-3xl font-semibold text-center my-8 capitalize'>Or subscribe to the newsletter</h2>
    <div>
      <div className='flex flex-col md:flex-row flex-wrap mb-8 space-y-3  items-center md:justify-between'>
        <div className='flex gap-4 flex-row justify-start md:items-center flex-wrap md:gap-8 '>
            <button onClick={() => handleFilterByCategory('')}>All Products</button>
            <button onClick={() => handleFilterByCategory('Dress')}>t-shirt</button>
            <button onClick={() => handleFilterByCategory('Hoodies')}>hoodies</button>
            <button onClick={() => handleFilterByCategory('Bag')}>bag</button>
            <button onClick={() => handleFilterByCategory('Shoe')}>shoe</button>
            <button onClick={() => handleFilterByCategory('Glasses')}>glasses</button>


        </div>
        <div className='flex items-center justify-end bg-black p-2 mb-4  rounded-sm'>
            <div className=''>
                <FaFilter className='w-5 h-4 text-white'/>
            </div>
            <select onChange={(e) => handleSort(e.target.value)} className='bg-black text-white px-2 py-1 rounded-sm outline-none'>
                <option value="default">Default</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="high-to-low">High To Low</option>
                <option value="low-to-high">Low To High</option>
            </select>
        </div>
      </div>
     
        <Cards   filteredItems={products}/>
      </div>
    </div>
  )
}

export default Products
