var oConsultoria = new Consultoria();
var oXML = loadXMLDoc("datosConsultoria.xml");

//Funcion para cargar el XML
function loadXMLDoc(filename) {
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    }
    else // code for IE5 and IE6
    {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET", filename, false);

    xhttp.send();

    return xhttp.responseXML;
}

cargaDatos();

function cargaDatos() {

    // var oXML = loadXMLDoc("datosConsultoria.xml");
    cargarAdministradores(oXML.getElementsByTagName('administrador'));
    cargarAnalistas(oXML.querySelectorAll('analistas analista'));
    cargarProgramadores(oXML.getElementsByTagName('programador'));
    cargarClientes(oXML.getElementsByTagName('cliente'));
    cargarPublicidad(oXML.getElementsByTagName('publicidad'));
    cargarIncidencias(oXML.getElementsByTagName('incidencia'));
    cargarProyectos(oXML.getElementsByTagName('incidencia'));
    cargarTareas(oXML.getElementsByTagName('tarea'));
    cargarContratos(oXML.getElementsByTagName('contrato'));
}

function cargarAdministradores(arrayAdministradores) {

    for (var i = 0; i < arrayAdministradores.length; i++) {
        var nomAdm = arrayAdministradores[i].children[0].textContent;
        var dniAdm = arrayAdministradores[i].children[1].textContent;
        var apeAdm = arrayAdministradores[i].children[2].textContent;
        var tlfAdm = arrayAdministradores[i].children[3].textContent;
        var dirAdm = arrayAdministradores[i].children[4].textContent;
        var codAdm = arrayAdministradores[i].children[5].textContent;

        var oAdministrador = new Administrador(nomAdm, dniAdm, apeAdm, tlfAdm, dirAdm, codAdm);
        oConsultoria.anadeAdministrador(oAdministrador);
    }

}

function cargarAnalistas(arrayAnalistas) {

    for (var i = 0; i < arrayAnalistas.length; i++) {
        var nomAna = arrayAnalistas[i].children[0].textContent;
        var dniAna = arrayAnalistas[i].children[1].textContent;
        var apeAna = arrayAnalistas[i].children[2].textContent;
        var tlfAna = arrayAnalistas[i].children[3].textContent;
        var dirAna = arrayAnalistas[i].children[4].textContent;
        var proAna = [];

        var listaProgAna = arrayAnalistas[i].children[5];
        for (var j = 0; j < listaProgAna.length; j++) {
            proAna.push(listaProgAna[j].textContent);
        }

        var oAnalista = new Analista(nomAna, dniAna, apeAna, tlfAna, dirAna, proAna);
        oConsultoria.anadeAnalista(oAnalista);
    }

}

function cargarProgramadores(arrayProgramadores) {
    for (var i = 0; i < arrayProgramadores.length; i++) {
        var nomPro = arrayProgramadores[i].children[0].textContent;
        var dniPro = arrayProgramadores[i].children[1].textContent;
        var apePro = arrayProgramadores[i].children[2].textContent;
        var tlfPro = arrayProgramadores[i].children[3].textContent;
        var dirPro = arrayProgramadores[i].children[4].textContent;
        var dniAnaPro = arrayProgramadores[i].children[5].textContent;

        var oProgramador = new Programador(nomPro, dniPro, apePro, tlfPro, dirPro, dniAnaPro);
        oConsultoria.anadeProgramador(oProgramador);
    }
}

function cargarClientes(arrayClientes) {

    for (var i = 0; i < arrayClientes.length; i++) {
        var nomCli = arrayClientes[i].children[0].textContent;
        var dniCli = arrayClientes[i].children[1].textContent;
        var apeCli = arrayClientes[i].children[2].textContent;
        var tlfCli = arrayClientes[i].children[3].textContent;
        var dirCli = arrayClientes[i].children[4].textContent;
        var conCli = new Array();

        var listaContratos = arrayClientes[i].children[5];
        for (var j = 0; j < listaContratos.length; j++) {
            conCli.push(listaContratos[j].textContent);
        }

        var oCliente = new Cliente(nomCli, dniCli, apeCli, dirCli, tlfCli, conCli);
        oConsultoria.anadeCliente(oCliente);
    }

}

function cargarPublicidad(arrayPublicidades) {

    for (var i = 0; i < arrayPublicidades.length; i++) {
        var codPub = arrayPublicidades[i].children[0].textContent;
        var tipPub = arrayPublicidades[i].children[1].textContent;
        var decPub = arrayPublicidades[i].children[2].textContent;
        var codAdmPub = arrayPublicidades[i].children[3].textContent;
        var dniCliPub = arrayPublicidades[i].children[4].textContent;


        var oPublicidad = new Publicidad(codPub, tipPub, decPub, codAdmPub, dniCliPub);
        oConsultoria.anadePublicidad(oPublicidad);
    }

}


function cargarIncidencias(arrayIncidencias) {

    for (var i = 0; i < arrayIncidencias.length; i++) {
        var numInc = arrayIncidencias[i].children[0].textContent;
        var priInc = arrayIncidencias[i].children[1].textContent;
        var asuInc = arrayIncidencias[i].children[2].textContent;
        var desInc = arrayIncidencias[i].children[3].textContent;
        var codAdmInc = arrayIncidencias[i].children[4].textContent;
        var estInc = arrayIncidencias[i].children[5].textContent;

        var oIncidencia = new Incidencia(numInc, priInc, asuInc, desInc, codAdmInc, estInc);
        oConsultoria.anadeIncidencia(oIncidencia);
    }

}


function cargarProyectos(arrayProyectos) {

    for (var i = 0; i < arrayProyectos.length; i++) {
        var nomPro = arrayProyectos[i].children[0].textContent;
        var anaPro = [];
        var tarPro = [];

        var listaAnalistas = arrayProyectos[i].children[1];
        for (var j = 0; j < listaAnalistas.length; j++) {
            anaPro.push(listaAnalistas[j].textContent);
        }

        var listaTareas = arrayProyectos[i].children[2];
        for (var k = 0; k < listaTareas.length; k++) {
            tarPro.push(listaTareas[k].textContent);
        }

        var oProyecto = new Proyecto(nomPro, anaPro, tarPro);
        oConsultoria.anadeProyecto(oProyecto);
    }

}


function cargarTareas(arrayTareas) {

    for (var i = 0; i < arrayTareas.length; i++) {
        var codTar = arrayTareas[i].children[0].textContent;
        var nomProTar = arrayTareas[i].children[1].textContent;
        var fIniTar = arrayTareas[i].children[2].textContent;
        var fFinTar = arrayTareas[i].children[3].textContent;
        var nomTar = arrayTareas[i].children[4].textContent;
        var estTar = arrayTareas[i].children[5].textContent;

        var oTarea = new Tarea(codTar, nomProTar, fIniTar, fFinTar, nomTar, estTar);
        oConsultoria.anadeTarea(oTarea);
    }

}


function cargarContratos(arrayContratos) {

    for (var i = 0; i < arrayContratos.length; i++) {
        var nomCon = arrayContratos[i].children[0].textContent;
        var preCon = arrayContratos[i].children[1].textContent;
        var fIniCon = arrayContratos[i].children[2].textContent;
        var fFinCon = arrayContratos[i].children[3].textContent;
        var dniCliCon = arrayContratos[i].children[4].textContent;

        var oContrato = new Contrato(nomCon, preCon, fIniCon, fFinCon, dniCliCon);

        // var oCliente = oConsultoria.dameCliente(dniCliCon);
        // oCliente.contratosCliente.push(nomCon);
        oConsultoria.anadeContrato(oContrato);
    }

}


//Cargar Datos Prueba

// oConsultoria.anadeAdministrador(new Administrador('Pedro','12121212E','Gonzalez Marin',653923909,'Calle Perico',398598));
// oConsultoria.anadeAdministrador(new Administrador('Juan','22334455G','Rosa Moreno',677331909,'Avda del Kiko',212458));
//
// oConsultoria.anadeCliente(new Cliente('Manolo', '11032393X', 'Cruz de la vega', 'Callejon del 7', 943382941, []));
// oConsultoria.anadeCliente(new Cliente('Pepe', '44110022F', 'Castillejo Caserón', 'Calle Cuesta', 989556443, []));
//
// oConsultoria.anadeIncidencia(new Incidencia(1598,3,'Algoritmo erroneo', 'Pues eso, mal algoritmo', 2, "Abierta"));
// oConsultoria.anadeIncidencia(new Incidencia(3584,2,'Fallo de Login', 'Imposible logearse en la web', 3, "Abierta"));
//
// oConsultoria.anadePublicidad(new Publicidad(4856,"Email", "Envío de Spam", 3, '44110022F'));
//
//
// oConsultoria.anadeContrato(new Contrato('Panaderia Manolo', 5630.50, new Date('2016-9-25'), new Date('2016-11-5'),'11032393X'));
//
// oConsultoria.anadeAdministrador(new Administrador('Cristian','34537865X','Garcia Ocaña',655589624,'Avenida del Paraiso',131313));
//
// var a=oConsultoria.anadeAnalista(new Analista('Andres','24358543B','Rodriguez Martin',698521596,'Calle Rodriguez Sexto',100933,null));
//
// oConsultoria.anadeProgramador(new Programador('Roberto','34259087M','Lopez Lopez',678945672,'Pasaje Antonino',100036,a));
//
// oConsultoria.anadeProyecto(new Proyecto('Proyecto Uno',[], []));
//
// oConsultoria.anadeProyecto(new Proyecto('Panaderia Manolo',[], []));


// LISTA DE EVENTOS

// Eventos de Capas

document.getElementById('eventInicio').addEventListener('click', pantallaInicio, false);

document.getElementById('eventNuevoCliente').addEventListener('click', nuevoCliente, false);

document.getElementById('eventModificaCliente').addEventListener('click', modificaCliente, false);

document.getElementById('eventNuevaIncidencia').addEventListener('click', nuevaIncidencia, false);

document.getElementById('eventModificaIncidencia').addEventListener('click', modificaIncidencia, false);

document.getElementById('eventNuevaPublicidad').addEventListener('click', nuevaPublicidad, false);

document.getElementById('eventEliminarPublicidad').addEventListener('click', eliminarPublicidad, false);

document.getElementById('eventNuevoContrato').addEventListener('click', nuevoContrato, false);

document.getElementById('eventModificarContrato').addEventListener('click', modificarContrato, false);

document.getElementById('eventNuevoAdmin').addEventListener('click', nuevoAdministrador, false);

document.getElementById('eventModificarAdmin').addEventListener('click', modificarAdministrador, false);

document.getElementById('eventNuevoProyecto').addEventListener('click', nuevoProyecto, false);

document.getElementById('eventModificaProyecto').addEventListener('click', modificarProyecto, false);

document.getElementById('eventNuevaTarea').addEventListener('click', nuevaTarea, false);

document.getElementById('eventModificaTarea').addEventListener('click', modificaTarea, false);

document.getElementById('eventNuevoAnalista').addEventListener('click', nuevoAnalista, false);

document.getElementById('eventModificaAnalista').addEventListener('click', modificaAnalista, false);

document.getElementById('eventNuevoProgramador').addEventListener('click', nuevoProgramador, false);

document.getElementById('eventModificaProgramador').addEventListener('click', modificaProgramador, false);

document.getElementById('eventListarProgramadores').addEventListener('click', listaProgramadores, false);

document.getElementById('eventListarAdministrador').addEventListener('click', listaAdministradores, false);

document.getElementById('eventListarAnalistas').addEventListener('click', listaAnalistas, false);

document.getElementById('eventListarIncidencias').addEventListener('click', function(){ listaIncidencias("Todas")}, false);

document.getElementById('eventListarIncidenciasSinCerrar').addEventListener('click', function(){ listaIncidencias("Abiertas")}, false);

document.getElementById('eventListarClientes').addEventListener('click', listaClientes, false);

document.getElementById('eventListarPublicidad').addEventListener('click', listaPublicidad, false);

document.getElementById('eventlistarContrato').addEventListener('click', listaContrato, false);



function actualizarFechaFin() {

    var fechaInicial = document.getElementById('fechaini').value;
  document.querySelector('#fechafin').setAttribute("min",fechaInicial);
}
document.getElementById('fechaini').addEventListener('change', actualizarFechaFin, false);


//document.getElementById('eventListarAnalistas').addEventListener('click', listaAnalistas, false);

//document.getElementById('eventListarAdministradores').addEventListener('click', listaAdministradores, false);

//document.getElementById('eventListarClientes').addEventListener('click', listaCliente, false);


//CREACION DE OBJETOS

