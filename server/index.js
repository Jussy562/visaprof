const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const path = require('path');

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });

app.get('/payment/verify', async(req,res) => {  

  const ref = req.query.reference;
  let output;
  await axios.get(`https://api.paystack.co/transaction/verify/${ref}`,    {
    headers: {
    authorization: "Bearer sk_test_0efa8a78481a41340c1b154cb0212bc5156df5fe",
  //replace TEST SECRET KEY with your actual test secret 
  //key from paystack
    "content-type": "application/json",
    "cache-control": "no-cache",
  }}
  ).then((success)=>{
  output=success;
  }).catch((error)=>{
  output=error;
  });


//now we check for internet connectivity issues
if(!output.response && output.status!==200) throw new UserInputError("No internet Connection");
//next,we confirm that there was no error in verification.
   if(output.response && !output.response.data.status) throw new       UserInputError( "Error verifying payment , 'unknown Transaction    Reference Id'");
  

//we return the output of the transaction
   res.status(200).send("Payment was successfully verified");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});