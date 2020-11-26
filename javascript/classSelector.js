
function classSelectorRecursion(rootNode, className, res=[]) {
    let children = rootNode.children
    for(let i=0; i<children.length; i++) {
        let child = children[i]
        if(child.className == className) res.push(child.title)
        if(child.children) classSelectorRecursion(child, className, res)
    }
    return res
}

function classSelectorIteration(rootNode, className) {
    let res = []
    let children = rootNode.children
    let i = 0
    while(i < children.length) {
        let child = children[i]
        if(child.className == className) res.push(child.title)
        if(child.children) children.push(...child.children)
        i++
    }
    return res
}




let domNode = {
    tite: 'html',
    children: [
        {
            title: 'div1',
            className: 'h1',
            children: [
                { title: 'p1', className: 'h2'},
                { title: 'p2', className: 'h1'},
                { title: 'p3', className: 'h1'},
            ]
        },
        {
            title: 'div2',
            className: 'h2',
            children: [
                { title: 'p4', className: 'h1'},
                { title: 'p5', className: 'h1'},
                { title: 'p6', className: 'h2'},
            ]
        },
        {
            title: 'div3',
            className: 'h1',
            children: [
                { title: 'p7', className: 'h2'},
                { title: 'p8', className: 'h2'},
                { title: 'p9', className: 'h2'},
            ]
        }

    ]
}

console.log(classSelectorRecursion(domNode, 'h1'))
console.log(classSelectorIteration(domNode, 'h1'))