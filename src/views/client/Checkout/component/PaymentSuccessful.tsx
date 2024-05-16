import { useEffect, useState } from "react";
import Spinner from "./Spinner";

const PaymentSuccessful = (props: any) => {
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => setLoading(false), 2000);
    }, [props.showPayment]);
    if (!props.showPayment) return null;

    return (
        <div className="w-full h-full fixed top-0 right-0 flex items-center justify-center bg-slate-100 bg-opacity-45">
            <div className="sm:w-[385px] sm:min-w-[20vw] min-w-[40vw] min-h-[20vh] flex flex-col items-center gap-2 p-6 bg-[#FFFFEB] rounded-lg">
                {loading ? (
                    <Spinner />
                ) : (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-[#059669] mx-auto h-11 rounded-full bg-[#D1FAE5] w-11" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-2xl font-medium">Buy Successful</span>
                        <p className="text-center">Thank you for buying our product!</p>
                        <button
                            className="mt-4 px-4 py-2 bg-[#059669] text-white rounded-lg"
                            onClick={() => props.setShowPayment(false)}
                        >
                            Close
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default PaymentSuccessful;
