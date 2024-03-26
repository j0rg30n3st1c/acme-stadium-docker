package main

import (
    "fmt"
    "os"
    "time"
)

func main() {
    if len(os.Args) < 2 {
        fmt.Println("Debe proporcionar un argumento para seleccionar la pasarela de pago (bizum/paypal/tarjeta/transferencia)")
        return
    }

    gateway := os.Args[1]

    for {
		switch gateway {
		case "bizum":
			handleBizumPayment()
		case "paypal":
			handlePayPalPayment()
		case "tarjeta":
			handleCardPayment()
		case "transferencia":
			handleTransferPayment()
		default:
			fmt.Println("Pasarela de pago no válida")
		}

		// Espera 5 segundos antes de volver a ejecutar el código
		time.Sleep(5 * time.Second)
	}
}

func handleBizumPayment() {
    fmt.Println("Manejando pago con Bizum...")
    // Lógica para la pasarela de pago Bizum
}

func handlePayPalPayment() {
    fmt.Println("Manejando pago con PayPal...")
    // Lógica para la pasarela de pago PayPal
}

func handleCardPayment() {
    fmt.Println("Manejando pago con tarjeta...")
    // Lógica para la pasarela de pago con tarjeta
}

func handleTransferPayment() {
    fmt.Println("Manejando pago por transferencia...")
    // Lógica para la pasarela de pago por transferencia
}
