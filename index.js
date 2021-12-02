function receivesAFunction(cb){
    cb();
}

function returnsANamedFunction() {
    const fn = function() {return "fn";};
    return fn;
}

function returnsAnAnonymousFunction() {
    return function() {return 4 + 5;};
}