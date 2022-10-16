import React, {useEffect} from 'react'
// import MediaCard from '../../components/MediaCard'
import axios from 'axios'

function Store() {

    let getData = () => {
        axios.get('https://fakestoreapi.com/products')
        .then((success)=>{console.log(success)})
        .catch((err)=>{console.log(err)})
    }

    console.log(getData)

    useEffect(()=>{
        getData()
    }, [])

    return (
        <>
            <h1>Store</h1>
            {/* <MediaCard /> */}
        </>
    )
}

export default Store