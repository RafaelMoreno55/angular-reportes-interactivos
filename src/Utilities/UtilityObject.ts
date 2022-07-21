export function metodoArbolDecision(fraude: string, competencias: string, competenciasApego: string, competenciasAutocalificacion: string, competenciasVeracidad: string, riesgos: string, riesgosPersonales: string, riesgosEntorno: string, referencias: string): string[]{
    let textoDescripcion = "";
    let textoFraude = "";
    let textoReferencias = "";
    let textoCompetencias = "En cuanto a las competencias. ";
    let textoRiesgos = "Respecto a los factores de riesgo. ";

    let fraud = -1;
    let referenc = -1;
    let comp = -1;
    let compApeg = -1;
    let compAuto = -1;
    let compVera = -1;
    let ries = -1;
    let riesPers = -1;
    let riesEnto = -1;

    let escalaAnterior = -1;
    let arrayFactors = [];
    let objectFactors;
    
    if (fraude === 'bajo') {
        fraud = 4;
        textoFraude = getFraudeResultadoBajo();
    }
    if (fraude === 'medioBajo') {
        fraud = 3;
        textoFraude = getFraudeResultadoMedioBajo();
    }
    if (fraude === 'medioAlto') {
        fraud = 2;
        textoFraude = getFraudeResultadoMedioAlto();
    }
    if (fraude === 'alto') {
        fraud = 1;
        textoFraude = getFraudeResultadoAlto();
    }

    if (referencias === 'alto') {
        referenc = 4;
        textoReferencias = getReferenciasResultadoAlto();
    }
    if (referencias === 'medioAlto') {
        referenc = 3;
        textoReferencias = getReferenciasResultadoMedioAlto();
    }
    if (referencias === 'medioBajo') {
        referenc = 2;
        textoReferencias = getReferenciasResultadoMedioBajo();
    }
    if (referencias === 'bajo') {
        referenc = 1;
        textoReferencias = getReferenciasResultadoBajo();
    }

    if (competenciasApego === 'alto') {
        compApeg = 4;
        textoCompetencias = textoCompetencias + getCompetenciasApegoResultadoAlto();
    } 
    if (competenciasApego === 'medioAlto') {
        compApeg = 3;
        textoCompetencias = textoCompetencias + getCompetenciasApegoResultadoMedioAlto();
    } 
    if (competenciasApego === 'medioBajo') {
        compApeg = 2;
        textoCompetencias = textoCompetencias + getCompetenciasApegoResultadoMedioBajo();
    }
    if (competenciasApego === 'bajo') {
        compApeg = 1;
        textoCompetencias = textoCompetencias + getCompetenciasApegoResultadoBajo();
    } 

    if (competenciasAutocalificacion === 'alto') {
        compAuto = 4;
        if (compApeg == 4) {
            textoCompetencias = textoCompetencias + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto();
        } else {
            textoCompetencias = textoCompetencias + " Sin embargo. " + getCompetenciasAutocalificacionResultadoAlto();
        }
    }
    if (competenciasAutocalificacion === 'medioAlto') {
        compAuto = 3;
        textoCompetencias = textoCompetencias + " Sin embargo. " + getCompetenciasAutocalificacionResultadoMedioAlto();
    }
    if (competenciasAutocalificacion === 'medioBajo') {
        compAuto = 2;
        textoCompetencias = textoCompetencias + " Sin embargo. " + getCompetenciasAutocalificacionResultadoMedioBajo();
    }
    if (competenciasAutocalificacion === 'bajo') {
        compAuto = 1;
        textoCompetencias = textoCompetencias + " Sin embargo. " + getCompetenciasAutocalificacionResultadoBajo();
    }
    
    if (competenciasVeracidad === 'alto') {
        compVera = 4;
        if (compAuto == 4) {
            textoCompetencias = textoCompetencias + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto();
        } else {
            textoCompetencias = textoCompetencias + " Sin embargo. " + getCompetenciasVeracidadResultadoAlto();            
        }
    }
    if (competenciasVeracidad === 'medioAlto') {
        compVera = 3;
        textoCompetencias = textoCompetencias + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto();
    }
    if (competenciasVeracidad === 'medioBajo') {
        compVera = 2;
        textoCompetencias = textoCompetencias + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioBajo();
    }
    if (competenciasVeracidad === 'bajo') {
        compVera = 1;
        textoCompetencias = textoCompetencias + " Sin embargo. " + getCompetenciasVeracidadResultadoBajo();
    }

    if (riesgosPersonales === 'alto') {
        riesPers = 4;
        textoRiesgos = textoRiesgos + getRiesgosPersonalesResultadoAlto();
    }
    if (riesgosPersonales === 'medioAlto') {
        riesPers = 3;
        textoRiesgos = textoRiesgos + getRiesgosPersonalesResultadoMedioAlto();
    }
    if (riesgosPersonales === 'medioBajo') {
        riesPers = 2;
        textoRiesgos = textoRiesgos + getRiesgosPersonalesResultadoMedioBajo();
    }
    if (riesgosPersonales === 'bajo') {
        riesPers = 1;
        textoRiesgos = textoRiesgos + getRiesgosPersonalesResultadoBajo();
    }

    if (riesgosEntorno === 'alto') {
        riesEnto = 4;
        if (riesPers == 4) {
            textoRiesgos = textoRiesgos + " Así mismo. " + getRiesgosEntornoResultadoAlto();
        } else {
            textoRiesgos = textoRiesgos + " Sin embargo. "  + getRiesgosEntornoResultadoAlto();
        }
    }
    if (riesgosEntorno === 'medioAlto') {
        riesEnto = 3;
        textoRiesgos = textoRiesgos + " Sin embargo. "  + getRiesgosEntornoResultadoMedioAlto();
    }
    if (riesgosEntorno === 'medioBajo') {
        riesEnto = 2;
        textoRiesgos = textoRiesgos + " Sin embargo. "  + getRiesgosEntornoResultadoMedioBajo();
    }
    if (riesgosEntorno === 'bajo') {
        riesEnto = 1;
        textoRiesgos = textoRiesgos + " Sin embargo. "  + getRiesgosEntornoResultadoBajo();
    }

    if (competencias === 'alto') {
        comp = 4;
    }
    if (competencias === 'medioAlto') {
        comp = 3;
    }
    if (competencias === 'medioBajo') {
        comp = 2;
    }
    if (competencias === 'bajo') {
        comp = 1;
    }

    if (riesgos === 'alto') {
        ries = 4;
    }
    if (riesgos === 'medioAlto') {
        ries = 3;
    }
    if (riesgos === 'medioBajo') {
        ries = 2;
    }
    if (riesgos === 'bajo') {
        ries = 1;
    }
    
    objectFactors = new Object();
    objectFactors['factor'] = "fraude";
    objectFactors['escala'] = fraud;
    objectFactors['texto'] = textoFraude;
    arrayFactors.push(objectFactors);
    objectFactors = new Object();
    objectFactors['factor'] = "referencias";
    objectFactors['escala'] = referenc;
    objectFactors['texto'] = textoReferencias;
    arrayFactors.push(objectFactors);
    objectFactors = new Object();
    objectFactors['factor'] = "competencias";
    objectFactors['escala'] = comp;
    objectFactors['texto'] = textoCompetencias;
    arrayFactors.push(objectFactors);
    objectFactors = new Object();
    objectFactors['factor'] = "riesgos";
    objectFactors['escala'] = ries;
    objectFactors['texto'] = textoRiesgos;
    arrayFactors.push(objectFactors);
    
    SortAsc(arrayFactors, 'escala');

    arrayFactors.forEach((element, index) => {
        if (index == 0) {
            textoDescripcion = element['texto'];
        } else {
            if (element['factor'] == 'competencias') {
                textoDescripcion = textoDescripcion + ' ' + textoCompetencias;
            } else {
                if (element['factor'] == 'riesgos') {
                    textoDescripcion = textoDescripcion + ' ' + textoRiesgos;
                } else {
                    if (element['factor'] == 'fraude') {
                        if (escalaAnterior == 4 && element['escala'] == 4) {
                            textoDescripcion = textoDescripcion + " Así mismo. " + textoFraude;
                        } else {
                            textoDescripcion = textoDescripcion + " Sin embargo. " + textoFraude;
                        }
                    } else {
                        if (element['factor'] == 'referencias') {
                            if (escalaAnterior == 4 && element['escala'] == 4) {
                                textoDescripcion = textoDescripcion + " Así mismo. " + textoReferencias;
                            } else {
                                textoDescripcion = textoDescripcion + " Sin embargo. " + textoReferencias;
                            }
                        }
                    }
                }
            }
        }
        escalaAnterior = element['escala'];
    });
    if (textoDescripcion === " Sin embargo.  En cuanto a las competencias.  Respecto a los factores de riesgo. ") {
        textoCompetencias = "";
        textoRiesgos = "";
        textoDescripcion = "";
    } 
    return [textoFraude, textoReferencias, textoCompetencias, textoRiesgos, textoDescripcion];
}

function SortAsc(rows, key): void {
    rows.sort(function (a, b) {
       return b[key] - a[key];
    });
}

export function getTextoVariablesFraude(variableNamesFraud: string[], variableName: string, variableScore: string): string{
    let texto = "";
    if (variableNamesFraud[0] === variableName) {
        if (variableScore === "bajo") {
            texto = getRiesgoFraudeProbabilidadResultadoBajo();
        }
        if (variableScore === "medioBajo") {
            texto = getRiesgoFraudeProbabilidadResultadoMedioBajo();
        }
        if (variableScore === "medioAlto") {
            texto = getRiesgoFraudeProbabilidadResultadoMedioAlto();
        }
        if (variableScore === "alto") {
            texto = getRiesgoFraudeProbabilidadResultadoAlto();
        }
    }
    if (variableNamesFraud[1] === variableName) {
        if (variableScore === "bajo") {
            texto = getRiesgoFraudeCuantitativaResultadoBajo();
        }
        if (variableScore === "medioBajo") {
            texto = getRiesgoFraudeCuantitativaResultadoMedioBajo();
        }
        if (variableScore === "medioAlto") {
            texto = getRiesgoFraudeCuantitativaResultadoMedioAlto();
        }
        if (variableScore === "alto") {
            texto = getRiesgoFraudeCuantitativaResultadoAlto();
        }
    }
    if (variableNamesFraud[2] === variableName) {
        if (variableScore === "bajo") {
            texto = getRiesgoFraudeSocioeconomicaResultadoBajo();
        }
        if (variableScore === "medioBajo") {
            texto = getRiesgoFraudeSocioeconomicaResultadoMedioBajo();
        }
        if (variableScore === "medioAlto") {
            texto = getRiesgoFraudeSocioeconomicaResultadoMedioAlto();
        }
        if (variableScore === "alto") {
            texto = getRiesgoFraudeSocioeconomicaResultadoAlto();
        }
    }
    return texto;
}

