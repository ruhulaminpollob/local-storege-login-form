
const storeLocal=(name)=>{
    const inputValue=document.getElementById(name).value;
    localStorage.setItem(name,inputValue)
}
const removeLocal=(name)=>{
    localStorage.removeItem(name)
}

const reset=()=>localStorage.clear();