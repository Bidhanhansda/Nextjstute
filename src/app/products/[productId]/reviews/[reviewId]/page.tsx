import { notFound } from "next/navigation"
export default function reviews({params}:{
    params:{
        productId:string,
        reviewId:string
    }
}){
    if(parseInt(params.reviewId) > 1000){
        notFound();
    }
    return(
        <>
            <h1>Reviews</h1>
            <p>This is the reviews page for product {params.productId} review {params.reviewId} </p>
        </>
    )
}