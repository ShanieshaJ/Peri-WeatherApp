<header>
<h1> Peri Weather App 🌎</h1>
</header>

<section>
<h2>Overview:</h2>
</section>

<p> This project is made from the bootcamp course called SheCodes Plus. This course has HTML/CSS & JavaScript but with more information to learn. I learnt from this course is that you have to create a design (Wireframe) for a weather application using InVision software. Then used CodeSandBox to code mini JavaScript execises to understand. The first 4 weeks we would slowly build the weather application in CodeSandBox. </p>

<p> The last 4 weeks is where I discovered that I have been just using GitHub and not Git (The holy grail version control for all developers). I  also learned how to use Git from taking a <strong>Free</strong> course from Udemy called <a href="https://www.udemy.com/course/git-essentials-mini-course/">Git Essentials: Mini Course</a>. At first I was very overwhelmed with the amount of commands that I had to remember when working with projects but it gets better with time and practice.

The most important commands to remember are:

```
git status
git add
git commit
git branch
git merge
git checkout
git push
git pull
```

Then is Introduction to API (Application Programming Interface) and what it does:</p>
<br/><img src="https://www.altexsoft.com/media/2021/03/word-image.png" alt ="api-info"/>
</br>

 <p>
  Finally we had to transfer (copy and paste) the code from CodeSandBox to Visual Studio Code. However some parts of code work differently those two software.

Code on CodeSandbox for Weather app:

```
  <link href="src/styles.css" rel="stylesheet" type="text/css" />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
    crossorigin="anonymous"
  />
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <script
    src="https://kit.fontawesome.com/e693fb6142.js"
    crossorigin="anonymous"
  ></script>
  <script src="src/weatherApp.js"></script>
```

Code on Visual Studio Code:

```
   <link
     href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
     rel="stylesheet"
     integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
     crossorigin="anonymous"
   />
   <script
     src="https://kit.fontawesome.com/e693fb6142.js"
     crossorigin="anonymous"
   ></script>
   <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
   <link rel="stylesheet" href="src/styles.css" type="text/css" />
   .................
   <script src="src/WeatherApp.js"></script>
   <section id="developerFooter">
```

 </p>

 <p>
    The differences between these two software used on CodeSandbox: 
  
  ```
  <link>
  <script>
  ```
  These two tags are inside the `<head>` tag only and it uses the environment called parcel to bulid the application.
  
</p> 
    
<p>
    On Visual Studio Code: 
 
  ```
  <link>
  <script>  
  ```     
 These two tags are mostly placed inside the `<head>` tag. However the `<script src="src/WeatherApp.js">` tag (Which is your personal JS file) is almost at the bottom of the page but inside the `<body>`. The reason for this is because the parcel is not added into Visual Studio Code. But it reduces the loading time of the application.
 
 </p>

<section>
<h2>Languages used:</h2>
</section>

<p>The languages used to create this weather application are: HTML5/CSS3 & JavaScript. The framework used is Bootstrap. The API used to be able to search and update city location and temperatures is from <a href="https://openweathermap.org/api">OpenWeatherMap.org</a>.</p>

<section>
<h3>Learn more:</h3>
</section>
<ul>
    <li><a href="https://developer.mozilla.org/en-US/docs/Learn/HTML">HTML</a></li>
    <li><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS">CSS</a></li>
    <li><a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript">JavaScript</a></li>
    <li><a href ="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub">Git</a></li>
    <li><a href ="https://getbootstrap.com/docs/5.1/getting-started/introduction/">Bootstrap</a></li>
    <li><a href = "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction">API</a></li>
    <li><a href ="https://parceljs.org/docs/">Parcel</a></li>
</ul>
   
 <section>
<h3>Things to improve on this project (April 15 to 19):</h3>
</section>
   <ul>
    <li>Fix the background-image width (In process)</li>
    <li>Add calculation to convert temperatures from C to F when clicked (In process)</li>
    <li>Modify the code to being more clean (In process)</li>
    <li>Change the background (In process)</li>
   </ul>

<h3>Link:</h3>
<p>You can view the project by clicking this link here: <a href ="https://ecstatic-shirley-3303d9.netlify.app/">Peri Weather App</a></p>
