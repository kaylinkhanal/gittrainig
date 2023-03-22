const firstarr = [1,2,3,"a"]
const secondarr = [4,5,6]

const thridarr = firstarr.concat(secondarr)
console.log(thridarr)

var a  =10
let b = 20
function outer(){
    let c = 30
    function myValue(){
        return 100
    }
    function inner(){
        const d = 40
        debugger;
        return a+ b +c + d + myValue()
    }
    return inner()
}
outer()