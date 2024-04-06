import React from 'react';

interface FormInputProps {
    label: string;
    name: string;
    type: string;
    value: string | number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    min?: number;
}
const FormInput = ({ label, name, type, value, onChange, placeholder, min }: FormInputProps) => {
    return (
        <div className="w-full sm:w-1/2">
            <label className="mb-3 block text-sm font-medium text-black" htmlFor={name}>
                {label}
            </label>
            <input
                onChange={onChange}
                className="w-full rounded border border-stroke bg-[#F1F5F9] py-3 p-4 font-normal text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4  dark:focus:border-primary"
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                value={value}
                min={min}
            />
        </div>
    );
};

export default FormInput;
