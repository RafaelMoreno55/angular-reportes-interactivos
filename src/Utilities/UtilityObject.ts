export function metodoArbolDecision(fraude: string, competenciasApego: string, competenciasAutocalificacion: string, competenciasVeracidad: string, riesgosPersonales: string, riesgosEntorno: string, referencias: string): string{
    let textoDescripcion = "";
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "alto" && riesgosEntorno == "alto" && referencias == "alto") {
        textoDescripcion = getFraudeResultadoBajo() + " Así mismo. " + getReferenciasResultadoAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoAlto() + " Así mismo. " + getRiesgosEntornoResultadoAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "alto" && riesgosEntorno == "alto" && referencias == "medioAlto") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedioAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoAlto() + " Así mismo. " + getRiesgosEntornoResultadoAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "alto" && riesgosEntorno == "alto" && referencias == "medioBajo") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedio() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoAlto() + " Así mismo. " + getRiesgosEntornoResultadoAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "alto" && riesgosEntorno == "alto" && referencias == "bajo") { //4
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoBajo() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoAlto() + " Así mismo. " + getRiesgosEntornoResultadoAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "alto" && riesgosEntorno == "medioAlto" && referencias == "alto") {
        textoDescripcion = getFraudeResultadoBajo() + " Así mismo. " + getReferenciasResultadoAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoAlto() + " Sin embargo. " + getRiesgosEntornoResultadoMedioAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "alto" && riesgosEntorno == "medioAlto" && referencias == "medioAlto") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedioAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoAlto() + " Sin embargo. " + getRiesgosEntornoResultadoMedioAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "alto" && riesgosEntorno == "medioAlto" && referencias == "medioBajo") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedio() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoAlto() + " Sin embargo. " + getRiesgosEntornoResultadoMedioAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "alto" && riesgosEntorno == "medioAlto" && referencias == "bajo") { //8
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoBajo() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoAlto() + " Sin embargo. " + getRiesgosEntornoResultadoMedioAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "alto" && riesgosEntorno == "medioBajo" && referencias == "alto") {
        textoDescripcion = getFraudeResultadoBajo() + " Así mismo. " + getReferenciasResultadoAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoAlto() + " Sin embargo. " + getRiesgosEntornoResultadoMedio();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "alto" && riesgosEntorno == "medioBajo" && referencias == "medioAlto") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedioAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoAlto() + " Sin embargo. " + getRiesgosEntornoResultadoMedio();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "alto" && riesgosEntorno == "medioBajo" && referencias == "medioBajo") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedio() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoAlto() + " Sin embargo. " + getRiesgosEntornoResultadoMedio();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "alto" && riesgosEntorno == "medioBajo" && referencias == "bajo") { //12
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoBajo() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoAlto() + " Sin embargo. " + getRiesgosEntornoResultadoMedio();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "alto" && riesgosEntorno == "bajo" && referencias == "alto") {
        textoDescripcion = getFraudeResultadoBajo() + " Así mismo. " + getReferenciasResultadoAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoAlto() + " Sin embargo. " + getRiesgosEntornoResultadoBajo();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "alto" && riesgosEntorno == "bajo" && referencias == "medioAlto") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedioAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoAlto() + " Sin embargo. " + getRiesgosEntornoResultadoBajo();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "alto" && riesgosEntorno == "bajo" && referencias == "medioBajo") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedio() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoAlto() + " Sin embargo. " + getRiesgosEntornoResultadoBajo();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "alto" && riesgosEntorno == "bajo" && referencias == "bajo") { //16
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoBajo() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoAlto() + " Sin embargo. " + getRiesgosEntornoResultadoBajo();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "medioAlto" && riesgosEntorno == "alto" && referencias == "alto") {
        textoDescripcion = getFraudeResultadoBajo() + " Así mismo. " + getReferenciasResultadoAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedioAlto() + " Sin embargo. " + getRiesgosEntornoResultadoAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "medioAlto" && riesgosEntorno == "alto" && referencias == "medioAlto") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedioAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedioAlto() + " Sin embargo. " + getRiesgosEntornoResultadoAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "medioAlto" && riesgosEntorno == "alto" && referencias == "medioBajo") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedio() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedioAlto() + " Sin embargo. " + getRiesgosEntornoResultadoAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "medioAlto" && riesgosEntorno == "alto" && referencias == "bajo") { //20
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoBajo() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedioAlto() + " Sin embargo. " + getRiesgosEntornoResultadoAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "medioAlto" && riesgosEntorno == "medioAlto" && referencias == "alto") {
        textoDescripcion = getFraudeResultadoBajo() + " Así mismo. " + getReferenciasResultadoAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedioAlto() + " Sin embargo. " + getRiesgosEntornoResultadoMedioAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "medioAlto" && riesgosEntorno == "medioAlto" && referencias == "medioAlto") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedioAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedioAlto() + " Sin embargo. " + getRiesgosEntornoResultadoMedioAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "medioAlto" && riesgosEntorno == "medioAlto" && referencias == "medioBajo") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedio() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedioAlto() + " Sin embargo. " + getRiesgosEntornoResultadoMedioAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "medioAlto" && riesgosEntorno == "medioAlto" && referencias == "bajo") { //24
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoBajo() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedioAlto() + " Sin embargo. " + getRiesgosEntornoResultadoMedioAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "medioAlto" && riesgosEntorno == "medioBajo" && referencias == "alto") {
        textoDescripcion = getFraudeResultadoBajo() + " Así mismo. " + getReferenciasResultadoAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedioAlto() + " Sin embargo. " + getRiesgosEntornoResultadoMedio();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "medioAlto" && riesgosEntorno == "medioBajo" && referencias == "medioAlto") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedioAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedioAlto() + " Sin embargo. " + getRiesgosEntornoResultadoMedio();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "medioAlto" && riesgosEntorno == "medioBajo" && referencias == "medioBajo") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedio() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedioAlto() + " Sin embargo. " + getRiesgosEntornoResultadoMedio();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "medioAlto" && riesgosEntorno == "medioBajo" && referencias == "bajo") { //28
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoBajo() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedioAlto() + " Sin embargo. " + getRiesgosEntornoResultadoMedio();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "medioAlto" && riesgosEntorno == "bajo" && referencias == "alto") {
        textoDescripcion = getFraudeResultadoBajo() + " Así mismo. " + getReferenciasResultadoAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedioAlto() + " Sin embargo. " + getRiesgosEntornoResultadoBajo();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "medioAlto" && riesgosEntorno == "bajo" && referencias == "medioAlto") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedioAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedioAlto() + " Sin embargo. " + getRiesgosEntornoResultadoBajo();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "medioAlto" && riesgosEntorno == "bajo" && referencias == "medioBajo") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedio() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedioAlto() + " Sin embargo. " + getRiesgosEntornoResultadoBajo();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "medioAlto" && riesgosEntorno == "bajo" && referencias == "bajo") { //32
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoBajo() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedioAlto() + " Sin embargo. " + getRiesgosEntornoResultadoBajo();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "medioBajo" && riesgosEntorno == "alto" && referencias == "alto") {
        textoDescripcion = getFraudeResultadoBajo() + " Así mismo. " + getReferenciasResultadoAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedio() + " Sin embargo. " + getRiesgosEntornoResultadoAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "medioBajo" && riesgosEntorno == "alto" && referencias == "medioAlto") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedioAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedio() + " Sin embargo. " + getRiesgosEntornoResultadoAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "medioBajo" && riesgosEntorno == "alto" && referencias == "medioBajo") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedio() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedio() + " Sin embargo. " + getRiesgosEntornoResultadoAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "medioBajo" && riesgosEntorno == "alto" && referencias == "bajo") { //36
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoBajo() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedio() + " Sin embargo. " + getRiesgosEntornoResultadoAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "medioBajo" && riesgosEntorno == "medioAlto" && referencias == "alto") {
        textoDescripcion = getFraudeResultadoBajo() + " Así mismo. " + getReferenciasResultadoAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedio() + " Sin embargo. " + getRiesgosEntornoResultadoMedioAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "medioBajo" && riesgosEntorno == "medioAlto" && referencias == "medioAlto") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedioAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedio() + " Sin embargo. " + getRiesgosEntornoResultadoMedioAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "medioBajo" && riesgosEntorno == "medioAlto" && referencias == "medioBajo") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedio() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedio() + " Sin embargo. " + getRiesgosEntornoResultadoMedioAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "medioBajo" && riesgosEntorno == "medioAlto" && referencias == "bajo") { //40
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoBajo() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedio() + " Sin embargo. " + getRiesgosEntornoResultadoMedioAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "medioBajo" && riesgosEntorno == "medioBajo" && referencias == "alto") {
        textoDescripcion = getFraudeResultadoBajo() + " Así mismo. " + getReferenciasResultadoAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedio() + " Sin embargo. " + getRiesgosEntornoResultadoMedio();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "medioBajo" && riesgosEntorno == "medioBajo" && referencias == "medioAlto") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedioAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedio() + " Sin embargo. " + getRiesgosEntornoResultadoMedio();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "medioBajo" && riesgosEntorno == "medioBajo" && referencias == "medioBajo") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedio() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedio() + " Sin embargo. " + getRiesgosEntornoResultadoMedio();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "medioBajo" && riesgosEntorno == "medioBajo" && referencias == "bajo") { //44
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoBajo() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedio() + " Sin embargo. " + getRiesgosEntornoResultadoMedio();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "medioBajo" && riesgosEntorno == "bajo" && referencias == "alto") {
        textoDescripcion = getFraudeResultadoBajo() + " Así mismo. " + getReferenciasResultadoAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedio() + " Sin embargo. " + getRiesgosEntornoResultadoBajo();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "medioBajo" && riesgosEntorno == "bajo" && referencias == "medioAlto") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedioAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedio() + " Sin embargo. " + getRiesgosEntornoResultadoBajo();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "medioBajo" && riesgosEntorno == "bajo" && referencias == "medioBajo") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedio() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedio() + " Sin embargo. " + getRiesgosEntornoResultadoBajo();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "medioBajo" && riesgosEntorno == "bajo" && referencias == "bajo") { //48
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoBajo() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedio() + " Sin embargo. " + getRiesgosEntornoResultadoBajo();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "bajo" && riesgosEntorno == "alto" && referencias == "alto") {
        textoDescripcion = getFraudeResultadoBajo() + " Así mismo. " + getReferenciasResultadoAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoBajo() + " Sin embargo. " + getRiesgosEntornoResultadoAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "bajo" && riesgosEntorno == "alto" && referencias == "medioAlto") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedioAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoBajo() + " Sin embargo. " + getRiesgosEntornoResultadoAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "bajo" && riesgosEntorno == "alto" && referencias == "medioBajo") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedio() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoBajo() + " Sin embargo. " + getRiesgosEntornoResultadoAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "bajo" && riesgosEntorno == "alto" && referencias == "bajo") { //52
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoBajo() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoBajo() + " Sin embargo. " + getRiesgosEntornoResultadoAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "bajo" && riesgosEntorno == "medioAlto" && referencias == "alto") {
        textoDescripcion = getFraudeResultadoBajo() + " Así mismo. " + getReferenciasResultadoAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoBajo() + " Sin embargo. " + getRiesgosEntornoResultadoMedioAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "bajo" && riesgosEntorno == "medioAlto" && referencias == "medioAlto") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedioAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoBajo() + " Sin embargo. " + getRiesgosEntornoResultadoMedioAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "bajo" && riesgosEntorno == "medioAlto" && referencias == "medioBajo") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedio() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoBajo() + " Sin embargo. " + getRiesgosEntornoResultadoMedioAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "bajo" && riesgosEntorno == "medioAlto" && referencias == "bajo") { //56
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoBajo() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoBajo() + " Sin embargo. " + getRiesgosEntornoResultadoMedioAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "bajo" && riesgosEntorno == "medioBajo" && referencias == "alto") {
        textoDescripcion = getFraudeResultadoBajo() + " Así mismo. " + getReferenciasResultadoAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoBajo() + " Sin embargo. " + getRiesgosEntornoResultadoMedio();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "bajo" && riesgosEntorno == "medioBajo" && referencias == "medioAlto") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedioAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoBajo() + " Sin embargo. " + getRiesgosEntornoResultadoMedio();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "bajo" && riesgosEntorno == "medioBajo" && referencias == "medioBajo") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedio() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoBajo() + " Sin embargo. " + getRiesgosEntornoResultadoMedio();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "bajo" && riesgosEntorno == "medioBajo" && referencias == "bajo") { //60
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoBajo() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoBajo() + " Sin embargo. " + getRiesgosEntornoResultadoMedio();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "bajo" && riesgosEntorno == "bajo" && referencias == "alto") {
        textoDescripcion = getFraudeResultadoBajo() + " Así mismo. " + getReferenciasResultadoAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoBajo() + " Sin embargo. " + getRiesgosEntornoResultadoBajo();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "bajo" && riesgosEntorno == "bajo" && referencias == "medioAlto") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedioAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoBajo() + " Sin embargo. " + getRiesgosEntornoResultadoBajo();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "bajo" && riesgosEntorno == "bajo" && referencias == "medioBajo") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedio() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoBajo() + " Sin embargo. " + getRiesgosEntornoResultadoBajo();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "alto" && riesgosPersonales == "bajo" && riesgosEntorno == "bajo" && referencias == "bajo") { //64
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoBajo() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Por otro lado. " + getCompetenciasVeracidadResultadoAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoBajo() + " Sin embargo. " + getRiesgosEntornoResultadoBajo();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "alto" && riesgosEntorno == "alto" && referencias == "alto") {
        textoDescripcion = getFraudeResultadoBajo() + " Así mismo. " + getReferenciasResultadoAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoAlto() + " Así mismo. " + getRiesgosEntornoResultadoAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "alto" && riesgosEntorno == "alto" && referencias == "medioAlto") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedioAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoAlto() + " Así mismo. " + getRiesgosEntornoResultadoAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "alto" && riesgosEntorno == "alto" && referencias == "medioBajo") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedio() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoAlto() + " Así mismo. " + getRiesgosEntornoResultadoAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "alto" && riesgosEntorno == "alto" && referencias == "bajo") { //68
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoBajo() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoAlto() + " Así mismo. " + getRiesgosEntornoResultadoAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "alto" && riesgosEntorno == "medioAlto" && referencias == "alto") {
        textoDescripcion = getFraudeResultadoBajo() + " Así mismo. " + getReferenciasResultadoAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoAlto() + " Sin embargo. " + getRiesgosEntornoResultadoMedioAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "alto" && riesgosEntorno == "medioAlto" && referencias == "medioAlto") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedioAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoAlto() + " Sin embargo. " + getRiesgosEntornoResultadoMedioAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "alto" && riesgosEntorno == "medioAlto" && referencias == "medioBajo") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedio() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoAlto() + " Sin embargo. " + getRiesgosEntornoResultadoMedioAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "alto" && riesgosEntorno == "medioAlto" && referencias == "bajo") { //72
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoBajo() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoAlto() + " Sin embargo. " + getRiesgosEntornoResultadoMedioAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "alto" && riesgosEntorno == "medioBajo" && referencias == "alto") {
        textoDescripcion = getFraudeResultadoBajo() + " Así mismo. " + getReferenciasResultadoAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoAlto() + " Sin embargo. " + getRiesgosEntornoResultadoMedio();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "alto" && riesgosEntorno == "medioBajo" && referencias == "medioAlto") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedioAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoAlto() + " Sin embargo. " + getRiesgosEntornoResultadoMedio();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "alto" && riesgosEntorno == "medioBajo" && referencias == "medioBajo") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedio() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoAlto() + " Sin embargo. " + getRiesgosEntornoResultadoMedio();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "alto" && riesgosEntorno == "medioBajo" && referencias == "bajo") { //76
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoBajo() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoAlto() + " Sin embargo. " + getRiesgosEntornoResultadoMedio();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "alto" && riesgosEntorno == "bajo" && referencias == "alto") {
        textoDescripcion = getFraudeResultadoBajo() + " Así mismo. " + getReferenciasResultadoAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoAlto() + " Sin embargo. " + getRiesgosEntornoResultadoBajo();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "alto" && riesgosEntorno == "bajo" && referencias == "medioAlto") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedioAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoAlto() + " Sin embargo. " + getRiesgosEntornoResultadoBajo();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "alto" && riesgosEntorno == "bajo" && referencias == "medioBajo") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedio() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoAlto() + " Sin embargo. " + getRiesgosEntornoResultadoBajo();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "alto" && riesgosEntorno == "bajo" && referencias == "bajo") { //80
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoBajo() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoAlto() + " Sin embargo. " + getRiesgosEntornoResultadoBajo();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "medioAlto" && riesgosEntorno == "alto" && referencias == "alto") {
        textoDescripcion = getFraudeResultadoBajo() + " Así mismo. " + getReferenciasResultadoAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedioAlto() + " Sin embargo. " + getRiesgosEntornoResultadoAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "medioAlto" && riesgosEntorno == "alto" && referencias == "medioAlto") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedioAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedioAlto() + " Sin embargo. " + getRiesgosEntornoResultadoAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "medioAlto" && riesgosEntorno == "alto" && referencias == "medioBajo") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedio() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedioAlto() + " Sin embargo. " + getRiesgosEntornoResultadoAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "medioAlto" && riesgosEntorno == "alto" && referencias == "bajo") { //84
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoBajo() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedioAlto() + " Sin embargo. " + getRiesgosEntornoResultadoAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "medioAlto" && riesgosEntorno == "medioAlto" && referencias == "alto") {
        textoDescripcion = getFraudeResultadoBajo() + " Así mismo. " + getReferenciasResultadoAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedioAlto() + " Sin embargo. " + getRiesgosEntornoResultadoMedioAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "medioAlto" && riesgosEntorno == "medioAlto" && referencias == "medioAlto") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedioAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedioAlto() + " Sin embargo. " + getRiesgosEntornoResultadoMedioAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "medioAlto" && riesgosEntorno == "medioAlto" && referencias == "medioBajo") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedio() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedioAlto() + " Sin embargo. " + getRiesgosEntornoResultadoMedioAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "medioAlto" && riesgosEntorno == "medioAlto" && referencias == "bajo") { //88
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoBajo() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedioAlto() + " Sin embargo. " + getRiesgosEntornoResultadoMedioAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "medioAlto" && riesgosEntorno == "medioBajo" && referencias == "alto") {
        textoDescripcion = getFraudeResultadoBajo() + " Así mismo. " + getReferenciasResultadoAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedioAlto() + " Sin embargo. " + getRiesgosEntornoResultadoMedio();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "medioAlto" && riesgosEntorno == "medioBajo" && referencias == "medioAlto") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedioAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedioAlto() + " Sin embargo. " + getRiesgosEntornoResultadoMedio();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "medioAlto" && riesgosEntorno == "medioBajo" && referencias == "medioBajo") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedio() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedioAlto() + " Sin embargo. " + getRiesgosEntornoResultadoMedio();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "medioAlto" && riesgosEntorno == "medioBajo" && referencias == "bajo") { //92
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoBajo() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedioAlto() + " Sin embargo. " + getRiesgosEntornoResultadoMedio();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "medioAlto" && riesgosEntorno == "bajo" && referencias == "alto") {
        textoDescripcion = getFraudeResultadoBajo() + " Así mismo. " + getReferenciasResultadoAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedioAlto() + " Sin embargo. " + getRiesgosEntornoResultadoBajo();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "medioAlto" && riesgosEntorno == "bajo" && referencias == "medioAlto") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedioAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedioAlto() + " Sin embargo. " + getRiesgosEntornoResultadoBajo();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "medioAlto" && riesgosEntorno == "bajo" && referencias == "medioBajo") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedio() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedioAlto() + " Sin embargo. " + getRiesgosEntornoResultadoBajo();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "medioAlto" && riesgosEntorno == "bajo" && referencias == "bajo") { //96
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoBajo() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedioAlto() + " Sin embargo. " + getRiesgosEntornoResultadoBajo();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "medioBajo" && riesgosEntorno == "alto" && referencias == "alto") {
        textoDescripcion = getFraudeResultadoBajo() + " Así mismo. " + getReferenciasResultadoAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedio() + " Sin embargo. " + getRiesgosEntornoResultadoAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "medioBajo" && riesgosEntorno == "alto" && referencias == "medioAlto") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedioAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedio() + " Sin embargo. " + getRiesgosEntornoResultadoAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "medioBajo" && riesgosEntorno == "alto" && referencias == "medioBajo") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedio() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedio() + " Sin embargo. " + getRiesgosEntornoResultadoAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "medioBajo" && riesgosEntorno == "alto" && referencias == "bajo") { //100
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoBajo() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedio() + " Sin embargo. " + getRiesgosEntornoResultadoAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "medioBajo" && riesgosEntorno == "medioAlto" && referencias == "alto") {
        textoDescripcion = getFraudeResultadoBajo() + " Así mismo. " + getReferenciasResultadoAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedio() + " Sin embargo. " + getRiesgosEntornoResultadoMedioAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "medioBajo" && riesgosEntorno == "medioAlto" && referencias == "medioAlto") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedioAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedio() + " Sin embargo. " + getRiesgosEntornoResultadoMedioAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "medioBajo" && riesgosEntorno == "medioAlto" && referencias == "medioBajo") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedio() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedio() + " Sin embargo. " + getRiesgosEntornoResultadoMedioAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "medioBajo" && riesgosEntorno == "medioAlto" && referencias == "bajo") { //104
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoBajo() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedio() + " Sin embargo. " + getRiesgosEntornoResultadoMedioAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "medioBajo" && riesgosEntorno == "medioBajo" && referencias == "alto") {
        textoDescripcion = getFraudeResultadoBajo() + " Así mismo. " + getReferenciasResultadoAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedio() + " Sin embargo. " + getRiesgosEntornoResultadoMedio();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "medioBajo" && riesgosEntorno == "medioBajo" && referencias == "medioAlto") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedioAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedio() + " Sin embargo. " + getRiesgosEntornoResultadoMedio();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "medioBajo" && riesgosEntorno == "medioBajo" && referencias == "medioBajo") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedio() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedio() + " Sin embargo. " + getRiesgosEntornoResultadoMedio();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "medioBajo" && riesgosEntorno == "medioBajo" && referencias == "bajo") { //108
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoBajo() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedio() + " Sin embargo. " + getRiesgosEntornoResultadoMedio();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "medioBajo" && riesgosEntorno == "bajo" && referencias == "alto") {
        textoDescripcion = getFraudeResultadoBajo() + " Así mismo. " + getReferenciasResultadoAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedio() + " Sin embargo. " + getRiesgosEntornoResultadoBajo();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "medioBajo" && riesgosEntorno == "bajo" && referencias == "medioAlto") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedioAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedio() + " Sin embargo. " + getRiesgosEntornoResultadoBajo();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "medioBajo" && riesgosEntorno == "bajo" && referencias == "medioBajo") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedio() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedio() + " Sin embargo. " + getRiesgosEntornoResultadoBajo();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "medioBajo" && riesgosEntorno == "bajo" && referencias == "bajo") { //112
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoBajo() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoMedio() + " Sin embargo. " + getRiesgosEntornoResultadoBajo();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "bajo" && riesgosEntorno == "alto" && referencias == "alto") {
        textoDescripcion = getFraudeResultadoBajo() + " Así mismo. " + getReferenciasResultadoAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoBajo() + " Sin embargo. " + getRiesgosEntornoResultadoAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "bajo" && riesgosEntorno == "alto" && referencias == "medioAlto") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedioAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoBajo() + " Sin embargo. " + getRiesgosEntornoResultadoAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "bajo" && riesgosEntorno == "alto" && referencias == "medioBajo") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedio() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoBajo() + " Sin embargo. " + getRiesgosEntornoResultadoAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "bajo" && riesgosEntorno == "alto" && referencias == "bajo") { //116
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoBajo() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoBajo() + " Sin embargo. " + getRiesgosEntornoResultadoAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "bajo" && riesgosEntorno == "medioAlto" && referencias == "alto") {
        textoDescripcion = getFraudeResultadoBajo() + " Así mismo. " + getReferenciasResultadoAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoBajo() + " Sin embargo. " + getRiesgosEntornoResultadoMedioAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "bajo" && riesgosEntorno == "medioAlto" && referencias == "medioAlto") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedioAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoBajo() + " Sin embargo. " + getRiesgosEntornoResultadoMedioAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "bajo" && riesgosEntorno == "medioAlto" && referencias == "medioBajo") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedio() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoBajo() + " Sin embargo. " + getRiesgosEntornoResultadoMedioAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "bajo" && riesgosEntorno == "medioAlto" && referencias == "bajo") { //120
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoBajo() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoBajo() + " Sin embargo. " + getRiesgosEntornoResultadoMedioAlto();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "bajo" && riesgosEntorno == "medioBajo" && referencias == "alto") {
        textoDescripcion = getFraudeResultadoBajo() + " Así mismo. " + getReferenciasResultadoAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoBajo() + " Sin embargo. " + getRiesgosEntornoResultadoMedio();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "bajo" && riesgosEntorno == "medioBajo" && referencias == "medioAlto") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedioAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoBajo() + " Sin embargo. " + getRiesgosEntornoResultadoMedio();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "bajo" && riesgosEntorno == "medioBajo" && referencias == "medioBajo") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedio() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoBajo() + " Sin embargo. " + getRiesgosEntornoResultadoMedio();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "bajo" && riesgosEntorno == "medioBajo" && referencias == "bajo") { //124
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoBajo() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoBajo() + " Sin embargo. " + getRiesgosEntornoResultadoMedio();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "bajo" && riesgosEntorno == "bajo" && referencias == "alto") {
        textoDescripcion = getFraudeResultadoBajo() + " Así mismo. " + getReferenciasResultadoAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoBajo() + " Sin embargo. " + getRiesgosEntornoResultadoBajo();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "bajo" && riesgosEntorno == "bajo" && referencias == "medioAlto") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedioAlto() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoBajo() + " Sin embargo. " + getRiesgosEntornoResultadoBajo();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "bajo" && riesgosEntorno == "bajo" && referencias == "medioBajo") {
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoMedio() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoBajo() + " Sin embargo. " + getRiesgosEntornoResultadoBajo();
    }else {
    if (fraude == "bajo" && competenciasApego == "alto" && competenciasAutocalificacion == "alto" && competenciasVeracidad == "medioAlto" && riesgosPersonales == "bajo" && riesgosEntorno == "bajo" && referencias == "bajo") { //128
        textoDescripcion = getFraudeResultadoBajo() + " Sin embargo. " + getReferenciasResultadoBajo() + " En cuanto a las competencias. " + getCompetenciasApegoResultadoAlto() + " Por otro lado. " + getCompetenciasAutocalificacionResultadoAlto() + " Sin embargo. " + getCompetenciasVeracidadResultadoMedioAlto() + " Respecto a los factores de riesgo. " + getRiesgosPersonalesResultadoBajo() + " Sin embargo. " + getRiesgosEntornoResultadoBajo();
    }else {

    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    }
    return textoDescripcion;
}

