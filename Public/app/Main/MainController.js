/**
 * Created by DKINCAID on 4/2/2015.
 */

angular.module('app').controller('MainController', function($scope){
    $scope.shows = [
        {name: "Leverage", featured: true, airing: new Date(2012, 0, 5, 8, 00)},
        {name: "iZombie", featured: true, airing: new Date(2012, 0, 5, 8, 00)},
        {name: "QuickDraw", featured: true, airing: new Date(2012, 0, 5, 8, 00)},
        {name: "Broklynn Nine Nine", featured: true, airing: new Date(2012, 0, 5, 8, 00)},
        {name: "The Blacklist", featured: false, airing: new Date(2012, 0, 5, 8, 00)},
        {name: "Parks and Rec", featured: true, airing: new Date(2012, 0, 5, 8, 00)},
        {name: "Arrow", featured: false, airing: new Date(2012, 0, 5, 8, 00)},
        {name: "Flash", featured: true, airing: new Date(2012, 0, 5, 8, 00)},
        {name: "New Girl", featured: false, airing: new Date(2012, 0, 5, 8, 00)},
        {name: "Agents of Shield", featured: false, airing: new Date(2012, 0, 5, 8, 00)},
        {name: "Heart of Dixie", featured: true, airing: new Date(2012, 0, 5, 8, 00)}
    ]
});