public class Exec1 {

    public static void main(String[] args) {

        int[][] matriz = new int[4][4];
        int numero = 1, soma = 0;

        for (int i = 0; i < 4; i++) {
            for (int j = 0; j < 4; j++) {
                matriz[i][j] = numero;
                soma += numero;
                numero++;
            }
        }

        for (int i = 0; i < 4; i++) {
            for (int j = 0; j < 4; j++) {
                System.out.print(matriz[i][j]+" ");
            }
            System.out.println();
        }
        System.out.println("Soma = "+soma);

    }

}
