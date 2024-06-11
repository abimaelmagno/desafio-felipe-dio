//apresentacao
const apresentacao  = "Segue o codigo";
console.log (apresentacao); 
// Cria o objeto 'jogador' com as propriedades 'nome' e 'xp'
let jogador = {
    nome: "Gladiador",
    xp: 6532
};

// Arrays de limites de XP e níveis correspondentes
const limites = [1000, 2000, 5000, 7000, 8000, 9000, 10000];
const niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];

// Função para determinar o nível com base na XP
const determinarNivel = xp => niveis[limites.findIndex(limite => xp <= limite) === -1 ? niveis.length - 1 : limites.findIndex(limite => xp <= limite)];

// Determina o nível do jogador com base na XP
let nivel = determinarNivel(jogador.xp);

// Exibe a mensagem final
console.log(`O Herói de nome ${jogador.nome} está no nível de ${nivel}`);