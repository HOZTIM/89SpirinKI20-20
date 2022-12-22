function funonload() {
    // const plusBtn = document.getElementById("plus");
    // plusBtn.addEventListener("click", plus); // добавляем слушателя на событие клика
    // сложение 
    const plusBtn = calc__opers.plus;
    plusBtn.addEventListener("click", plus);

    function plus(e){
        e.preventDefault();
        value1 =  document.getElementById("firstNumber").value;
        value2 =  document.getElementById("secondNumber").value;
        if (validation(value1) && validation(value2)){
            sum = add(parseFloat(value1), parseFloat(value2));
            document.getElementById("calc__output").innerText = sum;
        }
        else{
            document.getElementById("calc__output").innerText = "Некорректный ввод";
        }

    }

    // деление 
    const divisionBtn = calc__opers.division;
    divisionBtn.addEventListener("click", division);

    function division(e){
        e.preventDefault();
        value1 =  document.getElementById("firstNumber").value;
        value2 =  document.getElementById("secondNumber").value;
        if (validation(value1) && validation(value2)){
            value = divide(parseFloat(value1), parseFloat(value2));
            document.getElementById("calc__output").innerText = value;
        }
        else{
            document.getElementById("calc__output").innerText = "Некорректный ввод";
        }
    }

    // квадратичное уравнение
    const squreBtn = squre__form.squreBtn;
    squreBtn.addEventListener("click", quadraticEquationF);

    function quadraticEquationF(e){
        e.preventDefault();
        value1 =  document.getElementById("squre__firstNumber").value;
        value2 =  document.getElementById("squre__secondNumber").value;
        value3 =  document.getElementById("squre__thirdNumber").value;
        if(value1 == "0"){
            document.getElementById("calc__output").innerText = "Линейное ур-е";
            return ""
        }
        if (validation(value1) && validation(value2) && validation(value3)){
            if(document.getElementById("calc__inner__square__zero").innerHTML =="-"){
                value1 = parseFloat(value1) * (-1);
            }
            if(document.getElementById("calc__inner__square__first").innerHTML =="-"){
                value2 = parseFloat(value2) * (-1);
            }
            if(document.getElementById("calc__inner__square__second").innerHTML =="-"){
                value3 = parseFloat(value3) * (-1);
            }
            
            value = quadraticEquation(parseFloat(value1), parseFloat(value2),parseFloat(value3));
            document.getElementById("calc__output").innerText = value;
        }
        else{
            document.getElementById("calc__output").innerText = "Некорректный ввод";
        }
    }

    const calc__inner__square__first = calc__inner__square__form1.calc__inner__square__first;
    calc__inner__square__first.addEventListener("click", editFirstSymb);
    function editFirstSymb(e){
        e.preventDefault();
        symb = document.getElementById("calc__inner__square__first").innerHTML;
        if (symb == "+"){
            document.getElementById("calc__inner__square__first").innerHTML = "-"
        }
        else{
            document.getElementById("calc__inner__square__first").innerHTML = "+"
        }
    }

    const calc__inner__square__second = calc__inner__square__form2.calc__inner__square__second;
    calc__inner__square__second.addEventListener("click", editSecondSymb);
    function editSecondSymb(e){
        e.preventDefault();
        symb = document.getElementById("calc__inner__square__second").innerHTML;
        if (symb == "+"){
            document.getElementById("calc__inner__square__second").innerHTML = "-"
        }
        else{
            document.getElementById("calc__inner__square__second").innerHTML = "+"
        }
    }

    const calc__inner__square__zero = calc__inner__square__form0.calc__inner__square__zero;
    calc__inner__square__zero.addEventListener("click", editZeroSymb);
    function editZeroSymb(e){
        e.preventDefault();
        symb = document.getElementById("calc__inner__square__zero").innerHTML;
        if (symb == "+"){
            document.getElementById("calc__inner__square__zero").innerHTML = "-"
        }
        else{
            document.getElementById("calc__inner__square__zero").innerHTML = "+"
        }
    }

    // расстояние между двумя точками
    const twoPointBtn = twoPoint__point.twoPointBtn;
    twoPointBtn.addEventListener("click", distanceF);
    function distanceF(e){
        e.preventDefault();
        x1 = document.getElementById("x1").value;
        x2 = document.getElementById("x2").value;
        y1 = document.getElementById("y1").value;
        y2 = document.getElementById("y2").value;
        
        x1 = parseFloat(x1);
        x2 = parseFloat(x2);
        y1 = parseFloat(y1);
        y2 = parseFloat(y2);

        if (validation(x1) && validation(x2) && validation(y1) && validation(y2)){
            value = distance(x1,y1,x2,y2);
            document.getElementById("calc__output").innerText = value;
        }
        else{
            document.getElementById("calc__output").innerText = "Некорректный ввод";
        }
    }

    //меню
    const menu__1 = document.getElementById("menu__1");
    menu__1.addEventListener("click", active1);

    const menu__2 = document.getElementById("menu__2");
    menu__2.addEventListener("click", active2);
    
    const menu__3 = document.getElementById("menu__3");
    menu__3.addEventListener("click", active3);

    function active1(){
        document.getElementById("menu__1").classList.add("menu__active__el")
        document.getElementById("menu__2").classList.remove("menu__active__el")
        document.getElementById("menu__3").classList.remove("menu__active__el")

        document.getElementById("calc__inner").classList.remove("diplayNone")
        document.getElementById("squre").classList.add("diplayNone")
        document.getElementById("twoPoint").classList.add("diplayNone")
    }
    function active2(){
        document.getElementById("menu__1").classList.remove("menu__active__el")
        document.getElementById("menu__2").classList.add("menu__active__el")
        document.getElementById("menu__3").classList.remove("menu__active__el")

        document.getElementById("calc__inner").classList.add("diplayNone")
        document.getElementById("squre").classList.remove("diplayNone")
        document.getElementById("twoPoint").classList.add("diplayNone")
    }
    function active3(){
        document.getElementById("menu__1").classList.remove("menu__active__el")
        document.getElementById("menu__2").classList.remove("menu__active__el")
        document.getElementById("menu__3").classList.add("menu__active__el")

        document.getElementById("calc__inner").classList.add("diplayNone")
        document.getElementById("squre").classList.add("diplayNone")
        document.getElementById("twoPoint").classList.remove("diplayNone")
    }
    active1()

}
const add = (x, y) => +x +y

