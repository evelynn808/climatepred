
// ── DATA ───────────────────────────────────────────────────────────────────────
const RAW = {"annual":[{"country":"Australia","year":2020,"avg_temp":23.49,"avg_co2":455.15,"avg_renewable":10.08},{"country":"Australia","year":2021,"avg_temp":23.43,"avg_co2":428.0,"avg_renewable":12.96},{"country":"Australia","year":2022,"avg_temp":23.32,"avg_co2":460.53,"avg_renewable":15.85},{"country":"Australia","year":2023,"avg_temp":23.25,"avg_co2":466.98,"avg_renewable":18.9},{"country":"Australia","year":2024,"avg_temp":23.4,"avg_co2":461.27,"avg_renewable":22.08},{"country":"Brazil","year":2020,"avg_temp":10.58,"avg_co2":447.63,"avg_renewable":10.12},{"country":"Brazil","year":2021,"avg_temp":10.61,"avg_co2":424.38,"avg_renewable":12.67},{"country":"Brazil","year":2022,"avg_temp":10.52,"avg_co2":426.21,"avg_renewable":16.07},{"country":"Brazil","year":2023,"avg_temp":10.39,"avg_co2":450.95,"avg_renewable":18.97},{"country":"Brazil","year":2024,"avg_temp":10.4,"avg_co2":455.2,"avg_renewable":21.95},{"country":"Canada","year":2020,"avg_temp":16.5,"avg_co2":443.25,"avg_renewable":10.1},{"country":"Canada","year":2021,"avg_temp":16.44,"avg_co2":446.06,"avg_renewable":13.0},{"country":"Canada","year":2022,"avg_temp":16.36,"avg_co2":445.4,"avg_renewable":15.97},{"country":"Canada","year":2023,"avg_temp":16.4,"avg_co2":455.12,"avg_renewable":19.02},{"country":"Canada","year":2024,"avg_temp":16.38,"avg_co2":436.79,"avg_renewable":22.04},{"country":"China","year":2020,"avg_temp":15.86,"avg_co2":453.3,"avg_renewable":9.89},{"country":"China","year":2021,"avg_temp":15.92,"avg_co2":436.02,"avg_renewable":12.88},{"country":"China","year":2022,"avg_temp":15.84,"avg_co2":440.51,"avg_renewable":16.19},{"country":"China","year":2023,"avg_temp":15.71,"avg_co2":463.57,"avg_renewable":18.6},{"country":"China","year":2024,"avg_temp":15.68,"avg_co2":451.52,"avg_renewable":21.78},{"country":"France","year":2020,"avg_temp":10.4,"avg_co2":441.3,"avg_renewable":9.99},{"country":"France","year":2021,"avg_temp":10.3,"avg_co2":456.41,"avg_renewable":12.74},{"country":"France","year":2022,"avg_temp":10.49,"avg_co2":434.49,"avg_renewable":15.97},{"country":"France","year":2023,"avg_temp":10.31,"avg_co2":450.81,"avg_renewable":19.1},{"country":"France","year":2024,"avg_temp":10.46,"avg_co2":460.38,"avg_renewable":22.04},{"country":"Germany","year":2020,"avg_temp":22.46,"avg_co2":452.97,"avg_renewable":10.07},{"country":"Germany","year":2021,"avg_temp":22.4,"avg_co2":450.48,"avg_renewable":12.96},{"country":"Germany","year":2022,"avg_temp":22.48,"avg_co2":449.41,"avg_renewable":15.76},{"country":"Germany","year":2023,"avg_temp":22.52,"avg_co2":446.65,"avg_renewable":19.01},{"country":"Germany","year":2024,"avg_temp":22.35,"avg_co2":447.73,"avg_renewable":22.01},{"country":"India","year":2020,"avg_temp":5.12,"avg_co2":441.07,"avg_renewable":10.11},{"country":"India","year":2021,"avg_temp":5.18,"avg_co2":448.71,"avg_renewable":13.0},{"country":"India","year":2022,"avg_temp":5.21,"avg_co2":455.09,"avg_renewable":15.65},{"country":"India","year":2023,"avg_temp":5.35,"avg_co2":446.14,"avg_renewable":18.98},{"country":"India","year":2024,"avg_temp":5.27,"avg_co2":437.75,"avg_renewable":22.17},{"country":"Indonesia","year":2020,"avg_temp":10.93,"avg_co2":440.9,"avg_renewable":10.06},{"country":"Indonesia","year":2021,"avg_temp":10.93,"avg_co2":433.19,"avg_renewable":12.79},{"country":"Indonesia","year":2022,"avg_temp":10.77,"avg_co2":465.99,"avg_renewable":16.07},{"country":"Indonesia","year":2023,"avg_temp":10.86,"avg_co2":411.24,"avg_renewable":18.96},{"country":"Indonesia","year":2024,"avg_temp":10.81,"avg_co2":437.62,"avg_renewable":21.66},{"country":"Italy","year":2020,"avg_temp":20.49,"avg_co2":445.89,"avg_renewable":9.93},{"country":"Italy","year":2021,"avg_temp":20.45,"avg_co2":445.73,"avg_renewable":12.9},{"country":"Italy","year":2022,"avg_temp":20.46,"avg_co2":464.65,"avg_renewable":15.74},{"country":"Italy","year":2023,"avg_temp":20.54,"avg_co2":426.9,"avg_renewable":19.25},{"country":"Italy","year":2024,"avg_temp":20.54,"avg_co2":429.88,"avg_renewable":21.84},{"country":"Japan","year":2020,"avg_temp":23.67,"avg_co2":463.29,"avg_renewable":9.69},{"country":"Japan","year":2021,"avg_temp":23.64,"avg_co2":423.79,"avg_renewable":12.89},{"country":"Japan","year":2022,"avg_temp":23.7,"avg_co2":439.24,"avg_renewable":15.72},{"country":"Japan","year":2023,"avg_temp":23.62,"avg_co2":464.36,"avg_renewable":19.17},{"country":"Japan","year":2024,"avg_temp":23.7,"avg_co2":456.82,"avg_renewable":22.12},{"country":"Mexico","year":2020,"avg_temp":16.63,"avg_co2":451.11,"avg_renewable":10.06},{"country":"Mexico","year":2021,"avg_temp":16.59,"avg_co2":446.82,"avg_renewable":12.97},{"country":"Mexico","year":2022,"avg_temp":16.38,"avg_co2":447.72,"avg_renewable":16.12},{"country":"Mexico","year":2023,"avg_temp":16.61,"avg_co2":458.79,"avg_renewable":19.21},{"country":"Mexico","year":2024,"avg_temp":16.64,"avg_co2":444.4,"avg_renewable":22.06},{"country":"Netherlands","year":2020,"avg_temp":18.99,"avg_co2":467.03,"avg_renewable":9.87},{"country":"Netherlands","year":2021,"avg_temp":18.96,"avg_co2":430.54,"avg_renewable":12.88},{"country":"Netherlands","year":2022,"avg_temp":19.16,"avg_co2":440.43,"avg_renewable":15.78},{"country":"Netherlands","year":2023,"avg_temp":18.77,"avg_co2":444.7,"avg_renewable":19.07},{"country":"Netherlands","year":2024,"avg_temp":19.02,"avg_co2":449.49,"avg_renewable":22.0},{"country":"Norway","year":2020,"avg_temp":9.02,"avg_co2":439.97,"avg_renewable":9.89},{"country":"Norway","year":2021,"avg_temp":8.9,"avg_co2":453.44,"avg_renewable":12.91},{"country":"Norway","year":2022,"avg_temp":8.93,"avg_co2":451.57,"avg_renewable":15.93},{"country":"Norway","year":2023,"avg_temp":8.92,"avg_co2":446.85,"avg_renewable":19.02},{"country":"Norway","year":2024,"avg_temp":9.02,"avg_co2":447.26,"avg_renewable":21.93},{"country":"Poland","year":2020,"avg_temp":13.26,"avg_co2":454.3,"avg_renewable":9.57},{"country":"Poland","year":2021,"avg_temp":13.14,"avg_co2":440.36,"avg_renewable":12.78},{"country":"Poland","year":2022,"avg_temp":13.11,"avg_co2":432.94,"avg_renewable":16.17},{"country":"Poland","year":2023,"avg_temp":13.15,"avg_co2":434.19,"avg_renewable":18.78},{"country":"Poland","year":2024,"avg_temp":13.12,"avg_co2":468.61,"avg_renewable":21.94},{"country":"South Africa","year":2020,"avg_temp":5.51,"avg_co2":462.37,"avg_renewable":10.03},{"country":"South Africa","year":2021,"avg_temp":5.55,"avg_co2":454.26,"avg_renewable":12.71},{"country":"South Africa","year":2022,"avg_temp":5.63,"avg_co2":428.55,"avg_renewable":15.8},{"country":"South Africa","year":2023,"avg_temp":5.54,"avg_co2":442.02,"avg_renewable":19.1},{"country":"South Africa","year":2024,"avg_temp":5.65,"avg_co2":459.55,"avg_renewable":21.99},{"country":"Spain","year":2020,"avg_temp":15.88,"avg_co2":457.07,"avg_renewable":10.02},{"country":"Spain","year":2021,"avg_temp":15.82,"avg_co2":433.12,"avg_renewable":12.9},{"country":"Spain","year":2022,"avg_temp":15.83,"avg_co2":456.49,"avg_renewable":16.02},{"country":"Spain","year":2023,"avg_temp":15.79,"avg_co2":455.64,"avg_renewable":18.67},{"country":"Spain","year":2024,"avg_temp":15.9,"avg_co2":432.04,"avg_renewable":21.86},{"country":"Sweden","year":2020,"avg_temp":9.12,"avg_co2":450.92,"avg_renewable":10.0},{"country":"Sweden","year":2021,"avg_temp":9.18,"avg_co2":434.21,"avg_renewable":12.72},{"country":"Sweden","year":2022,"avg_temp":9.0,"avg_co2":449.58,"avg_renewable":15.98},{"country":"Sweden","year":2023,"avg_temp":9.05,"avg_co2":427.21,"avg_renewable":18.78},{"country":"Sweden","year":2024,"avg_temp":9.06,"avg_co2":457.41,"avg_renewable":21.96},{"country":"Turkey","year":2020,"avg_temp":8.44,"avg_co2":442.79,"avg_renewable":9.86},{"country":"Turkey","year":2021,"avg_temp":8.2,"avg_co2":440.46,"avg_renewable":13.05},{"country":"Turkey","year":2022,"avg_temp":8.42,"avg_co2":430.76,"avg_renewable":15.83},{"country":"Turkey","year":2023,"avg_temp":8.36,"avg_co2":423.77,"avg_renewable":18.97},{"country":"Turkey","year":2024,"avg_temp":8.36,"avg_co2":423.88,"avg_renewable":21.83},{"country":"United Kingdom","year":2020,"avg_temp":8.69,"avg_co2":454.64,"avg_renewable":9.97},{"country":"United Kingdom","year":2021,"avg_temp":8.83,"avg_co2":425.48,"avg_renewable":13.04},{"country":"United Kingdom","year":2022,"avg_temp":8.82,"avg_co2":452.41,"avg_renewable":16.21},{"country":"United Kingdom","year":2023,"avg_temp":8.85,"avg_co2":449.18,"avg_renewable":19.1},{"country":"United Kingdom","year":2024,"avg_temp":8.97,"avg_co2":432.58,"avg_renewable":21.95},{"country":"United States","year":2020,"avg_temp":7.05,"avg_co2":456.23,"avg_renewable":10.06},{"country":"United States","year":2021,"avg_temp":7.09,"avg_co2":436.7,"avg_renewable":12.92},{"country":"United States","year":2022,"avg_temp":7.09,"avg_co2":454.22,"avg_renewable":15.6},{"country":"United States","year":2023,"avg_temp":7.11,"avg_co2":439.86,"avg_renewable":18.99},{"country":"United States","year":2024,"avg_temp":7.12,"avg_co2":451.09,"avg_renewable":22.03}],"countries":["Germany","France","Netherlands","Italy","Spain","Sweden","Norway","Poland","Turkey","United Kingdom","United States","Canada","Brazil","India","China","Japan","Australia","South Africa","Mexico","Indonesia"]};

