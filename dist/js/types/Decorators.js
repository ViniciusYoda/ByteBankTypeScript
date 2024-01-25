export function ValidaDebito(target, propertyKey, descriptor) {
    // Armazena o método original em uma variável
    const originalMethod = descriptor.value;
    // Modifica o valor do descriptor.value
    descriptor.value = function (valorDoDebito) {
        // Realiza as validações necessárias
        if (valorDoDebito <= 0) {
            throw new Error("O valor a ser debitado precisa ser maior do que zero!");
        }
        if (valorDoDebito > this.saldo) {
            throw new Error("Seu saldo é insuficiente para realizar a operação!");
        }
        // Executa o método original com os parâmetros fornecidos
        return originalMethod.apply(this, [valorDoDebito]);
    };
    // Retorna o descriptor modificado
    return descriptor;
}
export function ValidaDeposito(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (valorDoDeposito) {
        if (valorDoDeposito <= 0) {
            throw new Error("O valor a ser depositado deve ser maior que zero!");
        }
        return originalMethod.apply(this, [valorDoDeposito]);
    };
    return descriptor;
}
