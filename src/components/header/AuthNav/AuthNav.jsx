import React from "react";
import icon from "./outline.png"
import css from "./authNav.module.css"


const AuthNav = () => {

  return (
    <>
      
      <button type='button' className={css.signIn_btn}>
        
        <span className={css.signInText}>Sign in</span> 
        
      <img className={css.user_icon} src={icon} alt="User icon"></img>
</button>
      
      </>
  )
};

export default AuthNav;
