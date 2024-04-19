const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
function defaults(obj, defaultProps) {
    for (const key in defaultProps) {
      if (!obj.hasOwnProperty(key) || obj[key] === undefined) {
        obj[key] = defaultProps[key];
      }
    }
    return obj;
  }
  console.log(defaults(testObject));