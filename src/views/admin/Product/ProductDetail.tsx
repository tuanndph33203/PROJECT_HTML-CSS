import useCategoryQuery from "@/hooks/useCategory";
import useProductMutation from "@/hooks/useMutation";
import useProductQuery from "@/hooks/useProducts";
import { productValidate } from "@/validate/product";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ImageUploader from "./components/ImageUploader";
import ColorPicker from "./components/Attribute";
import FormInput from "./components/FormInput";
import FormTags from "./components/FormTags";

const ProductDetail = () => {
    const { slug } = useParams();
    const { mutate } = useProductMutation({ action: "UPDATE" });
    const { data: product, isLoading: productIsLoading, isError: productIsError } = useProductQuery({ slug });
    const { data, isLoading: categoryIsLoading, isError: categoryIsError } = useCategoryQuery();
    const [updatedProduct, setUpdatedProduct] = useState<any>({});
    const [attributes, setAttributes] = useState<{}[]>([]);
    useEffect(() => {
        if (product) {
            setUpdatedProduct(product);
            setAttributes(product.attributes[0].values)
        }
    }, [product]);
    console.log(updatedProduct);

    if (productIsLoading || categoryIsLoading) return <p>Loading...</p>;
    if (productIsError || categoryIsError) return <p>Error</p>;
    const handleUpdateProduct = async (event: any) => {
        event.preventDefault();
        try {
            const { name, price, image, description, discount, stock, category } = updatedProduct;
            const { error } = productValidate({ name, price, image, description, discount, stock, category });
            if (error) {
                alert(error);
            } else {
                await mutate(updatedProduct);
            }
        } catch (error) {
            console.log(error);
        }
    };
    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setUpdatedProduct({
            ...updatedProduct,
            [name]: value,
        });
        console.log(updatedProduct);
    };

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
                                        <label className="mb-3 block text-sm font-medium text-black " htmlFor="Username">Description</label>
                                        <textarea onChange={handleChange} className="w-full rounded border border-stroke bg-[#F1F5F9] py-3 p-4 font-normal text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4  dark:focus:border-primary" name="description" id="description" rows={6} placeholder="write product description here" defaultValue={product.description} />
                                    </div>
                                    <div className="mb-5">
                                        <label className="mb-3 block text-sm font-medium text-black " htmlFor="Username">Category</label>
                                        <select
                                            name="category"
                                            defaultValue={product.category}
                                            onChange={(e) => handleChange(e)}
                                            className="relative z-20 w-full appearance-none rounded border border-stroke bg-[#F1F5F9] py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        >
                                            {data.data.map((value: { name: string, _id: number }) => (
                                                <option key={value._id} value={value._id}>
                                                    {value.name}
                                                </option>
                                            ))}
                                        </select>

                                    </div>
                                    <div className="mb-5 flex flex-col gap-5 sm:flex-row">
                                        <FormInput
                                            label="Price"
                                            name="price"
                                            type="number"
                                            value={product.price || ''}
                                            onChange={handleChange}
                                            placeholder="price"
                                            min={0}
                                        />
                                        <FormInput
                                            label="Discount"
                                            name="discount"
                                            type="number"
                                            value={product.discount || ''}
                                            onChange={handleChange}
                                            placeholder="discount"
                                            min={0}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ColorPicker attributes={attributes} setAttributes={setAttributes} ></ColorPicker>
                        <ImageUploader setProduct={setUpdatedProduct} product={updatedProduct} handleCreateProduct={handleUpdateProduct} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail