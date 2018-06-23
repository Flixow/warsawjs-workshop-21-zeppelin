export const objectToFormData = (obj, form, namespace) => {
  const fd = form || new FormData();
  let formKey;

  for (const property in obj) {
    if (obj.hasOwnProperty(property)) {
      if (namespace) {
        formKey = namespace + '[' + property + ']';
      } else {
        formKey = property;
      }

      if (Array.isArray(obj[property])) {
        obj[property].forEach(item => {
          if(typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
            objectToFormData(item, fd, `${property}[]`);
          } else {
            fd.append(`${formKey}[]`, item);
          }
        });
      } else if(!!obj[property] && typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
        objectToFormData(obj[property], fd, property);
      } else {
        fd.append(formKey, obj[property]);
      }
    }
  }

  return fd;
};
