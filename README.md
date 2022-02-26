#Peri Weather App 🌎

##Overview:

<p> This project is made from the bootcamp course called SheCodes Plus. This course has HTML/CSS & JavaScript but with more information to learn. I learnt from this course is that you have to create a design (Wireframe) for a weather application using InVision software. Then used CodeSandBox to code mini JavaScript execises to understand. The first 4 weeks we would slowly build the weather application in CodeSandBox. </p>

<p> The last 4 weeks is where I discovered that I have been just using GitHub and not Git (The holy grail version control for all developers). I  also learned how to use Git from taking a <strong style = "color:yellow;">Free</strong> course from Udemy called <a href="https://www.udemy.com/course/git-essentials-mini-course/">Git Essentials: Mini Course</a>. At first I was very overwhelmed with the amount of commands that I had to remember when working with projects but it gets better with time and practice.

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

---

Then is Introduction to API (Application Programming Interface) and what it does:</p>
<img src="https://www.altexsoft.com/media/2021/03/word-image.png" alt ="api-info"/>

---

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

## </p>

 <p>

    The differences between these two software used is on CodeSandbox is that the `link` & `script` tags are inside the `head` tag only and it uses the environment called parcel to bulid the application. On Visual Studio Code: The `<link>` and `<script>` tags are mostly placed inside the `<head>` tag. However the `<script src="src/WeatherApp.js>` (Which is your personal JS file) is almost at the bottom of the page. The reason for this is because the parcel is not added into Visual Studio Code. But it reduces the loading time of the application.

## </p>

##Languages used:

## <p>The languages used to create this weather application are: HTML5/CSS3 & JavaScript. The framework used is Bootstrap. The API used to be able to search and update city location and temperatures is from <a href="https://openweathermap.org/api">OpenWeatherMap.org</a>.</p>

##Learn more:

    - <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML">HTML</a>
    - <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS">CSS</a>
    - <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript">JavaScript</a>
    - <a href ="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub">Git</a>
    - <a href ="https://getbootstrap.com/docs/5.1/getting-started/introduction/">Bootstrap</a>
    - <a href = "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction">API</a>
    - <a href ="https://parceljs.org/docs/">Parcel</a>

---

###Link:
You can view the project by clicking this link here: <a href ="https://ecstatic-shirley-3303d9.netlify.app/">Peri Weather App</a>
