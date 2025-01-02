//Task 1

const ratePerHour = 10;
export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}
dayRate(10)

//Task 2

const budget = 1280;
const hoursPerDay = 8;
export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / (ratePerHour * hoursPerDay));
}
daysInBudget()

//Task 3

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const daysInMonth= 22;
  const dailyRate = ratePerHour * 8;
  const fullMonths = Math.floor(numDays / daysInMonth);
  const remainingDays = numDays % daysInMonth;
// Calculate the cost for full months with discount 
  const monthlyCost = dailyRate * daysInMonth;
  const discountedMonthlyCost = monthlyCost * (1 - discount);
  const totalCostForFullMonths = fullMonths * discountedMonthlyCost;
// Calculate the cost for remaining days 
  const costForRemainingDays = remainingDays * dailyRate;
// Total Cost
  const totalCost = totalCostForFullMonths + costForRemainingDays;
  return Math.ceil(totalCost);
}
priceWithMonthlyDiscount()
