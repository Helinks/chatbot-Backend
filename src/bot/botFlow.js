const state = './state';
const message = '../services/messenger.service';

exports.handleMessage = (userId, text) => {
    const user = state.get(userId);

    if (user.step === 0) {
        state.step(userId, { step: 1 });
        return message.sendText(userId, "¿Buscas pijamas?")
    }
    if (user.step === 1) {
        user.tipo = text;
        user.step = 2;
        state.set(userId, user);
        return messenger.sendText(userId, '¿Qué talla necesitas?');
    }
}