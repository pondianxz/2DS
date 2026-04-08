package prjClinica;
import java.util.ArrayList;
import java.util.List;
import static prjClinica.Registro.consultas;
import static prjClinica.Registro.especialidadeMedico;
import static prjClinica.Registro.consultasPaciente;

public class Paciente {
	static final List<Paciente> pacientes = new ArrayList<>();
	private String nome, cpf, email, telefone, dataNascimento;
	
	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getDataNascimento() {
		return dataNascimento;
	}

	public void setDataNascimento(String dataNascimento) {
		this.dataNascimento = dataNascimento;
	}
	
	
	static void listarConsultasAgendadas() {
		
	}
	
}
