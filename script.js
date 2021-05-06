window.onload = function(){
    $.getJSON("https://spreadsheets.google.com/feeds/list/1NUoCnVmrvRfNq2Q8LiOlCKbx5RiSVOfWimQlwZc39do/od6/public/values?alt=json", function(data){
        data = data['feed']['entry']
        console.log(data);
        show(data)  ;

    })
    function show(data){
        var out = '';
        for(var i = 0; i < data.length; i++){
            out +=`<div class="card">`;
            out +=`<h3 class="title">${data[i]['gsx$name']['$t']}</h3>`;
            out +=`<img src="${data[i]['gsx$image']['$t']}" alt="">`;
            out +=`<p class="price">Цена:  ${data[i]['gsx$price']['$t']}</p>`;
            out +=`</div>`;
        }

    document.querySelector('.product').innerHTML = out;
    }                               
}

