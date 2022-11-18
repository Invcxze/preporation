//preparation numbers
// 1
// function js_style(){
//     let text = document.getElementById('text') ;
//     text.style.fontSize = '96';
//     text.style.color = 'red';
//     text.style.border = '20px solid green';
//     text.style.width = '1000px';
//     text.style.height = '1000px';
//     text.style.background = 'blue';
// }
//2
// getFormvalue = function(event) {
//     event.preventDefault()
//     var first = document.getElementById("fname");
//     var second = document.getElementById("lname");
//     let div = document.createElement('div');
//     div.innerHTML = first.value+" "+second.value
//     document.body.append(div);
// }
// 3
// function getAttributes(){
//     let link = document.getElementById('w3r');
//     let arr = [link.href,link.hreflang,link.rel,link.target,link.type]
//     let div = document.createElement('div');
//     for (let i = 0; i<arr.length;i++){
//     div.innerHTML += '<p class = "paragraph">'+arr[i]+'</p>'
//     }
//     document.body.append(div);
//     document.body.innerHTML += '<style>.paragraph{color:brown;font-size: 50px;}</style>'
// }
//4
// function insert_Row()
// {
// var x=document.getElementById('sampleTable').insertRow(0);
// var y = x.insertCell(0);
// var z = x.insertCell(1);
// y.innerHTML="New Cell1";
// z.innerHTML="New Cell2";
// let elem = document.getElementById('sampleTable')
// elem.style.border = 'yellow'
// elem.style.background = 'blue'
// }
// 5
// let row = prompt('Введите номер строки')
// let cell = prompt('Введите номер столбца')
// let content = prompt('Введите будущий текст ячейки')
// let myTable = document.getElementById('myTable')
// myTable.children[0].children[row -1].children[cell -1].innerHTML = content
// 7
// function removecolor(){
//     let colorS = document.getElementById('colorSelect');
//     let selectedCol = colorS.options[colorS.selectedIndex]
//     let div = document.createElement('div');
//     div.innerHTML += 'Элемент '+selectedCol.value+' был удалён'
//     document.body.append(div);
//     colorS.removeChild(selectedCol)
// }