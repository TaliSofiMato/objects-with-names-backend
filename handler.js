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
module.exports.getName = async (event) => {
  let allNames = getNamesFromDatabase()
  let foundName = allNames.find((Name)=>{
    return Name.id == event.pathParameters.id
    }) 
  return {
    statusCode: 200,
    body: JSON.stringify(foundName)

  };
};

const getNamesFromDatabase =() => {
  return [  {
  "Name": 'Natalia',
  "id": 1,
  "Gender": 'Female'
},
{
  "Name": 'Roman',
  "id": 2,
  "Gender": 'Male'
},
{
  "Name": 'Randy',
  "id": 3,
  "Gender": 'Transgender'
},
{
  "Name": 'Alina',
  "id": 4,
  "Gender": 'Female'
},
{
  "Name": 'Francisco',
  "id": 5,
  "Gender": 'Male'
}
]}