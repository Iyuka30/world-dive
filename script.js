
// .s_01 .accordion
$(function(){
  //.accordionの中の.accordion_headerがクリックされたら
  $('.s_01 .accordion_one .accordion_header').click(function(){
    //クリックされた.accordionの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
    $(this).next('.accordion_inner').slideToggle();
    $(this).toggleClass("open");
  });
});

// yuka-================

$(document).ready(function() {
  $(".btn").click(function (e) {
      //JSONデータ取得 日本語で天気名を表示したいのでlang=ja　として日本語表記データを取得
      // $.post("http://api.openweathermap.org/data/2.5/weather?id=" + $("input[id='cityRadio']:checked").val() + "&appid=cc05750ba50400f27ebabbcd6f4c4976&lang=ja&units=metric",  
      $.post("http://api.openweathermap.org/data/2.5/weather?id=" + $("input[id='cityRadio']:checked").val() + "&appid=4791b21ce1b5643034c8d3b29ca534f9&lang=ja&units=metric",  
          function(json){
              $("#weather").html(json.weather[0].description); 
              $("#humidity").html(json.main.humidity); //気温
              $("#temp").html(Math.round(json.main.temp)); //湿度
              $("#speed").html(json.wind.speed); //風速
              $("#deg").html(json.wind.deg); //風向
              
              //天気に応じた天気アイコンを表示させる
              switch (json.weather[0].main){
                case 'Clouds':
                  $("#weatherMark").html("<img src='http://openweathermap.org/img/w/04d.png' >");
                  break;
                  case 'Snow':
                  $("#weatherMark").html("<img src='http://openweathermap.org/img/w/13d.png' >");
                  break;
                  case 'Rain':
                  $("#weatherMark").html("<img src='http://openweathermap.org/img/w/09d.png' >");
                  break;
                  case 'Clear':
                  $("#weatherMark").html("<img src='http://openweathermap.org/img/w/01d.png' >");
                  break;
                  case 'Fog':
                  $("#weatherMark").html("<img src='http://openweathermap.org/img/w/50d.png' >");
                  break;
                  case 'Mist':
                  $("#weatherMark").html("<img src='http://openweathermap.org/img/w/50n.png' >");
                  break;
                  case 'Haze':
                  $("#weatherMark").html("<img src='http://openweathermap.org/img/w/50d.png' >");
                  break;
              default:
              $("#weatherMark").html("<img src='http://openweathermap.org/img/wn/01d@2x.png' >");
          }
      }
  );
});
});
