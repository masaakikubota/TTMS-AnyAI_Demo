/**
 * DashboardCharts - Chart.js helper/wrapper for Looker Studio-style dashboard.
 *
 * Provides convenience functions for creating charts with consistent styling,
 * color palette management, number formatting, and automatic instance tracking.
 *
 * Requires Chart.js to be loaded before this script.
 */
(function () {
  'use strict';

  // ---------------------------------------------------------------------------
  // Color palette
  // ---------------------------------------------------------------------------
  var COLORS = [
    '#3C459A', // Navy   (primary)
    '#F18B00', // Orange (secondary)
    '#4CAF50', // Green
    '#E91E63', // Pink
    '#00BCD4', // Cyan
    '#9C27B0'  // Purple
  ];

  var COLORS_ALPHA = [
    'rgba(60,69,154,0.2)',
    'rgba(241,139,0,0.2)',
    'rgba(76,175,80,0.2)',
    'rgba(233,30,99,0.2)',
    'rgba(0,188,212,0.2)',
    'rgba(156,39,176,0.2)'
  ];

  // ---------------------------------------------------------------------------
  // Internal chart instance registry (canvasId -> Chart instance)
  // ---------------------------------------------------------------------------
  var _instances = {};

  // ---------------------------------------------------------------------------
  // Shared defaults
  // ---------------------------------------------------------------------------
  var FONT_FAMILY = "'Roboto', sans-serif";

  function basePlugins(extra) {
    var plugins = {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            family: FONT_FAMILY,
            size: 11
          },
          usePointStyle: true,
          padding: 16
        }
      },
      tooltip: {
        backgroundColor: '#333',
        padding: 10,
        cornerRadius: 6,
        titleFont: { family: FONT_FAMILY },
        bodyFont: { family: FONT_FAMILY }
      }
    };

    if (extra) {
      Object.keys(extra).forEach(function (key) {
        plugins[key] = extra[key];
      });
    }
    return plugins;
  }

  function baseScaleOptions(overrides) {
    var defaults = {
      x: {
        grid: { color: '#f0f0f0' },
        ticks: { font: { family: FONT_FAMILY, size: 11 } }
      },
      y: {
        grid: { color: '#f0f0f0' },
        ticks: { font: { family: FONT_FAMILY, size: 11 } }
      }
    };

    if (overrides) {
      Object.keys(overrides).forEach(function (axis) {
        if (defaults[axis]) {
          defaults[axis] = deepMerge(defaults[axis], overrides[axis]);
        } else {
          defaults[axis] = overrides[axis];
        }
      });
    }
    return defaults;
  }

  // ---------------------------------------------------------------------------
  // Utility: simple deep merge (target <- source)
  // ---------------------------------------------------------------------------
  function deepMerge(target, source) {
    var output = Object.assign({}, target);
    Object.keys(source).forEach(function (key) {
      if (
        source[key] &&
        typeof source[key] === 'object' &&
        !Array.isArray(source[key]) &&
        target[key] &&
        typeof target[key] === 'object' &&
        !Array.isArray(target[key])
      ) {
        output[key] = deepMerge(target[key], source[key]);
      } else {
        output[key] = source[key];
      }
    });
    return output;
  }

  // ---------------------------------------------------------------------------
  // Resolve color by index (wraps around palette)
  // ---------------------------------------------------------------------------
  function color(index) {
    return COLORS[index % COLORS.length];
  }

  function colorAlpha(index) {
    return COLORS_ALPHA[index % COLORS_ALPHA.length];
  }

  // ---------------------------------------------------------------------------
  // Build a Chart and register it
  // ---------------------------------------------------------------------------
  function buildChart(canvasId, config) {
    destroyChart(canvasId);
    var ctx = document.getElementById(canvasId);
    if (!ctx) {
      console.warn('DashboardCharts: canvas "' + canvasId + '" not found.');
      return null;
    }
    var instance = new Chart(ctx.getContext('2d'), config);
    _instances[canvasId] = instance;
    return instance;
  }

  // ---------------------------------------------------------------------------
  // destroyChart
  // ---------------------------------------------------------------------------
  function destroyChart(canvasId) {
    if (_instances[canvasId]) {
      _instances[canvasId].destroy();
      delete _instances[canvasId];
    }
  }

  // ---------------------------------------------------------------------------
  // createLineChart
  // ---------------------------------------------------------------------------
  function createLineChart(canvasId, labels, datasets, options) {
    options = options || {};

    var chartDatasets = datasets.map(function (ds) {
      var ci = ds.colorIndex != null ? ds.colorIndex : 0;
      return Object.assign(
        {
          label: ds.label,
          data: ds.data,
          borderColor: color(ci),
          backgroundColor: colorAlpha(ci),
          pointBackgroundColor: color(ci),
          pointBorderColor: '#fff',
          pointRadius: 4,
          pointHoverRadius: 6,
          tension: 0.3,
          fill: false,
          borderWidth: 2
        },
        ds.extra || {}
      );
    });

    var config = {
      type: 'line',
      data: { labels: labels, datasets: chartDatasets },
      options: deepMerge(
        {
          responsive: true,
          maintainAspectRatio: false,
          plugins: basePlugins(options.plugins),
          scales: baseScaleOptions(options.scales)
        },
        options.chartOptions || {}
      )
    };

    return buildChart(canvasId, config);
  }

  // ---------------------------------------------------------------------------
  // createBarChart
  // ---------------------------------------------------------------------------
  function createBarChart(canvasId, labels, datasets, options) {
    options = options || {};

    var chartDatasets = datasets.map(function (ds) {
      var ci = ds.colorIndex != null ? ds.colorIndex : 0;
      return Object.assign(
        {
          label: ds.label,
          data: ds.data,
          backgroundColor: color(ci),
          borderColor: color(ci),
          borderWidth: 1,
          borderRadius: 4,
          borderSkipped: false
        },
        ds.extra || {}
      );
    });

    var config = {
      type: 'bar',
      data: { labels: labels, datasets: chartDatasets },
      options: deepMerge(
        {
          responsive: true,
          maintainAspectRatio: false,
          plugins: basePlugins(options.plugins),
          scales: baseScaleOptions(options.scales)
        },
        options.chartOptions || {}
      )
    };

    return buildChart(canvasId, config);
  }

  // ---------------------------------------------------------------------------
  // createHorizontalBarChart
  // ---------------------------------------------------------------------------
  function createHorizontalBarChart(canvasId, labels, datasets, options) {
    options = options || {};

    var chartDatasets = datasets.map(function (ds) {
      var ci = ds.colorIndex != null ? ds.colorIndex : 0;
      return Object.assign(
        {
          label: ds.label,
          data: ds.data,
          backgroundColor: color(ci),
          borderColor: color(ci),
          borderWidth: 1,
          borderRadius: 4,
          borderSkipped: false
        },
        ds.extra || {}
      );
    });

    var config = {
      type: 'bar',
      data: { labels: labels, datasets: chartDatasets },
      options: deepMerge(
        {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          plugins: basePlugins(options.plugins),
          scales: baseScaleOptions(options.scales)
        },
        options.chartOptions || {}
      )
    };

    return buildChart(canvasId, config);
  }

  // ---------------------------------------------------------------------------
  // createComboChart  (bar + line on secondary y-axis)
  // ---------------------------------------------------------------------------
  function createComboChart(canvasId, labels, barDatasets, lineDatasets, options) {
    options = options || {};

    var allDatasets = [];

    barDatasets.forEach(function (ds) {
      var ci = ds.colorIndex != null ? ds.colorIndex : 0;
      allDatasets.push(
        Object.assign(
          {
            type: 'bar',
            label: ds.label,
            data: ds.data,
            backgroundColor: color(ci),
            borderColor: color(ci),
            borderWidth: 1,
            borderRadius: 4,
            borderSkipped: false,
            yAxisID: 'y',
            order: 2
          },
          ds.extra || {}
        )
      );
    });

    lineDatasets.forEach(function (ds) {
      var ci = ds.colorIndex != null ? ds.colorIndex : 1;
      allDatasets.push(
        Object.assign(
          {
            type: 'line',
            label: ds.label,
            data: ds.data,
            borderColor: color(ci),
            backgroundColor: colorAlpha(ci),
            pointBackgroundColor: color(ci),
            pointBorderColor: '#fff',
            pointRadius: 4,
            pointHoverRadius: 6,
            tension: 0.3,
            fill: false,
            borderWidth: 2,
            yAxisID: 'y1',
            order: 1
          },
          ds.extra || {}
        )
      );
    });

    var scalesOverride = deepMerge(
      {
        y: {
          type: 'linear',
          position: 'left',
          grid: { color: '#f0f0f0' },
          ticks: { font: { family: FONT_FAMILY, size: 11 } }
        },
        y1: {
          type: 'linear',
          position: 'right',
          grid: { drawOnChartArea: false },
          ticks: { font: { family: FONT_FAMILY, size: 11 } }
        }
      },
      options.scales || {}
    );

    var config = {
      type: 'bar',
      data: { labels: labels, datasets: allDatasets },
      options: deepMerge(
        {
          responsive: true,
          maintainAspectRatio: false,
          plugins: basePlugins(options.plugins),
          scales: deepMerge(baseScaleOptions(), scalesOverride)
        },
        options.chartOptions || {}
      )
    };

    return buildChart(canvasId, config);
  }

  // ---------------------------------------------------------------------------
  // createStackedBarChart
  // ---------------------------------------------------------------------------
  function createStackedBarChart(canvasId, labels, datasets, options) {
    options = options || {};

    var chartDatasets = datasets.map(function (ds) {
      var ci = ds.colorIndex != null ? ds.colorIndex : 0;
      return Object.assign(
        {
          label: ds.label,
          data: ds.data,
          backgroundColor: color(ci),
          borderColor: color(ci),
          borderWidth: 1,
          borderRadius: 0,
          borderSkipped: false
        },
        ds.extra || {}
      );
    });

    var stackedScales = deepMerge(baseScaleOptions(options.scales), {
      x: { stacked: true },
      y: { stacked: true }
    });

    var config = {
      type: 'bar',
      data: { labels: labels, datasets: chartDatasets },
      options: deepMerge(
        {
          responsive: true,
          maintainAspectRatio: false,
          plugins: basePlugins(options.plugins),
          scales: stackedScales
        },
        options.chartOptions || {}
      )
    };

    return buildChart(canvasId, config);
  }

  // ---------------------------------------------------------------------------
  // createDoughnutChart
  // ---------------------------------------------------------------------------
  function createDoughnutChart(canvasId, labels, data, options) {
    options = options || {};

    var bgColors = data.map(function (_val, i) {
      return color(i);
    });
    var bgAlpha = data.map(function (_val, i) {
      return colorAlpha(i);
    });

    var config = {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [
          Object.assign(
            {
              data: data,
              backgroundColor: bgColors,
              hoverBackgroundColor: bgColors,
              borderColor: '#fff',
              borderWidth: 2
            },
            options.datasetExtra || {}
          )
        ]
      },
      options: deepMerge(
        {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '60%',
          plugins: basePlugins(options.plugins)
        },
        options.chartOptions || {}
      )
    };

    return buildChart(canvasId, config);
  }

  // ---------------------------------------------------------------------------
  // createScatterChart
  // ---------------------------------------------------------------------------
  function createScatterChart(canvasId, datasets, options) {
    options = options || {};

    var chartDatasets = datasets.map(function (ds) {
      var ci = ds.colorIndex != null ? ds.colorIndex : 0;
      return Object.assign(
        {
          label: ds.label,
          data: ds.data,
          backgroundColor: colorAlpha(ci),
          borderColor: color(ci),
          pointBackgroundColor: color(ci),
          pointBorderColor: '#fff',
          pointRadius: 5,
          pointHoverRadius: 7,
          borderWidth: 1
        },
        ds.extra || {}
      );
    });

    var config = {
      type: 'scatter',
      data: { datasets: chartDatasets },
      options: deepMerge(
        {
          responsive: true,
          maintainAspectRatio: false,
          plugins: basePlugins(options.plugins),
          scales: baseScaleOptions(options.scales)
        },
        options.chartOptions || {}
      )
    };

    return buildChart(canvasId, config);
  }

  // ---------------------------------------------------------------------------
  // Number formatting helpers
  // ---------------------------------------------------------------------------
  function formatNumber(num) {
    if (num == null || isNaN(num)) return '0';
    return Number(num)
      .toFixed(0)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function formatCompact(num) {
    if (num == null || isNaN(num)) return '0';
    num = Number(num);
    var absNum = Math.abs(num);
    var sign = num < 0 ? '-' : '';
    if (absNum >= 1e9) return sign + (absNum / 1e9).toFixed(1).replace(/\.0$/, '') + 'B';
    if (absNum >= 1e6) return sign + (absNum / 1e6).toFixed(1).replace(/\.0$/, '') + 'M';
    if (absNum >= 1e3) return sign + (absNum / 1e3).toFixed(1).replace(/\.0$/, '') + 'K';
    return sign + String(absNum);
  }

  function formatTHB(num) {
    return '\u0E3F' + formatNumber(num);
  }

  function formatPercent(num, decimals) {
    if (decimals == null) decimals = 1;
    if (num == null || isNaN(num)) return '0.0%';
    return Number(num).toFixed(decimals) + '%';
  }

  // ---------------------------------------------------------------------------
  // Public API
  // ---------------------------------------------------------------------------
  window.DashboardCharts = {
    COLORS: COLORS,
    COLORS_ALPHA: COLORS_ALPHA,

    destroyChart: destroyChart,
    createLineChart: createLineChart,
    createBarChart: createBarChart,
    createHorizontalBarChart: createHorizontalBarChart,
    createComboChart: createComboChart,
    createStackedBarChart: createStackedBarChart,
    createDoughnutChart: createDoughnutChart,
    createScatterChart: createScatterChart,

    formatNumber: formatNumber,
    formatCompact: formatCompact,
    formatTHB: formatTHB,
    formatPercent: formatPercent
  };
})();
