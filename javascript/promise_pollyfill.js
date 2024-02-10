function MyPromise(executorFn) {
  
  
    let onResolve, onReject;
    let resolvedValue, rejectedValue

    const STATE = {
		'PENDING': 'PENDING',
		'FULLFILLED': 'FULLFILLED',
		'REJECTED': 'REJECTED'
    }
    let state = STATE.PENDING
  
    this.then = function (thenHandler) {
		onResolve = thenHandler;
		_handleResolve();
		return this;
    }

    this.catch = function(catchHandler) {
		onReject = catchHandler;
		_handleReject();
		return this;
    }
    
    function resolve(val) {
		if(state === STATE.PENDING) {
			state = STATE.FULLFILLED;
			resolvedValue = val;
			_handleResolve()
		}
    }
    
    function reject(err) {
		if(state === STATE.PENDING) {
			rejectedValue = err;
			state = STATE.REJECTED;
			_handleReject()
		}
      
    }
    
    function _handleResolve() {
        if(typeof onResolve === "function" && state === STATE.FULLFILLED) {
          onResolve(resolvedValue);
          isFullfilled = true;
        }
    }

	function _handleReject() {
		if(typeof onReject === "function" && state === STATE.REJECTED) {
			onReject(rejectedValue);
		}
	}

	this.toString = function() {
		return `Promise <${state}>`
	}
    
    executorFn(resolve, reject);
  }
  
  let p1 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve(100);
	  resolve(500);
    }, 2000)
  })
  
  console.log(p1)
  let p2 =  new MyPromise((resolve, reject) => {
    resolve(200)
   
  })
  
  p1.then(val => {
    console.log(val)
  }).catch(error => {
    console.log(error)
  })
  
  p2.then(val => {
    console.log(val)
  }).catch(error => {
    console.log(error)
  })