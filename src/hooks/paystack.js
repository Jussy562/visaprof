export const handlePayment = (email, amount) => {
    const handler = PaystackPop.setup({
        key: 'pk_test_4f853571dc0254afae0c39646414cd3ede7aef90', 
        email,
        amount: amount * 100, 
        currency: 'NGN', 
        // ref: 'YOUR_REFERENCE', // Replace with a reference you generated
        callback: (response) => {
          //this happens after the payment is completed successfully
          const reference = response.reference;
          alert('Payment complete! Reference: ' + reference);
          // Make an AJAX call to your server with the reference to verify the transaction
        },
        onClose: () => {
          alert('Transaction was not completed, window closed.');
        },
      });
      handler.openIframe();

}