export function getTextoVariablesCompetencias(variableNamesCompetencies: string[], variableName: string, variableScore: string): string{
    let texto = "";
    if (variableNamesCompetencies[0] === variableName) {
        if (variableScore === "alto") {
            texto = getCompetenciasNegociacionResultadoAlto();
        }
        if (variableScore === "medioAlto") {
            texto = getCompetenciasNegociacionResultadoMedioAlto();
        }
        if (variableScore === "medioBajo") {
            texto = getCompetenciasNegociacionResultadoMedioBajo();
        }
        if (variableScore === "bajo") {
            texto = getCompetenciasNegociacionResultadoBajo();
        }
    }
    if (variableNamesCompetencies[1] === variableName) {
        if (variableScore === "alto") {
            texto = getCompetenciasOrientacionResultadosResultadoAlto();
        }
        if (variableScore === "medioAlto") {
            texto = getCompetenciasOrientacionResultadosResultadoMedioAlto();
        }
        if (variableScore === "medioBajo") {
            texto = getCompetenciasOrientacionResultadosResultadoMedioBajo();
        }
        if (variableScore === "bajo") {
            texto = getCompetenciasOrientacionResultadosResultadoBajo();
        }
    }
    if (variableNamesCompetencies[2] === variableName) {
        if (variableScore === "alto") {
            texto = getCompetenciasHabilidadComunicacionResultadoAlto();
        }
        if (variableScore === "medioAlto") {
            texto = getCompetenciasHabilidadComunicacionResultadoMedioAlto();
        }
        if (variableScore === "medioBajo") {
            texto = getCompetenciasHabilidadComunicacionResultadoMedioBajo();
        }
        if (variableScore === "bajo") {
            texto = getCompetenciasHabilidadComunicacionResultadoBajo();
        }
    }
    if (variableNamesCompetencies[3] === variableName) {
        if (variableScore === "alto") {
            texto = getCompetenciasOrientacionServicioResultadoAlto();
        }
        if (variableScore === "medioAlto") {
            texto = getCompetenciasOrientacionServicioResultadoMedioAlto();
        }
        if (variableScore === "medioBajo") {
            texto = getCompetenciasOrientacionServicioResultadoMedioBajo();
        }
        if (variableScore === "bajo") {
            texto = getCompetenciasOrientacionServicioResultadoBajo();
        }
    }
    if (variableNamesCompetencies[4] === variableName) {
        if (variableScore === "alto") {
            texto = getCompetenciasLiderazgoInfluenciaResultadoAlto();
        }
        if (variableScore === "medioAlto") {
            texto = getCompetenciasLiderazgoInfluenciaResultadoMedioAlto();
        }
        if (variableScore === "medioBajo") {
            texto = getCompetenciasLiderazgoInfluenciaResultadoMedioBajo();
        }
        if (variableScore === "bajo") {
            texto = getCompetenciasLiderazgoInfluenciaResultadoBajo();
        }
    }
    if (variableNamesCompetencies[5] === variableName) {
        if (variableScore === "alto") {
            texto = getCompetenciasAnaliticoResultadoAlto();
        }
        if (variableScore === "medioAlto") {
            texto = getCompetenciasAnaliticoResultadoMedioAlto();
        }
        if (variableScore === "medioBajo") {
            texto = getCompetenciasAnaliticoResultadoMedioBajo();
        }
        if (variableScore === "bajo") {
            texto = getCompetenciasAnaliticoResultadoBajo();
        }
    }
    if (variableNamesCompetencies[6] === variableName) {
        if (variableScore === "alto") {
            texto = getCompetenciasPlaneacionOrganizacionResultadoAlto();
        }
        if (variableScore === "medioAlto") {
            texto = getCompetenciasPlaneacionOrganizacionResultadoMedioAlto();
        }
        if (variableScore === "medioBajo") {
            texto = getCompetenciasPlaneacionOrganizacionResultadoMedioBajo();
        }
        if (variableScore === "bajo") {
            texto = getCompetenciasPlaneacionOrganizacionResultadoBajo();
        }
    }
    if (variableNamesCompetencies[7] === variableName) {
        if (variableScore === "alto") {
            texto = getCompetenciasAprendizajePracticoResultadoAlto();
        }
        if (variableScore === "medioAlto") {
            texto = getCompetenciasAprendizajePracticoResultadoMedioAlto();
        }
        if (variableScore === "medioBajo") {
            texto = getCompetenciasAprendizajePracticoResultadoMedioBajo();
        }
        if (variableScore === "bajo") {
            texto = getCompetenciasAprendizajePracticoResultadoBajo();
        }
    }
    if (variableNamesCompetencies[8] === variableName) {
        if (variableScore === "alto") {
            texto = getCompetenciasToleranciaFrustracionResultadoAlto();
        }
        if (variableScore === "medioAlto") {
            texto = getCompetenciasToleranciaFrustracionResultadoMedioAlto();
        }
        if (variableScore === "medioBajo") {
            texto = getCompetenciasToleranciaFrustracionResultadoMedioBajo();
        }
        if (variableScore === "bajo") {
            texto = getCompetenciasToleranciaFrustracionResultadoBajo();
        }
    }
    if (variableNamesCompetencies[9] === variableName) {
        if (variableScore === "alto") {
            texto = getCompetenciasSolucionProblemaResultadoAlto();
        }
        if (variableScore === "medioAlto") {
            texto = getCompetenciasSolucionProblemaResultadoMedioAlto();
        }
        if (variableScore === "medioBajo") {
            texto = getCompetenciasSolucionProblemaResultadoMedioBajo();
        }
        if (variableScore === "bajo") {
            texto = getCompetenciasSolucionProblemaResultadoBajo();
        }
    }
    if (variableNamesCompetencies[10] === variableName) {
        if (variableScore === "alto") {
            texto = getCompetenciasTrabajoEquipoResultadoAlto();
        }
        if (variableScore === "medioAlto") {
            texto = getCompetenciasTrabajoEquipoResultadoMedioAlto();
        }
        if (variableScore === "medioBajo") {
            texto = getCompetenciasTrabajoEquipoResultadoMedioBajo();
        }
        if (variableScore === "bajo") {
            texto = getCompetenciasTrabajoEquipoResultadoBajo();
        }
    }
    if (variableNamesCompetencies[11] === variableName) {
        if (variableScore === "alto") {
            texto = getCompetenciasSeguimientoResultadoAlto();
        }
        if (variableScore === "medioAlto") {
            texto = getCompetenciasSeguimientoResultadoMedioAlto();
        }
        if (variableScore === "medioBajo") {
            texto = getCompetenciasSeguimientoResultadoMedioBajo();
        }
        if (variableScore === "bajo") {
            texto = getCompetenciasSeguimientoResultadoBajo();
        }
    }
    if (variableNamesCompetencies[12] === variableName) {
        if (variableScore === "alto") {
            texto = getCompetenciasAtencionDetalleResultadoAlto();
        }
        if (variableScore === "medioAlto") {
            texto = getCompetenciasAtencionDetalleResultadoMedioAlto();
        }
        if (variableScore === "medioBajo") {
            texto = getCompetenciasAtencionDetalleResultadoMedioBajo();
        }
        if (variableScore === "bajo") {
            texto = getCompetenciasAtencionDetalleResultadoBajo();
        }
    }
    if (variableNamesCompetencies[13] === variableName) {
        if (variableScore === "alto") {
            texto = getCompetenciasManejoConflictosResultadoAlto();
        }
        if (variableScore === "medioAlto") {
            texto = getCompetenciasManejoConflictosResultadoMedioAlto();
        }
        if (variableScore === "medioBajo") {
            texto = getCompetenciasManejoConflictosResultadoMedioBajo();
        }
        if (variableScore === "bajo") {
            texto = getCompetenciasManejoConflictosResultadoBajo();
        }
    }
    if (variableNamesCompetencies[14] === variableName) {
        if (variableScore === "alto") {
            texto = getCompetenciasGustoRutinaResultadoAlto();
        }
        if (variableScore === "medioAlto") {
            texto = getCompetenciasGustoRutinaResultadoMedioAlto();
        }
        if (variableScore === "medioBajo") {
            texto = getCompetenciasGustoRutinaResultadoMedioBajo();
        }
        if (variableScore === "bajo") {
            texto = getCompetenciasGustoRutinaResultadoBajo();
        }
    }
    if (variableNamesCompetencies[15] === variableName) {
        if (variableScore === "alto") {
            texto = getCompetenciasInteresSatisfaccionResultadoAlto();
        }
        if (variableScore === "medioAlto") {
            texto = getCompetenciasInteresSatisfaccionResultadoMedioAlto();
        }
        if (variableScore === "medioBajo") {
            texto = getCompetenciasInteresSatisfaccionResultadoMedioBajo();
        }
        if (variableScore === "bajo") {
            texto = getCompetenciasInteresSatisfaccionResultadoBajo();
        }
    }
    if (variableNamesCompetencies[16] === variableName) {
        if (variableScore === "alto") {
            texto = getCompetenciasPersuacionVentasResultadoAlto();
        }
        if (variableScore === "medioAlto") {
            texto = getCompetenciasPersuacionVentasResultadoMedioAlto();
        }
        if (variableScore === "medioBajo") {
            texto = getCompetenciasPersuacionVentasResultadoMedioBajo();
        }
        if (variableScore === "bajo") {
            texto = getCompetenciasPersuacionVentasResultadoBajo();
        }
    }
    if (variableNamesCompetencies[17] === variableName) {
        if (variableScore === "alto") {
            texto = getCompetenciasConcienciaSeguridadResultadoAlto();
        }
        if (variableScore === "medioAlto") {
            texto = getCompetenciasConcienciaSeguridadResultadoMedioAlto();
        }
        if (variableScore === "medioBajo") {
            texto = getCompetenciasConcienciaSeguridadResultadoMedioBajo();
        }
        if (variableScore === "bajo") {
            texto = getCompetenciasConcienciaSeguridadResultadoBajo();
        }
    }
    return texto;
}

export function getTextoVariablesRiesgosPersonal(variableNamesRisks: string[], variableName: string, variableScore: string): string{
    let texto = "";
    if (variableNamesRisks[0] === variableName) {
        if (variableScore === "bajo") {
            texto = getRiesgosPersonalesFugaInformacionResultadoBajo();
        }
        if (variableScore === "medioBajo") {
            texto = getRiesgosPersonalesFugaInformacionResultadoMedioBajo();
        }
        if (variableScore === "medioAlto") {
            texto = getRiesgosPersonalesFugaInformacionResultadoMedioAlto();
        }
        if (variableScore === "alto") {
            texto = getRiesgosPersonalesFugaInformacionResultadoAlto();
        }
    }
    if (variableNamesRisks[1] === variableName) {
        if (variableScore === "bajo") {
            texto = getRiesgosPersonalesRoboResultadoBajo();
        }
        if (variableScore === "medioBajo") {
            texto = getRiesgosPersonalesRoboResultadoMedioBajo();
        }
        if (variableScore === "medioAlto") {
            texto = getRiesgosPersonalesRoboResultadoMedioAlto();
        }
        if (variableScore === "alto") {
            texto = getRiesgosPersonalesRoboResultadoAlto();
        }
    }
    if (variableNamesRisks[2] === variableName) {
        if (variableScore === "bajo") {
            texto = getRiesgosPersonalesCometerDelitosResultadoBajo();
        }
        if (variableScore === "medioBajo") {
            texto = getRiesgosPersonalesCometerDelitosResultadoMedioBajo();
        }
        if (variableScore === "medioAlto") {
            texto = getRiesgosPersonalesCometerDelitosResultadoMedioAlto();
        }
        if (variableScore === "alto") {
            texto = getRiesgosPersonalesCometerDelitosResultadoAlto();
        }
    }
    if (variableNamesRisks[3] === variableName) {
        if (variableScore === "bajo") {
            texto = getRiesgosPersonalesSobornoResultadoBajo();
        }
        if (variableScore === "medioBajo") {
            texto = getRiesgosPersonalesSobornoResultadoMedioBajo();
        }
        if (variableScore === "medioAlto") {
            texto = getRiesgosPersonalesSobornoResultadoMedioAlto();
        }
        if (variableScore === "alto") {
            texto = getRiesgosPersonalesSobornoResultadoAlto();
        }
    }
    if (variableNamesRisks[4] === variableName) {
        if (variableScore === "bajo") {
            texto = getRiesgosPersonalesInformacionFalsaResultadoBajo();
        }
        if (variableScore === "medioBajo") {
            texto = getRiesgosPersonalesInformacionFalsaResultadoMedioBajo();
        }
        if (variableScore === "medioAlto") {
            texto = getRiesgosPersonalesInformacionFalsaResultadoMedioAlto();
        }
        if (variableScore === "alto") {
            texto = getRiesgosPersonalesInformacionFalsaResultadoAlto();
        }
    }
    if (variableNamesRisks[5] === variableName) {
        if (variableScore === "bajo") {
            texto = getRiesgosPersonalesDrogasResultadoBajo();
        }
        if (variableScore === "medioBajo") {
            texto = getRiesgosPersonalesDrogasResultadoMedioBajo();
        }
        if (variableScore === "medioAlto") {
            texto = getRiesgosPersonalesDrogasResultadoMedioAlto();
        }
        if (variableScore === "alto") {
            texto = getRiesgosPersonalesDrogasResultadoAlto();
        }
    }
    if (variableNamesRisks[6] === variableName) {
        if (variableScore === "bajo") {
            texto = getRiesgosPersonalesAlcoholResultadoBajo();
        }
        if (variableScore === "medioBajo") {
            texto = getRiesgosPersonalesAlcoholResultadoMedioBajo();
        }
        if (variableScore === "medioAlto") {
            texto = getRiesgosPersonalesAlcoholResultadoMedioAlto();
        }
        if (variableScore === "alto") {
            texto = getRiesgosPersonalesAlcoholResultadoAlto();
        }
    }
    if (variableNamesRisks[7] === variableName) {
        if (variableScore === "bajo") {
            texto = getRiesgosPersonalesApuestasResultadoBajo();
        }
        if (variableScore === "medioBajo") {
            texto = getRiesgosPersonalesApuestasResultadoMedioBajo();
        }
        if (variableScore === "medioAlto") {
            texto = getRiesgosPersonalesApuestasResultadoMedioAlto();
        }
        if (variableScore === "alto") {
            texto = getRiesgosPersonalesApuestasResultadoAlto();
        }
    }
    if (variableNamesRisks[8] === variableName) {
        if (variableScore === "bajo") {
            texto = getRiesgosPersonalesGrupoDelictivoResultadoBajo();
        }
        if (variableScore === "medioBajo") {
            texto = getRiesgosPersonalesGrupoDelictivoResultadoMedioBajo();
        }
        if (variableScore === "medioAlto") {
            texto = getRiesgosPersonalesGrupoDelictivoResultadoMedioAlto();
        }
        if (variableScore === "alto") {
            texto = getRiesgosPersonalesGrupoDelictivoResultadoAlto();
        }
    }
    if (variableNamesRisks[9] === variableName) {
        if (variableScore === "bajo") {
            texto = getRiesgosPersonalesExtorsionResultadoBajo();
        }
        if (variableScore === "medioBajo") {
            texto = getRiesgosPersonalesExtorsionResultadoMedioBajo();
        }
        if (variableScore === "medioAlto") {
            texto = getRiesgosPersonalesExtorsionResultadoMedioAlto();
        }
        if (variableScore === "alto") {
            texto = getRiesgosPersonalesExtorsionResultadoAlto();
        }
    }
    if (variableNamesRisks[10] === variableName) {
        if (variableScore === "bajo") {
            texto = getRiesgosPersonalesAcosoLaboralResultadoBajo();
        }
        if (variableScore === "medioBajo") {
            texto = getRiesgosPersonalesAcosoLaboralResultadoMedioBajo();
        }
        if (variableScore === "medioAlto") {
            texto = getRiesgosPersonalesAcosoLaboralResultadoMedioAlto();
        }
        if (variableScore === "alto") {
            texto = getRiesgosPersonalesAcosoLaboralResultadoAlto();
        }
    }
    if (variableNamesRisks[11] === variableName) {
        if (variableScore === "bajo") {
            texto = getRiesgosPersonalesHostigamientoSexualResultadoBajo();
        }
        if (variableScore === "medioBajo") {
            texto = getRiesgosPersonalesHostigamientoSexualResultadoMedioBajo();
        }
        if (variableScore === "medioAlto") {
            texto = getRiesgosPersonalesHostigamientoSexualResultadoMedioAlto();
        }
        if (variableScore === "alto") {
            texto = getRiesgosPersonalesHostigamientoSexualResultadoAlto();
        }
    }
    return texto;
}
export function getTextoVariablesRiesgosEntorno(variableNamesRisks: string[], variableName: string, variableScore: string): string{
    let texto = "";
    if (variableNamesRisks[0] === variableName) {
        if (variableScore === "bajo") {
            texto = getRiesgosEntornoFugaInformacionResultadoBajo();
        }
        if (variableScore === "medioBajo") {
            texto = getRiesgosEntornoFugaInformacionResultadoMedioBajo();
        }
        if (variableScore === "medioAlto") {
            texto = getRiesgosEntornoFugaInformacionResultadoMedioAlto();
        }
        if (variableScore === "alto") {
            texto = getRiesgosEntornoFugaInformacionResultadoAlto();
        }
    }
    if (variableNamesRisks[1] === variableName) {
        if (variableScore === "bajo") {
            texto = getRiesgosEntornoRoboResultadoBajo();
        }
        if (variableScore === "medioBajo") {
            texto = getRiesgosEntornoRoboResultadoMedioBajo();
        }
        if (variableScore === "medioAlto") {
            texto = getRiesgosEntornoRoboResultadoMedioAlto();
        }
        if (variableScore === "alto") {
            texto = getRiesgosEntornoRoboResultadoAlto();
        }
    }
    if (variableNamesRisks[2] === variableName) {
        if (variableScore === "bajo") {
            texto = getRiesgosEntornoCometerDelitosResultadoBajo();
        }
        if (variableScore === "medioBajo") {
            texto = getRiesgosEntornoCometerDelitosResultadoMedioBajo();
        }
        if (variableScore === "medioAlto") {
            texto = getRiesgosEntornoCometerDelitosResultadoMedioAlto();
        }
        if (variableScore === "alto") {
            texto = getRiesgosEntornoCometerDelitosResultadoAlto();
        }
    }
    if (variableNamesRisks[3] === variableName) {
        if (variableScore === "bajo") {
            texto = getRiesgosEntornoSobornoResultadoBajo();
        }
        if (variableScore === "medioBajo") {
            texto = getRiesgosEntornoSobornoResultadoMedioBajo();
        }
        if (variableScore === "medioAlto") {
            texto = getRiesgosEntornoSobornoResultadoMedioAlto();
        }
        if (variableScore === "alto") {
            texto = getRiesgosEntornoSobornoResultadoAlto();
        }
    }
    if (variableNamesRisks[4] === variableName) {
        if (variableScore === "bajo") {
            texto = getRiesgosEntornoInformacionFalsaResultadoBajo();
        }
        if (variableScore === "medioBajo") {
            texto = getRiesgosEntornoInformacionFalsaResultadoMedioBajo();
        }
        if (variableScore === "medioAlto") {
            texto = getRiesgosEntornoInformacionFalsaResultadoMedioAlto();
        }
        if (variableScore === "alto") {
            texto = getRiesgosEntornoInformacionFalsaResultadoAlto();
        }
    }
    if (variableNamesRisks[5] === variableName) {
        if (variableScore === "bajo") {
            texto = getRiesgosEntornoDrogasResultadoBajo();
        }
        if (variableScore === "medioBajo") {
            texto = getRiesgosEntornoDrogasResultadoMedioBajo();
        }
        if (variableScore === "medioAlto") {
            texto = getRiesgosEntornoDrogasResultadoMedioAlto();
        }
        if (variableScore === "alto") {
            texto = getRiesgosEntornoDrogasResultadoAlto();
        }
    }
    if (variableNamesRisks[6] === variableName) {
        if (variableScore === "bajo") {
            texto = getRiesgosEntornoAlcoholResultadoBajo();
        }
        if (variableScore === "medioBajo") {
            texto = getRiesgosEntornoAlcoholResultadoMedioBajo();
        }
        if (variableScore === "medioAlto") {
            texto = getRiesgosEntornoAlcoholResultadoMedioAlto();
        }
        if (variableScore === "alto") {
            texto = getRiesgosEntornoAlcoholResultadoAlto();
        }
    }
    if (variableNamesRisks[7] === variableName) {
        if (variableScore === "bajo") {
            texto = getRiesgosEntornoApuestasResultadoBajo();
        }
        if (variableScore === "medioBajo") {
            texto = getRiesgosEntornoApuestasResultadoMedioBajo();
        }
        if (variableScore === "medioAlto") {
            texto = getRiesgosEntornoApuestasResultadoMedioAlto();
        }
        if (variableScore === "alto") {
            texto = getRiesgosEntornoApuestasResultadoAlto();
        }
    }
    if (variableNamesRisks[8] === variableName) {
        if (variableScore === "bajo") {
            texto = getRiesgosEntornoGrupoDelictivoResultadoBajo();
        }
        if (variableScore === "medioBajo") {
            texto = getRiesgosEntornoGrupoDelictivoResultadoMedioBajo();
        }
        if (variableScore === "medioAlto") {
            texto = getRiesgosEntornoGrupoDelictivoResultadoMedioAlto();
        }
        if (variableScore === "alto") {
            texto = getRiesgosEntornoGrupoDelictivoResultadoAlto();
        }
    }
    if (variableNamesRisks[9] === variableName) {
        if (variableScore === "bajo") {
            texto = getRiesgosEntornoExtorsionResultadoBajo();
        }
        if (variableScore === "medioBajo") {
            texto = getRiesgosEntornoExtorsionResultadoMedioBajo();
        }
        if (variableScore === "medioAlto") {
            texto = getRiesgosEntornoExtorsionResultadoMedioAlto();
        }
        if (variableScore === "alto") {
            texto = getRiesgosEntornoExtorsionResultadoAlto();
        }
    }
    return texto;
}

