const products = [
  "preto-PP", 
  "preto-M", 
  "preto-G", 
  "preto-GG", 
  "preto-GG", 
  "branco-PP", 
  "branco-G", 
  "vermelho-M", 
  "azul-XG", 
  "azul-XG", 
  "azul-XG", 
  "azul-P"
]

module.exports = () => {


 var structure =[]
  products.forEach(e =>{structure.push(e.split('-'))})

 var preto = []
 var branco = []
 var vermelho = []
 var azul = []
  structure.forEach( (e, i ) =>{
 if(e[0] === "preto"){
  preto.push(e[1])
 }
 if(e[0] === "branco"){
  branco.push(e[1])
}
if(e[0] === "vermelho"){
  vermelho.push(e[1])
}
if(e[0] === "azul"){
  azul.push(e[1])
}
 
 })
//  "preto":{
//   "GG": products.map(e=>e === "GG") + ""
// },

/**
 * Preto
 */
let GG_Preto = 0
let G_Preto = 0
let P_Preto = 0
let PP_Preto = 0
let M_Preto = 0
let XG_Preto = 0


preto.map(e =>{
 
  if(e === "GG"){
   GG_Preto++
}
if(e === "XG"){
  XG_Preto++
}
 if(e === "M"){
  M_Preto++
}
 if(e === "PP"){
  PP_Preto++
}
 if(e === "G"){
  G_Preto++
}

if(e === "P"){
  P_Preto++
}
})


/**
 * Branco
 */

let GG_Branco = 0
let G_Branco = 0
let P_Branco = 0
let PP_Branco = 0
let M_Branco = 0
let XG_Branco = 0

branco.map(e =>{if(e === "GG"){
  GG_Branco++
}
if(e === "XG"){
 XG_Branco++
}
if(e === "M"){
 M_Branco++
}
if(e === "PP"){
 PP_Branco++
}
if(e === "G"){
 G_Branco++
}
if(e === "GG"){
 GG_Branco++
}
if(e === "P"){
 P_Branco++
}
})



/**
 * Vermelho
 */
let GG_Vermelho = 0
let G_Vermelho = 0
let P_Vermelho = 0
let PP_Vermelho = 0
let M_Vermelho = 0
let XG_Vermelho = 0

vermelho.map(e =>{

  
  if(e === "GG"){
  GG_Vermelho++
}
if(e === "XG"){
 XG_Vermelho++
}
if(e === "M"){
 M_Vermelho++
}
if(e === "PP"){
 PP_Vermelho++
}
if(e === "G"){
 G_Vermelho++
}
if(e === "GG"){
 GG_Vermelho++
}
if(e === "P"){
 P_Vermelho++
}
})



/**
 * Azul
 */
let GG_Azul = 0
let G_Azul = 0
let P_Azul = 0
let PP_Azul = 0
let M_Azul = 0
let XG_Azul = 0

azul.map(e =>{if(e === "GG"){
  GG_Azul++
}
if(e === "XG"){
 XG_Azul++
}
if(e === "M"){
 M_Azul++
}
if(e === "PP"){
 PP_Azul++
}
if(e === "G"){
 G_Azul++
}
if(e === "GG"){
 GG_Azul++
}
if(e === "P"){
 P_Azul++
}
})




return  {
  "preto": {
    "PP":PP_Preto,
    "M":M_Preto,
  "G":G_Preto,

// "XG":XG_Preto,
"GG":GG_Preto,

// "P": P_Preto,

  },
  "branco": {
"PP":PP_Branco,

    // "XG":XG_Branco,
// "GG":GG_Branco,
"G":G_Branco,
// "M":M_Branco,
// "P": P_Branco
  },
  "vermelho": {  
  // "PP":PP_Vermelho,

  // "XG":XG_Vermelho,
  // "GG":GG_Vermelho,
  // "G":G_Vermelho,
  "M":M_Vermelho,
  // "P": P_Vermelho
  },

  "azul": {  
    "XG":XG_Azul,
    // "GG":GG_Azul,
    // "G":G_Azul,
    // "M":M_Azul,
    "P": P_Azul,
    // "PP": PP_Azul 
    }

}



 
}


