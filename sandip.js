let arr= ["sandeep", "prakash", "nabin", "ram", "sankalpa"]
let surName = { sandeep: "poudel",prakash: "tiwari", nabin: "pokhrel", ram: "thapa", sankalpa: "gyawali"}

let fullName =arr.map((item, id) => {
return (
    `${item} ${surName[item]}`  //`${item}` =>value denote garxa 
)
})
console.log(fullName);