const checagemEntrada = "01/01/2022 14:00:00";
const checagemSaida = "01/01/2022 18:00:00";

function converteData(prop) {
    const [data, horas] = prop.split(' ');
    const [dia, mes, ano] = data.split('/');
    const [hora, minutos, segundos] = horas.split(':');

    const novaData = new Date(ano, mes - 1, dia, hora, minutos, segundos)

    return novaData.getTime()
};

const Entrada_Saida = (converteData(checagemSaida) - converteData(checagemEntrada)) / 1000


const diasParaSegundos = 24 * 60 * 60;
const horasParaSegundos = 60 * 60;
const minutosParaSegundos = 60;

const dias = Math.floor(Entrada_Saida / diasParaSegundos);
const horas = Math.floor(Entrada_Saida / horasParaSegundos) % 24;
const minutos = Math.floor(Entrada_Saida / minutosParaSegundos) % 60;
const segundos = Entrada_Saida & 60;

const result = {
    horario: {
        dias: dias,
        tempo: `${horas} horas ${minutos} minutos ${segundos} segundos`
    },
}



console.log(result.horario);



