// import { json2csv } from "json-2-csv";
import { getSession } from "next-auth/react";
// import * as XLSX from "xlsx";


export const getClientAccessToken = async () => {
  const session = await getSession();
  const accessToken = session?.accessToken;

  return accessToken;
};