package prjClinica;

public class Aplicacao {

	public static void main(String[] args) {
		Registro.registrarDadosPadrao();
		Consulta.listarConsultas();
		
		Consulta.agendar();
		
	}

}
