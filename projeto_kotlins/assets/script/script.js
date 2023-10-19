let nome = document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector('#assunto')//.assunto -> class

let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome(){
  let txtNome = document.querySelector('#txtNome')
   
  if(nome.value.length < 3){
    txtNome.innerHTML = 'Nome Inválido'
    txtNome.style.color = 'red'
  } else {
    txtNome.innerHTML = 'Nome válido'
    txtNome.style.color = 'green'
    nomeOk = true
  }
}

function validaEmail(){
 let txtEmail = document.querySelector('#email')

 if(email.value.indexOf('@') == -1 || email.value.indexOf('.' == -1)){
   txtEmail.innerHTML = 'Email inválido'
   txtEmail.style.color = 'red'
 } else {
  txtEmail.innerHTML = 'Email válido'
  txtEmail.style.color = 'green'
  emailOk = true
 }
}

function validaAssunto(){
  let txtAssunto = document.querySelector('#assunto')

  if(assunto.value.length >= 100){
    txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
    txtAssunto.style.color = 'red'
    txtAssunto.innerHTML = 'block'
  } else {
    txtAssunto.innerHTML = 'none'
    assuntoOk = true
  }
}

function enviar(){
  if(nomeOk == true && emailOk == true && assuntoOk  == true){
  alert ('Formulário enviado com sucesso!')
  } else {
    alert ('Preencha o formulário corretamente!')
  }
}

function mapaZoom(){
  mapa.style.width = '800px'
  mapa.style.heigth = '600px '
}

function mapNormal(){
  mapa.style.width = '400px'
  mapa.style.heigth = '250px '
}
