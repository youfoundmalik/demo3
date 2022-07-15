$("#date").click(function () {
    $("#byDate").slideToggle();
    $("#sortdown1").toggleClass("flip");
});

$("#docType").click(function () {
    $("#byDocType").slideToggle();
    $("#sortdown2").toggleClass("flip");
});

$("#location").click(function () {
    $("#byLocation").slideToggle();
    $("#sortdown3").toggleClass("flip");
});

$("#people").click(function () {
    $("#byPeople").slideToggle();
    $("#sortdown4").toggleClass("flip");
});

$("#inputArea").focus(function () {
    if (!document.URL.includes("searchPage.html")) {
        location.href = "searchPage.html";
    } else {

    }
});

function focusOnInput() {
    $("#inputArea").focus();
}

var generalLinks = $(".navItem");
for (let i = 0; i < generalLinks.length; i++) {
    const selectedLinks = generalLinks[i];

    selectedLinks.onclick = function () {
        console.log(this)
        // console.log(123);
        for (let j = 0; j < generalLinks.length; j++) {
            generalLinks[j].classList.remove("nav-active");

        }
        this.classList.add("nav-active")
    }

};

var fullDate = new Date(); 

var dateYear = fullDate.getFullYear();
$("#currentYear").text(dateYear);

setInterval(() => {
    fullDates = new Date();

    hr = fullDates.getHours();
    min = fullDates.getMinutes();
    sec = fullDates.getSeconds();
    AMPM = 'AM'; 

      if(hr > 12) {
        hr -= 12;
        AMPM = "PM";
      }
      if(hr == 0) {
        hr = 12;
        AMPM = "AM";
      }

      hr = hr < 10 ? "0" + hr : hr;
      min = min < 10 ? "0" + min : min;
      sec = sec < 10 ? "0" + sec : sec;

      let currentTime = hr + ":" + min + ":" + sec + AMPM;
      
    //   console.log(currentTime);
      $("#timeClock").text(currentTime);

}, 1000);

