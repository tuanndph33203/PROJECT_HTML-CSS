import useProductMutation from "@/hooks/useMutation";
import useCategoryQuery from "@/hooks/useCategory";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { productValidate } from "@/validate/product";
import ColorPicker from "./components/Attribute";
import ImageUploader from "./components/ImageUploader";
import FormInput from "./components/FormInput";
import FormTags from "./components/FormTags";
import FormCheckBox from "./components/FormCheckbox";

interface ColorItem {
    color: string;
    quantity: number;
}
const ProductCreate = () => {
    const { mutate } = useProductMutation({ action: "CREATE" });
    const [attributes, setAttributes] = useState<ColorItem[]>([]);
    const { data, isLoading, isError } = useCategoryQuery();
    const [product, setProduct] = useState<any>({});
    const handleCreateProduct = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const { error, value } = productValidate(product);
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
        const { name, value, checked } = event.target;
        const newValue = event.target.type === 'checkbox' ? checked : value;
        setProduct({
            ...product,
            [name]: newValue,
        });
        console.log(product);

    };
    useEffect(() => {
        setProduct({
            ...product,
            attributes,
        });
        console.log(product);

    }, [attributes])
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error</p>;
    return (
        <>
            <div className="mx-auto max-w-screen-2xl py-5 md:px-8 xl:px-10 text-black bg-[#F1F5F9]">
                <div className="mx-auto max-w-270">
                    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <h2 className="text-title-md2 font-bold">Product Page</h2>
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
                                    <h3 className="font-semibold text-black">Product Information</h3>
                                </div>
                                <div className="p-7">
                                    <div className="mb-5 flex flex-col gap-5 sm:flex-row">
                                        <FormInput
                                            label="Name Product"
                                            name="name"
                                            type="text"
                                            value={product.name || ''}
                                            onChange={handleChange}
                                            placeholder="product"
                                        />
                                        <FormTags
                                            label="Tags"
                                            name="tags"
                                            type="text"
                                            value={product.tags || ''}
                                            onChange={handleChange}
                                            placeholder="tags"
                                        />
                                    </div>
                                    <div className="my-5">
                                        <label className="mb-3 block text-sm font-medium text-black" htmlFor="description">Description</label>
                                        <textarea
                                            onChange={handleChange}
                                            className="w-full rounded border border-stroke bg-[#F1F5F9] py-3 p-4 font-normal text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4  dark:focus:border-primary"
                                            name="description"
                                            id="description"
                                            rows={6}
                                            placeholder="write product description here"
                                            defaultValue={product.description}
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <label className="mb-3 block text-sm font-medium text-black" htmlFor="category">Category</label>
                                        <select
                                            name="category"
                                            onChange={handleChange}
                                            className="relative z-20 w-full appearance-none rounded border border-stroke bg-[#F1F5F9] py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        >
                                            <option className="font-light text-xl from-slate-300">Please choose</option>
                                            {data.data.map((value: { name: string, _id: number }) => (
                                                <option key={value._id} value={value._id}>
                                                    {value.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="mb-5 flex flex-col gap-5 sm:flex-row">
                                        <FormInput
                                            label="Discount"
                                            name="discount"
                                            type="number"
                                            value={product.discount || ''}
                                            onChange={handleChange}
                                            placeholder="discount"
                                            min={0}
                                        />
                                        <FormCheckBox
                                            label="Featured"
                                            name="featured"
                                            type="checkbox"
                                            value={product.featured || false}
                                            onChange={handleChange}
                                            note="(Bán Chạy Trong Tuần *)"
                                        ></FormCheckBox>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ColorPicker attributes={attributes} setAttributes={setAttributes} />
                        <ImageUploader setProduct={setProduct} product={product} handleCreateProduct={handleCreateProduct} btn={'Create Product'} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCreate