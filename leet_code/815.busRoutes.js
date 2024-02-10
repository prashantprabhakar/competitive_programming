/** 
 * https://leetcode.com/problems/bus-routes/description/
 * 815. Bus Routes

*/


var numBusesToDestination1= function(routes, source, target) {
    if(source === target) return 0;
    const busesFromStop = {};
    for(let i=0; i<routes.length;i++) {
        const busIndex = i;
        routes[i].forEach(stop => {
            if(busesFromStop[stop]) {
                busesFromStop[stop].push(busIndex)
            } else {
                busesFromStop[stop] =  [busIndex]
            }
        })
    };

    let stops = [];
    let visited = new Set();
    console.log(busesFromStop)

    busesFromStop[source].forEach(stop => {
        stops.push(stop)
        visited.add(stop)
    });


    let busCount = 1;
    while(stops.length) {
        const len = stops.length
        // iterate over queue
        for(let i=0; i<len; i++) {
            let route  = stops.shift();
            for (const stop of routes[route]) {
                if(stop === target) return busCount;
                // now let's see what buses we can onboard from given stop
                busesFromStop[stop].forEach(stop => {
                    if(!visited.has(stop)) {
                        visited.add(stop);
                        stops.push(stop);
                    }
                })
        }
            

        }
        busCount++;
    }
    return -1

};

function numBusesToDestination(routes, source, target) {
    if (source === target) {
        return 0;
    }

    const busesFromStop = {};

    // Create a map from the bus stop to all the routes that include this stop.
    for (let route = 0; route < routes.length; route++) {
        for (const stop of routes[route]) {
            // Add all the routes that have this stop.
            if (!busesFromStop[stop]) {
                busesFromStop[stop] = [];
            }
            busesFromStop[stop].push(route);
        }
    }

    const q = [];
    const vis = new Set();

    // Insert all the routes in the queue that have the source stop.
    for (const route of busesFromStop[source]) {
        q.push(route);
        vis.add(route);
    }

    let busCount = 1;
    while (q.length > 0) {
        const size = q.length;

        for (let i = 0; i < size; i++) {
            const route = q.shift();

            // Iterate over the stops in the current route.
            for (const stop of routes[route]) {
                // Return the current count if the target is found.
                if (stop === target) {
                    return busCount;
                }

                // Iterate over the next possible routes from the current stop.
                for (const nextRoute of busesFromStop[stop]) {
                    if (!vis.has(nextRoute)) {
                        vis.add(nextRoute);
                        q.push(nextRoute);
                    }
                }
            }
        }
        busCount++;
    }
    return -1;
}



console.log(numBusesToDestination1([[1,2,7],[3,6,7]],1, 6))