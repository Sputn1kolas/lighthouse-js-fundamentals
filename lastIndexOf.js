var lastIndexOf = function(array, value){
  var i = (array.length - 1)
  for(i ; i >= -1; i--) {
    if (array[i] == value) {
      return(i)
    } else if (i == -1 || array[i] == undefined) {
      return -1
    }
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1));