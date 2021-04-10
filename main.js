var array;
fetch("data.json")
  .then(response => response.json())
  .then(json => array = json);

