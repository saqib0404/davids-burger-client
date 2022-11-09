import React from 'react';
import david from '../../../assets/david.jpg'

const AboutMe = () => {
    return (
        <div className='mb-20'>
            <h2 className='text-4xl font-bold text-center mb-8 underline'>About Me</h2>
            <div className='mx-24 md:flex justify-between items-center'>
                <div className="about-me-details md:w-10/12 lg:w-8/12">
                    <h3 className='text-2xl'>Hey! I am <span className='text-warning font-semibold'>David</span>. <small>(Your Cook)</small></h3><br />
                    <p>I am serving my burger service since 2020. I started this task in the lockdown, as people wanted to eat delicious burger but they couldn't get that from the renowned restaurants.
                        So I decided to make burgers at my own kitchen. And I started so.. <br /> <br />

                        I am from New York. Belonging from a doctor family.
                        My burgers are made by my own hands maintaining proper hygine. And they taste Awesome
                    </p>
                </div>
                <div>
                    <img src={david} className='rounded-lg md:ml-4' alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;