import { useState, useEffect } from 'react';
import axios from 'axios';

const useJsonServer = (resourceUrl) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchAll();
  }, []);

  const fetchAll = async () => {
    try {
      const response = await axios.get(resourceUrl);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const create = async (newData) => {
    try {
      const response = await axios.post(resourceUrl, newData);
      setData([...data, response.data]);
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
    } catch (error) {
      console.error(error);
    }
  };

  const remove = async (id) => {
    try {
      await axios.delete(`${resourceUrl}/${id}`);
      const filteredArray = data.filter((item) => item.id !== id);
      setData(filteredArray);
    } catch (error) {
      console.error(error);
    }
  };

  const filter = async (property, query) => {
    try {
      const response = await axios.get(`${resourceUrl}/?${property}=${query}`);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return { data, create, update, remove, filter };
};

export default useJsonServer;
