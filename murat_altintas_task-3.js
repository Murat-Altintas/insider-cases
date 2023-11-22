// Bonus Question - HTML
$('#shopify-section-footer').before('<div class="grid-container">\
  <div class="grid-text">SHOP BRAS</div>\
  <div class="grid-text">SHOP PANTIES</div>\
  <div class="grid-item">15 SR</div>\
  <div class="grid-item">9 SR</div>\
  <div class="grid-item">25 SR</div>\
  <div class="grid-item">15 SR</div>\
  <div class="grid-item">35 SR</div>\
  <div class="grid-item">25 SR</div>\
</div>');

// Bonus Question - CSS
var css = "\
  .grid-container {\
    display: grid;\
    grid-template-columns: auto auto;\
  }\
  .grid-item {\
    background-color: red;\
    border: 5px solid;\
    border-color: white;\
    font-size: 30px;\
    text-align: center;\
  }\
  .grid-text {\
    font-size: 20px;\
    font-family: Arial;\
    text-align: center;\
    padding-bottom: 20px;\
  }\
  .grid-item {\
    font-size: 20px;\
    font-family: Arial;\
    color: white;\
  }";

$("<style>").prop("type", "text/css").html(css).appendTo("head");