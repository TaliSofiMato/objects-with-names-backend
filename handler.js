"use strict";

module.exports.getNames = async (event) => {
  let x = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(
      getNamesFromDatabase(),
      null,
      2
    ),
  };
return x
};

const getNamesFromDatabase =() => {
  return [  {
  "Name": 'Natalia',
  "id": 1,
  "completed": true
},
{
  "Name": 'Roman',
  "id": 2,
  "completed": true
},
{
  "Name": 'Randy',
  "id": 3,
  "completed": true
},
{
  "Name": 'Alina',
  "id": 4,
  "completed": false
},
{
  "Name": 'Francisco',
  "id": 5,
  "completed": false
}
]}