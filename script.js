// const rect = async function () {
//   const data1 = Promise.all([
//     fetch("https://restcountries.com/v2/name/uzbekistan"),
//     fetch("https://restcountries.com/v2/name/usa"),
//     fetch("https://restcountries.com/v2/name/russiya"),
//   ]);

//   let timeout = function (sekund) {
//     return new Promise(function (resolve) {
//       setTimeout(() => {
//         resolve("Internet sekin mutant");
//       }, sekund * 1000);
//     });
//   };
//   const data = await Promise.race([data1, timeout(0.2)]);
//   // console.log(data);
//   // console.time("loop");
//   // const data = await Promise.all([
//   //   fetch("https://restcountries.com/v2/name/uzbekistan"),
//   //   fetch("https://restcountries.com/v2/name/usa"),
//   //   fetch("https://restcountries.com/v2/name/russiya"),
//   // ]);

//   // // const data = await fetch("https://restcountries.com/v2/name/uzbekistan");
//   // // const data1 = await fetch("https://restcountries.com/v2/name/usa");
//   // // const dataJson = await data.json();
//   // // return dataJson;

//   console.log(data);
//   // console.timeEnd("loop");
// };
// rect();
