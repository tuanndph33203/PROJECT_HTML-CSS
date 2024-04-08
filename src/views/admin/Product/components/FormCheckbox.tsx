import React from 'react';

interface FormCheckBoxProps {
    label: string;
    name: string;
    type: string;
    value: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    note: string
}
const FormCheckBox = ({ label, name, type, value, onChange, note }: FormCheckBoxProps) => {
    return (
        <div className="w-full sm:w-1/2 grid grid-cols-1">
            <label className="mb-3 text-sm font-medium" htmlFor={name}>
                {label}
            </label>
            <div className="flex h-12 items-center ps-4 border border-gray-200 rounded dark:border-gray-300 bg-[#F1F5F9]">
                <input
                    onChange={onChange}
                    className="py-3 p-4 mr-4 text-blue-600 bg-gray-100 border-gray-300"
                    type={type}
                    name={name}
                    id={name}
                    defaultChecked={value ? value : false}
                />
                <label htmlFor="bordered-checkbox-1" className="w-full py-4 ms-2 text-sm font-normal">{note}</label>
            </div>
        </div>
    );
};

export default FormCheckBox;
