export default [

  {
    Bearish_or_Bullish: {
      category: "Papers",
      content:
        "An exploratory analysis of the predictive capacity of Wall Street Journal language attention and sentiment on \
        key market fluctuation indicators. This paper first scraped a vast database of WSJ articles, then built an LDA model \
        for the language used, while using the RoBERTa sentiment transformer to weigh directional attention of topics. Finally \
        a Lasso regression was applied to optimize the bias-variance tradeoff with respect to how many topics to include when \
        predicting movement of market fluctuation indicators.",
      preview_links: {
        github: "https://github.com/Matts52/Bearish-or-Bullish",
      },
      image: 'Bearish_or_Bullish.jpg',
      article:
        "/Bearish_or_Bullish.pdf",
      favorite: "Favorites",
    },
  },


  {
    Olympic_Medal_Vis: {
      category: "Programming",
      content:
        "A tool that lets you explore and compare historical medal counts in the Olympics. A completely interactive map is available to the user and a \
        variety of settings can be explored. Medal counts are shown in stacked bar charts along with a time series trend.",
      preview_links: {
        github: "https://github.com/Matts52/olympic-data-visualization",
      },
      image: 'Olympic_DataVis.jpg',
      article:
        "https://matts52.github.io/olympic-data-visualization/",
      favorite: "Favorites",
    },
  },


  {
    Money_is_Motivation: {
      category: "Papers",
      content:
        "An investigation of the game-level predictive capacity of intrateam salary dispersion. I utlize \
        NBA salary metrics and scrape nba game minute logs to create measures of per-minute salary dispersion which is then used to predict \
        game-level outcomes using Random Forests. This is all done as a proxy for the future looking \
        short-term performance of a firm with respect to within company pay distribution.",
      preview_links: {
        github: "https://github.com/Matts52/Money-is-Motivation",
      },
      image: 'Money_is_Motivation.jpg',
      article:
        "/Money_is_Motivation.pdf",
      favorite: "Favorites",
    },
  },

  {
    CLChess: {
      category: "Programming",
      content:
        "A minimalist command line chess application built with python. In this game, you can choose to \
        play against another user, a random-moving AI player, or a simple cost-minimizing AI player.",
      preview_links: {
        github: "https://github.com/Matts52/CLChess",
      },
      image: 'CLChess.jpg',
      article:
        "https://github.com/Matts52/CLChess",
      favorite: "Favorites",
    },
  },



];
