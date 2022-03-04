/*Primeiro Checkpoint - Turma 1
Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. 
Veja abaixo os requisitos do projeto:

- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. 
Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

*/


const opcao = "Lasanha";
var tempo = 25;

console.log(`


Selecione a opção desejada:

1 - Pipoca - 10 segundos
2 - Macarrão - 8 segundos
3 - Carne - 15 segundos
4 - Feijão - 12 segundos
5 - Brigadeiro - 8 segundos
`);

switch (opcao){

    case "Pipoca":
        if(tempo <= 9){
            console.log("Tempo insuficiente!");
        }else if (tempo >= 10 && tempo <= 19){
            console.log("Prato pronto, bom apetite!!!");
        }else if(tempo >= 20 && tempo <= 29){
            console.log("Sua comida queimou!!!");
        }else if(tempo >= 30){
            console.log("Kabumm!!!");
        }

        break;

        case "Macarrão":
            if(tempo <= 7){
                console.log("Tempo insuficiente!");
            }else if (tempo >= 8 && tempo <= 15){
                console.log("Prato pronto, bom apetite!!!");
            }else if(tempo >= 16 && tempo <= 23){
                console.log("Sua comida queimou!!!");
            }else if(tempo >= 24){
                console.log("Kabumm!!!");
            }
    
            break;

            case "Carne":
                if(tempo <= 14){
                    console.log("Tempo insuficiente!");
                }else if (tempo >= 15 && tempo <= 29){
                    console.log("Prato pronto, bom apetite!!!");
                }else if(tempo >= 30 && tempo <= 44){
                    console.log("Sua comida queimou!!!");
                }else if(tempo >= 45){
                    console.log("Kabumm!!!");
                }
        
                break;

                case "Feijão":
                    if(tempo <= 11){
                        console.log("Tempo insuficiente!");
                    }else if (tempo >= 12 && tempo <= 23){
                        console.log("Prato pronto, bom apetite!!!");
                    }else if(tempo >= 24 && tempo <= 35){
                        console.log("Sua comida queimou!!!");
                    }else if(tempo >= 36){
                        console.log("Kabumm!!!");
                    }
            
                    break;

                    case "Brigadeiro":
                        if(tempo <= 7){
                            console.log("Tempo insuficiente!");
                        }else if (tempo >= 8 && tempo <= 15){
                            console.log("Prato pronto, bom apetite!!!");
                        }else if(tempo >= 16 && tempo <= 23){
                            console.log("Sua comida queimou!!!");
                        }else if(tempo >= 24){
                            console.log("Kabumm!!!");
                        }
                
                        break;

                    default:
                            console.log("Prato inexistente!!!");
                        

}

