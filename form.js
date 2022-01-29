function validate(){
    
    let validar =  document.querySelector('input#emailValidate') 
    let res = document.getElementById('res')

    if(validar.value.indexOf('@') == -1){
       res.innerHTML = `<p><small>*Formatação de Email inválida</small></p>`
    }
    if(validar.value.indexOf('.com') == -1){
         res.innerHTML = `<p><small>*Formatação de Email inválida adicione .com</small></p>`
    }
    if(validar.value == ''){
        res.innerHTML += '<p><small>*Campo Necessario Vazio</small></p>'
    } 
        validar.value = ''
        validar.focus()
    

      
}