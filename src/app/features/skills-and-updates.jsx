import Image from 'next/image';
import React, { useRef, useEffect, useState } from 'react'; // Import useRef and useState for Intersection Observer
import { motion } from 'framer-motion'; // Import motion from framer-motion
import Awomen from '../image/Awomen.png';
import Boxer from '../image/Boxer.png';

// Sample articles data
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
    const [inView, setInView] = useState(Array(articles.length).fill(false)); // State to track which articles are in view
    const refs = useRef([]); // Create a ref for each article

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = entry.target.dataset.index; // Get index from data attribute
                    if (entry.isIntersecting) {
                        setInView((prev) => {
                            const newInView = [...prev];
                            newInView[index] = true; // Mark article as in view
                            return newInView;
                        });
                    } else {
                        setInView((prev) => {
                            const newInView = [...prev];
                            newInView[index] = false; // Mark article as out of view
                            return newInView;
                        });
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the element is visible
        );

        refs.current.forEach((ref) => {
            if (ref) observer.observe(ref); // Observe each ref
        });

        return () => {
            refs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref); // Clean up observer
            });
        };
    }, []);

    return (
        <div className="">
            <div>
                <h2 className='font-[600] text-[30px] font-popins mb-6'>Stories and News Update</h2>
            </div>

            {articles.map((article, index) => (
                <motion.div 
                    className='flex flex-col gap-12 md:flex-row justify-between items-start mb-8'
                    key={index}
                    data-index={index} // Add data attribute for index
                    ref={(el) => refs.current[index] = el} // Attach ref to each article
                >
                    <motion.div 
                        className='text-wrap w-full md:w-[600px]'
                        initial={{ x: -50, opacity: 0 }} // Start from the left for text
                        animate={inView[index] ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }} // Slide in to x: 0 and fade in or out
                        transition={{ duration: 0.5 }} // Transition for sliding in/out
                    >
                        <h1 className='font-[600] text-[25px] leading-[37.5px] font-popins mb-2'>{article.title}</h1>
                        <p className='font-[500] font-manrope text-[16px] md:text-[20px] leading-[27.32px] mb-4'>{article.description}</p>
                        <button className='font-[600] font-popins text-[20px] leading-[37.5px] flex items-center'>
                            Read more 
                            <span className='ml-2'>&#8594;</span>
                        </button>
                    </motion.div>

                    <motion.div 
                        className='w-full md:w-auto'
                        initial={{ x: 50, opacity: 0 }} // Start from the right for the image
                        animate={inView[index] ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }} // Slide in to x: 0 and fade in or out
                        transition={{ duration: 0.5 }} // Transition for sliding in/out
                    >
                        <Image
                            src={article.image}
                            width={500}
                            height={500}
                            alt={article.title} 
                            className='pt-5 h-[250px] w-[400px] object-cover md:object-fit md:h-[350px] md:w-[500px] rounded-md'
                        />
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );
}

export default Skills;
