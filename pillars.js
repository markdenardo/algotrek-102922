// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// pillars 
// MDN 2022(@markdenardo)
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
