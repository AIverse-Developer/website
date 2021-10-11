/**
 * add
 * @param {Object} arg1
 * @param {Object} arg2
 */
function accAdd(arg1, arg2) {
    var r1, r2, m;
    try {
        r1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
    return (arg1 * m + arg2 * m) / m;
}
/**
 * sub
 * @param {Object} arg1
 * @param {Object} arg2
 */
function accSub(arg1, arg2) {
    var r1, r2, m, n;
    try {
        r1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
     //last modify by deeka
    n = (r1 >= r2) ? r1 : r2;
    return ((arg1 * m - arg2 * m) / m).toFixed(n);
}
/**
 * mul
 * @param {Object} arg1
 * @param {Object} arg2
 */
function accMul(arg1, arg2) {
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try {
        m += s1.split(".")[1].length;
    }
    catch (e) {
    }
    try {
        m += s2.split(".")[1].length;
    }
    catch (e) {
    }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
} 
/**
 * div
 * @param {Object} arg1
 * @param {Object} arg2
 */
function accDiv(arg1,arg2){
   var t1 = 0,t2 = 0,r1,r2;
   try{
	   t1 = arg1.toString().split('.')[1].length;
   }catch(e){
	   t1 = 0;
   }
   try{
	   t2 = arg2.toString().split(".")[1].length;
   }catch(e){
	   t2 = 0;
   }
   r1=Number(arg1.toString().replace(".",""));
   r2=Number(arg2.toString().replace(".",""));
   return (r1/r2)*Math.pow(10,t2-t1);
}

module.exports = {
	accAdd:accAdd,
	accSub:accSub,
	accMul:accMul,
	accDiv:accDiv
}

