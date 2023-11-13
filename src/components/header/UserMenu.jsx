import React from 'react';
import css from "./header.module.css"
import { useDispatch } from 'react-redux';



const UserMenu = () => {
      // const dispatch = useDispatch();
    // const { user } = useAuth();
    
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
         <span className={css.signInText}>V</span> 
         <svg className={css.round_icon} width="28" height="28" >
        <use href="./../../icons/icons.svg#user-icon"></use>
      </svg>

        </button>
      </header>
      </div>
    )
}

export default UserMenu