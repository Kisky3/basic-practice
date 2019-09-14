import _ from 'lodash';
import $ from 'jquery';

function component() {
    //const element = document.createElement('div');
    const element = $('<div></div>')

    //element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    element.html(_.join(['Hello', 'webpack', '']))

    //return element;
    return element.get(0);
}

document.body.appendChild(component());