const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

function mapObject(obj, cb) {
    const transformedObj = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        transformedObj[key] = cb(obj[key]);
      }
    }
    return transformedObj;
  }
  function double(value) {
    return value * 2;
  }
  console.log(mapObject(testObject,double));