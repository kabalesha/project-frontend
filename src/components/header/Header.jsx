import React from 'react';
import { useDispatch } from 'react-redux';
import css from "./header.module.css"


const Header = () => {
  return (
    <div >
      <header className={css.headerContainer}>
        <button className={css.logo_btn} type='button'>
            <svg className={css.logo} width="40" height="48">
        <use href="./../../icons/icons.svg#logo"></use>
          </svg>
          <div className={css.logo_text}>
          TRACKER OF WATER
           </div>
        </button>
        
       <button type='button' className={css.signIn_btn}>
         <span className={css.signInText}>Sign in</span> 
         <svg className={css.round_icon} width="28" height="28" >
        <use href="./../../icons/icons.svg#user-icon"></use>
      </svg>

        </button>
      </header>
      </div>
  )
};

export default Header;
//  const dispath = useDispatch();
//   return (
//     <div>
//       Header
//       <button type="submit" onClick={() => dispath()}></button>
//     </div>
//   );