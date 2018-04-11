var select = document.querySelector('select');
var html = document.querySelector('html');
document.body.style.padding = '10px';

function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}

select.onchange = function () {
    ( select.value === 'black' ) ? update('black','white') : update('white','black');
}





// Weather selector
/*
var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change', setWeather);


function setWeather() {
    var choice = select.value;

    switch (choice) {
        case 'sunny':
            para.textContent = 'It is nice and sunny outside today. Grab an ice cream!';
            break;
        case 'rainy':
            para.textContent = 'Rain is falling outside. Grab an umbrella!';
            break;
        case 'snowing':
            para.textContent = 'The snow is coming down. It is freezing!';
            break;
        case 'overcast':
            para.textContent = 'The sky is gray. Be ready for the rain!';
            break;
        default:
            para.textContent = '';
    }
}
*/
