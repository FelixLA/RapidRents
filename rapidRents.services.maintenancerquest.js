rapidRents.services.maintenanceRequest = rapidRents.services.maintenanceRequest || {};


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


rapidRents.services.maintenanceRequest.addressId = function (data, onSuccess, onError) {
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


rapidRents.services.maintenanceRequest.get = function (OnGetSuccess, OnGetError) {
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


rapidRents.services.maintenanceRequest.getById = function (id, onSuccess, onError) {
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


rapidRents.services.maintenanceRequest.getByAddressId = function (addressId, onSuccess, onError) {
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


rapidRents.services.maintenanceRequest.getUpdate = function (id, myData, onSuccess, onError) {
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


rapidRents.services.maintenanceRequest.delete = function (data, onSuccess, onError) {
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


rapidRents.services.maintenanceRequest.createMtRqstMessage = function(addressId, data, onSuccess, onError)
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
