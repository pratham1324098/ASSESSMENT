const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

function pairs(obj) {
    const keyValuePairs = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        keyValuePairs.push([key, obj[key]]);
      }
    }
    return keyValuePairs;
  }
  console.log(pairs(testObject));