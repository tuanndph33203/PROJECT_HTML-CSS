const Purchase = ({ setPage } : any) => {
    setPage("My Purchase")
    return (
        <>
            <div className="box-border w-full">
                <div className="grid grid-cols-7 p-5 text-center w-screen">
                    <h3>All</h3>
                    <h3>To Pay</h3>
                    <h3>To Ship</h3>
                    <h3>To Receive</h3>
                    <h3>Completed</h3>
                    <h3>Cancelled</h3>
                    <h3>Return/Refund</h3>
                </div>
            </div>
        </>
    )
}

export default Purchase