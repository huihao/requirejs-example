require.config({
    baseUrl: 'js/lib',
    paths: {
        components: "../components",
        app: '../app',
        react: 'react-dom',
        "JSXTransformer": 'JSXTransformer'
    },
    jsx: {
        fileExtension: '.jsx',
        harmony: true,
        stripTypes: true
    }
});
require(['app/cal', 'jquery', 'react'], function(cal, $, React) {
    // App.initialize();
    //Panel = React.createFactory(Panel);
    //React.render(Panel,document.getElementById('panel'));
    console.log(React)
    console.log(cal.min(2, 1));
    $.ajax({
        url: "/test",
        type: "get",
        success: function(data) {
            console.log(data);
        }
    })
})
