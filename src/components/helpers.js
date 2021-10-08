export const handleResponse = (response) => {
    return response.json().then(json => {
        return response.ok ? json : Promise.reject(json);
    });
}

// For the images 
export const importAllSymbols = (r) => {
  let images = {};
  r.keys().map((item, index) => {
  		images[item.replace('./', '').split('.')[0]] = r(item);
  		}); 
  return images;
}