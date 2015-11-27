requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app'
        react: 'react-with-addons.min',
        "JSXTransformer": 'JSXTransformer',
        jsx: 'jsx'
    }
});
require(['app/cal','jquery'],function(cal,$){
    console.log(cal.min(2,1));
    $.ajax({
      url:"/test",
      type:"get",
      success:function(data){
        console.log(data);
      }
    })
})
