fetch(`https://run.mocky.io/v3/010e898c-a05c-4a0a-b947-2a65b5a267c5`).then(
  
    res => {
      res.json().then(
        data => {
          console.log(data);
          if (data.length > 0) {
  
            var temp = "";
            data.forEach((itemData) => {
              temp += "<tr onclick=display_data("+ itemData+")>";
              temp += "<td>" + itemData.first_name+ "</td>";
              temp += "<td>" + itemData.last_name+ "</td>";
              temp += "<td>" + itemData.username + "</td>";
              temp += "<td>" + itemData.employment.title+ "</td>";
              temp += "<td>" + itemData.address.country+"</td></tr>";
              
            });
            document.getElementById('data').innerHTML = temp;
          }
        }
      )
    }
  );
  function display_data(data)
  {
    document.write(data)
  }