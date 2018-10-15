module.exports.add = (a,b ) => a + b;

module.exports.square = (x) => x*x;

module.exports.asyncSquare = (x, callback) => {
    setTimeout(() => {
            callback(x*x);
    }, 1000);
}
module.exports.setName = (user, fullName) => {
    var Names = fullName.split(' ');
    user.firstName = Names[0];
    user.lastName = Names[1];
    return user
}

module.exports.asyncAdd = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b); 
    },1000);
};




