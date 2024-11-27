import { ReactNode } from "react";

export interface LayoutProps {
    children: ReactNode;
  }
  // 
  export interface User {
    id: string;
    email: string;
    name?: string;
    token?: string;
  }
  
  export interface Account {
    provider: string;
    type: string;
  }
  export interface Auth {
    user?: User;
  }
  
  export interface Token {
    user?: User;
  }
  
  export interface Session {
    user?: User;
    accessToken?: string;
  }
  
  export interface RedirectParams {
    url: string;
    baseUrl: string;
  }