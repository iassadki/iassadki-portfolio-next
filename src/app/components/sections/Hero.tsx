"use client";

import Image from "next/image";
import ButtonPrimary from "../ui/ButtonPrimary";
import ButtonSecondary from "../ui/ButtonSecondary";

const Hero = () => {
    return (
        <>
            <section className="relative w-full h-screen">
                <div style={{ position: 'relative', width: '100%', height: '600px' }}>
                    <Image
                        src="/gradient.png"
                        fill
                        style={{ objectFit: 'cover' }}
                        alt="Hero banner"
                    />

                    <h1 className="first-phrase">Votre développeur</h1>
                    <h1 className="second-phrase">de rêve</h1>
                    <h4 className="third-phrase">Je contribue à créer des applications performantes et <span className="text_primary_underlined">intuitives</span></h4>
                    <div className="button-container">
                        <ButtonPrimary>Voir mes projets</ButtonPrimary>
                        <ButtonSecondary>Me contacter</ButtonSecondary>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .first-phrase {
                    position: absolute;
                    font-family: var(--jakarta);
                    top: 35%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    text-align: center;
                    font-weight: 700;
                }

                .second-phrase {
                    position: absolute;
                    font-family: var(--jakarta);
                    top: 47%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    color: var(--primary-color);
                    text-decoration: underline;
                    font-weight: bold;
                    text-align: center;
                    font-weight: 700;
                }

                .third-phrase {
                    position: absolute;
                    font-family: var(--jakarta);
                    top: 60%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    text-align: center;
                    font-weight: 500;
                }

                .button-container  {
                    position: absolute;
                    top: 73%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    display: flex;
                    gap: 1rem;
                }




            `}</style>
        </>
    );
};

export default Hero;