/**
 * Recursos Humanos
 * Grupo: FRAUDE
 */

export function getFraudeDefinicion(): string{
    let result = "Grupo conformado por tres factores: La posibilidad de que la persona que contesta no sea el candidato o colaborador seleccionado para la entrevista, información cuantitativa y veracidad de información socioeconómica.";
    return result;
}
export function getFraudeResultadoAlto(): string{
    let result = "La persona presenta un riesgo importante de fraude referente a (no es el empleado, nivel socioeconómico o cuantitativa), lo que indica que ha omitido o mentido de forma importante en la información proporcionada.";
    return result;
}
export function getFraudeResultadoMedioAlto(): string{
    let result = "";
    return result;
}
export function getFraudeResultadoMedio(): string{
    let result = "La persona presenta información distorsionada en lo referente a (poner si quien contesta no es el empleado, nivel socioeconómico o cuantitativa), lo que indica que pueden ser factores que le generen estrés al entrevistado, llevandolo a proporcionar información no del todo verídica.";
    return result;
}
export function getFraudeResultadoBajo(): string{
    let result = "La persona que ha respondido la entrevista es quien dice ser, presenta además una consistencia en la información proporcionada referente a sus ingresos y aportaciones familiares, capacidad de pago, información de vivienda y nivel socioeconómico.";
    return result;
}

