//Ryan Hutchings
//Unit 12.3 Exercise: Practicing .find() and .findIndex() methods 

/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/


function findUserByUsername(usersArray, username) {
  //.find helps searchs for one value in arrays
  const findUser = usersArray.find(function (user) {
    return user.username === username; //returns only the username's object
  });

  return findUser;
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

function removeUser(usersArray, username) {
  //finds the index of desired username
  const findIndex = usersArray.findIndex(function (user) {
    return user.username === username;
  });

  const deleteUser = usersArray.find(function (user, idx, arr) {
    //check if the user exists in the array
    if (user.username === username) {
      arr.splice(findIndex, 1); //removes username
      return user.username === username; //returns what was deleted
    }
  });

  return deleteUser;
}