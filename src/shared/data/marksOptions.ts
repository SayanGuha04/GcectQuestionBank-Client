const marksOptions = () => {
    return fetch("http://localhost:5000/getFilters/marks")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Return the parsed JSON
        })
        .then(data => {
          return ['All Marks', ...data];
        });
  };
    
    export default marksOptions;
    