//document.getElementById('CrearTarea').addEventListener('click', crearTarea, false);


//Eventos Combos

document.getElementById('selectAdmin_ModAdm').addEventListener('change', muestraDatosDeEsteAdmin, false);

document.getElementById('selectCliente_ModCli').addEventListener('change', muestraDatosDeEsteCliente, false);

document.getElementById('selectContrato_ModCon').addEventListener('change', muestraDatosDeEsteContrato, true);

document.getElementById('incidencia_ModInc').addEventListener('change', muestraDatosDeEstaIncidencia, true);


document.getElementById('selectProgram_Mod').addEventListener('change', muestraDatosDeEsteProgramador, true);

//Ocultar inputs

function mostrarCampos(selector) {
    for (var i = 0; i < selector.length; i++) {
        selector[i].classList.remove('oculto');
    }
}
//pagina de inicio

function pantallaInicio() {

    ocultarFormularios();
    document.getElementById('pantallaInicial').style.display = 'block';
    document.getElementById('clearfix').style.display = 'none';
}


function paginaActual(){

//document.querySelector(".nav navbar-nav");

}


//evento para generar codigos
document.getElementById('eventGenerarCodigoTarea').addEventListener('click', generarCodigoTarea, false);

// FUNCIONES PARA MANEJO DE CAPAS

function ocultarFormularios() {
    document.getElementById('clearfix').style.display = 'block';
    document.getElementById('divFormNuevoCliente').style.display = 'none';
    document.getElementById('divFormModificaCliente').style.display = 'none';
    document.getElementById('divFormNuevaIncidencia').style.display = 'none';
    document.getElementById('divFormModificaIncidencia').style.display = 'none';
    document.getElementById('divFormNuevaPublioidad').style.display = 'none';
    document.getElementById('divFormEliminaPublicidad').style.display = 'none';
    document.getElementById('divFormNuevoContrato').style.display = 'none';
    document.getElementById('divFormModificarContrato').style.display = 'none';
    document.getElementById('divFormNuevoAdministrador').style.display = 'none';
    document.getElementById('divFormModificarAdministrador').style.display = 'none';
    document.getElementById('divFormNuevoProyecto').style.display = 'none';
    document.getElementById('divFormModificaProyecto').style.display = 'none';
    document.getElementById('divFormNuevaTarea').style.display = 'none';
    document.getElementById('divFormModificaTarea').style.display = 'none';
    document.getElementById('divFormNuevoAnalista').style.display = 'none';
    document.getElementById('divFormModificaAnalista').style.display = 'none';
    document.getElementById('divFormNuevoProgramador').style.display = 'none';
    document.getElementById('divFormModificaProgramador').style.display = 'none';
    document.getElementById('pantallaInicial').style.display = 'none';
    document.getElementById('tablas').style.display = 'none';
}

function nuevoCliente() {
    ocultarFormularios();
    document.getElementById('divFormNuevoCliente').style.display = 'block';
    document.getElementById('formuNuevoCliente').reset();

    //Comprobar que los campos de texto no tengan la clase "error", si la tienen la elimina.
    comprobarCampos('formuNuevoCliente',false);
}

function modificaCliente() {
    ocultarFormularios();
    document.getElementById('divFormModificaCliente').style.display = 'block';
    document.getElementById('formuModificaCliente').reset();

    var oFormu = document.getElementById('formuModificaCliente').querySelectorAll('input');
    for (var i = 0; i < oFormu.length; i++) {
        oFormu[i].setAttribute('readonly', 'readonly');
    }

    vaciarCombo('#selectCliente_ModCli');  //Vaciar el combo por si contiene algo anterior
    cargaComboClientes('#selectCliente_ModCli');   //Cargar lista de clientes existentes

    comprobarCampos('formuModificaCliente');
}

function nuevaIncidencia() {
    ocultarFormularios();
    document.getElementById('divFormNuevaIncidencia').style.display = 'block';
    document.getElementById('formuNuevaIncidencia').reset();

    var oFormu = document.getElementById('formuNuevaIncidencia').querySelectorAll('input');
    for (var i = 0; i < oFormu.length; i++) {
        if (oFormu[i].classList.contains('error')) {
            oFormu[i].classList.remove('error');
        }
    }
    document.getElementById('formuNuevaIncidencia').querySelector('textarea').classList.remove('error');
    document.getElementById('formuNuevaIncidencia').querySelector('select').classList.remove('error');

    vaciarCombo('#administradores_NueInc');  //Vaciar el combo por si contiene algo anterior
    //Cargar el combo
    cargaComboAdministradores('#administradores_NueInc');
    comprobarCampos('formuNuevaIncidencia');
}

function modificaIncidencia() {

    ocultarFormularios();
    document.getElementById('divFormModificaIncidencia').style.display = 'block';
    document.getElementById('formuModificaIncidencia').reset();

    vaciarCombo('#incidencia_ModInc');  //Vaciar el combo por si contiene algo anterior

    //Cargar las incidencias existentes
    var sMsg = cargaComboIncidencias();
    if(sMsg != "Hay Incidencias"){
        toastr.warning(sMsg);
    }

    //Comprobar que los campos de texto no tengan la clase "error", si la tienen la elimina.
    comprobarCampos('formuModificaIncidencia');
}

function nuevaPublicidad() {
    ocultarFormularios();
    document.getElementById('divFormNuevaPublioidad').style.display = 'block';
    document.getElementById('formuNuevaPublicidad').reset();

    vaciarCombo('#selectAdmin_NuePub');
    vaciarCombo('#cliente_NuePub');

    cargaComboAdministradores('#selectAdmin_NuePub');
    cargaComboClientes('#cliente_NuePub');

    //Comprobar que los campos de texto no tengan la clase "error", si la tienen la elimina.

    comprobarCampos('formuNuevaPublicidad');
}

function eliminarPublicidad() {
    ocultarFormularios();
    document.getElementById('divFormEliminaPublicidad').style.display = 'block';
    document.getElementById('formuElimiarPublicidad').reset();

    vaciarCombo('#selectPublicidad_EliPub');

    cargarComboPublicidad('#selectPublicidad_EliPub');

    //Comprobar que los campos de texto no tengan la clase "error", si la tienen la elimina.
    var oFormu = document.getElementById('formuElimiarPublicidad').querySelectorAll('select');
    for (var i = 0; i < oFormu.length; i++) {
        if (oFormu[i].classList.contains('error')) {
            oFormu[i].classList.remove('error');
        }
    }
    comprobarCampos('formuElimiarPublicidad');

}

function nuevoContrato() {
    ocultarFormularios();
    document.getElementById('divFormNuevoContrato').style.display = 'block';
    document.getElementById('formuNuevoContrato').reset();

    //Comprobar que los campos de texto no tengan la clase "error", si la tienen la elimina.
    var oFormu = document.getElementById('formuNuevoContrato').querySelectorAll('input');
    for (var i = 0; i < oFormu.length; i++) {
        if (oFormu[i].classList.contains('error')) {
            oFormu[i].classList.remove('error');
        }
    }

    vaciarCombo('#nombreProyecto_NueCon');
    vaciarCombo('#cliente_NueCon');

    if (oConsultoria.clientes.length > 0 && oConsultoria.proyectos.length > 0) {

        //Combo proyectos: '#nombreProyecto_NueCon'
        cargaComboProyectos('#nombreProyecto_NueCon');
        //Combo clientes:
        cargaComboClientes('#cliente_NueCon');
    } else {
        toastr.error("Aun no se han registrado Proyectos y/o Clientes en el sistema. <br>" +
            "No es posible firmar contratos");
    }

    comprobarCampos('formuNuevoContrato');
}

function modificarContrato() {
    ocultarFormularios();
    document.getElementById('divFormModificarContrato').style.display = 'block';
    document.getElementById('formuModificarContrato').reset();

    //Comprobar que los campos de texto no tengan la clase "error", si la tienen la elimina.
    var oFormu = document.getElementById('formuModificarContrato').querySelectorAll('input');
    for (var i = 0; i < oFormu.length; i++) {
        if (oFormu[i].classList.contains('error')) {
            oFormu[i].classList.remove('error');
        }
    }

    vaciarCombo('#selectContrato_ModCon');

    document.querySelector('#nomCon').setAttribute('class', 'form-group oculto');
    document.querySelector('#nomCli').setAttribute('class', 'form-group oculto');

    if (oConsultoria.contratos.length > 0) {
        cargaComboContratos('#selectContrato_ModCon');
    } else {
        toastr.error("Aun no se han registrado Contratos en el sistema. <br>" +
            "No es posible modificar contratos");
    }
    comprobarCampos('formuModificarContrato');
}

function nuevoAdministrador() {
    ocultarFormularios();
    document.getElementById('divFormNuevoAdministrador').style.display = 'block';
    document.getElementById('formuNuevoAdmin').reset();

    //Comprobar que los campos de texto no tengan la clase "error", si la tienen la elimina y se el añade el parametro false para indicar que no tiene select el formulario.
    comprobarCampos('formuNuevoAdmin',false);

}

function modificarAdministrador() {
    ocultarFormularios();
    document.getElementById('divFormModificarAdministrador').style.display = 'block';
    document.getElementById('formuModificarAdmin').reset();

    var oFormu = document.getElementById('formuModificarAdmin').querySelectorAll('input');
    for (var i = 0; i < oFormu.length; i++) {
        oFormu[i].setAttribute('readonly', 'readonly');
    }

    vaciarCombo('#selectAdmin_ModAdm');  //Vaciar el combo por si contiene algo de haber entrado antes en este formulario
    cargaComboAdministradores('#selectAdmin_ModAdm'); //Cargar los administradores existentes
    comprobarCampos('formuModificarAdmin');
}


function nuevoProyecto() {
    ocultarFormularios();
    document.getElementById('divFormNuevoProyecto').style.display = 'block';
    document.getElementById('formuNuevoProyecto').reset();
    comprobarCampos('formuNuevoProyecto');
}


function modificarProyecto() {
    ocultarFormularios();
    document.getElementById('divFormModificaProyecto').style.display = 'block';
    document.getElementById('formuModificaProyecto').reset();
    comprobarCampos('formuModificaProyecto');
}

function nuevaTarea() {
    ocultarFormularios();
    document.getElementById('divFormNuevaTarea').style.display = 'block';
    document.getElementById('formuNuevaTarea').reset();
    comprobarCampos('formuNuevaTarea');
}
function modificaTarea() {
    ocultarFormularios();
    document.getElementById('divFormModificaTarea').style.display = 'block';
    document.getElementById('formuModificaTarea').reset();
    comprobarCampos('formuModificaTarea');
}


function nuevoAnalista() {
    ocultarFormularios();
    document.getElementById('divFormNuevoAnalista').style.display = 'block';
    document.getElementById('formuNuevoAnalista').reset();


    vaciarCombo('#selectPrograAnalista');
    cargaComboProgramador('#selectPrograAnalista');
    comprobarCampos('formuNuevoAnalista');
}

function modificaAnalista() {
    ocultarFormularios();
    document.getElementById('divFormModificaAnalista').style.display = 'block';
    document.getElementById('formuModificaAnalista').reset();

    var oFormu = document.getElementById('formuModificaAnalista').querySelectorAll('input');
    for (var i = 0; i < oFormu.length; i++) {
        oFormu[i].setAttribute('readonly', 'readonly');
    }
    document.getElementById('formuModificaAnalista').querySelector('#selectPrograAnalistaModifica').setAttribute('readonly', 'readonly');
    vaciarCombo('#selectAnalis_Mod');  //Vaciar el combo por si contiene algo de haber entrado antes en este formulario
    cargaComboAnalista('#selectAnalis_Mod'); //Cargar los programadores de los analistas existentes
    vaciarCombo('#selectPrograAnalistaModifica');
    cargaComboProgramador('#selectPrograAnalistaModifica');

}

function generaCodigos() {

    var numeroAleatorio = parseInt(Math.random() * (99999 - 00000) + 00000);
    for (var i = 0; i < oConsultoria.tareas.length; i++) {
        if (oConsultoria.tareas[i].codigoTarea == numeroAleatorio) {
            numeroAleatorio = parseInt(Math.random() * (99999 - 00000) + 00000);
            i = 0;
        }
    }
    return numeroAleatorio;
}

function generarCodigoTarea() {

    var inputCodigoTarea = document.querySelector('#nTareaCodigo');
    inputCodigoTarea.value = generaCodigos();
}

