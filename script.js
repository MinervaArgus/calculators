


// part 1
function computeForce() {
    let mass = document.getElementById("mass").value;
    let acceleration = document.getElementById("acceleration").value;
    let result = mass * acceleration;
    document.getElementById("answer").innerHTML = String(result);
}


// part 2
function computeAvgVelocity() {
    let initialVelocity = parseInt(document.getElementById("initialVelocity").value);
    let timeInSeconds = parseInt(document.getElementById("timeInSeconds").value);
    let acceleration = parseInt(document.getElementById("acceleration1").value);
    let math1 = Math.pow(timeInSeconds,2.0);
    let math2 = acceleration*math1;
    let equation = (0.5*math2);
    let result = ((initialVelocity*timeInSeconds) - equation);
    document.getElementById("avgVelocity").innerHTML = String(result);
}


// part 3
function computeQuadratic() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = parseInt(document.getElementById("c").value);
    let b2 = b*b;
    let equationPos = ((-b + Math.sqrt(b2 -(4*a*c)) / (2*a)));
    let equationNeg = ((-b - Math.sqrt(b2 -(4*a*c)) / (2*a)));
    document.getElementById("quadraticPos").innerHTML = String(equationPos);
    document.getElementById("quadraticNeg").innerHTML = String(equationNeg);
}

// part 4
function computePresentValue() {
    let pmt = document.getElementById("pmt").value;
    let interestRate = document.getElementById("interestRate").value;
    let periods = document.getElementById("numberOfPeriods").value;
    let equation1 = Math.pow((1+interestRate),periods);
    let equation2 = 1 - (1/equation1);
    let result = equation2/interestRate;
    document.getElementById("presentValue").innerHTML = String("$" + result);


}