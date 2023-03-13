
const storeLocal=(name)=>{
    const inputValue=document.getElementById(name).value;
    localStorage.setItem(name,inputValue)
}
const removeLocal=(name)=>{
    localStorage.removeItem(name)
}



const sendLocal=()=>{
    let obj={};
    const inputName=document.getElementById('name').value;
    const inputEmail=document.getElementById('email').value;
    const inputMessage=document.getElementById('message').value;

    obj['name']=inputName;
    obj['email']=inputEmail;
    obj['message']=inputMessage;
    localStorage.setItem('info',JSON.stringify(obj))
}

const reset=()=>localStorage.clear();