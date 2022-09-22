import axios from "axios";

export const baseURL = "https://solar-system-762b7-default-rtdb.europe-west1.firebasedatabase.app/";

export const client = axios.create({ baseURL });