/**
 * Recursos Humanos
 * Grupo: FRAUDE
 */

export function getFraudeDefinicion(): string{
    let result = "Grupo conformado por tres factores: La posibilidad de que la persona que contesta no sea el candidato o colaborador seleccionado para la entrevista, información cuantitativa y veracidad de información socioeconómica.";
    return result;
}
export function getFraudeResultadoBajo(): string{
    let result = "La persona que ha respondido la entrevista es quien dice ser, presenta además una consistencia en la información proporcionada referente a sus ingresos y aportaciones familiares, capacidad de pago, información de vivienda y nivel socioeconómico.";
    return result;
}
export function getFraudeResultadoMedioBajo(): string{
    let result = "La persona presenta información distorsionada en lo referente a (poner si quien contesta no es el empleado, nivel socioeconómico o cuantitativa), lo que indica que estos  pueden ser factores que le generen estrés al entrevistado, llevandolo a proporcionar información no del todo verídica.";
    return result;
}
export function getFraudeResultadoMedioAlto(): string{
    let result = "Los indicadores encontrados en los factores ( persona no es el empleado, nivel socioeconómico o cuantitativa) indican que la persona distorsionó información por lo que se recomienda hacer una revisión profunda de estos.";
    return result;
}
export function getFraudeResultadoAlto(): string{
    let result = "La persona presenta un riesgo importante de fraude referente a (no es el empleado, nivel socioeconómico o cuantitativa), lo que indica que ha omitido o mentido de forma importante en la información proporcionada.";
    return result;
}

/**
 * Recursos Humanos
 * Grupo: RIESGO FRAUDE
 */

export function getRiesgoFraudeProbabilidadDefinicion(): string{
    let result = "Este factor evalúa que la persona que contesta la entrevista es efectivamente quien dice ser y no fue apoyado o asesorado durante la entrevista por un tercero.";
    return result;
}
export function getRiesgoFraudeProbabilidadResultadoBajo(): string{
    let result = "La persona que contesta la entrevista es el evaluado seleccionado y no recibió apoyo de ningún tipo por un tercero durante la entrevista.";
    return result;
}
export function getRiesgoFraudeProbabilidadResultadoMedioBajo(): string{
    let result = "Existen elementos que indican que la persona que contesta la entrevista no es quien dice ser, hubo personas agenas al entrevistado en el lugar de la prueba o recibió algún tipo de ayuda por parte de terceros durante la entrevista. Se recomienda revisar información multimedia.";
    return result;
}
export function getRiesgoFraudeProbabilidadResultadoMedioAlto(): string{
    let result = "Los indicadores encontrados apuntalan a que la persona pudo haber estado acompañada durante la entrevista, hubo voces distintas a la del evaluado por lo que se recomienda hacer una revisión.";
    return result;
}
export function getRiesgoFraudeProbabilidadResultadoAlto(): string{
    let result = "Los indicadores registrados apuntalan a que la persona que ha realizado la entrevista no es quien dice ser o fue apoyado por un tercero durante la prueba dando por RESULTADO ALTO - MAYOR A 8 un alto riesgo de fraude durante la entrevista.";
    return result;
}

export function getRiesgoFraudeCuantitativaDefinicion(): string{
    let result = "Factor conformado por la evaluación del Sueldo recibido, gasto familiar y capacidad mensual de pago para determinar la situación económica, compara además el ingreso recibido y ofertado con la necesidad familiar real del evaluado al tiempo que es empatada con la reacción emocional para conocer el nivel de riesgo y veracidad de la información proporcionada.";
    return result;
}
export function getRiesgoFraudeCuantitativaResultadoBajo(): string{
    let result = "La persona evaluada presenta una situación de equilibrio entre el ingreso recibido y su necesidad real de gasto familiar, asimismo, no se registra reacción emocional importante en sus respuestas que puedan apuntalar a que ha proporcionado a información no veraz.";
    return result;
}
export function getRiesgoFraudeCuantitativaResultadoMedioBajo(): string{
    let result = "La información proporcionada empatada con la reacción emocional indican que la persona puede tener un ligero desequilibrio entre el ingreso recibido y su necesidad real de gasto, registrandose una reacción emocional ligeral que indica una alteración de la información proporcionada.";
    return result;
}
export function getRiesgoFraudeCuantitativaResultadoMedioAlto(): string{
    let result = "La información proporcionada no concuerda con la reacción emocional registrada, lo que indica que la persona evaluada puede encontrarse en una situación de desequilibrio entre el ingreso recibido y su necesidad real de gasto, llevándolo a proporcionar información distorsionada.";
    return result;
}
export function getRiesgoFraudeCuantitativaResultadoAlto(): string{
    let result = "La información proporcionada no concuerda con la reacción emocional registrada, lo que indica que la persona evaluada puede encontrarse en una situación de desequilibrio importante entre el ingreso recibido y su necesidad real de gasto, llevándolo a proporcionar información distorsionada. Un alto riesgo en este factor puede generar una predisposición a llevar a cabo malas prácticas para cubrir ciertas necesidades económicas.";
    return result;
}

export function getRiesgoFraudeSocioeconomicaDefinicion(): string{
    let result = "Validación de datos personales del entrevistado, como, dónde vive, el gasto familiar, que bienes tiene, cuánto tiempo lleva viviendo ahí así como validar sus documentos. Gracias a esto se puede evaluar la certeza de la información proporcionada con el análisis generado por el cruce de la información obtenida en la entrevista.";
    return result;
}
export function getRiesgoFraudeSocioeconomicaResultadoBajo(): string{
    let result = "Los datos personales proporcionados por la persona entrevistada respecto a su contexto, lugar de vivienda, tiempo de recidencia, gasto familiar, bienes, etc. fueron proporcionados de forma veraz y sin reacción emocional importante que pueda indicar un riesgo en esta área.";
    return result;
}
export function getRiesgoFraudeSocioeconomicaResultadoMedioBajo(): string{
    let result = "Los datos personales proporcionados por la persona entrevistada respecto a su contexto, lugar de vivienda, tiempo de recidencia, gasto familiar, bienes, etc. fueron proporcionados de forma distorsionada, se detecta una reacción emocional media que puede indicar que la persona no ha respondido de forma veraz.";
    return result;
}
export function getRiesgoFraudeSocioeconomicaResultadoMedioAlto(): string{
    let result = "Los datos personales proporcionados por la persona entrevistada respecto a su contexto, lugar de vivienda, tiempo de recidencia, gasto familiar, bienes, etc. fueron proporcionados distorsionadamente en un grado importante, se detecta una reacción emocional que puede indicar que la persona no ha respondido de forma veraz lo referente a su situación socioeconómica.";
    return result;
}
export function getRiesgoFraudeSocioeconomicaResultadoAlto(): string{
    let result = "Los datos personales proporcionados por la persona entrevistada respecto a su contexto, lugar de vivienda, tiempo de recidencia, gasto familiar, bienes, etc. presentan importantes indicadores de alerta, detectádose una reacción emocional y fisiológica importante, lo cual indica que la persona ha mentido u omitido información en esta área.";
    return result;
}

/**
 * Recursos Humanos
 * Grupo: COMPETENCIAS
 */

export function getCompetenciasApegoDefinicion(): string{
    let result = "Evalúa el nivel de apego que la persona evaluada tiene en las competencias necesarias para desempeñarse dentro de su lugar de trabajo. En este caso se consideraron para evaluación: (insertar aquí las competencias evaluadas).";
    return result;
}
export function getCompetenciasApegoResultadoAlto(): string{
    let result = "La persona evaluada muestra en general un resultado de alto apego a las competencias: (poner aquí las evaluadas) lo que indica que cuenta con las habilidades necesarias para desempeñarse en su lugar de trabajo bajo los estándares deseados. Facilitando el correcto funcionamiento de la organización.";
    return result;
}
export function getCompetenciasApegoResultadoMedioAlto(): string{
    let result = "Se presentan resultados altos en las competencias: (mencionarlas) y bajas / medias en las competencias (mencionarlas) lo cual indica que la persona tiene áreas de oportunidad para desarrollar ciertas habilidades necesarias para ejecutar sus tareas laborales del día a día.";
    return result;
}
export function getCompetenciasApegoResultadoMedioBajo(): string{
    let result = "Se observa una tendencia generalizada a niveles medio bajos de apego, dejando areas de oportunidad en apego a competencias que pueden ser desarrolladas bajo las estrategias de capacitación y desarrollo humano adecuadas.";
    return result;
}
export function getCompetenciasApegoResultadoBajo(): string{
    let result = "La persona evaluada presenta en general un bajo apego en las competencias evaluadas (mencionarlas) lo cual es un indicador de falta de desarrollo de habilidades específicas para el adecuado desempeño de sus actividades cotidianas, pudiendo generar un impacto negativo en el funcionamiento de su lugar de trabajo.";
    return result;
}

