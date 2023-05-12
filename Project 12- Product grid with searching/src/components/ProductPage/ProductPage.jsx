import {singleProductApi} from '../../Apis/ProductApi/ProductApi';
import {useState ,useEffect} from 'react';

import {useParams} from 'react-router-dom';

const ProductPage = () => {

    const[singleProduct,setSingleProduct] = useState([])
    console.log("🚀 ~ file: ProductPage.js:9 ~ ProductPage ~ singleProduct:", singleProduct)

    let { productId } = useParams();

    let {title,thumbnail,description,price,rating,stock, brand ,category} = singleProduct

    useEffect(()=>{
        getsingleProductData();
    },[])

    async function getsingleProductData(){
        const data = await singleProductApi(productId);
        setSingleProduct(data);
    }

    return (
        <>
        <div>
            <p>{title}</p>
            <img src={thumbnail}></img>
            <p>{description}</p>
            <p>$ {price}</p>
            <p>Rating : {rating}</p>
            <p>Stock :  {stock}</p>
            <p>Brand : {brand}</p>
            <p>category : {category}</p>
        </div>
        </>
    )
}

export default ProductPage;