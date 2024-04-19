function mapObject(obj, cb) {
    const transformedObj = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        transformedObj[key] = cb(obj[key]);
      }
    }
    return transformedObj;
  }