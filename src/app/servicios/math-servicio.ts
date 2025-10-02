import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathServicio {

  generarNumerosAleatorios(): number {
    return Math.floor(Math.random() * (10 - 0 + 1)) + 0;;
  }

  operarContador(estado: boolean, num: number): number {
    if (estado) {
      return ++num;
    }
    return --num;
  }

  operacionesMatematicasBasicas(num1: number, num2: number, operacion: String): number {
    switch (operacion) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
    }
    return num1 / num2;
  }

  //incrementar, 5
  //decrementar, 5
  puntuacion(accion: string, valor: number): number {
    if (accion == "incrementar") {
      return valor;
    }
    return -valor;
  }

  generateSecurePassword(length = 16): string {
    const lowercaseChars: string = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars: string = '0123456789';
    const symbolChars: string = '!@#$%^&*()-_=+{}|;:,.?';

    const allChars: string = lowercaseChars + uppercaseChars + numberChars + symbolChars;

    let password: string = '';
    const randomBytes: Uint32Array = new Uint32Array(length);

    window.crypto.getRandomValues(randomBytes);

    for (let i = 0; i < length; i++) {
      const randomIndex: number = randomBytes[i] % allChars.length;
      password += allChars[randomIndex];
    }

    return password;
  }

  isPasswordSecure(password: string): boolean {
    const minLength = 8;
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[!@#$%^&*()\-_=\+{}|;:,.?]/.test(password);

    return (
      password.length >= minLength &&
      hasLowercase &&
      hasUppercase &&
      hasNumber &&
      hasSymbol
    )
  }

  calculateAgeFromInput(birthDateString: string): number {
    const birthDate = new Date(birthDateString);
    if (isNaN(birthDate.getTime())) {
      throw new Error("Invalid date");
    }

    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    return age;
  }

  metersToKilometers(meters: number): number {
    return meters / 1000;
  }

  degreesToRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
  }
}
