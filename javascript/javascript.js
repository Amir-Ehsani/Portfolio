
const lerp = (a, b, n) => (1 - n) * a + n * b;
class Cursor {
  constructor() {
    this.target = {x: 0.5, y: 0.5};
    this.cursor = {x: 0.5, y: 0.5};
    this.speed = 0.1;
    this.init();
  }
  init() {
    this.onMouseMove = this.onMouseMove.bind(this);
    this.render = this.render.bind(this); 
    window.addEventListener('mousemove', this.onMouseMove);
    this.raf = requestAnimationFrame(this.render);
  }
  onMouseMove(e) {
    this.target.x = e.clientX / window.innerWidth;
    this.target.y = e.clientY / window.innerHeight;
    if (!this.raf) this.raf = requestAnimationFrame(this.render);
  }
  render() {
    this.cursor.x = lerp(this.cursor.x, this.target.x, this.speed);
    this.cursor.y = lerp(this.cursor.y, this.target.y, this.speed);
    
    document.documentElement.style.setProperty('--cursor-x', this.cursor.x);
    document.documentElement.style.setProperty('--cursor-y', this.cursor.y);
    const delta = Math.sqrt(
      Math.pow(this.target.x - this.cursor.x, 2) +
      Math.pow(this.target.y - this.cursor.y, 2)
    );
    
    if (delta < 0.0001) {
      cancelAnimationFrame(this.raf);
      this.raf = null;
      return;
    }
    this.raf = requestAnimationFrame(this.render);
  }
}
new Cursor();



const intro = document.querySelector('.intro');
const TextLogo = document.querySelectorAll('.logo');

console.log(TextLogo)
window.addEventListener('load', function(){

    setTimeout(()=>{
        TextLogo.forEach((Logo,inx)=>{
            setTimeout(()=>{
                Logo.classList.add('active')
            },(inx+1)*400)
        }) 
    })

    setTimeout(()=>{
       TextLogo.forEach((Logo, inx) => {
           setTimeout(()=>{
               Logo.classList.remove('active');
               Logo.classList.add('fade');
           },(inx+1)*50)
       }) 
    }, 2000)

    setTimeout(()=>{
        intro.style.top = '-100vh'
    },2500)
})




const text = ['Javscript','C++',"Python","Html","Css"];

var count = 0;
var letter = "";
var index = 0;
var currentText = "";


(function type(){

    if(count === text.length){
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);

   document.querySelector('.type').textContent = letter;
    console.log(index)
   if(letter.length === currentText.length){
       count++;
       index =0;
   }

   setTimeout(type, 250)

})()


// var blg = document.querySelector(".btn-lg")

// blg.addEventListener("click",()=>{
//   alert("hello world")
// })


// console.log("hello world")


