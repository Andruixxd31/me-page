import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => { //With destructuring we don't have to use props, just the name of the atribute
    return(
        <div>
            <nav className="bg-green tc">
                {/* The components of borders are left there to later try new styles */}
                <Link to='../Sections/Me'>
                    <button className="br3 br--left b--navy bw0 bg-green navy f3 dim pointer">Me</button>
                </Link>
                {/* <Link to='../Sections/Ambitions'>
                    <button className="br0 b--navy bw0 bg-green navy f3 dim pointer">Ambitions</button> 
                </Link> */}
                <Link to='../Sections/Moments'>
                    <button className="br0 b--navy bw0 bg-green navy f3 dim pointer">Moments</button> 
                </Link>
                {/* <Link to='../Sections/Trivia'>
                    <button className="br0 b--navy bw0 bg-green navy f3 dim pointer">Trivia</button>
                </Link> */}
                {/* <Link to='../Sections/Fanclub'>
                    <button className="br3 br--right b--navy bw0 bg-green navy f3 dim pointer">Fan Club</button>
                </Link> */}
            </nav>
        </div>
    );
}


export default Menu;
