"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const fetchData = (url, data) => __awaiter(void 0, void 0, void 0, function* () {
        yield fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
            if (response.status === 200) {
                response.json();
            }
        })
            .then(data => alert(`Success: ${JSON.stringify(data)}`))
            .catch(error => console.error(''));
    });
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
            fetchData('https://fsdt-contact-acf4ab9867a7.herokuapp.com/contact', data);
        });
    }
});
