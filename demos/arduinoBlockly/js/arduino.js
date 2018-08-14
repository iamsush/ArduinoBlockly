var workspace = Blockly.inject('blocklyDiv',
    {toolbox: document.getElementById('toolbox')});
$(document).ready(function () {
  $("#getCode").click(function() {
    window.LoopTrap = 1000;
    Blockly.JavaScript.INFINITE_LOOP_TRAP = 'if(--window.LoopTrap == 0) throw "Infinite loop.";\n';
    var code = JSON.parse(Blockly.JavaScript.workspaceToCode(workspace));
    console.log(code);
    Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
    try{
      $.post("http://localhost:3000/getCode",
      code,
      function(data,status){
          alert(data.msg);
      });

    }catch (e){
      console.log(e);
    }
  })
});

$(document).ready(function () {
  $("#compileCode").click(function() {

    $.get("http://localhost:3000/compileCode",
    function(data,status){
        alert('Code compiled, wait for few seconds');
    });
  })
});

// $(document).ready(function () {
//   $("#runCode").click(function() {
//     $.get("http://localhost:3000/runCode",
//     function(data,status){
//         console.log(data);
//     });
//   })
// });
