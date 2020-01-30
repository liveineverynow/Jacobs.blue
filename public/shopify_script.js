/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'jacobs-blue-store.myshopify.com',
      storefrontAccessToken: 'ca2a17dacc833e4151d32c1cb3ba0895',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('collection', {
        id: '164408131643',
        node: document.getElementById('collection-component-1580421086008'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px",
          "width": "calc(25% - 20px)"
        },
        "img": {
          "height": "calc(100% - 15px)",
          "position": "absolute",
          "left": "0",
          "right": "0",
          "top": "0"
        },
        "imgWrapper": {
          "padding-top": "calc(75% + 15px)",
          "position": "relative",
          "height": "0"
        }
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#454545"
        },
        "background-color": "#4d4d4d",
        ":focus": {
          "background-color": "#454545"
        }
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "button": false,
      "options": false
    },
    "isButton": true,
    "text": {
      "button": "VIEW PRODUCT"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#454545"
        },
        "background-color": "#4d4d4d",
        ":focus": {
          "background-color": "#454545"
        }
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "cart": {
    "styles": {
      "button": {
        "font-weight": "bold",
        ":hover": {
          "background-color": "#454545"
        },
        "background-color": "#4d4d4d",
        ":focus": {
          "background-color": "#454545"
        }
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "popup": false
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#4d4d4d",
        ":hover": {
          "background-color": "#454545"
        },
        ":focus": {
          "background-color": "#454545"
        }
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/