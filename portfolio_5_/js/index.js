/*
   Author: Reetabrata Bhandari
   (C) 2021 RB TECH. All Rights Reserved
*/

build = function(data) {
    root = $('#container')
    pages = ['about', 'what_i_do', 'works', 'contact', 'home']
    option = pages[data]
    if (option == 'about') {
        //About JS
        root.html('<h1>Loading ...</h1>')
        root.html("<style>#container {background-position: right;}</style><div id='navContent'> <a title='Home' onclick='build(4)'><svg class='MuiSvgIcon-root' focusable='false' viewBox='0 0 24 24' aria-hidden='true' style='display: block; width: 2em; height: 2em; fill: #2e8b57; margin: auto;'><path d='M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z'></path></svg></a> <a onclick='build(0)'>About</a> <a onclick='build(1)'>What I Do</a> <a onclick='build(2)'>Works</a> <a onclick='build(3)'>Contact</a> </div><br> <br> <br> <div id='about'> <h1 style=' color: #999999;opacity: 0;animation-name: fade-in;animation-duration: 300ms;animation-iteration-count: 1;animation-timing-function: ease-in;animation-fill-mode: forwards;'>About <a>Me</a></h1> <br> <p style=' width: 40em; color: #8a8a8a; font-size: 1.1em; font-weight: 400; text-align: left; line-height: 1.6em; letter-spacing: 0.3px; word-spacing: 1px; text-rendering: optimizeSpeed;opacity: 0;animation-name: fade-in;animation-duration: 400ms;animation-iteration-count: 1;animation-timing-function: ease-in;animation-fill-mode: forwards;'>Hello, I'm <d>Reetabrata Bhandari</d>, a boy of age 16, based in <d>Bengal, India</d>. I like Coding, Animations, 3D Arts, Editing, Photography, Open World Games, Songs and Movies. <br><br> I learnt coding from <d>online tutorials</d>, from websites like - <d>w3schools</d>, freeCodeCamp, tutorialspoint, etc. <br> <br> I know <d>Website Development</d>, SEO, Programming, Animations, 3D Arts, Photography &amp; Videography, Editing. <br> <br> I'm experienced in <d>apps</d> like - Adobe Photoshop, Sketch, VS Code, <d>Office Apps</d>, etc. <br> <br> See <c onclick='build(3)' style=' cursor: pointer; '>Contact Section</c> for more info.</p> </div>" + '<div id="pagebar" class="SYS reetUI-page-navigation smoothui softTouch"> <span id="arrowleft"></span> <div style=" background: #2e8b578f; "></div> <div style=" background: seagreen; "></div> <div style=" background: #2e8b578f; "></div> <div style=" background: #2e8b578f; "></div> <div style=" background: #2e8b578f; "></div><span id="arrowright"> </span> </div>');
        handleListener();
        $(USB.arrleft).on("click", function() {
            build(4);
        });
        $(USB.arrright).on("click", function() {
            build(1);
        });
    } else if (option == 'what_i_do') {
        // What I Do JS
        root.html('<h1>Loading ...</h1>');
        root.html("<div id='navContent'> <a title='Home' onclick='build(4)'><svg class='MuiSvgIcon-root' focusable='false' viewBox='0 0 24 24' aria-hidden='true' style='display: block; width: 2em; height: 2em; fill: #2e8b57; margin: auto;'><path d='M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z'></path></svg></a> <a onclick='build(0)'>About</a> <a onclick='build(1)'>What I Do</a> <a onclick='build(2)'>Works</a> <a onclick='build(3)'>Contact</a> </div>" + '" <br> <br> <br> <div id="what-i-do" style=" text-align: center; width: fit-content; height: fit-content; margin: auto; margin-right: 7em; "> <br> <h1 style=" color: #999999; opacity: 0; animation-name: fade-in; animation-duration: 300ms; animation-iteration-count: 1; animation-timing-function: ease-in; animation-fill-mode: forwards; "><a>What</a> I Do</h1> <br> <p style=" color: #999999; width: 34em; margin: auto; ">I know Website Development, SEO, Programming, Animations, 3D Arts, Photography &amp; Videography, Editing.</p><div id="what-i-do-content" style=" /* width: 19em; */ display: flex; "> <div id="flexbox"> <h2 style=" font-size: 2.4em; font-weight: 100; color: #999999; ">HTML</h2><div class="MuiLinearProgress-root MuiLinearProgress-colorPrimary MuiLinearProgress-determinate" role="progressbar" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100" style=" --ML__static-fonts: true; -webkit-font-smoothing: antialiased; user-select: none; color: rgba(0, 0, 0, 0.87); font-size: 0.875rem; font-family: Roboto Slab; font-weight: 400; line-height: 1.43; overflow: hidden; position: relative; background-color: #b6dcc7; height: 10px; border-radius: 1em; "><div class="MuiLinearProgress-bar MuiLinearProgress-barColorPrimary MuiLinearProgress-bar1Determinate" style="transform: translateX(-11%);--ML__static-fonts: true;-webkit-font-smoothing: antialiased;user-select: none;color: rgba(0, 0, 0, 0.87);font-size: 0.875rem;font-family: Roboto Slab;font-weight: 400;line-height: 1.43;top: 0;left: 0;width: 100%;bottom: 0;position: absolute;transform-origin: left;background-color: #2e8b57;transition: transform .4s linear;transform: translateX(-5%);"></div></div><h2 style=" font-size: 2.4em; font-weight: 100; color: #999999; ">CSS</h2> <div class="MuiLinearProgress-root MuiLinearProgress-colorPrimary MuiLinearProgress-determinate" role="progressbar" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100" style=" --ML__static-fonts: true; -webkit-font-smoothing: antialiased; user-select: none; color: rgba(0, 0, 0, 0.87); font-size: 0.875rem; font-family: Roboto Slab; font-weight: 400; line-height: 1.43; overflow: hidden; position: relative; background-color: #b6dcc7; height: 10px; border-radius: 1em; "><div class="MuiLinearProgress-bar MuiLinearProgress-barColorPrimary MuiLinearProgress-bar1Determinate" style="transform: translateX(-11%);--ML__static-fonts: true;-webkit-font-smoothing: antialiased;user-select: none;color: rgba(0, 0, 0, 0.87);font-size: 0.875rem;font-family: Roboto Slab;font-weight: 400;line-height: 1.43;top: 0;left: 0;width: 100%;bottom: 0;position: absolute;transform-origin: left;background-color: #2e8b57;transition: transform .4s linear;transform: translateX(-15%);"></div></div> </div> <div id="flexbox"> <h2 style=" font-size: 2.4em; font-weight: 100; color: #999999; ">JS</h2><div class="MuiLinearProgress-root MuiLinearProgress-colorPrimary MuiLinearProgress-determinate" role="progressbar" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100" style=" --ML__static-fonts: true; -webkit-font-smoothing: antialiased; user-select: none; color: rgba(0, 0, 0, 0.87); font-size: 0.875rem; font-family: Roboto Slab; font-weight: 400; line-height: 1.43; overflow: hidden; position: relative; background-color: #b6dcc7; height: 10px; border-radius: 1em; "><div class="MuiLinearProgress-bar MuiLinearProgress-barColorPrimary MuiLinearProgress-bar1Determinate" style="transform: translateX(-11%);--ML__static-fonts: true;-webkit-font-smoothing: antialiased;user-select: none;color: rgba(0, 0, 0, 0.87);font-size: 0.875rem;font-family: Roboto Slab;font-weight: 400;line-height: 1.43;top: 0;left: 0;width: 100%;bottom: 0;position: absolute;transform-origin: left;background-color: #2e8b57;transition: transform .4s linear;transform: translateX(-20%);"></div></div><h2 style=" font-size: 2.4em; font-weight: 100; color: #999999; ">Animations</h2> <div class="MuiLinearProgress-root MuiLinearProgress-colorPrimary MuiLinearProgress-determinate" role="progressbar" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100" style=" --ML__static-fonts: true; -webkit-font-smoothing: antialiased; user-select: none; color: rgba(0, 0, 0, 0.87); font-size: 0.875rem; font-family: Roboto Slab; font-weight: 400; line-height: 1.43; overflow: hidden; position: relative; background-color: #b6dcc7; height: 10px; border-radius: 1em; "><div class="MuiLinearProgress-bar MuiLinearProgress-barColorPrimary MuiLinearProgress-bar1Determinate" style="transform: translateX(-11%);--ML__static-fonts: true;-webkit-font-smoothing: antialiased;user-select: none;color: rgba(0, 0, 0, 0.87);font-size: 0.875rem;font-family: Roboto Slab;font-weight: 400;line-height: 1.43;top: 0;left: 0;width: 100%;bottom: 0;position: absolute;transform-origin: left;background-color: #2e8b57;transition: transform .4s linear;transform: translateX(-17%);"></div></div> </div> </div> </div></div>" <div id="pagebar" class="SYS reetUI-page-navigation smoothui softTouch"> <span id="arrowleft"></span> <div style=" background: #2e8b578f; "></div> <div style="background: #2e8b578f;"></div> <div style="background: seagreen;"></div> <div style=" background: #2e8b578f; "></div> <div style=" background: #2e8b578f; "></div><span id="arrowright"> </span> </div>');
        handleListener();
        $(USB.arrleft).on("click", function() {
            build(0);
        });
        $(USB.arrright).on("click", function() {
            build(2);
        });
    } else if (option == 'works') {
        // Works JS
        root.html('<h1>Loading ...</h1>');
        root.html("<style>#container {background-position: right;}</style><div id='navContent'> <a title='Home' onclick='build(4)'><svg class='MuiSvgIcon-root' focusable='false' viewBox='0 0 24 24' aria-hidden='true' style='display: block; width: 2em; height: 2em; fill: #2e8b57; margin: auto;'><path d='M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z'></path></svg></a> <a onclick='build(0)'>About</a> <a onclick='build(1)'>What I Do</a> <a onclick='build(2)'>Works</a> <a onclick='build(3)'>Contact</a> </div>" + ' <br> <br> <br> <div id="works"> <h1 style=" color: #999999; opacity: 0; animation-name: fade-in; animation-duration: 300ms; animation-iteration-count: 1; animation-timing-function: ease-in; animation-fill-mode: forwards; "><a>My</a> Works</h1> <br> <p style=" color: #999999; width: 40em; font-size: 1.1em; opacity: 0; animation-name: fade-in; animation-duration: 300ms; animation-iteration-count: 1; animation-timing-function: ease-in; animation-fill-mode: forwards; ">I have built a few stylish and <a>responsive</a> websites. <br><br> I make fast, animated, responsive, secured and light websites with good <a>SEO (Search Engine Optimization)</a><br></p> <br> <ul style=" color: seagreen; text-align: left; width: fit-content; margin: auto; opacity: 0; animation-name: fade-in; animation-duration: 400ms; animation-iteration-count: 1; animation-timing-function: ease-in; animation-fill-mode: forwards; "> <li href="http://rb-tech.ga" target="blank" style=" opacity: 0; animation-name: fade-in; animation-duration: 400ms; animation-iteration-count: 1; animation-timing-function: ease-in; animation-fill-mode: forwards; ">rb-tech.ga</li> <li href="http://reetabrata-bhandari.ml" target="blank">reetabrata-bhandari.ml</li> <li>bookstack.io</li> <li>todo-rbtech.io</li> </ul> <br><p style=" color: #999; ">For more info visit my <a style=" cursor: pointer; ">Github Profile</a>.</p> </div><div id="pagebar" class="SYS reetUI-page-navigation smoothui softTouch"> <span id="arrowleft"></span> <div style=" background: #2e8b578f; "></div> <div style="background: #2e8b578f;"></div> <div style="background: #2e8b578f;"></div> <div style="background: seagreen;"></div> <div style="background: #2e8b578f;"></div><span id="arrowright"> </span> </div>');
        handleListener();
        $(USB.arrleft).on("click", function() {
            build(1);
        });
        $(USB.arrright).on("click", function() {
            build(3);
        });
    } else if (option == 'contact') {
        // Contact JS
        root.html('<h1>Loading ...</h1>');
        root.html("<div id='navContent'> <a title='Home' onclick='build(4)'><svg class='MuiSvgIcon-root' focusable='false' viewBox='0 0 24 24' aria-hidden='true' style='display: block; width: 2em; height: 2em; fill: #2e8b57; margin: auto;'><path d='M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z'></path></svg></a> <a onclick='build(0)'>About</a> <a onclick='build(1)'>What I Do</a> <a onclick='build(2)'>Works</a> <a onclick='build(3)'>Contact</a> </div>" + '<br> <br> <br> <br> <div id="contact"> <h1 style=" color: #999; ">Contact <a>Me</a></h1> <br> <p style=" color: #999; "><a style=" font-size: 1.2em; ">My physical location is:</a><br><br>Reetabrata Bhandari<br><br> Suri, Birbhum, West Bengal, 731101, India. <br><br> Tel: <a>************</a> <br> <br> Email: <a href="malito:reetabrata.bhandari@gmail.com">reetabrata.bhandari@gmail.com</a><br><br> </p> <h1 style=" color: #999; margin: auto; "><a>Follow</a> Me</h1><br> <div id="social" style=" position: unset; display: flex; flex-direction: row; height: 3em; width: 14em; border-radius: 2em; margin: auto; background: transparent; "> <span class="fbIcon" style=" font-size: 3.3em; width: fit-content; margin: auto; "></span> <span class="instaIcon" style=" font-size: 1.8em; margin: auto; height: fit-content; width: fit-content; "></span> <span class="tweetIcon" style=" font-size: 2.7em; margin: auto; height: fit-content; "></span> </div> </div><div id="pagebar" class="SYS reetUI-page-navigation smoothui softTouch"> <span id="arrowleft"></span> <div style=" background: #2e8b578f; "></div> <div style="background: #2e8b578f;"></div> <div style="background: #2e8b578f;"></div> <div style="background: #2e8b578f;"></div> <div style="background: seagreen;"></div><span id="arrowright"> </span> </div>')
        handleListener();
        $(USB.arrleft).on("click", function() {
            build(2);
        });
        $(USB.arrright).on("click", function() {
            build(4);
        });
    } else if (option == 'home') {
        root.html('');
        root.html(name);
        handleListener();
        $(USB.arrleft).on("click", function() {
            error();
        });
        $(USB.arrright).on("click", function() {
            build(0);
        });
    } else if (option == null)
        // Error JS
        console.log('Please enter valid parameters !')
    else
        // Error JS
        console.log('An error has occured !');

}

