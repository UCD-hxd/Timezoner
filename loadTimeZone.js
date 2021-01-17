
// @Zhuoheng Li
// The html file the js file related to is popup.html
var api_key = 'AIzaSyDcKCB3di0b4_Y1qnlidgNtIMICP6anRtM';
var url_cord = 'https://maps.googleapis.com/maps/api/geocode/json';//skelton to be filled by input
var url_zone = 'https://maps.googleapis.com/maps/api/timezone/json';//skelton to be filled by json file get by url_code

// This Function would be use to find the time difference between the input city and UTC 
// TODO Right now the search bar is only a skelton(very ugly) and we need a load animation
timezone = document.getElementById("searchButton").onclick = async function search () {

    var address = document.getElementById('city').value; // html need .value to retrieve input
    
    const response_cordinate = await axios.get(url_cord, {
        params: {
            address: address,
            key: api_key
        }
    })
    if(response_cordinate.data.status != "OK")
    {
        alert("Invalid Input")
    }

    console.log(response_cordinate)
    var lat = response_cordinate.data.results[0].geometry.location.lat;
    var lng = response_cordinate.data.results[0].geometry.location.lng;
    var formatter = lat + ',' + lng;
    const response_timezone = await axios.get(url_zone, {
        params:{
            location:formatter,
            timestamp:1458000000,
            key:api_key
        }
    })
    console
    console.log(response_timezone); // Please see this output
    timezone = (response_timezone.data.rawOffset) / 3600 // covert secs to Hours
    console.log(timezone);
    return timezone // 8 for (beijing,shanghai,chengdu,etc) 0 for London
}

