function defaults(obj, defaultProps) {
    for (const key in defaultProps) {
      if (!obj.hasOwnProperty(key) || obj[key] === undefined) {
        obj[key] = defaultProps[key];
      }
    }
    return obj;
  }