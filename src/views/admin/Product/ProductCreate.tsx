import useProductMutation from "@/hooks/useMutation";
import useCategoryQuery from "@/hooks/useCategory";
import { useState } from "react";
import { Link } from "react-router-dom";
import { productValidate } from "@/validate/product";

const ProductCreate = () => {
    const { mutate } = useProductMutation({action:"CREATE"});
    const { data: categoryData, isLoading, isError } = useCategoryQuery();
    const [file, setSelectedFileName] = useState<string | undefined>();
    const [product, setProduct] = useState<any>({});

    const handleCreateProduct = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const {error,value} = productValidate(product);
            if (error) {
                alert(error);
            } else {
                await mutate(value);
            }
        } catch (error) {
            console.log(error);
        }
    };
    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };
    const handleUpload = (event: any) => {
        const fileName = event.target.files?.[0]?.name;
        if (fileName) {
            setProduct({
                ...product,
                image: fileName 
            });
            setSelectedFileName(fileName);
        }
    };
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error</p>;
    return (
        <>
            <div className="mx-auto max-w-screen-2xl py-5 md:px-8 xl:px-10 text-black bg-[#F1F5F9]">
                <div className="mx-auto max-w-270">
                    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <h2 className="text-title-md2 font-bold">
                            Product Page
                        </h2>
                        <nav>
                            <ol className="flex items-center gap-2">
                                <li><Link className="font-medium" to="/admin/product/create">Add Product /</Link></li>
                                <li><Link className="font-medium" to="/admin">Home Admin</Link></li>
                            </ol>
                        </nav>
                    </div>
                    <div className="grid grid-cols-5 gap-8">
                        <div className="order-1 col-span-5 xl:col-span-3">
                            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                                <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                                    <h3 className="font-semibold text-black ">
                                        Product Information
                                    </h3>
                                </div>
                                <div className="p-7">
                                    <div className="mb-5 flex flex-col gap-5 sm:flex-row">
                                        <div className="w-full sm:w-1/2">
                                            <label className="mb-3 block text-sm font-medium text-black " htmlFor="fullName">
                                                Name Product</label>
                                            <input onChange={handleChange} className="w-full rounded border border-stroke bg-[#F1F5F9] py-3 p-4 font-normal text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4  dark:focus:border-primary" type="text" name="name" id="name" placeholder="product" />
                                        </div>
                                        <div className="w-full sm:w-1/2 md:ml-6">
                                            <label className="mb-3 block text-sm font-medium text-black " htmlFor="phoneNumber">Import Stock</label>
                                            <input onChange={handleChange} className="w-full rounded border border-stroke bg-[#F1F5F9] py-3 px-4 font-normal text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4  dark:focus:border-primary" type="number" min={1} name="inStock" id="inStock" placeholder="stock" />
                                        </div>
                                    </div>
                                    <div className="my-5">
                                        <label className="mb-3 block text-sm font-medium text-black " htmlFor="Username">Description</label>
                                        <textarea onChange={handleChange} className="w-full rounded border border-stroke bg-[#F1F5F9] py-3 p-4 font-normal text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4  dark:focus:border-primary" name="description" id="description" rows={6} placeholder="write product description here" defaultValue={product.description} />
                                    </div>
                                    <div className="mb-5">
                                        <label className="mb-3 block text-sm font-medium text-black " htmlFor="Username">Category</label>
                                        <select name="category" onChange={(e) => handleChange(e)}
                                            className="relative z-20 w-full appearance-none rounded border border-stroke bg-[#F1F5F9] py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                                             <option className="font-light text-xl from-slate-300">Please choose</option>
                                            {categoryData.map((value: { name: string, id: number }) => (
                                                <option key={value.id} value={value.id}>
                                                    {value.name}
                                                </option>
                                            ))}
                                        </select>

                                    </div>
                                    <div className="mb-5 flex flex-col gap-5 sm:flex-row">
                                        <div className="sm:w-1/2 w-full mr-4">
                                            <label className="mb-3 block text-sm font-medium text-black " htmlFor="Username">Price</label>
                                            <input onChange={handleChange} className="w-full rounded border border-stroke bg-[#F1F5F9] py-3 px-4 font-normal text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4  dark:focus:border-primary" type="number" min={0} name="price" id="price" placeholder="price" />
                                        </div>
                                        <div className="sm:w-1/2 w-full">
                                            <label className="mb-3 block text-sm font-medium text-black " htmlFor="emailAddress">Discount</label>
                                            <input onChange={handleChange} className="w-full rounded border border-stroke bg-[#F1F5F9] py-3 p-4 font-normal text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4  dark:focus:border-primary" type="number" min={0} name="discount" id="discount" placeholder="discount" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-2 col-span-5 xl:col-span-2">
                            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                                <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                                    <h3 className="font-normal text-black ">
                                        Product Image
                                    </h3>
                                </div>
                                <div className="p-7">
                                    <div id="FileUpload" className="relative mb-5 block w-full cursor-pointer appearance-none rounded border-2 border-dashed border-primary bg-[#F1F5F9] py-4 px-4 dark:bg-meta-4 sm:py-7.5">
                                        <input name="image" type="file" accept="image/*" className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none" onChange={handleUpload} />
                                        <div className="flex flex-col items-center justify-center space-y-3">
                                            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                                                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z" fill="#3C50E0" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z" fill="#3C50E0" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z" fill="#3C50E0" />
                                                </svg>
                                            </span>
                                            <p className="font-normal text-sm">
                                                <span className="text-primary">Click to upload</span>
                                                or drag and drop
                                            </p>
                                            <p className="mt-1.5 font-normal text-sm">SVG, PNG, JPG or GIF</p>
                                            {file && <p className="mt-1.5 font-normal text-sm">Selected file: {file}</p>}
                                            <img className="max-w-72 max-h-72" src={`/assets/image/product/${file && file}`} alt="" />
                                        </div>
                                    </div>
                                    <div className="flex justify-center gap-5">
                                        <button onClick={handleCreateProduct} className="flex justify-center rounded bg-sky-600 py-2 px-6 font-normal text-gray hover:bg-opacity-90" type="submit">
                                            Create Product
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCreate