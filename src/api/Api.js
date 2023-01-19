import axios from "axios";
const getMaps = async () => {
  
  return axios
    .get("https://valorant-api.com/v1/maps")
    .then((res) => {
      if (res.data.data) {
        return {
          data: res.data.data,
        };
      }
      return false;
    })
    .catch((error) => false);
};

const getAgents = async () => {
  return axios
    .get("https://valorant-api.com/v1/agents")
    .then((res) => {
      if (res.data.data) {
        return {
          data: res.data.data,
        };
      }
      return false;
    })
    .catch((error) => false);
};

const getWeapons = async (lang) => {
  return axios
    .get(`https://valorant-api.com/v1/weapons?language=${lang}`)
    .then((res) => {
      if (res.data.data) {
        return {
          data: res.data.data,
        };
      }
      return false;
    })
    .catch((error) => false);
};
const getGears = async (lang) => {
  return axios
    .get(`https://valorant-api.com/v1/gear?language=${lang}`)
    .then((res) => {
      if (res.data.data) {
        return {
          data: res.data.data,
        };
      }
      return false;
    })
    .catch((error) => false);
};

const endpoints = {
  getMaps,
  getAgents,
  getWeapons,
  getGears,
};

export default endpoints;

/*
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setMaps } from "stores/slices/maps";
export default function Api() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://valorant-api.com/v1/maps")
      .then((response) => dispatch(setMaps(response.data.data)))
      .catch((error) => console.log(error));
  }, []);
}*/
