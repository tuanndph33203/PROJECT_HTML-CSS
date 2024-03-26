import { toast } from 'react-toastify';
import { Bounce } from 'react-toastify';

type useTypeToast = "success" | "info" | "warning" | "error" | "default";
const toastOptions:any = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  };
function Toast({type, report}:{type: useTypeToast, report: string}) {
  switch (type) {
    case "success":
      toast.success(report, toastOptions);
      break;
    case "info":
      toast.info(report, toastOptions);
      break;
    case "warning":
      toast.warning(report, toastOptions);
      break;
    case "error":
      toast.error(report, toastOptions);
      break;
    default:
      toast(report, toastOptions);
      break;
  }

  return null;
}

export default Toast;
