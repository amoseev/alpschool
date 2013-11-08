(function($) {


$(document).ready(function(){

    var svg = d3.select("#bodysvg svg");

    /*var listpoints = [{id:"1" , x: "554" , y: "73" , header:"Вершины - пик" , arrow:"left" , descr:"Вершина в зависимости от формы может называться пиком, куполом, башней, иглой и т.д., однако многие значительные вершины вне зависимости от формы называют пиками (пик Ленина, пик Победы и т.д. — массивы имеющие гребневой характер)."},
        {id:"1" , x: "854" , y: "73" , header:"Вершины - пик" , arrow:"left" , descr:"Вершина в зависимости от формы может называться пиком, куполом, башней, иглой и т.д., однако многие значительные вершины вне зависимости от формы называют пиками (пик Ленина, пик Победы и т.д. — массивы имеющие гребневой характер)."},
        {id:"2" , x: "401" , y: "572", header:"57 Вершины - пик" , arrow:"left" , descr:"Вершина в зависимости от формы может называться пиком, куполом, башней, иглой и т.д., однако многие значительные вершины вне зависимости от формы называют пиками (пик Ленина, пик Победы и т.д. — массивы имеющие гребневой характер)."},
        {id:"56" , x: "1400" , y: "670", header:"56 Озеро" , arrow:"left" , descr:"Вершина в зависимости от формы может называться пиком, куполом, башней, иглой и т.д., однако многие значительные вершины вне зависимости от формы называют пиками (пик Ленина, пик Победы и т.д. — массивы имеющие гребневой характер)."},
    ];*/
    var listpoints = [
        {id:"1" , x: "220" , y: "108" , header:"Вершины - пик"},
        {id:"1" , x: "555" , y: "71" , header:"Вершины - пик"},
        {id:"1" , x: "1145" , y: "150" , header:"Вершины - пик"},
        {id:"1" , x: "1623" , y: "145" , header:"Вершины - пик"},
        {id:"1" , x: "1707" , y: "229" , header:"Вершины - пик"},
        {id:"2" , x: "361" , y: "127" , header:"Игла"},
        {id:"3" , x: "37" , y: "131" , header:"Столова гора"},
        {id:"4" , x: "673" , y: "179" , header:"Зуб"},
        {id:"5" , x: "867" , y: "181" , header:"Купол"},
        {id:"6" , x: "1395" , y: "171" , header:"Башня"},
        {id:"6" , x: "875" , y: "259" , header:"Башня"},
        {id:"7" , x: "725" , y: "183" , header:"Седловина"},
        {id:"7" , x: "127" , y: "131" , header:"Седловина"},
        {id:"7" , x: "1639" , y: "907" , header:"Седловина"},
        {id:"7" , x: "1301" , y: "869" , header:"Седловина"},
        {id:"7" , x: "1361" , y: "307" , header:"Седловина"},
        {id:"7" , x: "913" , y: "729" , header:"Седловина"},
        {id:"7" , x: "725" , y: "289" , header:"Седловина"},
        {id:"8" , x: "959" , y: "1159" , header:"Долина"},
        {id:"9" , x: "1009" , y: "923" , header:"Висячая долина"},
        {id:"10" , x: "1011" , y: "979" , header:"Усьевая ступень"},
        {id:"11" , x: "949" , y: "619" , header:"Кар"},
        {id:"11" , x: "523" , y: "173" , header:"Кар"},
        {id:"12" , x: "531" , y: "375" , header:"Кулуар"},
        {id:"12" , x: "697" , y: "557" , header:"Кулуар"},
        {id:"12" , x: "837" , y: "641" , header:"Кулуар"},
        {id:"12" , x: "1837" , y: "703" , header:"Кулуар"},
        {id:"12" , x: "1799" , y: "427" , header:"Кулуар"},
        {id:"12" , x: "883" , y: "341" , header:"Кулуар"},
        {id:"13" , x: "1579" , y: "719" , header:"Конус выноса"},
        {id:"13" , x: "469" , y: "535" , header:"Конус выноса"},
        {id:"13" , x: "787" , y: "759" , header:"Конус выноса"},
        {id:"14" , x: "1247" , y: "255" , header:"Гребень"},
        {id:"14" , x: "835" , y: "425" , header:"Гребень"},
        {id:"14" , x: "1001" , y: "523" , header:"Гребень"},
        {id:"14" , x: "1709" , y: "383" , header:"Гребень"},
        {id:"14" , x: "29" , y: "371" , header:"Гребень"},
        {id:"15" , x: "1811" , y: "571" , header:"Ребро"},
        {id:"15" , x: "1105" , y: "865" , header:"Ребро"},
        {id:"16" , x: "991" , y: "331" , header:"Контрфорс"},
        {id:"16" , x: "1851" , y: "283" , header:"Контрфорс"},
        {id:"16" , x: "1619" , y: "593" , header:"Контрфорс"},
        {id:"17" , x: "1329" , y: "535" , header:"Взлет"},
        {id:"17" , x: "393" , y: "349" , header:"Взлет"},
        {id:"18" , x: "1341" , y: "193" , header:"Плечо"},
        {id:"18" , x: "483" , y: "159" , header:"Плечо"},
        {id:"19" , x: "719" , y: "485" , header:"Жандарм"},
        {id:"19" , x: "175" , y: "153" , header:"Жандарм"},
        {id:"20" , x: "1001" , y: "789" , header:"Склон - прямой"},
        {id:"20" , x: "1459" , y: "1031" , header:"Склон - прямой"},
        {id:"21" , x: "1435" , y: "303" , header:"Склон - выпуклый"},
        {id:"21" , x: "1145" , y: "1041" , header:"Склон - выпуклый"},
        {id:"22" , x: "885" , y: "859" , header:"Склон - вогнутый"},
        {id:"22" , x: "1783" , y: "993" , header:"Склон - вогнутый"},
        {id:"22" , x: "1585" , y: "387" , header:"Склон - вогнутый"},
        {id:"22" , x: "1225" , y: "807" , header:"Склон - вогнутый"},
        {id:"23" , x: "1273" , y: "447" , header:"Склон - ступенчатый"},
        {id:"24" , x: "389" , y: "537" , header:"Бараньи лбы"},
        {id:"24" , x: "471" , y: "929" , header:"Бараньи лбы"},
        {id:"24" , x: "715" , y: "713" , header:"Бараньи лбы"},
        {id:"25" , x: "317" , y: "719" , header:"Скальный микрорельеф - трещины вертикальные"},
        {id:"25" , x: "401" , y: "885" , header:"Скальный микрорельеф - трещины вертикальные"},
        {id:"26" , x: "261" , y: "771" , header:"Скальный микрорельеф - трещины горизонтальные"},
        {id:"27" , x: "309" , y: "971" , header:"Щель"},
        {id:"28" , x: "99" , y: "533" , header:"Расщелина"},
        {id:"28" , x: "257" , y: "921" , header:"Расщелина"},
        {id:"29" , x: "149" , y: "1097" , header:"Камин"},
        {id:"30" , x: "243" , y: "669" , header:"Стена"},
        {id:"30" , x: "623" , y: "199" , header:"Стена"},
        {id:"30" , x: "27" , y: "803" , header:"Стена"},
        {id:"30" , x: "261" , y: "997" , header:"Стена"},
        {id:"30" , x: "1103" , y: "317" , header:"Стена"},
        {id:"31" , x: "123" , y: "597" , header:"Плита"},
        {id:"32" , x: "337" , y: "1073" , header:"Уступ"},
        {id:"32" , x: "407" , y: "979" , header:"Уступ"},
        {id:"32" , x: "203" , y: "505" , header:"Уступ"},
        {id:"33" , x: "343" , y: "837" , header:"Полка"},
        {id:"33" , x: "241" , y: "1089" , header:"Полка"},
        {id:"34" , x: "187" , y: "807" , header:"Балкон"},
        {id:"34" , x: "403" , y: "1115" , header:"Балкон"},
        {id:"35" , x: "397" , y: "737" , header:"Выступ"},
        {id:"35" , x: "133" , y: "919" , header:"Выступ"},
        {id:"35" , x: "165" , y: "489" , header:"Выступ"},
        {id:"36" , x: "117" , y: "677" , header:"Карниз"},
        {id:"36" , x: "151" , y: "239" , header:"Карниз"},
        {id:"36" , x: "65" , y: "321" , header:"Карниз"},
        {id:"37" , x: "1417" , y: "815" , header:"Ледник - долинный"},
        {id:"38" , x: "509" , y: "243" , header:"Ледник - каровый"},
        {id:"39" , x: "481" , y: "319" , header:"Ледник - висячий"},
        {id:"40" , x: "409" , y: "423" , header:"Ледник - возрожденный"},
        {id:"41" , x: "671" , y: "393" , header:"Ледник - переметный"},
        {id:"42" , x: "1171" , y: "181" , header:"Ледник - покровный"},
        {id:"43" , x: "647" , y: "861" , header:" Морена подвижная - поверхностная серединная"},
        {id:"43" , x: "1235" , y: "717" , header:" Морена подвижная - поверхностная серединная"},
        {id:"44" , x: "715" , y: "851" , header:"Морена подвижная - поверхностная боковая"},
        {id:"45" , x: "555" , y: "1085" , header:"Морена отложная - береговая"},
        {id:"45" , x: "479" , y: "615" , header:"Морена отложная - береговая"},
        {id:"45" , x: "961" , y: "1029" , header:"Морена отложная - береговая"},
        {id:"46" , x: "753" , y: "1019" , header:"Морена отложная - конечная"},
        {id:"47" , x: "559" , y: "839" , header:"Трещина - поперечная"},
        {id:"47" , x: "1327" , y: "783" , header:"Трещина - поперечная"},
        {id:"48" , x: "313" , y: "495" , header:"Трещина - продольная"},
        {id:"48" , x: "591" , y: "689" , header:"Трещина - продольная"},
        {id:"49" , x: "1457" , y: "839" , header:"Трещина - радиальная"},
        {id:"50" , x: "589" , y: "545" , header:"Ледопад"},
        {id:"50" , x: "1267" , y: "409" , header:"Ледопад"},
        {id:"50" , x: "1109" , y: "415" , header:"Ледопад"},
        {id:"51" , x: "293" , y: "371" , header:"Бергшрунд"},
        {id:"51" , x: "111" , y: "373" , header:"Бергшрунд"},
        {id:"52" , x: "311" , y: "437" , header:"Рандклифт"},
        {id:"52" , x: "1345" , y: "843" , header:"Рандклифт"},
        {id:"53" , x: "1195" , y: "423" , header:"Нунотак"},
        {id:"54" , x: "621" , y: "1047" , header:"Грот"},
        {id:"55" , x: "803" , y: "331" , header:"Снежный мост"},
        {id:"56" , x: "1553" , y: "447" , header:"Лавинный конус"},
        {id:"56" , x: "1399" , y: "671" , header:"Лавинный конус"},
        {id:"56" , x: "245" , y: "437" , header:"Лавинный конус"},
        {id:"56" , x: "1221" , y: "301" , header:"Лавинный конус"},
        {id:"57" , x: "521" , y: "1141" , header:"Озеро"},
        {id:"57" , x: "399" , y: "571" , header:"Озеро"},
        {id:"58" , x: "1423" , y: "1147" , header:"Осыпь"},
        {id:"58" , x: "847" , y: "781" , header:"Осыпь"},
        {id:"58" , x: "1729" , y: "761" , header:"Осыпь"},
        {id:"59" , x: "1415" , y: "765" , header:"Сераки"},
    ];

    $('#bodysvg').height($('#bodysvg').width() / 1883 * 1172) ;
    var xScale = d3.scale.linear().domain([0,1883]).range([0,$('#bodysvg').width()]);
    var yScale = d3.scale.linear().domain([0,1172]).range([0,$('#bodysvg').height()]);

    function flash(pointid){
            points.filter(function(d) {return (pointid==d.id && d3.select(this).attr("flash")=="none") }).style("opacity",0.05);
            points.filter(function(d) {return (pointid==d.id && d3.select(this).attr("flash")=="yes") })
                .transition().attr("r",10)
                .duration(1000) // this is 1s
                //.delay(100)
                .transition().attr("r",25).style("opacity",0)
                .duration(1000) // this is 1s
                .delay(100)
                .each("end", function() {
                    d3.select(this).style("opacity",0.85).attr("r",10);
                    flash(pointid);
                });
    }


    var points = svg.selectAll(".point")
        .data(listpoints)
        .enter().append("g").attr("class", "point")
        .append("circle").attr("r", 10)
        .style("fill", "#90D355")
        .attr("id", function(d) { return d.id ; } )
        .attr("cx", function(d) { return xScale(d.x) ; })
        .attr("cy", function(d) { return yScale(d.y); })
        .style("opacity",0.05)
        .on("mouseover", function() {
            var pointid = d3.select(this).attr("id");
            points.filter(function(d) {return pointid==d.id }).style("opacity",0.85).attr("flash","yes")
            flash(pointid);
        })
        .on("mouseout", function() {
            var pointid = d3.select(this).attr("id");
            points.filter(function(d) {return pointid==d.id }).style("opacity",0.05).attr("flash","none");
        });

   /* points.append("svg:title")
        .text(function(d, i) { return "My color is "  });
*/

    $('svg circle').tipsy({
        gravity: 'w',
        html: true,
        title: function() {
            var d = this.__data__;
            return '<p><span style="color:' + "#90D355" + '">' + d.header + '</span></p>';
                ;
        }
    });

    $( window ).resize(function() {
        $('#bodysvg').height($('#bodysvg').width() / 1883 * 1172) ;
        xScale = d3.scale.linear().domain([0,1883]).range([0,$('#bodysvg').width()]);
        yScale = d3.scale.linear().domain([0,1172]).range([0,$('#bodysvg').height()]);
        points
            .attr("cx", function(d) { return xScale(d.x) ; })
            .attr("cy", function(d) { return yScale(d.y); })

    });


  $("#listpoint li").hover(
      function() {
          var pointid =  $(this).attr('id').replace("point","");
          points.filter(function(d) {return pointid==d.id }).style("opacity",0.85).attr("flash","yes")
          flash(pointid);
      },function(){
          var pointid = $(this).attr('id').replace("point","");
          points.filter(function(d) {return pointid==d.id }).style("opacity",0.05).attr("flash","none");

      });

});
})(jQuery)