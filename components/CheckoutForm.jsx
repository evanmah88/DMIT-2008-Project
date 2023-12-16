
 
 function CheckoutForm ( {children, className}){
   
 
    const details={
        id:"from dashboard",
        quanity:2,
        price:"from dashboard"
    }

  
    return (
        <form action='/api/checkout' method="POST" >
            <input type="hidden" name="id" value="from dashboard"  />
            <input type="hidden" name="price" value="price_1ONigJJQC9ctxOm1Y3QQoFDf" />
            <button type="submit" id="checkout-button">Check out</button>
        </form>
    )
    
 }



 export {CheckoutForm}
 