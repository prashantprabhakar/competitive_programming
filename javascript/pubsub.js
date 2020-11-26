/**
 * @TODO
 * Needs improvement
 */
function pubsub() {

    const subscribers = {}

    function subscribe(eventName, callback) {
        if(!Array.isArray(subscribers[eventName])) subscribers[eventName] = []
        let index = subscribers[eventName].push(callback)-1


        return {
            unsubscribe() {
                subscribers[eventName].splice(index, 1)
            }
        }
    }

    function publish(eventName, data) {
        let _subs = subscribers[eventName]
        if(!Array.isArray(_subs)) return

        _subs.forEach(cb => cb(data))
    }

    return { 
        subscribe,
        publish
    }
}


let p = pubsub()

let s1 = p.subscribe('msg', (data) => console.log(data))
let s2 = p.subscribe('msg', (data) => console.log("data is:", data))

p.publish('msg', 'welcome')

s1.unsubscribe()

p.publish('msg', 'welcome1')

s2.unsubscribe()
p.publish('msg', 'welcome2')


