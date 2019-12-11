//We call the initMap-function from the Maps.html document. You can see that in the end of the link under the script tag.
//Vi kalder initMap-funktionen fra Maps.html dokumentet. Dette kan ses i slutningen af script-tagget, der har et tilhørende link.
function initMap() {
    //Her defineres lokationen af Urban Gym med lat og lng. Koordinaterne er fundet på google.
    var urbanVester = {lat: 55.678040, lng: 12.562337};
    var map = new google.maps.Map(
        document.getElementById("map"), {zoom: 4, center: urbanVester});
    //Her tilføjes den "marker" der skal være på lokationen.
    var marker = new google.maps.Marker({position: urbanVester, map: map});
}

