const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

function invert(obj) {
    const invertedObj = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        invertedObj[obj[key]] = key;
      }
    }
    return invertedObj;
  }
  console.log(invert(testObject));