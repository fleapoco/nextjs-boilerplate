import fetch from "node-fetch";
import { useDispatch } from "react-redux";
import { setLoading } from "../redux/reducers/global";
import { getToken } from "../utils";
import { IFetchAPICall } from "../types";

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const useAPI = () => {
  const dispatch = useDispatch();

  const http = async (path: string, options?: IFetchAPICall) => {
    dispatch(setLoading(true));
    const token = getToken();
    const url = `${BASE_URL}/${path.replace(/^\/+/, "")}`;
    try {
      const raw = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token as string}`,
          "Content-Type": "application/json"
        },
        method: options?.method ?? "GET",
        body: options?.data ? JSON.stringify(options?.data) : undefined
      });
      const data = await raw.json();
      return data;
    } catch (error) {
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  };

  const createUser = async (data: { email: string }) => {
    return http(`/user`, { method: "POST", data });
  };

  const getUser = async (data: { id: string }) => {
    return http(`/user/${data.id}`);
  };

  return { createUser, getUser };
};

export default useAPI;
