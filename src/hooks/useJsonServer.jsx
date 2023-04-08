import { useState, useEffect } from 'react';
import axios from 'axios';

// notes:
// the data has latest data only on inital call of the hook,
// for the rest of the tiem it will ahve a cache of the most recent data not exactly the data in DB at that time, but the data that was in DB before that!
// either make it have latest data or make each hook method return it's response data there and then!

const useJsonServer = (resourceUrl) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchAll();
  }, [resourceUrl]);

  const fetchAll = async () => {
    try {
      const response = await axios.get(resourceUrl);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const get = async () => {
    try {
      const response = await axios.get(resourceUrl);
      setData(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const create = async (newData) => {
    try {
      const response = await axios.post(resourceUrl, newData);
      setData([...data, response.data]);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const update = async (id, updatedData) => {
    try {
      const response = await axios.put(`${resourceUrl}/${id}`, updatedData);
      const updatedIndex = data.findIndex((item) => item.id === id);
      const updatedArray = [...data];
      updatedArray[updatedIndex] = response.data;
      setData(updatedArray);
      return updatedArray;
    } catch (error) {
      console.error(error);
    }
  };

  const remove = async (id) => {
    try {
      await axios.delete(`${resourceUrl}/${id}`);
      const filteredArray = data.filter((item) => item.id !== id);
      setData(filteredArray);
      return filteredArray;
    } catch (error) {
      console.error(error);
    }
  };

  const filter = async (property, query) => {
    try {
      const response = await axios.get(`${resourceUrl}/?${property}=${query}`);
      setData(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const withCustomQuery = async (query) => {
    try {
      const response = await axios.get(`${resourceUrl}/${query}`);
      setData(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  return { data, get, create, update, remove, filter, withCustomQuery };
};

export default useJsonServer;
