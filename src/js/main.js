require.config({
    baseUrl: 'js/lib',
    paths: {
        components: "../components",
        app: '../app',
        react: 'react-with-addons',
        reactDOM:'react-dom',
        JSXTransformer: 'JSXTransformer'
    },
    jsx: {
        fileExtension: '.jsx',
        harmony: true,
        stripTypes: true
    }
});
require(['app/cal', 'jquery', 'react','reactDOM',"jsx!components/Panel"], function(cal, $,React,ReactDOM,Panel) {
    // App.initialize();
    ReactDOM.render(React.createElement(Panel, null),document.getElementById('panel'));
    console.log(cal.min(2, 1));
    $.ajax({
        url: "/test",
        type: "get",
        success: function(data) {
            console.log(data);
        }
    })
})
