//사용자 위치 정보 확인
navigator.geolocation.getCurrentPosition(function(pos) {
    // console.log(pos);
    var latitude = pos.coords.latitude;
    var longitude = pos.coords.longitude;
   // alert("현재 위치는 : " + latitude + ", "+ longitude);

    // 정보 뿌려주기 위한 엘레멘츠 지정
    let weather_selector = document.querySelector(".weather_info_wrap>div");

    //사용자 위치 기반의 날씨 정보 제공
    var apiURI = "https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=4afec870ec014022424572cf68c6181e";
    $.ajax({
        url: apiURI,
        dataType: "json",
        type: "GET",
        async: "false",
        success: function(resp_done) {

            let current_temper = Math.round(resp_done.main.temp- 273.15) + "도";
            let current_weather = resp_done.weather[0].main;
            let current_local = resp_done.name;

            weather_selector.innerHTML= '<p>'+current_weather +'</p><p>'+current_local + current_temper+'</p>';
            // console.log(resp);
            // console.log("현재온도 : "+ (resp.main.temp- 273.15) );
            // console.log("현재습도 : "+ resp.main.humidity);
            // console.log("날씨 : "+ resp.weather[0].main );
            // console.log("상세날씨설명 : "+ resp.weather[0].description );
            // console.log("날씨 이미지 : "+ resp.weather[0].icon );
            // console.log("바람 : "+ resp.wind.speed );
            // console.log("나라: "+ resp.sys.country );
            // console.log("도시이름: "+ resp.name );
            // console.log("구름 : "+ (resp.clouds.all) +"%" );
        }
     })
});



