module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/work': { page: '/work' },
      '/resume': { page: '/resume' },
      '/contact': { page: '/contact' }
    };
  }
};