const pool = require("./pool");

// exports.dbQuery = (queryText, queryParams) => {
//   return new Promise((resolve, reject) => {
//     pool
//       .query(queryText, queryParams)
//       .then((res) => {
//         console.log("resolve");
//         resolve(res);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// };

exports.dbQuery = (queryText, queryParams) => pool.query(queryText, queryParams);