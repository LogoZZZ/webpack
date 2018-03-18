// import _ from 'lodash'
import './style.css'
// import icon from './icon.png'
// import data from './data.json'
// import printMe from './print'
import {cube} from './math'
function component(){
    var element=document.createElement('div');
    // var btn=document.createElement('button')
    // element.innerHTML=_.join(['hello','webapck'],'');
    // element.classList.add('hello');
    // var myIcon=new Image();
    // myIcon.src=icon;
    // element.appendChild(myIcon)
    // console.log(data)
    // btn.innerHTML='click me adn check th console';
    // btn.onclick=printMe;
    // element.appendChild(btn)
    
    element.innerHTML=[
        'hello webpack',
        's cubed is equal to'+cube(5)
    ].join('\n\n')
    return element;
}
document.body.appendChild(component());

// if(module.hot){
//     module.hot.accept('./print.js',function(){
//         console.log('acceptingsdf');
//         printMe()
//     })
// }