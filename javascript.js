var xhr = new XMLHttpRequest();
xhr.open('GET', '/server', true);

var arr = {
    curr1: document.getElementById('x').value,
    curr2: document.getElementById('y').value,
    val1: document.getElementById('a').value,
    val2: document.getElementById('b').value
};

xhr.send(arr);
