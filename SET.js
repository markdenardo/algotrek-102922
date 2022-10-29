p1 = new P5()
s0.init({src:p1.canvas})
p1.draw=()=>{
p1.background(0, 220, 204);
	p1.fill(0, 25, 149);
	p1.stroke(0);
	
	p1.translate(p1.width/2, p1.height/2);
	
	for (i=0; i < 100; i++){
		p1.push();
		p1.rotate(i*100 / 15.0);
		p1.scale(i / 16.0);
		p1.ellipse(i,p1.mouseY, 100, 100);
		p1.pop();
	}
}
const f =()=>a.fft[0]
src(s0).modulate(o0,()=>Math.sin(Math.random(Math.PI))).add(solid(0,0,0)).out(o0)
render(o0)
// pillars
shape(()=>time)
.repeat(()=>time,1)
  .kaleid(()=>Math.PI)
  .scale(0.3,0.2)
  .modulate(osc())
.luma(1)
  .add(o0,0.7)
.repeat(()=>Math.PI,)
.color(()=>Math.random(time))
  .out(o0)
// black_hole - time_dilation
// MDN (@markdenardo)

let rrand = (min, max) => Math.random() * (max - min) + min;
let clamp = (x1) => Math.max(0, Math.min(x1, 1));
let either = (x1,y1,w1=0.5) => Math.random() > w1 ? x1 : y1;

perms = 0;
function cM(){navigator.permissions.query({name: 'microphone'}).then((pS)=>{perms = pS.state !== 'denied';});}
cI = window.cI ? cI : 0;clearInterval(cI);cI = setInterval(cM,3000);if(/iPad|iPhone|iPod/.test(navigator.userAgent)) clearInterval(cI);
let x1 = 0
let nomic = ()=> x1 = either(clamp(x1 += rrand(-.05,.12)) , x1 *= 0.7 )
let yesmic = ()=> a.fft[0];
let f1 = ()=> perms ? yesmic() : nomic();

const t1 =(()=>time)
const pi1=(()=>Math.random(Math.PI))
const sh1=(s,o,m)=>(shape(s).repeat(t1,1).kaleid([1,2,3].fast()).scale(pi1).rotate(t1,0.1).out(o))
const flt1=(i,v,o)=>(src(i).scale(v).out(o))
const flt2=(i,m,v,o)=>(src(i).modulate(m).modulatePixelate(noise(v,0.5),100).out(o))

sh1(f1,o0,o0)
flt1(o0,f1,o1)
flt1(o0,pi1,o2)
flt2(o0,o1,f1,o3)
render(o3)
//ramiel
shape(3).modulate(o0,0.5).repeat(()=>time,1).modulatePixelate(osc(1,1,1)).repeat(Math.PI,time*4).out(o0)
//
src(o0).add(noise(1,1,1),1).out(o1)
//
src(o1).color(10,10,100).modulate(o3).out(o2)
//
shape(3).rotate(()=>Math.sin(time)).repeat(()=>time,1).out(o3)
render(o0)
//pt. 2
const arr=[1,2,3]
const arr1=(arr.map(n=>1+n))
console.log('arr1',arr1)
const f2=(()=>a.fft[2])
voronoi(1,1,1).color(f2).modulate(o0,Math.PI).out(o0)
shape(arr1).modulatePixelate(osc(1,1,1)).modulate(o1,0.5).add(o0).out(o1)
render(o0)
//
// halloween
let x = 1
let f3 = ()=> Math.sin(time*3) * (Math.random() < 0.06 ? (x^=1) : x)
s0.initImage('https://raw.githubusercontent.com/markdenardo/hpp/main/halloween_pumpkin_person(0)_0.png')
s1.initImage('https://raw.githubusercontent.com/markdenardo/hpp/main/halloween_pumpkin_person(0)_1.png')
s2.initImage('https://raw.githubusercontent.com/markdenardo/hpp/main/halloween_pumpkin_person(0)_2.png')
s3.initImage('https://raw.githubusercontent.com/markdenardo/hpp/main/halloween_pumpkin_person(0)_5.png')
src(s0).out(o0)
osc(10,0.1,10).modulate(osc(f3,f3,f3),0.5).out(o1)
src(o1).blend(o0,()=>Math.PI).out(o2)
render(o2)
