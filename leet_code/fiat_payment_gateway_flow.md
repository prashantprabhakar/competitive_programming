

Flow

    * User click a checkout button, 

    * api call is made that creates order, calls gateway api and gets payment_session_link, we send payment_session_link to frontend as api response
    * frontend user gateway sdk to open payment page in new page, 
    * on payment complete (failed, aborted) callback url is hit which was provided in step 2. The redirect URL is of backend service
    * We update status in db based on update and 
    * 


Flow 1:
    * redirect URL is of frontend, with orderid
    * frontend then makes frequent calls to backend to check status of payement, backend checks with gateway
    * when succcess, frontend updateds user about payment status
    
    Cons:
        * what if user closes the page? how do we update status in backend?

Flow 2
    * redirect URL is of backend with orderid
    * gateway calls redirect URL, we update status in DB, 
    * frontend keeps polling a backend api for order status every 1 sec, the api checks status in db and returns values
    * backend also keeps polling in parallel gateway or setups a web socket with gateway to get status. when status is provided we update that in db.




Architecture: https://docs.cashfree.com/docs/javascript-integration