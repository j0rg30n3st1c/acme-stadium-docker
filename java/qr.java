import java.util.Timer;
import java.util.TimerTask;

public class Main {
    public static void main(String[] args) {
        Timer timer = new Timer();
        timer.scheduleAtFixedRate(new TimerTask() {
            @Override
            public void run() {
                System.out.println("Hola, soy el servicio QR");
            }
        }, 0, 1000); // 1000 milliseconds = 1 segundo
    }
}
