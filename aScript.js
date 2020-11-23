(function () {
  var backDropDom = document.getElementsByClassName("meter-paywall--visible");

  backDropDom[0].setAttribute("style", "visibility:hidden");

  var bodyDom = document.getElementsByTagName("Body");

  bodyDom[0].setAttribute("style", "overflow-y:scroll");

  // alert("Free Access By Angelie");
})();
