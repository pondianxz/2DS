package prjClinica;
import java.util.ArrayList;
import java.util.Scanner;
import static prjClinica.Registro.consultas;
import static prjClinica.Registro.especialidadeMedico;
import static prjClinica.Registro.consultasPaciente;
import static prjClinica.Paciente.pacientes;

public class Consulta {
	private String dataConsulta, horaConsulta;
	private Medico medico;

	public Medico getMedico() {
		return medico;
	}

	public void setMedico(Medico medico) {
		this.medico = medico;
	}

	public String getDataConsulta() {
		return dataConsulta;
	}

	public void setDataConsulta(String dataConsulta) {
		this.dataConsulta = dataConsulta;
	}

	public String getHoraConsulta() {
		return horaConsulta;
	}

	public void setHoraConsulta(String horaConsulta) {
		this.horaConsulta = horaConsulta;
	}


	static void listarConsultas() {
		int numConsulta = 0;
		System.out.println("Consultas Disponíveis:");
		for(Consulta consulta : consultas) {
			System.out.printf("  %d | %s - %s - %s - %s%n",
					numConsulta,
					consulta.getDataConsulta(),
					consulta.getHoraConsulta(),
					consulta.getMedico().getNome(),
					especialidadeMedico.get(consulta.getMedico()).getNome());
			
			numConsulta++;
		}
	}

	static void agendar() {
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Quer agendar sua próxima consulta?");
		System.out.println("Primeiro, você deve fazer seu cadastro.");
		System.out.println("Digite o seu nome:");
		String nome = sc.nextLine();
		
		System.out.println("Digite o seu CPF:");
		String cpf = sc.nextLine();
		
		System.out.println("Digite o seu e-mail:");
		String email = sc.nextLine();
		
		System.out.println("Digite o seu telefone:");
		String telefone = sc.nextLine();
		
		System.out.println("Digite a sua data de nascimento:");
		String dataNascimento = sc.nextLine();
		
		
		Paciente paciente = new Paciente();
		paciente.setNome(nome);
		paciente.setCpf(cpf);
		paciente.setEmail(email);
		paciente.setTelefone(telefone);
		paciente.setDataNascimento(dataNascimento);
		pacientes.add(paciente);
		listarConsultas();
		
		
		System.out.println("Digite o número da consulta que deseja agendar:");
		int numConsulta = Integer.parseInt(sc.nextLine());
		consultasPaciente.putIfAbsent(paciente, new ArrayList<>().add(consultas.get(numConsulta)));
		
		System.out.println("Consulta agendada com sucesso!");
		listarConsultasAgendadas(paciente);
		
		
		sc.close();
	}

	static void listarConsultasAgendadas(Paciente paciente) {
		int numConsulta = 0;
		System.out.println("Consultas agendadas:");
		for(Consulta consulta : consultasPaciente.get(paciente)) {
			System.out.printf("  %d | %s - %s - %s - %s%n",
					numConsulta,
					consulta.getDataConsulta(),
					consulta.getHoraConsulta(),
					consulta.getMedico().getNome(),
					especialidadeMedico.get(consulta.getMedico()).getNome());
			
			numConsulta++;
		}
	}
	
}
