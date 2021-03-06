// skills circle progress

function circle(el) {
  $(el)
    .circleProgress({ fill: { color: "#828282" } })
    .on("circle-animation-progress", function (event, progress, stepValue) {
      $(this)
        .find(".skills__percent")
        .text(String(stepValue.toFixed(2)).substr(2) + "%");
    });

  $(el).on("click", 'a[href="#skills"]', function (event) {
    event.preventDefault();
    return $(el).circleProgress({ animate: { duration: 1200, easing: "circleProgressEasing" } });
  });
}
circle(".skills__round");

$(".skills__round").circleProgress({
  startAngle: Math.PI / -2
});
