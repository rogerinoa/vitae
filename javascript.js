

//////////// buttons//////////

const profile = document.querySelector(".proButton")



//////////// contentSelectors////////////

const add= document.querySelector('.direcccion')

const esto = document.querySelector('.under')
const under1= document.querySelector('.under1')
const under2= document.querySelector('.under2')
const email= document.querySelector('.email')
const contacto= document.querySelector('.contacto')

const proDesc = document.querySelector(".profile2")
const proDesc2 = document.querySelector(".profile3")
const burger = document.querySelector(".burger")
const navBar = document.querySelector(".link-style")
const navList = document.querySelectorAll(".link-style")
const pic = document.querySelector('.pic')
const fotos = document.querySelectorAll('.foto')
const deU= document.querySelector('.detailU')
const deR= document.querySelector('.detailR')
var deS= document.querySelector('.detailSe')
const deM= document.querySelector('.detailM')
const details = document.querySelector('.eDetails')
const message = document.querySelector('.message')
const uni =document.querySelector('.uni')
const close = document.querySelector('.close')
const studies = document.querySelector('.studies')
const content= document.querySelector('.content')
const butones = document.querySelectorAll('.li')
const navi = document.querySelector('.navi')
const header= document.querySelector('.header')
const courses = document.querySelector('.courses')
const close1= document.querySelector('.close1')
const logo= document.querySelector('.logo')



const como= document.querySelectorAll('.como')

const coma= Array.from(como)

if(window.innerWidth>1024 & window.innerWidth<1136){
  console.log('ahorita')
  under2.style.top='70px'
  esto.style.top='70px'
  under1.style.top='70px'

}


for(let i of coma){
  i.addEventListener('click',(e)=>{
    const current= e.currentTarget.getAttribute('data-tag')
    console.log(current)
    if(current=='direccion'){
      i.classList.toggle('email-active')
      under2.classList.toggle('under-active')


    }else if(current=='email'){
      i.classList.toggle('email-active')
      esto.classList.toggle('under-active')

    }else{
      i.classList.toggle('email-active')
      under1.classList.toggle('under-active')
    }
  })
}





////////////onlooad animation///////////////
window.addEventListener('load',()=>{
       pic.classList.add('pic-active')
      details.classList.add('eDetails-active')
      message.classList.add('message-active')
      logo.style.animation='study 3s'



      // uni.style.opacity='0.5'

})


setTimeout(eliminate, 1000)
let n=0
function eliminate(){
      n++
      message.classList.add('message-inactive')
      message.style.marginleft='20px'
      uni.style.opacity=1;
      uni.style.backgroundImage="url(/images/unilever.png)"
      if(n<4){
      setTimeout(repeat,2000)
  }
}
function repeat(){
        message.className='.message'
        message.style.marginLeft='20px'
        message.style.fontSize='20px'
        uni.style.opacity='0.7'
        uni.style.backgroundImage="url(/images/click.png)"
        setTimeout(eliminate,1000)
}


////////experience foto classes array loop////////

const b=  Array.from(butones)
const a = Array.from(fotos)

console.log(a.children)



for(let i of b){
  i.addEventListener('click',(e)=>{
    // console.log(e.currentTarget.getAttribute('data-tag'))
    let t= e.currentTarget.getAttribute('data-tag')
    if(t=='education'){
      studies.style.display='flex'

      // studies.className='.studies-active'
      content.classList.add('content-active')
      header.style.display='none'
        navi.style.display='none'
    }
    if(t=='courses'){
      courses.style.display='flex'
      // studies.className='.studies-active'
      content.classList.add('content-active')
      header.style.display='none'
      navi.style.display='none'
    }

  })
}


for(let i of a){
  i.addEventListener('click',(e)=>{
    // console.log(e.currentTarget.getAttribute('data-tag'))
            let a = e.currentTarget.getAttribute('data-tag')
            if(a=='unilever'){
                // deU.classList.toggle('detailU-active')

                deU.style.display='block';
                deR.style.display='none';
                deS.style.display= 'none';
                deM.style.display='none'
            }else if(a=='remington'){

                 // deR.classList.toggle('detailR-active')
                   deU.style.display='none'
                   deS.style.display = 'none'
                   deR.style.display='block'
                   deM.style.display='none'
            }else if(a=='sensata'){
              deU.style.display='none'
              deR.style.display='none';
              deS.style.display='block'
              deM.style.display='none'
            }else if(a=='munne'){
              deU.style.display='none'
              deR.style.display='none';
              deS.style.display='none'
              deM.style.display='block'
      }

  })

}

/////////////////////////////////////////////////////



//////////////events////////////

profile.addEventListener('click',proContent)
burger.addEventListener('click',nav)
close.addEventListener('click',clo)
close1.addEventListener('click',clo1)








//////////////// functions/////////////////

///// toggle profile info////////
let flag= true;
function proContent(e){
      profile.classList.toggle('proButton-active')
      var ee= e.target.getAttribute('data-tag')

      // if(ee=='hola'){
      //   console.log(deU.classList)
      //   deU.classList.toggle('detailU-active')
      // }

        if(flag){
            profile.style.opacity='0.5'
            profile.style.backgroundColor="#07031a"

            flag=false
        }else{
            profile.style.opacity='1'
            profile.style.backgroundColor="#07031a"
            flag=true
        }

        proDesc.classList.toggle("profile2-active")

        proDesc2.classList.toggle("profile3-active")

}

//////toggle navBar///////////////

function nav(){
   navBar.classList.toggle("link-style-active")
   burger.classList.toggle('change')


}
////////////closeFunction///////
function clo(){
  // courses.sytle.display='none'
  navi.style.display='flex'
  studies.style.display='none'
  content.classList.toggle('content-active')
  header.style.display ='flex'

  // studies.style.width= '500px'
  // header.style.maxwidth='2000px'

}
function clo1(){
  navi.style.display='flex'
  courses.style.display='none'
  content.classList.toggle('content-active')
  header.style.display='flex'


}







///////// logo selector function///////
