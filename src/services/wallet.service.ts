import axios from "axios";
import { IWalletFilters } from "../common/interfaces";
import authHeader from "./data.service";
const API_URL = "http://localhost:3001/wallets"; // TODO: env

const fetchWallets = (filters?: IWalletFilters) => {
  const authHeaders = authHeader()
  let url = API_URL;
  if (filters?.orderBy) url+="?orderBy="+filters.orderBy
  return axios.get(url, { headers: authHeaders as any }).then((response) => {
    return response.data;
  });
};

const toggleFavorite = (id: number) => {
  const authHeaders = authHeader()
  return axios.put(API_URL+'/favorite/'+id, {},{ headers: authHeaders as any }).then((response) => {
    return response.data;
  });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchWallets,
  toggleFavorite
};