function nuevoProgramador() {
    ocultarFormularios();
    document.getElementById('divFormNuevoProgramador').style.display = 'block';
    document.getElementById('formuNuevoProgramador').reset();

    //carga combos programador y analista
    vaciarCombo('#selectAnalistaProgr');
    cargaComboAnalista('#selectAnalistaProgr');

    //Comprobar que los campos de texto no tengan la clase "error", si la tienen la elimina.
    comprobarCampos('formuNuevoProgramador',false);//se indica false porque no tiene select en el codigo

}
function comprobarCampos(id,select) {
    if(select==undefined)
    select=true;//para poner el valor por defecto a true si no se envia el parametro select
    var oFormu = document.getElementById(id).querySelectorAll('input');
    for (var i = 0; i < oFormu.length; i++) {
        if (oFormu[i].classList.contains('error')) {
            oFormu[i].classList.remove('error');
        }
    }
    if(select){
    var oForm = document.getElementById(id).querySelectorAll('select');
    for (var i = 0; i < oForm.length; i++) {
        if (oForm[i].classList.contains('error')) {
            oForm[i].classList.remove('error');
        }
    }}
}

function modificaProgramador() {
    ocultarFormularios();
    document.getElementById('divFormModificaProgramador').style.display = 'block';
    document.getElementById('formuModificaProgramador').reset();


    //carga combos programador y analista
    vaciarCombo('#selectProgram_Mod');
    cargaComboProgramador('#selectProgram_Mod');
    cargaComboAnalista('#selectAnalistaProgrMod');
    comprobarCampos('formuNuevoProgramador');
}

function crearTarea() {

    alert(document.querySelector("#fechaini").value);

}


// EXPRESIONES REGULARES Y FUNCIONES *******************************************************************************

var oExRegTelefono = /^([9|6]{1})[0-9]{8}/;  // Telefonos
var oExRegNombre = /^[a-záéíóúñA-ZÑÁÉÍÓÚ]{3}([a-záéíóúñA-ZÑÁÉÍÓÚ\s]){0,30}$/; //Nombres (nombre mas corto permitido 3 caracteres
var oExRegApellido = /^[a-záéíóúñA-ZÁÉÍÓÚ]{4}([a-záéíóúñA-ZÑÁÉÍÓÚ\s]){0,30}/; //Apellidos
var oExRegDireccion = /^([a-záéíóúñA-ZÑÁÉÍÓÚ]{1})([a-záéíóúñA-ZÑÁÉÍÓÚ\s\d\.\,\º\ª\-\/]{0,39})$/; //Direccion
var oExRegDni = /^[0-9]{8}[A-Z]{1}$/;
var oExRegFechas = /^(19|20)\d\d[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$/;  //Fechas: 2013-12-14
var oExRegPrecio = /^([0-9]{1,10}[\,\.][0-9]{1,2})$/;  //Precio con dos decimales obligatorios.
var oExRegAsunto = /^[a-záéíóúñA-ZÑÁÉÍÓÚ\s]{1,60}$/;  // Asunto
var oExRegNombreProyecto = /^[a-záéíóúñA-ZÑÁÉÍÓÚ\s]{1,20}$/;  // Nombre proyecto

function validaNombre(cadena) {
    var resultado = false;
    if (cadena != "") {
        resultado = oExRegNombre.test(cadena);
    }
    return resultado;
}

function validaNombreProyecto(cadena) {
    var resultado = false;
    if (cadena != "") {
        resultado = oExRegNombreProyecto.test(cadena);
    }
    return resultado;
}

function validaTelefono(cadena) {
    var resultado = false;
    if (cadena != "") {
        resultado = oExRegTelefono.test(cadena);
    }
    return resultado;
}

function validaApellido(cadena) {
    var resultado = false;
    if (cadena != "") {
        resultado = oExRegApellido.test(cadena);
    }
    return resultado;
}

function validaDireccion(cadena) {
    var resultado = false;
    if (cadena != "") {
        resultado = oExRegDireccion.test(cadena);
    }
    return resultado;
}

function validaDni(cadena) {
    var resultado = false;
    if (cadena != "") {
        resultado = oExRegDni.test(cadena);
    }
    return resultado;
}

function validaFechas(cadena) {
    var resultado = false;
    if (cadena != "") {
        resultado = oExRegFechas.test(cadena);
    }
    return resultado;
}

function validaPrecio(cadena) {
    var resultado = false;
    if (cadena != "") {
        resultado = oExRegPrecio.test(cadena);
    }
    return resultado;
}

function validaAsunto(cadena) {
    var resultado = false;
    if (cadena != "") {
        resultado = oExRegAsunto.test(cadena);
    }
    return resultado;
}


// *******************************************************************************************************************

// VALIDACIONES ******************************************************************************************************

// NUEVO ADMINISTRADOR ************************************************
// ********************************************************************

document.querySelector('#guardar_NueAdm').addEventListener('click', validaFormNuevoAdmin, false);

document.querySelector('#limpiar_NueAdm').addEventListener('click', nuevoAdministrador, false);

function validaFormNuevoAdmin(oEvento) {
    var oEvNuevoAdmin = oEvento || window.event;
    var bValido = true;
    var sErrores = "";

    var nombre = document.getElementById('nombreAdmin_NueAdm').value.trim();
    document.getElementById('nombreAdmin_NueAdm').value = nombre;

    if (validaNombre(nombre) == false) {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuNuevoAdmin').nombreAdmin.focus();
        }
        sErrores += "NOMBRE del Administrador incorrecto (formato: Máx 30 caracteres)";

        //Marcar error
        document.getElementById('formuNuevoAdmin').nombreAdmin.className = "form-control input-md error";

    } else {
        //Desmarcar error
        document.getElementById('formuNuevoAdmin').nombreAdmin.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }


    var apellido = document.getElementById('apellidoAdmin_NueAdm').value.trim();
    document.getElementById('apellidoAdmin_NueAdm').value = apellido;


    if (validaApellido(apellido) == false) {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuNuevoAdmin').apellidoAdmin.focus();
        }
        sErrores += "<br><br> APELLIDO del Administrador incorrecto (formato: Máx 30 caracteres)";

        //Marcar error
        document.getElementById('formuNuevoAdmin').apellidoAdmin.className = "form-control input-md error";

    } else {
        //Desmarcar error
        document.getElementById('formuNuevoAdmin').apellidoAdmin.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }

    var dni = document.getElementById('dniAdmin_NueAdm').value.trim();
    document.getElementById('dniAdmin_NueAdm').value = dni;

    if (validaDni(dni) == false) {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuNuevoAdmin').dniAdmin.focus();
        }
        sErrores += "<br><br> DNI del Administrador incorrecto (formato: 8 digitos más letra mayuscula)";

        //Marcar error
        document.getElementById('formuNuevoAdmin').dniAdmin.className = "form-control input-md error";

    } else {
        //Desmarcar error
        document.getElementById('formuNuevoAdmin').dniAdmin.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }

    var tlf = document.getElementById('telefonoAdmin_NueAdm').value.trim();
    document.getElementById('telefonoAdmin_NueAdm').value = tlf;

    if (validaTelefono(tlf) == false) {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuNuevoAdmin').telefonoAdmin.focus();
        }
        sErrores += "<br><br> TELEFONO del Administrador incorrecto (formato: 9 digitos comenzando en 6 o 9)";

        //Marcar error
        document.getElementById('formuNuevoAdmin').telefonoAdmin.className = "form-control input-md error";

    } else {
        //Desmarcar error
        document.getElementById('formuNuevoAdmin').telefonoAdmin.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }

    var direccion = document.getElementById('direccionAdmin_NueAdm').value.trim();
    document.getElementById('direccionAdmin_NueAdm').value = direccion;

    if (validaDireccion(direccion) == false) {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuNuevoAdmin').direccionAdmin.focus();
        }
        sErrores += "<br><br> DIRECCION del Administrador incorrecto (formato: 40 caracteres maximo)";

        //Marcar error
        document.getElementById('formuNuevoAdmin').direccionAdmin.className = "form-control input-md error";

    } else {
        //Desmarcar error
        document.getElementById('formuNuevoAdmin').direccionAdmin.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }


    if (bValido == false) {
        //Cancelar envio del formulario
        oEvNuevoAdmin.preventDefault();
        //Mostrar errores
        toastr.error(sErrores);
    } else {
        //Aqui estan los datos correctos, los guardamos
        //Comprobar si existe el trabajador

        var sMensaje = "";

        if (!oConsultoria.existeTrabajador(dni)) {
            var codAdmin = oConsultoria.administradores.length + 1;
            var oAdministrador = new Administrador(nombre, dni, apellido, tlf, direccion, codAdmin);
            sMensaje = oConsultoria.anadeAdministrador(oAdministrador);
            toastr.success(sMensaje);

            nuevoAdministrador();
        } else {
            sMensaje = "Imposible añadir. El trabajador que intenta añadir al sistema ya estaba registrado";
            toastr.error(sMensaje);
        }

    }


}


// MODIFICAR ADMINISTRADOR ********************************************
// ********************************************************************

document.querySelector('#guardar_ModAdm').addEventListener('click', validaFormModAdmin, false);

document.querySelector('#limpiar_ModAdm').addEventListener('click', modificarAdministrador, false);

function validaFormModAdmin(oEvento) {
    var oEvModAdmin = oEvento || window.event;
    var bValido = true;
    var sErrores = "";

    var nombre = document.getElementById('nombreAdmin_ModAdm').value.trim();
    document.getElementById('nombreAdmin_ModAdm').value = nombre;

    if (validaNombre(nombre) == false) {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuModificarAdmin').nombreAdmin.focus();
        }
        sErrores += "NOMBRE del Administrador incorrecto (formato: Máx 30 caracteres)";

        //Marcar error
        document.getElementById('formuModificarAdmin').nombreAdmin.className = "form-control input-md error";

    } else {
        //Desmarcar error
        document.getElementById('formuModificarAdmin').nombreAdmin.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }

    var apellido = document.getElementById('apellidoAdmin_ModAdm').value.trim();
    document.getElementById('apellidoAdmin_ModAdm').value = apellido;


    if (validaApellido(apellido) == false) {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuModificarAdmin').apellidoAdmin.focus();
        }
        sErrores += "<br><br> APELLIDO del Administrador incorrecto (formato: Máx 30 caracteres)";

        //Marcar error
        document.getElementById('formuModificarAdmin').apellidoAdmin.className = "form-control input-md error";

    } else {
        //Desmarcar error
        document.getElementById('formuModificarAdmin').apellidoAdmin.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }

    //DNI no hace falta validarlo. No se permite modificar el existente.

    var tlf = document.getElementById('telefonoAdmin_ModAdm').value.trim();
    document.getElementById('telefonoAdmin_ModAdm').value = tlf;

    if (validaTelefono(tlf) == false) {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuModificarAdmin').telefonoAdmin.focus();
        }
        sErrores += "<br><br> TELEFONO del Administrador incorrecto (formato: 9 digitos comenzando en 6 o 9)";

        //Marcar error
        document.getElementById('formuModificarAdmin').telefonoAdmin.className = "form-control input-md error";

    } else {
        //Desmarcar error
        document.getElementById('formuModificarAdmin').telefonoAdmin.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }

    var direccion = document.getElementById('direccionAdmin_ModAdm').value.trim();
    document.getElementById('direccionAdmin_ModAdm').value = direccion;

    if (validaDireccion(direccion) == false) {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuModificarAdmin').direccionAdmin.focus();
        }
        sErrores += "<br><br> DIRECCION del Administrador incorrecto (formato: 40 caracteres maximo)";

        //Marcar error
        document.getElementById('formuModificarAdmin').direccionAdmin.className = "form-control input-md error";

    } else {
        //Desmarcar error
        document.getElementById('formuModificarAdmin').direccionAdmin.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }


    if (bValido == false) {
        //Cancelar envio del formulario
        oEvModAdmin.preventDefault();
        //Mostrar errores
        toastr.error(sErrores);
    } else {
        //Aqui estan los datos correctos, los guardamos
        //El trabajador ya existe en el sistema, no hace falta comprobarlo.
        //Coger el trabajador existente y cambiar los valores de sus atributos por los actuales.
        var select = document.querySelector('#selectAdmin_ModAdm');
        var codAdminSeleccionado = select.value;
        var oAdmin = oConsultoria.dameAdministrador(codAdminSeleccionado);

        oAdmin.nombreTrabajador = nombre;
        oAdmin.apellidosTrabajador = apellido;
        oAdmin.telefonoTrabajador = tlf;
        oAdmin.direccionTrabajador = direccion;

        toastr.success("Datos modificados correctamente");

        modificarAdministrador();
    }


}


// NUEVO CLIENTE ******************************************************
// ********************************************************************

