import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const ButtonSecondary: React.FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <>
            <button className="custom-button" {...props}>
                {children}
            </button>
            <style jsx>{`
                .custom-button {
                    padding: 10px 25px;
                    cursor: pointer;
                    font-family: var(--jakarta-bold);
                    font-weight: 600;
                    background-color: var(--action-color);
                    border-radius: 50px;
                    border: solid 2px var(--primary-color);
                    color: var(--primary-color);
                }
            `}</style>
        </>
    );
};

export default ButtonSecondary;