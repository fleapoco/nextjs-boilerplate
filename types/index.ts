export interface IUserReduxState {
  email: string;
  _id: string;
}

export interface IGlobalReduxState {
  loading: boolean;
}

export interface IFetchAPICall {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  data?: any;
  token?: string;
}

export interface IPageProps {
  status: boolean;
  data: any;
  message?: string;
}
