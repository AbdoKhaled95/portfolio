import axios from "axios";
import { toast } from "react-toastify";

const sendMessage = async (values, actions) => {
  try {
    const response = await axios.post(`support`, values);
    console.log(response);

    if (response?.data?.status === 1 && response?.data?.message === "success") {
      toast.success(response?.data?.message);
      actions.resetForm();
    } else if (response?.data?.status === 0) {
      toast.error(response?.data?.message);
    }
  } catch (error) {
    toast.error(
      error?.message || error?.response?.date?.message || "Something went wrong"
    );
  }
};
export default sendMessage;
