// SellerCenter — TikTok Shop SellerCenter Data View
window.SellerCenterPage = {
  render(category, container) {
    const seller = window.MOCK_DATA[category].sellercenter;
    const overview = window.MOCK_DATA[category].overview;
    const corr = window.MOCK_DATA[category].correlation;
    const weeks = window.MOCK_DATA.weeks;
    const C = window.DashboardCharts;

    container.innerHTML = `
      <!-- Scorecards -->
      <div class="scorecard-grid">
        ${this._scorecard('Total Orders', C.formatNumber(seller.scorecards.totalOrders.value), seller.scorecards.totalOrders.change)}
        ${this._scorecard('Units Sold', C.formatNumber(seller.scorecards.unitsSold.value), seller.scorecards.unitsSold.change)}
        ${this._scorecard('AOV (฿)', C.formatTHB(seller.scorecards.avgOrderValue.value), seller.scorecards.avgOrderValue.change)}
        ${this._scorecard('Refund Rate (%)', seller.scorecards.refundRate.value + '%', seller.scorecards.refundRate.change)}
      </div>

      <!-- GMV & Orders Trend (combo chart) -->
      <div class="chart-card">
        <div class="chart-card-title">GMV & Orders Trend</div>
        <div class="chart-container" style="height:280px">
          <canvas id="chartGmvOrders"></canvas>
        </div>
      </div>

      <!-- Two-column grid: Revenue by Channel + Conversion Funnel -->
      <div class="chart-grid-2">
        <div class="chart-card">
          <div class="chart-card-title">Revenue by Channel</div>
          <div class="chart-container" style="height:250px">
            <canvas id="chartRevChannel"></canvas>
          </div>
        </div>
        <div class="chart-card">
          <div class="chart-card-title">Conversion Funnel</div>
          <div class="chart-container" style="height:250px">
            <canvas id="chartFunnel"></canvas>
          </div>
        </div>
      </div>

      <!-- Video Trend Charts -->
      <div class="chart-grid-2">
        <div class="chart-card">
          <div class="chart-card-title">Video Count by Channel</div>
          <div class="chart-container" style="height:250px">
            <canvas id="chartVideoCount"></canvas>
          </div>
        </div>
        <div class="chart-card">
          <div class="chart-card-title">Video Views & GMV</div>
          <div class="chart-container" style="height:250px">
            <canvas id="chartVideoViewsGmv"></canvas>
          </div>
        </div>
      </div>

      <!-- Live Trend Charts -->
      <div class="chart-grid-2">
        <div class="chart-card">
          <div class="chart-card-title">Live Count by Channel</div>
          <div class="chart-container" style="height:250px">
            <canvas id="chartLiveCount"></canvas>
          </div>
        </div>
        <div class="chart-card">
          <div class="chart-card-title">Live Viewers & GMV</div>
          <div class="chart-container" style="height:250px">
            <canvas id="chartLiveViewersGmv"></canvas>
          </div>
        </div>
      </div>

      <!-- D1: TTS GMV vs Shopee GMV -->
      <div class="chart-card">
        <div class="d1-header">
          <div class="chart-card-title" style="margin-bottom:0;flex:1">D1: TTS GMV vs Shopee GMV (Spillover Effect)</div>
          <div class="metric-selector-wrap">
            <select id="d1MetricSelect" class="metric-select">
              <option value="">+ Add Metric</option>
              ${Object.keys(corr.d1.overlayMetrics).map(key => {
                const m = corr.d1.overlayMetrics[key];
                return '<option value="' + key + '">' + m.label + '</option>';
              }).join('')}
            </select>
          </div>
        </div>
        <div class="chart-container" style="height:280px">
          <canvas id="chartD1"></canvas>
        </div>
      </div>
    `;

    // GMV & Orders Trend (combo chart)
    C.createComboChart('chartGmvOrders', weeks,
      [
        { label: 'TTS OS', data: overview.gmvTrend.os, colorIndex: 0 },
        { label: 'TTS AFF', data: overview.gmvTrend.aff, colorIndex: 1 }
      ],
      [
        { label: 'Orders', data: seller.ordersTrend, colorIndex: 3 }
      ]
    );

    // Revenue by Channel (doughnut)
    C.createDoughnutChart('chartRevChannel',
      ['Official Store', 'Affiliate'],
      [seller.revenueByChannel.os, seller.revenueByChannel.aff]
    );

    // Conversion Funnel (horizontal bar)
    var funnelLabels = seller.conversionFunnel.map(function(f) { return f.stage; });
    var funnelData = seller.conversionFunnel.map(function(f) { return f.value; });
    C.createHorizontalBarChart('chartFunnel', funnelLabels, [
      { label: 'Volume', data: funnelData, colorIndex: 0 }
    ]);

    // Video Count by Channel (stacked bar)
    C.createStackedBarChart('chartVideoCount', weeks, [
      { label: 'Official Store', data: seller.videoWeekly.countOS, colorIndex: 0 },
      { label: 'Affiliate', data: seller.videoWeekly.countAFF, colorIndex: 1 }
    ]);

    // Video Views & GMV (combo: bar=GMV, line=Views)
    C.createComboChart('chartVideoViewsGmv', weeks,
      [{ label: 'GMV (฿)', data: seller.videoWeekly.gmv, colorIndex: 0 }],
      [{ label: 'Views', data: seller.videoWeekly.views, colorIndex: 1 }]
    );

    // Live Count by Channel (stacked bar)
    C.createStackedBarChart('chartLiveCount', weeks, [
      { label: 'Official Store', data: seller.liveWeekly.countOS, colorIndex: 0 },
      { label: 'Affiliate', data: seller.liveWeekly.countAFF, colorIndex: 1 }
    ]);

    // Live Viewers & GMV (combo: bar=GMV, line=Viewers)
    C.createComboChart('chartLiveViewersGmv', weeks,
      [{ label: 'GMV (฿)', data: seller.liveWeekly.gmv, colorIndex: 0 }],
      [{ label: 'Viewers', data: seller.liveWeekly.viewers, colorIndex: 1 }]
    );

    // D1: TTS GMV vs Shopee GMV (with optional overlay metric)
    const self = this;
    this._d1Data = corr;
    this._d1Weeks = weeks;
    this._renderD1Chart(null);

    document.getElementById('d1MetricSelect').addEventListener('change', function() {
      self._renderD1Chart(this.value || null);
    });
  },

  _scorecard(label, value, change) {
    const cls = change >= 0 ? 'positive' : 'negative';
    const arrow = change >= 0 ? '\u25B2' : '\u25BC';
    return `
      <div class="scorecard">
        <div class="scorecard-header">${label}</div>
        <div class="scorecard-body">
          <div class="scorecard-value">${value}</div>
          <div class="scorecard-change ${cls}">${arrow} ${Math.abs(change).toFixed(1)}%</div>
        </div>
      </div>
    `;
  },

  _d1Chart: null,
  _d1Data: null,
  _d1Weeks: null,

  _renderD1Chart(selectedMetric) {
    const data = this._d1Data;
    const weeks = this._d1Weeks;
    const COLORS = window.DashboardCharts.COLORS;
    const COLORS_ALPHA = window.DashboardCharts.COLORS_ALPHA;
    const C = window.DashboardCharts;

    if (this._d1Chart) {
      this._d1Chart.destroy();
      this._d1Chart = null;
    }

    const datasets = [
      {
        label: 'TTS GMV',
        data: data.d1.ttsGmv,
        borderColor: COLORS[0],
        backgroundColor: COLORS_ALPHA[0],
        pointBackgroundColor: COLORS[0],
        pointBorderColor: '#fff',
        pointRadius: 4,
        pointHoverRadius: 6,
        tension: 0.3,
        fill: false,
        borderWidth: 2,
        yAxisID: 'y'
      },
      {
        label: 'Shopee GMV',
        data: data.d1.shopeeGmv,
        borderColor: COLORS[1],
        backgroundColor: COLORS_ALPHA[1],
        pointBackgroundColor: COLORS[1],
        pointBorderColor: '#fff',
        pointRadius: 4,
        pointHoverRadius: 6,
        tension: 0.3,
        fill: false,
        borderWidth: 2,
        yAxisID: 'y'
      }
    ];

    const scales = {
      x: {
        grid: { color: '#f0f0f0' },
        ticks: { font: { family: "'Roboto', sans-serif", size: 11 } }
      },
      y: {
        type: 'linear',
        position: 'left',
        grid: { color: '#f0f0f0' },
        ticks: {
          font: { family: "'Roboto', sans-serif", size: 11 },
          callback: function(v) { return C.formatCompact(v); }
        },
        title: {
          display: true,
          text: 'GMV (\u0E3F)',
          font: { family: "'Roboto', sans-serif", size: 11 }
        }
      }
    };

    if (selectedMetric && data.d1.overlayMetrics[selectedMetric]) {
      const metric = data.d1.overlayMetrics[selectedMetric];
      datasets.push({
        label: metric.label,
        data: metric.data,
        borderColor: COLORS[4],
        backgroundColor: COLORS_ALPHA[4],
        pointBackgroundColor: COLORS[4],
        pointBorderColor: '#fff',
        pointRadius: 5,
        pointHoverRadius: 7,
        tension: 0.3,
        fill: false,
        borderWidth: 2.5,
        borderDash: [6, 3],
        yAxisID: 'y1'
      });

      const fmt = metric.format;
      scales.y1 = {
        type: 'linear',
        position: 'right',
        grid: { drawOnChartArea: false },
        ticks: {
          font: { family: "'Roboto', sans-serif", size: 11 },
          color: COLORS[4],
          callback: function(v) {
            if (fmt === 'percent') return v.toFixed(1) + '%';
            if (fmt === 'decimal') return v.toFixed(2);
            if (fmt === 'compact') return C.formatCompact(v);
            if (fmt === 'number') return C.formatNumber(v);
            return v;
          }
        },
        title: {
          display: true,
          text: metric.label,
          color: COLORS[4],
          font: { family: "'Roboto', sans-serif", size: 11 }
        }
      };
    }

    const ctx = document.getElementById('chartD1');
    this._d1Chart = new Chart(ctx.getContext('2d'), {
      type: 'line',
      data: { labels: weeks, datasets: datasets },
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
            bodyFont: { family: "'Roboto', sans-serif" }
          }
        },
        scales: scales
      }
    });
  }
};
