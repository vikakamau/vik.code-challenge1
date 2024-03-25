const basicsalary = 50000; // shows the basic salary
const benefits = 3000 // shows the benefits 
// calculates Netsalary using nhif,tax and nssf rates 
function calculateNetSalary(basicsalary, benefits){
    const NHIFrate = 0.03;
    const Taxrate = 0.1;
    const NSSFrate = 0.06;
//calculate gross salary which is equal to basicsalary + benefits
    const grossSalary= basicsalary+benefits

// calculates grosssalary and rates to give out the required deductions
    const NHIF = grossSalary * NHIFrate;
    const Tax = grossSalary * Taxrate;
    const NSSF = grossSalary * NSSFrate;
    // calculates Netsalary by minusing grosssalry from the deductionss (grossSalary-deductions) and returns the outputs
    const NetSalary = grossSalary-(NHIF+Tax+NSSF);
    return{
        grossSalary,
        NHIF,
        Tax,
        NSSF,
        NetSalary
    }
}
// shows the output of the calculated solutions
const output = calculateNetSalary(basicsalary, benefits)
console.log("grossSalary:", output.grossSalary); // it gives out the grosssalary after calculation
console.log("NHIF: ", output.NHIF); //it give out the NHIF deduction after the calculation
console.log("Tax: ", output.Tax); // it gives out the Tax deduction after the calculation
console.log("NSSF: ", output.NSSF); // it gives out NSSF deduction aftter calculation
console.log("NetSalary:", output.NetSalary) // it ouputs the NetSalary
