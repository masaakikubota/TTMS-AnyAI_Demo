// TTMS: TikTok MarketScope — Touchpoint + Correlation A1/B1/B2 combined dashboard
window.TTMSPage = {
  render(category, container) {
    const tp = window.MOCK_DATA[category].touchpoint;
    const corr = window.MOCK_DATA[category].correlation;
    const weeks = window.MOCK_DATA.weeks;
    const C = window.DashboardCharts;

    container.innerHTML = `
      <!-- 1. Scorecards: ACC Funnel with Benchmark -->
      <div class="scorecard-grid">
        ${this._scorecardBM('Awareness Audience', C.formatCompact(tp.scorecards.awarenessAudience.value), tp.scorecards.awarenessAudience.change, C.formatCompact(tp.scorecards.awarenessAudience.benchmark))}
        ${this._scorecardBM('Consideration Audience', C.formatCompact(tp.scorecards.considerationAudience.value), tp.scorecards.considerationAudience.change, C.formatCompact(tp.scorecards.considerationAudience.benchmark))}
        ${this._scorecardBM('Conversion Audience', C.formatCompact(tp.scorecards.conversionAudience.value), tp.scorecards.conversionAudience.change, C.formatCompact(tp.scorecards.conversionAudience.benchmark))}
        ${this._scorecardBM('A→C Transition Rate', C.formatPercent(tp.scorecards.acTransitionRate.value), tp.scorecards.acTransitionRate.change, C.formatPercent(tp.scorecards.acTransitionRate.benchmark))}
      </div>

      <!-- 2. Touchpoint Transition Scale Trend (metric selector) -->
      <div class="chart-card">
        <div class="d1-header">
          <div class="chart-card-title" style="margin-bottom:0;flex:1">Touchpoint Transition Scale (Weekly)</div>
          <div class="metric-selector-wrap">
            <select id="tpTrendSelect" class="metric-select">
              ${tp.touchpointTrend.map((m, i) =>
                '<option value="' + i + '"' + (i === 0 ? ' selected' : '') + '>' + m.label + '</option>'
              ).join('')}
            </select>
          </div>
        </div>
        <div class="chart-container" style="height:280px">
          <canvas id="chartTpTrend"></canvas>
        </div>
      </div>

      <!-- 3. Touchpoint Transition: Combo Chart -->
      <div class="chart-card">
        <div class="chart-card-title">Touchpoint Transition Scale & Rate (L2→L3)</div>
        <div class="chart-container" style="height:320px">
          <canvas id="chartTouchpointCombo"></canvas>
        </div>
      </div>

      <!-- 5. Search Insights (two-column) -->
      <div class="chart-grid-2">
        <div class="chart-card">
          <div class="chart-card-title">Search Volume & Unique Users</div>
          <div class="chart-container" style="height:250px">
            <canvas id="chartSearchVolume"></canvas>
          </div>
        </div>
        <div class="chart-card">
          <div class="chart-card-title">Post-Search CTR (%)</div>
          <div class="chart-container" style="height:250px">
            <canvas id="chartSearchCTR"></canvas>
          </div>
        </div>
      </div>

      <!-- 6. A1: Touchpoint Transition Scale vs GMV Correlation -->
      <div class="chart-card">
        <div class="chart-card-title">A1: Touchpoint Transition Scale vs GMV Correlation</div>
        <div class="chart-container" style="height:280px">
          <canvas id="chartA1"></canvas>
        </div>
      </div>

      <!-- 7. B1 & B2 side by side -->
      <div class="chart-grid-2">
        <div class="chart-card">
          <div class="chart-card-title">B1: A→C Transition Rate vs GMV</div>
          <div class="chart-container" style="height:280px">
            <canvas id="chartB1"></canvas>
          </div>
        </div>
        <div class="chart-card">
          <div class="chart-card-title">B2: 6s Views vs GMV</div>
          <div class="chart-container" style="height:280px">
            <canvas id="chartB2"></canvas>
          </div>
        </div>
      </div>
    `;

    // 2. Touchpoint Transition Scale Trend (with metric selector)
    const self = this;
    this._tpTrendData = tp.touchpointTrend;
    this._tpTrendWeeks = weeks;
    this._renderTpTrend(0);

    document.getElementById('tpTrendSelect').addEventListener('change', function() {
      self._renderTpTrend(parseInt(this.value, 10));
    });

    // 3. Touchpoint Combo (bars = scales, lines = transition rate & BM rate)
    var tpLabels = tp.transitions.map(function (t) { return t.touchpoint; });
    C.createComboChart('chartTouchpointCombo', tpLabels,
      [
        { label: 'Awareness Scale', data: tp.transitions.map(function (t) { return t.awarenessScale; }), colorIndex: 0 },
        { label: 'Consideration Scale', data: tp.transitions.map(function (t) { return t.considerationScale; }), colorIndex: 1 }
      ],
      [
        { label: 'Transition Rate (%)', data: tp.transitions.map(function (t) { return t.transitionRate; }), colorIndex: 3 },
        { label: 'BM Rate (%)', data: tp.transitions.map(function (t) { return t.benchmarkRate; }), colorIndex: 5 }
      ]
    );

    // 5a. Search Volume combo
    C.createComboChart('chartSearchVolume', weeks,
      [{ label: 'Search Volume', data: tp.searchData.volume, colorIndex: 0 }],
      [{ label: 'Unique Users', data: tp.searchData.uniqueUsers, colorIndex: 1 }]
    );

    // 5b. Post-Search CTR line
    C.createLineChart('chartSearchCTR', weeks, [
      { label: 'Post-Search CTR', data: tp.searchData.postSearchCTR, colorIndex: 1 }
    ]);

    // 6. A1: Horizontal bar — correlation coefficients
    C.createHorizontalBarChart('chartA1', corr.a1.touchpoints, [
      { label: 'GMV Correlation (r)', data: corr.a1.gmvCorr, colorIndex: 0 }
    ]);

    // 7a. B1: Dual-axis — A→C rate vs GMV
    C.createComboChart('chartB1', weeks,
      [{ label: 'GMV (฿)', data: corr.b1.gmv, colorIndex: 0 }],
      [{ label: 'A→C Rate (%)', data: corr.b1.acRate, colorIndex: 1 }]
    );

    // 7b. B2: Dual-axis — 6s views vs GMV
    C.createComboChart('chartB2', weeks,
      [{ label: 'GMV (฿)', data: corr.b2.gmv, colorIndex: 0 }],
      [{ label: '6s Views', data: corr.b2.sixSecViews, colorIndex: 1 }]
    );
  },

  _scorecardBM(label, value, change, bmValue) {
    const cls = change >= 0 ? 'positive' : 'negative';
    const arrow = change >= 0 ? '▲' : '▼';
    return `
      <div class="scorecard">
        <div class="scorecard-header">${label}</div>
        <div class="scorecard-body">
          <div class="scorecard-value">${value}</div>
          <div class="scorecard-change ${cls}">${arrow} ${Math.abs(change).toFixed(1)}%</div>
          <div style="font-size:11px;color:#5f6368;margin-top:4px">BM: ${bmValue}</div>
        </div>
      </div>
    `;
  },

  _tpTrendChart: null,
  _tpTrendData: null,
  _tpTrendWeeks: null,

  _renderTpTrend(index) {
    const metric = this._tpTrendData[index];
    const weeks = this._tpTrendWeeks;
    const C = window.DashboardCharts;
    const COLORS = C.COLORS;
    const COLORS_ALPHA = C.COLORS_ALPHA;

    if (this._tpTrendChart) {
      this._tpTrendChart.destroy();
      this._tpTrendChart = null;
    }

    const ctx = document.getElementById('chartTpTrend');
    this._tpTrendChart = new Chart(ctx.getContext('2d'), {
      type: 'line',
      data: {
        labels: weeks,
        datasets: [
          {
            label: 'Brand',
            data: metric.brand,
            borderColor: COLORS[0],
            backgroundColor: COLORS_ALPHA[0],
            pointBackgroundColor: COLORS[0],
            pointBorderColor: '#fff',
            pointRadius: 5,
            pointHoverRadius: 7,
            tension: 0.3,
            fill: false,
            borderWidth: 2.5
          },
          {
            label: 'Benchmark',
            data: metric.benchmark,
            borderColor: COLORS[1],
            backgroundColor: COLORS_ALPHA[1],
            pointBackgroundColor: COLORS[1],
            pointBorderColor: '#fff',
            pointRadius: 5,
            pointHoverRadius: 7,
            tension: 0.3,
            fill: false,
            borderWidth: 2.5
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              font: { family: "'Roboto', sans-serif", size: 11 },
              usePointStyle: true,
              padding: 16
            }
          },
          tooltip: {
            backgroundColor: '#333',
            padding: 10,
            cornerRadius: 6,
            titleFont: { family: "'Roboto', sans-serif" },
            bodyFont: { family: "'Roboto', sans-serif" },
            callbacks: {
              label: function(context) {
                return context.dataset.label + ': ' + C.formatNumber(context.parsed.y);
              }
            }
          }
        },
        scales: {
          x: {
            grid: { color: '#f0f0f0' },
            ticks: { font: { family: "'Roboto', sans-serif", size: 11 } }
          },
          y: {
            grid: { color: '#f0f0f0' },
            ticks: {
              font: { family: "'Roboto', sans-serif", size: 11 },
              callback: function(v) { return C.formatCompact(v); }
            },
            title: {
              display: true,
              text: 'Transition Scale',
              font: { family: "'Roboto', sans-serif", size: 11 }
            }
          }
        }
      }
    });
  }
};
