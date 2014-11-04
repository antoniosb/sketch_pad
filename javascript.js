function drawGrid(size){
    for(i=0; i< size; i++){
        var id = 'line'+i;
        $('#container').append("<span class=line id="+id+"></span>");
        for(j=0; j< size; j++){
            $("#".concat(id)).append("<div class='grid'></div>");
        }
        $('#container').append('</br>');
    }   
}

function colorizeGrid(){
    $('.grid').mouseenter(function(){
        $(this).css('background-color','#00B200');
        var opac = $(this).attr('opac');
        if (typeof opac !== typeof undefined && opac !== false) {
            $(this).css('opacity', opac);
            opac = parseFloat(opac)+0.1;
            $(this).attr('opac',opac);
        }else{
            $(this).attr('opac',0.1);
            $(this).css('opacity', 0.1);
        }
    });   
}


$(document).ready(function(){
  $('body').append("<div id='container'></div>");
  $('body').prepend("<button type='button'>Clear Grid</button></br>");

  drawGrid(16);
  colorizeGrid();

  $('button').click(function(){
   $('.line').remove();
    var size = parseInt(prompt("How many squares per line do you want?"));
    if(isNaN(size)){
         alert('Please provide a valid number.');   
    }else{
        drawGrid(size);
        colorizeGrid();
    }
  });
});