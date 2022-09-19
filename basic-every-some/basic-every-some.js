function checkUsesValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function (submittedUser) {
      return goodUsers.some(function (goodUser) {
        return goodUser.id === submittedUser.id;
      });
    });
  };
}
module.exports = checkUsesValid;

// function checkUsersValid(goodUsers) {
//   return function allUsersValid(submittedUsers) {
//     return submittedUsers.every((user) => goodUsers.includes(user));
//   };
// }

// module.exports = checkUsersValid;