export function getCompetenciasAutocalificacionDefinicion(): string{
    let result = "Este factor mide la evaluación que la persona se atribuye sí misma en las competencias (insertarlas) en su trabajo actual o último trabajo.";
    return result;
}
export function getCompetenciasAutocalificacionResultadoAlto(): string{
    let result = "La persona considera que en general su calificación en (mencionar las competencias) ha sido excelente o buena dentro de su último trabajo o actual.";
    return result;
}
export function getCompetenciasAutocalificacionResultadoMedioAlto(): string{
    let result = "Opción a) opciones variadas: La persona considera que ha tenido calificaciones variadas en su desempeño dentro de su último trabajo o actual, siendo excelente en (nombrarlas), regular en (nombrarla) y malo en (nombrarlas).";
    return result;
}
export function getCompetenciasAutocalificacionResultadoMedioBajo(): string{
    let result = "En general la persona considera que autocalificación en (nombrarlas) ha sido regular en su último trabajo o actual.";
    return result;
}
export function getCompetenciasAutocalificacionResultadoBajo(): string{
    let result = "La persona considera que en general su calificación en (mencionar las competencias) ha sido malo dentro de su último trabajo o actual.";
    return result;
}

export function getCompetenciasVeracidadDefinicion(): string{
    let result = "Evalúa la veracidad con la que la persona ha respondido la entrevista en lo relativo a la autocalificación otorgada en las competencias (insertarlas) y el apego a las competencias evaluadas (insertarlas) de forma que se otorga un comparativo de la calificación y el apego obtenido versus la veracidad.";
    return result;
}
export function getCompetenciasVeracidadResultadoAlto(): string{
    let result = "En general la persona ha respondido de forma veráz en lo referente a su autocalificación en las competencias (insertarlas) y en apego a las competencias (insertarlas) lo cual indica que la información proporcionada puede ser considerada fidedigna.";
    return result;
}
export function getCompetenciasVeracidadResultadoMedioAlto(): string{
    let result = "Los resultados obtenidos por la persona evaluada, señalan que la información ha sido proporcionada de forma distorsionada en algunas competencias como: (insertarlas), lo cual indica que pudo haber una ligera exageración o minización del verdadero desempeño y apego a las competencias.";
    return result;
}
export function getCompetenciasVeracidadResultadoMedioBajo(): string{
    let result = "Los resultados obtenidos por la persona evaluada, señalan que la información ha sido proporcionada en su mayoría de forma distorsionada en lo relativo a la autocalificación de las competencias (insertarlas), lo cual indica que pudo haber una exageración o minización del verdadero desempeño y apego a las competencias.";
    return result;
}
export function getCompetenciasVeracidadResultadoBajo(): string{
    let result = "En general la persona ha respondido de forma poco veráz en lo referente a su autocalificación en las competencias (insertarlas) y en apego a las competencias (insertarlas) lo cual indica que la información proporcionada no puede ser considerada fidedigna.";
    return result;
}

export function getCompetenciasNegociacionDefinicion(): string{
    let result = "Integra los principales rasgos y tendencias necesarias para llevar a cabo una negociación: dominio de argumentos, fuerza negociadora, sentido de anticipación y visión negociadora.";
    return result;
}
export function getCompetenciasNegociacionResultadoAlto(): string{
    let result = "Negocia de manera estructurada y consigue buenos resultados y acuerdos provechosos. Aunque las negociaciones sean de carácter difícil, presenta una buena actitud y se gana la credibilidad de los otros.";
    return result;
}
export function getCompetenciasNegociacionResultadoMedioAlto(): string{
    let result = "Sigue un proceso de negociación claro, se prepara la negociación, establece una relación inicial y una orientación y consigue un acercamiento de las diferencias, sin embargo, muestra dificultades para mantener su posición y puede tener dificultades en las negociaciones de alta presión.";
    return result;
}
export function getCompetenciasNegociacionResultadoMedioBajo(): string{
    let result = "Se observa una deficiencia habilidades en el apego a un  proceso de negociación claro, a pesar de que puede prepararse para la negociación, establecer una relación inicial, una orientación y consigue un acercamiento de las diferencias. Puede tener dificultades para el seguimiento puntual y ante negociaciones bajo presiones puede ceder de una forma no conveniente.";
    return result;
}
export function getCompetenciasNegociacionResultadoBajo(): string{
    let result = "No considera necesario entender y compartir los puntos de vista cuando son diferentes al suyo, por lo que no se preocupa por convencer al otro y llegar a un buen resultado a través de un acuerdo. No sigue criterios definidos para llegar a acuerdos con clientes. Le resulta difícil cambiar su posición. En el caso de llegar a un acuerdo, éste no suele ser equitativo.";
    return result;
}

export function getCompetenciasOrientacionResultadosDefinicion(): string{
    let result = "Capacidad e interés por alcanzar el cumplimiento de tareas y metas e incluso superarlas considerando el rendimiento, el logro de objetivos mensurables y la innovación.";
    return result;
}
export function getCompetenciasOrientacionResultadosResultadoAlto(): string{
    let result = "Cumple con las metas y tareas establecidas, realiza evaluaciones periódicas de sus metas e indicadores meintras intenta aportar mejoras al proceso y al equipo que lo realiza.";
    return result;
}
export function getCompetenciasOrientacionResultadosResultadoMedioAlto(): string{
    let result = "Procura cumplir con sus metas y tareas, a pesar de esto, no realiza evaluaciones peródicas de sus indicadores por lo que pueden existir atrasos en el cumplimiento.";
    return result;
}
export function getCompetenciasOrientacionResultadosResultadoMedioBajo(): string{
    let result = "Existen áreas de oportunidad importante en la capacidad de cumplir puntualmente con metas y tareas, siendo comunes retrasos en los tiempos estipulados al no ser esto un objetivo primordial.";
    return result;
}
export function getCompetenciasOrientacionResultadosResultadoBajo(): string{
    let result = "No se aprecia interés por la excelencia ni por las metas establecidas por lo que a pesar de que existe la voluntad de hacer bien el trabajo, no es el principal objetivo de su actividad.";
    return result;
}

export function getCompetenciasHabilidadComunicacionDefinicion(): string{
    let result = "Capacidad que tiene la persona para transmitir (emisor) información, recibirla e interpretarla (receptor), en un contexto laboral donde se transmiten mensajes directivos y entre equipo.";
    return result;
}
export function getCompetenciasHabilidadComunicacionResultadoAlto(): string{
    let result = "Logra conectar con la gente, no le cuesta expresar el mensaje que quiere transmitir y es capáz de entender lo que otros le comunican, confirmando haber entendido el mensaje evitando asumir interpretaciones, logra escuchar de manera activa y expresar sus ideas de manera clara.";
    return result;
}
export function getCompetenciasHabilidadComunicacionResultadoMedioAlto(): string{
    let result = "Se preocupa por conocer la situación de aquel con el que interactúa, en ocasiones puede tener dificultades para transmitir o recibir un mensaje de la forma correcta.";
    return result;
}
export function getCompetenciasHabilidadComunicacionResultadoMedioBajo(): string{
    let result = "Sabe estructurar su discurso pero este se presenta de forma difusa y poco clara en el contenido, puede haber dificultad para entender de forma clara lo que le transmite.";
    return result;
}
export function getCompetenciasHabilidadComunicacionResultadoBajo(): string{
    let result = "Manifiesta tener las ideas claras costándole el saber transmitirlas,  se expresa de manera poco estructurada, poco clara y existe dificultad para entender lo que otros intentan comunicarle.";
    return result;
}

export function getCompetenciasOrientacionServicioDefinicion(): string{
    let result = "Habilidad para hacer el trabajo con una mentalidad eficiente en atención al cliente, considerando a éste último como cualquier persona que requiera de su servicio, manteniendo un visión de valoración del cliente y del servicio.";
    return result;
}
export function getCompetenciasOrientacionServicioResultadoAlto(): string{
    let result = "Escucha de manera activa y valora las peticiones de los clientes, estudia las necesidades del cliente y analiza sus expectativas para establecer relaciones de confianza con él y cubrirlas, los asesora para cubrir sus necesidades y demandas con el mínimo coste posible.";
    return result;
}
export function getCompetenciasOrientacionServicioResultadoMedioAlto(): string{
    let result = "Realiza conductas orientadas a percibir y cubrir las necesidades de los clientes de manera satisfactoria y de una manera estructurada, mostrándose amable y servicial aunque no siempre consigue cubrirlas.";
    return result;
}
export function getCompetenciasOrientacionServicioResultadoMedioBajo(): string{
    let result = "No se observan conductas que demuestren interés por conocer las expectativas y demandas de los clientes, puede captar la demanda explícita del cliente, sin embargo, su conducta no es proactiva, es decir, no realiza acciones orientadas a descubrir la base de las necesidades del cliente pero intenta obtener resultados alternativos.";
    return result;
}
export function getCompetenciasOrientacionServicioResultadoBajo(): string{
    let result = "No se observan conductas que demuestren interés por conocer las expectativas y demandas de los clientes, tiene dificultad para entender la dificultad explícita del cliente, no realiza acciones orientadas a descubrir la base de las necesidades del cliente y no hay interés por concretar la satisfacción plena del cliente.";
    return result;
}

export function getCompetenciasLiderazgoInfluenciaDefinicion(): string{
    let result = "Intención  y habilidad para asumir el rol de líder de un equipo o de un grupo de personas. Dirige y aconseja a los miembros de su equipo en el desempeño del trabajo, siendo capaz de orientar adecuada y eficazmente el mismo hacia las metas establecidas.";
    return result;
}
export function getCompetenciasLiderazgoInfluenciaResultadoAlto(): string{
    let result = "Le es facil asumir el rol de lider de grupo y este lo reconoce como tal, dejando claro aquello que dice, propone y quiere llevar a la práctica, se percata del estado y situación del otro consiguiendo finalmente aquello que persigue de éste.";
    return result;
}
export function getCompetenciasLiderazgoInfluenciaResultadoMedioAlto(): string{
    let result = "Identifica el impacto que sus actuaciones tendrán sobre las otras personas, suele causar buena impresión aunque le cuesta mantenerla debido a que la fuerza demasiado, puede lograr ser lider de grupo aunque no de forma sencilla o nata.";
    return result;
}
export function getCompetenciasLiderazgoInfluenciaResultadoMedioBajo(): string{
    let result = "Es una persona más bien retraida con tendencia al trato puramente funcional, no le es facil integrarse a grupos de trabajo o dirigirlos, aunque en situaciones puntuales y bajo imperativo laboral puede lograrlo.";
    return result;
}
export function getCompetenciasLiderazgoInfluenciaResultadoBajo(): string{
    let result = "Es una persona que se siente más comoda recibiendo órdenes y siguiendo procesos claros, prefiere el trabajo individual y entrega de resultados rápido sin mantener mayor contacto con el resto del equipo.";
    return result;
}

export function getCompetenciasAnaliticoDefinicion(): string{
    let result = "Capacidad para tomar decisiones a través del análisis de múltiples variables, interpretarlas e integrarlas en miras de lograr un objetivo de la manera más efectiva y de manera preventiva.";
    return result;
}
export function getCompetenciasAnaliticoResultadoAlto(): string{
    let result = "Identifica y anticipa problemas, los aborda y aporta nuevas vías de solución, es capaz de hacer un análisis de multiples variables para interpretarlas e integrarlas en miras de lograr un objetivo de la manera más efectiva y preventiva.";
    return result;
}
export function getCompetenciasAnaliticoResultadoMedioAlto(): string{
    let result = "En ocasiones, identifica los problemas, los analiza y concluye con su solución, sin llevar a cabo un mayor análisis de las variables, sino atendiendo a lo inmediato.";
    return result;
}
export function getCompetenciasAnaliticoResultadoMedioBajo(): string{
    let result = "Únicamente es consciente de una problemática cuando le abordan resultados inesperados, le es dificil priorizar y se centra únicamente en aquellos aspectos que le afectan directamente.";
    return result;
}
export function getCompetenciasAnaliticoResultadoBajo(): string{
    let result = "Se enfoca en los detalles del resultado y pocas veces en las causantes de la problematica, le es complejo tener un vision de causa a efecto, y remediar las causantes.";
    return result;
}

export function getCompetenciasPlaneacionOrganizacionDefinicion(): string{
    let result = "Habilidad para ordenar y coordinar las acciones de trabajo, sean propias o ajenas. Anticipando, planificando y organizando tareas y proyectos a través de decisiones apropiadas y con los recursos disponibles.";
    return result;
}
export function getCompetenciasPlaneacionOrganizacionResultadoAlto(): string{
    let result = "Logra ordenar y coordinar las acciones de trabajo, sean propias o ajenas, anticipando, planificando, organizando tareas así como proyectos a través de decisiones apropiadas y con los recursos disponible.";
    return result;
}
export function getCompetenciasPlaneacionOrganizacionResultadoMedioAlto(): string{
    let result = "Establece prioridades de actuación en base a la urgencia de la tarea sin tener en cuenta su importancia. Se interesa por planificar y organizar el trabajo aunque no siempre logra ejecutarlo conforma a lo planeado.";
    return result;
}
export function getCompetenciasPlaneacionOrganizacionResultadoMedioBajo(): string{
    let result = "La persona tiene consciencia del orden y planeación que debe tenerse así como las prioridades, pero le es dificil lograr una organización formal que le permita concretar en tiempo y forma las actividades, llevandolo a tener una ejecución difusa de las actividades.";
    return result;
}
export function getCompetenciasPlaneacionOrganizacionResultadoBajo(): string{
    let result = "Realiza las tareas de manera desordenada y sin tener en cuenta el tiempo del que dispone, no establece prioridades o no toma las decisiones adecuadas y realiza las tareas conforme recibe la demanda.";
    return result;
}

