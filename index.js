
const storeLocal=(name)=>{
    const inputValue=document.getElementById(name).value;
    localStorage.setItem(name,inputValue)
}


const reset=()=>localStorage.clear();