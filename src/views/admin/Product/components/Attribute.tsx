import { useState } from 'react';

interface ColorItem {
    nameValue: string;
    stock: number;
}

const ColorPicker = ({ attributes, setAttributes }: any) => {
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [quantity, setQuantity] = useState<number>(1);
    const [price, setPrice] = useState<number>(1000);

    const listColor = ["gray", "red", "orange", "yellow", "green", "teal", "blue", "indigo", "purple", "pink", "silver", "black"];

    const handleColor = (color: string) => {
        const isSelected = attributes.some((item: ColorItem) => item.nameValue === color);
        setSelectedColor(isSelected ? null : color);
    };

    const addColor = () => {
        if (selectedColor && !attributes.find((item: ColorItem) => item.nameValue === selectedColor)) {
            if (quantity > 0 && price >= 1000) {
                setAttributes([...attributes, { nameValue: selectedColor, price: price, stock: quantity }]);
                setSelectedColor(null);
                setQuantity(1);
                setQuantity(1000);
            } else {
                alert("Please enter a valid quantity.");
            }
        }
    };

    const removeColor = (color: string) => {
        setAttributes(attributes.filter((item: ColorItem) => item.nameValue !== color));
    };

    return (
        <div className="order-2 col-span-5 xl:col-span-2">
            <div className="rounded-sm bg-white border border-stroke bg-shadow-default dark:border-strokedark">
                <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                    <h3 className="font-normal text-black">
                        Product Color
                    </h3>
                </div>
                <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                    <div className="flex flex-wrap">
                        {listColor.map((value, index) => {
                            const isSelected = value === selectedColor;
                            return (
                                <div
                                    key={index}
                                    onClick={() => handleColor(value)}
                                    className={`w-8 h-8 mr-4 mb-4 cursor-pointer ${isSelected ? 'border-2 border-black' : ''}`}
                                    style={{ backgroundColor: value }}
                                ></div>
                            );
                        })}
                    </div>
                    <div className="mb-5 gap-5">
                        <div className="w-full flex flex-col gap-5 sm:flex-row mb-5">
                            <div className='w-full sm:w-1/2'>
                                <label className="mb-3 block text-sm font-medium text-black" htmlFor="quantity">Price</label>
                                <input
                                    onChange={(e) => setPrice(parseInt(e.target.value))}
                                    className="w-full rounded border border-stroke bg-[#F1F5F9] py-2 px-4 font-normal text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
                                    type="number"
                                    min={1000}
                                    name="price"
                                    id="price"
                                    placeholder="price"
                                    defaultValue={price}
                                />
                            </div>
                            <div className='w-full sm:w-1/2'>
                                <label className="mb-3 block text-sm font-medium text-black" htmlFor="quantity">Stock</label>
                                <input
                                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                                    className="w-full rounded border border-stroke bg-[#F1F5F9] py-2 px-4 font-normal text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
                                    type="number"
                                    min={1}
                                    name="quantity"
                                    id="quantity"
                                    placeholder="quantity"
                                    defaultValue={quantity}
                                />
                            </div>
                        </div>
                        <button
                            className={`w-full sm:w-4/12 py-2 px-4 rounded font-light text-white flex-grow ${selectedColor ? 'bg-sky-600 hover:bg-opacity-90' : 'bg-gray-400 cursor-not-allowed'}`}
                            onClick={addColor}
                            disabled={!selectedColor}
                        >
                            Add Color
                        </button>
                    </div>
                    <div className="relative overflow-x-auto w-full">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs uppercase bg-gray-50 dark:bg-[#1A222C] text-white">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Attribute
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Stock
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Remote
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {attributes.map((colorItem: any, index: number) => (
                                    <tr key={index} className="bg-white border-b dark:bg-[#24303F] dark:border-gray-700">
                                        <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <div className="w-8 h-8 mr-4 cursor-pointer" style={{ backgroundColor: colorItem.nameValue }}></div>
                                            <span className='none sm:block'>{colorItem.nameValue}</span>
                                        </th>
                                        <td className="px-6 py-4">
                                            {colorItem.price}
                                        </td>
                                        <td className="px-6 py-4">
                                            {colorItem.stock}
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="ml-2 text-red-500" onClick={() => removeColor(colorItem.nameValue)}>
                                                <svg className="fill-current" width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z" />
                                                    <path d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z" />
                                                    <path d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z" />
                                                    <path d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                    <ul>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ColorPicker;
