var xhr = new XMLHttpRequest();

function process() {
    if(xhr.readyState==0 || xhr.readyState==4){
        var arr = {
            curr1: document.getElementById('x').value,
            curr2: document.getElementById('y').value,
        };
        xhr.open('GET', 'https://exchangeratesapi.io/api/latest?base=' + arr.curr1 + '&symbols=' + arr.curr2, true);
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var myArr = JSON.parse(this.responseText);
                console.log(myArr);
                if(xhr.status==200){
                    c = document.getElementById('y').value;
                    val2 = myArr.rates.c;
                    console.log(val2);
                    document.getElementById("b").innerHTML = val2;
                    setTimeout('process()',1000);
                }
            }
        } 
        xhr.send(null);
    }else{
        setTimeout('process()',1000);
    }
  
}



