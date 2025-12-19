const state= {};

exports.get= (id) =>state[id] || {step:0};
exports.set= (id,data)=> state[id]=data;
exports.clear = (id) => delete state[id];