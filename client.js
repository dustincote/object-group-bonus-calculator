const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);

for (let i = 0; i < employees.length; i++) {
  let employee = employees[i]; // reference something in an array
  console.log(employee);
  console.log(getBonusCalc(employee));
}

function getBonusCalc(objEmployee) {

  /* Those who have a rating of a 2 or below should not receive a bonus.
  Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income. ..CHECK
  Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income. ..CHECK
  Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income. ..CHECK
  If their employee number is 4 digits long, this means they have been with the company for longer than 15 years, and should receive an additional 5%.
  However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%.
  No bonus can be above 13% or below 0% total. */

  //logic for bonus calculation 
  let bonusPercentage = 0
  if (objEmployee.reviewRating > 2) { //if not true, NO BONUS!
    //this employee is getting no bonus..
    if (objEmployee.reviewRating === 3) {
      bonusPercentage = .04;
    }
    else if (objEmployee.reviewRating === 4) {
      bonusPercentage = .06;
    }
    else if (objEmployee.reviewRating === 5) {
      bonusPercentage = .10;
    }

    if (objEmployee.employeeNumber.length === 4) {
      bonusPercentage += 0.05;
    }

    if (Number(objEmployee.annualSalary) > 65000) {
      bonusPercentage -= .01;
    }

    if (bonusPercentage > .13) {
      bonusPercentage = .13;
    }
  }
  let totalCompensation = Math.round((bonusPercentage + 1) * objEmployee.annualSalary);
  let totalBonus = Math.round(bonusPercentage * objEmployee.annualSalary);

  let newObjEmployee = {
    name: objEmployee.name,
    bonusPercentage: bonusPercentage,
    totalCompensation: totalCompensation,
    totalBonus: totalBonus,
  }
  return newObjEmployee;
  //pass in the objparam
  //return new object {name: obj.name, bonus}
}

/* The name property should contain the employee's name.
The bonusPercentage property should contain the bonus percentage the employee is to receive.See section below for calculation instructions.
The totalCompensation property should be the adjusted annual compensation(base annual + bonus)
The totalBonus should be the employee's total bonus rounded to the nearest dollar. */
