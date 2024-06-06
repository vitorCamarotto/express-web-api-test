// services/myService.js
module.exports = {
  fetchData: async (/* arguments */) => {
    const data = await new Promise((resolve) => resolve({ message: 'Data from service' }));
    return data;
  },
};

