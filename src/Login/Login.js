import React from 'react';

const Login = (props) => {
   const { 
      email, 
      setEmail,
      password, 
      setPassword, 
      handleLogin, 
      handleSignup, 
      hasAccount, 
      setHasAccount,  
      emailError, 
      passwordError,
      } = props;

   return(
      <section className="login">
         <div className="loginContainer">
            <label>Ім'я користувача</label>
            <input type="text" 
            autoFocus 
            required 
            value={email} 
            onChange={e => setEmail(e.target.value)}
            />
            <p className="errorMsg">{emailError}</p>
            <label>Пароль</label>
            <input 
            type="password" 
            required 
            value={password} 
            onChange={e => setPassword(e.target.value)}
            />
            <p className="errorMsg">{passwordError}</p>
            <div className="btnContainer">
               {hasAccount ? (
                  <>
                  <button className="button__aut" onClick={handleLogin}>Увійти</button>
                  <p>Не маєте облікового запису ?<span onClick={() => setHasAccount(!hasAccount)}>Зареєструватися</span></p>
                  </>
               ) : (
                  <>
                  <button className="button__aut" onClick={handleSignup}>Зареєструватися</button>
                  <p>Маєте обліковий запис ?<span onClick={() => setHasAccount(!hasAccount)}>Увійти</span></p>
                  </>
               )}
            </div>
         </div>
      </section>
   )
};

export default Login;