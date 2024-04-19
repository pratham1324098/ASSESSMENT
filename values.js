function values(obj) {
    return Object.values(obj).filter(value => typeof value !== 'function');
  }