'use strict';
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.797197394699076,37.579733058489246],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 16
  });

  myMap.geoObjects.add(new ymaps.Placemark([55.79711882550887,37.579867168940005], {
    balloonContent: 'наш отель'}, {
    preset: 'islands#dotIcon',
    iconColor: '#93cb52'
  }));
}

// Scrolling

$('.navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 100
        },
        800
    );
  }
});

// Adding opacity to navbar

window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('.navbar').style.opacity += 0.9;
  } else {
    document.querySelector('.navbar').style.opacity += 1;
  }
});