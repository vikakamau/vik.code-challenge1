const basicsalary = 40000;
const benefits = 5000
function calculateNetSalary(basicsalary, benefits){
    const NHIFrate = 0.1;
    const Taxrate = 0.2;
    const NSSFrate = 0.05;

    const grossSalary= basicsalary+benefits


    const NHIF = grossSalary * NHIFrate;
    const Tax = grossSalary * Taxrate;
    const NSSF = grossSalary * NSSFrate;
    
    const NetSalary = grossSalary-(NHIF+Tax+NSSF);
    return{
        grossSalary,
        NHIF,
        Tax,
        NSSF,
        NetSalary
    }
}
const output = calculateNetSalary(basicsalary, benefits)
console.log("grossSalary:", output.grossSalary);
console.log("NHIF: ", output.NHIF);
console.log("Tax: ", output.Tax);
console.log("NSSF: ", output.NSSF);
console.log("NetSalary:", output.NetSalary)
