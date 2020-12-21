function mudarCor(){
    // background-color: #b34334;
    event.preventDefault();
    alert('Para mudar a cor clique em ok!');

    document.getElementById('contato').style.backgroundColor = '#000';
}
function saudacao() {
    event.preventDefault();//para o submit do formulário 
    let nome = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let assunto = document.getElementById('subject').value;
    let mensagem = document.getElementById('message').value;
    
    if( 
        nome == '' || email == '' || assunto == '' || mensagem == ''  
    ){
        alert('Preencha todos os campos');
    } else {
       alert('Postando os dados ...'); 
    }

    // console.log(nome);
    // console.log(email);
    // console.log(assunto);
    // console.log(mensagem);
}    