export function getCompetenciasAprendizajePracticoDefinicion(): string{
    let result = "Habilidad para asimilar la información básica que le permita incorporarse de manera rápida, eficiente y con disposición a nuevos procesos o actividades.";
    return result;
}
export function getCompetenciasAprendizajePracticoResultadoAlto(): string{
    let result = "Tiene disposición a aprender nuevos procesos y obtener nuevos conocimientos, tiene habilidad para asimilar la información básica que le permita incorporarse de manera rápida y eficiente.";
    return result;
}
export function getCompetenciasAprendizajePracticoResultadoMedioAlto(): string{
    let result = "Muestra dificultades para incorporarse de manera rápida pero logra hacerlo con algo de trabajo y esfuerzo a pesar de tener disposición a nuevos procesos.";
    return result;
}
export function getCompetenciasAprendizajePracticoResultadoMedioBajo(): string{
    let result = "Muestra dificultad para similar la información básica y dificultad para incorporarse dentro de un grupo.";
    return result;
}
export function getCompetenciasAprendizajePracticoResultadoBajo(): string{
    let result = "No logra asimilar la información básica que le permita incorporarse de manera rápida, eficiente y con disposición a nuevos procesos.";
    return result;
}

export function getCompetenciasToleranciaFrustracionDefinicion(): string{
    let result = "Capacidad para actuar con eficacia bajo la presión del tiempo y haciendo frente al desacuerdo y adversidad mientras percibe la urgencia real de determinadas tareas y actúa de manera consecuente alcanzando su realización.";
    return result;
}
export function getCompetenciasToleranciaFrustracionResultadoAlto(): string{
    let result = "Muestra capacidad para actuar con eficacia bajo la presión del tiempo y haciendo frente al desacuerdo y adversidad mientras percibe la urgencia real de determinadas tareas y actúa de manera consecuente alcanzando su realización.";
    return result;
}
export function getCompetenciasToleranciaFrustracionResultadoMedioAlto(): string{
    let result = "Mantiene su ritmo de trabajo ante situaciones o problemas percibidos como difíciles, pero el rendimiento sale perjudicado, la acumulación de tareas y las situaciones adversas no le repercuten en su trabajo diario pero pueden presentarse con regularidad.";
    return result;
}
export function getCompetenciasToleranciaFrustracionResultadoMedioBajo(): string{
    let result = "Busca mantener un ritmo de trabajo ante problemas y dificultades, pero le es dificil actuar con precisión y rapides ante estas situaciones.";
    return result;
}
export function getCompetenciasToleranciaFrustracionResultadoBajo(): string{
    let result = "No resiste trabajar bajo presión de tiempo o de objetivos, le es dificil actúar con rapidez, pierde precisión y calidad en el trabajo, necesita de la continua consulta a sus superiores para ejercer sus funciones.";
    return result;
}

export function getCompetenciasSolucionProblemaDefinicion(): string{
    let result = "Capacidad de una persona para lidiar con un problema, siendo capáz de acercarse, conocerlo, entenderlo, familiarizarse para a partir de esto, buscar opciones para resolverlo y ejecutarlas.";
    return result;
}
export function getCompetenciasSolucionProblemaResultadoAlto(): string{
    let result = "Muestra capacidad de una persona para lidiar con un problema, siendo capáz de acercarse, conocerlo, entenderlo, familiarizarse para a partir de esto, buscar opciones para resolverlo y ejecutarlas.";
    return result;
}
export function getCompetenciasSolucionProblemaResultadoMedioAlto(): string{
    let result = "Busca diferentes opciones para resolver un problema, sin embargo, puede serle dificil lograrno en situaciones complejas.";
    return result;
}
export function getCompetenciasSolucionProblemaResultadoMedioBajo(): string{
    let result = "Le es dificil resolver problemas complejos, ante una situación estresante buscará apoyo y orientación de otros para poder resolverlo.";
    return result;
}
export function getCompetenciasSolucionProblemaResultadoBajo(): string{
    let result = "No logra una comprensión del problema y a pesar de esto tendrá dificultad para buscar apoyo u orientación de otros.";
    return result;
}

export function getCompetenciasTrabajoEquipoDefinicion(): string{
    let result = "Capacidad para laborar con otras personas de manera armónica y eficiente. Voluntad de trabajar con los demás, de formar parte de un equipo, de trabajar conjuntamente, en contra de la idea de trabajar separadamente o de forma competitiva.";
    return result;
}
export function getCompetenciasTrabajoEquipoResultadoAlto(): string{
    let result = "Labora con otras personas de manera armónica y eficiente, tiene voluntad de trabajar con los demás, de formar parte de un equipo, de trabajar conjuntamente, en contra de la idea de trabajar separadamente o de forma competitiva, motiva y procura la convivencia e integración de los miembros del equipo.";
    return result;
}
export function getCompetenciasTrabajoEquipoResultadoMedioAlto(): string{
    let result = "Trabaja de manera individual aunque reconoce las ventajas del trabajo en equipo busca aportar ideas al grupo y participa activamente ante ciertas situaciones.";
    return result;
}
export function getCompetenciasTrabajoEquipoResultadoMedioBajo(): string{
    let result = "Muestra una intensión genuina por integrarse y trabajar como parte de un equipo, pero, se verá limitado en el logro de esto, lo que lo obliga a sentirse más cómodo trabajando de forma individual.";
    return result;
}
export function getCompetenciasTrabajoEquipoResultadoBajo(): string{
    let result = "Se reserva en sí mismo más como defensa que por verdadera timidez, no llegando a compartir información con el resto al considerarlo fuera de sus verdaderas funciones, actúa según sus propias responsabilidades por lo que en contadas ocasiones solicita la ayuda de otros para resolver dificultades, asimismo, le cuesta aceptar la visión de los demás.";
    return result;
}

export function getCompetenciasSeguimientoDefinicion(): string{
    let result = "Destreza para dar atención, seguimiento y ejecución a las tareas que se pretenden y deban hacerse, a fin de cumplir los objetivos.";
    return result;
}
export function getCompetenciasSeguimientoResultadoAlto(): string{
    let result = "Tiene destreza para dar atención, seguimiento y ejecución a las tareas que se pretenden y deban hacerse, a fin de cumplir los objetivos.";
    return result;
}
export function getCompetenciasSeguimientoResultadoMedioAlto(): string{
    let result = "Establece objetivos y realiza un seguimiento de los mismos sin embargo puede serle complicado establecer mecanismos e indicadores adecuados para su cumplimiento.";
    return result;
}
export function getCompetenciasSeguimientoResultadoMedioBajo(): string{
    let result = "A pesar de la intención, le es dificil llevar una adecuada organización para el seguimiento de sus tareas, siendo comunes los olvidos y retraso en actividades.";
    return result;
}
export function getCompetenciasSeguimientoResultadoBajo(): string{
    let result = "No logra llevar a cabo una organización ni seguimiento de las tareas debido a una falta de entendimiento en el proceso.";
    return result;
}

export function getCompetenciasAtencionDetalleDefinicion(): string{
    let result = "Tendencia que tiene una persona a ser minuciosa al momento de realizar una tarea, cuidando y vigilando cada detalle de ésta.";
    return result;
}
export function getCompetenciasAtencionDetalleResultadoAlto(): string{
    let result = "Es minucioso al momento de realizar una tarea, cuida y vigila cada detalle de ésta logrando mantener altos estándares de calidad en sus actividades sin perder la visión global de la tarea.";
    return result;
}
export function getCompetenciasAtencionDetalleResultadoMedioAlto(): string{
    let result = "Muestra un interés especial por el orden y la claridad, le interesa realizar el trabajo de manera responsable y siguiendo las normas procurando no perder la visión global de la tarea aunque no lo consigue de forma general.";
    return result;
}
export function getCompetenciasAtencionDetalleResultadoMedioBajo(): string{
    let result = "Bajo ciertas circunstancias puede mostrar interés por mantener un órden minusioso en una actividad, sin embargo, puede ser propenso a perder la visión global de la tarea quedandose meramente en el detalle.";
    return result;
}
export function getCompetenciasAtencionDetalleResultadoBajo(): string{
    let result = "No realiza su trabajo siguiendo unos estándares de calidad, le es dificil realizar un trabajo bien hecho enfocado en el detalle, crea un espacio de trabajo con un orden especial el cual únicamente entiende esta persona.";
    return result;
}

export function getCompetenciasManejoConflictosDefinicion(): string{
    let result = "Habilidad para buscar la conjunción de voluntades, bajo la perspectiva de ser un tercero imparcial y neutral, con propuestas de acuerdos para ayudar a las partes a ubicar e identificar sus intereses, estableciendo una comunicación que prevenga o evite posibles conflictos.";
    return result;
}
export function getCompetenciasManejoConflictosResultadoAlto(): string{
    let result = "Tiene habilidad para buscar la conjunción de voluntades, bajo la perspectiva de ser un tercero imparcial y neutral, con propuestas de acuerdos para ayudar a las partes a ubicar e identificar sus intereses, estableciendo una comunicación que prevenga o evite posibles conflictos.";
    return result;
}
export function getCompetenciasManejoConflictosResultadoMedioAlto(): string{
    let result = "Busca mantenerse imparcial y neutral ante un conflicto aunque no siempre lo consigue, busca evitar el desarrollo de conflictos aunque le es dificil ubicar e identificar los intereses de las partes.";
    return result;
}
export function getCompetenciasManejoConflictosResultadoMedioBajo(): string{
    let result = "Busca involucrarse con las partes a fin de resolver, pero, no tendrá la capacidad para mantener una neutralidad adecuada que permita la visión imparcial ante el conflicto.";
    return result;
}
export function getCompetenciasManejoConflictosResultadoBajo(): string{
    let result = "No logra ser imparcial ante un conflicto e incluso puede fomentarlo sin tener intención, prefiere evitar involucrarse a participar activamente en la resolución de éstos.";
    return result;
}

export function getCompetenciasGustoRutinaDefinicion(): string{
    let result = "Apego y gusto que tiene una persona por realizar tareas sistemáticas, cumplir con horarios y actividades constantes durante una jornada laboral.";
    return result;
}
export function getCompetenciasGustoRutinaResultadoAlto(): string{
    let result = "Muestra apego y gusto por realizar tareas sistemáticas, siéndole sencillo cumplir con horarios y actividades constantes durante la jornada laboral.";
    return result;
}
export function getCompetenciasGustoRutinaResultadoMedioAlto(): string{
    let result = "La persona puede realizar generalmente tareas sistemáticas, cumplir con horarios y actividades constantes durante la jornada laboral, sin embargo estas no son del gusto de la persona, prefiriendo actividades que puedan tener cierta libertad de ejecución y manejo del tiempo.";
    return result;
}
export function getCompetenciasGustoRutinaResultadoMedioBajo(): string{
    let result = "Obedece al orden, pero no muestra un verdadero gusto por mantener estas tareas sistemáticas, siendo constante la desviación de atención y sentimientos de frustración.";
    return result;
}
export function getCompetenciasGustoRutinaResultadoBajo(): string{
    let result = "No muestra apego ni gusto por realizar tareas sistemáticas, le es complicado cumplir con horarios y actividades constantes durante la jornada laboral.";
    return result;
}


export function getCompetenciasInteresSatisfaccionDefinicion(): string{
    let result = "Voluntad de ayudar y de servir al cliente, de resolver sus necesidades. Se centra fundamentalmente en entender las necesidades del cliente y así poder hacer algo para ayudar o servir, incluso, anticiparse a sus demandas.";
    return result;
}
export function getCompetenciasInteresSatisfaccionResultadoAlto(): string{
    let result = "La persona se orienta hacia las necesidades tanto explicitadas como no explicitadas, identificando nuevas respuestas y oportunidades no detectadas inicialmente que contribuyen a dar la ayuda necesaria de una manera proactiva, se esfuerza por conocer gustos, preferencias e inconvenientes de sus clientes y encontrar vías de solución, da respuesta ágil y acertada a reclamos o problemas de los clientes.";
    return result;
}
export function getCompetenciasInteresSatisfaccionResultadoMedioAlto(): string{
    let result = "La persona entiende la importancia de escuchar las necesidades al cliente, es proactivo con las necesidades explicitadas pero no logra entender las necesidades explicitadas por lo que no logra anticiparse a los problemas o reclamos de sus clientes.";
    return result;
}
export function getCompetenciasInteresSatisfaccionResultadoMedioBajo(): string{
    let result = "Con respecto al cliente, cumple con las acciones acordadas, respondiendo a sus requerimientos aunque solo en lo esencial, busca atender y solucionar problemas y reclamaciones de los cliente sin embargo, esta no es su principal preocupación.";
    return result;
}
export function getCompetenciasInteresSatisfaccionResultadoBajo(): string{
    let result = "Actúa al margen de los intereses de la compañía persiguiendo como mayor beneficio su propio trabajo, desentendiéndose de las necesidades del otro, en cuanto a la atención a sus clientes, no consigue cubrir sus necesidades puesto que no se inquieta en profundizar en las preferencias del otro.";
    return result;
}

export function getCompetenciasPersuacionVentasDefinicion(): string{
    let result = "Grupo de habilidades personales (convencimiento, negociación, habilidad de palabra) necesarias para que por esta vía, la persona logre determinados propósitos a través de otra o de los demás.";
    return result;
}
export function getCompetenciasPersuacionVentasResultadoAlto(): string{
    let result = "Muestra habilidades de convencimiento, negociación y habilidad de palabra, lo que le permite por esta vía lograr determinados propósitos a través de otra persona o personas.";
    return result;
}
export function getCompetenciasPersuacionVentasResultadoMedioAlto(): string{
    let result = "Se adapta a las necesidades de los clientes y consigue cubrirlas en la mayoría de ocasiones.";
    return result;
}
export function getCompetenciasPersuacionVentasResultadoMedioBajo(): string{
    let result = "Con respecto al cliente, cumple con las acciones acordadas, respondiendo a sus requerimientos aunque solo en lo esencial, busca atender y solucionar problemas y reclamaciones de los cliente sin embargo, esta no es su principal preocupación.";
    return result;
}
export function getCompetenciasPersuacionVentasResultadoBajo(): string{
    let result = "Carece de habilidades de convencimiento y negociación, lo cual le impacta en la posibilidad de lograr sus objetivos de ventas y convencimiento del cliente.";
    return result;
}

