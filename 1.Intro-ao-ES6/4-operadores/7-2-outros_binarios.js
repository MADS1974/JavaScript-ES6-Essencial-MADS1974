// in
something in somethingItems

// Arrays
var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "sicômoro");
0 in arvores; // retorna true
3 in arvores; // retorna true
6 in arvores; // retorna false
"cedro" in arvores; // retorna false (você deve especificar o número do índice, não o valor naquele índice - "cedro" in arvores[2] retorna true)
"length" in arvores; // retorna true (length é uma propriedade de Array)

// Objetos predefinidos
"PI" in Math; // retorna true
var minhaString = new String("coral");
"length" in minhaString; // retorna true

// Objetos personalizados
var minhaMoto = { marca: "Honda", modelo: "CBR-300", ano: 2010 };
"marca" in minhaMoto; // retorna true
"modelo" in minhaMoto; // retorna true

// instaceof
objeto instanceof tipoObjeto

var dia = new Date(2021, 09, 26);

if (data instanceof Date) {
    // code here
}