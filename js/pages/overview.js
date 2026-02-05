// P1: Overview — GMV Summary + Correlation Hypothesis Dual-Axis Charts (Section 4 of proposal)
window.OverviewPage = {
  _charts: [],

  // Colors for left-axis datasets (input metrics) — solid lines
  _LEFT_COLORS: ['#E91E63', '#9C27B0', '#00BCD4', '#795548', '#607D8B'],
  // Colors for right-axis datasets (GMV) — dashed lines
  _RIGHT_COLORS: ['#3C459A', '#F18B00', '#4CAF50'],

  render(category, container) {
    var data = window.MOCK_DATA[category].overview;
    var weeks = window.MOCK_DATA.weeks;
    var C = window.DashboardCharts;
    var self = this;

    // Destroy any existing charts
    this._charts.forEach(function(c) { if (c) c.destroy(); });
    this._charts = [];

    // Build HTML — one chart card per hypothesis item, grouped by section
    var chartsHtml = '';
    var chartIdx = 0;
    data.hypotheses.forEach(function(group) {
      // Group section header
      chartsHtml += ''
        + '<div style="margin:24px 0 8px;padding:0 2px">'
        + '  <div style="font-size:13px;font-weight:700;color:#3C459A;letter-spacing:0.3px">'
        +      group.group + ' ' + group.groupTitle
        + '  </div>'
        + '</div>';

      group.items.forEach(function(item) {
        var h = item.left.length > 3 ? '360px' : '280px';
        chartsHtml += ''
          + '<div class="chart-card">'
          + '  <div class="chart-card-title">' + item.id + ': ' + item.title + '</div>'
          + '  <div class="chart-container" style="height:' + h + '">'
          + '    <canvas id="chartHyp' + chartIdx + '"></canvas>'
          + '  </div>'
          + '</div>';
        chartIdx++;
      });
    });

    container.innerHTML = ''
      + '<div class="scorecard-grid">'
      +   self._scorecard('TTS GMV (OS)', C.formatTHB(data.scorecards.ttsGmvOS.value), data.scorecards.ttsGmvOS.change)
      +   self._scorecard('TTS GMV (AFF)', C.formatTHB(data.scorecards.ttsGmvAFF.value), data.scorecards.ttsGmvAFF.change)
      +   self._scorecard('Shopee GMV', C.formatTHB(data.scorecards.shopeeGmv.value), data.scorecards.shopeeGmv.change)
      +   self._scorecard('Total GMV', C.formatTHB(data.scorecards.totalGmv.value), data.scorecards.totalGmv.change)
      + '</div>'
      + '<div class="chart-card">'
      + '  <div class="chart-card-title">GMV Trend (Weekly)</div>'
      + '  <div class="chart-container" style="height:280px">'
      + '    <canvas id="chartGmvTrend"></canvas>'
      + '  </div>'
      + '</div>'
      + chartsHtml;

    // GMV Trend chart
    C.createLineChart('chartGmvTrend', weeks, [
      { label: 'TTS OS', data: data.gmvTrend.os, colorIndex: 0 },
      { label: 'TTS AFF', data: data.gmvTrend.aff, colorIndex: 1 },
      { label: 'Shopee', data: data.gmvTrend.shopee, colorIndex: 2 }
    ]);

    // Render all hypothesis charts
    var LEFT_COLORS = self._LEFT_COLORS;
    var RIGHT_COLORS = self._RIGHT_COLORS;
    chartIdx = 0;
    data.hypotheses.forEach(function(group) {
      group.items.forEach(function(hyp) {
        var canvasId = 'chartHyp' + chartIdx;
        var leftFmt = self._fmtFn(hyp.leftFormat);
        var rightFmt = self._fmtFn(hyp.rightFormat);

        // Build datasets
        var datasets = [];

        // Left-axis datasets (solid lines)
        hyp.left.forEach(function(ds, i) {
          var color = LEFT_COLORS[i % LEFT_COLORS.length];
          datasets.push({
            label: ds.label,
            data: ds.data,
            borderColor: color,
            backgroundColor: color + '33',
            pointBackgroundColor: color,
            pointBorderColor: '#fff',
            pointRadius: 4,
            pointHoverRadius: 6,
            tension: 0.3,
            fill: false,
            borderWidth: 2.5,
            yAxisID: 'y'
          });
        });

        // Right-axis datasets (dashed lines)
        hyp.right.forEach(function(ds, i) {
          var color = RIGHT_COLORS[i % RIGHT_COLORS.length];
          datasets.push({
            label: ds.label,
            data: ds.data,
            borderColor: color,
            backgroundColor: color + '33',
            pointBackgroundColor: color,
            pointBorderColor: '#fff',
            pointRadius: 3,
            pointHoverRadius: 5,
            tension: 0.3,
            fill: false,
            borderWidth: 2,
            borderDash: [6, 3],
            yAxisID: 'y1'
          });
        });

        var ctx = document.getElementById(canvasId);
        var chart = new Chart(ctx.getContext('2d'), {
          type: 'line',
          data: { labels: weeks, datasets: datasets },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
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
                    var ds = context.dataset;
                    var val = context.parsed.y;
                    if (ds.yAxisID === 'y') return ds.label + ': ' + leftFmt(val);
                    return ds.label + ': ' + rightFmt(val);
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
                type: 'linear',
                position: 'left',
                grid: { color: '#f0f0f0' },
                ticks: {
                  font: { family: "'Roboto', sans-serif", size: 11 },
                  color: LEFT_COLORS[0],
                  callback: leftFmt
                },
                title: {
                  display: true,
                  text: hyp.leftAxis,
                  color: LEFT_COLORS[0],
                  font: { family: "'Roboto', sans-serif", size: 11 }
                }
              },
              y1: {
                type: 'linear',
                position: 'right',
                grid: { drawOnChartArea: false },
                ticks: {
                  font: { family: "'Roboto', sans-serif", size: 11 },
                  color: RIGHT_COLORS[0],
                  callback: rightFmt
                },
                title: {
                  display: true,
                  text: hyp.rightAxis,
                  color: RIGHT_COLORS[0],
                  font: { family: "'Roboto', sans-serif", size: 11 }
                }
              }
            }
          }
        });
        self._charts.push(chart);
        chartIdx++;
      });
    });
  },

  // -------------------------------------------------------------------------
  // Format function factory
  // -------------------------------------------------------------------------
  _fmtFn(format) {
    var C = window.DashboardCharts;
    switch (format) {
      case 'compact': return function(v) { return C.formatCompact(v); };
      case 'percent': return function(v) { return v.toFixed(1) + '%'; };
      case 'number':  return function(v) { return C.formatNumber(v); };
      default:        return function(v) { return C.formatCompact(v); };
    }
  },

  // -------------------------------------------------------------------------
  // Scorecard helper
  // -------------------------------------------------------------------------
  _scorecard(label, value, change) {
    var cls = change >= 0 ? 'positive' : 'negative';
    var arrow = change >= 0 ? '\u25B2' : '\u25BC';
    return '<div class="scorecard">'
      + '<div class="scorecard-header">' + label + '</div>'
      + '<div class="scorecard-body">'
      + '  <div class="scorecard-value">' + value + '</div>'
      + '  <div class="scorecard-change ' + cls + '">' + arrow + ' ' + Math.abs(change).toFixed(1) + '%</div>'
      + '</div>'
      + '</div>';
  }
};
