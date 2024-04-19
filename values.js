const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

function values(obj) {
    return Object.values(obj).filter(value => typeof value !== 'function');
  }
  console.log(values(testObject));