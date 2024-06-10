"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fetchData_1 = __importDefault(require("./functions/fetchData"));
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    if (form instanceof HTMLFormElement) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const names = [];
            const inputNames = document.querySelectorAll('input[name]');
            const messageElement = document.getElementById('message');
            let messageText = "";
            inputNames.forEach(input => {
                var _a;
                (_a = input instanceof HTMLInputElement) !== null && _a !== void 0 ? _a : names.push(input.value.trim());
            });
            messageElement instanceof HTMLTextAreaElement ? messageText = messageElement.value : console.error('Não foi possível definir a mensagem!');
            const data = {
                names: names,
                message: messageText
            };
            (0, fetchData_1.default)('https://fsdt-contact-acf4ab9867a7.herokuapp.com/contact', data);
        });
    }
});