export function getCompetenciasConcienciaSeguridadDefinicion(): string{
    let result = "Capacidad para identificar y actuar ante situaciones de riesgo, interés por procupar condiciones seguras para el y quienes lo rodean evitando mantener riesgos potenciales en la organización.";
    return result;
}
export function getCompetenciasConcienciaSeguridadResultadoAlto(): string{
    let result = "Muestra tener capacidad para identificar y actuar ante situaciones de riesgo, tiene interés por procupar condiciones seguras para el y quienes lo rodean evitando mantener riesgos potenciales en la organización.";
    return result;
}
export function getCompetenciasConcienciaSeguridadResultadoMedioAlto(): string{
    let result = "Procura mantener un ambiente sano y libre de riesgos potenciales, aunque en ocasiones no le es tan fácil identificar estas situaciones de riesgo.";
    return result;
}
export function getCompetenciasConcienciaSeguridadResultadoMedioBajo(): string{
    let result = "Se le dificulta identificar situaciones de riesgo, sin embargo, muestra buena reacción cuando logra identificar un riesgo latente para la organización.";
    return result;
}
export function getCompetenciasConcienciaSeguridadResultadoBajo(): string{
    let result = "No logra identificar ni actuar ante situaciones de riesgo, no muestra mayor interés por procurar condiciones seguras en la organización.";
    return result;
}

/**
 * Recursos Humanos
 * Grupo: RIESGOS
 */

export function getRiesgosPersonalesDefinicion(): string{
    let result = "Grupo compuesto por la evaluación de los riesgos (insertarlos), dando información respecto a la probabilidad de que la persona se haya visto involucrada en lo personal en la ejecución de alguno de estos.";
    return result;
}
export function getRiesgosPersonalesResultadoBajo(): string{
    let result = "La persona no presenta respuestas emocionales que puedan indicar que ha estado involucrada en lo personal en temas de: (insertar los riesgos evaluados), haciendola una persona de bajo riesgo para la organización.";
    return result;
}
export function getRiesgosPersonalesResultadoMedioBajo(): string{
    let result = "Se presentan medios que pueden indicar un estrés en los factores (nombrarlos) lo que indica que puede haber un estresor detonante vinculado a éstos y a un posible involucramiento. Se recomienda explorar en entrevista.";
    return result;
}
export function getRiesgosPersonalesResultadoMedioAlto(): string{
    let result = "Los indicadores detectados durante la evaluación de riesgos personales, señalan una reacción emocional importante en uno de los factores, indicando que la persona ha estado involucrada de forma directa en una conducta de riesgo no deseada.";
    return result;
}
export function getRiesgosPersonalesResultadoAlto(): string{
    let result = "Se observan resultados de riesgo de alarma en los factores (nombrarlos) donde la persona ha tenido una reacción importante, lo cual indica que existe un riesgo de que la persona se encuentre en lo personal involucrada en la ejecución de estos por lo que es considerada de riesgo para la organización.";
    return result;
}

export function getRiesgosEntornoDefinicion(): string{
    let result = "Grupo compuesto por la evaluación de los riesgos (insertarlos) en el entorno cercado del evaluado, dando información respecto a que ciertas actividades sean normalizadas en el contexto cercano, aumentando  la probabilidad de que la persona pueda en algún momento incidir en alguno de estos.";
    return result;
}
export function getRiesgosEntornoResultadoBajo(): string{
    let result = "La persona no presenta respuestas emocionales que puedan indicar que en su entorno cercano se presentan actividades relacionadas con (nombrar los factores), esto indica que no las malas prácticas no se encuentran normalizadas a su alrededor, haciéndolo un entorno seguro.";
    return result;
}
export function getRiesgosEntornoResultadoMedioBajo(): string{
    let result = "Se presentan indicadores de riesgo que pueden indicar un estrés en los factores del entorno (nombrarlos) lo que indica que puede haber un estresor detonante vinculado a éstos y a una posible práctica en su contexto cercano. Se recomienda explorar en entrevista.";
    return result;
}
export function getRiesgosEntornoResultadoMedioAlto(): string{
    let result = "Los indicadores detectados durante la evaluación de riesgos en su entorno, señalan una reacción emocional importante en uno de los factores, indicando que la persona ha estado involucrada de forma directa con personas que normalizan ciertas conductas de riesgo.";
    return result;
}
export function getRiesgosEntornoResultadoAlto(): string{
    let result = "Se observan resultados de alarma en los factores del entorno (nombrarlos) donde la persona ha tenido una reacción importante, lo cual indica que existe un riesgo de que las actividades relacioanadas con éstos sean recurrentes en su contexto cercano, haciéndolo un entorno de riesgo.";
    return result;
}

export function getRiesgosPersonalesFugaInformacionDefinicion(): string{
    let result = "Salida no controlada de información que hace que esta llegue a personas no autorizadas o sobre la que su responsable pierde el control.";
    return result;
}
export function getRiesgosPersonalesFugaInformacionResultadoBajo(): string{
    let result = "No se encuentran indicadores de riesgo que señalen que la persona ha compartido información confidencial con personas no autorizadas.";
    return result;
}
export function getRiesgosPersonalesFugaInformacionResultadoMedioBajo(): string{
    let result = "Se presentan señales de reacción emocional respecto a la fuga de información, la cual, a pesar de no llegar a ser un indicador de riesgo, si se presenta como un estresor, pudiendo ser una idea en gestación o la duda sobre alguna acción cometida.";
    return result;
}
export function getRiesgosPersonalesFugaInformacionResultadoMedioAlto(): string{
    let result = "Se presenta una reacción emocional ligeramente alta, la cual, puede indicar que la persona no logra tener una adecuada clasificación de la información, por lo que presenta el riesgo de entregar información de valor a personas no autorizadas.";
    return result;
}
export function getRiesgosPersonalesFugaInformacionResultadoAlto(): string{
    let result = "Se observa un resultado de alto riesgo respecto a la fuga de información, lo que señala que la persona se ha visto involucrada en compartir información confidencial con personas no autorizadas.";
    return result;
}

export function getRiesgosPersonalesRoboDefinicion(): string{
    let result = "Sustracción y apoderamiento de bienes ajenos de manera fraudilenta y sin autorización para esto.";
    return result;
}
export function getRiesgosPersonalesRoboResultadoBajo(): string{
    let result = "No se encuentran indicadores de riesgo que señalen que la persona ha sustraido o se ha apoderado de bienes ajenos de manera fraudulenta y sin autorización para ello.";
    return result;
}
export function getRiesgosPersonalesRoboResultadoMedioBajo(): string{
    let result = "Se osbservan señales de ligera reacción emocional, lo que indica que la persona pudo haber tenido una confusión entre si alguna acción realizada puede considerarse un robo o no.";
    return result;
}
export function getRiesgosPersonalesRoboResultadoMedioAlto(): string{
    let result = "Se presentan señales de reacción emocional respecto a la sustracción o apoderación fraudulento de bienes agenos, la cual, si se presenta como un estresor, pudiendo ser una idea en gestación o la duda sobre alguna acción cometida.";
    return result;
}
export function getRiesgosPersonalesRoboResultadoAlto(): string{
    let result = "Se observa un resultado de alto riesgo respecto a la sustracción o apoderación fraudulenta de bienes agenos sin autorización para esto, lo que señala que posiblemente la persona se ha visto involucrada en robo dentro de su trabajo.";
    return result;
}

export function getRiesgosPersonalesCometerDelitosDefinicion(): string{
    let result = "Evalúa si la persona ha estado involucrada en algún delito grave a lo largo de su vida, sus antecedentes penales y si estos han sido comunicados al empleador.";
    return result;
}
export function getRiesgosPersonalesCometerDelitosResultadoBajo(): string{
    let result = "No se encuentran indicadores de riesgo que señalen que la persona ha estado involucrada en algún delito grave a lo largo de su vida o presenta antecedentes penales que hayan sido ocultados al empleador.";
    return result;
}
export function getRiesgosPersonalesCometerDelitosResultadoMedioBajo(): string{
    let result = "Se presentan señales de reacción emocional respecto a haber estado involucrada en algún delito grave a lo largo de su vida o presenta antecedentes penales que hayan sido ocultados al empleador, la cual, a pesar de no llegar a ser un indicador de riesgo, si se presenta como un estresor, pudiendo ser una  duda sobre alguna acción cometida en el pasado y su gravedad.";
    return result;
}
export function getRiesgosPersonalesCometerDelitosResultadoMedioAlto(): string{
    let result = "Las reacciones registradas durante la entrevista en este factor indican un estrés significativo respecto a haber cometido algún delito grave a lo largo de su vida o contar con antecedentes penales, en los cuales pudo haber estado involucrado directa o inderamente.";
    return result;
}
export function getRiesgosPersonalesCometerDelitosResultadoAlto(): string{
    let result = "Se observa un resultado de riesgo respecto a haber estado involucrado en algún delito grave a lo largo de su vida o presenta antecedentes penales que han sido ocultados al empleador, lo que señala que posiblemente la persona se ha visto involucrada en la comisión de algún delito.";
    return result;
}

export function getRiesgosPersonalesSobornoDefinicion(): string{
    let result = "Acto por el que una persona ofrece o entrega dinero (o algún otro bien) a otra persona con el objetivo de persuadir y conseguir que esa otra persona le haga un favor determinado.";
    return result;
}
export function getRiesgosPersonalesSobornoResultadoBajo(): string{
    let result = "No se encuentran indicadores de riesgo que señalen que la persona ha estado involucrada en actos de soborno, ya sea como sobornado o como sobornador.";
    return result;
}
export function getRiesgosPersonalesSobornoResultadoMedioBajo(): string{
    let result = "Se presentan indicadores de reacción emocional moderada respecto a haber sido sobornado o haber sobornado a lo largo de su vida, la cual, a pesar de no llegar a ser un indicador de riesgo, si se presenta como un estresor, pudiendo la persona pensar que solo ciertos actos pueden ser considerados sobornos según el tamaño o monto o se presenta duda sobre una acción cometida en el pasado y su gravedad.";
    return result;
}
export function getRiesgosPersonalesSobornoResultadoMedioAlto(): string{
    let result = "Se presentan indicadores de estrés importante respecto a haber participado en actos de soborno, ya sea en el ofrecimiento de dinero o en la entrega de este a cambio de un favor determinado, lo que señala que la persona puede haber estado involucrado de forma directa o indirecta con este acto.";
    return result;
}
export function getRiesgosPersonalesSobornoResultadoAlto(): string{
    let result = "Se observa un resultado de riesgo respecto a haber sido sobornado o haber sobornado a un tercero, lo que señala que posiblemente la persona se ha visto involucrada en esta práctica.";
    return result;
}

export function getRiesgosPersonalesInformacionFalsaDefinicion(): string{
    let result = "Proporcionar reportes inexactos e información alterada, mintiendo o distorsionando sobre asuntos relativos a su trabajo a sus superiores.";
    return result;
}
export function getRiesgosPersonalesInformacionFalsaResultadoBajo(): string{
    let result = "No se encuentran indicadores de riesgo que señalen que la persona tiende a proporcionar reportes inexactos e información alterada, miente o distorsiona infromación sobre asuntos relativos a su trabajo a sus superiores.";
    return result;
}
export function getRiesgosPersonalesInformacionFalsaResultadoMedioBajo(): string{
    let result = "Se presentan indicadores de reacción emocional moderada respecto a haber proporcionado reportes inexactos e información alterada, mientiendo o distorsionando infromación sobre asuntos relativos a su trabajo a sus superiores, la cual, a pesar de no llegar a ser un indicador de riesgo, si se presenta como un estresor, pudiendo ser una idea en gestación o una  duda sobre alguna acción cometida en el pasado y su gravedad.";
    return result;
}
export function getRiesgosPersonalesInformacionFalsaResultadoMedioAlto(): string{
    let result = "se presentan indicadores de estrés importante respecto al proporcionar reportes inexactos e información alterada, a mentir y distorsionar sobre su trabajo a su empleador, lo que señala que la persona es propensa a realizar estos actos o alguno de ellos.";
    return result;
}
export function getRiesgosPersonalesInformacionFalsaResultadoAlto(): string{
    let result = "Se observa un resultado de riesgo respecto a haber proporcionado reportes inexactos e información alterada, mientiendo o distorsionando infromación sobre asuntos relativos a su trabajo a sus superiores, lo que señala que posiblemente la persona se ha visto involucrada en esta práctica.";
    return result;
}

export function getRiesgosPersonalesDrogasDefinicion(): string{
    let result = "Consumo de estupefaciones dentro del horario laboral.";
    return result;
}
export function getRiesgosPersonalesDrogasResultadoBajo(): string{
    let result = "No se encuentran indicadores de riesgo que señalen que la persona consume estupefacientes dentro del horario laboral.";
    return result;
}
export function getRiesgosPersonalesDrogasResultadoMedioBajo(): string{
    let result = "Se presentan indicadores de reacción emocional moderada respecto al consumo de estupefacientes, la cual, a pesar de no llegar a ser un indicador de riesgo, si se presenta como un estresor, pudiendo ser una idea en gestación o una  duda sobre alguna acción cometida en el pasado y su gravedad.";
    return result;
}
export function getRiesgosPersonalesDrogasResultadoMedioAlto(): string{
    let result = "Se presentan indicadores de estrés importante respecto al consumo de drogas, lo cual indica un posible riesgo de que la persona haya consumido en alguna ocasión algún estupefaciente dentro de su trabajo.";
    return result;
}
export function getRiesgosPersonalesDrogasResultadoAlto(): string{
    let result = "Se observa un resultado de riesgo respecto al consumo de estupefacientes en el trabajo, lo que señala que posiblemente la persona se ha visto involucrada en esta práctica.";
    return result;
}

