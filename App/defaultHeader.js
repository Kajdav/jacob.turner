var app = angular.module('app');

app.factory('httpRequestInterceptor', function () {
  return {
    request: function (config) {
      config.headers = {'X-Parse-Application-Id': 'IiVAIwv0JFQKeiPBwMFo2NHrUjfsa2hy02JP2582', 'X-Parse-REST-API-Key': 'F59J8Ux93sYWiRGRji2VQcJQNzUqBD38seoTHs2M'}
      return config;
    }
  };
});
