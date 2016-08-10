services.maintenanceRequest = sabio.services.maintenanceRequest || {};

//Post
services.maintenanceRequest.add = function (data, onSuccess, onError) {
    var url = "/api/maintenancerequests/add";
    var settings = {
        cache: false
        , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
        , data: data
        , dataType: "json"
        , success: onSuccess
        , error: onError
        , type: "POST"
    };
    $.ajax(url, settings)
}

//Post
services.maintenanceRequest.addressId = function (data, onSuccess, onError) {
    var url = "/api/maintenancerequests/addressId";
    var settings = {
        cache: false
        , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
        , data: data
        , dataType: "json"
        , success: onSuccess
        , error: onError
        , type: "POST"
    };
    $.ajax(url, settings)
}
//GET ALL
services.maintenanceRequest.get = function (OnGetSuccess, OnGetError) {
            var url = "/api/maintenancerequests";
            var settings = {
                cache: false
                , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
                , dataType: "json"
                , success: OnGetSuccess
                , error: OnGetError
                , type: "GET"
            };
            $.ajax(url, settings)
        };

//GET BY ID
services.maintenanceRequest.getById = function (id, onSuccess, onError) {
    var url = "/api/maintenancerequests/" + id;
    var settings = {
        cache: false
        , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
        , dataType: "json"
        , success: onSuccess
        , error: onError
        , type: "GET"
    };
    $.ajax(url, settings);
}

//Get BY ADDRESS ID
services.maintenanceRequest.getByAddressId = function (addressId, onSuccess, onError) {
    var url = "/api/maintenancerequests/address/" + addressId;
    var settings = {
        cache: false
        , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
        , dataType: "json"
        , success: onSuccess
        , error: onError
        , type: "GET"
    };
    $.ajax(url, settings);
}

//PUT
services.maintenanceRequest.getUpdate = function (id, myData, onSuccess, onError) {
    var url = "/api/maintenancerequests/" + id;
    var settings = {
        cache: false
        , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
        , data: myData
        , dataType: "json"
        , success: onSuccess
        , error: onError
        , type: "PUT"
    };
    $.ajax(url, settings);
}

//DELETE
services.maintenanceRequest.delete = function (data, onSuccess, onError) {
    var url = "/api/maintenancerequests/" + data;
    var settings = {
        cache: false
        , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
        , dataType: "json"
        , success: onSuccess
        , error: onError
        , type: "DELETE"
    };
    $.ajax(url, settings)
}


services.maintenanceRequest.createMtRqstMessage = function(addressId, data, onSuccess, onError)
{
    var url = "/api/messages/mrequests/" + addressId;
    var settings = {
        cache: false
        , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
        , data: data
        , dataType: "json"
        , success: onSuccess
        , error: onError
        , type: "POST"
    };
    $.ajax(url, settings)
};
