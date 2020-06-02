
var listItem = (obj, html='<ul>') => {
    for(let key in obj) {
        let val = obj[key]
        if(typeof(val) == 'object') {
            html += `<li> ${key}: </li> ${listItem(val)}`
        } else {
            html += `<li> ${key}: ${val} </li>`
        }
    }
    html += '</ul>'
    return html
}

// let testObj = {
//     name: 'pps',
//     age: 28,
//     company: {
//         name: 'exzeo',
//         salary: '15.5',
//         error: {
//             message: 'something broke',
//             status: 500
//         }
//     },
//     ph: '9990053172'
// }

let testObj = { 
    'message': 'error in isOnSale',
    'timestamp': '2020-05-03T15:43:45.589Z',
    'level': 'alert',
    'metaData': { 
        'weaponId': 4,
        'error': ReferenceError: weaponid is not defined
at _callee5$ (/home/prashant/personal/projects/reality-clash/projects/techsavyy/rcc/rc-trading/src/services/contracts/tradingContract.service.js:80:40)
at tryCatch (/home/prashant/personal/projects/reality-clash/projects/techsavyy/rcc/rc-trading/node_modules/regenerator-runtime/runtime.js:62:40)
at Generator.invoke [as _invoke] (/home/prashant/personal/projects/reality-clash/projects/techsavyy/rcc/rc-trading/node_modules/regenerator-runtime/runtime.js:296:22)
at Generator.prototype.(anonymous function) [as next] (/home/prashant/personal/projects/reality-clash/projects/techsavyy/rcc/rc-trading/node_modules/regenerator-runtime/runtime.js:114:21)
at step (/home/prashant/personal/projects/reality-clash/projects/techsavyy/rcc/rc-trading/node_modules/babel-runtime/helpers/asyncToGenerator.js:17:30)
at /home/prashant/personal/projects/reality-clash/projects/techsavyy/rcc/rc-trading/node_modules/babel-runtime/helpers/asyncToGenerator.js:35:14
at new Promise (<anonymous>)
at new F (/home/prashant/personal/projects/reality-clash/projects/techsavyy/rcc/rc-trading/node_modules/core-js/library/modules/_export.js:36:28)
at Object.<anonymous> (/home/prashant/personal/projects/reality-clash/projects/techsavyy/rcc/rc-trading/node_modules/babel-runtime/helpers/asyncToGenerator.js:14:12)
at Object.isOnSale (/home/prashant/personal/projects/reality-clash/projects/techsavyy/rcc/rc-trading/src/services/contracts/tradingContract.service.js:78:14)
at _callee5$ (/home/prashant/personal/projects/reality-clash/projects/techsavyy/rcc/rc-trading/src/api/weaponSale/controller.js:219:60)
at tryCatch (/home/prashant/personal/projects/reality-clash/projects/techsavyy/rcc/rc-trading/node_modules/regenerator-runtime/runtime.js:62:40)
at Generator.invoke [as _invoke] (/home/prashant/personal/projects/reality-clash/projects/techsavyy/rcc/rc-trading/node_modules/regenerator-runtime/runtime.js:296:22)
at Generator.prototype.(anonymous function) [as next] (/home/prashant/personal/projects/reality-clash/projects/techsavyy/rcc/rc-trading/node_modules/regenerator-runtime/runtime.js:114:21)
at step (/home/prashant/personal/projects/reality-clash/projects/techsavyy/rcc/rc-trading/node_modules/babel-runtime/helpers/asyncToGenerator.js:17:30)
at /home/prashant/personal/projects/reality-clash/projects/techsavyy/rcc/rc-trading/node_modules/babel-runtime/helpers/asyncToGenerator.js:28:13
at <anonymous> 
} }

console.log(listItem(testObj))