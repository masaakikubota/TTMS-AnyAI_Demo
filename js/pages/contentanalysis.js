// P5: Content Analysis (AnyAI) — Content + KOL Format + Correlation C1/C2
window.ContentAnalysisPage = {
  render(category, container) {
    const data = window.MOCK_DATA[category].content;
    const corr = window.MOCK_DATA[category].correlation;
    const weeks = window.MOCK_DATA.weeks;
    const C = window.DashboardCharts;
    const self = this;

    container.innerHTML = `
      <!-- Scorecards -->
      <div class="scorecard-grid">
        ${this._scorecard('Videos Analyzed', C.formatNumber(data.scorecards.totalVideosAnalyzed.value), data.scorecards.totalVideosAnalyzed.change)}
        ${this._scorecard('Avg. Sentiment Score', data.scorecards.avgSentimentScore.value.toFixed(2), data.scorecards.avgSentimentScore.change)}
        ${this._scorecard('Top Appeal Axis', data.scorecards.topAxis.value, data.scorecards.topAxis.change)}
        ${this._scorecard('Engagement Rate', C.formatPercent(data.scorecards.engagementRate.value), data.scorecards.engagementRate.change)}
      </div>

      <!-- ================================================================= -->
      <!-- Appeal Axis Section                                               -->
      <!-- ================================================================= -->

      <!-- Content Appeal Axes Horizontal Bar -->
      <div class="chart-card">
        <div class="chart-card-title">Content Appeal Axes &mdash; Ratio (%)</div>
        <div class="chart-container" style="height:360px">
          <canvas id="chartAppealAxes"></canvas>
        </div>
      </div>

      <!-- Appeal Axis Mention Trend (line chart) -->
      <div class="chart-card">
        <div class="chart-card-title">Appeal Axis Mention Trend (Weekly)</div>
        <div class="chart-container" style="height:320px">
          <canvas id="chartAppealTrend"></canvas>
        </div>
      </div>

      <!-- Comment Mention Sentiment Heatmap -->
      <div class="table-card">
        <div class="table-card-header">
          <div class="table-title">Comment Mention &mdash; Sentiment Heatmap</div>
          <div class="heatmap-legend">
            <span class="heatmap-legend-item"><span class="heatmap-swatch" style="background:#c62828"></span>Negative</span>
            <span class="heatmap-legend-item"><span class="heatmap-swatch" style="background:#fff9c4"></span>Neutral</span>
            <span class="heatmap-legend-item"><span class="heatmap-swatch" style="background:#2e7d32"></span>Positive</span>
          </div>
        </div>
        <div style="overflow-x:auto">
          <table class="data-table heatmap-table">
            <thead>
              <tr>
                <th>Axis</th>
                ${weeks.map(w => '<th class="num">' + w + '</th>').join('')}
              </tr>
            </thead>
            <tbody>
              ${data.commentAxesTrend.map(r => {
                return '<tr><td>' + r.axis + '</td>'
                  + r.positive.map((p, i) => {
                    const n = r.negative[i];
                    const neu = r.neutral[i];
                    const total = p + neu + n;
                    const posRate = total > 0 ? p / total : 0;
                    let bg;
                    if (posRate >= 0.8) {
                      const t = (posRate - 0.8) / 0.2;
                      bg = 'rgba(46,125,50,' + (0.15 + t * 0.35).toFixed(2) + ')';
                    } else if (posRate >= 0.6) {
                      const t = (posRate - 0.6) / 0.2;
                      bg = 'rgba(46,125,50,' + (0.08 + t * 0.07).toFixed(2) + ')';
                    } else {
                      const t = (0.6 - posRate) / 0.6;
                      bg = 'rgba(198,40,40,' + (0.10 + t * 0.40).toFixed(2) + ')';
                    }
                    return '<td class="num heatmap-cell" style="background:' + bg + '">'
                      + '<div class="hm-total">' + total + '</div>'
                      + '<div class="hm-detail">+' + p + ' -' + n + '</div>'
                      + '</td>';
                  }).join('')
                  + '</tr>';
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Sentiment Trend Stacked Bar -->
      <div class="chart-card">
        <div class="chart-card-title">Sentiment Trend (Weekly)</div>
        <div class="chart-container" style="height:250px">
          <canvas id="chartSentimentTrend"></canvas>
        </div>
      </div>

      <!-- ================================================================= -->
      <!-- KOL Format Section                                                -->
      <!-- ================================================================= -->
      <div style="margin:36px 0 16px;padding:0 2px">
        <div style="font-size:15px;font-weight:700;color:#3C459A;letter-spacing:0.3px;border-bottom:2px solid #3C459A;padding-bottom:6px">
          KOL Format Analysis
        </div>
      </div>

      <!-- KOL Format Ratio Horizontal Bar -->
      <div class="chart-card">
        <div class="chart-card-title">KOL Content Format &mdash; Ratio (%)</div>
        <div class="chart-container" style="height:320px">
          <canvas id="chartKolFormats"></canvas>
        </div>
      </div>

      <!-- KOL Format Trend (line chart) -->
      <div class="chart-card">
        <div class="chart-card-title">KOL Format Trend (Weekly)</div>
        <div class="chart-container" style="height:320px">
          <canvas id="chartKolFormatTrend"></canvas>
        </div>
      </div>

      <!-- KOL Format Sentiment Heatmap -->
      <div class="table-card">
        <div class="table-card-header">
          <div class="table-title">KOL Format &mdash; Sentiment Heatmap</div>
          <div class="heatmap-legend">
            <span class="heatmap-legend-item"><span class="heatmap-swatch" style="background:#c62828"></span>Negative</span>
            <span class="heatmap-legend-item"><span class="heatmap-swatch" style="background:#fff9c4"></span>Neutral</span>
            <span class="heatmap-legend-item"><span class="heatmap-swatch" style="background:#2e7d32"></span>Positive</span>
          </div>
        </div>
        <div style="overflow-x:auto">
          <table class="data-table heatmap-table">
            <thead>
              <tr>
                <th>Format</th>
                ${weeks.map(w => '<th class="num">' + w + '</th>').join('')}
              </tr>
            </thead>
            <tbody>
              ${data.kolFormatsCommentTrend.map(r => {
                return '<tr><td>' + r.format + '</td>'
                  + r.positive.map((p, i) => {
                    const n = r.negative[i];
                    const neu = r.neutral[i];
                    const total = p + neu + n;
                    const posRate = total > 0 ? p / total : 0;
                    let bg;
                    if (posRate >= 0.8) {
                      const t = (posRate - 0.8) / 0.2;
                      bg = 'rgba(46,125,50,' + (0.15 + t * 0.35).toFixed(2) + ')';
                    } else if (posRate >= 0.6) {
                      const t = (posRate - 0.6) / 0.2;
                      bg = 'rgba(46,125,50,' + (0.08 + t * 0.07).toFixed(2) + ')';
                    } else {
                      const t = (0.6 - posRate) / 0.6;
                      bg = 'rgba(198,40,40,' + (0.10 + t * 0.40).toFixed(2) + ')';
                    }
                    return '<td class="num heatmap-cell" style="background:' + bg + '">'
                      + '<div class="hm-total">' + total + '</div>'
                      + '<div class="hm-detail">+' + p + ' -' + n + '</div>'
                      + '</td>';
                  }).join('')
                  + '</tr>';
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- ================================================================= -->
      <!-- Correlation Section                                               -->
      <!-- ================================================================= -->
      <div style="margin:36px 0 16px;padding:0 2px">
        <div style="font-size:15px;font-weight:700;color:#3C459A;letter-spacing:0.3px;border-bottom:2px solid #3C459A;padding-bottom:6px">
          Correlation Analysis
        </div>
      </div>

      <!-- C1: Appeal Axis Ratio vs GMV Correlation Horizontal Bar -->
      <div class="chart-card">
        <div class="chart-card-title">C1: Appeal Axis Ratio vs GMV Correlation</div>
        <div class="chart-container" style="height:280px">
          <canvas id="chartC1"></canvas>
        </div>
      </div>

      <!-- C1 Detail Table -->
      <div class="table-card">
        <div class="table-card-header">
          <div class="table-title">C1: Appeal Axis &times; GMV Correlation Detail</div>
          <div class="table-actions">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/></svg>
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
          </div>
        </div>
        <table class="data-table">
          <thead>
            <tr>
              <th>Appeal Axis</th>
              <th class="num">Correlation (r)</th>
              <th class="num">Interpretation</th>
            </tr>
          </thead>
          <tbody>
            ${corr.c1.axes.map((ax, i) => {
              const r = corr.c1.correlation[i];
              const interp = r > 0.5 ? 'GMV increase when emphasized' :
                             r > 0.2 ? 'Slight positive effect' :
                             r > -0.2 ? 'No clear relationship' :
                             'May reduce GMV when emphasized';
              const cls = r > 0.3 ? 'text-green' : r > -0.2 ? '' : 'text-red';
              return `
                <tr>
                  <td>${ax}</td>
                  <td class="num fw-700 ${cls}">${r.toFixed(3)}</td>
                  <td class="num">${interp}</td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>

      <!-- C2: Appeal Axis Ratio vs TTS GMV Trend (interactive) -->
      <div class="chart-card">
        <div class="c2-header">
          <div class="chart-card-title" style="margin-bottom:0;flex:1">C2: Appeal Axis Ratio vs TTS GMV Trend</div>
          <div class="axis-selector-wrap">
            <button type="button" class="axis-selector-btn" id="c2AxisBtn">
              <span id="c2AxisBtnLabel">+ Select Appeal Axes</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg>
            </button>
            <div class="axis-selector-dropdown" id="c2AxisDropdown">
              ${Object.keys(corr.c2.axes).map((axis, i) => {
                return '<label class="axis-checkbox-label">'
                  + '<input type="checkbox" class="c2-axis-cb" value="' + axis + '" data-index="' + i + '">'
                  + '<span class="axis-color-dot" style="background:' + self._c2Colors[i % self._c2Colors.length] + '"></span>'
                  + axis
                  + '</label>';
              }).join('')}
            </div>
          </div>
        </div>
        <div class="chart-container" style="height:320px">
          <canvas id="chartC2"></canvas>
        </div>
      </div>
    `;

    // -----------------------------------------------------------------------
    // Render charts
    // -----------------------------------------------------------------------

    // Appeal Axes Horizontal Bar
    const axisLabels = data.appealAxes.map(a => a.axis);
    C.createHorizontalBarChart('chartAppealAxes', axisLabels, [
      { label: 'Current', data: data.appealAxes.map(a => a.ratio), colorIndex: 0 },
      { label: 'Previous', data: data.appealAxes.map(a => a.prevRatio), colorIndex: 1 }
    ]);

    // Appeal Axis Mention Trend (line chart — all axes)
    C.createLineChart('chartAppealTrend', weeks,
      data.appealAxesTrend.map(function(item, i) {
        return { label: item.axis, data: item.data, colorIndex: i };
      })
    );

    // Sentiment Trend
    C.createStackedBarChart('chartSentimentTrend', weeks, [
      { label: 'Positive', data: data.sentimentTrend.positive, colorIndex: 2 },
      { label: 'Neutral', data: data.sentimentTrend.neutral, colorIndex: 4 },
      { label: 'Negative', data: data.sentimentTrend.negative, colorIndex: 3 }
    ]);

    // KOL Format Ratio Horizontal Bar
    const kolFormatLabels = data.kolFormats.map(a => a.format);
    C.createHorizontalBarChart('chartKolFormats', kolFormatLabels, [
      { label: 'Current', data: data.kolFormats.map(a => a.ratio), colorIndex: 0 },
      { label: 'Previous', data: data.kolFormats.map(a => a.prevRatio), colorIndex: 1 }
    ]);

    // KOL Format Trend (line chart)
    C.createLineChart('chartKolFormatTrend', weeks,
      data.kolFormatsTrend.map(function(item, i) {
        return { label: item.format, data: item.data, colorIndex: i };
      })
    );

    // C1: Horizontal bar — axis correlations
    C.createHorizontalBarChart('chartC1', corr.c1.axes, [
      { label: 'GMV Correlation (r)', data: corr.c1.correlation, colorIndex: 0 }
    ]);

    // -----------------------------------------------------------------------
    // C2 interactive chart
    // -----------------------------------------------------------------------
    this._c2Data = corr;
    this._c2Weeks = weeks;
    this._c2Selected = [];
    this._renderC2Chart();

    const c2Btn = document.getElementById('c2AxisBtn');
    const c2Dropdown = document.getElementById('c2AxisDropdown');
    c2Btn.addEventListener('click', function(e) {
      e.stopPropagation();
      c2Dropdown.classList.toggle('open');
    });
    document.addEventListener('click', function(e) {
      if (!c2Dropdown.contains(e.target) && e.target !== c2Btn) {
        c2Dropdown.classList.remove('open');
      }
    });
    document.querySelectorAll('.c2-axis-cb').forEach(function(cb) {
      cb.addEventListener('change', function() {
        const selected = [];
        document.querySelectorAll('.c2-axis-cb:checked').forEach(function(el) {
          selected.push({ axis: el.value, index: parseInt(el.dataset.index) });
        });
        self._c2Selected = selected;
        document.getElementById('c2AxisBtnLabel').textContent = selected.length > 0
          ? selected.length + ' axes selected' : '+ Select Appeal Axes';
        self._renderC2Chart();
      });
    });
  },

  // -------------------------------------------------------------------------
  // Scorecard helper
  // -------------------------------------------------------------------------
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

  // -------------------------------------------------------------------------
  // C2 interactive chart state & colors
  // -------------------------------------------------------------------------
  _c2Colors: [
    '#F18B00', '#4CAF50', '#E91E63', '#00BCD4', '#9C27B0',
    '#FF5722', '#607D8B', '#795548', '#8BC34A', '#FF9800'
  ],

  _c2Chart: null,
  _c2Data: null,
  _c2Weeks: null,
  _c2Selected: [],

  _renderC2Chart() {
    const data = this._c2Data;
    const weeks = this._c2Weeks;
    const selected = this._c2Selected;
    const COLORS = window.DashboardCharts.COLORS;
    const COLORS_ALPHA = window.DashboardCharts.COLORS_ALPHA;
    const C = window.DashboardCharts;
    const axisColors = this._c2Colors;

    if (this._c2Chart) {
      this._c2Chart.destroy();
      this._c2Chart = null;
    }

    const datasets = [
      {
        label: 'TTS GMV (\u0E3F)',
        data: data.c2.ttsGmv,
        borderColor: COLORS[0],
        backgroundColor: COLORS_ALPHA[0],
        pointBackgroundColor: COLORS[0],
        pointBorderColor: '#fff',
        pointRadius: 4,
        pointHoverRadius: 6,
        tension: 0.3,
        fill: false,
        borderWidth: 2.5,
        yAxisID: 'y'
      }
    ];

    selected.forEach(function(item) {
      const axData = data.c2.axes[item.axis];
      const col = axisColors[item.index % axisColors.length];
      if (axData) {
        datasets.push({
          label: item.axis + ' (%)',
          data: axData,
          borderColor: col,
          backgroundColor: 'transparent',
          pointBackgroundColor: col,
          pointBorderColor: '#fff',
          pointRadius: 4,
          pointHoverRadius: 6,
          tension: 0.3,
          fill: false,
          borderWidth: 2,
          yAxisID: 'y1'
        });
      }
    });

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
          text: 'TTS GMV (\u0E3F)',
          font: { family: "'Roboto', sans-serif", size: 11 }
        }
      }
    };

    if (selected.length > 0) {
      scales.y1 = {
        type: 'linear',
        position: 'right',
        grid: { drawOnChartArea: false },
        ticks: {
          font: { family: "'Roboto', sans-serif", size: 11 },
          color: '#666',
          callback: function(v) { return v.toFixed(1) + '%'; }
        },
        title: {
          display: true,
          text: 'Appeal Axis Ratio (%)',
          color: '#666',
          font: { family: "'Roboto', sans-serif", size: 11 }
        }
      };
    }

    const ctx = document.getElementById('chartC2');
    this._c2Chart = new Chart(ctx.getContext('2d'), {
      type: 'line',
      data: { labels: weeks, datasets: datasets },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: 'index',
          intersect: false
        },
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
