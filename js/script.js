axios.get("/js/hyrule.json").then(function (response) {
  let data = response.data;
  // console.log("data: ", data);
  Array.prototype.forEach.call(data, d => {
    let result = `
        <li class="card col-12 col-md-4 col-lg-2">
          <div class="card-header">
            <h2>${d.regions}<h2>
          </div>
          <ul class="text-center ps-0">
            <li>${d.shrineName}<li>
          </ul>
        </li>`;
    document.querySelector(".data").insertAdjacentHTML("beforeend", result);
  });
});


// const url = "https://sheets.googleapis.com/v4/spreadsheets/1h--ERjPLJDa_b5CtugqlihdEv93E26jT7QFvHKwe-VE/values/table?alt=json&key=AIzaSyAZE7OK6wxpswLMCSBIyg1vucH-EUyUQ4w";

// fetch(url)
//   .then((res) => res.json())
//   .then((res) => {
//     let data = res.values;
//     // 刪除第一個陣列
//     data.shift();
//      Array.prototype.forEach.call(data, d => {
//       let result = `
//         <li class="card col-12 col-md-4 col-lg-2">
//           <div class="card-header">
//             <h2>${d[0]}<h2>
//           </div>
//           <div class="text-center">
//             <p>${d[1]}</p>
//           </div>
//         </li>`;

//       document.querySelector('.data').insertAdjacentHTML('beforeend', result);
//     })
//   });