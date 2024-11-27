'use client';

import { axiosAuth } from '@/lib/axios';
import { getSession } from 'next-auth/react';
import { useEffect } from 'react';
import {getClientAccessToken} from "@/utilities/common"

const useAxiosAuth = () => {
  const { data: session }:any = getSession();

  useEffect(() => {
    const requestIntercept = axiosAuth.interceptors.request.use(
     async (config) => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] =
            `token ${await getClientAccessToken()}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );

    const responseIntercept = axiosAuth.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 401 && !prevRequest?.sent) {
          prevRequest.sent = true;
          prevRequest.headers['Authorization'] =
            `token ${await getClientAccessToken()}`;
          return axiosAuth(prevRequest);
        }
        return Promise.reject(error);
      },
    );

    return () => {
      axiosAuth.interceptors.request.eject(requestIntercept);
      axiosAuth.interceptors.response.eject(responseIntercept);
    };
  }, [session]);

  return axiosAuth;
};

export default useAxiosAuth;
