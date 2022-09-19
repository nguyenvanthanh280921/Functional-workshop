function getShortMessages(messages) {
  return messages
    .map(function (item) {
      return item.message;
    })
    .filter(function (item) {
      return item.length <= 50;
    });
}
module.exports = getShortMessages;

////////////////////////////////////////////////////////////
// function getShortMessages(messages) {
//   return messages
//     .map(function (obj) {
//       return obj.message;
//     })
//     .filter(function (obj) {
//       return obj.length <= 50;
//     });
// }
// module.exports = getShortMessages;
///////////////////////////////////////////////////////////
// module.exports = function getShortMessages(messages) {
//   return messages
//     .filter(function (item) {
//       return item.message.length < 50;
//     })
//     .map(function (item) {
//       return item.message;
//     });
// };