document.querySelector('#guardar_NueCli').addEventListener('click', validaFormNuevoCliente, false);

document.querySelector('#limpiar_NueCli').addEventListener('click', nuevoCliente, false);

function validaFormNuevoCliente(oEvento) {
    var oEvNuevoCliente = oEvento || window.event;
    var bValido = true;
    var sErrores = "";

    var nombre = document.getElementById('nombreCliente_NueCli').value.trim();
    document.getElementById('nombreCliente_NueCli').value = nombre;

    if (validaNombre(nombre) == false) {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuNuevoCliente').nombreCliente.focus();
        }
        sErrores += "NOMBRE del Cliente incorrecto (formato: Máx 30 caracteres)";

        //Marcar error
        document.getElementById('formuNuevoCliente').nombreCliente.className = "form-control input-md error";

    } else {
        //Desmarcar error
        document.getElementById('formuNuevoCliente').nombreCliente.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }


    var apellido = document.getElementById('apellidoCliente_NueCli').value.trim();
    document.getElementById('apellidoCliente_NueCli').value = apellido;


    if (validaApellido(apellido) == false) {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuNuevoCliente').apellidoCliente.focus();
        }
        sErrores += "<br><br> APELLIDO del Cliente incorrecto (formato: Máx 30 caracteres)";

        //Marcar error
        document.getElementById('formuNuevoCliente').apellidoCliente.className = "form-control input-md error";

    } else {
        //Desmarcar error
        document.getElementById('formuNuevoCliente').apellidoCliente.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }

    var dni = document.getElementById('dniCliente_NueCli').value.trim();
    document.getElementById('dniCliente_NueCli').value = dni;

    if (validaDni(dni) == false) {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuNuevoCliente').dniCliente.focus();
        }
        sErrores += "<br><br> DNI del Cliente incorrecto (formato: 8 digitos más letra mayuscula)";

        //Marcar error
        document.getElementById('formuNuevoCliente').dniCliente.className = "form-control input-md error";

    } else {
        //Desmarcar error
        document.getElementById('formuNuevoCliente').dniCliente.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }

    var tlf = document.getElementById('telefonoCliente_NueCli').value.trim();
    document.getElementById('telefonoCliente_NueCli').value = tlf;

    if (validaTelefono(tlf) == false) {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuNuevoCliente').telefonoCliente.focus();
        }
        sErrores += "<br><br> TELEFONO del Cliente incorrecto (formato: 9 digitos comenzando en 6 o 9)";

        //Marcar error
        document.getElementById('formuNuevoCliente').telefonoCliente.className = "form-control input-md error";

    } else {
        //Desmarcar error
        document.getElementById('formuNuevoCliente').telefonoCliente.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }

    var direccion = document.getElementById('direccionCliente_NueCli').value.trim();
    document.getElementById('direccionCliente_NueCli').value = direccion;

    if (validaDireccion(direccion) == false) {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuNuevoCliente').direccionCliente.focus();
        }
        sErrores += "<br><br> DIRECCION del Cliente incorrecto (formato: 40 caracteres maximo)";

        //Marcar error
        document.getElementById('formuNuevoCliente').direccionCliente.className = "form-control input-md error";

    } else {
        //Desmarcar error
        document.getElementById('formuNuevoCliente').direccionCliente.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }


    if (bValido == false) {
        //Cancelar envio del formulario
        oEvNuevoCliente.preventDefault();
        //Mostrar errores
        toastr.error(sErrores);
    } else {
        //Aqui estan los datos correctos, los guardamos
        //Comprobar si existe el cliente

        var sMensaje = "";

        if (!oConsultoria.existeCliente(dni)) {
            var contratos = [];  //Array de contratos que pueda tener este cliente
            var oCliente = new Cliente(nombre, dni, apellido, direccion, tlf, contratos);
            sMensaje = oConsultoria.anadeCliente(oCliente);
            toastr.success(sMensaje);
            nuevoCliente();
        } else {
            sMensaje = "Imposible añadir. El Cliente que intenta añadir al sistema ya estaba registrado";
            toastr.error(sMensaje);
        }


    }


}


// MODIFICAR CLIENTE **************************************************
// ********************************************************************

document.querySelector('#guardar_ModCli').addEventListener('click', validaFormModCliente, false);

document.querySelector('#limpiar_ModCli').addEventListener('click', modificaCliente, false);

function validaFormModCliente(oEvento) {
    var oEvModCliente = oEvento || window.event;
    var bValido = true;
    var sErrores = "";

    var nombre = document.getElementById('nombreCliente_ModCli').value.trim();
    document.getElementById('nombreCliente_ModCli').value = nombre;

    if (validaNombre(nombre) == false) {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuModificaCliente').nombreCliente.focus();
        }
        sErrores += "NOMBRE del Cliente incorrecto (formato: Máx 30 caracteres)";

        //Marcar error
        document.getElementById('formuModificaCliente').nombreCliente.className = "form-control input-md error";

    } else {
        //Desmarcar error
        document.getElementById('formuModificaCliente').nombreCliente.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }


    var apellido = document.getElementById('apellidoCliente_ModCli').value.trim();
    document.getElementById('apellidoCliente_ModCli').value = apellido;


    if (validaApellido(apellido) == false) {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuModificaCliente').apellidoCliente.focus();
        }
        sErrores += "<br><br> APELLIDO del Cliente incorrecto (formato: Máx 30 caracteres)";

        //Marcar error
        document.getElementById('formuModificaCliente').apellidoCliente.className = "form-control input-md error";

    } else {
        //Desmarcar error
        document.getElementById('formuModificaCliente').apellidoCliente.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }


    //DNI no hace falta validarlo. No se permite modificar el existente.


    var tlf = document.getElementById('telefonoCliente_ModCli').value.trim();
    document.getElementById('telefonoCliente_ModCli').value = tlf;

    if (validaTelefono(tlf) == false) {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuModificaCliente').telefonoCliente.focus();
        }
        sErrores += "<br><br> TELEFONO del Cliente incorrecto (formato: 9 digitos comenzando en 6 o 9)";

        //Marcar error
        document.getElementById('formuModificaCliente').telefonoCliente.className = "form-control input-md error";

    } else {
        //Desmarcar error
        document.getElementById('formuModificaCliente').telefonoCliente.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }

    var direccion = document.getElementById('direccionCliente_ModCli').value.trim();
    document.getElementById('direccionCliente_ModCli').value = direccion;

    if (validaDireccion(direccion) == false) {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuModificaCliente').direccionCliente.focus();
        }
        sErrores += "<br><br> DIRECCION del Cliente incorrecto (formato: 40 caracteres maximo)";

        //Marcar error
        document.getElementById('formuModificaCliente').direccionCliente.className = "form-control input-md error";

    } else {
        //Desmarcar error
        document.getElementById('formuModificaCliente').direccionCliente.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }


    if (bValido == false) {
        //Cancelar envio del formulario
        oEvModCliente.preventDefault();
        //Mostrar errores
        toastr.error(sErrores);
    } else {
        //Aqui estan los datos correctos, los guardamos
        //El cliente ya existe en el sistema, no hace falta comprobarlo.
        // Coger el cliente existente y cambiar los valores de sus atributos por los actuales.

        var select = document.querySelector('#selectCliente_ModCli');
        var dniClienteSeleccionado = select.value;
        var oCliente = oConsultoria.dameCliente(dniClienteSeleccionado);

        oCliente.nombreCliente = nombre;
        oCliente.apellidosCliente = apellido;
        oCliente.telefonoCliente = tlf;
        oCliente.direccionCliente = direccion;


        toastr.success("Datos modificados correctamente");

        modificaCliente();
    }

}


// NUEVO CONTRATO ******************************************************
// ********************************************************************

document.querySelector('#guardar_NueCon').addEventListener('click', validaFormNuevoContrato, false);

document.querySelector('#limpiar_NueCon').addEventListener('click', nuevoContrato, false);

function validaFormNuevoContrato(oEvento) {
    var oEvNuevoContrato = oEvento || window.event;
    var bValido = true;
    var sErrores = "";

    var precio = document.getElementById('precio_NueCon').value.trim();
    document.getElementById('precio_NueCon').value = precio;

    if (validaPrecio(precio) == false) {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuNuevoContrato').precio.focus();
        }
        sErrores += "PRECIO del Contrato incorrecto (formato: Hasta 10 digitos mas 1 o 2 decimales)";

        //Marcar error
        document.getElementById('formuNuevoContrato').precio.className = "form-control input-md error";

    } else {
        //Desmarcar error
        document.getElementById('formuNuevoContrato').precio.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }


    var fechaInicio = document.getElementById('fechaIni_NueCon').value.trim();
    document.getElementById('fechaIni_NueCon').value = fechaInicio;


    if (validaFechas(fechaInicio) == false) {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuNuevoContrato').fechaIni.focus();
        }
        sErrores += "<br><br> FECHA INICIO del Contrato incorrecto (formato: 2015-05-01)";

        //Marcar error
        document.getElementById('formuNuevoContrato').fechaIni.className = "form-control input-md error";

    } else {
        //Desmarcar error
        document.getElementById('formuNuevoContrato').fechaIni.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }

    var fechaFin = document.getElementById('fechaFin_NueCon').value.trim();
    document.getElementById('fechaFin_NueCon').value = fechaFin;

    if (validaFechas(fechaFin) == false) {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuNuevoContrato').fechaFin.focus();
        }
        sErrores += "<br><br> FECHA FIN del Contrato incorrecto (formato: 2015-05-01)";

        //Marcar error
        document.getElementById('formuNuevoContrato').fechaFin.className = "form-control input-md error";

    } else {
        //Desmarcar error
        document.getElementById('formuNuevoContrato').fechaFin.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }


    if (bValido == false) {
        //Cancelar envio del formulario
        oEvNuevoContrato.preventDefault();
        //Mostrar errores
        toastr.error(sErrores);
    } else {
        //Aqui estan los datos correctos, los guardamos

        //Comprobar que fecha fin es posterior a fecha inicio

        var fI = new Date(fechaInicio);
        var fF = new Date(fechaFin);

        if (fI < fF) {
            //Comprobar que se ha seleccionado cliente y proyecto

            var select1 = document.querySelector('#nombreProyecto_NueCon');
            var select2 = document.querySelector('#cliente_NueCon');

            if (select1.selectedIndex != 0 && select2.selectedIndex != 0) {

                //Comprobar que no existe un contrato para ese proyecto

                if (oConsultoria.existeContrato(select1.value)) {
                    oEvNuevoContrato.preventDefault();
                    toastr.error("El proyecto seleccionado ya tiene contrato");
                } else {
                    //Guardar el contrato

                    var cliente = select2.value;
                    var proyecto = select1.value;

                    var oContrato = new Contrato(proyecto, precio, fI, fF, cliente);

                    for (var i = 0; i < oConsultoria.clientes.length; i++) {
                        if (select2.value == oConsultoria.clientes[i].dniCliente) {
                            oConsultoria.clientes[i].contratosCliente.push(oContrato);
                        }
                    }
                    var sMensaje = oConsultoria.anadeContrato(oContrato);

                    toastr.success(sMensaje);
                    nuevoContrato();
                }
            } else {
                oEvNuevoContrato.preventDefault();
                toastr.error("Debe seleccionar un cliente y un proyecto");
            }
        } else {
            toastr.error("Error, la fecha fin es anterior a la fecha inicio introducida.");
        }
    }
}


// MODIFICAR CONTRATO ******************************************************
// ********************************************************************

document.querySelector('#guardar_ModCon').addEventListener('click', validaFormModContrato, false);

document.querySelector('#limpiar_ModCon').addEventListener('click', modificarContrato, false);

