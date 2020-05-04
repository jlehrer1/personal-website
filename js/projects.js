$(document).ready(function () {


    $('#text1').text("An iOS app that gives the user information about air quality in their area.")
    $('#text1-1').text("Using Swift 4 and thee OpenWeatherMap pollution API, my app first gets the location of the user, makes a .GET request to OpenWeatherMap, and returns data about air pollutants in the area. Then, using the Air Quality Index from weather.gov, the app the levels of precaution that should be taken.")
    $('#text2').text("I self-taught myself web development with HTML, CSS, and Javascript, and created this website to showcase my resume, personal projects and academic work.")
    $('#text2-1').text("Over the summer of 2019, I decided it was time to get serious about entrepreneurship and working on my personal projects. I thought making a website would not only allow me to show that I have programming skills, but also allow me to create a product that can showcase my work and discuss my academic achievements and work experience.")
    $('#text3').text("I created this bot for the personal discord server I share with my friends.")
    $('#text3-1').text("Using Javascript and Express, the bot returns various text responses based on user input.")
    $('#text4-1').text("Retrieves top headlines of a selected company using the gnews.io public API, determines the public sentiment of the company using the TextBlob NLP Classification Model’s sentiment analysis. Deployed using Flask and Python 3.")
    $('#text4').text("Determines the public sentiment of a company.")
    $('body').scrollspy({
        target: '#projectListNavbar'
    });
});
