const humberger_img = document.querySelector('.humberger')
const navbar = document.querySelector('.navbar');
const dark_light_img = document.querySelector('.dark_light_img')
const close_open = false;



// 

// portfolio part

const portfolio_title = document.querySelector('.portfolio_title')
const portfolio_text = document.querySelector('.portfolio_text')

const nextButton = document.getElementById('nextButton')
const prevButton = document.getElementById('prevButton')
const mainImage = document.getElementById('mainImage')
const skills = document.getElementById('skills')

const scroll_top_button = document.getElementById('scroll_top_button')


const slide = document.querySelectorAll('.slide')

// show & hide humberger menu 

humberger_img.addEventListener('click', function () {
    if (!navbar.className.match('active')) {
        navbar.classList.add('active')
        humberger_img.src = './images/close.svg'
    } else {
        humberger_img.src = './images/open.svg'
        navbar.classList.remove('active')
    }
})



// Dark & Light Mode

dark_light_img.addEventListener('click', function () {
    if (dark_light_img.src.match('./images/dark.png')) {
        dark_light_img.src = "./images/light.png"
        dark_light_img.classList.add('light_img')
        document.body.className = 'dark_mode'
        close_open = true;
    } else {
        dark_light_img.classList.remove('light_img')
        document.body.classList.remove('dark_mode')
        dark_light_img.src = "./images/dark.png"
        close_open = false;

    }
})



// Data for Portfolio part



let portfolioData = [
    {
        img_src: "./images/calculator.jpg",
        project_name: "calculator",
        project_description: "This is a calculator which do four operation like multiplication, Division, Addition, and Subtraction."
    },
    {
        img_src: "./images/youtube.jpg",
        project_name: "YouTube Clone",
        project_description: "A youtube clone in which you can search and find you favourite videos you can search for youtube channel's and also you can play videos in this app rapid api is used"
    },
    {
        img_src: "./images/player.jpg",
        project_name: "Music Player",
        project_description: "A music player which can play songs for you and you can add you song's to it and then you can hear it."
    },
    {
        img_src: "./images/rowcol.jpg",
        project_name: "Row & Col Maker",
        project_description: "This app take two value's from you in the input one for the row and the another one for collumn and then it will show you the result"
    },
    {
        img_src: "./images/food.jpg",
        project_name: "Food Webiste",
        project_description: "This food website which is made from the red color and this is alseo reponsive"
    },
    {
        img_src: "./images/google.jpg",
        project_name: "Google Clone",
        project_description: "A Google clone in which you can search and find you favourite articles you can search for videos also and all the data is coming from rapid api"
    },
    {
        img_src: "./images/colorGenerator.jpg",
        project_name: "Color Generator",
        project_description: "In this App you can generate color's by simply clicking a button"
    },
    {
        img_src: "./images/passGenerator.jpg",
        project_name: "Password Generator",
        project_description: "A password generator you can select number of letter's you can add Uppercase, lowercase, number's and symbols"
    },
    {
        img_src: "./images/quizApp.jpg",
        project_name: "Quiz App",
        project_description: "This quiz app will ask you the question's and then will show you the result of how many of you'r answer are correct or wrong."
    },
    {
        img_src: "./images/textGenerator.jpg",
        project_name: "Text Generator App",
        project_description: "This app will generate text for by simply adding the amount of letter's."
    },
    {
        img_src: "./images/ticTacTeo.jpg",
        project_name: "Tic Tac Teo Game",
        project_description: "A big Tic Tac Teo Game."
    },
    {
        img_src: "./images/wordCounter.jpg",
        project_name: "Word Counter App",
        project_description: "You enter write you'r text and this app will show you how many word's, letter's and spaces are in your text."
    },

]



let index = 0;

portfolio_title.innerHTML = portfolioData[index].project_name
mainImage.attributes.src = portfolioData[index].img_src
portfolio_text.innerHTML = portfolioData[index].project_description
slide[index].classList.add('active')

const next = () => {
    if (index === portfolioData.length - 1) {
        slide[portfolioData.length - 1].classList.remove('active')
        index = 0
        slide[index].classList.add('active')


    } else {

        ++index

        slide[index - 1].classList.remove('active')
        slide[index].classList.add('active')
    }
    portfolio_title.innerHTML = portfolioData[index].project_name
    portfolio_text.innerHTML = portfolioData[index].project_description
    mainImage.setAttribute('src', portfolioData[index].img_src)



}



const prev = () => {

    if (index === 0) {

        index = portfolioData.length - 1
        slide[0].classList.remove('active')
        slide[portfolioData.length - 1].classList.add('active')

    } else {
        --index
        slide[index + 1].classList.remove('active')
        slide[index].classList.add('active')
    }

    portfolio_title.innerHTML = portfolioData[index].project_name
    portfolio_text.innerHTML = portfolioData[index].project_description
    mainImage.setAttribute('src', portfolioData[index].img_src)


}


nextButton.addEventListener('click', next)

prevButton.addEventListener('click', prev)


//      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/   phone regex



//      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/           email regex



// show scroll button when user scroll


window.addEventListener('scroll', () => {

    if (window.scrollY >= 350) {
        scroll_top_button.classList.add('show')
    } else if (window.scrollY <= 350) {
        scroll_top_button.classList.remove("show")
    }

})


scroll_top_button.addEventListener('click', function () {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
})