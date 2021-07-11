import { Avatar } from "@material-ui/core"
import React from "react"
import "./Header.css"
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useStateValue } from "./StateProvider";

const Header = () => {
    const [{ user }] = useStateValue();

    return (
        <div className="header">
            <div className="header__left">
                <Avatar className="header__avatar" alt={user?.displayName} src={user?.photoURL}/>
                <AccessTimeIcon />
            </div>
            <div className="header__search">
                <SearchIcon />
                <input placeholder="Search Rick" />
            </div>
            <div className="header__right">
                {/* help icon */}
                <HelpOutlineIcon />
            </div>
        </div>
    )
}

export default Header
