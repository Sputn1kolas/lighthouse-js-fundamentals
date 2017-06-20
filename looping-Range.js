var range = function (start, end, step){
  var array = [];
  if(start == undefined || end == undefined || step == undefined || start > end || step < 0) {
    return array
  } else {
    for (start; start <= end; start += step) {
      array.push(start)
      }
    return array
    }
}


console.log(range(8,40,8))