/**
 * UCT (Unicharm Thailand) TTMS Marketing Dashboard - Mock Data
 *
 * Categories:
 *   BC = Baby Care (MamyPoko diapers)
 *   FC = Feminine Care (Sofy pads)
 *
 * Data covers 8 weeks: W49 Dec 2024 through W04 Jan 2025
 * Currency: THB (Thai Baht)
 *
 * Story:
 *   - BC is in a growth phase: GMV rising, video engagement increasing,
 *     strong A->C transition driven by BGC LIVE and Affiliate content.
 *   - FC is stable with opportunity: solid base but content optimization
 *     (especially sentiment and appeal axis alignment) can unlock growth.
 */

window.MOCK_DATA = {

  // =========================================================================
  // Shared week labels (W49 Dec 2024 ~ W04 Jan 2025)
  // =========================================================================
  weeks: ['W49 Dec', 'W50 Dec', 'W51 Dec', 'W52 Dec', 'W01 Jan', 'W02 Jan', 'W03 Jan', 'W04 Jan'],

  // =========================================================================
  // BC  Baby Care / MamyPoko
  // =========================================================================
  bc: {

    // -----------------------------------------------------------------------
    // SellerCenter — TikTok Shop official analytics
    // -----------------------------------------------------------------------
    sellercenter: {
      scorecards: {
        totalOrders:   { value: 28400, change: 9.2 },
        unitsSold:     { value: 32500, change: 8.5 },
        avgOrderValue: { value: 454,   change: -0.7 },
        refundRate:    { value: 2.3,   change: -0.5 }
      },
      ordersTrend: [3200, 3400, 3350, 3600, 3650, 3800, 3900, 3500],
      revenueByChannel: { os: 4230000, aff: 2150000 },
      trafficSources: [
        { source: 'For You Feed', visits: 520000, orders: 8200, convRate: 1.58 },
        { source: 'Video Detail', visits: 310000, orders: 6200, convRate: 2.00 },
        { source: 'Search',       visits: 180000, orders: 5400, convRate: 3.00 },
        { source: 'LIVE',         visits: 145000, orders: 4800, convRate: 3.31 },
        { source: 'Profile',      visits: 85000,  orders: 2100, convRate: 2.47 },
        { source: 'Others',       visits: 42000,  orders: 700,  convRate: 1.67 }
      ],
      conversionFunnel: [
        { stage: 'Impressions',   value: 4800000 },
        { stage: 'Product Views', value: 1282000 },
        { stage: 'Add to Cart',   value: 145000 },
        { stage: 'Checkout',      value: 38000 },
        { stage: 'Orders',        value: 28400 }
      ],
      // Weekly Video metrics
      videoWeekly: {
        countOS:  [3, 3, 3, 3, 4, 3, 4, 3],
        countAFF: [2, 2, 2, 3, 2, 3, 2, 3],
        views:    [72000, 78000, 82000, 91000, 88000, 95000, 86000, 90000],
        gmv:      [280000, 310000, 325000, 360000, 345000, 380000, 350000, 375000]
      },
      // Weekly Live metrics
      liveWeekly: {
        countOS:  [1, 1, 1, 1, 1, 1, 1, 1],
        countAFF: [0, 1, 0, 1, 0, 1, 1, 0],
        viewers:  [12000, 18000, 14000, 21000, 13000, 19000, 22000, 15000],
        gmv:      [180000, 320000, 210000, 420000, 195000, 350000, 480000, 250000]
      }
    },

    // -----------------------------------------------------------------------
    // Overview Tab
    // -----------------------------------------------------------------------
    overview: {
      scorecards: {
        ttsGmvOS:      { value: 4230000,  change:  8.3 },   // TTS GMV Official Store (THB)
        ttsGmvAFF:     { value: 2150000,  change: 12.1 },   // TTS GMV Affiliate
        shopeeGmv:     { value: 6520000,  change:  5.7 },   // Shopee GMV
        totalGmv:      { value: 12900000, change:  7.8 },   // Total GMV across platforms
        videoCount:    { value: 45,       change: 15.4 },   // Videos published this period
        liveCount:     { value: 12,       change: 20.0 },   // Live sessions
        avgVideoViews: { value: 85200,    change:  6.9 },   // Avg views per video
        avgLiveViews:  { value: 15400,    change: 11.5 }    // Avg concurrent live viewers
      },

      // Top-performing video content
      videoTable: [
        { name: 'MamyPoko Pants XL - Overnight Test',         gmv: 680000,  views: 245000, likes: 18200, comments: 1340, clicks: 8900,  conversion: 3.6 },
        { name: 'Diaper Absorption Challenge MamyPoko vs OEM', gmv: 520000,  views: 198000, likes: 15800, comments: 2100, clicks: 7200,  conversion: 3.4 },
        { name: 'MamyPoko Pants S Newborn Unboxing',           gmv: 410000,  views: 156000, likes: 12400, comments: 980,  clicks: 5800,  conversion: 3.1 },
        { name: 'Baby Skincare Routine ft. MamyPoko',          gmv: 345000,  views: 132000, likes: 11200, comments: 870,  clicks: 4900,  conversion: 2.8 },
        { name: 'MamyPoko Tape M - Hospital Bag Must-Have',    gmv: 290000,  views: 118000, likes: 9600,  comments: 720,  clicks: 4200,  conversion: 2.5 }
      ],

      // Top-performing live sessions
      liveTable: [
        { name: 'MamyPoko Mega Sale LIVE - 12.12 Special',     gmv: 1240000, viewers: 28500, peakViewers: 4200, clicks: 6800,  conversion: 4.3 },
        { name: 'MamyPoko Pants Size Guide LIVE',              gmv: 780000,  viewers: 21300, peakViewers: 3100, clicks: 4900,  conversion: 3.8 },
        { name: 'New Mom Q&A - MamyPoko Essentials',           gmv: 540000,  viewers: 18700, peakViewers: 2800, clicks: 3600,  conversion: 3.2 },
        { name: 'MamyPoko x Hospital Nurse Tips LIVE',         gmv: 420000,  viewers: 15200, peakViewers: 2300, clicks: 2900,  conversion: 2.9 }
      ],

      // Top SKUs
      skuTable: [
        { sku: 'MamyPoko Pants L (9-14kg) 52pcs',    gmv: 3250000, unitsSold: 8120,  avgPrice: 399, views: 312000 },
        { sku: 'MamyPoko Pants XL (12-17kg) 46pcs',  gmv: 2810000, unitsSold: 6420,  avgPrice: 439, views: 278000 },
        { sku: 'MamyPoko Pants M (7-12kg) 58pcs',    gmv: 2540000, unitsSold: 7050,  avgPrice: 359, views: 245000 },
        { sku: 'MamyPoko Tape S (4-8kg) 60pcs',      gmv: 1890000, unitsSold: 5940,  avgPrice: 319, views: 198000 },
        { sku: 'MamyPoko Pants S (4-8kg) 62pcs',     gmv: 1650000, unitsSold: 4850,  avgPrice: 339, views: 176000 }
      ],

      // Weekly GMV trend by channel (8 weeks)
      gmvTrend: {
        os:     [480000,  510000,  495000,  530000,  545000,  560000,  575000,  535000],
        aff:    [220000,  235000,  245000,  260000,  270000,  285000,  300000,  335000],
        shopee: [750000,  770000,  785000,  810000,  825000,  840000,  860000,  880000]
      },

      // Correlation hypothesis dual-axis chart data (section 4 of proposal)
      // Each hypothesis: left = array of input metric datasets, right = array of GMV datasets
      hypotheses: [
        {
          group: '4-1', groupTitle: 'Channel & Method Investment',
          items: [
            { id: 'A1', title: 'L2 Transition Scale \u00d7 GMV',
              leftAxis: 'Total Transition Scale', leftFormat: 'compact',
              left: [{ label: 'Transition Scale', data: [692000, 738000, 725000, 768000, 782000, 812000, 845000, 832000] }],
              rightAxis: 'GMV (\u0E3F)', rightFormat: 'compact',
              right: [
                { label: 'TTS GMV', data: [700000, 745000, 740000, 790000, 815000, 845000, 875000, 870000] },
                { label: 'Shopee GMV', data: [750000, 770000, 785000, 810000, 825000, 840000, 860000, 880000] },
                { label: 'Total GMV', data: [1450000, 1515000, 1525000, 1600000, 1640000, 1685000, 1735000, 1750000] }
              ] },
            { id: 'A2', title: 'Touchpoint Transition Rate \u00d7 GMV',
              leftAxis: 'Avg Transition Rate (%)', leftFormat: 'percent',
              left: [{ label: 'Transition Rate', data: [27.8, 28.2, 28.5, 29.0, 29.4, 29.8, 30.1, 30.5] }],
              rightAxis: 'GMV (\u0E3F)', rightFormat: 'compact',
              right: [
                { label: 'TTS GMV', data: [700000, 745000, 740000, 790000, 815000, 845000, 875000, 870000] },
                { label: 'Shopee GMV', data: [750000, 770000, 785000, 810000, 825000, 840000, 860000, 880000] },
                { label: 'Total GMV', data: [1450000, 1515000, 1525000, 1600000, 1640000, 1685000, 1735000, 1750000] }
              ] },
            { id: 'A3', title: 'Search Volume \u00d7 GMV (with lag)',
              leftAxis: 'Search Volume', leftFormat: 'compact',
              left: [{ label: 'Search Volume', data: [82000, 85000, 88000, 91000, 93000, 96000, 98000, 101000] }],
              rightAxis: 'GMV (\u0E3F)', rightFormat: 'compact',
              right: [
                { label: 'TTS GMV', data: [700000, 745000, 740000, 790000, 815000, 845000, 875000, 870000] },
                { label: 'Shopee GMV', data: [750000, 770000, 785000, 810000, 825000, 840000, 860000, 880000] },
                { label: 'Total GMV', data: [1450000, 1515000, 1525000, 1600000, 1640000, 1685000, 1735000, 1750000] }
              ] }
          ]
        },
        {
          group: '4-2', groupTitle: 'KPI Effectiveness',
          items: [
            { id: 'B1', title: 'A\u2192C Transition Rate \u00d7 GMV',
              leftAxis: 'A\u2192C Rate (%)', leftFormat: 'percent',
              left: [{ label: 'A\u2192C Rate', data: [25.4, 26.1, 26.8, 27.5, 27.9, 28.2, 28.6, 28.8] }],
              rightAxis: 'GMV (\u0E3F)', rightFormat: 'compact',
              right: [
                { label: 'TTS GMV', data: [700000, 745000, 740000, 790000, 815000, 845000, 875000, 870000] },
                { label: 'Shopee GMV', data: [750000, 770000, 785000, 810000, 825000, 840000, 860000, 880000] },
                { label: 'Total GMV', data: [1450000, 1515000, 1525000, 1600000, 1640000, 1685000, 1735000, 1750000] }
              ] },
            { id: 'B2', title: '6s Views \u00d7 GMV',
              leftAxis: '6s Views', leftFormat: 'compact',
              left: [{ label: '6s Views', data: [620000, 645000, 670000, 695000, 710000, 730000, 750000, 765000] }],
              rightAxis: 'GMV (\u0E3F)', rightFormat: 'compact',
              right: [
                { label: 'TTS GMV', data: [700000, 745000, 740000, 790000, 815000, 845000, 875000, 870000] },
                { label: 'Shopee GMV', data: [750000, 770000, 785000, 810000, 825000, 840000, 860000, 880000] },
                { label: 'Total GMV', data: [1450000, 1515000, 1525000, 1600000, 1640000, 1685000, 1735000, 1750000] }
              ] }
          ]
        },
        {
          group: '4-3', groupTitle: 'Perception Quality',
          items: [
            { id: 'C1', title: 'Appeal Axis Ratio \u00d7 GMV',
              leftAxis: 'Appeal Axis Ratio (%)', leftFormat: 'percent',
              left: [
                { label: 'Leak-proof', data: [22.8, 23.0, 23.2, 23.5, 23.8, 24.0, 24.3, 24.5] },
                { label: 'Softness', data: [17.5, 17.6, 17.8, 17.9, 18.0, 18.1, 18.2, 18.2] },
                { label: 'Fit/Comfort', data: [15.1, 15.0, 14.9, 14.8, 14.9, 14.8, 14.9, 14.8] },
                { label: 'Value/Price', data: [10.8, 10.9, 11.0, 11.0, 11.1, 11.2, 11.2, 11.3] },
                { label: 'Skin-friendly', data: [8.9, 9.0, 9.1, 9.2, 9.3, 9.4, 9.5, 9.6] }
              ],
              rightAxis: 'GMV (\u0E3F)', rightFormat: 'compact',
              right: [
                { label: 'TTS GMV', data: [700000, 745000, 740000, 790000, 815000, 845000, 875000, 870000] },
                { label: 'Shopee GMV', data: [750000, 770000, 785000, 810000, 825000, 840000, 860000, 880000] },
                { label: 'Total GMV', data: [1450000, 1515000, 1525000, 1600000, 1640000, 1685000, 1735000, 1750000] }
              ] },
            { id: 'C2', title: 'Comment Mention Ratio \u00d7 GMV',
              leftAxis: 'Comment Mention (%)', leftFormat: 'percent',
              left: [
                { label: 'Leak-proof', data: [28.5, 29.0, 29.2, 29.8, 30.0, 30.5, 30.8, 31.2] },
                { label: 'Softness', data: [18.2, 18.4, 18.6, 18.5, 18.8, 18.9, 19.0, 19.2] },
                { label: 'Fit/Comfort', data: [14.0, 14.2, 14.1, 14.3, 14.2, 14.4, 14.5, 14.3] },
                { label: 'Value/Price', data: [12.5, 12.3, 12.4, 12.6, 12.5, 12.7, 12.6, 12.8] },
                { label: 'Skin-friendly', data: [9.8, 9.9, 10.0, 10.1, 10.2, 10.3, 10.4, 10.5] }
              ],
              rightAxis: 'GMV (\u0E3F)', rightFormat: 'compact',
              right: [
                { label: 'TTS GMV', data: [700000, 745000, 740000, 790000, 815000, 845000, 875000, 870000] },
                { label: 'Shopee GMV', data: [750000, 770000, 785000, 810000, 825000, 840000, 860000, 880000] },
                { label: 'Total GMV', data: [1450000, 1515000, 1525000, 1600000, 1640000, 1685000, 1735000, 1750000] }
              ] }
          ]
        },
        {
          group: '4-4', groupTitle: 'Shopee Spillover',
          items: [
            { id: 'D1', title: 'TTS GMV \u00d7 Shopee GMV (same week / lagged)',
              leftAxis: 'TTS GMV (\u0E3F)', leftFormat: 'compact',
              left: [{ label: 'TTS GMV', data: [700000, 745000, 740000, 790000, 815000, 845000, 875000, 870000] }],
              rightAxis: 'GMV (\u0E3F)', rightFormat: 'compact',
              right: [
                { label: 'Shopee GMV', data: [750000, 770000, 785000, 810000, 825000, 840000, 860000, 880000] },
                { label: 'Total GMV', data: [1450000, 1515000, 1525000, 1600000, 1640000, 1685000, 1735000, 1750000] }
              ] },
            { id: 'D2', title: 'TikTok Search \u00d7 GMV',
              leftAxis: 'Search Volume', leftFormat: 'compact',
              left: [{ label: 'Search Volume', data: [82000, 85000, 88000, 91000, 93000, 96000, 98000, 101000] }],
              rightAxis: 'GMV (\u0E3F)', rightFormat: 'compact',
              right: [
                { label: 'TTS GMV', data: [700000, 745000, 740000, 790000, 815000, 845000, 875000, 870000] },
                { label: 'Shopee GMV', data: [750000, 770000, 785000, 810000, 825000, 840000, 860000, 880000] },
                { label: 'Total GMV', data: [1450000, 1515000, 1525000, 1600000, 1640000, 1685000, 1735000, 1750000] }
              ] }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------------
    // Touchpoint Tab
    // -----------------------------------------------------------------------
    touchpoint: {
      scorecards: {
        awarenessAudience:    { value: 1220000, change:  7.2, benchmark: 1100000 },
        considerationAudience:{ value: 352000,  change:  9.8, benchmark: 310000  },
        conversionAudience:   { value: 45200,   change: 11.3, benchmark: 38000   },
        acTransitionRate:     { value: 28.8,    change:  2.4, benchmark: 26.5    }  // %
      },

      // L2 touchpoint transitions
      transitions: [
        { touchpoint: 'BGC Video',           awarenessScale: 420000,  considerationScale: 135000, transitionRate: 32.1, benchmarkRate: 28.0 },
        { touchpoint: 'BGC LIVE',            awarenessScale: 185000,  considerationScale: 68000,  transitionRate: 36.8, benchmarkRate: 30.5 },
        { touchpoint: 'UGC Feeds',           awarenessScale: 210000,  considerationScale: 52000,  transitionRate: 24.8, benchmarkRate: 22.0 },
        { touchpoint: 'Affiliate Video',     awarenessScale: 175000,  considerationScale: 56000,  transitionRate: 32.0, benchmarkRate: 27.5 },
        { touchpoint: 'Paid Ads (In-feed)',  awarenessScale: 310000,  considerationScale: 78000,  transitionRate: 25.2, benchmarkRate: 24.0 },
        { touchpoint: 'Paid Ads (TopView)',  awarenessScale: 520000,  considerationScale: 98000,  transitionRate: 18.8, benchmarkRate: 18.0 },
        { touchpoint: 'Search Results',      awarenessScale: 95000,   considerationScale: 42000,  transitionRate: 44.2, benchmarkRate: 40.0 }
      ],

      // Awareness / Consideration / Conversion weekly trend
      // Touchpoint Transition Scale — weekly Brand vs Benchmark per L3 touchpoint
      touchpointTrend: [
        { key: 'bgcVideo',       label: 'BGC Video',
          brand:     [219609, 714096, 663852, 519185, 206179,   1952,   1923,   2500],
          benchmark: [211803, 319977, 821618, 445580, 422388, 1094470, 1045311, 980000] },
        { key: 'bgcLive',        label: 'BGC LIVE',
          brand:     [2444,  6667,  2486,  2481,  4261,  2326,  2814,  2600],
          benchmark: [1444,  3472,  1159,  1702,   500,  1465,  5095,  4200] },
        { key: 'ugcFeeds',       label: 'UGC Feeds',
          brand:     [214643, 481792, 128344, 212549, 222351, 112746, 109924, 115000],
          benchmark: [1038486, 806157, 979282, 827363, 416264, 1059302, 2056883, 1800000] },
        { key: 'auctionReach',   label: 'Brand Auction - Reach',
          brand:     [169181, 139395, 116121,    500,    500,    500,    500,    500],
          benchmark: [198601, 321961, 289467, 211397, 186072, 290693, 1437875, 1200000] },
        { key: 'auctionVideoViews', label: 'Brand Auction - Video Views',
          brand:     [   500, 526580, 395405, 374314, 149563,    500,    500,    500],
          benchmark: [270672, 130660, 593390, 504875, 210568, 436594, 617626, 580000] },
        { key: 'auctionConsideration', label: 'Brand Auction - Consideration',
          brand:     [52332, 118603, 272788, 155733, 35586,   500,   500,   500],
          benchmark: [  500,    500,  41594,  18795, 31890,  7596, 22431, 18000] },
        { key: 'productSalesTTS', label: 'Product Sales - TikTok Shop',
          brand:     [28308, 396656,  20518,  26206,  64061,  28487,  31556,  29000],
          benchmark: [111633, 182097, 143939,  79578, 241385,  61922,  61776,  65000] },
        { key: 'collabVideo',    label: 'Potential Collaborated Video',
          brand:     [ 5167,  4667,  5411, 31582, 18790,  6469,  7353,  6500],
          benchmark: [84806, 51296, 128750, 89143,  8406, 61212, 49225, 55000] },
        { key: 'affiliateVideo', label: 'Affiliate Video',
          brand:     [  500,   500,   500,   500,   500,   500,   500,   500],
          benchmark: [177570, 225551, 344873, 380921, 461388, 230225, 499418, 450000] }
      ],

      // Search behaviour data
      searchData: {
        volume:        [82000,  85000,  88000,  91000,  93000,  96000,  98000,  101000],
        uniqueUsers:   [54000,  56000,  57500,  59000,  61000,  62500,  64000,  66000],
        postSearchCTR: [12.4,   12.6,   12.8,   13.1,   13.0,   13.3,   13.5,   13.8]  // %
      }
    },

    // -----------------------------------------------------------------------
    // Content Tab
    // -----------------------------------------------------------------------
    content: {
      scorecards: {
        totalVideosAnalyzed: { value: 120,          change:  18.8 },
        avgSentimentScore:   { value: 0.72,         change:  3.2  },  // 0-1 scale
        topAxis:             { value: 'Leak-proof', change:  4.5  },
        engagementRate:      { value: 5.8,          change:  8.1  }   // %
      },

      // Content appeal axes (top 10 of 20) -- ratio = share of content (%)
      appealAxes: [
        { axis: 'Leak-proof',      ratio: 24.5, prevRatio: 22.8 },
        { axis: 'Softness',        ratio: 18.2, prevRatio: 17.5 },
        { axis: 'Fit/Comfort',     ratio: 14.8, prevRatio: 15.1 },
        { axis: 'Value/Price',     ratio: 11.3, prevRatio: 10.8 },
        { axis: 'Skin-friendly',   ratio:  9.6, prevRatio:  8.9 },
        { axis: 'Absorption',      ratio:  7.4, prevRatio:  7.8 },
        { axis: 'Design/Cute',     ratio:  5.2, prevRatio:  5.5 },
        { axis: 'Usage scene',     ratio:  4.1, prevRatio:  4.3 },
        { axis: 'Size variety',    ratio:  3.0, prevRatio:  3.8 },
        { axis: 'Easy to use',     ratio:  1.9, prevRatio:  2.1 }
      ],

      // Weekly mention counts per appeal axis (8 weeks)
      appealAxesTrend: [
        { axis: 'Leak-proof',    data: [88, 92, 95, 98, 102, 96, 104, 108] },
        { axis: 'Softness',      data: [68, 72, 70, 74, 76, 73, 78, 80] },
        { axis: 'Fit/Comfort',   data: [56, 58, 60, 57, 62, 59, 64, 61] },
        { axis: 'Value/Price',   data: [42, 40, 44, 46, 43, 48, 45, 50] },
        { axis: 'Skin-friendly', data: [34, 36, 38, 37, 40, 39, 42, 41] },
        { axis: 'Absorption',    data: [30, 28, 32, 29, 31, 33, 30, 34] },
        { axis: 'Design/Cute',   data: [22, 20, 21, 19, 23, 18, 24, 20] },
        { axis: 'Usage scene',   data: [16, 17, 15, 18, 14, 19, 16, 17] },
        { axis: 'Size variety',  data: [14, 12, 11, 13, 10, 12, 11, 10] },
        { axis: 'Easy to use',   data: [ 8,  7,  9,  7,  8,  6,  9,  7] }
      ],

      // Comment mention axes (top 10 of 20)
      commentAxes: [
        { axis: 'Leak-proof',    mentions: 3420, positive: 2870, neutral: 380, negative: 170 },
        { axis: 'Softness',      mentions: 2810, positive: 2450, neutral: 280, negative:  80 },
        { axis: 'Fit/Comfort',   mentions: 2340, positive: 1920, neutral: 310, negative: 110 },
        { axis: 'Value/Price',   mentions: 1980, positive: 1280, neutral: 420, negative: 280 },
        { axis: 'Skin-friendly', mentions: 1650, positive: 1380, neutral: 190, negative:  80 },
        { axis: 'Absorption',    mentions: 1420, positive: 1180, neutral: 170, negative:  70 },
        { axis: 'Size variety',  mentions: 1180, positive:  890, neutral: 220, negative:  70 },
        { axis: 'Design/Cute',   mentions:  960, positive:  820, neutral: 110, negative:  30 },
        { axis: 'Durability',    mentions:  780, positive:  540, neutral: 150, negative:  90 },
        { axis: 'Odor control',  mentions:  640, positive:  420, neutral: 130, negative:  90 }
      ],

      // Weekly comment mention heatmap (per axis × per week)
      commentAxesTrend: [
        { axis: 'Leak-proof',    positive: [48,50,52,54,52,56,58,55], neutral: [6,7,6,7,6,7,6,7], negative: [3,3,3,2,3,2,2,3] },
        { axis: 'Softness',      positive: [38,40,42,44,42,46,48,45], neutral: [5,5,5,5,5,5,4,5], negative: [1,2,1,1,2,1,1,1] },
        { axis: 'Fit/Comfort',   positive: [32,34,33,35,34,36,38,34], neutral: [5,6,5,6,5,5,5,6], negative: [2,2,2,1,2,2,1,2] },
        { axis: 'Value/Price',   positive: [22,20,24,22,25,23,26,24], neutral: [7,8,7,8,7,8,7,7], negative: [5,5,4,5,4,4,3,5] },
        { axis: 'Skin-friendly', positive: [26,28,27,29,28,30,31,29], neutral: [4,3,4,3,4,3,3,4], negative: [2,1,2,1,1,1,1,1] },
        { axis: 'Absorption',    positive: [22,20,24,21,23,25,22,24], neutral: [3,4,3,3,3,3,3,4], negative: [1,2,1,1,1,1,2,1] },
        { axis: 'Size variety',  positive: [16,14,18,15,17,16,18,15], neutral: [4,4,3,4,4,4,3,4], negative: [1,2,1,1,1,2,1,1] },
        { axis: 'Design/Cute',   positive: [14,15,14,16,15,16,17,15], neutral: [2,2,2,2,2,2,1,2], negative: [1,0,1,0,0,0,0,1] },
        { axis: 'Durability',    positive: [10,9,11,10,12,10,11,10],  neutral: [3,3,2,3,2,3,3,3], negative: [2,1,2,1,1,2,1,1] },
        { axis: 'Odor control',  positive: [8,7,9,8,10,8,9,8],       neutral: [3,2,2,3,2,2,2,2], negative: [2,2,1,1,1,2,1,1] }
      ],

      // Weekly sentiment trend (percentages -- positive + neutral + negative = 100)
      sentimentTrend: {
        positive: [68.2, 69.0, 69.5, 70.1, 70.8, 71.2, 71.8, 72.3],
        neutral:  [22.5, 22.0, 21.8, 21.5, 21.0, 20.8, 20.5, 20.2],
        negative: [ 9.3,  9.0,  8.7,  8.4,  8.2,  8.0,  7.7,  7.5]
      },

      // KOL content format — ratio = share of KOL content (%)
      kolFormats: [
        { format: 'Product Review',  ratio: 28.5, prevRatio: 26.2 },
        { format: 'Tutorial/How-to', ratio: 22.1, prevRatio: 21.8 },
        { format: 'LIVE Shopping',   ratio: 15.8, prevRatio: 14.5 },
        { format: 'Comparison',      ratio: 12.4, prevRatio: 13.0 },
        { format: 'Unboxing',        ratio:  9.2, prevRatio:  8.6 },
        { format: 'Daily Routine',   ratio:  6.8, prevRatio:  7.2 },
        { format: 'Challenge',       ratio:  3.4, prevRatio:  6.5 },
        { format: 'Tips & Tricks',   ratio:  1.8, prevRatio:  2.2 }
      ],

      // Weekly KOL format mention count trend (8 weeks)
      kolFormatsTrend: [
        { format: 'Product Review',  data: [32, 34, 33, 36, 35, 38, 37, 40] },
        { format: 'Tutorial/How-to', data: [24, 26, 25, 28, 27, 30, 29, 31] },
        { format: 'LIVE Shopping',   data: [18, 22, 16, 24, 19, 23, 20, 25] },
        { format: 'Comparison',      data: [14, 16, 15, 17, 16, 18, 17, 19] },
        { format: 'Unboxing',        data: [10, 12, 11, 13, 10, 14, 12, 13] },
        { format: 'Daily Routine',   data: [ 8,  7,  9,  8, 10,  7,  9,  8] },
        { format: 'Challenge',       data: [ 4,  3,  5,  4,  6,  3,  5,  4] },
        { format: 'Tips & Tricks',   data: [ 2,  3,  2,  3,  2,  3,  2,  3] }
      ],

      // Weekly KOL format comment sentiment (per format × per week)
      kolFormatsCommentTrend: [
        { format: 'Product Review',  positive: [42,44,46,48,45,50,48,52], neutral: [6,5,6,5,6,5,5,6], negative: [3,3,2,3,2,3,2,2] },
        { format: 'Tutorial/How-to', positive: [36,38,37,40,39,42,41,44], neutral: [5,4,5,4,5,4,4,5], negative: [1,2,1,1,1,1,1,1] },
        { format: 'LIVE Shopping',   positive: [22,28,20,30,24,29,25,32], neutral: [4,5,4,5,4,5,4,5], negative: [3,4,3,4,3,3,3,3] },
        { format: 'Comparison',      positive: [16,18,17,19,18,20,19,22], neutral: [4,4,4,4,4,4,4,4], negative: [3,3,3,3,3,3,3,2] },
        { format: 'Unboxing',        positive: [14,16,15,18,14,19,16,18], neutral: [2,2,2,2,2,2,2,2], negative: [1,1,1,0,1,0,1,0] },
        { format: 'Daily Routine',   positive: [10,9,12,10,13,9,12,10],  neutral: [2,2,2,2,2,2,2,2], negative: [1,1,1,1,1,1,0,1] },
        { format: 'Challenge',       positive: [5,4,6,5,7,4,6,5],        neutral: [1,1,1,1,1,1,1,1], negative: [0,0,0,0,0,0,0,0] },
        { format: 'Tips & Tricks',   positive: [3,4,3,4,3,4,3,4],        neutral: [1,1,1,1,1,1,1,1], negative: [0,0,0,0,0,0,0,0] }
      ]
    },

    // -----------------------------------------------------------------------
    // Correlation Tab
    // -----------------------------------------------------------------------
    correlation: {

      // A1: Touchpoint transition scale vs GMV correlation
      a1: {
        touchpoints: ['BGC Video', 'BGC LIVE', 'UGC', 'Affiliate', 'Paid Ads'],
        gmvCorr:     [0.82, 0.91, 0.58, 0.87, 0.64],
        scale:       [135000, 68000, 52000, 56000, 98000]
      },

      // B1: A->C transition rate vs GMV (weekly)
      b1: {
        weeks:  ['W49 Dec', 'W50 Dec', 'W51 Dec', 'W52 Dec', 'W01 Jan', 'W02 Jan', 'W03 Jan', 'W04 Jan'],
        acRate: [25.4, 26.1, 26.8, 27.5, 27.9, 28.2, 28.6, 28.8],   // %
        gmv:    [1450000, 1515000, 1525000, 1600000, 1640000, 1685000, 1735000, 1750000]
      },

      // B2: 6-second views vs GMV
      b2: {
        weeks:       ['W49 Dec', 'W50 Dec', 'W51 Dec', 'W52 Dec', 'W01 Jan', 'W02 Jan', 'W03 Jan', 'W04 Jan'],
        sixSecViews: [620000, 645000, 670000, 695000, 710000, 730000, 750000, 765000],
        gmv:         [1450000, 1515000, 1525000, 1600000, 1640000, 1685000, 1735000, 1750000]
      },

      // C1: Top appeal-axis content ratio vs GMV correlation
      c1: {
        axes:        ['Leak-proof', 'Softness', 'Fit/Comfort', 'Value/Price', 'Skin-friendly'],
        correlation: [0.88, 0.74, 0.71, 0.52, 0.65]
      },

      // C2: Appeal Axis Ratio vs TTS GMV weekly trend (interactive overlay)
      c2: {
        ttsGmv: [700000, 745000, 740000, 790000, 815000, 845000, 875000, 870000],
        axes: {
          'Leak-proof':    [22.8, 23.0, 23.2, 23.5, 23.8, 24.0, 24.3, 24.5],
          'Softness':      [17.5, 17.6, 17.7, 17.8, 17.9, 18.0, 18.1, 18.2],
          'Fit/Comfort':   [15.1, 15.1, 15.0, 15.0, 14.9, 14.9, 14.8, 14.8],
          'Value/Price':   [10.8, 10.9, 11.0, 11.0, 11.1, 11.2, 11.2, 11.3],
          'Skin-friendly': [8.9,  9.0,  9.1,  9.2,  9.3,  9.4,  9.5,  9.6],
          'Absorption':    [7.8,  7.7,  7.7,  7.6,  7.6,  7.5,  7.5,  7.4],
          'Design/Cute':   [5.5,  5.5,  5.4,  5.4,  5.3,  5.3,  5.2,  5.2],
          'Usage scene':   [4.3,  4.3,  4.2,  4.2,  4.2,  4.1,  4.1,  4.1],
          'Size variety':  [3.8,  3.7,  3.5,  3.4,  3.3,  3.2,  3.1,  3.0],
          'Easy to use':   [2.1,  2.1,  2.0,  2.0,  2.0,  1.9,  1.9,  1.9]
        }
      },

      // D1: TTS GMV vs Shopee GMV (cross-platform spillover)
      d1: {
        weeks:     ['W49 Dec', 'W50 Dec', 'W51 Dec', 'W52 Dec', 'W01 Jan', 'W02 Jan', 'W03 Jan', 'W04 Jan'],
        ttsGmv:    [700000,  745000,  740000,  790000,  815000,  845000,  875000,  870000],
        shopeeGmv: [750000,  770000,  785000,  810000,  825000,  840000,  860000,  880000],
        overlayMetrics: {
          acRate:         { label: 'A→C Rate (%)',         data: [25.4, 26.1, 26.8, 27.5, 27.9, 28.2, 28.6, 28.8],       format: 'percent' },
          sixSecViews:    { label: '6s Views',             data: [620000, 645000, 670000, 695000, 710000, 730000, 750000, 765000], format: 'compact' },
          searchVolume:   { label: 'Search Volume',        data: [82000, 85000, 88000, 91000, 93000, 96000, 98000, 101000],       format: 'compact' },
          videoCount:     { label: 'Video Count',          data: [4, 5, 6, 7, 5, 6, 7, 5],                                        format: 'number' },
          sentimentScore: { label: 'Sentiment Score',      data: [0.68, 0.69, 0.70, 0.70, 0.71, 0.71, 0.72, 0.72],               format: 'decimal' },
          engagementRate: { label: 'Engagement Rate (%)',  data: [5.2, 5.3, 5.4, 5.5, 5.6, 5.6, 5.7, 5.8],                       format: 'percent' }
        }
      }
    }
  },


  // =========================================================================
  // FC  Feminine Care / Sofy
  // =========================================================================
  fc: {

    // -----------------------------------------------------------------------
    // SellerCenter — TikTok Shop official analytics
    // -----------------------------------------------------------------------
    sellercenter: {
      scorecards: {
        totalOrders:   { value: 18200, change: 4.1 },
        unitsSold:     { value: 40180, change: 5.2 },
        avgOrderValue: { value: 190,   change: -1.2 },
        refundRate:    { value: 3.1,   change: 0.3 }
      },
      ordersTrend: [2100, 2150, 2200, 2250, 2280, 2320, 2380, 2520],
      revenueByChannel: { os: 2780000, aff: 1520000 },
      trafficSources: [
        { source: 'For You Feed', visits: 380000, orders: 5200, convRate: 1.37 },
        { source: 'Video Detail', visits: 220000, orders: 3800, convRate: 1.73 },
        { source: 'Search',       visits: 125000, orders: 3200, convRate: 2.56 },
        { source: 'LIVE',         visits: 95000,  orders: 2800, convRate: 2.95 },
        { source: 'Profile',      visits: 52000,  orders: 1200, convRate: 2.31 },
        { source: 'Others',       visits: 28000,  orders: 400,  convRate: 1.43 }
      ],
      conversionFunnel: [
        { stage: 'Impressions',   value: 3200000 },
        { stage: 'Product Views', value: 900000 },
        { stage: 'Add to Cart',   value: 98000 },
        { stage: 'Checkout',      value: 24000 },
        { stage: 'Orders',        value: 18200 }
      ],
      // Weekly Video metrics
      videoWeekly: {
        countOS:  [2, 2, 2, 2, 3, 2, 2, 2],
        countAFF: [1, 2, 1, 2, 1, 2, 2, 2],
        views:    [48000, 55000, 52000, 62000, 58000, 68000, 64000, 72000],
        gmv:      [140000, 165000, 155000, 185000, 175000, 200000, 190000, 210000]
      },
      // Weekly Live metrics
      liveWeekly: {
        countOS:  [1, 1, 1, 1, 1, 1, 1, 1],
        countAFF: [0, 0, 1, 0, 0, 1, 0, 0],
        viewers:  [9000, 10000, 14000, 11000, 10500, 15000, 12000, 11500],
        gmv:      [120000, 135000, 210000, 145000, 140000, 220000, 155000, 150000]
      }
    },

    // -----------------------------------------------------------------------
    // Overview Tab
    // -----------------------------------------------------------------------
    overview: {
      scorecards: {
        ttsGmvOS:      { value: 2780000, change:  3.2 },
        ttsGmvAFF:     { value: 1520000, change:  4.8 },
        shopeeGmv:     { value: 4210000, change:  2.1 },
        totalGmv:      { value: 8510000, change:  3.1 },
        videoCount:    { value: 32,      change:  6.7 },
        liveCount:     { value: 8,       change:  0.0 },
        avgVideoViews: { value: 62400,   change:  2.3 },
        avgLiveViews:  { value: 11200,   change: -1.8 }
      },

      videoTable: [
        { name: 'Sofy Bodyfit Slim Wing - Gym Tested!',        gmv: 380000, views: 168000, likes: 12800, comments: 1050, clicks: 6200, conversion: 3.1 },
        { name: 'Night Pad Comparison: Sofy 40cm vs Others',   gmv: 310000, views: 142000, likes: 11400, comments: 1480, clicks: 5400, conversion: 2.9 },
        { name: 'Sofy Cooling Fresh - Summer Must Have',       gmv: 265000, views: 125000, likes: 9800,  comments: 780,  clicks: 4600, conversion: 2.7 },
        { name: 'Period Routine w/ Sofy Skincare Pad',         gmv: 220000, views: 108000, likes: 8600,  comments: 650,  clicks: 3800, conversion: 2.4 },
        { name: 'Sofy Unboxing - New Packaging 2025',          gmv: 185000, views: 94000,  likes: 7200,  comments: 520,  clicks: 3200, conversion: 2.2 }
      ],

      liveTable: [
        { name: 'Sofy 12.12 Mega LIVE Sale',              gmv: 720000, viewers: 19800, peakViewers: 3100, clicks: 4800, conversion: 3.6 },
        { name: 'Sofy Night Pad Deep Dive LIVE',           gmv: 480000, viewers: 15400, peakViewers: 2400, clicks: 3500, conversion: 3.1 },
        { name: 'Period Care Tips ft. Sofy LIVE',          gmv: 340000, viewers: 12800, peakViewers: 1900, clicks: 2600, conversion: 2.6 },
        { name: 'Sofy x Influencer Collab LIVE',           gmv: 280000, viewers: 10500, peakViewers: 1700, clicks: 2100, conversion: 2.3 }
      ],

      skuTable: [
        { sku: 'Sofy Bodyfit Slim Wing 25cm 16pcs',     gmv: 2180000, unitsSold: 12450, avgPrice: 175, views: 245000 },
        { sku: 'Sofy Bodyfit Night 40cm 8pcs',          gmv: 1750000, unitsSold: 8320,  avgPrice: 210, views: 198000 },
        { sku: 'Sofy Cooling Fresh 25cm 16pcs',         gmv: 1420000, unitsSold: 7890,  avgPrice: 179, views: 176000 },
        { sku: 'Sofy Skincare Pad 23cm 20pcs',          gmv: 1180000, unitsSold: 6540,  avgPrice: 189, views: 152000 },
        { sku: 'Sofy Bodyfit Overnight 35cm 10pcs',     gmv: 980000,  unitsSold: 5120,  avgPrice: 195, views: 128000 }
      ],

      gmvTrend: {
        os:     [330000, 335000, 340000, 348000, 350000, 355000, 358000, 364000],
        aff:    [175000, 178000, 182000, 188000, 190000, 192000, 195000, 220000],
        shopee: [510000, 515000, 518000, 525000, 528000, 530000, 535000, 549000]
      },

      // Correlation hypothesis dual-axis chart data (section 4 of proposal)
      // Each hypothesis: left = array of input metric datasets, right = array of GMV datasets
      hypotheses: [
        {
          group: '4-1', groupTitle: 'Channel & Method Investment',
          items: [
            { id: 'A1', title: 'L2 Transition Scale \u00d7 GMV',
              leftAxis: 'Total Transition Scale', leftFormat: 'compact',
              left: [{ label: 'Transition Scale', data: [465000, 478000, 472000, 490000, 498000, 510000, 520000, 515000] }],
              rightAxis: 'GMV (\u0E3F)', rightFormat: 'compact',
              right: [
                { label: 'TTS GMV', data: [505000, 513000, 522000, 536000, 540000, 547000, 553000, 584000] },
                { label: 'Shopee GMV', data: [510000, 515000, 518000, 525000, 528000, 530000, 535000, 549000] },
                { label: 'Total GMV', data: [1015000, 1028000, 1040000, 1061000, 1068000, 1077000, 1088000, 1133000] }
              ] },
            { id: 'A2', title: 'Touchpoint Transition Rate \u00d7 GMV',
              leftAxis: 'Avg Transition Rate (%)', leftFormat: 'percent',
              left: [{ label: 'Transition Rate', data: [25.5, 25.8, 26.0, 26.3, 26.5, 26.8, 27.0, 27.3] }],
              rightAxis: 'GMV (\u0E3F)', rightFormat: 'compact',
              right: [
                { label: 'TTS GMV', data: [505000, 513000, 522000, 536000, 540000, 547000, 553000, 584000] },
                { label: 'Shopee GMV', data: [510000, 515000, 518000, 525000, 528000, 530000, 535000, 549000] },
                { label: 'Total GMV', data: [1015000, 1028000, 1040000, 1061000, 1068000, 1077000, 1088000, 1133000] }
              ] },
            { id: 'A3', title: 'Search Volume \u00d7 GMV (with lag)',
              leftAxis: 'Search Volume', leftFormat: 'compact',
              left: [{ label: 'Search Volume', data: [52000, 53000, 53500, 54000, 55000, 55500, 56000, 57000] }],
              rightAxis: 'GMV (\u0E3F)', rightFormat: 'compact',
              right: [
                { label: 'TTS GMV', data: [505000, 513000, 522000, 536000, 540000, 547000, 553000, 584000] },
                { label: 'Shopee GMV', data: [510000, 515000, 518000, 525000, 528000, 530000, 535000, 549000] },
                { label: 'Total GMV', data: [1015000, 1028000, 1040000, 1061000, 1068000, 1077000, 1088000, 1133000] }
              ] }
          ]
        },
        {
          group: '4-2', groupTitle: 'KPI Effectiveness',
          items: [
            { id: 'B1', title: 'A\u2192C Transition Rate \u00d7 GMV',
              leftAxis: 'A\u2192C Rate (%)', leftFormat: 'percent',
              left: [{ label: 'A\u2192C Rate', data: [25.2, 25.5, 25.8, 26.0, 26.3, 26.5, 26.7, 26.9] }],
              rightAxis: 'GMV (\u0E3F)', rightFormat: 'compact',
              right: [
                { label: 'TTS GMV', data: [505000, 513000, 522000, 536000, 540000, 547000, 553000, 584000] },
                { label: 'Shopee GMV', data: [510000, 515000, 518000, 525000, 528000, 530000, 535000, 549000] },
                { label: 'Total GMV', data: [1015000, 1028000, 1040000, 1061000, 1068000, 1077000, 1088000, 1133000] }
              ] },
            { id: 'B2', title: '6s Views \u00d7 GMV',
              leftAxis: '6s Views', leftFormat: 'compact',
              left: [{ label: '6s Views', data: [380000, 388000, 395000, 402000, 408000, 415000, 420000, 428000] }],
              rightAxis: 'GMV (\u0E3F)', rightFormat: 'compact',
              right: [
                { label: 'TTS GMV', data: [505000, 513000, 522000, 536000, 540000, 547000, 553000, 584000] },
                { label: 'Shopee GMV', data: [510000, 515000, 518000, 525000, 528000, 530000, 535000, 549000] },
                { label: 'Total GMV', data: [1015000, 1028000, 1040000, 1061000, 1068000, 1077000, 1088000, 1133000] }
              ] }
          ]
        },
        {
          group: '4-3', groupTitle: 'Perception Quality',
          items: [
            { id: 'C1', title: 'Appeal Axis Ratio \u00d7 GMV',
              leftAxis: 'Appeal Axis Ratio (%)', leftFormat: 'percent',
              left: [
                { label: 'Thin/Slim', data: [21.4, 21.5, 21.6, 21.7, 21.8, 21.9, 22.0, 22.1] },
                { label: 'Leak-proof', data: [17.2, 17.3, 17.4, 17.5, 17.6, 17.7, 17.7, 17.8] },
                { label: 'Comfort', data: [14.5, 14.4, 14.3, 14.4, 14.3, 14.3, 14.2, 14.2] },
                { label: 'Absorption', data: [10.6, 10.7, 10.7, 10.8, 10.8, 10.8, 10.9, 10.9] },
                { label: 'Odor control', data: [8.0, 8.1, 8.2, 8.2, 8.3, 8.3, 8.4, 8.5] }
              ],
              rightAxis: 'GMV (\u0E3F)', rightFormat: 'compact',
              right: [
                { label: 'TTS GMV', data: [505000, 513000, 522000, 536000, 540000, 547000, 553000, 584000] },
                { label: 'Shopee GMV', data: [510000, 515000, 518000, 525000, 528000, 530000, 535000, 549000] },
                { label: 'Total GMV', data: [1015000, 1028000, 1040000, 1061000, 1068000, 1077000, 1088000, 1133000] }
              ] },
            { id: 'C2', title: 'Comment Mention Ratio \u00d7 GMV',
              leftAxis: 'Comment Mention (%)', leftFormat: 'percent',
              left: [
                { label: 'Thin/Slim', data: [26.2, 26.5, 26.8, 27.0, 27.3, 27.5, 27.8, 28.0] },
                { label: 'Leak-proof', data: [17.8, 18.0, 18.1, 18.3, 18.4, 18.5, 18.6, 18.8] },
                { label: 'Comfort', data: [13.5, 13.6, 13.4, 13.5, 13.7, 13.6, 13.5, 13.4] },
                { label: 'Absorption', data: [11.2, 11.3, 11.4, 11.5, 11.5, 11.6, 11.7, 11.8] },
                { label: 'Odor control', data: [8.8, 8.9, 9.0, 9.1, 9.1, 9.2, 9.3, 9.4] }
              ],
              rightAxis: 'GMV (\u0E3F)', rightFormat: 'compact',
              right: [
                { label: 'TTS GMV', data: [505000, 513000, 522000, 536000, 540000, 547000, 553000, 584000] },
                { label: 'Shopee GMV', data: [510000, 515000, 518000, 525000, 528000, 530000, 535000, 549000] },
                { label: 'Total GMV', data: [1015000, 1028000, 1040000, 1061000, 1068000, 1077000, 1088000, 1133000] }
              ] }
          ]
        },
        {
          group: '4-4', groupTitle: 'Shopee Spillover',
          items: [
            { id: 'D1', title: 'TTS GMV \u00d7 Shopee GMV (same week / lagged)',
              leftAxis: 'TTS GMV (\u0E3F)', leftFormat: 'compact',
              left: [{ label: 'TTS GMV', data: [505000, 513000, 522000, 536000, 540000, 547000, 553000, 584000] }],
              rightAxis: 'GMV (\u0E3F)', rightFormat: 'compact',
              right: [
                { label: 'Shopee GMV', data: [510000, 515000, 518000, 525000, 528000, 530000, 535000, 549000] },
                { label: 'Total GMV', data: [1015000, 1028000, 1040000, 1061000, 1068000, 1077000, 1088000, 1133000] }
              ] },
            { id: 'D2', title: 'TikTok Search \u00d7 GMV',
              leftAxis: 'Search Volume', leftFormat: 'compact',
              left: [{ label: 'Search Volume', data: [52000, 53000, 53500, 54000, 55000, 55500, 56000, 57000] }],
              rightAxis: 'GMV (\u0E3F)', rightFormat: 'compact',
              right: [
                { label: 'TTS GMV', data: [505000, 513000, 522000, 536000, 540000, 547000, 553000, 584000] },
                { label: 'Shopee GMV', data: [510000, 515000, 518000, 525000, 528000, 530000, 535000, 549000] },
                { label: 'Total GMV', data: [1015000, 1028000, 1040000, 1061000, 1068000, 1077000, 1088000, 1133000] }
              ] }
          ]
        }
      ]
    },

    // -----------------------------------------------------------------------
    // Touchpoint Tab
    // -----------------------------------------------------------------------
    touchpoint: {
      scorecards: {
        awarenessAudience:    { value: 820000,  change:  2.8, benchmark: 780000 },
        considerationAudience:{ value: 221000,  change:  3.5, benchmark: 210000 },
        conversionAudience:   { value: 28400,   change:  4.1, benchmark: 26000  },
        acTransitionRate:     { value: 26.9,    change:  0.8, benchmark: 26.0   }
      },

      transitions: [
        { touchpoint: 'BGC Video',           awarenessScale: 280000, considerationScale: 82000,  transitionRate: 29.3, benchmarkRate: 27.0 },
        { touchpoint: 'BGC LIVE',            awarenessScale: 120000, considerationScale: 38000,  transitionRate: 31.7, benchmarkRate: 29.0 },
        { touchpoint: 'UGC Feeds',           awarenessScale: 145000, considerationScale: 34000,  transitionRate: 23.4, benchmarkRate: 22.5 },
        { touchpoint: 'Affiliate Video',     awarenessScale: 110000, considerationScale: 31000,  transitionRate: 28.2, benchmarkRate: 26.0 },
        { touchpoint: 'Paid Ads (In-feed)',  awarenessScale: 195000, considerationScale: 48000,  transitionRate: 24.6, benchmarkRate: 24.0 },
        { touchpoint: 'Paid Ads (TopView)',  awarenessScale: 350000, considerationScale: 58000,  transitionRate: 16.6, benchmarkRate: 17.0 },
        { touchpoint: 'Search Results',      awarenessScale: 62000,  considerationScale: 26000,  transitionRate: 41.9, benchmarkRate: 40.0 }
      ],

      // Touchpoint Transition Scale — weekly Brand vs Benchmark per L3 touchpoint
      touchpointTrend: [
        { key: 'bgcVideo',       label: 'BGC Video',
          brand:     [145000, 420000, 385000, 310000, 128000,  1200,  1150,  1500],
          benchmark: [185000, 280000, 720000, 390000, 370000, 960000, 910000, 850000] },
        { key: 'bgcLive',        label: 'BGC LIVE',
          brand:     [1800,  4200,  1900,  1750,  3100,  1650,  2100,  1900],
          benchmark: [1200,  2800,   950,  1400,   500,  1200,  4200,  3500] },
        { key: 'ugcFeeds',       label: 'UGC Feeds',
          brand:     [148000, 320000,  85000, 142000, 150000,  76000,  74000,  78000],
          benchmark: [890000, 680000, 830000, 700000, 350000, 900000, 1750000, 1520000] },
        { key: 'auctionReach',   label: 'Brand Auction - Reach',
          brand:     [112000,  92000,  78000,    500,    500,    500,    500,    500],
          benchmark: [170000, 275000, 248000, 180000, 160000, 250000, 1230000, 1020000] },
        { key: 'auctionVideoViews', label: 'Brand Auction - Video Views',
          brand:     [   500, 350000, 265000, 250000, 100000,    500,    500,    500],
          benchmark: [230000, 110000, 505000, 430000, 180000, 372000, 525000, 495000] },
        { key: 'auctionConsideration', label: 'Brand Auction - Consideration',
          brand:     [35000, 79000, 182000, 104000, 24000,   500,   500,   500],
          benchmark: [  500,   500,  35000,  16000, 27000,  6400, 19000, 15000] },
        { key: 'productSalesTTS', label: 'Product Sales - TikTok Shop',
          brand:     [19000, 264000,  13700,  17500,  43000,  19000,  21000,  19500],
          benchmark: [95000, 155000, 122000,  68000, 205000,  53000,  52500,  55000] },
        { key: 'collabVideo',    label: 'Potential Collaborated Video',
          brand:     [ 3500,  3100,  3600, 21000, 12500,  4300,  4900,  4300],
          benchmark: [72000, 43500, 109500, 75800,  7100, 52000, 42000, 47000] },
        { key: 'affiliateVideo', label: 'Affiliate Video',
          brand:     [  500,   500,   500,   500,   500,   500,   500,   500],
          benchmark: [151000, 192000, 293000, 324000, 392000, 196000, 425000, 382000] }
      ],

      searchData: {
        volume:        [52000, 53000, 53500, 54000, 55000, 55500, 56000, 57000],
        uniqueUsers:   [34000, 34500, 35000, 35200, 35800, 36000, 36500, 37000],
        postSearchCTR: [10.8,  10.9,  11.0,  11.2,  11.1,  11.3,  11.5,  11.6]
      }
    },

    // -----------------------------------------------------------------------
    // Content Tab
    // -----------------------------------------------------------------------
    content: {
      scorecards: {
        totalVideosAnalyzed: { value: 85,           change:  8.9 },
        avgSentimentScore:   { value: 0.68,         change:  1.5 },
        topAxis:             { value: 'Thin/Slim',  change:  2.2 },
        engagementRate:      { value: 4.6,          change:  3.4 }
      },

      appealAxes: [
        { axis: 'Thin/Slim',      ratio: 22.1, prevRatio: 21.4 },
        { axis: 'Leak-proof',     ratio: 17.8, prevRatio: 17.2 },
        { axis: 'Comfort',        ratio: 14.2, prevRatio: 14.5 },
        { axis: 'Absorption',     ratio: 10.9, prevRatio: 10.6 },
        { axis: 'Odor control',   ratio:  8.5, prevRatio:  8.0 },
        { axis: 'Value/Price',    ratio:  7.3, prevRatio:  7.8 },
        { axis: 'Wing design',    ratio:  6.1, prevRatio:  5.8 },
        { axis: 'Night use',      ratio:  5.4, prevRatio:  5.9 },
        { axis: 'Skin-friendly',  ratio:  4.2, prevRatio:  4.0 },
        { axis: 'Packaging',      ratio:  3.5, prevRatio:  3.4 }
      ],

      // Weekly mention counts per appeal axis (8 weeks)
      appealAxesTrend: [
        { axis: 'Thin/Slim',     data: [58, 60, 62, 64, 63, 66, 65, 68] },
        { axis: 'Leak-proof',    data: [46, 48, 50, 49, 52, 51, 54, 53] },
        { axis: 'Comfort',       data: [38, 36, 40, 39, 41, 38, 42, 40] },
        { axis: 'Absorption',    data: [28, 30, 29, 32, 31, 33, 30, 34] },
        { axis: 'Odor control',  data: [22, 24, 23, 26, 25, 24, 27, 26] },
        { axis: 'Value/Price',   data: [20, 18, 22, 19, 21, 17, 23, 20] },
        { axis: 'Wing design',   data: [16, 15, 17, 16, 18, 15, 19, 17] },
        { axis: 'Night use',     data: [14, 15, 13, 16, 12, 15, 14, 13] },
        { axis: 'Skin-friendly', data: [11, 10, 12, 11, 13, 10, 12, 11] },
        { axis: 'Packaging',     data: [ 9,  8, 10,  9, 10,  8, 11,  9] }
      ],

      commentAxes: [
        { axis: 'Thin/Slim',     mentions: 2280, positive: 1850, neutral: 310, negative: 120 },
        { axis: 'Leak-proof',    mentions: 2050, positive: 1580, neutral: 280, negative: 190 },
        { axis: 'Comfort',       mentions: 1820, positive: 1420, neutral: 290, negative: 110 },
        { axis: 'Absorption',    mentions: 1540, positive: 1180, neutral: 240, negative: 120 },
        { axis: 'Odor control',  mentions: 1280, positive:  890, neutral: 220, negative: 170 },
        { axis: 'Value/Price',   mentions: 1120, positive:  720, neutral: 250, negative: 150 },
        { axis: 'Wing design',   mentions:  940, positive:  710, neutral: 160, negative:  70 },
        { axis: 'Night use',     mentions:  820, positive:  580, neutral: 150, negative:  90 },
        { axis: 'Skin-friendly', mentions:  680, positive:  520, neutral: 110, negative:  50 },
        { axis: 'Packaging',     mentions:  540, positive:  380, neutral: 120, negative:  40 }
      ],

      // Weekly comment mention heatmap (per axis × per week)
      commentAxesTrend: [
        { axis: 'Thin/Slim',     positive: [35,36,38,37,40,38,42,40], neutral: [6,5,6,5,5,6,5,5], negative: [2,3,2,2,2,2,1,2] },
        { axis: 'Leak-proof',    positive: [30,28,32,30,34,31,35,32], neutral: [5,6,5,5,5,5,4,5], negative: [3,4,3,3,3,3,2,3] },
        { axis: 'Comfort',       positive: [26,28,27,30,28,32,30,31], neutral: [6,5,6,5,6,5,5,5], negative: [2,2,2,1,2,1,2,2] },
        { axis: 'Absorption',    positive: [22,24,23,25,24,26,25,27], neutral: [5,4,5,4,5,4,4,5], negative: [2,3,2,2,2,2,2,2] },
        { axis: 'Odor control',  positive: [16,18,17,19,18,20,19,21], neutral: [4,4,4,4,4,4,3,4], negative: [3,3,3,3,3,2,3,3] },
        { axis: 'Value/Price',   positive: [14,12,16,13,15,14,17,15], neutral: [5,5,4,5,4,5,4,5], negative: [3,3,2,3,2,3,2,2] },
        { axis: 'Wing design',   positive: [14,12,15,13,16,14,15,14], neutral: [3,3,3,3,2,3,3,3], negative: [1,2,1,1,1,1,1,1] },
        { axis: 'Night use',     positive: [11,10,12,11,13,11,12,11], neutral: [3,3,3,3,2,3,3,3], negative: [2,2,1,2,1,2,1,1] },
        { axis: 'Skin-friendly', positive: [10,9,11,10,12,10,11,10],  neutral: [2,2,2,2,2,2,2,2], negative: [1,1,1,1,0,1,1,0] },
        { axis: 'Packaging',     positive: [8,7,9,8,10,8,9,8],        neutral: [3,2,2,2,2,2,2,2], negative: [1,1,1,1,0,1,1,1] }
      ],

      sentimentTrend: {
        positive: [65.0, 65.3, 65.8, 66.0, 66.4, 66.8, 67.2, 67.5],
        neutral:  [24.0, 23.8, 23.5, 23.3, 23.0, 22.8, 22.5, 22.3],
        negative: [11.0, 10.9, 10.7, 10.7, 10.6, 10.4, 10.3, 10.2]
      },

      // KOL content format — ratio = share of KOL content (%)
      kolFormats: [
        { format: 'Product Review',  ratio: 26.8, prevRatio: 25.0 },
        { format: 'Tutorial/How-to', ratio: 20.5, prevRatio: 20.2 },
        { format: 'LIVE Shopping',   ratio: 14.2, prevRatio: 13.8 },
        { format: 'Comparison',      ratio: 13.5, prevRatio: 14.0 },
        { format: 'Unboxing',        ratio:  8.8, prevRatio:  8.2 },
        { format: 'Daily Routine',   ratio:  7.5, prevRatio:  7.8 },
        { format: 'Challenge',       ratio:  4.8, prevRatio:  6.2 },
        { format: 'Tips & Tricks',   ratio:  3.9, prevRatio:  4.8 }
      ],

      // Weekly KOL format mention count trend (8 weeks)
      kolFormatsTrend: [
        { format: 'Product Review',  data: [22, 24, 23, 26, 25, 28, 27, 29] },
        { format: 'Tutorial/How-to', data: [18, 20, 19, 22, 21, 23, 22, 24] },
        { format: 'LIVE Shopping',   data: [12, 16, 10, 18, 14, 17, 15, 19] },
        { format: 'Comparison',      data: [12, 14, 13, 15, 14, 16, 15, 17] },
        { format: 'Unboxing',        data: [ 8, 10,  9, 11,  8, 12, 10, 11] },
        { format: 'Daily Routine',   data: [ 6,  7,  8,  7,  9,  6,  8,  7] },
        { format: 'Challenge',       data: [ 4,  5,  4,  6,  5,  4,  6,  5] },
        { format: 'Tips & Tricks',   data: [ 3,  4,  3,  4,  3,  4,  3,  4] }
      ],

      // Weekly KOL format comment sentiment (per format × per week)
      kolFormatsCommentTrend: [
        { format: 'Product Review',  positive: [30,32,31,34,33,36,35,38], neutral: [5,5,5,5,5,5,5,5], negative: [2,2,2,2,2,2,2,2] },
        { format: 'Tutorial/How-to', positive: [26,28,27,30,29,32,30,33], neutral: [4,4,4,4,4,4,4,4], negative: [1,1,1,1,1,1,1,1] },
        { format: 'LIVE Shopping',   positive: [15,20,13,22,18,21,19,24], neutral: [3,4,3,4,3,4,3,4], negative: [2,3,2,3,2,2,2,2] },
        { format: 'Comparison',      positive: [14,16,15,17,16,18,17,20], neutral: [3,3,3,3,3,3,3,3], negative: [2,3,2,2,2,2,2,2] },
        { format: 'Unboxing',        positive: [10,13,11,14,10,15,13,14], neutral: [2,2,2,2,2,2,2,2], negative: [1,1,1,0,1,0,1,0] },
        { format: 'Daily Routine',   positive: [ 8, 9,10, 9,11, 8,10, 9], neutral: [2,2,2,2,2,2,2,2], negative: [1,1,1,1,1,1,0,1] },
        { format: 'Challenge',       positive: [ 5, 6, 5, 7, 6, 5, 7, 6], neutral: [1,1,1,1,1,1,1,1], negative: [0,0,0,0,0,0,0,0] },
        { format: 'Tips & Tricks',   positive: [ 4, 5, 4, 5, 4, 5, 4, 5], neutral: [1,1,1,1,1,1,1,1], negative: [0,0,0,0,0,0,0,0] }
      ]
    },

    // -----------------------------------------------------------------------
    // Correlation Tab
    // -----------------------------------------------------------------------
    correlation: {

      a1: {
        touchpoints: ['BGC Video', 'BGC LIVE', 'UGC', 'Affiliate', 'Paid Ads'],
        gmvCorr:     [0.72, 0.78, 0.45, 0.68, 0.55],
        scale:       [82000, 38000, 34000, 31000, 58000]
      },

      b1: {
        weeks:  ['W49 Dec', 'W50 Dec', 'W51 Dec', 'W52 Dec', 'W01 Jan', 'W02 Jan', 'W03 Jan', 'W04 Jan'],
        acRate: [25.2, 25.5, 25.8, 26.0, 26.3, 26.5, 26.7, 26.9],
        gmv:    [1015000, 1028000, 1040000, 1061000, 1068000, 1077000, 1088000, 1133000]
      },

      b2: {
        weeks:       ['W49 Dec', 'W50 Dec', 'W51 Dec', 'W52 Dec', 'W01 Jan', 'W02 Jan', 'W03 Jan', 'W04 Jan'],
        sixSecViews: [380000, 388000, 395000, 402000, 408000, 415000, 420000, 428000],
        gmv:         [1015000, 1028000, 1040000, 1061000, 1068000, 1077000, 1088000, 1133000]
      },

      c1: {
        axes:        ['Thin/Slim', 'Leak-proof', 'Comfort', 'Absorption', 'Odor control'],
        correlation: [0.76, 0.69, 0.62, 0.48, 0.41]
      },

      // C2: Appeal Axis Ratio vs TTS GMV weekly trend (interactive overlay)
      c2: {
        ttsGmv: [505000, 513000, 522000, 536000, 540000, 547000, 553000, 584000],
        axes: {
          'Thin/Slim':     [21.4, 21.5, 21.6, 21.7, 21.8, 21.9, 22.0, 22.1],
          'Leak-proof':    [17.2, 17.3, 17.4, 17.5, 17.6, 17.6, 17.7, 17.8],
          'Comfort':       [14.5, 14.5, 14.4, 14.4, 14.3, 14.3, 14.2, 14.2],
          'Absorption':    [10.6, 10.6, 10.7, 10.7, 10.8, 10.8, 10.9, 10.9],
          'Odor control':  [8.0,  8.1,  8.1,  8.2,  8.3,  8.3,  8.4,  8.5],
          'Value/Price':   [7.8,  7.7,  7.6,  7.5,  7.5,  7.4,  7.3,  7.3],
          'Wing design':   [5.8,  5.8,  5.9,  5.9,  6.0,  6.0,  6.1,  6.1],
          'Night use':     [5.9,  5.8,  5.7,  5.7,  5.6,  5.5,  5.5,  5.4],
          'Skin-friendly': [4.0,  4.0,  4.1,  4.1,  4.1,  4.2,  4.2,  4.2],
          'Packaging':     [3.4,  3.4,  3.4,  3.5,  3.5,  3.5,  3.5,  3.5]
        }
      },

      d1: {
        weeks:     ['W49 Dec', 'W50 Dec', 'W51 Dec', 'W52 Dec', 'W01 Jan', 'W02 Jan', 'W03 Jan', 'W04 Jan'],
        ttsGmv:    [505000, 513000, 522000, 536000, 540000, 547000, 553000, 584000],
        shopeeGmv: [510000, 515000, 518000, 525000, 528000, 530000, 535000, 549000],
        overlayMetrics: {
          acRate:         { label: 'A→C Rate (%)',         data: [25.2, 25.5, 25.8, 26.0, 26.3, 26.5, 26.7, 26.9],       format: 'percent' },
          sixSecViews:    { label: '6s Views',             data: [380000, 388000, 395000, 402000, 408000, 415000, 420000, 428000], format: 'compact' },
          searchVolume:   { label: 'Search Volume',        data: [52000, 53000, 53500, 54000, 55000, 55500, 56000, 57000],        format: 'compact' },
          videoCount:     { label: 'Video Count',          data: [3, 4, 4, 5, 4, 4, 5, 3],                                        format: 'number' },
          sentimentScore: { label: 'Sentiment Score',      data: [0.65, 0.65, 0.66, 0.66, 0.66, 0.67, 0.67, 0.68],               format: 'decimal' },
          engagementRate: { label: 'Engagement Rate (%)',  data: [4.2, 4.3, 4.3, 4.4, 4.4, 4.5, 4.5, 4.6],                       format: 'percent' }
        }
      }
    }
  }
};
