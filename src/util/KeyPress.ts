// src/util/keyPress.ts
import * as readlineSync from 'readline-sync';
import { colors } from './Colors'; // Importa as cores para formatação

/**
 * Pausa a execução e espera que o usuário pressione uma tecla.
 */
export function keyPress(): void {
    console.log(colors.fg.yellowstrong, "\nPressione qualquer tecla para continuar...", colors.reset);
    // Usa keyInPause para bloquear a execução até que o usuário pressione uma tecla
    readlineSync.keyInPause(''); 
}