const divide = (x, y) => { return (x / y)}

const distance = (x1,y1,x2,y2) => {
    ab = Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1))
    if(!Number.isInteger(ab)){
        ab = ab.toFixed(2);
    }
    return ab
}
const quadraticEquation = (a,b,c) => {
    if(a == 0){
        return "Линейное ур-е"
    }
    if(a != 0 && b != 0 && c != 0){
        D = b*b-4*a*c;
        if (D < 0) {
            return "корней нет"
        }
        if(D == 0){
            if(Number.isInteger(((-1)*b)/(2*a))){
                return ("x = " + ((-1)*b)/(2*a))  
            }
            else{
                z = ((-1)*b)/(2*a);
                return ("x = " + z.toFixed(2))
            }
        }
        if(D > 0){
            x1 = ((-1)*b+Math.sqrt(D))/(2*a);
            x2 = ((-1)*b-Math.sqrt(D))/(2*a);
            if(!Number.isInteger(x1)){
                x1 = x1.toFixed(2);
            }
            if(!Number.isInteger(x2)){
                x2 = x2.toFixed(2);
            }
            return "x1 = " + x1 + " x2 = " + x2
        }
    }
    if(b == 0 && c ==0 && a != 0){
        return 0
    }
    if(a != 0 && b == 0 && c != 0){
        if(c/a > 0){
            return "корней нет"
        }
        else{
            z = Math.sqrt(c/a)
            if(!Number.isInteger(Math.sqrt(c/a))){
                return z.toFixed(2);
            }
            return Math.sqrt(c/a)
        }
    }
    if(a != 0 && b != 0 && c == 0){
        x2 = b/a
        if(!Number.isInteger(x2)){
            x2 = x2.toFixed(2);
        }
        return "x1 = 0 x2 = " + x2
    }
}
const validation = (value) => {
    if (!isNaN(parseFloat(value)) && isFinite(value))
        return true
    else
        return false
}
module.exports = {
    add,
    divide,
    quadraticEquation,
    distance,
}