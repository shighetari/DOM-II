// Your code goes here

//start of document query selector

function get(selector) {
    return document.querySelector(selector)
}
function getAll(selector) {
    return document.querySelectorAll(selector)
}

                    //                            START OF CONSTS                        \\

const mainNav = get('.main-navigation')
const logoHeading = get('.logo-heading')
const intro = get(".intro")
const contentSection = get(".content-section")
const contentDestination = get(".content-destination")
const Ps = getAll('p')
const h2s = getAll('h2')
const nLinks = getAll('.nav-link')


        /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/ 


                            //                       start of functions                  \\

         /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/ 

function makeRed() {
    if(event.key === 'Shift') { 
        if(logoHeading.style.color !=='red'){
            logoHeading.style.color = 'red'
        } else 
        logoHeading.style.color = 'initial';
    } 

  
}

 
// logoHeading.addEventListener('keydown', makeRed); WHY WONT THIS WORK!?

 /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/ 
/*                  MICHAELS attempt to fix lol 
function makeRed(e) {
    debugger
    if(e.key === 'Shift') { 
        
        if(logoHeading.style.color !=='red'){
            logoHeading.style.color = 'red'
        } else 
        logoHeading.style.color = 'initial';
    } 
}
logoHeading.addEventListener('keydown', makeRed(e));
*/
 /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/ 


 /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/   
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 
  
    mainNav.style.background = bgColor;
    }
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    function testFunction() {
        if(intro.style.backgroundColor !=='purple'){
            intro.style.backgroundColor = 'purple'
        } else 
        intro.style.backgroundColor = 'initial';
    }

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    function contentDestinationfunction() {
        if(contentDestination.style.transform !== 'rotate(180deg)'){
        contentDestination.style.transform = 'rotate(180deg)'
    }else 
    contentDestination.style.transform = 'initial'
    }
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function CSection() {
    if(contentSection.style.color !=='red'){
        contentSection.style.color = 'red'
    } else 
    contentSection.style.color = 'initial';
}
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function Pstuff() {

    const PsArr = Array.from(Ps)
    PsArr.forEach(item=>{
        if(item.style.color !== 'red'){
            item.style.color = 'red'
        }
        else{

         item.style.color = 'initial'
        }
        
    })

}
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    function changeBG() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
     
      
        get('body').style.background = bgColor;
        

    }
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    const h2Arr = Array.from(h2s)
    function selecth2() {


        const PsArr = Array.from(h2s)
       h2Arr.forEach(item => {
           if(  item.style.fontSize !== '200px'){
           item.style.fontSize = '200px'

           
         } else 
            item.style.fontSize = 'initial'

        }      ) 
    }

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
        //              Propagation                 \\

    function theClick(event) {
        console.log('🎯 the target    ', event.target)
        console.log('🧭 current target', event.currentTarget)
        console.log('\n')
      }
      const allElementsArray = Array.from(document.all)
      allElementsArray.forEach(element => {
        element.addEventListener('click', theClick)
      })


      mainNav.addEventListener('click', event => {
        console.log('evil grin, stopping propagation of the event')
        event.stopPropagation()
      })

      //preventDefault()

      // MARTA METHOD\\

   /*   nLinks.forEach((item) => { item.addEventListener('click', event => {
        event.preventDefault();
     })
     }) */      

                    // ARRAY METHOD\\
      const nLinksArr = Array.from(nLinks)
    //   nLinks.preventDefault()
    nLinks.forEach(item => {
        item.addEventListener('click', element => {
            element.preventDefault();
        })
        
    })



/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
//                              END OF FUNCTIONS                        \\

//                          START of AddEventListeners                    \\


    mainNav.addEventListener('wheel',random_bg_color )
    intro.addEventListener('mouseover', testFunction) 
    contentDestination.addEventListener('dblclick', contentDestinationfunction)
    window.addEventListener('resize', CSection)
    document.addEventListener('keydown', makeRed)
    Ps.forEach(item => item.addEventListener('click', Pstuff))
    window.addEventListener('scroll', changeBG)
    h2Arr.forEach(item=> item.addEventListener('copy', selecth2))
    // LISTENER ON LINE 173
    // LISTENER ON LINE 155 








// J U N K CODE

// const logoHeading = document.querySelector(`.logo-heading`);

// logoHeading.addEventListener('click', theClick)
//     style.color ="red";

//     function logoHeading(event) {
//         logoHeading.addEventListener('click', theClick)
//         style.color ="red";
//     }
// const logoHeading = document.querySelector(`.logo-heading`);

// function onEscape(event){
//     if (event.key === 'click') {
//         logoHeading = .style.color = "red";

//     }
// }
// logoHeading.addEventListener('click', onEscape)


