const API_URL = 'https://fedskillstest.coalitiontechnologies.workers.dev';

async function fetchPatientData() {
  try {
    const username = 'coalition';
    const password = 'skills-test';
    const base64 = btoa(`${username}:${password}`);

    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${base64}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) throw new Error('Network response was not ok');

    const patients = await response.json();
    const patient = patients.find(p => p.name === 'Jessica Taylor');
    if (!patient) throw new Error('Jessica Taylor not found');

    // Populate info
    document.getElementById('age').textContent = patient.age;
    document.getElementById('insurance').textContent = patient.insurance_type;
    document.getElementById('condition').textContent = patient.diagnostic_list.map(d => d.name).join(', ');

    // Blood pressure chart
    const bpData = patient.diagnosis_history.map(item => ({
      month: item.month + ' ' + item.year,
      systolic: item.blood_pressure.systolic.value,
      diastolic: item.blood_pressure.diastolic.value
    }));

    renderBPChart(bpData);
  } catch (err) {
    console.error('Error fetching patient data:', err);
  }
}

function renderBPChart(bpData) {
  const ctx = document.getElementById('bpChart').getContext('2d');
  const labels = bpData.map(d => d.month);
  const systolic = bpData.map(d => d.systolic);
  const diastolic = bpData.map(d => d.diastolic);

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Systolic',
          data: systolic,
          borderColor: 'red',
          fill: false,
          tension: 0.3
        },
        {
          label: 'Diastolic',
          data: diastolic,
          borderColor: 'blue',
          fill: false,
          tension: 0.3
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        title: { display: true, text: 'Jessica Taylor - Blood Pressure History' }
      }
    }
  });
}

// Initialize
fetchPatientData();
