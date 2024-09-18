class FiguraGeometrica {
    constructor(){
     
    }
}

 class Figura extends Cuadrado{

    constcuadrado = new cauadrado(4);

     return = cuadrado

    }

   class Figura extends Triangulo{

    const = new triangulo(3, 5);

        return = triangulo
    
    }   

      class Figura extends Rectantgulo{

        consrectangudo = new rectangudo(8, 6); 

            return = rectangulo  

       
 } 
 const cuadrado = new Cuadrado(4);
const triangulo = new Triangulo(3, 5);
const rectangulo = new Rectangulo(8, 6);

console.log(cuadrado.calcularArea()); // 16
console.log(clasificarFigura(cuadrado)); // "Pequeña"
console.log(triangulo.calcularArea()); // 7.5
console.log(clasificarFigura(triangulo)); // "Pequeña"
console.log(rectangulo.calcularArea()); // 48
console.log(clasificarFigura(rectangulo)); // "Grande"