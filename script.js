clicked=(e)=>{
    inp.value+=e.target.textContent
}

equals=()=>{
    inp.value=eval(inp.value)
}
allClear=()=>{
    inp.value=" "
}