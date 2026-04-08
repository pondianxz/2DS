package prjClinica;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Registro {
	static final List<Consulta> consultas = new ArrayList<>();
	static final Map<Medico, Especialidade> especialidadeMedico = new HashMap<>();
	static final Map<Paciente, List<Consulta>> consultasPaciente = new HashMap<>();

	static void registrarDadosPadrao() {
		Especialidade especPediatria = new Especialidade();
		especPediatria.setNome("Pediatria");
		especPediatria.setDescricao("Área da medicina que cuida da saúde de crianças e adolescentes.");
		
		Especialidade especClinicoGeral = new Especialidade();
		especClinicoGeral.setNome("Clínico Geral");
		especClinicoGeral.setDescricao("Quem diagnostica doenças comuns e orienta o tratamento geral");
		
		Especialidade especOdonto = new Especialidade();
		especOdonto.setNome("Odontologia");
		especOdonto.setNome("Especialista que foca na saúde bucal (dentes, gengivas, boca)");
		
		
		Medico medico1 = new Medico();
		medico1.setNome("Joao Santos");
		medico1.setEmail("joao.santos@gmail.com");
		medico1.setTelefone("11 987654321");
		medico1.setCpf("22222222222");
		medico1.setCrm("123456");
		medico1.setDataNascimento("23/07/1987");
		
		Medico medico2 = new Medico();
		medico2.setNome("Caique Ribeiro");
		medico2.setEmail("ribcaique09@gmail.com");
		medico2.setTelefone("11 988888888");
		medico2.setCpf("33333333333");
		medico2.setCrm("122222");
		medico2.setDataNascimento("10/12/1993");
		
		especialidadeMedico.putIfAbsent(medico1, especPediatria);
		especialidadeMedico.putIfAbsent(medico2, especClinicoGeral);
		

		Consulta consulta1 = new Consulta();
		consulta1.setDataConsulta("12/04/2026");
		consulta1.setHoraConsulta("07:50");
		consulta1.setMedico(medico1);
		
		Consulta consulta2 = new Consulta();
		consulta2.setDataConsulta("12/04/2026");
		consulta2.setHoraConsulta("12:00");
		consulta2.setMedico(medico1);
		
		Consulta consulta3 = new Consulta();
		consulta3.setDataConsulta("13/04/2026");
		consulta3.setHoraConsulta("19:00");
		consulta3.setMedico(medico2);
		
		consultas.add(consulta1);
		consultas.add(consulta2);
		consultas.add(consulta3);
	}
}