// Build per-country lookup
const byCountry = {};
RAW.annual.forEach(r => {
  if (!byCountry[r.country]) byCountry[r.country] = [];
  byCountry[r.country].push(r);
});

// Compute delta (2024 - 2020)
const countries = Object.keys(byCountry).sort();
const countryStats = countries.map(c => {
  const rows = byCountry[c];
  const r2020 = rows.find(r => r.year === 2020);
  const r2024 = rows.find(r => r.year === 2024);
  const delta = r2024.avg_temp - r2020.avg_temp;
  return { country: c, delta, temp2024: r2024.avg_temp, temp2020: r2020.avg_temp,
           co2_2024: r2024.avg_co2, renew2024: r2024.avg_renewable };
});

// Update hero stats
const warming = countryStats.filter(c => c.delta > 0.05).length;
const cooling = countryStats.filter(c => c.delta < -0.05).length;
document.getElementById('stat-warming').textContent = warming;
document.getElementById('stat-cooling').textContent = cooling;

// ── OLS regression ─────────────────────────────────────────────────────────────
function ols(xs, ys) {
  const n = xs.length;
  const xm = xs.reduce((a,b)=>a+b)/n, ym = ys.reduce((a,b)=>a+b)/n;
  const num = xs.reduce((s,x,i)=>s+(x-xm)*(ys[i]-ym),0);
  const den = xs.reduce((s,x)=>s+(x-xm)**2,0);
  const slope = num/den, intercept = ym - slope*xm;
  const res = ys.map((y,i)=>y-(slope*xs[i]+intercept));
  const rss = res.reduce((s,r)=>s+r*r,0);
  const se = Math.sqrt(rss/(n-2));
  return { slope, intercept, se };
}

