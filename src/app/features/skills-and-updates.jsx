import Image from 'next/image';
import React from 'react';
import Awomen from '../image/Awomen.png';
import Boxer from '../image/Boxer.png';

const articles = [
    {
        title: "Local Women’s Self-Defense Workshop Sees Record Attendance",
        description: "Last weekend, over 100 women participated in a self-defense workshop organized by Kirki. The event was aimed at empowering women with the skills to protect themselves and respond to threats. The workshop was a success, with attendees leaving positive feedback and requesting future sessions.",
        image: Boxer 
    },
    {
        title: "How Kirki Helped Prevent GBV in Kaduna Communities",
        description: "Thanks to the Kirki platform, several cases of gender-based violence were prevented in Kaduna communities. Local authorities and community leaders reported that the SOS feature enabled them to respond quickly to incidents, leading to arrests and prevention of further harm.",
        image: Awomen 
    }
];

const Skills = () => {
    return (
        <div className=" ">
            <div>
                <h2 className='font-[600] text-[30px] font-popins mb-6'>Stories and News Update</h2>
            </div>

            {articles.map((article, index) => (
                <div className='flex flex-col gap-12 md:flex-row justify-between items-start mb-8' key={index}>
                    <div className='text-wrap w-full md:w-[600px]'>
                        <h1 className='font-[600] text-[25px] leading-[37.5px] font-popins mb-2'>{article.title}</h1>
                        <p className='font-[500] font-manrope text-[16px] md:text-[20px] leading-[27.32px] mb-4'>{article.description}</p>
                        <button className='font-[600] font-popins text-[20px] leading-[37.5px] flex items-center'>
                            Read more 
                            <span className='ml-2'>&#8594;</span> 
                        </button>
                    </div>

                    <div className='w-full md:w-auto'>
                        <Image
                            src={article.image} 
                            width={500}
                            height={500}
                            alt={article.title} 
                            className='pt-6 h-[250px] w-[400px] object-cover md:object-fit rounded-md'
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Skills;
