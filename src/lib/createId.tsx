let maxId = 0
const createId =()=>{
    maxId=parseInt(localStorage.getItem('maxId')||'0')
    maxId+=1
    localStorage.setItem('maxId',maxId.toString())
    return maxId
}
export {createId}