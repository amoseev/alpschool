<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

  <link rel="stylesheet" href="stylesheets/stylesheet.css" media="screen"/>
  <link rel="stylesheet" href="stylesheets/pygment_trac.css"/>
  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
  <script type="text/javascript" src="javascripts/script.js"></script>

  <title>Alpschool</title>
  <meta name="description" content="">

  <meta name="viewport" content="width=device-width,initial-scale=1">

</head>

<body>

  <div class="wrapper">
    <header>
      <h3 class="title">Элементы горного рельефа</h3>
    </header>
    <div id="container">
      <div id="main" role="main">
        <article>
            <img src="http://cs323722.vk.me/v323722615/777f/M-VADkJ1zD8.jpg/>
        </article>
      </div>
    </div>
    <footer>
      <div class="owner">
      <p><a href="http://vk.com/club45985223" class="avatar"><img src="http://cs323722.vk.me/v323722615/777f/M-VADkJ1zD8.jpg" width="64" height="64"/></a><a href="http://vk.com/club45985223">Школа альпинизма - Пермь</a></p>
      </div>
    </footer>
  </div>
 </body>
 </html>.

$points = array("Вершины - пик","Игла","Столова гора","Зуб","Купол","Башня","Седловина","Долина","Висячая долина","Усьевая ступень","Кар","Кулуар","Конус выноса","Гребень","Ребро","Контрфорс","Взлет","Плечо","Жандарм","Склон - прямой","Склон - выпуклый","Склон - ступенчатый","Бараньи лбы","Скальный микрорельеф - трещины вертикальные","Скальный микрорельеф - трещины горизонтальные","Щель","Расщелина","Камин",
"Стена","Плита","Уступ","Полка","Балкон","Выступ","Карниз",
"Ледник - долинный","Ледник - каровый","Ледник - висячий","Ледник - возрожденный",
"Ледник - переметный","Ледник - покровный"," Морена подвижная - поверхностная серединная",
"Морена подвижная - поверхностная боковая","Морена отложная - береговая",
"Морена отложная - конечная","Трещина - поперечная","Трещина - продольная",
"Трещина - радиальная","Ледопад","Бергшрунд","Рандклифт","Нунотак","Грот",
"Снежный мост","Лавинный конус","Озеро","Осыпь","Сераки");


foreach($points as $n=>$point){
echo "<li id=\"point".($n+1)."\"> <span class=\"nimber\">".($n+1)."</span> <span class=\"name\">".$point."</span></li>".PHP_EOL;
}