export function getRiesgosPersonalesAlcoholDefinicion(): string{
    let result = "Ingerir bebidas embriagantes durante la jornada lanboral.";
    return result;
}
export function getRiesgosPersonalesAlcoholResultadoBajo(): string{
    let result = "No se encuentran indicadores de riesgo que señalen que la persona ha ingerido o ingiere bebidas embriagantes dentro del horario laboral.";
    return result;
}
export function getRiesgosPersonalesAlcoholResultadoMedioBajo(): string{
    let result = "Se presentan indicadores de reacción emocional moderada respecto a ingerir bebidas embriagantes , la cual, a pesar de no llegar a ser un indicador de riesgo, si se presenta como un estresor, pudiendo ser una idea en gestación o una  duda sobre alguna acción cometida en el pasado y su gravedad.";
    return result;
}
export function getRiesgosPersonalesAlcoholResultadoMedioAlto(): string{
    let result = "Se presentan indicadores de estrés importante respecto al consumo de alcohol, lo cual indica un posible riesgo de que la persona haya consumido en alguna ocasión alcohol o se haya presentado en estado de ebriedad.";
    return result;
}
export function getRiesgosPersonalesAlcoholResultadoAlto(): string{
    let result = "Se observa un resultado de riesgo respecto a la ingesta de bebidas embriagantes en el trabajo, lo que señala que posiblemente la persona se ha visto involucrada en esta práctica.";
    return result;
}

export function getRiesgosPersonalesApuestasDefinicion(): string{
    let result = "Tendencia a realizar apuestas de forma recurrente, dentro y fuera del horario laboral con sumas de dinero que pueden superar los ingresos del evaluado.";
    return result;
}
export function getRiesgosPersonalesApuestasResultadoBajo(): string{
    let result = "No se encuentran indicadores de riesgo que señalen que la persona realice apuestas dentro o fuera de su horario laboral con sumas de dinero que superen sus ingresos recibidos.";
    return result;
}
export function getRiesgosPersonalesApuestasResultadoMedioBajo(): string{
    let result = "Se presentan indicadores de reacción emocional moderada respecto a la realización de apuestas dentro o fuera de su horario laboral con sumas de dinero que superen sus ingresos recibidos, la cual, a pesar de no llegar a ser un indicador de riesgo, si se presenta como un estresor, pudiendo ser una idea en gestación o una  duda sobre alguna acción cometida en el pasado y su gravedad.";
    return result;
}
export function getRiesgosPersonalesApuestasResultadoMedioAlto(): string{
    let result = "Se presentan indicadores de estrés importante respecto a la tendencia a realizar apuestas que superan los ingresos del evaluado, lo cual indica un posible riesgo de que la persona apueste de forma recurrente o en alguna ocasión significativa para ella.";
    return result;
}
export function getRiesgosPersonalesApuestasResultadoAlto(): string{
    let result = "Se observa un resultado de riesgo respecto a realizar apuestas dentro o fuera de su horario laboral con sumas de dinero que superen sus ingresos recibidos, lo que señala que posiblemente la persona se ha visto involucrada en esta práctica.";
    return result;
}

export function getRiesgosPersonalesGrupoDelictivoDefinicion(): string{
    let result = "Vinculación o participación con grupos delictivos o pandillas para la comisión de delitos.";
    return result;
}
export function getRiesgosPersonalesGrupoDelictivoResultadoBajo(): string{
    let result = "No se encuentran indicadores de riesgo que señalen que la persona se encuentra vinculada con grupos delitivos o pandillas para la comisión de delitos.";
    return result;
}
export function getRiesgosPersonalesGrupoDelictivoResultadoMedioBajo(): string{
    let result = "Se presentan indicadores de reacción emocional moderada respecto a estar vinculada con grupos delitivos o pandillas, la cual, a pesar de no llegar a ser un indicador de riesgo, si se presenta como un estresor, pudiendo ser una idea en gestación o una  duda sobre alguna acción cometida en el pasado y su gravedad.";
    return result;
}
export function getRiesgosPersonalesGrupoDelictivoResultadoMedioAlto(): string{
    let result = "Se presentan indicadores de estrés importante respecto a la pertenencia a grupos delictivos, lo que indica un riesgo latente por vinculación con grupos criminales ya sea de forma directa o indirecta. Se recomienda profundizar en entrevista.";
    return result;
}
export function getRiesgosPersonalesGrupoDelictivoResultadoAlto(): string{
    let result = "Se observa un resultado de riesgo respecto a participar y estar vinculada con grupos delitivos o pandillas, lo que señala que posiblemente la persona se ha visto involucrada o está involucrada en una de éstas.";
    return result;
}

export function getRiesgosPersonalesExtorsionDefinicion(): string{
    let result = "Obligar a una persona, a través de la utilización de violencia o intimidación, a realizar u omitir un acto  con ánimo de lucro y con la intención de producir un perjuicio de carácter patrimonial o bien de un sujeto.";
    return result;
}
export function getRiesgosPersonalesExtorsionResultadoBajo(): string{
    let result = "No se encuentran indicadores de riesgo que señalen que la persona haga uso de violencia o intimidación, para realizar u omitir un acto  con ánimo de lucro y con la intención de producir un perjuicio de carácter patrimonial o bien de un sujeto.";
    return result;
}
export function getRiesgosPersonalesExtorsionResultadoMedioBajo(): string{
    let result = "Se presentan indicadores de reacción emocional moderada respecto a hacer uso de violencia o intimidación, para realizar u omitir un acto  con ánimo de lucro y con la intención de producir un perjuicio de carácter patrimonial o bien de un sujeto, la cual, a pesar de no llegar a ser un indicador de riesgo, si se presenta como un estresor, pudiendo ser una idea en gestación o una  duda sobre alguna acción cometida en el pasado y su gravedad.";
    return result;
}
export function getRiesgosPersonalesExtorsionResultadoMedioAlto(): string{
    let result = "Los indicadores biométricos detectan una reacción emocional importante al momento de abordar el uso de la violencia o intimidación para realizar u omitir actos con ánimo de lucro, indicando un riesgo latente a que la persona se haya encontrado, o se encuentre involucrado en actividades de extorsión de forma directa o indirecta.";
    return result;
}
export function getRiesgosPersonalesExtorsionResultadoAlto(): string{
    let result = "Se observa un resultado de riesgo respecto a haber hecho o hacer uso de violencia o intimidación, para realizar u omitir un acto  con ánimo de lucro y con la intención de producir un perjuicio de carácter patrimonial o bien de un sujeto, lo que señala que posiblemente la persona se ha visto involucrada o está involucrada en esta prática.";
    return result;
}

export function getRiesgosPersonalesAcosoLaboralDefinicion(): string{
    let result = "Acción o acciones conducentes a producir miedo, terror, desprecio o desánimo en un trabajador afectado hacia su trabajo y su persona.";
    return result;
}
export function getRiesgosPersonalesAcosoLaboralResultadoBajo(): string{
    let result = "No se encuentran indicadores de riesgo que señalen que la persona realiza acciones conducentes a producir miedo, terror, desprecio o desánimo en un trabajador afectado hacia su trabajo y su persona.";
    return result;
}
export function getRiesgosPersonalesAcosoLaboralResultadoMedioBajo(): string{
    let result = "Se presentan indicadores de reacción emocional moderada respecto a cometer acciones conducentes a producir miedo, terror, desprecio o desánimo en un trabajador afectado hacia su trabajo y su persona, la cual, a pesar de no llegar a ser un indicador de riesgo, si se presenta como un estresor, pudiendo ser una idea en gestación o una  duda sobre alguna acción cometida en el pasado y su gravedad.";
    return result;
}
export function getRiesgosPersonalesAcosoLaboralResultadoMedioAlto(): string{
    let result = "Los indicadores biométricos detectan una reacción emocional importante al momento de abordar acoso laboral, por lo que existe un riesgo latente de que la persona este o haya alguna vez realizado acciones conducentes a producir miedo, terror, desprecio o desánimo en uno o más trabajadores.";
    return result;
}
export function getRiesgosPersonalesAcosoLaboralResultadoAlto(): string{
    let result = "Se observa un resultado de riesgo respecto a realizar acciones conducentes a producir miedo, terror, desprecio o desánimo en un trabajador afectado hacia su trabajo y su persona, lo que señala que posiblemente la persona ejerce este tipo de prácticas.";
    return result;
}

export function getRiesgosPersonalesHostigamientoSexualDefinicion(): string{
    let result = "Es el ejercicio del poder, en una relación de subordinación real de la víctima frente al agresor en los ámbitos laboral o escolar. Se expresa en conductas verbales, físicas o ambas, relacionadas con la sexualidad de connotación lasciva.";
    return result;
}
export function getRiesgosPersonalesHostigamientoSexualResultadoBajo(): string{
    let result = "No se encuentran indicadores de riesgo que señalen que la persona se expresa en conductas verbales, físicas o ambas, relacionadas con la sexualidad de connotación lasciva.";
    return result;
}
export function getRiesgosPersonalesHostigamientoSexualResultadoMedioBajo(): string{
    let result = "Se presentan indicadores de reacción emocional moderada respecto a la expresión  de conductas verbales, físicas o ambas, relacionadas con la sexualidad de connotación lasciva, la cual, a pesar de no llegar a ser un indicador de riesgo, si se presenta como un estresor, pudiendo ser una idea en gestación o una  duda sobre alguna acción cometida en el pasado y su gravedad.";
    return result;
}
export function getRiesgosPersonalesHostigamientoSexualResultadoMedioAlto(): string{
    let result = "Los indicadores biométricos detectan una reacción emocional importante al momento de abordar el hostigamiento sexual, lo que sugiere que la persona se ha visto involucrada en algun momento de su vida en conductas de índole sexual en una relación de subordinación.";
    return result;
}
export function getRiesgosPersonalesHostigamientoSexualResultadoAlto(): string{
    let result = "Se observa un resultado de riesgo respecto a la expresión de conductas verbales, físicas o ambas, relacionadas con la sexualidad de connotación lasciva, lo que señala que posiblemente la persona ejerce este tipo de prácticas.";
    return result;
}

export function getRiesgosEntornoFugaInformacionDefinicion(): string{
    let result = "Salida no controlada de información que hace que esta llegue a personas no autorizadas o sobre la que su responsable pierde el control.";
    return result;
}
export function getRiesgosEntornoFugaInformacionResultadoBajo(): string{
    let result = "No se encuentran indicadores de riesgo que señalen que en el entorno cercano de la persona sea una actividad común el compartir información confidencial con personas no autorizadas.";
    return result;
}
export function getRiesgosEntornoFugaInformacionResultadoMedioBajo(): string{
    let result = "Se presentan señales de reacción emocional respecto a la fuga de información en el entorno, la cual, a pesar de no llegar a ser un indicador de riesgo, si se presenta como un estresor, pudiendo ser una actividad que se ha presentado en baja incidencia en su entorno.";
    return result;
}
export function getRiesgosEntornoFugaInformacionResultadoMedioAlto(): string{
    let result = "Se presenta una reacción emocional ligeramente alta, la cual, puede indicar que en el entorno cercano de la persona se ha normalizado el compartir información sensible entre personas no autorizadas en el circulo cercano.";
    return result;
}
export function getRiesgosEntornoFugaInformacionResultadoAlto(): string{
    let result = "Se observa un resultado de riesgo respecto a la fuga de información en su entorno, lo que señala que en el entorno cercano, es común la actividad de compartir información confidencial con personas no autorizadas.";
    return result;
}

export function getRiesgosEntornoRoboDefinicion(): string{
    let result = "Sustracción y apoderamiento de bienes ajenos de manera fraudilenta y sin autorización para esto.";
    return result;
}
export function getRiesgosEntornoRoboResultadoBajo(): string{
    let result = "No se encuentran indicadores de riesgo que señalen que en el entorno cercano de la persona sea una actividad común la sustracción y apoderamiento de bienes ajenos de manera fraudalenta y sin autorización para esto.";
    return result;
}
export function getRiesgosEntornoRoboResultadoMedioBajo(): string{
    let result = "Se osbservan señales de ligera reacción emocional, lo que indica que dentro del entorno de la persona se pueden presentar robos pero estos no son constantes o normalizados.";
    return result;
}
export function getRiesgosEntornoRoboResultadoMedioAlto(): string{
    let result = "Se presentan señales de reacción emocional respecto al robo en el entorno, la cual, a pesar de no llegar a ser un indicador de riesgo, si se presenta como un estresor, pudiendo ser una actividad que se ha presentado en baja incidencia en su contexto cercano.";
    return result;
}
export function getRiesgosEntornoRoboResultadoAlto(): string{
    let result = "Se observa un resultado de riesgo respecto a la sustracción o apoderación fraudulenta de bienes agenos sin autorización para esto en su entorno, lo que señala que en el entorno cercano, es común la actividad de compartir información confidencial con personas no autorizadas.";
    return result;
}

export function getRiesgosEntornoCometerDelitosDefinicion(): string{
    let result = "Evalúa si en el entorno cercano es común la comisión de delitos graves, encarcelamiento por esto u ocultamiento de antecedentes penales.";
    return result;
}
export function getRiesgosEntornoCometerDelitosResultadoBajo(): string{
    let result = "No se encuentran indicadores de riesgo que señalen que en el entorno cercano de la persona sea común la comisión de delitos graves, encarcelamiento por esto u ocultamiento de antecedentes penales.";
    return result;
}
export function getRiesgosEntornoCometerDelitosResultadoMedioBajo(): string{
    let result = "Se presentan señales de reacción emocional respecto a la comisión de delitos graves, encarcelamiento por esto u ocultamiento de antecedentes penales en el entorno de la persona, la cual, a pesar de no llegar a ser un indicador de riesgo, si se presenta como un estresor, pudiendo ser una actividad que se ha presentado en baja incidencia en su contexto cercano.";
    return result;
}
export function getRiesgosEntornoCometerDelitosResultadoMedioAlto(): string{
    let result = "Las reacciones registradas durante la entrevista en este factor indican un estrés significativo respecto a la comisión de delitos y delitos penales, lo cual indica que en el entorno de la persona evaluada se presentan este tipo de situaciones, aunque este no necesariamente debe ser un contexto cercano.";
    return result;
}
export function getRiesgosEntornoCometerDelitosResultadoAlto(): string{
    let result = "Se observa un resultado de riesgo respecto a la comisión de delitos graves, encarcelamiento por esto u ocultamiento de antecedentes penales en el entorno de la persona, lo que señala que en el contexto cercano de la persona es común que las personas se vean involucradas en estas situaciones.";
    return result;
}

