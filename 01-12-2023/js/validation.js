const register = document.querySelector('#register');
const username = document.querySelector('#username');

const usernameError = document.querySelector('#usernameError');

register.addEventListener(
    'submit',
    (e) => {
        e.preventDefault();

        const userValue = username.value.trim();
        //trim = iremove yung space sa harap at sa dulo
        // console.log(userValue);

        //pag walang lamang, show error

        if( !userValue ) {
            usernameError.innerText = 'Username is required';
        }
        //username should be between 5 to 16 characters
        else if( userValue.length < 5 || userValue.length >16) {
            //show error
            usernameError.innerText ='Username must be between 5 to 16 characters';
        }
    }
)