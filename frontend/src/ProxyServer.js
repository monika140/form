import React, { useEffect } from 'react';
import axios from 'axios';

const ProxyServer = () => {
  useEffect(() => {
    const startProxyServer = async () => {
      const response = await axios.get('https://cors.bridged.cc/https://cors-anywhere.herokuapp.com/');
      console.log('Proxy Server Started:', response.data);
    };

    startProxyServer();
  }, []);

  return null; // This component doesn't render anything
};


export default ProxyServer;
