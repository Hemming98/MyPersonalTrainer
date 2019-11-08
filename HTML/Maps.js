
function initMap() {
    //The location of the Gym
    var urbanVester = {lat: 55.678040, lng: 12.562337};
    var map = new google.maps.Map(
        document.getElementById("map"), {zoom: 4, center: urbanVester});
    //Here we add the market that points out where the gym is
    var marker = new google.maps.Marker({position: urbanVester, map: map});
}