// ── SORT ───────────────────────────────────────────────────────────────────────
let sortMode = 'delta';
function sortCards(mode) {
  sortMode = mode;
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  event.target.classList.add('active');
  renderGrid();
}

// ── GRID ───────────────────────────────────────────────────────────────────────
let activeCountry = null;
let tempChart = null, co2Chart = null;

function renderGrid() {
  const sorted = [...countryStats].sort((a, b) => {
    if (sortMode === 'delta') return b.delta - a.delta;
    if (sortMode === 'temp') return b.temp2024 - a.temp2024;
    return a.country.localeCompare(b.country);
  });

  const maxAbsDelta = Math.max(...countryStats.map(c => Math.abs(c.delta)));

  const grid = document.getElementById('countryGrid');
  grid.innerHTML = sorted.map(s => {
    const isWarm = s.delta > 0.05;
    const isCool = s.delta < -0.05;
    const tempClass = s.temp2024 > 18 ? 'warm' : 'cool';
    const deltaSign = s.delta > 0 ? '+' : '';
    const pct = Math.abs(s.delta) / maxAbsDelta * 100;
    const active = s.country === activeCountry ? 'active' : '';
    return `
    <div class="country-card ${isWarm?'warming':isCool?'cooling':''} ${active}" onclick="selectCountry('${s.country}')">
      <div class="country-name">${s.country}</div>
      <div class="country-temp ${tempClass}">${s.temp2024.toFixed(1)}°C</div>
      <div class="country-delta ${s.delta>0?'pos':'neg'}">
        ${deltaSign}${s.delta.toFixed(2)}°C since 2020
      </div>
      <div class="trend-bar"><div class="trend-fill" style="width:${pct}%;background:${isWarm?'var(--warm)':isCool?'var(--cool)':'var(--muted)'}"></div></div>
    </div>`;
  }).join('');
}

function selectCountry(c) {
  activeCountry = c;
  renderGrid();
  showDetail(c);
}

function showDetail(c) {
  const rows = byCountry[c];
  const years = rows.map(r => r.year);
  const temps = rows.map(r => r.avg_temp);
  const co2s = rows.map(r => r.avg_co2);
  const rens = rows.map(r => r.avg_renewable);
  const stat = countryStats.find(s => s.country === c);

  const panel = document.getElementById('detailPanel');
  panel.classList.add('visible');
  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  document.getElementById('detailCountry').textContent = c;
  const dir = stat.delta > 0.05 ? '↑ Warming trend' : stat.delta < -0.05 ? '↓ Cooling trend' : '→ Stable';
  document.getElementById('detailSummary').textContent = `${dir} · ${Math.abs(stat.delta).toFixed(3)}°C shift from 2020–2024`;

  document.getElementById('detailMeta').innerHTML = `
    <div class="detail-metric">
      <div class="m-val" style="color:${stat.delta>0?'var(--warm)':'var(--cool)'}">
        ${stat.delta>0?'+':''}${stat.delta.toFixed(3)}°C
      </div>
      <div class="m-lbl">Temp Δ</div>
    </div>
    <div class="detail-metric">
      <div class="m-val">${stat.co2_2024.toFixed(0)}</div>
      <div class="m-lbl">CO₂ 2024</div>
    </div>
    <div class="detail-metric">
      <div class="m-val" style="color:var(--green)">${stat.renew2024.toFixed(1)}%</div>
      <div class="m-lbl">Renewable 2024</div>
    </div>
  `;

  // Temp chart
  if (tempChart) tempChart.destroy();
  tempChart = new Chart(document.getElementById('tempChart'), {
    type: 'line',
    data: {
      labels: years,
      datasets: [{
        data: temps,
        borderColor: stat.delta > 0.05 ? '#f97316' : stat.delta < -0.05 ? '#22d3ee' : '#6b7fa0',
        backgroundColor: stat.delta > 0.05 ? 'rgba(249,115,22,0.08)' : 'rgba(34,211,238,0.08)',
        borderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: '#0d1220',
        fill: true,
        tension: 0.3
      }]
    },
    options: chartOpts(`${temps[0].toFixed(1)} – ${temps[temps.length-1].toFixed(1)}°C`)
  });

  // CO2 + renewable
  if (co2Chart) co2Chart.destroy();
  co2Chart = new Chart(document.getElementById('co2Chart'), {
    type: 'bar',
    data: {
      labels: years,
      datasets: [
        { label: 'CO₂', data: co2s, backgroundColor: 'rgba(249,115,22,0.35)', borderColor: '#f97316', borderWidth: 1, yAxisID: 'y' },
        { label: 'Renewable %', data: rens, type: 'line', borderColor: '#34d399', backgroundColor: 'transparent', borderWidth: 2, pointRadius: 4, pointBackgroundColor: '#0d1220', yAxisID: 'y1', tension: 0.3 }
      ]
    },
    options: {
      ...chartOpts(),
      scales: {
        x: { ticks: { color: '#6b7fa0', font: { family: 'Space Mono', size: 11 } }, grid: { color: '#1e2d47' } },
        y: { ticks: { color: '#6b7fa0', font: { family: 'Space Mono', size: 10 } }, grid: { color: '#1e2d47' }, title: { display: true, text: 'CO₂', color: '#6b7fa0', font: { size: 10 } } },
        y1: { position: 'right', ticks: { color: '#34d399', font: { family: 'Space Mono', size: 10 } }, grid: { display: false }, title: { display: true, text: 'Renew%', color: '#34d399', font: { size: 10 } } }
      }
    }
  });
}

