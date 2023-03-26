import fetch from "node-fetch";
import { API_BASE_URL } from "@utils/index";
import { IFetchAPICall } from "@interface/index";

const http = async (path: string, options?: IFetchAPICall) => {
  const url = `${API_BASE_URL}/${path.replace(/^\/+/, "")}`;
  try {
    const raw = await fetch(url, {
      headers: {
        Authorization: `Bearer ${options?.token as string}`,
        "Content-Type": "application/json"
      },
      method: options?.method ?? "GET",
      body: options?.data ? JSON.stringify(options?.data) : undefined
    });
    const data = await raw.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const validate = async (data: { token: string }) => {
  return http(`/validate`, { token: data.token });
};
