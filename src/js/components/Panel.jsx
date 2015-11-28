define(['react','jsx!./Button'],function(React,Button) {
  var Panel=React.createClass({
      render: function() {
          return ( < div className = "Panel" ><Button />< /div>
          );
        }
  });
    return Panel;
})
