document.getElementById("form").addEventListener("submit",validation);
function validation(event){
    event.preventDefault();
    if(document.getElementById('nickname').value==""){
        return false;
    }
    if(document.getElementById('female').checked==false && document.getElementById('male').checked==false && document.getElementById('dog').checked==false){
        return false;
    }
    if(document.getElementById('password').value==""){
        return false;
    }
    window.location.href='page2.html';
};