function validaFormModContrato(oEvento) {
    var oEvModContrato = oEvento || window.event;
    var bValido = true;
    var sErrores = "";

    var precio = document.getElementById('precio_ModCon').value.trim();
    document.getElementById('precio_ModCon').value = precio;

    if (validaPrecio(precio) == false) {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuModificarContrato').precio.focus();
        }
        sErrores += "PRECIO del Contrato incorrecto (formato: Hasta 10 digitos mas 1 o 2 decimales)";

        //Marcar error
        document.getElementById('formuModificarContrato').precio.className = "form-control input-md error";

    } else {
        //Desmarcar error
        document.getElementById('formuModificarContrato').precio.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }


    var fechaInicio = document.getElementById('fechaIni_ModCon').value.trim();
    document.getElementById('fechaIni_ModCon').value = fechaInicio;


    if (validaFechas(fechaInicio) == false) {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuModificarContrato').fechaIni.focus();
        }
        sErrores += "<br><br> FECHA INICIO del Contrato incorrecto (formato: 2015-05-01)";

        //Marcar error
        document.getElementById('formuModificarContrato').fechaIni.className = "form-control input-md error";

    } else {
        //Desmarcar error
        document.getElementById('formuModificarContrato').fechaIni.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }

    var fechaFin = document.getElementById('fechaFin_ModCon').value.trim();
    document.getElementById('fechaFin_ModCon').value = fechaFin;

    if (validaFechas(fechaFin) == false) {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuModificarContrato').fechaFin.focus();
        }
        sErrores += "<br><br> FECHA FIN del Contrato incorrecto (formato: 2015-05-01)";

        //Marcar error
        document.getElementById('formuModificarContrato').fechaFin.className = "form-control input-md error";

    } else {
        //Desmarcar error
        document.getElementById('formuModificarContrato').fechaFin.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }


    if (bValido == false) {
        //Cancelar envio del formulario
        oEvModContrato.preventDefault();
        //Mostrar errores
        toastr.error(sErrores);
    } else {
        //Aqui estan los datos correctos, los guardamos

        //Comprobar que fecha fin es posterior a fecha inicio


        var fI = new Date(fechaInicio);
        var fF = new Date(fechaFin);

        if (fI < fF) {
            //Comprobar que se ha seleccionado contrato

            var select1 = document.querySelector('#selectContrato_ModCon');

            if (select1.selectedIndex != 0) {

                var nombreContratoModificado = select1.value;
                var oContrato = oConsultoria.dameContrato(nombreContratoModificado);

                oContrato.precio = precio;
                oContrato.fechaInicio = fechaInicio;
                oContrato.fechaFin = fechaFin;

                toastr.success("Datos de contrato modificados correctamente");
                modificarContrato();

            } else {
                toastr.error("Debe seleccionar un Contrato");
            }
        } else {
            toastr.error("Error, la fecha fin es anterior a la fecha inicio introducida.");
        }
    }
}


// NUEVA INCIDENCIA ************************************************
// ********************************************************************

document.querySelector('#guardar_NueInc').addEventListener('click', validaFormNuevaIncidencia, false);

document.querySelector('#limpiar_NueInc').addEventListener('click', nuevaIncidencia, false);

function validaFormNuevaIncidencia(oEvento) {
    var oEvNuevoIncidencia = oEvento || window.event;
    var bValido = true;
    var sErrores = "";


    var asunto = document.getElementById('asun_NueInc').value.trim();
    document.getElementById('asun_NueInc').value = asunto;

    if (validaAsunto(asunto) == false) {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuNuevaIncidencia').asunto.focus();
        }
        sErrores += "ASUNTO incorrecto (formato: Máx 60 caracteres)";

        //Marcar error
        document.getElementById('formuNuevaIncidencia').asunto.className = "form-control input-md error";

    } else {
        //Desmarcar error
        document.getElementById('formuNuevaIncidencia').asunto.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }


    var descripcion = document.getElementById('descripcion_NueInc').value.trim();
    document.getElementById('descripcion_NueInc').value = descripcion;


    if (descripcion == "") {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuNuevaIncidencia').desc_inc.focus();
        }
        sErrores += "<br><br> DESCRIPCION sin contenido. Debe describir la incidencia)";

        //Marcar error
        document.getElementById('formuNuevaIncidencia').desc_inc.className = "form-control textarea-md error";

    } else {
        //Desmarcar error
        document.getElementById('formuNuevaIncidencia').desc_inc.className = "form-control textarea-md";  //Pone esta class a la etiqueta.
    }

    if (document.querySelector('#administradores_NueInc').selectedIndex == 0) {
        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.querySelector('#administradores_NueInc').focus();
        }
        sErrores += "<br><br> ADMINISTRADOR no seleccionado. Debe seleccionar uno)";

        //Marcar error
        document.querySelector('#administradores_NueInc').className = "form-control input-large error";

    } else {
        //Desmarcar error
        document.querySelector('#administradores_NueInc').className = "form-control input-large";  //Pone esta class a la etiqueta.
    }


    if (bValido == false) {
        //Cancelar envio del formulario
        oEvNuevoIncidencia.preventDefault();
        //Mostrar errores
        toastr.error(sErrores);
    } else {
        //Aqui estan los datos correctos, los guardamos
        //Recoger datos del formulario


        var codInc = generaCodigos();
        var estado = "Abierta";
        var elementos = document.getElementById('formuNuevaIncidencia').elements;
        var longitud = document.getElementById('formuNuevaIncidencia').length;
        for (var i = 0; i < longitud; i++) {
            if (elementos[i].name == "prioridad" && elementos[i].type == "radio" && elementos[i].checked == true) {
                var prioridad = elementos[i].value;
            }
        }
        var admin = document.querySelector('#administradores_NueInc').value;

        //Crear objeto incidencia y añadirlo al array Incidencias

        var oIncidencia = new Incidencia(codInc, prioridad, asunto, descripcion, admin, estado);

        var sMensaje;
        sMensaje = oConsultoria.anadeIncidencia(oIncidencia);
        toastr.success(sMensaje);
        nuevaIncidencia();
    }


}


// CERRAR INCIDENCIA ************************************************
// ********************************************************************

document.querySelector('#guardar_ModInc').addEventListener('click', validaFormModIncidencia, false);

document.querySelector('#limpiar_ModInc').addEventListener('click', modificaIncidencia, false);

function validaFormModIncidencia(oEvento) {
    var oEvModIncidencia = oEvento || window.event;
    var bValido = true;
    var sErrores = "";

    if (document.querySelector('#incidencia_ModInc').selectedIndex == 0) {
        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.querySelector('#incidencia_ModInc').focus();
        }
        sErrores += "INCIDENCIA no seleccionada. Debe seleccionar uno)";

        //Marcar error
        document.querySelector('#incidencia_ModInc').className = "form-control error";

    } else {
        //Desmarcar error
        document.querySelector('#incidencia_ModInc').className = "form-control";  //Pone esta class a la etiqueta.
    }


    if (bValido == false) {
        //Cancelar envio del formulario
        oEvModIncidencia.preventDefault();
        //Mostrar errores
        toastr.error(sErrores);
    } else {
        //Aqui estan los datos correctos, los guardamos
        //Recoger datos del formulario


        var numInc = parseInt(document.querySelector('#incidencia_ModInc').value);

        var estado = "Cerrada";
        var Enc = false;
        for (var i = 0; i < oConsultoria.incidencias.length && Enc == false; i++) {
            if (oConsultoria.incidencias[i].numeroIncidencia == numInc) {
                Enc = true;
                if(oConsultoria.incidencias[i].estadoIncidencia == "Cerrada"){
                    toastr.error("La incidencia seleccionada ya se encuentra cerrada");
                }else{
                    oConsultoria.incidencias[i].estadoIncidencia = estado;
                    toastr.success("Incidencia cerrada");
                    modificaIncidencia();
                }
            }
        }


    }


}
// NUEVO PROGRAMADOR ******************************************************

document.querySelector('#añadirProgramador').addEventListener('click', validaFormNuevoProgramador, false);

//document.querySelector('#limpiar_NueInc').addEventListener('click', nuevaIncidencia, false);


// ********************************************************************

function validaFormNuevoProgramador(oEvento) {
    var oEvNuevoProg = oEvento || window.event;
    var bValido = true;
    var sErrores = "";

    var idFormulario = "formuNuevoProgramador";
    var idNombre = "nombreProgr_NueProgr";
    var idApellidos = "apellidosProgr_NueProgr";
    var idDNI = "dniProgr_NueProgr";
    var idTelefono = "telefonoProgr_NueProgr";
    var idDireccion = "direccioProgr_NueProgr";
    var trabajador = "Programador";


    var nombre = document.getElementById(idNombre).value.trim();
    document.getElementById(idNombre).value = nombre;

    if (validaNombre(nombre) == false) {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById(idFormulario).nombreProgramador.focus();
        }
        sErrores += "NOMBRE del " + trabajador + " incorrecto (formato: Máx 30 caracteres)";

        //Marcar error
        document.getElementById(idFormulario).nombreProgramador.className = "form-control input-md error";

    } else {
        //Desmarcar error
        document.getElementById(idFormulario).nombreProgramador.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }


    var apellido = document.getElementById(idApellidos).value.trim();
    document.getElementById(idApellidos).value = apellido;


    if (validaApellido(apellido) == false) {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuNuevoProgramador').apellidosProgramador.focus();
        }
        sErrores += "<br><br> APELLIDO del " + trabajador + " incorrecto (formato: Máx 30 caracteres)";

        //Marcar error
        document.getElementById(idFormulario).apellidosProgramador.className = "form-control input-md error";

    } else {
        //Desmarcar error
        document.getElementById(idFormulario).apellidosProgramador.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }

    var dni = document.getElementById(idDNI).value.trim();
    document.getElementById(idDNI).value = dni;

    if (validaDni(dni) == false) {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById(idFormulario).dniProgramador.focus();
        }
        sErrores += "<br><br> DNI del " + trabajador + " incorrecto (formato: 8 digitos más letra mayuscula)";

        //Marcar error
        document.getElementById(idFormulario).dniProgramador.className = "form-control input-md error";

    } else {
        //Desmarcar error
        document.getElementById(idFormulario).dniProgramador.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }

    var tlf = document.getElementById(idTelefono).value.trim();
    document.getElementById(idTelefono).value = tlf;

    if (validaTelefono(tlf) == false) {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById(idFormulario).telefonoProgramador.focus();
        }
        sErrores += "<br><br> TELEFONO del " + trabajador + " incorrecto (formato: 9 digitos comenzando en 6 o 9)";

        //Marcar error
        document.getElementById(idFormulario).telefonoProgramador.className = "form-control input-md error";

    } else {
        //Desmarcar error
        document.getElementById(idFormulario).telefonoProgramador.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }

    var direccion = document.getElementById(idDireccion).value.trim();
    document.getElementById(idDireccion).value = direccion;

    if (validaDireccion(direccion) == false) {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById(idFormulario).direccionProgramador.focus();
        }
        sErrores += "<br><br> DIRECCION del " + trabajador + " incorrecto (formato: 40 caracteres maximo)";

        //Marcar error
        document.getElementById(idFormulario).direccionProgramador.className = "form-control input-md error";

    } else {
        //Desmarcar error
        document.getElementById(idFormulario).direccionProgramador.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }

    if (document.querySelector('#selectAnalistaProgr').selectedIndex == 0) {
        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.querySelector('#selectAnalistaProgr').focus();
        }
        sErrores += "<br><br> "+ trabajador + " no seleccionado. Debe seleccionar uno)";

        //Marcar error
        document.querySelector('#selectAnalistaProgr').className = "form-control input-large error";

    } else {
        //Desmarcar error
        document.querySelector('#selectAnalistaProgr').className = "form-control input-large";  //Pone esta class a la etiqueta.
        var dniAnalista = document.getElementById('selectAnalistaProgr').value;
        var analista = oConsultoria.dameProgramador(dniAnalista);

    }
    if (bValido == false) {
        //Cancelar envio del formulario
        oEvNuevoProg.preventDefault();
        //Mostrar errores
        toastr.error(sErrores);
    } else {
        //Aqui estan los datos correctos, los guardamos
        //Comprobar si existe el trabajador

        var sMensaje = "";

        if (!oConsultoria.existeTrabajador(dni)) {

            var oProgramador = new Programador(nombre, dni, apellido, tlf, direccion,analista);
            sMensaje = "¡ Programador añadido con éxito !";
                oConsultoria.anadeProgramador(oProgramador);
            toastr.success(sMensaje);
        } else {
            sMensaje = "Imposible añadir. El trabajador que intenta añadir al sistema ya estaba registrado";
            toastr.error(sMensaje);
        }

    }


}


// NUEVO ANALISTA ******************************************************

document.querySelector('#añadirAnalista').addEventListener('click', validaFormNuevoAnalista, false);

//document.querySelector('#limpiar_NueInc').addEventListener('click', nuevaIncidencia, false);


// ********************************************************************