$(function() {
    name = $('#container').html();
})
homeBtn = $('#container').html();

var home = document.querySelector("#pagebar > div:nth-child(2)");
var about = document.querySelector("#pagebar > div:nth-child(3)");
var whatido = document.querySelector("#pagebar > div:nth-child(4)");
var works = document.querySelector("#pagebar > div:nth-child(5)");
var contact = document.querySelector("#pagebar > div:nth-child(6)");

$(function() {
    USB = {
        "home": "#pagebar > div:nth-child(2)",
        "about": "#pagebar > div:nth-child(3)",
        "whatido": "#pagebar > div:nth-child(4)",
        "works": "#pagebar > div:nth-child(5)",
        "contact": "#pagebar > div:nth-child(6)",
        "arrleft": "#arrowleft",
        "arrright": "#arrowright"
    };
});

function handleListener() {
    $(USB.home).on("click", function() {
        build(4);
    });

    $(USB.about).on("click", function() {
        build(0);
    });
    $(USB.whatido).on("click", function() {
        build(1);
    });
    $(USB.works).on("click", function() {
        build(2);
    });
    $(USB.contact).on("click", function() {
        build(3)
    });
    console.log("Successfully handled Listeners.");
}
$(function() {
    handleListener();
    $(USB.arrleft).on("click", function() {
        error();
    });
    $(USB.arrright).on("click", function() {
        build(0);
    });
});
;console.log("%c Reetabrata Bhandari", "color: green; font-family: Segoe ui; font-style: italic; font-size: 20px");

const state = {
    'Vendor': navigator.vendor,
    'Version': navigator.appVersion,
    'Cookie Enabled': navigator.cookieEnabled,
    'Language': navigator.language
};
function error() {
    $("#container").append('<div id="msg"> <span style=" height: fit-content; margin: auto; ">No pages on the left</span><span style=" font-size: 4em; font-weight: 900; font-family: hp simplified; margin-left: 26px; ">!</span> </div>');

    setTimeout(function() {
        $("#msg").slideToggle(1000);
    }, 4000)
    setTimeout(function() {
        $("#msg").remove();
    }, 6000)
}
;