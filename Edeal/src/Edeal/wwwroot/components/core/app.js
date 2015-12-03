angular.module('deal.directives',[]);
angular.module('deal.services', []);
var app = angular.module('deal', ['deal.directives', 'deal.services']);
app.value('backendServerUrl', 'http://localhost:60277');