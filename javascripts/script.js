

(function($) {





    function showinfo(pointid){
        var listpoints = [{id:"1" , x: "554" , y: "73" , header:"Вершины - пик" , arrow:"left" , descr:"Вершина в зависимости от формы может называться пиком, куполом, башней, иглой и т.д., однако многие значительные вершины вне зависимости от формы называют пиками (пик Ленина, пик Победы и т.д. — массивы имеющие гребневой характер)."},
            {id:"2" , x: "401" , y: "572", header:"57 Вершины - пик" , arrow:"left" , descr:"Вершина в зависимости от формы может называться пиком, куполом, башней, иглой и т.д., однако многие значительные вершины вне зависимости от формы называют пиками (пик Ленина, пик Победы и т.д. — массивы имеющие гребневой характер)."}];
        var scale = 788/1172;
        idd=1;
        var header = listpoints[idd]["header"];
        var descr = listpoints[idd]["descr"];
        var left = 20 + 5 + parseInt($('#reliefsource').position()["left"]) + scale*listpoints[idd]["x"]+"px";
        var top = -30 + parseInt($('#reliefsource').position()["top"]) + scale*listpoints[idd]["y"]+"px";
        var arrow_type = " .arrow-" + listpoints[idd]["arrow"];
        var span_info = $('#tooltip .custominfo em');
        span_info.text(header);
        var span = $('#tooltip .custominfo');
        span.html("<em>"+span_info.text()+"</em>"+descr);
        $('#tooltip').css('left', left);
        $('#tooltip').css("top", top);
//надо масштабировать
       /* $("#tooltip").position({
            of: $('#tooltip').parent(),
            my: 'left top',
            at: 'left top',
            offset: '300 300'
        });*/

        console.log(scale*listpoints[idd]["y"]);
        var arrow = $('#tooltip'+arrow_type);
        var arrow_left = -15,
            arrow_top = 15;
        arrow.css('left', arrow_left);
        arrow.css('top', arrow_top);
        arrow.css("visibility", "visible");
        $('#tooltip').css("visibility", "visible");
        /*if( $('#tooltip').is(':visible') )
         {
         //code here
         alert(' visible');
         }else{
         alert('no visible');
         }
         */
    }
    function hideinfo(){
        $('#tooltip').css("visibility", "hidden")
        $('#tooltip .arrow').each(function(){
            $(this).css("visibility", "hidden")
        })//*/
    }
$(document).ready(function(){


    $('#listpoint li').hover(
        function() {
            var pointid = $(this).attr('id');
            pointid=1;
            showinfo(pointid);
        },
        function() {
            hideinfo();
        } );
/*
  // putting lines by the pre blocks
  $("pre").each(function(){
    var pre = $(this).text().split("\n");
    var lines = new Array(pre.length+1);
    for(var i = 0; i < pre.length; i++) {
      var wrap = Math.floor(pre[i].split("").length / 70)
      if (pre[i]==""&&i==pre.length-1) {
        lines.splice(i, 1);
      } else {
        lines[i] = i+1;
        for(var j = 0; j < wrap; j++) {
          lines[i] += "\n";
        }
      }
    }
    $(this).before("<pre class='lines'>" + lines.join("\n") + "</pre>");
  });

  var headings = [];

  var collectHeaders = function(){
    headings.push({"top":$(this).offset().top - 15,"text":$(this).text()});
  }

  if($(".markdown-body h1").length > 1) $(".markdown-body h1").each(collectHeaders)
  else if($(".markdown-body h2").length > 1) $(".markdown-body h2").each(collectHeaders)
  else if($(".markdown-body h3").length > 1) $(".markdown-body h3").each(collectHeaders)

  $(window).scroll(function(){
    if(headings.length==0) return true;
    var scrolltop = $(window).scrollTop() || 0;
    if(headings[0] && scrolltop < headings[0].top) {
      $(".current-section").css({"opacity":0,"visibility":"hidden"});
      return false;
    }
    $(".current-section").css({"opacity":1,"visibility":"visible"});
    for(var i in headings) {
      if(scrolltop >= headings[i].top) {
        $(".current-section .name").text(headings[i].text);
      }
    }
  });

  $(".current-section a").click(function(){
    $(window).scrollTop(0);
    return false;
  })//*/
});
})(jQuery)