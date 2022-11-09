import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer items-center p-4 bg-neutral text-neutral-content">
            <div className="items-center grid-flow-col">
                <img src="https://i.ibb.co/856d2Xr/footer.png" alt="" />
                <Link className="font-serif btn btn-ghost normal-case text-xl" to='/'>David's Burger</Link>
            </div>
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <p>Copyright © 2022 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;