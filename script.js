document.getElementById("login").addEventListener('click', logIn());

function logIn() {
    const ID = 'test';
    const PASSWORD = '1234';
    let usrId = document.getElementById('usrId').value;
    let usrPw = document.getElementById('usrPw').value;

    if (usrId === ID && usrPw === PASSWORD) {
        alert("welcome");
        location.href="success.html";
    }
    else {
        alert('wrong user information');
        location.reload();
    }
}