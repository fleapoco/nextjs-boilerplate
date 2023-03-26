export interface IUserReduxState {
  email: string;
}

export interface IGlobalReduxState {
  loading: boolean;
}

export interface IFetchAPICall {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  data?: any;
}

export interface IPageProps {
  status: boolean;
  data: any;
}
