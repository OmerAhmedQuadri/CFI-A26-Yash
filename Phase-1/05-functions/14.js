function flat(arr, arr2=[]) {
    if(!(Array.isArray(arr)))
        return undefined
    for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i]))
            flat(arr[i], arr2)
        else
            arr2.push(arr[i])
    }
    return arr2
}

let arrray = [1,2,[11,22,[111,222,333,[1111,2222,3333,3],33],44],45,[23,34,45,56,[65,[75,[85]]]]]

console.log(flat(arrray));
