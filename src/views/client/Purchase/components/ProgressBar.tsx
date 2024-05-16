import { NavLink } from "react-router-dom";

function ProgressBar() {
    const styles: any = {
        overflow: "hidden",
        overflowX: "auto",
        WebkitScrollbar: {
            display: "none",
        },
        msOverflowStyle: "none",
        scrollbarWidth: "none",
    };

    const baseClass = "p-2 border-b-2 border-[#E8E8E8] hover:text-[#F84A2F] hover:border-[#F84A2F]";

    return (
        <div className="box-border bg-white" style={styles}>
            <div className="grid grid-cols-7 text-center font-medium min-w-[900px]">
                <NavLink
                    className={({ isActive }) =>
                        `${baseClass} ${isActive ? 'border-[#F84A2F] text-[#F84A2F]' : ''}`
                    }
                    to="/purchase"
                    end
                >
                    All
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        `${baseClass} ${isActive ? 'border-[#F84A2F] text-[#F84A2F]' : ''}`
                    }
                    to="/purchase/pay"
                >
                    To Pay
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        `${baseClass} ${isActive ? 'border-[#F84A2F] text-[#F84A2F]' : ''}`
                    }
                    to="/purchase/ship"
                >
                    To Ship
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        `${baseClass} ${isActive ? 'border-[#F84A2F] text-[#F84A2F]' : ''}`
                    }
                    to="/purchase/receive"
                >
                    To Receive
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        `${baseClass} ${isActive ? 'border-[#F84A2F] text-[#F84A2F]' : ''}`
                    }
                    to="/purchase/completed"
                >
                    Completed
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        `${baseClass} ${isActive ? 'border-[#F84A2F] text-[#F84A2F]' : ''}`
                    }
                    to="/purchase/cancelled"
                >
                    Cancelled
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        `${baseClass} ${isActive ? 'border-[#F84A2F] text-[#F84A2F]' : ''}`
                    }
                    to="/purchase/return"
                >
                    Return/Refund
                </NavLink>
            </div>
        </div>
    );
}

export default ProgressBar;
