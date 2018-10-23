function setup(){
  noCanvas();
  
  const values = [];
  for(let i =0; i<16;i++){
      values[i] = random(0,100);
  }

  const shapeA = [4,4];
  const shapeB = [4,4]

  const a = tf.tensor2d(values, shapeA,"int32");
  const b = tf.tensor2d(values, shapeB,"int32");

  const c = tf.matMul(a,b)
  const d = tf.transpose(a)
  //const e = tf.linalg.inv(a)
 

  a.print()
  b.print()
  c.print()
  d.print()
 
  //const vtense = tf.variable(tense)

  //console.log(vtense)

  //tense.data().then((stuff)=>console.log(stuff))
  //console.log(tense.dataSync())
  //console.log(tense.get(29));

  //console.log(tense)


}