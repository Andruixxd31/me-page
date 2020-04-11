import React from 'react';


const Galery = () => {
    return(
        <div className="flex flex-wrap">
            <img className="w-50 h-50" src="/photos/imgs1.jpg" alt="one badass moment"/>
            <img className="w-50 h-50" src="/photos/imgs3.jpg" alt="one badass moment"/>
            <img className="fl w-25 h-25" src="/photos/imgs4.PNG" alt="one badass moment"/>
            <img className="fl w-75 h-50" src="/photos/imgs5.JPG" alt="one badass moment"/>
            <img className="fl w-100 h-50" src="/photos/imgs7.JPG" alt="one badass moment"/>
            <img className="fl w-50 h-50" src="/photos/imgs8.JPG" alt="one badass moment"/>
            <img className="fl w-50 h-50" src="/photos/imgs9.JPG" alt="one badass moment"/>
        </div>
    );
}


export default Galery;