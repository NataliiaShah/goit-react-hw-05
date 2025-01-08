import { NavLink } from "react-router-dom";
import clsx from 'clsx';
import s from "./Navigation.module.css";

const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
    return (
        <header className={s.container}>
            <nav className={s.headerNav}>
                <NavLink className={buildLinkClass} to="/">
                    Home
                </NavLink>
                <NavLink className={buildLinkClass} to="/movies">
                    Movies
                </NavLink>
            </nav>
        </header>
    );
};
export default Navigation;