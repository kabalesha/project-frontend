import css from "./UserNav.module.css"
import icon from "./solid.png"
import foto from "./Ellipse 1.png"
import React from "react"



const UserNav = () => {
    
    return (
        <>
            <div className={css.userNav}>

                
                <p className={css.name}>David</p>
                
                <img className={css.userPhoto} src={foto} alt="" />

                <button type="button" className={css.open_user_menu}>

                    
                 <img className={css.user_icon} src={icon} alt="Menu icon"></img>

            </button>
            
</div>
        
        </>
    )

}
export default UserNav