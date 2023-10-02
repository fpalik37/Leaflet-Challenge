# Leaflet-Challenge

## Introduction
For the **Leaflet Challenge**, Module 15, I developed an ‘Earthquake Visualization’ for the United States Geological Survey (USGS) in an effort to provide them with a tool to better educate the public and organizations on issues that impact the planet – *in this case, specifically, the natural hazards posed by earthquakes.*

The highlight of this challenge was learning to use Leaflet.  Leaflet is a leading open source JavaScript library used for building web mapping applications. In other words, it simply provides the framework for presenting map data. The data, along with the base map layer, is provided by the developer. With Leaflet, you can then load the feature data, style it, and create interactive layers - such as markers with popups when clicked.  Notably, I employed many of these features for this challenge.

## Repository Contents

1)	**Earthquakes_Past_Month.png**
   
This is an image of the ‘Earthquake Visualization’ tool.  Being that it is just a stagnant png, it lacks the dynamic pop-up overlay that contains earthquake location specifics, as well as exact magnitude and depth.  These dynamic features can be ‘experienced/tested’ by loading the js, css, and html files listed below.  Nevertheless, I have provided the png image here for the reader’s/grader’s convenience.

2)	**index.html**
   
The HTML (Hypertext Markup Language) file literally delineates the content of the web page (i.e., quite literally the written text, etc.).

3)	**logic.js**
   
The JS file is composed of a plain text that contains JavaScript code. It is used to execute the JavaScript instructions for the webpage. Note, JS files often include functions that open and close windows, validate form fields, enable rollover images, and/or create dropdown menus.  In our case, the overlay pop-up dynamic is controlled here.

4)	**style.css**
   
The CSS (Cascading Style Sheets) file is used for the webpage layout, visual effects and background. It adjusts content size, spacing, color & font.  As well, it adds decorative features – which can even include animations (*sorry, no earthquake animations here, but stay turned for ‘Earthquake Visualization 2.0’* 😉).

## Process

Earthquake data was imported directly from the following USGS website: 
***https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php***

Note, this website provides earthquake data in a number of different formats, updated every 5 minutes.

I based my visualization on earthquake activity from the entire past month, and thus my data came directly from the following:
***https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson***

With the imported JSON data, I used Leaflet to create a map that plots all the earthquakes of the past month, based on their longitude and latitude.

I created data markers that reflect the magnitude of the earthquake by their size, and the depth of the earthquake by color.  Earthquakes with higher magnitudes have larger markers, and the markers of earthquakes with greater depth are darker in color.

In addition, I included popups that provide additional information about the earthquake when its associated marker is clicked.

Lastly, I added a legend to provide overall ‘map context’.

## Conclusion

For me, the most notable (and rewarding) aspect of the challenge was learning the function and interaction of the 3 separate files – the JS, CSS and HTML.  All require their own respective syntax, and all serve a distinct role.
As described earlier, the HTML file creates and structures the website's content, the CSS adds style and formatting to these structures, and then the JavaScript turns these stylized components into the dynamic platform the user can interact with.  

After completely this project, I definitely feel my ‘java chops’ have been updated with the ‘latest and greatest’ of open source tools.  As mentioned in the previous challenge’s README (Module 14) – *‘This sure ain’t your mama’s cup-o-joe.’* <-- i.e., the Java of my computer science curriculum 20+ years ago 😊.
