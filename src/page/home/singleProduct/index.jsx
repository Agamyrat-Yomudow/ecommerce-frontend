import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/products.json");
                const data = await response.json();

                // Filtrasyon işlemi burada gerçekleşmeli
                const selectedProduct = data.find((p) => p.id === id);
                console.log(selectedProduct)

                // setState ile seçilen ürünü güncelle
                setProduct(selectedProduct);

            } catch (error) {
                console.log('Error fetching data:', error)
            }
        }

        fetchData();
    }, [id]);
    

    return (
        <div>

        </div>
    )
}

export default SingleProduct;