export function getRiesgosEntornoSobornoDefinicion(): string{
    let result = "Acto por el que una persona ofrece o entrega dinero (o algún otro bien) a otra persona con el objetivo de persuadir y conseguir que esa otra persona le haga un favor determinado.";
    return result;
}
export function getRiesgosEntornoSobornoResultadoBajo(): string{
    let result = "No se encuentran indicadores de riesgo que señalen que en el entorno cercano de la persona sea una actividad común el ofrecer o aceptar dinero, regalos, o bienes, a cambio de realizar u omitir una acción determinada.";
    return result;
}
export function getRiesgosEntornoSobornoResultadoMedioBajo(): string{
    let result = "Se presentan señales de reacción emocional respecto al soborno en el entorno, la cual, a pesar de no llegar a ser un indicador de riesgo, si se presenta como un estresor, pudiendo ser una actividad que se ha presentado en baja incidencia en su contexto cercano.";
    return result;
}
export function getRiesgosEntornoSobornoResultadoMedioAlto(): string{
    let result = "Se presentan indicadores de estrés importante respecto a la participación en actos de soborno, ya sea en el ofrecimiento de dinero o en la entrega de este a cambio de un favor determinado en el entorno,  lo que señala que este acto puede ser cotidiano en el contexto de la persona.";
    return result;
}
export function getRiesgosEntornoSobornoResultadoAlto(): string{
    let result = "Se observa un resultado de riesgo respecto al soborno en su entorno, lo que señala que en el entorno cercano, es común la actividad de compartir común el ofrecer o aceptar dinero, regalos, o bienes, a cambio de realizar u omitir una acción determinada.";
    return result;
}

export function getRiesgosEntornoInformacionFalsaDefinicion(): string{
    let result = "Proporcionar reportes inexactos e información alterada, mintiendo o distorsionando sobre asuntos relativos a su trabajo a sus superiores.";
    return result;
}
export function getRiesgosEntornoInformacionFalsaResultadoBajo(): string{
    let result = "No se encuentran indicadores de riesgo que señalen que en el entorno cercano de la persona sea una actividad común el proporcionar reportes inexactos e información alterada, miente o distorsiona infromación sobre asuntos relativos a su trabajo a sus superiores.";
    return result;
}
export function getRiesgosEntornoInformacionFalsaResultadoMedioBajo(): string{
    let result = "Se presentan señales de reacción emocional respecto a la tendencia en el entorno a proporcionar reportes inexactos e información alterada, mientir o distorsionar infromación relativa a su trabajo a sus superiores en el entorno, la cual, a pesar de no llegar a ser un indicador de riesgo, si se presenta como un estresor, pudiendo ser una actividad que se ha presentado en baja incidencia en su contexto cercano.";
    return result;
}
export function getRiesgosEntornoInformacionFalsaResultadoMedioAlto(): string{
    let result = "Se presentan indicadores de estrés importante respecto al acto de proporcionar reportes inexactos e información alterada, a mentir y distorsionar sobre el trabajo en su entorno, indicando que son prácticas con las que la persona está familiarizada ya que se presentan de forma cotidiana en su contexto.";
    return result;
}
export function getRiesgosEntornoInformacionFalsaResultadoAlto(): string{
    let result = "Se observa un resultado de riesgo respecto proporcionar reportes inexactos e información alterada, mentir o distorsionar información relativa a su trabajo a sus superiores en su entorno, lo que señala que en el contexto cercano, esta actividad se presenta con alta incidencia.";
    return result;
}

export function getRiesgosEntornoDrogasDefinicion(): string{
    let result = "Consumo de estupefaciones dentro del horario laboral.";
    return result;
}
export function getRiesgosEntornoDrogasResultadoBajo(): string{
    let result = "No se encuentran indicadores de riesgo que señalen que en el entorno cercano de la persona el consumo de estupefacientes dentro del horario laboral sea una conducta común o normalizada.";
    return result;
}
export function getRiesgosEntornoDrogasResultadoMedioBajo(): string{
    let result = "Se presentan señales de reacción emocional respecto al consumo de estupefacientes dentro del horario laboral en el entorno , la cual, a pesar de no llegar a ser un indicador de riesgo, si se presenta como un estresor, pudiendo ser una actividad que se ha presentado en baja incidencia en su contexto cercano.";
    return result;
}
export function getRiesgosEntornoDrogasResultadoMedioAlto(): string{
    let result = "Se presentan indicadores de estrés importante respecto al consumo de drogas en el trabajo dentro de su entorno laboral, lo que señala que en este contexto, el consumo de estupefacientes en el trabajo es conocido y cotidiano, viviéndolo de forma cercana.";
    return result;
}
export function getRiesgosEntornoDrogasResultadoAlto(): string{
    let result = "Se observa un resultado de riesgo en el entorno respecto al consumo de estupefacientes dentro del horario laboral, lo que señala que en el contexto cercano, esta actividad se presenta con alta incidencia.";
    return result;
}

export function getRiesgosEntornoAlcoholDefinicion(): string{
    let result = "Ingerir bebidas embriagantes durante la jornada lanboral.";
    return result;
}
export function getRiesgosEntornoAlcoholResultadoBajo(): string{
    let result = "No se encuentran indicadores de riesgo que señalen que en el entorno cercano de la persona la ingesta de bebidas embriagantes durante la jornada laboral sea una conducta común o normalizada.";
    return result;
}
export function getRiesgosEntornoAlcoholResultadoMedioBajo(): string{
    let result = "Se presentan señales de reacción emocional respecto a la ingesta de bebidas embriagantes durante la jornada laboralen el entorno , la cual, a pesar de no llegar a ser un indicador de riesgo, si se presenta como un estresor, pudiendo ser una actividad que se ha presentado en baja incidencia en su contexto cercano.";
    return result;
}
export function getRiesgosEntornoAlcoholResultadoMedioAlto(): string{
    let result = "Se presentan indicadores de estrés importante respecto al consumo de alcohol en el trabajo dentro de su entorno laboral, lo que señala que en este contexto, el consumo de bebdidas embriagantes o presentarse en estado no conveniente al trabajo es conocido y cotidiano, viviéndolo de forma cercana.";
    return result;
}
export function getRiesgosEntornoAlcoholResultadoAlto(): string{
    let result = "Se observa un resultado de riesgo en el entorno respecto a la cingesta de bebidas embriagantes durante la jornada laboral, lo que señala que en el contexto cercano, esta actividad se presenta con alta incidencia.";
    return result;
}

export function getRiesgosEntornoApuestasDefinicion(): string{
    let result = "Tendencia a realizar apuestas de forma recurrente, dentro y fuera del horario laboral con sumas de dinero que pueden superar los ingresos del evaluado.";
    return result;
}
export function getRiesgosEntornoApuestasResultadoBajo(): string{
    let result = "No se encuentran indicadores de riesgo que señalen que en el entorno cercano de la persona sea un práctica común la tendencia a realizar apuestas de forma recurrente, dentro y fuera del horario laboral.";
    return result;
}
export function getRiesgosEntornoApuestasResultadoMedioBajo(): string{
    let result = "Se presentan señales de reacción emocional respecto a la tendencia a realizar apuestas de forma recurrente, dentro y fuera del horario laboral en el entorno, la cual, a pesar de no llegar a ser un indicador de riesgo, si se presenta como un estresor, pudiendo ser una actividad que se ha presentado en baja incidencia en su contexto cercano.";
    return result;
}
export function getRiesgosEntornoApuestasResultadoMedioAlto(): string{
    let result = "Se presentan indicadores de estrés importante respecto a la  tendencia a realizar apuestas de altas sumas en su entorno, lo cual indica un posible riesgo de en el contexto, en el que se normaliza esta actividad.";
    return result;
}
export function getRiesgosEntornoApuestasResultadoAlto(): string{
    let result = "Se observa un resultado de riesgo en el entorno respecto a la tendencia a realizar apuestas de forma recurrente, dentro y fuera del horario laboral, lo cual señala que esta actividad se presenta con alta incidencia en el contexto cercano del sujeto.";
    return result;
}

export function getRiesgosEntornoGrupoDelictivoDefinicion(): string{
    let result = "Vinculación o participación con grupos delictivos o pandillas en la comisión de delitos.";
    return result;
}
export function getRiesgosEntornoGrupoDelictivoResultadoBajo(): string{
    let result = "No se encuentran indicadores de riesgo que señalen que en el entorno cercano de la persona sea un práctica común la vinculación con grupos delitivos o pandillas para la comisión de delitos.";
    return result;
}
export function getRiesgosEntornoGrupoDelictivoResultadoMedioBajo(): string{
    let result = "Se presentan señales de reacción emocional respecto a la vinculación con grupos delitivos o pandillas para la comisión de delitos en el entorno, la cual, a pesar de no llegar a ser un indicador de riesgo, si se presenta como un estresor, pudiendo ser una actividad que se ha presentado en baja incidencia en su contexto cercano.";
    return result;
}
export function getRiesgosEntornoGrupoDelictivoResultadoMedioAlto(): string{
    let result = "Se presentan indicadores de estrés importante respecto a la pertenencia a grupos delictivos, lo que indica que existe un riesgo latente en el entorno, en el cual, la presencia de grupos delictivos y personas conocidas del evaluado vinculadas a ellos existe.";
    return result;
}
export function getRiesgosEntornoGrupoDelictivoResultadoAlto(): string{
    let result = "Se observa un resultado de riesgo en el entorno respecto a la tendencia a estar vinculados con grupos delitivos o pandillas para la comisión de delitos, lo que indica que en el entorno, esta actividad se presenta con alta incidencia haciendolo un entorno de riesgo.";
    return result;
}

export function getRiesgosEntornoExtorsionDefinicion(): string{
    let result = "Obligar a una persona, a través de la utilización de violencia o intimidación, a realizar u omitir un acto  con ánimo de lucro y con la intención de producir un perjuicio de carácter patrimonial o bien de un sujeto.";
    return result;
}
export function getRiesgosEntornoExtorsionResultadoBajo(): string{
    let result = "No se encuentran indicadores de riesgo que señalen que en el entorno cercano de la persona sea un práctica común el uso de violencia o intimidación, para realizar u omitir un acto  con ánimo de lucro y con la intención de producir un perjuicio de carácter patrimonial o bien de un sujeto.";
    return result;
}
export function getRiesgosEntornoExtorsionResultadoMedioBajo(): string{
    let result = "Se presentan señales de reacción emocional respecto al uso de violencia o intimidación, para realizar u omitir un acto  con ánimo de lucro y con la intención de producir un perjuicio de carácter patrimonial o bien de un sujeto en el entorno, la cual, a pesar de no llegar a ser un indicador de riesgo, si se presenta como un estresor, pudiendo ser una actividad que se ha presentado en baja incidencia en su contexto cercano.";
    return result;
}
export function getRiesgosEntornoExtorsionResultadoMedioAlto(): string{
    let result = "Los indicadores biométricos detectan una reacción emocional importante al momento de abordar el uso de la violencia o intimidación para realizar u omitir actos con ánimo de lucro en el entorno cercano, indicando que la extorsión se mantiene como un fenómeno recurrente en el entorno.";
    return result;
}
export function getRiesgosEntornoExtorsionResultadoAlto(): string{
    let result = "Se observa un resultado de riesgo en el entorno respecto al  uso de violencia o intimidación, para realizar u omitir un acto  con ánimo de lucro y con la intención de producir un perjuicio de carácter patrimonial o bien de un sujeto, por lo que esta actividad se presenta con alta incidencia en el contexto cercano, haciéndolo un entorno de riesgo.";
    return result;
}

/**
 * Recursos Humanos
 * Grupo: REFERENCIAS
 */

export function getReferenciasDefinicion(): string{
    let result = "Evaluación de antecedentas laborales desde la autopercepción sobre relaciones con jefes anteriores, posibilidad de ser recontratado, conflictos y accidentes en anteriores empleos.";
    return result;
}
export function getReferenciasResultadoAlto(): string{
    let result = "La persona ha respondido en general de forma veráz las referencias y experiencias previas en otros trabajos por lo que las respuestas otorgadas pueden ser consideradas fidedignas. No se encuentran indicios de alerta respecto a referencias laborales.";
    return result;
}
export function getReferenciasResultadoMedioAlto(): string{
    let result = "Los  resultados obtenidos por la persona evaluada, señalan que la información ha sido proporcionada de forma distorsionada en lo relativo a la autocalificación de las competencias (insertarlas), lo cual indica que pudo haber una ligera exageración o minización del verdadero desempeño y apego a las competencias.";
    return result;
}
export function getReferenciasResultadoMedioBajo(): string{
    let result = "Los resultados obtenidos por la persona evaluada, señalan que la información ha sido proporcionada en su mayoría de forma distorsionada en lo relativo a las referencias, lo cual indica que pudo haber una exageración o minización del verdadero desempeño y apego a las competencias.";
    return result;
}
export function getReferenciasResultadoBajo(): string{
    let result = "En general la persona ha respondido de forma poco veráz en lo referente a su autocalificación en las competencias (insertarlas) y en apego a las competencias (insertarlas) lo cual indica que la información proporcionada no puede ser considerada fidedigna.";
    return result;
}