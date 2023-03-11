import axios from "axios";

export const handlePayment = (email, amount, firstName) => {
    const handler = PaystackPop.setup({
        key: 'pk_test_4f853571dc0254afae0c39646414cd3ede7aef90', 
        email,
        amount: amount * 100, 
        currency: 'NGN', 
        ref: firstName+Math.floor((Math.random() * 1000000000) + 1),
        callback: (response) => {
          //this happens after the payment is completed successfully
          // const reference = response.reference;
          // alert('Payment complete! Reference: ' + reference);
          // Make an AJAX call to your server with the reference to verify the transaction
           
          axios.get(`https://api.paystack.co/transaction/verify/${ref}`).then((response) => {
                
          })
        },
        onClose: () => {
          alert('Transaction was not completed, window closed.');
        },
      });
      handler.openIframe();

}