function chartOpts(title='') {
  return {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: title ? { display: false } : { display: false },
      tooltip: {
        backgroundColor: '#0d1220',
        borderColor: '#1e2d47',
        borderWidth: 1,
        titleColor: '#e8edf5',
        bodyColor: '#6b7fa0',
        titleFont: { family: 'Space Mono', size: 11 },
        bodyFont: { family: 'Space Mono', size: 11 }
      }
    },
    scales: {
      x: { ticks: { color: '#6b7fa0', font: { family: 'Space Mono', size: 11 } }, grid: { color: '#1e2d47' } },
      y: { ticks: { color: '#6b7fa0', font: { family: 'Space Mono', size: 11 } }, grid: { color: '#1e2d47' } }
    }
  };
}

// ── TABLE ──────────────────────────────────────────────────────────────────────
function renderTable() {
  const sorted = [...countryStats].sort((a,b) => b.delta - a.delta);
  document.getElementById('tableBody').innerHTML = sorted.map(s => {
    const isWarm = s.delta > 0.05, isCool = s.delta < -0.05;
    const badge = isWarm
      ? `<span class="badge warm">↑ Warming</span>`
      : isCool ? `<span class="badge cool">↓ Cooling</span>`
      : `<span class="badge neutral">→ Stable</span>`;
    return `
    <tr onclick="selectCountry('${s.country}')" style="cursor:pointer">
      <td style="font-family:'Space Grotesk';font-weight:500;color:var(--text)">${s.country}</td>
      <td>${s.temp2020.toFixed(2)}°C</td>
      <td>${s.temp2024.toFixed(2)}°C</td>
      <td style="color:${isWarm?'var(--warm)':isCool?'var(--cool)':'var(--muted)'}">${s.delta>0?'+':''}${s.delta.toFixed(3)}°C</td>
      <td>${badge}</td>
      <td>${s.co2_2024.toFixed(0)}</td>
      <td style="color:var(--green)">${s.renew2024.toFixed(1)}%</td>
    </tr>`;
  }).join('');
}