function validaFormNuevoAnalista() {
  //  var oEvModiAnalista = oEvento || window.event;
    var bValido = true;
    var sErrores = "";

    var idFormulario = "formuNuevoAnalista";
    var idNombre = "nombreAnalis_NueAnalist";
    var idApellidos = "apellidosAnalis_NueAnalist";
    var idDNI = "dniAnalis_NueAnalist";
    var idTelefono = "telefonoAnalis_NueAnalist";
    var idDireccion = "direccionAnalis_NueAnalist";
    var trabajador = "Analista";


    var nombre = document.getElementById(idNombre).value.trim();
    document.getElementById(idNombre).value = nombre;

    if (validaNombre(nombre) == false) {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById(idFormulario).nombreAnalista.focus();
        }
        sErrores += "NOMBRE del " + trabajador + " incorrecto (formato: Máx 30 caracteres)";

        //Marcar error
        document.getElementById(idFormulario).nombreAnalista.className = "form-control input-md error";

    } else {
        //Desmarcar error
        document.getElementById(idFormulario).nombreAnalista.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }


    var apellido = document.getElementById(idApellidos).value.trim();
    document.getElementById(idApellidos).value = apellido;


    if (validaApellido(apellido) == false) {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuNuevoProgramador').apellidosAnalsta.focus();
        }
        sErrores += "<br><br> APELLIDO del " + trabajador + " incorrecto (formato: Máx 30 caracteres)";

        //Marcar error
        document.getElementById(idFormulario).apellidosAnalsta.className = "form-control input-md error";

    } else {
        //Desmarcar error
        document.getElementById(idFormulario).apellidosAnalsta.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }

    var dni = document.getElementById(idDNI).value.trim();
    document.getElementById(idDNI).value = dni;

    if (validaDni(dni) == false) {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById(idFormulario).dniAnalist.focus();
        }
        sErrores += "<br><br> DNI del " + trabajador + " incorrecto (formato: 8 digitos más letra mayuscula)";

        //Marcar error
        document.getElementById(idFormulario).dniAnalist.className = "form-control input-md error";

    } else {
        //Desmarcar error
        document.getElementById(idFormulario).dniAnalist.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }

    var tlf = document.getElementById(idTelefono).value.trim();
    document.getElementById(idTelefono).value = tlf;

    if (validaTelefono(tlf) == false) {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById(idFormulario).telefonoAnalista.focus();
        }
        sErrores += "<br><br> TELEFONO del " + trabajador + " incorrecto (formato: 9 digitos comenzando en 6 o 9)";

        //Marcar error
        document.getElementById(idFormulario).telefonoAnalista.className = "form-control input-md error";

    } else {
        //Desmarcar error
        document.getElementById(idFormulario).telefonoAnalista.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }

    var direccion = document.getElementById(idDireccion).value.trim();
    document.getElementById(idDireccion).value = direccion;

    if (validaDireccion(direccion) == false) {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById(idFormulario).direccionAnalista.focus();
        }
        sErrores += "<br><br> DIRECCION del " + trabajador + " incorrecto (formato: 40 caracteres maximo)";

        //Marcar error
        document.getElementById(idFormulario).direccionAnalista.className = "form-control input-md error";

    } else {
        //Desmarcar error
        document.getElementById(idFormulario).direccionAnalista.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }

    if (document.querySelector('#selectPrograAnalista').selectedIndex == 0 || document.querySelector('#selectPrograAnalista').selectedIndex == -1 || document.getElementById('selectPrograAnalista').options[1]=="Seleccione un Programador" ) {
        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.querySelector('#selectPrograAnalista').focus();
        }
        sErrores += "<br><br> "+ trabajador + " no seleccionado. Debe seleccionar al menos uno)";

        //Marcar error
        document.querySelector('#selectPrograAnalista').className = "form-control input-large error";

    } else {
        //Desmarcar error
        document.querySelector('#selectPrograAnalista').className = "form-control input-large";  //Pone esta class a la etiqueta.


       var arrayDeDNI = document.getElementById('selectPrograAnalista').options;
        var arrayProgElegidos=[];
        var contOption=1;
for (var i=0;i<arrayDeDNI.length;i++)

{
    if(arrayDeDNI[i].selected)
    arrayProgElegidos[i]=oConsultoria.dameProgramador(arrayDeDNI[i].value);

}


        //var programadores = oConsultoria.dameProgramador(dniAnalista);


    }
    if (bValido == false) {
        //Cancelar envio del formulario
        //oEvNuevoProg.preventDefault();
        //Mostrar errores
        toastr.error(sErrores);
    } else {
        //Aqui estan los datos correctos, los guardamos
        //Comprobar si existe el trabajador

        var sMensaje = "";

        if (!oConsultoria.existeTrabajador(dni)) {

            var oObjeto = new Analista(nombre, dni, apellido, tlf, direccion,arrayProgElegidos);
            sMensaje = "¡ Analista Añadido con éxito !";
            oConsultoria.anadeAnalista(oObjeto);
            toastr.success(sMensaje);
        } else {
            sMensaje = "Imposible añadir. El trabajador que intenta añadir al sistema ya estaba registrado";
            toastr.error(sMensaje);
        }

    }


}




// MODIFICA ANALISTA ******************************************************

document.querySelector('#modificarAnalista').addEventListener('click', validaFormModificaAnalista, false);

//document.querySelector('#limpiar_NueInc').addEventListener('click', nuevaIncidencia, false);


// ********************************************************************

function validaFormModificaAnalista() {
    //var oEvModiAnalista = oEvento || window.event;
    var bValido = true;
    var sErrores = "";

    var idFormulario = "formuModificaAnalista";
    var idNombre = "nombreAnalis_Mod";
    var idApellidos = "apellidosAnalis_Mod";
    var idDNI = "dniAnalis_Mod";
    var idTelefono = "telefonoAnalis_Mod";
    var idDireccion = "direccionAnalis_Mod";
    var trabajador = "Analista";


    var nombre = document.getElementById(idNombre).value.trim();
    document.getElementById(idNombre).value = nombre;

    if (validaNombre(nombre) == false) {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById(idFormulario).nombreAnalistaMod.focus();
        }
        sErrores += "NOMBRE del " + trabajador + " incorrecto (formato: Máx 30 caracteres)";

        //Marcar error
        document.getElementById(idFormulario).nombreAnalistaMod.className = "form-control input-md error";

    } else {
        //Desmarcar error
        document.getElementById(idFormulario).nombreAnalistaMod.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }


    var apellido = document.getElementById(idApellidos).value.trim();
    document.getElementById(idApellidos).value = apellido;


    if (validaApellido(apellido) == false) {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuNuevoProgramador').apellidosAnalstaMod.focus();
        }
        sErrores += "<br><br> APELLIDO del " + trabajador + " incorrecto (formato: Máx 30 caracteres)";

        //Marcar error
        document.getElementById(idFormulario).apellidosAnalstaMod.className = "form-control input-md error";

    } else {
        //Desmarcar error
        document.getElementById(idFormulario).apellidosAnalstaMod.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }

    var dni = document.getElementById(idDNI).value.trim();
    document.getElementById(idDNI).value = dni;

    if (validaDni(dni) == false) {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById(idFormulario).dniAnalistMod.focus();
        }
        sErrores += "<br><br> DNI del " + trabajador + " incorrecto (formato: 8 digitos más letra mayuscula)";

        //Marcar error
        document.getElementById(idFormulario).dniAnalistMod.className = "form-control input-md error";

    } else {
        //Desmarcar error
        document.getElementById(idFormulario).dniAnalistMod.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }

    var tlf = document.getElementById(idTelefono).value.trim();
    document.getElementById(idTelefono).value = tlf;

    if (validaTelefono(tlf) == false) {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById(idFormulario).telefonoProgramador.focus();
        }
        sErrores += "<br><br> TELEFONO del " + trabajador + " incorrecto (formato: 9 digitos comenzando en 6 o 9)";

        //Marcar error
        document.getElementById(idFormulario).telefonoAnalistaMod.className = "form-control input-md error";

    } else {
        //Desmarcar error
        document.getElementById(idFormulario).telefonoAnalistaMod.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }

    var direccion = document.getElementById(idDireccion).value.trim();
    document.getElementById(idDireccion).value = direccion;

    if (validaDireccion(direccion) == false) {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById(idFormulario).direccionAnalistaMod.focus();
        }
        sErrores += "<br><br> DIRECCION del " + trabajador + " incorrecto (formato: 40 caracteres maximo)";

        //Marcar error
        document.getElementById(idFormulario).direccionAnalistaMod.className = "form-control input-md error";

    } else {
        //Desmarcar error
        document.getElementById(idFormulario).direccionAnalistaMod.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }

    if (document.querySelector('#selectAnalistaProgr').selectedIndex == 0) {
        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.querySelector('#selectAnalistaProgr').focus();
        }
        sErrores += "<br><br> "+ trabajador + " no seleccionado. Debe seleccionar uno)";

        //Marcar error
        document.querySelector('#selectPrograAnalistaModifica').className = "form-control input-large error";

    } else {
        //Desmarcar error
        document.querySelector('#selectPrograAnalistaModifica').className = "form-control input-large";  //Pone esta class a la etiqueta.
        var dniProgr = document.getElementById('selectPrograAnalistaModifica').value;
        //var programadores = oConsultoria.dameProgramador(dniAnalista);
        alert(dniProgr);

    }
    if (bValido == false) {
        //Cancelar envio del formulario
        //oEvNuevoProg.preventDefault();
        //Mostrar errores
        toastr.error(sErrores);
    } else {


        //Aqui estan los datos correctos, los guardamos
        //El cliente ya existe en el sistema, no hace falta comprobarlo.
        // Coger el objeto existente y cambiar los valores de sus atributos por los actuales.

        var select = document.querySelector('#selectAnalis_Mod');
        var dniObjetoSeleccionado = select.value;
        var oObjeto= oConsultoria.dameCliente(dniObjetoSeleccionado);

        oObjeto.nombreAnalista = nombre;
        oObjeto.apellidosAnalista = apellido;
        oObjeto.telefonoAnalista = tlf;
        oObjeto.direccionAnalista = direccion;

       // programadoresSeleccionados=


       // oObjeto.programadores


        toastr.success("Datos modificados correctamente");

        modificaAnalista();
    }


}





















































// NUEVA PUBLICIDAD ************************************************
// ********************************************************************

document.querySelector('#guardar_NuePub').addEventListener('click', validaFormNuevaPublicidad, false);

document.querySelector('#limpiar_NuePub').addEventListener('click', nuevaPublicidad, false);

function validaFormNuevaPublicidad(oEvento) {
    var oEvNuevoPublicidad = oEvento || window.event;
    var bValido = true;
    var sErrores = "";


    var admin = parseInt(document.querySelector('#selectAdmin_NuePub').value);

    if (document.getElementById('selectAdmin_NuePub').selectedIndex == 0) {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuNuevaPublicidad').selectAdmin.focus();
        }
        sErrores += "Debe seleccionar un administrador";

        //Marcar error
        document.getElementById('formuNuevaPublicidad').selectAdmin.className = "form-control input-md error";

    } else {
        //Desmarcar error
        document.getElementById('formuNuevaPublicidad').selectAdmin.className = "form-control input-md";  //Pone esta class a la etiqueta.
    }


    var cliente = document.querySelector('#cliente_NuePub').value;

    if (document.getElementById('cliente_NuePub').selectedIndex == 0) {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuNuevaPublicidad').cliente.focus();
        }
        sErrores += "<br><br> Debe seleccionar un cliente al que asignar la publicidad.";

        //Marcar error
        document.getElementById('formuNuevaPublicidad').cliente.className = "form-control textarea-md error";

    } else {
        //Desmarcar error
        document.getElementById('formuNuevaPublicidad').cliente.className = "form-control textarea-md";  //Pone esta class a la etiqueta.
    }

    var descripcion = document.getElementById('descripcion_NuePub').value;

    if (descripcion == "") {

        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.getElementById('formuNuevaPublicidad').descripcionPublicidad.focus();
        }
        sErrores += "<br><br> Debe aportar una breve descripcion de la publicidad.";

        //Marcar error
        document.getElementById('formuNuevaPublicidad').descripcionPublicidad.className = "form-control error";

    } else {
        //Desmarcar error
        document.getElementById('formuNuevaPublicidad').descripcionPublicidad.className = "form-control";  //Pone esta class a la etiqueta.
    }


    if (bValido == false) {
        //Cancelar envio del formulario
        oEvNuevoPublicidad.preventDefault();
        //Mostrar errores
        toastr.error(sErrores);
    } else {
        //Aqui estan los datos correctos, los guardamos
        //Recoger datos del formulario


        var codPubli = generaCodigos();
        var elementos = document.getElementById('formuNuevaPublicidad').elements;
        var longitud = document.getElementById('formuNuevaPublicidad').length;

        for (var i = 0; i < longitud; i++) {
            if (elementos[i].name == "tipo" && elementos[i].type == "radio" && elementos[i].checked == true) {
                var tipo = elementos[i].value;
            }
        }

        //Crear objeto incidencia y añadirlo al array Incidencias

        var oPublicidad = new Publicidad(codPubli, tipo, descripcion, admin, cliente);

        var sMensaje;
        sMensaje = oConsultoria.anadePublicidad(oPublicidad);
        toastr.success(sMensaje);
    }


}


