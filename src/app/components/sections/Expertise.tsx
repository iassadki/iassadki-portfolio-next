"use client";

import Image from "next/image";
import React from 'react';
import ButtonPrimary from '../ui/ButtonPrimary';
import fields from '@/app/components/data/fields.json';

const Expertise = () => {
    const { areasOfExpertise } = fields;

    return (
        <>
            <section>
                <h3 className='title'>{areasOfExpertise.title}</h3>

                <div className='grid-3'>
                    {areasOfExpertise.areasOfExpertiseList.map((areasOfExpertise, index) => (
                        <div key={index} className='grid-item-box'>
                            <div className="image-container">
                                <Image src={areasOfExpertise.imagePath} alt={areasOfExpertise.title} width={70} height={70} />
                            </div>
                            <h4 id='title-grid-box'>{areasOfExpertise.title}</h4>
                        </div>
                    ))}
                </div>
            </section>

            <style jsx>{`
                .grid-3 {
                    text-align: center;
                    align-items: center;
                }

                .image-container {
                    display: flex;
                    justify-content: center;
                    margin-top: 1rem;
                    margin-bottom: 2rem;
                }

                .grid-item-box {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 1rem;
                    border-radius: 10px;
                    background-color: var(--action-color);
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease;  
                    color: var(--primary-color);
                }

            `}</style>

        </>
    );
};

export default Expertise;