// ── ML CHART ──────────────────────────────────────────────────────────────────
let mlChart = null;

function populateMLSelect() {
  const sel = document.getElementById('mlCountrySelect');
  countries.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c; opt.textContent = c;
    sel.appendChild(opt);
  });
}

function renderMLChart() {
  const c = document.getElementById('mlCountrySelect').value;
  const rows = byCountry[c];
  const xs = rows.map(r => r.year);
  const ys = rows.map(r => r.avg_temp);

  const { slope, intercept, se } = ols(xs, ys);

  const predYears = [2025, 2026, 2027];
  const allYears = [...xs, ...predYears];
  const fittedObs = xs.map(x => +(slope * x + intercept).toFixed(3));
  const fittedPred = predYears.map(x => +(slope * x + intercept).toFixed(3));

  // 95% CI ≈ ±2*se (simplified)
  const ciUpper = predYears.map(x => +(slope*x+intercept+2*se).toFixed(3));
  const ciLower = predYears.map(x => +(slope*x+intercept-2*se).toFixed(3));

  if (mlChart) mlChart.destroy();
  mlChart = new Chart(document.getElementById('mlChart'), {
    type: 'line',
    data: {
      labels: allYears,
      datasets: [
        {
          label: 'Observed',
          data: [...ys, null, null, null],
          borderColor: '#3b82f6',
          backgroundColor: 'rgba(59,130,246,0.1)',
          borderWidth: 2.5,
          pointRadius: 5,
          pointBackgroundColor: '#0d1220',
          fill: false,
          tension: 0.2
        },
        {
          label: 'OLS Fit (observed)',
          data: [...fittedObs, null, null, null],
          borderColor: 'rgba(59,130,246,0.4)',
          borderWidth: 1,
          borderDash: [],
          pointRadius: 0,
          fill: false,
          tension: 0
        },
        {
          label: 'Forecast',
          data: [null, null, null, null, ...fittedPred],
          borderColor: '#3b82f6',
          borderWidth: 2,
          borderDash: [6, 4],
          pointRadius: 5,
          pointBackgroundColor: '#0d1220',
          fill: false,
          tension: 0
        },
        {
          label: 'CI Upper',
          data: [null, null, null, null, ...ciUpper],
          borderColor: 'transparent',
          backgroundColor: 'rgba(59,130,246,0.12)',
          pointRadius: 0,
          fill: '+1',
          tension: 0
        },
        {
          label: 'CI Lower',
          data: [null, null, null, null, ...ciLower],
          borderColor: 'transparent',
          backgroundColor: 'rgba(59,130,246,0.12)',
          pointRadius: 0,
          fill: false,
          tension: 0
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#0d1220',
          borderColor: '#1e2d47',
          borderWidth: 1,
          titleColor: '#e8edf5',
          bodyColor: '#6b7fa0',
          filter: item => item.datasetIndex < 3
        }
      },
      scales: {
        x: { ticks: { color: '#6b7fa0', font: { family: 'Space Mono', size: 11 } }, grid: { color: '#1e2d47' } },
        y: { ticks: { color: '#6b7fa0', font: { family: 'Space Mono', size: 11 } }, grid: { color: '#1e2d47' } }
      }
    }
  });
}

// ── INIT ───────────────────────────────────────────────────────────────────────
renderGrid();
renderTable();
populateMLSelect();
renderMLChart();
