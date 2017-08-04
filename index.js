/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-interakt',
  
  contentFor: function(type, config) {
   let appId = config['ember-cli-interakt'].appId;
    if (type === 'head') {
      return '<script>(function() {var interakt = document.createElement("script"); interakt.type = "text/javascript"; interakt.async = true; interakt.src = "//cdn.interakt.co/interakt/'+appId+'.js";var scrpt = document.getElementsByTagName("script")[0]; scrpt.parentNode.insertBefore(interakt, scrpt);})()</script>';
    }
  }
};
