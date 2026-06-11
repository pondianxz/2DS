package prjRecursosHumanos;

public class ControleDeAumento {
	
	private double totalDeAumento;
	
	void registrar(Funcionario funcionario) {
		double aument = funcionario.aumentarSalario(funcionario.getSalario());
		totalDeAumento += aument;
	}

	public double getTotalDeAumento() {
		return totalDeAumento;
	}

}
