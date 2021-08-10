burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
right=document.querySelector('.right')
navbarlist=document.querySelector('.navbar-list')



burger.addEventListener('click',()=>{
    right.classList.toggle('vclassresp')
    navbarlist.classList.toggle('vclassresp')
    navbar.classList.toggle('hnavresp')
  
}

)

function check(){
    var checkBox=document.getElementById("checkbox");
    var text1=document.getElementsByClassName("text1");
    var text2=document.getElementsByClassName("text2");

    for(var i=0;i<text1.length;i++)
    {
        if(checkBox.checked==true)
        {
            text1[i].style.display="block";
            text2[i].style.display="none";

        }
         else if(checkBox.checked==false)
        {
            text1[i].style.display="none";
            text2[i].style.display="block";

        }
    }

}
check();

// function bgr(){
   
//     burger.addEventListener('click',()=>{
//         var x=document.getElementsByClassName("profile-img");
//         if (x.style.display === "block") {
//             x.style.display = "none";
//           } else {
//             x.style.display = "block";
//           }
//     })
// }
// bgr();