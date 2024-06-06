// services/myService.js
export default {
  fetchData: async (/* arguments */) => {
    const data = await new Promise((resolve) => resolve({ message: 'Data from service' }));
    return data;
  },
};

