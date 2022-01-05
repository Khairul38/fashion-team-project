import { useEffect } from 'react';
import { useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        fetch('https://arcane-shore-73399.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .finally(() => setLoading(false));
    }, []);
    return { products, setProducts, loading };
};

export default useProducts;