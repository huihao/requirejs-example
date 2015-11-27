define(['./operation'],function(operation){
  var add=function(a,b){
  	var an=a+b;
    return a+operation.add+b+"的结果为："+an;
  }
  return add;
})
