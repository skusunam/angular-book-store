// 'use strict';

function BookListCtrl($scope, $http) {
	$scope.books = [];

	$scope.handleImagesLoaded = function(data, statuc) {
		$scope.books = data;
		$scope.currentBook = _.first($scope.books);
		$scope.imageCategories = _.unique(_.pluck($scope.books, 'category'));		
	}

	$scope.fetch = function() {
		$http.get('data/books.json').success($scope.handleImagesLoaded);
	}

	$scope.setCurrentBook = function(book) {
		$scope.currentBook = book;
	}

	$scope.fetch();
}