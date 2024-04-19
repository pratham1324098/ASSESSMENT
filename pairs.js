function pairs(obj) {
    const keyValuePairs = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        keyValuePairs.push([key, obj[key]]);
      }
    }
    return keyValuePairs;
  }