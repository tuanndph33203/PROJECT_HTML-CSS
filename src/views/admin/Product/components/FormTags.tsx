import React from 'react';

interface FormTagsProps {
    label: string;
    name: string;
    type: string;
    value: string | number;
    onChange: (event: any) => void;
    placeholder: string;
    min?: number;
}
const FormTags = ({ label, name, type, value, onChange, placeholder, min }: FormTagsProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue: string = e.target.value;
        const arrayFromString: string[] = inputValue.split(','); // Tách chuỗi thành mảng các chuỗi con bằng dấu phẩy
        onChange({ target: { name: "tags", value: arrayFromString } });
    }    
    return (
        <div className="w-full sm:w-1/2">
            <label className="mb-3 block text-sm font-medium text-black" htmlFor={name}>
                {label}
            </label>
            <input
                onChange={handleChange}
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

export default FormTags;
