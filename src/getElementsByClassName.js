// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  // Brian's Solution ----------
  var children = [];
  var child = document.body;

  var checkChild = function(child) {
    if (child.classList && child.classList.contains(className)) {
      children.push(child);
    }
    for (var i = 0; i < child.childNodes.length; i++) {
      checkChild(child.childNodes[i]);
    }
  };
  checkChild(child);
  return children;


  // Fernando's Solution ----------
  // assign node as itself or doc.body
  // node = node || document.body;

  // // declare result as empty array
  // var result = [];

  // // BASE CASE ---
  // // if classList exist AND className exist inside node
  // if (node.classList && node.classList.contains(className)) {
  //   // push node to result array
  //   result.push(node);
  // }
  // // RECURSIVE CASE ---
  // // use reduce to iterate through node.childNodes
  // return _.reduce(node.childNodes, function(accumulator, currentValue, collection) {
  //   // concat accumulator while invoking the recursive function, while inputting node
  //   accumulator = accumulator.concat(getElementsByClassName(className, currentValue));
  //   // return accumulator
  //   return accumulator;
  // }, result);
};
