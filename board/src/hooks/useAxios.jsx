import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';

const BASE_URL = 'http://localhost:8080/api/v1/';

const useAxios = (baseUrl = BASE_URL) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const {token} = useAuth();

  // const token = 'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzY3NTI4ODIsImV4cCI6MTczOTQzMTI4Miwic3ViIjoidXNlcjEwMEBoamhhbS5jb20ifQ.JHnAu7IkE2PF4WNWSu9CuMgVaGI7W9ZfnHapXueYKtc';
  // const token = '';
    
  const req = useCallback(
    async (method, endpoint, body = null, addHeaders = {}) => {
      setLoading(true)
      setError(null);
      try {
        const resp = await axios({
          method,
          url: `${baseUrl}${endpoint}`,
          data: body,
          headers: {
            'Content-Type':'application/json',
            'Authorization' : `Bearer ${token}`,
            ... addHeaders
          }
        });
        setData(resp.data);
        return resp.data;
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
  , [baseUrl], token);

  return {data, loading, error, req};
}

export default useAxios;
