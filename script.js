var userlist;

fetch(`https://run.mocky.io/v3/010e898c-a05c-4a0a-b947-2a65b5a267c5`).then(
  
    res => {
      res.json().then(
        data => {
          console.log(data);
          if (data.length > 0) {
            this.userlist = data;
  
            var temp = "";
            let i = 0;
            data.forEach((itemData) => {
              temp += `<tr onclick='displaydata(${i})'>`;
              temp += "<td>" + itemData.first_name+ "</td>";
              temp += "<td>" + itemData.last_name+ "</td>";
              temp += "<td>" + itemData.username + "</td>";
              temp += "<td>" + itemData.employment.title+ "</td>";
              temp += "<td>" + itemData.address.country+"</td></tr>";
              i++;
            });
            document.getElementById('data').innerHTML = temp;
          }
        }
      )
    }
  );
  function displaydata(index)
  {
    console.log("data",index);
    console.log(this.userlist[index]);
  }