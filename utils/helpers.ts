import Cookies from 'universal-cookie';
import { ProtectedRoutesRegex } from '.';
const cookies = new Cookies();

export const validateEmail = (email: string) => {
  if (/^[\w-\.\+]+@([\w-]+\.)+[\w-]{2,10}$/.test(email)) return true;
  return false;
};

export const validatePhone = (number: string, format: string) => {
  // Example -
  // Phone - +1 (123) 456-7890
  // Format - +. (...) ...-....

  return format === String(number).replace(/[0-9]/g, '.');
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
  return cookies.get('token');
};

export const setToken = (token: string) => {
  cookies.set('token', token);
};

export const clearToken = () => {
  cookies.remove('token');
};

export const logout = () => {
  cookies.remove('token');
  localStorage.clear();
  sessionStorage.clear();
  window.location.href = '/';
};

export const isRouteProtected = (pathname: string) => {
  return ProtectedRoutesRegex.test('/' + pathname);
};

const inputs: any = {
  phone: {
    minLength: 10,
    maxLength: 15,
    pattern: /^[0-9]+$/
  },
  fssai: {
    minLength: 14,
    maxLength: 14,
    pattern: /^[0-9]+$/
  },
  name: {
    minLength: 3,
    maxLength: 50,
    pattern: /^[a-zA-Z ]+$/
  },
  brandName: {
    minLength: 3,
    maxLength: 50
  },
  pan: {
    minLength: 10,
    maxLength: 10,
    pattern: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
    example: 'XXXXX0000X'
  },
  gst: {
    minLength: 15,
    maxLength: 15,
    pattern: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
    example: '00XXXXX0000XXZX'
  }
};

export const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>, key: string, cb: Function) => {
  const { value } = e.target;
  const { maxLength, pattern, example } = inputs[key];

  if (value === '') return cb(value);
  else if (value.length > maxLength) return;
  else if (pattern && example && pattern && !pattern.test(value + example.slice(value.length))) return;
  else if (pattern && !example && pattern && !pattern.test(value)) return;
  else cb(value);
};
