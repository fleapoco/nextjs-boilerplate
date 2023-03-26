import { toast } from "react-hot-toast";

export const errorHandler = ({ error, msg, showError }: { error: any; msg?: string; showError: boolean }) => {
  let message = msg || "";
  if (error.response && error.response.data) message = error.response.data.message;
  else if (error.message) message = error.message;
  else message = "Something went wrong";
  if (showError) toast.error(message);
  return message;
};
