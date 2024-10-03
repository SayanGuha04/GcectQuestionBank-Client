const moduleOptions = () => {
  return fetch("http://localhost:5000/getFilters/modules")
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json(); // Return the parsed JSON
      })
      .then(data => {
        return ['All Modules', ...data];
      });
};
  
  export default moduleOptions;
  