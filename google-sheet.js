fetch("https://script.google.com/macros/s/AKfycby7p3JU3OQTdExNHeJCyH40XIYhFeTol2aQY8BA8tu_zKYRh07nSPM-_hzIRbhz0YroPg/exec")
  .then(response => response.json())
  .then(data => {

  document.getElementById("phValue").textContent = data.phValue;
document.getElementById("tdsValue").textContent = data.tdsValue;
document.getElementById("turbidityValue").textContent = data.turbidityValue;
document.getElementById("flowRateValue").textContent = data.flowRateValue;
document.getElementById("lastUpdate").textContent = data.timestamp;
document.getElementById("acidLevelValue").textContent = data.acidLevelValue;
document.getElementById("totalLitersValue").textContent = data.temperatureValue;
document.getElementById("ecValue").textContent = data.ecValue;
document.getElementById("pressureValue").textContent = data.pressureValue;

  })
  .catch(error => {
    console.log(error);
  });






  