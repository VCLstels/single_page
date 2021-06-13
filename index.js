function changeTab(tabNumber) {
  var percentsByTab = ["0%", "35%", "70%"];

  var bodyPercents = ["0%", "-100%", "-200%"];

  var tabNumbers = ["1", "2", "3"];

  document.getElementById("line").style.marginLeft =
    percentsByTab[+tabNumber - 1];

  document.getElementById("tabs-body").style.marginLeft =
    bodyPercents[+tabNumber - 1];

  tabNumbers.forEach(function (item) {
    document.getElementById("tab-" + item).style.backgroundColor =
      tabNumber === item ? "#add136" : "#959595";
  });
}

function handleClick(direction) {
    document.getElementById("carousel-body").style.marginLeft = 
        direction === 'left' ? '0%' : '-100%';
}
