// =============================
// Typed Animation
// =============================

var typed = new Typed("#typing",{

strings:[

"AI & ML Student",

"Python Developer",

"Software Developer",

"Open to Internship",

"Problem Solver"

],

typeSpeed:80,

backSpeed:50,

backDelay:1500,

loop:true

});

// =============================
// AOS Animation
// =============================

AOS.init({

duration:1000,

once:false,

offset:100

});

// =============================
// Particle Background
// =============================

particlesJS("particles-js",{

particles:{

number:{
value:90,
density:{
enable:true,
value_area:800
}
},

color:{
value:"#3b82f6"
},

shape:{
type:"circle"
},

opacity:{
value:0.5,
random:true
},

size:{
value:4,
random:true
},

line_linked:{
enable:true,
distance:150,
color:"#2563eb",
opacity:0.4,
width:1
},

move:{
enable:true,
speed:2,
direction:"none",
random:false,
straight:false,
out_mode:"out"
}

},

interactivity:{

detect_on:"canvas",

events:{

onhover:{
enable:true,
mode:"grab"
},

onclick:{
enable:true,
mode:"push"
},

resize:true

},

modes:{

grab:{
distance:180,
line_linked:{
opacity:1
}
},

push:{
particles_nb:4
}

}

},

retina_detect:true

});
