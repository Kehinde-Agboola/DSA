
const Map = (arr) => { 
    const MapArr = []
    for (let i = 0; i < arr.length; i++){
        MapArr.push(arr[i], i);
        // totalItems = MapArr.length;
        // console.log(`Total items in MapArr: ${totalItems}`);
    }
    return MapArr;
}
const result = Map([3,3,3]);
console.log(result);