/**
 * Recursos Humanos
 * Grupo: RIESGO FRAUDE
 */

/* export function getRiesgoFraudeProbabilidadDefinicion(): string{
    let result = "Este factor evalúa que la persona que contesta la entrevista es efectivamente quien dice ser y no fue apoyado o asesorado durante la entrevista por un tercero.";
    return result;
}
export function getRiesgoFraudeProbabilidadResultadoAlto(): string{
    let result = "La persona que ha realizado la entrevista no es quien dice ser o fue apoyado por un tercero durante la entrevista.";
    return result;
}
export function getRiesgoFraudeProbabilidadResultadoMedio(): string{
    let result = "Existen elementos que indican que la persona que contesta la entrevista no es quien dice ser, hubo personas agenas al entrevistado en el lugar de la prueba o recibió algún tipo de ayuda por parte de terceros durante la entrevista. Se recomienda revisar información multimedia.";
    return result;
}
export function getRiesgoFraudeProbabilidadResultadoBajo(): string{
    let result = "La persona que contesta la entrevista es el evaluado seleccionado y no recibió apoyo de ningún tipo por un tercero durante la entrevista.";
    return result;
}
export function getRiesgoFraudeCuantitativaDefinicion(): string{
    let result = "Factor conformado por la evaluación del Sueldo recibido, gasto familiar y capacidad mensual de pago para determinar la situación económica, compara además el ingreso recibido y ofertado con la necesidad familiar real del evaluado al tiempo que es empatada con la reacción emocional para conocer el nivel de riesgo y veracidad de la información proporcionada.";
    return result;
}
export function getRiesgoFraudeCuantitativaResultadoAlto(): string{
    let result = "La información proporcionada no concuerda con la reacción emocional registrada, lo que indica que la persona evaluada puede encontrarse en una situación de desequilibrio entre el ingreso recibido y su necesidad real de gasto, llevándolo a proporcionar información distorsionada.";
    return result;
}
export function getRiesgoFraudeCuantitativaResultadoMedio(): string{
    let result = "La información proporcionada empatada con la reacción emocional indican que la persona puede tener un ligero desequilibrio entre el ingreso recibido y su necesidad real de gasto, registrandose una reacción emocional ligeral que indica una alteración de la información proporcionada.";
    return result;
}
export function getRiesgoFraudeCuantitativaResultadoBajo(): string{
    let result = "La persona evaluada presenta una situación de equilibrio entre el ingreso recibido y su necesidad real de gasto familiar, asimismo, no se registra reacción emocional importante en sus respuestas que puedan apuntalar a que ha proporcionado a información no veraz.";
    return result;
}
export function getRiesgoFraudeSocioeconomicaDefinicion(): string{
    let result = "Validación de datos personales del entrevistado, como, dónde vive, el gasto familiar, que bienes tiene, cuánto tiempo lleva viviendo ahí así como validar sus documentos. Gracias a esto se puede evaluar la certeza de la información proporcionada con el análisis generado por el cruce de la información obtenida en la entrevista.";
    return result;
}
export function getRiesgoFraudeSocioeconomicaResultadoAlto(): string{
    let result = "Los datos personales proporcionados por la persona entrevistada respecto a su contexto, lugar de vivienda, tiempo de recidencia, gasto familiar, bienes, etc. fueron proporcionados de forma veraz y sin reacción emocional importante que pueda indicar un riesgo en esta área.";
    return result;
}
export function getRiesgoFraudeSocioeconomicaResultadoMedio(): string{
    let result = "Los datos personales proporcionados por la persona entrevistada respecto a su contexto, lugar de vivienda, tiempo de recidencia, gasto familiar, bienes, etc. fueron proporcionados de forma distorsionada, se detecta una reacción emocional media que puede indicar que la persona no ha respondido de forma veraz.";
    return result;
}
export function getRiesgoFraudeSocioeconomicaResultadoBajo(): string{
    let result = "Los datos personales proporcionados por la persona entrevistada respecto a su contexto, lugar de vivienda, tiempo de recidencia, gasto familiar, bienes, etc. presentan importantes indicadores de alerta, detectádose una reacción emocional y fisiológica importante, lo cual indica que la persona ha mentido u omitido información en esta área.";
    return result;
} */

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
    let result = "";
    return result;
}
export function getCompetenciasApegoResultadoMedio(): string{
    let result = "se presentan resultados altos en las competencias: (mencionarlas) y bajas / medias en las competencias (mencionarlas) lo cual indica que la persona tiene áreas de oportunidad para desarrollar ciertas habilidades necesarias para ejecutar sus tareas laborales del día a día.";
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
    let result = "";
    return result;
}
export function getCompetenciasAutocalificacionResultadoMedio(): string{
    let result = "opción a) opciones variadas: La persona considera que ha tenido calificaciones variadas en su desempeño dentro de su último trabajo o actual, siendo excelente en (nombrarlas), regular en (nombrarla) y malo en (nombrarlas) Opción b) En general la persona considera que autocalificación en (nombrarlas) ha sido regular en su último trabajo o actual.";
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
    let result = "";
    return result;
}
export function getCompetenciasVeracidadResultadoMedio(): string{
    let result = "Los resultados obtenidos por la persona evaluada, señalan que la información ha sido proporcionada de forma distorsionada en lo relativo a la autocalificación de las competencias (insertarlas), lo cual indica que pudo haber una ligera exageración o minización del verdadero desempeño y apego a las competencias.";
    return result;
}
export function getCompetenciasVeracidadResultadoBajo(): string{
    let result = "En general la persona ha respondido de forma poco veráz en lo referente a su autocalificación en las competencias (insertarlas) y en apego a las competencias (insertarlas) lo cual indica que la información proporcionada no puede ser considerada fidedigna.";
    return result;
}
/* export function getCompetenciasNegociacionDefinicion(): string{
    let result = "Integra los principales rasgos y tendencias necesarias para llevar a cabo una negociación: dominio de argumentos, duerza negociadora, sentido de anticipación y visión negociadora.";
    return result;
}
export function getCompetenciasNegociacionResultadoAlto(): string{
    let result = "Negocia de manera estructurada y consigue buenos resultados y acuerdos provechosos. Aunque las negociaciones sean de carácter difícil, presenta una buena actitud y se gana la credibilidad de los otros.";
    return result;
}
export function getCompetenciasNegociacionResultadoMedio(): string{
    let result = "Sigue un proceso de negociación claro, se prepara la negociación, establece una relación inicial y una orientación y consique un acercamieno de las diferencias, sin embargo, muestra dificultades para mantener su posición y puede tener dificultades en las negociaciones de alta presión.";
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
export function getCompetenciasOrientacionResultadosResultadoMedio(): string{
    let result = "Procura cumplir con sus metas y tareas, a pesar de esto, no realiza evaluaciones peródicas de sus indicadores por lo que pueden existir atrasos en el cumplimiento.";
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
export function getCompetenciasHabilidadComunicacionResultadoMedio(): string{
    let result = "Se preocupa por conocer la situación de aquel con el que interactúa, en ocasiones puede tener dificultades para transmitir o recibir un mensaje de la forma correcta.";
    return result;
}
export function getCompetenciasHabilidadComunicacionResultadoBajo(): string{
    let result = "Manifiesta tener las ideas claras costándole el saber transmitirlas,  se expresa de manera poco estructurada, poco clara y existe dificultad para entender lo que otros intentan comunicarle.";
    return result;
}
export function getCompetenciasOrientacionServicioDefinicion(): string{
    let result = "Habilidad para hacer el trabajo con una mentalidad de eficiente atención al cliente, considerando a éste último como cualquier persona que requiera de su servicio, manteniendo un visión de valoración del cliente y del servicio.";
    return result;
}
export function getCompetenciasOrientacionServicioResultadoAlto(): string{
    let result = "Escucha de manera activa y valora las peticiones de los clientes, estudia las necesidades del cliente y analiza sus expectativas para establecer relaciones de confianza con él y cubrirlas, los asesora para cubrir sus necesidades y demandas con el mínimo coste posible.";
    return result;
}
export function getCompetenciasOrientacionServicioResultadoMedio(): string{
    let result = "Realiza conductas orientadas a percibir y cubrir las necesidades de los clientes de manera satisfactoria y de una manera estructurada, mostrándose amable y servicial aunque no siempre consigue cubrirlas.";
    return result;
}
export function getCompetenciasOrientacionServicioResultadoBajo(): string{
    let result = "No se observan conductas que demuestren interés por conocer las expectativas y demandas de los clientes, puede captar la demanda explícita del cliente, sin embargo, su conducta no es proactiva, es decir, no realiza acciones orientadas a descubrir la base de sus necesidades pero intenta obtener resultados alternativos.";
    return result;
}
export function getCompetenciasLiderazgoDefinicion(): string{
    let result = "Intención  y habilidad para asumir el rol de líder de un equipo o de un grupo de personas. Dirige y aconseja a los miembros de su equipo en el desempeño del trabajo, siendo capaz de orientar adecuada y eficazmente el mismo hacia las metas establecidas.";
    return result;
}
export function getCompetenciasLiderazgoResultadoAlto(): string{
    let result = "Le es facil asumir el rol de lider de grupo, dejando claro aquello que dice, propone y quiere llevar a la práctica, se percata del estado y situación del otro consiguiendo finalmente aquello que persigue de éste.";
    return result;
}
export function getCompetenciasLiderazgoResultadoMedio(): string{
    let result = "Identifica el impacto que sus actuaciones tendrán sobre las otras personas, suele causar buena impresión aunque le cuesta mantenerla debido a que la fuerza demasiado, puede lograr ser lider de grupo aunque no de forma sencilla o nata.";
    return result;
}
export function getCompetenciasLiderazgoResultadoBajo(): string{
    let result = "Es una persona más bien retraida con tendencia  al trato puramente funcional, no le es facil integrarse a grupos de trabajo o dirigirlos, aunque en situaciones puntuales y bajo imperativo laboral puede lograrlo.";
    return result;
}
export function getCompetenciasAnaliticoDefinicion(): string{
    let result = "Capacidad para tomar decisiones a través del análisis de múltiples variables, interpretarlas e integrarlas en miras de lograr un objetivo de la manera más efectiva.";
    return result;
}
export function getCompetenciasAnaliticoResultadoAlto(): string{
    let result = "Identifica y anticipa problemas, los aborda y aporta nuevas vías de solución, es capaz de hacer un análisis de multiples variables para interpretarlas e integrarlas en miras de lograr un objetivo de la manera más efectiva.";
    return result;
}
export function getCompetenciasAnaliticoResultadoMedio(): string{
    let result = "En ocasiones, identifica los problemas, los analiza y concluye con su solución.";
    return result;
}
export function getCompetenciasAnaliticoResultadoBajo(): string{
    let result = "Únicamente es consciente de una problemática bien cuando le abordan resultados inesperados, le es dificil priorizar y se centra únicamente en aquellos aspectos que le afectan directamente.";
    return result;
}
export function getCompetenciasPlaneacionDefinicion(): string{
    let result = "Habilidad para ordenar y coordinar las acciones de trabajo, sean propias o ajenas. Anticipando, planificando y organizando tareas y proyectos a través de decisiones apropiadas y con los recursos disponibles.";
    return result;
}
export function getCompetenciasPlaneacionResultadoAlto(): string{
    let result = "Logra ordenar y coordinar las acciones de trabajo, sean propias o ajenas, anticipando, planificando y organizando tareas y proyectos a través de decisiones apropiadas y con los recursos disponible.";
    return result;
}
export function getCompetenciasPlaneacionResultadoMedio(): string{
    let result = "Establece prioridades de actuación en base a la urgencia de la tarea sin tener en cuenta su importancia. Se interesa por planificar y organizar el trabajo aunque no siempre logra ejecutarlo conforma a lo planeado.";
    return result;
}
export function getCompetenciasPlaneacionResultadoBajo(): string{
    let result = "Realiza las tareas de manera desordenada y sin tener en cuenta el tiempo del que dispone, no establece prioridades o no toma las decisiones adecuadas y eealiza las tareas conforme recibe la demanda.";
    return result;
}
export function getCompetenciasAprendizajeDefinicion(): string{
    let result = "Habilidad para asimilar la información básica que le permita incorporarse de manera rápida, eficiente y con disposición a nuevos procesos o actividades.";
    return result;
}
export function getCompetenciasAprendizajeResultadoAlto(): string{
    let result = "Tiene disposición a aprender nuevos procesos y obtener nuevos conocimientos, tiene habilidad para asimilar la información básica que le permita incorporarse de manera rápida y eficiente.";
    return result;
}
export function getCompetenciasAprendizajeResultadoMedio(): string{
    let result = "Muestra dificultades para incorporarse de manera rápidad pero logra hacerlo con algo de trabajo y esfuerzo a pesar de tener disposición a nuevos procesos.";
    return result;
}
export function getCompetenciasAprendizajeResultadoBajo(): string{
    let result = "No logra asimilar la información básica que le permita incorporarse de manera rápida, eficiente y con disposición a nuevos procesos.";
    return result;
}
export function getCompetenciasToleranciaDefinicion(): string{
    let result = "Capacidad para actuar con eficacia bajo la presión del tiempo y haciendo frente al desacuerdo y adversidad mientras percibe la urgencia real de determinadas tareas y actúa de manera consecuente alcanzando su realización en plazos breves de tiempo.";
    return result;
}
export function getCompetenciasToleranciaResultadoAlto(): string{
    let result = "Muestra capacidad para actuar con eficacia bajo la presión del tiempo y haciendo frente al desacuerdo y adversidad mientras percibe la urgencia real de determinadas tareas y actúa de manera consecuente alcanzando su realización en plazos breves de tiempo.";
    return result;
}
export function getCompetenciasToleranciaResultadoMedio(): string{
    let result = "Mantiene su ritmo de trabajo ante situaciones o problemas percibidos como difíciles, pero el rendimiento sale perjudicado, la acumulación de tareas y las situaciones adversas no le repercuten en su trabajo diario pero pueden presentarse con regularidad.";
    return result;
}
export function getCompetenciasToleranciaResultadoBajo(): string{
    let result = "No resiste trabajar bajo presión de tiempo o de objetivos, le es dificil actúa con rapidez, pierde precisión y calidad en el trabajo, necesita de la continua consulta a sus superiores para ejercer sus funciones.";
    return result;
}
export function getCompetenciasSolucionDefinicion(): string{
    let result = "Capacidad de una persona para lidiar con un problema, siendo capáz de acercarse, conocerlo, entenderlo, familiarizarse para a partir de esto, buscar opciones para resolverlo y ejecutarlas.";
    return result;
}
export function getCompetenciasSolucionResultadoAlto(): string{
    let result = "Muestra capacidad de una persona para lidiar con un problema, siendo capáz de acercarse, conocerlo, entenderlo, familiarizarse para a partir de esto, buscar opciones para resolverlo y ejecutarlas.";
    return result;
}
export function getCompetenciasSolucionResultadoMedio(): string{
    let result = "Busca diferentes opciones para resolver un problema, sin embargo, puede serle dificil lograrno en situaciones complejas.";
    return result;
}
export function getCompetenciasSolucionResultadoBajo(): string{
    let result = "Le es dificil resolver problemas complejos, ante una situación estresante buscará apoyo y orientación de otros para poder resolverlo.";
    return result;
}
export function getCompetenciasTrabajoDefinicion(): string{
    let result = "Capacidad para laborar con otras personas de manera armónica y eficiente. Voluntad de trabajar con los demás, de formar parte de un equipo, de trabajar conjuntamente, en contra de la idea de trabajar separadamente o de forma competitiva.";
    return result;
}
export function getCompetenciasTrabajoResultadoAlto(): string{
    let result = "Labora con otras personas de manera armónica y eficiente, tiene voluntad de trabajar con los demás, de formar parte de un equipo, de trabajar conjuntamente, en contra de la idea de trabajar separadamente o de forma competitiva, motiva y procura la convivencia e integración de los miembros del equipo.";
    return result;
}
export function getCompetenciasTrabajoResultadoMedio(): string{
    let result = "Trabaja de manera individual aunque reconoce las ventajas del trabajo en equipo busca aportar ideas al grupo y participa activamente ante ciertas situaciones.";
    return result;
}
export function getCompetenciasTrabajoResultadoBajo(): string{
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
export function getCompetenciasSeguimientoResultadoMedio(): string{
    let result = "Establece objetivos y realiza un seguimiento de los mismos sin embargo puede serle complicado establecer mecanismos e indicadores adecuados para esto.";
    return result;
}
export function getCompetenciasSeguimientoResultadoBajo(): string{
    let result = "Le es dificil llevar un adecuado seguimiento de sus tareas, siendo comunes los olvidos y retraso en actividades.";
    return result;
}
export function getCompetenciasAtencionDefinicion(): string{
    let result = "Tendencia que tiene una persona a ser minuciosa al momento de realizar una tarea, cuidando y vigilando cada detalle de ésta.";
    return result;
}
export function getCompetenciasAtencionResultadoAlto(): string{
    let result = "Es minucioso al momento de realizar una tarea, cuidando y vigilando cada detalle de ésta logrando mantener altos estándares de calidad en sus actividades.";
    return result;
}
export function getCompetenciasAtencionResultadoMedio(): string{
    let result = "Muestra un interés especial por el orden y la claridad, le interesa realizar el trabajo de manera responsable y siguiendo las normas aunque no lo consigue como norma general.";
    return result;
}
export function getCompetenciasAtencionResultadoBajo(): string{
    let result = "No realiza su trabajo siguiendo unos estándares de calidad, le es dificil realizar un trabajo bien hecho, crea un espacio de trabajo con un orden especial el cual únicamente entiende esta persona.";
    return result;
}
export function getCompetenciasManejoDefinicion(): string{
    let result = "Habilidad para buscar la conjunción de voluntades, bajo la perspectiva de ser un tercero imparcial y neutral, con propuestas de acuerdos para ayudar a las partes a ubicar e identificar sus intereses, estableciendo una comunicación que prevenga o evite posibles conflictos.";
    return result;
}
export function getCompetenciasManejoResultadoAlto(): string{
    let result = "Tiene habilidad para buscar la conjunción de voluntades, bajo la perspectiva de ser un tercero imparcial y neutral, con propuestas de acuerdos para ayudar a las partes a ubicar e identificar sus intereses, estableciendo una comunicación que prevenga o evite posibles conflictos.";
    return result;
}
export function getCompetenciasManejoResultadoMedio(): string{
    let result = "Busca mantenerce imparcial y neutral ante un conflicto aunque no siempre lo consigue, busca evitar el desarrollo de conflictos aunque le es dificil ubicar e identificar los intereses de las partes.";
    return result;
}
export function getCompetenciasManejoResultadoBajo(): string{
    let result = "Le es dificil ser imparcial ante un conflicto, prefiere evitar involucrarse a participar activamente en la resolución de éstos.";
    return result;
}
export function getCompetenciasGustoDefinicion(): string{
    let result = "Apego y gusto que tiene una persona por realizar tareas sistemáticas, cumplir con horarios y actividades constantes durante una jornada laboral.";
    return result;
}
export function getCompetenciasGustoResultadoAlto(): string{
    let result = "Muestra apego y gusto por realizar tareas sistemáticas, siéndole sencillo cumplir con horarios y actividades constantes durante la jornada laboral.";
    return result;
}
export function getCompetenciasGustoResultadoMedio(): string{
    let result = "La persona puede realizar comunmente tareas sistemáticas, cumplir con horarios y actividades constantes durante la jornada laboral, sin embargo estas no son del gusto de la persona, prefiriendo actividades que puedan tener cierta libertad de ejecución y manejo del tiempo.";
    return result;
}
export function getCompetenciasGustoResultadoBajo(): string{
    let result = "No se muestra apego ni gusto por realizar tareas sistemáticas, le es complicado cumplir con horarios y actividades constantes durante la jornada laboral.";
    return result;
}
export function getCompetenciasInteresDefinicion(): string{
    let result = "Voluntad de ayudar y de servir al cliente, de resolver sus necesidades. Se centra fundamentalmente en entender las necesidades del cliente y así poder hacer algo para ayudar o servir, incluso, anticiparse a sus demandas.";
    return result;
}
export function getCompetenciasInteresResultadoAlto(): string{
    let result = "La persona se orienta hacia las necesidades tanto explicitadas como no explicitadas, identificando nuevas respuestas y oportunidades no detectadas inicialmente que contribuyen a dar la ayuda necesaria de una manera proactiva, se esfuerza por conocer gustos, preferencias e inconvenientes de sus clientes y encontrar vías de solución, da respuesta ágil y acertada a reclamos o problemas de los clientes.";
    return result;
}
export function getCompetenciasInteresResultadoMedio(): string{
    let result = "Con respecto al cliente, cumple con las acciones acordadas, respondiendo a sus requerimientos aunque solo en lo esencial, busca atender y solucionar problemas y reclamaciones de los cliente sin embargo, esta no es su principal preocupación.";
    return result;
}
export function getCompetenciasInteresResultadoBajo(): string{
    let result = "Actúa al margen de los intereses de la compañía persiguiendo como mayor beneficio su propio trabajo, desentendiéndose de las necesidades del otro, en cuanto a la atención a sus clientes, no consigue cubrir sus necesidades puesto que no se inquieta en profundizar en las preferencias del otro.";
    return result;
}
export function getCompetenciasPersuacionDefinicion(): string{
    let result = "Grupo de habilidades personales (convencimiento, negociación, habilidad de palabra) necesarias para que por esta vía, la persona logre determinados propósitos a través de otra o de los demás.";
    return result;
}
export function getCompetenciasPersuacionResultadoAlto(): string{
    let result = "Muestra habilidades de convencimiento, negociación y habilidad de palabra, lo que le permite por esta vía lograr determinados propósitos a través de otra persona o personas.";
    return result;
}
export function getCompetenciasPersuacionResultadoMedio(): string{
    let result = "Se adapta a las necesidades de los clientes y consigue cubrirlas en la mayoría de ocasiones.";
    return result;
}
export function getCompetenciasPersuacionResultadoBajo(): string{
    let result = "Carece de habilidades de convencimiento y negociación, lo cual le impacta en la posibilidad de lograr sus objetivos de ventas y convencimiento del cliente.";
    return result;
}
export function getCompetenciasConcienciaDefinicion(): string{
    let result = "Capacidad para identificar y actuar ante situaciones de riesgo, interés por procupar condiciones seguras para el y quienes lo rodean evitando mantener riesgos potenciales en la organización.";
    return result;
}
export function getCompetenciasConcienciaResultadoAlto(): string{
    let result = "Muestra tener capacidad para identificar y actuar ante situaciones de riesgo, interés por procupar condiciones seguras para el y quienes lo rodean evitando mantener riesgos potenciales en la organización.";
    return result;
}
export function getCompetenciasConcienciaResultadoMedio(): string{
    let result = "Procura mantener un ambiente sano y libre de riesgos potenciales, aunque en ocasiones no le es tan fácil identificar estas situaciones de riesgo.";
    return result;
}
export function getCompetenciasConcienciaResultadoBajo(): string{
    let result = "No logra identificar ni actuar ante situaciones de riesgo, no muestra mayor interés por procurar condiciones seguras en la organización.";
    return result;
} */

