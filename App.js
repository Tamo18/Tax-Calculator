document.getElementById('resultContainer').style.display = 'none';

document.getElementById('myForm').addEventListener('submit', function(event) {
  document.getElementById('resultContainer').style.display = 'block';

  event.preventDefault();


  const gross = parseFloat(document.getElementById('input1').value);
  const extra = parseFloat(document.getElementById('input2').value);
  const age = parseFloat(document.getElementById('input3').value);
  const deductions = parseFloat(document.getElementById('input4').value);

  const overall = (gross + extra) - deductions;


  const cutoff = 800000;

  if (overall <= cutoff) {
    document.getElementById('formContainer').style.display = 'none';
    document.getElementById('result').textContent = `The overall income will be ${overall} in these case no tax is needed.`;
  } else {
    let rateofTax;
    if (age < 40) {
      rateofTax = 0.3;
    } else if (age >= 40 && age < 60) {
      rateofTax = 0.4;
    } else if (age >= 60) {
      rateofTax = 0.1;
    }


   const amountTopay = rateofTax * (overall - cutoff);
   console.log(amountTopay)
   document.getElementById('formContainer').style.display = 'none';
   const finalAmount=overall-amountTopay;
   document.getElementById('result').textContent = `The overall income will be ${finalAmount} after tax deductions.`;

  


  }

document.getElementById('closeButton').addEventListener('click', function() {

  document.getElementById('formContainer').style.display = 'block';
 
  document.getElementById('resultContainer').style.display = 'none';

});

});
