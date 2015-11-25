requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app'
    }
});
require(['app/add','jquery'],function(add,$){
    $.ajax({
      url:"/test",
      type:"get",
      success:function(data){
        console.log(data);
      }
    })
})