// ELIMINAR PUBLICIDAD ************************************************
// ********************************************************************

document.querySelector('#eliminar_EliPub').addEventListener('click', validaFormEliminaPublicidad, false);

document.querySelector('#limpiar_EliPub').addEventListener('click', eliminarPublicidad, false);

function validaFormEliminaPublicidad(oEvento) {
    var oEvEliminaPubli = oEvento || window.event;
    var bValido = true;
    var sErrores = "";

    if (document.querySelector('#selectPublicidad_EliPub').selectedIndex == 0) {
        if (bValido == true) {
            bValido = false;
            //Este campo obtiene el foco
            document.querySelector('#incidencia_ModInc').focus();
        }
        sErrores += "PUBLICIDAD no seleccionada. Debe seleccionar uno)";

        //Marcar error
        document.querySelector('#selectPublicidad_EliPub').className = "form-control error";

    } else {
        //Desmarcar error
        document.querySelector('#selectPublicidad_EliPub').className = "form-control";  //Pone esta class a la etiqueta.
    }


    if (bValido == false) {
        //Cancelar envio del formulario
        oEvEliminaPubli.preventDefault();
        //Mostrar errores
        toastr.error(sErrores);
    } else {
        //Aqui estan los datos correctos, los guardamos
        //Recoger datos del formulario


        var sMensaje = "";

        var codPubli = parseInt(document.querySelector('#selectPublicidad_EliPub').value);
        alert(codPubli);
        var oPublicidad = oConsultoria.damePublicidad(codPubli);

        for (var i = 0; i < oConsultoria.publicidades.length; i++) {
            if (oConsultoria.publicidades[i].codigoPublicidad === codPubli) {
                sMensaje = oConsultoria.eliminaPublicidad(oPublicidad);
            }
        }
        toastr.success(sMensaje);
    }

}


// *******************************************************************************************************************
// Funciones Varias


//Cargar combo de Administradores en funcion del id
function cargaComboAdministradores(id) {

    var miCombo = document.querySelector(id);
    var oOption = document.createElement('option');
    oOption.text = 'Seleccione un Admin';
    miCombo.add(oOption);
    for (var i = 0; i < oConsultoria.administradores.length; i++) {
        var oOption = document.createElement('option');
        oOption.text = oConsultoria.administradores[i].nombreTrabajador + ' - ' + oConsultoria.administradores[i].codigoAdmin;
        oOption.value = oConsultoria.administradores[i].codigoAdmin;
        miCombo.add(oOption);
    }
}

//Completa los campos de texto
function muestraDatosDeEsteAdmin() {

    //Obtener valor del option seleccionado
    var select = document.querySelector('#selectAdmin_ModAdm');

    if (select.selectedIndex != 0) {

        var codAdmin = select.value;
        var oAdmin = oConsultoria.dameAdministrador(codAdmin);

        //Extraer los valores de sus atributos y colocarlos en los campos de texto.

        var nomAdmin = document.querySelector('#nombreAdmin_ModAdm');
        nomAdmin.value = oAdmin.nombreTrabajador;
        nomAdmin.removeAttribute('readonly');

        var apeAdmin = document.querySelector('#apellidoAdmin_ModAdm');
        apeAdmin.value = oAdmin.apellidosTrabajador;
        apeAdmin.removeAttribute('readonly');

        //Este campo es unico(DNI), no debe poderse modificar. Dejamos el atributo readonly
        var dniAdmin = document.querySelector('#dniAdmin_ModAdm');
        dniAdmin.value = oAdmin.dniTrabajador;

        var tlfAdmin = document.querySelector('#telefonoAdmin_ModAdm');
        tlfAdmin.value = oAdmin.telefonoTrabajador;
        tlfAdmin.removeAttribute('readonly');

        var dirAdmin = document.querySelector('#direccionAdmin_ModAdm');
        dirAdmin.value = oAdmin.direccionTrabajador;
        dirAdmin.removeAttribute('readonly');

    }
}

//Vacia combo antes de ser cargado
function vaciarCombo(id) {

    var select = document.querySelector(id);

    var longitud = select.length;
    for (var i = 0; i < longitud; i++) {
        select.options.remove(0);
    }
}


function cargaComboClientes(id) {

    var miCombo = document.querySelector(id);
    var oOption = document.createElement('option');
    oOption.text = 'Seleccione un Cliente';
    miCombo.add(oOption);
    for (var i = 0; i < oConsultoria.clientes.length; i++) {
        var oOption = document.createElement('option');
        oOption.text = oConsultoria.clientes[i].nombreCliente + ' ' +
            oConsultoria.clientes[i].apellidosCliente + ' - ' +
            oConsultoria.clientes[i].dniCliente;
        oOption.value = oConsultoria.clientes[i].dniCliente;
        miCombo.add(oOption);
    }
}

//Completa los campos de texto
function muestraDatosDeEsteCliente() {

    //Obtener valor del option seleccionado
    var select = document.querySelector('#selectCliente_ModCli');

    if (select.selectedIndex != 0) {

        var dniCli = select.value;
        var oCliente = oConsultoria.dameCliente(dniCli);

        //Extraer los valores de sus atributos y colocarlos en los campos de texto.

        var nomCli = document.querySelector('#nombreCliente_ModCli');
        nomCli.value = oCliente.nombreCliente;
        nomCli.removeAttribute('readonly');

        var apeCli = document.querySelector('#apellidoCliente_ModCli');
        apeCli.value = oCliente.apellidosCliente;
        apeCli.removeAttribute('readonly');

        //Este campo es unico(DNI), no debe poderse modificar. Dejamos el atributo readonly
        var dniCliente = document.querySelector('#dniCliente_ModCli');
        dniCliente.value = oCliente.dniCliente;

        var tlfCli = document.querySelector('#telefonoCliente_ModCli');
        tlfCli.value = oCliente.telefonoCliente;
        tlfCli.removeAttribute('readonly');

        var dirCli = document.querySelector('#direccionCliente_ModCli');
        dirCli.value = oCliente.direccionCliente;
        dirCli.removeAttribute('readonly');

    }
}


function cargaComboContratos(id) {

    var miCombo = document.querySelector(id);
    var oOption = document.createElement('option');
    oOption.text = 'Seleccione un Contrato';
    miCombo.add(oOption);
    for (var i = 0; i < oConsultoria.contratos.length; i++) {
        var oOption = document.createElement('option');
        oOption.text = oConsultoria.contratos[i].nombreProyecto + ' - ' + oConsultoria.contratos[i].fechaInicio;
        oOption.value = oConsultoria.contratos[i].nombreProyecto;
        miCombo.add(oOption);
    }
}

//Completa los campos de texto
function muestraDatosDeEsteContrato() {

    //Obtener valor del option seleccionado
    var select = document.querySelector('#selectContrato_ModCon');

    if (select.selectedIndex != 0) {
        mostrarCampos(document.querySelectorAll('#formuModificarContrato div.oculto'));
    } else {
        modificarContrato();
    }


    if (select.selectedIndex != 0) {

        var nombreDelContrato = select.value;
        var oContrato = oConsultoria.dameContrato(nombreDelContrato);

        //Extraer los valores de sus atributos y colocarlos en los campos de texto.

        var nomProyecto = document.querySelector('#nombreProyecto_ModCon');
        nomProyecto.value = oContrato.nombreProyecto;
        nomProyecto.setAttribute('readonly', 'readonly');


        //Obtener el cliente (dameCliente) para aportar el Nombre del cliente y su DNI

        var oCliente = oConsultoria.dameCliente(oContrato.dniCliente);


        var client = document.querySelector('#cliente_ModCon');
        client.value = oCliente.nombreCliente + " - " + oContrato.dniCliente;
        client.setAttribute('readonly', 'readonly');

        var prec = document.querySelector('#precio_ModCon');
        prec.value = oContrato.precio;
        prec.removeAttribute('readonly');


        var fIni = document.querySelector('#fechaIni_ModCon');
        fIni.value = oContrato.fechaInicio;
        fIni.removeAttribute('readonly');

        var fFin = document.querySelector('#fechaFin_ModCon');
        fFin.value = oContrato.fechaFin;
        fFin.removeAttribute('readonly');

    }
}


function cargarComboPublicidad(id) {
    var miCombo = document.querySelector(id);
    var oOption = document.createElement('option');
    oOption.text = 'Seleccione un Contrato';
    miCombo.add(oOption);
    for (var i = 0; i < oConsultoria.publicidades.length; i++) {
        var oOption = document.createElement('option');
        oOption.text = oConsultoria.publicidades[i].tipo + ' - ' + oConsultoria.publicidades[i].dniCliente;
        oOption.value = oConsultoria.publicidades[i].codigoPublicidad;
        miCombo.add(oOption);
    }
}



//Completa los campos de texto
function muestraDatosDeEstaIncidencia() {

    //Obtener valor del option seleccionado
    var select = document.querySelector('#incidencia_ModInc');

    if (select.selectedIndex != 0) {
        mostrarCampos(document.querySelectorAll('#formuModificaIncidencia div.oculto'));
    } else {
        modificaIncidencia();
    }

    if (select.selectedIndex != 0) {

        var numIncidencia = select.value;
        var oIncidencia = oConsultoria.dameIncidencia(numIncidencia);

        //Extraer los valores de sus atributos y colocarlos en los campos de texto.

        var asunto = document.querySelector('#asun_ModInc');
        asunto.value = oIncidencia.asuntoIncidencia;

        var descripcion = document.querySelector('#descripcion_ModInc');
        descripcion.value = oIncidencia.descripcionIncidencia;

        var prioridad = document.querySelector('#prioridad_ModInc');
        prioridad.value = oIncidencia.prioridadIncidencia;

        var admin = document.querySelector('#administradores_ModInc');
        admin.value = oIncidencia.codAdmin;

        var estado = "Cerrada";
        estado.value = oIncidencia.codAdmin;
    }
}


//Cargar combo de Incidencias
function cargaComboIncidencias() {

    var miCombo = document.querySelector('#incidencia_ModInc');
    var oOption = document.createElement('option');
    oOption.text = 'Seleccione una Incidencia';
    miCombo.add(oOption);
    var cont = 0;
    for (var i = 0; i < oConsultoria.incidencias.length; i++) {
        if(oConsultoria.incidencias[i].estadoIncidencia != "Cerrada"){
            var oOption = document.createElement('option');
            oOption.text = oConsultoria.incidencias[i].numeroIncidencia + ' - ' + oConsultoria.incidencias[i].asuntoIncidencia;
            oOption.value = oConsultoria.incidencias[i].numeroIncidencia;
            miCombo.add(oOption);
        }else{
            cont++;
        }
    }
    var sMensaje;
    if(cont == oConsultoria.incidencias.length){
        var sMensaje = "No hay incidencias pendientes de cerrar."
    }else{
        sMensaje = "Hay Incidencias";
    }
    return sMensaje;
}

function cargaComboProyectos(id) {

    var miCombo = document.querySelector(id);
    var oOption = document.createElement('option');
    oOption.text = 'Seleccione un Proyecto';
    miCombo.add(oOption);
    for (var i = 0; i < oConsultoria.proyectos.length; i++) {
        var oOption = document.createElement('option');
        oOption.text = oConsultoria.proyectos[i].nombreProyecto;
        oOption.value = oConsultoria.proyectos[i].nombreProyecto;
        miCombo.add(oOption);
    }
}


//Cargar combo de Analistas
function cargaComboAnalista(id) {

    var miCombo = document.querySelector(id);
    var oOptions = document.createElement('option');
    oOptions.text = 'Seleccione un Analista';
    miCombo.add(oOptions);
    for (var i = 0; i < oConsultoria.analistas.length; i++) {
        var oOption = document.createElement('option');
        oOption.text = oConsultoria.analistas[i].nombreTrabajador + ' - ' + oConsultoria.analistas[i].dniTrabajador;
        oOption.value = oConsultoria.analistas[i].dniTrabajador;
        miCombo.add(oOption);
    }
}

