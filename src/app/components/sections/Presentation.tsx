"use client";
import Image from "next/image";
import React from 'react';
import fields from '@/app/components/data/fields.json';
import ButtonPrimary from '@/app/components/ui/ButtonPrimary';
import ButtonSecondary from '@/app/components/ui/ButtonSecondary';

const Presentation: React.FC = () => {
    const { presentation } = fields;

    return (
        <>
            <section>
                {/* <h3 className='title'>{presentation.title}</h3> */}

                <div className="grid-2">
                    <div className="grid-item">
                        <div className="photo-container">
                            <Image
                                src={presentation.imagePath}
                                alt={presentation.name}
                                width={300}
                                height={300}
                                className="profile-image"
                            />
                        </div>
                    </div>

                    <div className="grid-item">
                        <div className="name-container">
                            <h1 className="first-name">{presentation.name}</h1>
                            <h1 className="last-name">{presentation.surname}</h1>
                        </div>
                        <p className="job-title">&rarr; {presentation.description}</p>
                        <div className="button-container">
                            <ButtonPrimary>Télécharger mon CV</ButtonPrimary>
                            <ButtonSecondary>En savoir plus</ButtonSecondary>
                        </div>
                    </div>
                </div>

                <div className="grid-3">
                    <div className="grid-item-box">
                        <div className="stat-content">
                            <div className="icon-container">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                                    <path d="M4 22h16"></path>
                                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                                    <path d="M12 2v7"></path>
                                    <path d="m16 8-4 1-4-1"></path>
                                </svg>
                            </div>
                            <div className="stat-text">
                                <p className="stat-number">+30</p>
                                <p className="stat-label">Projets réalisés</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid-item-box">
                        <div className="stat-content">
                            <div className="icon-container">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                            </div>
                            <div className="stat-text">
                                <p className="stat-number">+2</p>
                                <p className="stat-label">Ans d'expérience</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid-item-box">
                        <div className="stat-content">
                            <div className="icon-container">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                                </svg>
                            </div>
                            <div className="stat-text">
                                <p className="stat-number">+30</p>
                                <p className="stat-label">Langages et outils maîtrisés</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="social-links-container">
                    <div className="social-grid">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
                            <div className="social-icon-container">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                            </div>
                            <span>GitHub</span>
                        </a>
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-link">
                            <div className="social-icon-container">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </div>
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>



            </section>

            <style jsx>{`
                section {
                    padding: 2rem;
                }

                .grid-3 {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                    margin-top: 50px;
                }

                .grid-item-box {
                    background-color: #E6E8FF;
                    border-radius: 12px;
                    padding: 2.5rem;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
                }

                .stat-content {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                .icon-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 50px;
                    height: 50px;
                    border-radius: 8px;
                    background-color: var(--primary-color);
                    color: white;
                }

                .stat-text {
                    display: flex;
                    flex-direction: column;
                }

                .stat-number {
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: #333;
                    margin: 0;
                    line-height: 1.2;
                }

                .stat-label {
                    font-size: 1rem;
                    color: #666;
                    margin: 0;
                    line-height: 1.2;
                }

                .social-links-container {
                    margin-top: 40px;
                    display: flex;
                    justify-content: center;
                }
                
                .social-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 20px;
                    max-width: 400px;
                }
                
                .social-link {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    text-decoration: none;
                    color: #333;
                    padding: 15px 20px;
                    border-radius: 8px;
                    background-color: #E6E8FF;
                    transition: all 0.2s ease;
                }
                
                .social-link:hover {
                    background-color: #D1D5FF;
                    transform: translateY(-2px);
                }
                
                .social-icon-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 36px;
                    height: 36px;
                    border-radius: 8px;
                    background-color: var(--primary-color);
                    color: white;
                }

                .grid-2 {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 25px;
                    align-items: center;
                }

                .grid-item {
                    width: 100%;
                }

                .photo-container {
                    display: flex;
                    justify-content: center;
                }

                .profile-image {
                    border-radius: 8px;
                    object-fit: cover;
                    background-color: #E8F0FF;
                }

                .name-container {
                    margin-bottom: 1rem;
                }

                .first-name {
                    display: inline;
                    color: var(--primary-color);
                    font-size: 2.5rem;
                    font-weight: bold;
                    margin-right: 0.5rem;
                }

                .last-name {
                    display: inline;
                    color: #000;
                    font-size: 2.5rem;
                    font-weight: bold;
                }

                .job-title {
                    font-size: 1.25rem;
                    margin-bottom: 2rem;
                }

                .button-container {
                    display: flex;
                    gap: 1rem;
                }

                @media (max-width: 768px) {
                    .grid-2 {
                        grid-template-columns: 1fr;
                    }
                    
                    .grid-3 {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </>
    );
};

export default Presentation;