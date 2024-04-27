class LoginElements {
    menu = () => { return "//button[@aria-label='Abrir menu']"}

    botaoLogin = () => { return '.profile-link__text' }

    botaoRecuperarSenha = () => { return '.login__form__forgot-password' }

    botaoRealizarLogin = () => { return '[type="submit"]' }

    inputEmail = () => { return "//input[@type='email']" }

    inputSenha = () => { return "//input[@type='password']" }

    mensagemErro = () => { return "#error-password" }
}

export default LoginElements;

//utilizando css ao inves de xpath

// class LoginElements {
//     menu = () => { return '[aria-label="Abrir menu"]'; }

//     botaoLogin = () => { return '.header__profile-wrapper'; }

//     botaoRecuperarSenha = () => { return '.login__form__forgot-password'; }

//     botaoRealizarLogin = () => { return '[type="submit"]'; }

//     inputEmail = () => { return 'input.input[type="email"][name="email"]'; }

//     inputSenha = () => { return 'input.input[type="password"][name="password"]'; }

//     mensagemErro = () => { return '#error-password.pristine-error.input__error__message'; }
// }

// export default LoginElements;
