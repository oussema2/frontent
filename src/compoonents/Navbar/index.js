import React from 'react'
import {
    Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink
} from "./Navbar"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'


const Navbar = (props) => {



    const accountStatus = props.connected ? (
        <div style={{
            display: `flex`
        }}>
            <div style={{
                display: `flex`
            }}>
                <NavLink to="/profile" >
                    <h3>{props.user.IGN}</h3>
                    <img style={{
                        width: `100px`,
                        borderRadius: `50%`,
                        padding: `17px 17px`,

                    }} alt="avatar" src={`http://localhost:5000/images/userAvatar/${props.user.avatar}`} />



                </NavLink>
            </div>
            <FontAwesomeIcon icon={faSignOutAlt} style={{
                margin: `auto`,
                height: `40px`,
                width: `100px`,
                color: `white`

            }}
                onClick={props.onlogOut} />
        </div>) : <NavBtn >
        <NavBtnLink to='/signin'> LogIn</NavBtnLink>
        <NavBtnLink to='/signup'> Register</NavBtnLink>

    </NavBtn>

    return (
        <>
            <Nav>

                <NavLink to="/">
                    <img alt="imageLogo" src={process.env.PUBLIC_URL + `/esport-logo-png-Transparent-Images.png`} style={{
                        width: `70px`,


                    }} />
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/" >
                        Home
                    </NavLink>
                    <NavLink to="/tournaments" >
                        Tournaments
                    </NavLink>

                    <NavLink to="/games" >
                        Games
                    </NavLink>
                </NavMenu>

                {
                    accountStatus

                }


            </Nav>
        </>
    )
}

export default Navbar