/**
 * Recursos Humanos
 * Grupo: RIESGOS
 */

export function getRiesgosPersonalesDefinicion(): string{
    let result = "Grupo compuesto por la evaluación de los riesgos (insertarlos), dando información respecto a la probabilidad de que la persona se haya visto involucrada en lo personal en la ejecución de alguno de estos.";
    return result;
}
export function getRiesgosPersonalesResultadoAlto(): string{
    let result = "La persona no presenta respuestas emocionales que puedan indicar que ha estado involucrada en lo personal en temas de: (insertar los riesgos evaluados), haciendola una persona de bajo riesgo para la organización.";
    return result;
}
export function getRiesgosPersonalesResultadoMedioAlto(): string{
    let result = "";
    return result;
}
export function getRiesgosPersonalesResultadoMedio(): string{
    let result = "Se presentan resultados que pueden indicar un estrés en los factores (nombrarlos) lo que indica que puede haber un estresor detonante vinculado a éstos y a un posible involucramiento. Se recomienda explorar en entrevista.";
    return result;
}
export function getRiesgosPersonalesResultadoBajo(): string{
    let result = "Se observan resultados de alarma en los factores (nombrarlos) donde la persona ha tenido una reacción importante, lo cual indica que existe un riesgo de que la persona se encuentre en lo personal involucrada en la ejecución de estos por lo que es considerada de riesgo para la organización.";
    return result;
}
export function getRiesgosEntornoDefinicion(): string{
    let result = "Grupo compuesto por la evaluación de los riesgos (insertarlos) en el entorno cercado del evaluado, dando información respecto a que ciertas actividades sean normalizadas en el contexto cercano, aumentando  la probabilidad de que la persona pueda en algún momento incidir en alguno de estos.";
    return result;
}
export function getRiesgosEntornoResultadoAlto(): string{
    let result = "La persona no presenta respuestas emocionales que puedan indicar que en su entorno cercano se presentan actividades relacionadas con (nombrar los factores), esto indica que no las malas prácticas no se encuentran normalizadas a su alrededor, haciéndolo un entorno seguro.";
    return result;
}
export function getRiesgosEntornoResultadoMedioAlto(): string{
    let result = "";
    return result;
}
export function getRiesgosEntornoResultadoMedio(): string{
    let result = "Se presentan resultados que pueden indicar un estrés en los factores del entorno (nombrarlos) lo que indica que puede haber un estresor detonante vinculado a éstos y a una posible práctica en su contexto cercano. Se recomienda explorar en entrevista.";
    return result;
}
export function getRiesgosEntornoResultadoBajo(): string{
    let result = "Se observan resultados de alarma en los factores del entorno (nombrarlos) donde la persona ha tenido una reacción importante, lo cual indica que existe un riesgo de que las actividades relacioanadas con éstos sean recurrentes en su contexto cercano, haciéndolo un entorno de riesgo.";
    return result;
}

