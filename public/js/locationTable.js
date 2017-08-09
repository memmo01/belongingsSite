$(document).ready(function(){

  displayLocation();

  //will retrieve insurance information from database and display list insurance when insurance tab is clicked
  //====================================================================
  //====================================================================
  var locationContainer = $(".location-container");

  var locations;

  function displayLocation(){

    $.get("/api/location", function(data) {

        console.log("Location", data);
        locations = data;
        initializeLocationRows();
      });
  }

  function initializeLocationRows() {
      locationContainer.empty();
      var rowsToAdd = [];
      for (var i = 0; i < locations.length; i++) {
        rowsToAdd.push(createNewILocationRow(locations[i]));
      }

      locationContainer.prepend(rowsToAdd);
  }

    // This function constructs a new insurance row for each insurance user has submitted
  function createNewLocationRow(location) {

      var x = Math.floor((Math.random() * 50000) + 1);

      var newLocationRow = $("<div>");
      newLocationRow.addClass("panel");

      var newPanelHeading = $("<div>");
      newPanelHeading.addClass("panel-heading");
      newPanelHeading.attr("role", "tab");
      newPanelHeading.attr("id", "headingOne" + x);
      newLocationRow.append(newPanelHeading);

      var newPanelHeadingTitle = $("<h4>");
      newPanelHeadingTitle.addClass("panel-title");
      newPanelHeading.append(newPanelHeadingTitle);

      var newPanelHeadingTitleText = $("<a>");
      newPanelHeadingTitleText.attr("role", "button");
      newPanelHeadingTitleText.attr("data-toggle", "collapse");
      newPanelHeadingTitleText.attr("data-parent", "#accordian");
      newPanelHeadingTitleText.attr("href", "#collapseOne" + x);
      newPanelHeadingTitleText.attr("aria-expanded", "true");
      newPanelHeadingTitleText.attr("aria-controls", "collapseOne" + x);
      newPanelHeadingTitleText.text(location.company);
      newPanelHeadingTitle.append(newPanelHeadingTitleText);

  
      var newCollapsePanel = $("<div>");
      newCollapsePanel.attr("id", "collapseOne" + x);
      newCollapsePanel.addClass("panel-collapse collapse");
      newCollapsePanel.attr("role", "tabpanel");
      newCollapsePanel.attr("aria-labelledby", "headingOne" + x);
      newLocationRow.append(newCollapsePanel);

      var newPanelBody = $("<div>");
      newPanelBody.addClass("panel-body");
      newCollapsePanel.append(newPanelBody);

      var newDiv2 = $("<div>");
      newPanelBody.append(newDiv2);

      var newCenter = $("<center>");
      newDiv2.append(newCenter);

      var break1 = $("<br>");
      newCenter.append(break1);

      var locate_name = $("<h4>");
      locate_name.text("Location Name");
      var locate_nameText = $("<p>");
      locate_nameText.text(location.company);
      locate_name.append(locate_nameText);
      newCenter.append(locate_name);

      var break2 = $("<br>");
      newCenter.append(break2);

      var street = $("<h4>");
      street.text("Policy Number");
      var streetText = $("<p>");
      streetText.text(location.street);
      street.append(streetText);
      newCenter.append(street);

      var break3 = $("<br>");
      newCenter.append(break3);

      var city = $("<h4>");
      city.text("Start Date");
      var cityText = $("<p>");
      cityText.text(location.city);
      city.append(cityText);
      newCenter.append(city);

      var break4 = $("<br>");
      newCenter.append(break4);

      var state = $("<h4>");
      state.text("Phone Number");
      var stateText = $("<p>");
      stateText.text(location.state);
      state.append(stateText);
      newCenter.append(state);

      var break5 = $("<br>");
      newCenter.append(break5);

      var zip_code = $("<h4>");
      zip_code.text("Agent");
      var zip_codeText = $("<p>");
      zip_codeText.text(location.zip_code);
      zip_code.append(zip_codeText);
      newCenter.append(zip_code);

      var break6 = $("<br>");
      newCenter.append(break6);

      var phoneNumber = $("<h4>");
      phoneNumber.text("Phone Number");
      var phoneNumberText = $("<p>");
      phoneNumberText.text(location.phone_num);
      phoneNumber.append(phoneNumberText);
      newCenter.append(phoneNumber);

      var break7 = $("<br>");
      newCenter.append(break7);

        var bought = $("<h4>");
      bought.text("Phone Number");
      var boughtText = $("<p>");
      boughtText.text(location.bought);
      bought.append(boughtText);
      newCenter.append(bought);

      var break8 = $("<br>");
      newCenter.append(break8);

        var price = $("<h4>");
      price.text("Phone Number");
      var priceText = $("<p>");
      priceText.text(location.price);
      price.append(priceText);
      newCenter.append(price);

      var break9 = $("<br>");
      newCenter.append(break9);

      var editLocationIcon = $("<span>");
      editLocationIcon.addClass("glyphicon glyphicon-pencil locationEdit");
      editLocationIcon.attr("aria-hidden", "true");
      editLocationIcon.attr("data-target", "#updateLocationInfoForm")
      editLocationIcon.data("location", location);
      newCenter.append(editLocationIcon);

      var deleteLocationIcon = $("<span>");
      deleteLocationIcon.addClass("glyphicon glyphicon-remove locationRemove");
      deleteLocationIcon.data("id", location.id);
      newCenter.append(deleteLocationIcon);

      return newLocationRow;
  }

  //Code to submit new insurance to database via insurance form
  //======================================================================
  //======================================================================
	$(document).on("submit", "#location-form", insertLocation);

  //function to add insurance to the database
  function insertLocation(event) {
    event.preventDefault();

    var location = {
      locate_name: $("#locate_name").val().trim(),
      street: $("#street").val().trim(),
      city: $("#city").val().trim(),
      state: $("#state").val().trim(),
      zip_code: $("#zip_code").val().trim(),
      phone_num: $("#phone_num").val().trim(),
      bought: $("#bought").val().trim(),
      price: $("#price").val().trim()
    };

    // Posting the new insurance, calling displayInsurance when done
    $.post("/api/location", location, function() {
      displayLocation();
    });
    //clearing out form after adding to database
    $("#locate_name").val(""),
    $("#street").val("");
    $("#city").val("");
    $("#state").val("");
    $("#zip_code").val("");
    $("#phone_num").val("");
    $("#bought").val("");
    $("#price").val("");
    
  }

  $(document).on("click", ".locationRemove", deleteLocation);

  //function to remove asset from the database
  function deleteLocation() {
    var id = $(this).data("id");

    $.ajax({
      method: "DELETE",
      url: "/api/location/" + id
    }).done(function(){

      displayLocation();
    });
  }
});