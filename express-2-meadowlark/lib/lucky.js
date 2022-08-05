exports.getLuck = function() {
    // number between 0 and 10
    var lucky_num = Math.floor(Math.random() * 10);
    return lucky_num;
};
