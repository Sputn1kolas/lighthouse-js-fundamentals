var calculateRectangleArea= function(length , width) {
   if (length <= 0 || width <= 0){
    return undefined
    } else {
  return (length * width)
  }
}

var calculateTriangleArea = function(base , height) {
  if (base <= 0 || height <= 0){
    return undefined
  } else {
  return (base * height / 2)
  }
}

var calculateCircleArea= function(radius){
  if (radius <= 0) {
    return undefined
    } else {
  return ((radius ** 2) * Math.PI) };
}

