const fs = require('fs');

const fileSystem = {
  getFilesData: async (path: string, options = 'utf8') => {
    const read = new Promise((resolve, reject) => {
      fs.readFile(path, options, (err: any, data: any) => {
        if (err) reject(err);
        resolve(data);
      });
    });

    try {
      const data = await read;
      return data;
    } catch (err) {
      console.log(err);
      return null;
    }
  },

  setFilesData: async (path: string, data: any, options = 'utf8') => {
    const setData = new Promise((resolve, reject) => {
      fs.writeFile(path, data, options, (err: any) => {
        if (err) reject(err);
        resolve(true);
      });
    });

    try {
      await setData;
      console.log('set data success');
    } catch (err) {
      console.log('set data failed', err);
    }
  }
};
module.exports = fileSystem;