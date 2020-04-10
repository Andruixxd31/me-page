import React from 'react';

const Me = () => { 
    return(
        <div className="">

            {/* Image of myself and small introduction */}
            <div className=" pa4 tl flex items-center">
            <img
                src="http://tachyons.io/img/logo.jpg"
                className="pa4 h10 w10 dib white" alt="Yep. Thats Me"/>
            <p className="dib white f3"> 
                Hello, Good to see you!. <br/> 
                My name is Andres Diaz de Leon. I'm 21 years old.
                I'm currently studying computer science in the powerful Tec de Montterey Campus Guadalajara <br/>
                This page is made for you, yes thats right, 
                I made with the soul purpose of you one day stumbling upon it and having a delightful time
                learning about my life. <br/>
                Thats awesome right? Well please enjoy it.
            </p>
            </div>

            {/* Three images */}
            <div className="flex">
                <div className="w-33">
                    <img
                        src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                        className="pa4 h10 w10 dib white" alt="Programming"
                    />
                </div>
                <div className="w-33">
                    <img
                        src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                        className="pa4 h10 w10 dib white" alt="Helping"
                    />
                </div>
                <div className="w-33">
                    <img
                        src="https://images.unsplash.com/photo-1521714161819-15534968fc5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                        className="pa4 h10 w10 dib white" alt="Learning"
                    />
                </div>
            </div>

            <div className="flex">
                <div className="w-33 pa2 mr2">
                    <h2 className="white"> Programming </h2>
                    <p className="white f4 tl">
                        Programming is a part of my daily life. Aside from what I see in my clases 
                        I like to investigate and learn new concepts and put in practice what I learnt. 
                        This website is an example of that. I'm making this webpage in React, something that my college hasn't tought me yet.
                        <br/><br/>
                        Although I admit that I have not practice as much as I would have like to.
                        This is one of my first solo projects to apply what I have seen in my online courses.
                        <br/><br/>
                        Hope I make many more projects to always get better.
                    </p>
                </div>
                <div className="w-33 pa2 mr2">
                    <h2 className="white"> Helping </h2>
                    <p className="white f4 tl">
                        A big part of my life is Helping others. Usually I donate blood every three months, 
                        I used to have a small organization where we went to marginalized zones and played with the kids, gave them books to read. 
                        Also with some friends we sometimes go to hospitals and give coffee and snacks to people who 
                        cannot go somewhere ese and waiting outside all night.
                        <br/><br/>
                        I usually donate 10% of what I make. I Believe I am in a priviledge position in life and that my actions can 
                        greatly improve the lives of others.
                    </p>
                </div>
                <div className="w-33 pa2 mr2">
                    <h2 className="white"> Learning </h2>
                    <p className="white f4 tl">
                        When I say learning I dont necesseraly refer things that are related to cpmputer science.
                        I would describe myself as a courios person, I love learning about multiple subjects, such as 
                        philosophy, art, math, nature and politics to name a few.
                        <br/><br/>
                        There are a lot of things that I believe are important to know and to incorporate into my life
                        to make it more diverse, have hobbies and hopefully using them one day in a useful situation.
                    </p>
                </div>
            </div>

            {/* Skills and Habilities section */}
            <section class="false false b--black-10 flex flex-column flex-row-l items-stretch justify-stretch">
                <div className="bg-light-green flex w-50-l items-center justify-center pa5-l pa4 order-0-l">
                    <h1 className="white tc f3">Skills</h1>
                </div>
                <div class="bg-dark-gray flex w-50-l items-center content-start justify-center-ns justify-start order-1-l">
                    <span class="pa6-l ph4-m pv2 ph3 w-60-m">

                    </span>
                </div>
            </section>

            <section class="false false b--black-10 flex flex-column flex-row-l items-stretch justify-stretch">
                <div class="bg-dark-gray flex w-50-l items-center content-start justify-center-ns justify-start false">
                    <span class="pa6-l ph4-m pv2 ph3 w-60-m">
                        
                    </span>
                </div>
                <div className="bg-light-blue flex w-50-l tr items-center justify-center pa5-l pa4 order-0-l">
                    <h1 className="white tc f3">Habilities</h1>
                </div>
            </section>
        </div>
    );
}

export default Me;