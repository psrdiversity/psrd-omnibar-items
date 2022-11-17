const { OmnibarInterface } = require('nodecg-omnibar');

module.exports = async nodecg => {
  const omnibar = new OmnibarInterface(nodecg);

  omnibar.registerItemType('psrd-omnibar-items', 'event-benefactor', 'Charity Benefactor Card', {
    cssAssets: ['css/omnibar-item.css'],
  });

  omnibar.enqueueCarouselItem('event-benefactor', {}, { duration: 10000 });
};