//Cargar combo de Programador
function cargaComboProgramador(id) {

    var miCombo = document.querySelector(id);
    var oOptions = document.createElement('option');
    oOptions.text = 'Seleccione un Programador';
    miCombo.add(oOptions);
    for (var i = 0; i < oConsultoria.programadores.length; i++) {
        var oOption = document.createElement('option');
        oOption.text = oConsultoria.programadores[i].nombreTrabajador;
        oOption.value = oConsultoria.programadores[i].dniTrabajador;
        miCombo.add(oOption);
    }
}
//Completa los campos de texto
function muestraDatosDeEsteProgramador() {

    //Obtener valor del option seleccionado
    var select = document.querySelector('#selectProgram_Mod');

    if (select.selectedIndex != 0) {

        var dni = select.value;
        var oProgr = oConsultoria.dameProgramador(dni);

        //Extraer los valores de sus atributos y colocarlos en los campos de texto.

        var nom = document.querySelector('#nombreProgr_ModProgr');
        nom.value = oProgr.nombreTrabajador;
        nom.removeAttribute('readonly');

        var ape = document.querySelector('#apellidosProgr_ModProgr');
        ape.value = oProgr.apellidosTrabajador;
        ape.removeAttribute('readonly');

        //Este campo es unico(DNI), no debe poderse modificar. Dejamos el atributo readonly
        var dniS = document.querySelector('#dniProgr_ModProgr');
        dniS.value = oProgr.dniTrabajador;

        var tlf = document.querySelector('#telefonoProgr_ModProgr');
        tlf.value = oProgr.telefonoTrabajador;
        tlf.removeAttribute('readonly');

        var dir = document.querySelector('#direccioProgr_ModProgr');
        dir.value = oProgr.direccionTrabajador;
        dir.removeAttribute('readonly');

    }
}
//Completa los campos de texto
function muestraDatosDeEsteAnalista() {

    //Obtener valor del option seleccionado
    var select = document.querySelector('#selectAnalis_Mod');

    if (select.selectedIndex != 0)
    {

        var dni = select.value;
        var oProgr = oConsultoria.dameAnalista(dni);

        //Extraer los valores de sus atributos y colocarlos en los campos de texto.

        var nom = document.querySelector('#nombreProgr_ModProgr');
        nom.value = oProgr.nombreTrabajador;
        nom.removeAttribute('readonly');

        var ape = document.querySelector('#apellidosProgr_ModProgr');
        ape.value = oProgr.apellidosTrabajador;
        ape.removeAttribute('readonly');

        //Este campo es unico(DNI), no debe poderse modificar. Dejamos el atributo readonly
        var dniS = document.querySelector('#dniProgr_ModProgr');
        dniS.value = oProgr.dniTrabajador;

        var tlf = document.querySelector('#telefonoProgr_ModProgr');
        tlf.value = oProgr.telefonoTrabajador;
        tlf.removeAttribute('readonly');

        var dir = document.querySelector('#direccioProgr_ModProgr');
        dir.value = oProgr.direccionTrabajador;
        dir.removeAttribute('readonly');

    }
}

function listaProgramadores() {

    ocultarFormularios();
    document.getElementById('tablas').style.display = 'block';
    var arrayProgramadores = oConsultoria.dameListaProgramadores();
    var tipo=1;
    var oCabecera = ["Nombre", "DNI", "Apellidos", "Telefono", "Direccion", "Analista"];
    pintaTabla(oCabecera, arrayProgramadores,tipo);


}


function listaAdministradores(){

    ocultarFormularios();
    document.getElementById('tablas').style.display = 'block';
    var arrayAdministradores = oConsultoria.administradores;
    var tipo=1;
    var oCabecera = ["Nombre", "DNI", "Apellidos", "Telefono", "Direccion", "Codigo"];
    pintaTabla(oCabecera, arrayAdministradores,tipo);


}



function listaAnalistas() {


    ocultarFormularios();
    document.getElementById('tablas').style.display = 'block';
    var arrayAnalistas = oConsultoria.analistas;
    var tipo= "Analista";
    var oCabecera = ["Nombre", "DNI", "Apellidos", "Telefono", "Direccion", "Programadores"];
    pintaTabla(oCabecera, arrayAnalistas,tipo);


}

function listaIncidencias(filtro) {

    ocultarFormularios();
    document.getElementById('tablas').style.display = 'block';

    var array = oConsultoria.listarIncidencias(filtro);
    dibujarTabla(array[0], array[1]);
}

function listaClientes() {

    ocultarFormularios();
    document.getElementById('tablas').style.display = 'block';

    var array = oConsultoria.listarClientes();
    dibujarTabla(array[0], array[1]);
}

function listaPublicidad() {

    ocultarFormularios();
    document.getElementById('tablas').style.display = 'block';

    var array = oConsultoria.listarPublicidad();
    dibujarTabla(array[0], array[1]);
}

function listaContrato() {

    ocultarFormularios();
    document.getElementById('tablas').style.display = 'block';

    var array = oConsultoria.listarContratos();
    dibujarTabla(array[0], array[1]);
}


//TABLAS CON DOM

function pintaTabla(oCabecera, array, tipoObjeto) {

    //Se crean los CONTENEDORES
    var divContainer = document.createElement("div");
    divContainer.classList.add("container");
    var divRow = document.createElement("div");
    divRow.classList.add("row");
    var divTabla = document.createElement("div");
    divTabla.classList.add("col-sm-8");
    var divRelleno1 = document.createElement("div");
    divRelleno1.classList.add("col-sm-2");
    var divRelleno2 = document.createElement("div");
    divRelleno2.classList.add("col-sm-2");

    //Se especifica cual es la posicion de cada uno
    divContainer.appendChild(divRow);
    divRow.appendChild(divRelleno1);
    divRow.appendChild(divTabla);
    divRow.appendChild(divRelleno2);

    //se crea la tabla en cuestion
    var oTabla = document.createElement("table");
    oTabla.setAttribute("class", "table table-responsive table-bordered table-hover");
  /*  oTabla.setAttribute("class","");
    oTabla.setAttribute("class","");
    oTabla.setAttribute("class","");*/
    oTabla.setAttribute("id", "TablaCreada");

    // CABECERA
    var oTHead = oTabla.createTHead();

    // Fila cabecera
    var oFila = oTHead.insertRow(-1);
    oFila.classList.add("info");

    //Identificamos los th que son necesarios
    for (var i = 0; i < oCabecera.length; i++) {
        var oTh = document.createElement("th");
        var oTexto = document.createTextNode(oCabecera[i]);
        oTh.appendChild(oTexto);
        oFila.appendChild(oTh);
    }

    //Comprobar el tipo de objeto a listar

    // var oTBody = oTabla.createTBody();
    // var posicion = document.querySelector("#tablas");
    // switch (tipoObjeto){
    //     case "Analista":{
    //         for (var p = 0; p < array.length; p++) {
    //             oFila = oTBody.insertRow(-1);
    //             for (var dentro = 0; dentro < 6; dentro++) {
    //                 var info = [];
    //                 switch (dentro) {
    //                     case 0:{ info = array[p].nombreTrabajador;
    //                         break; }
    //                     case 1:{ info = array[p].dniTrabajador;
    //                         break; }
    //                     case 2:{ info = array[p].apellidosTrabajador;
    //                         break; }
    //                     case 3:{ info = array[p].telefonoTrabajador;
    //                         break; }
    //                     case 4:{ info = array[p].direccionTrabajador;
    //                         break; }
    //                     case 5:{ info = array[p].programadores;
    //                         break; }
    //                 }
    //             }
    //             oTexto = document.createTextNode(info);
    //
    //             var oCelda = oFila.insertCell(-1);
    //             oCelda.appendChild(oTexto);
    //             oFila.appendChild(oCelda);
    //         }
    //         break;
    //     }
    //     case Programador:{
    //
    //         break;
    //     }
    //     case Administrador:{
    //
    //         break;
    //     }
    //     case Cliente:{
    //
    //         break;
    //     }
    //     case Contrato:{
    //
    //         break;
    //     }
    //     case Proyecto:{
    //
    //         break;
    //     }
    //     case Tarea:{
    //
    //         break;
    //     }
    //     case Incidencia:{
    //
    //         break;
    //     }
    //     case Publicidad:{
    //
    //         break;
    //     }
    //
    // }
    // divTabla.appendChild(oTabla);
    // //borramos antes lo anterior
    // while (posicion.hasChildNodes()) {
    //     posicion.removeChild(posicion.lastChild);
    // }
    // posicion.appendChild(divContainer);



    var oTBody = oTabla.createTBody();

    var posicion = document.querySelector("#tablas");
    // oTabla.createCaption();


    for (var p = 0; p < array.length; p++) {

        oFila = oTBody.insertRow(-1);

        for (var dentro = 0; dentro < 6; dentro++) {
            //Insertar datos de los objetos
            var info;
            switch (dentro) {

                case 0:
                {
                    info = array[p].nombreTrabajador;
                    break
                }
                case 1:
                {
                    info = array[p].dniTrabajador;
                    break;
                }
                case 2:
                {
                    info = array[p].apellidosTrabajador;
                    break;
                }
                case 3:
                {
                    info = array[p].telefonoTrabajador;
                    break;
                }
                case 4:
                {
                    info = array[p].direccionTrabajador;
                    break;
                }

                default:
                    info = "";

            }
            if(info == ""){

                if(array[p] instanceof Programador)
                {

                    info = array[p].analista;
                    oTexto = document.createTextNode(info);
                }
                if(array[p] instanceof Analista)
                {
                    info = "";

                    for(var i=0;i<array[p].programadores.length;i++)
                    {
                        info+=array[p].programadores[i].nombreTrabajador+"\n";

                    }







                    oTexto = document.createTextNode(info);

                }
                if(array[p] instanceof Administrador)
                {

                    info = array[p].codigoAdmin;
                    oTexto = document.createTextNode(info);

                }
            }else
            {
                oTexto = document.createTextNode(info);
            }
            var oCelda = oFila.insertCell(-1);
            oCelda.appendChild(oTexto);
            oFila.appendChild(oCelda);
        }
        // var nombre= array[p].nombreTrabajador;
    }
    divTabla.appendChild(oTabla);
    //borramos antes lo anterior
    while (posicion.hasChildNodes()) {
        posicion.removeChild(posicion.lastChild);
    }
    posicion.appendChild(divContainer);

}


function dibujarTabla(oCabecera, oInfo){

    //Se crean los CONTENEDORES
    var divContainer = document.createElement("div");
    divContainer.classList.add("container");
    var divRow = document.createElement("div");
    divRow.classList.add("row");
    var divTabla = document.createElement("div");
    divTabla.classList.add("col-sm-8");
    var divRelleno1 = document.createElement("div");
    divRelleno1.classList.add("col-sm-2");
    var divRelleno2 = document.createElement("div");
    divRelleno2.classList.add("col-sm-2");

    //Se especifica cual es la posicion de cada uno
    divContainer.appendChild(divRow);
    divRow.appendChild(divRelleno1);
    divRow.appendChild(divTabla);
    divRow.appendChild(divRelleno2);

    //se crea la tabla en cuestion
    var oTabla = document.createElement("table");
    oTabla.setAttribute("class", "table table-responsive table-bordered table-hover");
    oTabla.setAttribute("id", "TablaCreada");

    // CABECERA
    var oTHead = oTabla.createTHead();

    // Fila cabecera
    var oFila = oTHead.insertRow(-1);
    oFila.classList.add("info");

    //Identificamos los th que son necesarios
    for (var i = 0; i < oCabecera.length; i++) {
        var oTh = document.createElement("th");
        var oTexto = document.createTextNode(oCabecera[i]);
        oTh.appendChild(oTexto);
        oFila.appendChild(oTh);
    }

    var oTBody = oTabla.createTBody();

    var posicion = document.querySelector("#tablas");
    // oTabla.createCaption();


    for (var j = 0;j<oInfo.length;j++) {
        oFila = oTBody.insertRow(-1);
        for (var k = 0;k<oInfo[j].length;k++) {
            var oCelda = oFila.insertCell(-1);

            if(oInfo[j].isArray){  //Comprobar si el dato ha introducir es un array.
                for(var l=0;l<oInfo[k].length;l++){

                    var oFilaInterna = oCelda.insertRow(-1);
                    var oCeldaInterna = oFilaInterna.insertCell(-1);
                    oTexto = document.createTextNode(oInfo[j][k][l]);
                    oCeldaInterna.appendChild(oTexto);
                    oCelda.appendChild(oFilaInterna);
                }
            }else{
                oTexto = document.createTextNode(oInfo[j][k]);
                oCelda.appendChild(oTexto);
            }
        }
        oFila.appendChild(oCelda);
    }

    divTabla.appendChild(oTabla);
    //borramos antes lo anterior
    while (posicion.hasChildNodes()) {
        posicion.removeChild(posicion.lastChild);
    }
    posicion.appendChild(divContainer);

    // return oTabla;
}



