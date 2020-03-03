module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let objHanoi = {};
    objHanoi.turns = 2 ** disksNumber - 1;
    objHanoi.seconds = (2 ** disksNumber - 1) / (turnsSpeed / 3600);
    return objHanoi;
}