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
// seance
let x = 1
let f1 = ()=> Math.sin(time*3) * (Math.random() < 0.06 ? (x^=1) : x)
s0.initImage('https://raw.githubusercontent.com/markdenardo/hpp/main/halloween_pumpkin_person(0)_0.png')
s1.initImage('https://raw.githubusercontent.com/markdenardo/hpp/main/halloween_pumpkin_person(0)_1.png')
s2.initImage('https://raw.githubusercontent.com/markdenardo/hpp/main/halloween_pumpkin_person(0)_2.png')
s3.initImage('https://raw.githubusercontent.com/markdenardo/hpp/main/halloween_pumpkin_person(0)_5.png')
src(s0).out(o0)
osc(10,0.1,10).modulate(osc(f1,f1,f1),0.5).out(o1)
src(o1).blend(o0,()=>Math.PI).out(o2)
render()
