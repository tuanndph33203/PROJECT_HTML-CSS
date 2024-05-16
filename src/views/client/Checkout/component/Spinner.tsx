const Spinner = () => {
    return (
        <div className="grid gap-y-5">
            <div className="flex items-center justify-center space-x-2">
                <div className="spinner-border animate-spin inline-block w-16 h-16 border-8 rounded-full" role="status">
                    <div className="bg-black w-[8px] h-[8px]"></div>
                </div>
            </div>
            <span>Please wait for us to process your order !</span>
        </div>
    );
};

export default Spinner;
