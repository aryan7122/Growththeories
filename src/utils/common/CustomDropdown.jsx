import React from 'react';
import './CustomDropdown.scss';
import { OutsideClick } from './OutsideClick';

const CustomDropdown = ({ options, defaultValue, onChange }) => {
    const servicesDropdown = OutsideClick();
    const [selected, setSelected] = React.useState(defaultValue || options[0]);

    const handleSelect = (option) => {
        setSelected(option);
        servicesDropdown.setIsOpen(false);
        if (onChange) {
            onChange(option);
        }
    };

    return (
        <div className="custom-dropdown" ref={servicesDropdown.buttonRef}>
            <div
                className="custom-dropdown__selected"
                onClick={servicesDropdown.handleToggle}
            >
                {selected}
                <span className="custom-dropdown__icon">
                    {servicesDropdown.isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
                            <path d="M17.9998 15C17.9998 15 13.5809 9.00001 11.9998 9C10.4187 8.99999 5.99985 15 5.99985 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#000000" fill="none">
                            <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    )}
                </span>
            </div>

            {servicesDropdown.isOpen && (
                <div className="custom-dropdown__options" ref={servicesDropdown.ref}>
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className="custom-dropdown__item"
                            onClick={() => handleSelect(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomDropdown;
