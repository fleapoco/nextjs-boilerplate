import Cookies from "universal-cookie";
const cookies = new Cookies();

export const validateEmail = (email: string) => {
  if (/^[\w-\.\+]+@([\w-]+\.)+[\w-]{2,10}$/.test(email)) return true;
  return false;
};

export const getBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve({ base64: reader.result, blob: window.URL.createObjectURL(file) });
    reader.onerror = (error) => reject(error);
  });
};

export const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getToken = () => {
  return cookies.get("token");
};
