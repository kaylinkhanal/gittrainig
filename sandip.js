let arr= ["sandeep", "prakash", "nabin", "ram", "sankalpa","laxman"]
let surName = { sandeep: "poudel",prakash: "tiwari", nabin: "pokhrel", ram: "thapa", sankalpa: "gyawali",laxman:"ghimire"}

let fullName =arr.map((item, id) => {
return (
    `${item} ${surName[item]}`  //`${item}` =>value denote garxa 
)
})
console.log(fullName);