$(document).ready(function () {
    $('#text1').text("The Transparency Project, a CruzHacks 2020 1st place project. Our goal being bringing clarity to the American political process through interactive data visualizations.")
    $('#text1-1').text("Built using primarily Flask, Plotly, and Dash, The Transparency Project was 1st place at CruzHacks 2020. I primarily worked on data collection, cleaning, and visualization.")
    $('#text2').text("DengAI from DrivenData.co, where participants were challenged to predict the number of cases of Dengue Fever in two South American countries")
    $('#text2-1').text("Achieved a top 12% global score Facebook Prophet")
    $('#text3').text("Build with Tensorflow and Keras, this program returns a trained CNN to detect images of the object of your choice")
    $('#text3-1').text("Scrapes Google Images with Google CSE API, collects a sample of random images, then trains a convolutional neural network to recognize images of the given search term. Returns a .tf model.")
    $('#text4-1').text("You're looking at it! The first of my web development endevours.")
    $('#text4').text("Built with JQuery, Bootstrap, HTML, CSS.")
    $('body').scrollspy({
        target: '#projectListNavbar'
    });
});
