const dolar = 0.0079;
const euro = 0.0076;
const libra =0.0066;
const chileno = 7;

let monto;

let moneda ;

function divisas(){
    let monto = parseFloat(prompt("Ingrese monto"));

            let instruccion3=prompt("INGRESE MONEDA DESEADA: (1) DOLAR; (2) EURO;  (3) LIBRA;  (4) PESO CHILENO");

           switch(instruccion3){               

                case "1":

                    moneda =(monto*dolar);

                    alert(`Valor total es de ` + moneda +"dolares");

                    break;

                case "2":

                    moneda =(monto*euro);

                    alert(`Valor total es de ` + moneda +"euros");

                    break;

                case "3":

                    moneda =(monto*libra);

                    alert(`Valor total es de ` + moneda +"libras");

                    break;

                case "4":

                    moneda =(monto*chileno);

                    alert(`Valor total es de ` + moneda +"pesos chilenos");

                    break;

                default: alert("Por favor, ingrese un número de cuotas valido.");

                    break;

            }
}