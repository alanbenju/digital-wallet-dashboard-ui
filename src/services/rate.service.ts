import axios from "axios";
import authHeader from "./data.service";
const API_URL = "http://localhost:3001/rates"; // TODO: env

const fetchRates = () => {
  const authHeaders = authHeader()
  return axios.get(API_URL, { headers: authHeaders as any }).then((response) => {
    return response.data;
  });
};

const updateRate = (id:number, value: number) => {
  const authHeaders = authHeader()
  return axios.put(API_URL+'/'+id, {
    value
  }, {headers: authHeaders as any}).then((response) => {
    return response.data;
  });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchRates,
  updateRate
};
