import React, { useState, useRef } from 'react';

export const OutsideClick = () => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);
    const buttonRef = useRef(null);

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };

    // Logic for detecting clicks outside the dropdown (if necessary)
    const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target) && buttonRef.current && !buttonRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    // Add event listener to handle clicks outside
    React.useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return { isOpen, setIsOpen, ref, buttonRef, handleToggle };
};
