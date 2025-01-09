// import React from 'react';
// const express = require("express");
// const mysql =require("mysql");
// const cors =require("cors");

// const app = express();
// const use = cors();
// app.use(express.static("public"));
// app.use(express.json());
// // connecting to mysql
// const con = mysql.createConnection({
//   host:"localhost",
//   user:"root",
//   password:"Muemah1164",
//   database:"urlshortener"
// });
// con.connect(function (error){
//   if(error){
//     console.log("Database Connection Failed...")
//   }
// });
// app.get("", function(res,req){
//   res.sendFile(__dirname +"/public/index.html");
// });
// app.post("https://api-ssl.bitly.com/v4/shorte", function(res, req){
//   let uniqueID = math.random().toString(36).replace(a-z0-9/g1,'').substr(2,10);
//   let sql =`INSERT INTO links(longUrl,shortUrlId) VALUES('${request.body.longUrl}','${uniqueID}')`;
//   con.query(sql, function (error,result){
//     if(error){
//       res.status(500).json({
//         status:"not ok",
//         message:"Something went wrong"
//       });
//     } else {
//       res.status(200).json({
//         status:"ok",
//         shortUrlId:uniqueID
//       });
//     }
//   }); 
//   console.log(result)
//   app.get("", function(res, req){
//     let sql = `SELECT + FROM links`;
//     con.query(sql,function(error,result){
//       if(error){
//         res.status(500).json({
//           status:"not ok",
//           message:"Something went wrong"
//         });
//       } else {
//         res.status(200).json(result);
//       }
//     });
//   });
// });

// const port = 5000
// app.listen(port, ()=>{
//     console.log(`you are listening to port :${port}`)
// });
