import React from 'react';
import s from './Friends.module.css';
import { NavLink} from "react-router-dom";

const Friends = () => {
    return (
        <div className={s.navbar}>
            <div className={s.item}>
                <NavLink to="/profile" className={({ isActive }) => isActive && s.active }>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={({ isActive }) => isActive && s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={({ isActive }) => isActive && s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={({ isActive }) => isActive && s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={({ isActive }) => isActive && s.active}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/friends" className={({ isActive }) => isActive && s.active}>Friends</NavLink>
            </div>
        </div>
    );
};

export default Friends;