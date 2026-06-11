package prjRecursosHumanos;

public class Aplicacao {

	public static void main(String[] args) {
		ControleDeAumento aumento = new ControleDeAumento();
		
		Funcionario gerente = new Gerente();
		gerente.setNome("Gabriel da Silva");
		gerente.setCpf("123456789");
		gerente.setSalario(5000);
		
		Funcionario funcionario = new Funcionario();
		funcionario.setNome("Sabrina Pereira");
		funcionario.setCpf("987654321");
		funcionario.setSalario(4000);
		
		double salarioGerente = gerente.getSalario();
		double salarioFuncionario = funcionario.getSalario();
		System.out.println("Valor de aumento gerente: " + gerente.aumentarSalario(salarioGerente));
		System.out.println("Valor de aumento funcionario: " + funcionario.aumentarSalario(salarioFuncionario));
		
		aumento.registrar(funcionario);
		aumento.registrar(gerente);
		System.out.println(aumento.getTotalDeAumento());
	}

}
