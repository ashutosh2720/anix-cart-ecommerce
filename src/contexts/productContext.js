import { createContext, useContext, useState, useEffect } from "react";

const productContext = createContext()


const ProductProvider = ({ children }) => {

    const [productLoading, setProductLoading] = useState(true);
    const [products, setProducts] = useState([])

    const getApiData = async () => {
        try {
            let response = await fetch(`/api/products`);
            let data = await response.json();
            setProducts(data.products);
        }
        catch (err) {
            console.log(err)
        } finally {
            setProductLoading(false)
        }
    }

    useEffect(() => {
        getApiData()
    }, [])


    return (
        <productContext.Provider value={{ productLoading, products }}>
            {children}
        </productContext.Provider>
    )
}

const useGlobalProducts = () => useContext(productContext)

export { ProductProvider, useGlobalProducts }