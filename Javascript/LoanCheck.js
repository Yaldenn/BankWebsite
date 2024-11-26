document.addEventListener("DOMContentLoaded", () => {
    //find the calculator form
    const form = document.getElementById("loanForm");
    const resultDiv = document.getElementById("result");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault(); 
  
      // Get the input values
      const loanAmount = parseInt(document.getElementById("LoanAmount").value);
      const loanTerm = parseInt(document.getElementById("LoanTerm").value);
      const monthlyIncome = parseInt(document.getElementById("MonthlyIncome").value);
      
      // calculate loan eligibility
      const monthlyIntrestRate = 0.045/12
      const monthsToRepay = loanTerm * 12

      const monthlyPayment = (loanAmount * monthlyIntrestRate * (1 + monthlyIntrestRate)**monthsToRepay)/((1 + monthlyIntrestRate)**monthsToRepay - 1);
      const totalPayment = monthlyPayment * monthsToRepay

      if (monthlyPayment <= monthlyIncome * 0.3) {
        resultDiv.textContent = 
        `
        Loan Accepted.
        -------------
        Total interest: £ ${(totalPayment-loanAmount).toFixed(2)}
        -------------              
        Total to repay: £ ${totalPayment.toFixed(2)}
        
        `;
      } else {
        resultDiv.textContent = "Loan denied: Monthly payment exceeds 30% of your income.";
      }

    });
  });
  