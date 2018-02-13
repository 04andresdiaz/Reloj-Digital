(function(){
    var actualizarHora = function(){
        var fechaHora = new Date(),
            dia = fechaHora.getDay(),
            numDia = fechaHora.getDate(),
            mes = fechaHora.getMonth(),
            ano = fechaHora.getFullYear(),
            hora = fechaHora.getHours(),
            minutos = fechaHora.getMinutes(),
            segundos = fechaHora.getSeconds();

        var mosDia = document.getElementById('dia'),
            mosNumDia = document.getElementById('numDia'),
            mosMes = document.getElementById('mes'),
            mosAno = document.getElementById('ano'),
            mosHoras = document.getElementById('horas'),
            mosMinutos = document.getElementById('minutos'),
            mosSegundos = document.getElementById('segundos');

            if (hora < 10) {
              hora = "0" + hora;
            }
            if (minutos < 10) {
                minutos = "0" + minutos;
            }
            if (segundos < 10) {
                segundos = "0" + segundos;
            }

        var aDias = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"],
            aMeses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

      mosDia.textContent = aDias[dia];
      mosNumDia.textContent = numDia;
      mosMes.textContent = aMeses[mes];
      mosAno.textContent = ano;
      mosHoras.textContent = hora;
      mosMinutos.textContent = minutos;
      mosSegundos.textContent = segundos;
    }
    actualizarHora();
    var intervalo = setInterval (actualizarHora, 1000)
}())
