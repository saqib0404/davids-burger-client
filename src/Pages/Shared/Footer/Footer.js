import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/footer.png'

const Footer = () => {
    return (
        <footer className="footer items-center p-4 bg-neutral text-neutral-content">
            <div className="items-center grid-flow-col">
                <img src={img} alt="" />
                <p>Copyright © 2022 - All right reserved</p>
            </div>
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <Link className="font-serif btn btn-ghost normal-case text-xl" to='/'>David's Burger</Link>
            </div>
        </footer>
    );
};

export default Footer;