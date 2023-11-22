//Change the background with a new image
$('.ins-notification-content').css('background-image', 'url("https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1700611200&semt=sph")')

//Change purple colors to #0087cb
const purpleElements = $('.ins-preview-wrapper div, .ins-preview-wrapper span');

$(purpleElements).each((index, element) => {
    if ($(element).css('background-color') === 'rgb(129, 25, 205)') {
        $(element).css('background-color', '#0087cb');
    }
});

//Add a redirect link to the button
$('.ins-adaptive-button-wrapper .ins-element-link').attr('href', 'https://www.google.com');

//Change the text after 10 seconds (Easter offers FROM $4.9) to any text you want
setTimeout(() => {
    $('.editable-text .ins-own-link-available').text('Hi Insider');
}, 10000);

//Move the element to any different position
//text
$('#top-bar-container .ins-element-wrap:first').css({left: "46%", top: "87%"});
//button
$('.ins-sample-element-wrapper').css({left: "43%",right: "50%"});
//count
$('.ins-removable-target').css({left: "60%", top: "50%"});
