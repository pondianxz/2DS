package prjRecursosHumanos;

public class Gerente extends Funcionario {

	private String matricula;
	
	@Override
	double aumentarSalario(double salario) {
		return salario * 0.2;
	}

	public String getMatricula() {
		return matricula;
	}

	public void setMatricula(String matricula) {
		this.matricula = matricula;
	}
	
}
