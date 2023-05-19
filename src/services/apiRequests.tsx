import React, { useState, useEffect } from "react";
import { json } from "stream/consumers";
import { tokenToString } from "typescript";
import Logout from "../components/Logout";

interface IRequest {
  baseUrl?: string;
  url: string;
  get?: boolean;
  body?: object;
}
interface IToken {
  accessToken: string;
  refreshToken: string;
}

const base = "http://localhost:9000";

const postData = async ({ baseUrl = base, url, body, get }: IRequest) => {
  try {
    let config: {
      [key: string]: any;
    } = {};
    config["method"] = get ? "GET" : "POST";
    let tokens: any = gettoken("tokens");
    console.log({auth_tokens: tokens})
  
      config["headers"] = {
        "Content-Type": "application/json",
        Authorization: `Basic ${tokens?.accessToken}`,
      };
    console.log(body);
    if (body) config["body"] = JSON.stringify(body);

    const request = await fetch(baseUrl + "/" + url, config)
      .then(async (response) => {
        const isJson = response.headers
          .get("content-type")
          ?.includes("application/json");
        const data = isJson ? await response.json() : null;
        response.headers.forEach((val, key) => {
          if (key === "token") {
            console.log("Refresh Token: ", val);
          }
        });
        if (response.status === 401) {
          Logout();
        }

        if (data?.accessToken) {
          settoken({ key: "token", data: data.accessToken });
        }

        return data;
      })
      .catch((error) => {
        const e = error.message || "An error has occured";
        console.error("There was an error!", error);
        return { status: false, message: e };
      });
    return request;
  } catch (e: any) {
    return { status: false, message: e.message || "An error has occured" };
  }
};


export const getId = (key:string) => {
    try {
        const userData = window.localStorage.getItem(key);
        if (userData) return JSON.parse(userData);
    
        return {userData}
    
        // return null;
      } catch (e) {
        console.error(e);
        return null;
      }
}

const gettoken = (key: string) => {
  try {
    const tokens = window.localStorage.getItem(key);
    if (tokens) return JSON.parse(tokens);

    return null

    // return null;
  } catch (e) {
    console.error(e);
    return null;
  }
};

const settoken = ({ key, data }: { key: string; data: object }) => {
  try {
    console.log(data);
    return window.localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error(e);
    return false;
  }
};

const cleartoken = async (key?: string) => {
  try {
    key = key || "all";
    if (key === "all") return window.localStorage.clear();
    window.localStorage.removeItem(key);
  } catch (e) {
    console.error(e);
    return false;
  }
};




export { postData, gettoken, settoken, cleartoken };