/**
 * Recursos Humanos
 * Grupo: REFERENCIAS
 */

export function getReferenciasDefinicion(): string{
    let result = "Evaluación de antecedentas laborales desde la autopercepción sobre relaciones con jefes anteriores, posibilidad de ser recontratado, conflictos y accidentes en anteriores empleos";
    return result;
}
export function getReferenciasResultadoAlto(): string{
    let result = "La persona ha respondido en general de forma veráz las referencias y experiencias previas en otros trabajos por lo que las respuestas otorgadas pueden ser consideradas fidedignas. No se encuentran indicios de alerta respecto a referencias laborales";
    return result;
}
export function getReferenciasResultadoMedioAlto(): string{
    let result = "";
    return result;
}
export function getReferenciasResultadoMedio(): string{
    let result = "Los resultados obtenidos por la persona evaluada, señalan que la información ha sido proporcionada de forma distorsionada en lo relativo a la autocalificación de las competencias (insertarlas), lo cual indica que pudo haber una ligera exageración o minización del verdadero desempeño y apego a las competencias";
    return result;
}
export function getReferenciasResultadoBajo(): string{
    let result = "En general la persona ha respondido de forma poco veráz en lo referente a su autocalificación en las competencias (insertarlas) y en apego a las competencias (insertarlas) lo cual indica que la información proporcionada no puede ser considerada fidedigna";
    return result;
}