import React from "react";


function Menu(props){
    return(
        <nav className="profile_menu">
            <div className="photo"></div>
            <ul className="menu_list">
                <li><a href="/perfil">Perfil</a></li>
                <li><a href="/meus_casos">Meus casos</a></li>
                <li><a href="sobre">Sobre</a></li>
                <li><a href="Logout">Logout</a></li>
            </ul>
        </nav>
    )
}

export default Menu