var app = angular.module("myapp", []);

app.controller("Bai1Ctrl", function ($scope) {
  $scope.list_age = [
    {
      age: "Dưới 25 tuổi",
      rate: 0.07,
    },
    {
      age: "Từ 25 đến 40 tuổi",
      rate: 0.1,
    },
    {
      age: "Trên 40 tuổi",
      rate: 0.15,
    },
  ];
  $scope.salary = 0;
  $scope.gender = "Nam";
  $scope.age = $scope.list_age[1];
  $scope.getBonus = () => {
    var bonus = $scope.age.rate * $scope.salary;
    if ($scope.gender == "Nữ") {
      bonus += 200000;
    }
    return bonus;
  };
});

app.controller("Bai2Ctrl", function ($scope) {
  $scope.getAmount = () => {
    var amount = 0;
    for (var i = 0; i < $scope.list_item.length; i++) {
      if ($scope.list_item[i].buy) {
        amount += $scope.list_item[i].price * $scope.list_item[i].quantity;
      }
    }
    return amount;
  };

  $scope.list_item = [
    {
      name: "Bắp rang đơn",
      price: "20000",
      photo: "singlePopcorn.png",
    },
    {
      name: "Bắp rang đôi",
      price: "35000",
      photo: "doublePopcorn.png",
    },
    {
      name: "Khoai tây chiên",
      price: "25000",
      photo: "frenchFries.png",
    },
    {
      name: "Pepsi",
      price: "20000",
      photo: "pepsi.png",
    },
    {
      name: "7 UP",
      price: "20000",
      photo: "7up.png",
    },
    {
      name: "Aquafina",
      price: "10000",
      photo: "aquafina.png",
    },
  ];
});

//Bài 4
app.controller("Bai4Ctrl", function ($scope) {});

//Bài 5
app.directive("polyNumber", function () {
  return {
    restrict: "A",
    require: "ngModel",
    link: function (scope, element, attr, ctrl) {
      ctrl.$parsers.push(function (value) {
        var number = parseInt(value);
        if (number % 2 == 0 && number % 9 == 0) {
          ctrl.$setValidity("charE", true);
        } else {
          ctrl.$setValidity("charE", false);
        }
        return false;
      });
    },
  };
});
