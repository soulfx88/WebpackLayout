import some from './some.js';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss'; 

let x = 545;
let y = 166;

let res1 = some.avg(x,y);
let res2 = some.merge({
    x
}, {
    y
});
let output = res1;

console.log(res2);

$('#result').html(output);


//document.getElementById('result').innerText = res;