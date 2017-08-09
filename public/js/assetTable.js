$(document).ready(function(){

  displayAssets();

  //will retrieve asset information from database and display list of assets when items tab is clicked
  //====================================================================
  //====================================================================
  var assetContainer = $(".asset-container");

  var assets;

  

  //will display items when item tab is clicked
  function displayAssets(){

    $.get("/api/assets", function(data) {

        console.log("Assets", data);
        assets = data;
        initializeRows();
      });
  }

  function initializeRows() {
      assetContainer.empty();
      var rowsToAdd = [];
      for (var i = 0; i < assets.length; i++) {
        rowsToAdd.push(createNewRow(assets[i]));
      }

      assetContainer.append(rowsToAdd);
  }

    // This function constructs a asset row
  function createNewRow(asset) {

      var newItemRow = $("<tr>");
      newItemRow.addClass("itemRowClick");
      newItemRow.data("asset", asset);

      var newIndex = $("<span>");
      newIndex.addClass("something");
      newIndex.text(asset.id);
      newItemRow.append(newIndex);

      var newAsset = $("<span>");
      newAsset.addClass("somthing");
      newAsset.text(asset.itemName);
      newItemRow.append(newAsset);

      var newLinkRowContainer = $("<td>");

      var newLinksRow = $("<div>");
      newLinksRow.attr("id", "manageLinks");
      newLinkRowContainer.append(newLinksRow);

      var editIcon = $("<span>");
      editIcon.addClass("glyphicon glyphicon-pencil itemEdit");
      editIcon.attr("aria-hidden", "true");
      editIcon.attr("id", "icons");
      editIcon.attr("data-toggle", "modal");
      editIcon.attr("data-target", "#updateItemForm");
      editIcon.data("asset", asset);
      newLinksRow.append(editIcon);

      var deleteIcon = $("<span>");
      deleteIcon.addClass("glyphicon glyphicon-remove itemRemove");
      deleteIcon.attr("id", "icons");
      deleteIcon.data("id", asset.id);
      newLinksRow.append(deleteIcon);

      newItemRow.append(newLinkRowContainer);

      return newItemRow;
    }

  //code to display full asset information when asset row is clicked
  //=================================================================
  //=================================================================
  $(document).on("click", ".something", fullAssestDisplay);
  $(document).on("click", "#closeItemDetail", emptyAssets);


 

  var items = $(".items");

  //function to retreieve full asset details
  function fullAssestDisplay(){
    var thisAsset = $(this).data("asset");

    var categoryTag = $("<h4>");
    categoryTag.text("Category:");
    var categoryText = $("<div>");
    categoryText.attr("id", "displayCategory");
    categoryText.text(thisAsset.category);
    categoryTag.append(categoryText);
    items.append(categoryTag);

    var break1 = $("<br>");
    items.append(break1);

    var makeTag = $("<h4>");
    makeTag.text("Manufacturer/Brand:");
    var makeText = $("<div>");
    makeText.attr("id", "displayMake");
    makeText.text(thisAsset.make);
    makeTag.append(makeText);
    items.append(makeTag);

    var break2 = $("<br>");
    items.append(break2);

    var modelTag = $("<h4>");
    modelTag.text("Model:");
    var modelText = $("<div>");
    modelText.attr("id", "displayModel");
    modelText.text(thisAsset.model);
    modelTag.append(modelText);
    items.append(modelTag);

    var break3 = $("<br>");
    items.append(break3);

    var serialNumTag = $("<h4>");
    serialNumTag.text("Serial Number:");
    var serialNumText = $("<div>");
    serialNumText.attr("id", "displaySerialNum");
    serialNumText.text(thisAsset.serial_num);
    serialNumTag.append(serialNumText);
    items.append(serialNumTag);

    var break4 = $("<br>");
    items.append(break4);

    var priceTag = $("<h4>");
    priceTag.text("Price:");
    var priceText = $("<div>");
    priceText.attr("id", "displayPrice");
    priceText.text(thisAsset.price);
    priceTag.append(priceText);
    items.append(priceTag);

    var break5 = $("<br>");
    items.append(break5);

    var datePurchasedTag = $("<h4>");
    datePurchasedTag.text("Date Purchased:");
    var datePurchasedText = $("<div>");
    datePurchasedText.attr("id", "displayDatePurchased");
    datePurchasedText.text(thisAsset.bought);
    datePurchasedTag.append(datePurchasedText);
    items.append(datePurchasedTag);

    var break6 = $("<br>");
    items.append(break6);

    var infoTag = $("<h4>");
    infoTag.text("Additional Comments:");
    var infoText = $("<div>");
    infoText.attr("id", "displayInfo");
    infoText.text(thisAsset.info);
    infoTag.append(infoText);
    items.append(infoTag);
  }

  //to empty out panel containing asset info when panel is closed
  function emptyAssets(){
    $(".items").empty();
  }

  //Code to submit new asset to database via asset form
  //======================================================================
  //======================================================================
	$(document).on("submit", "#asset-form", insertAsset);

  //function to add asset to the database
  function insertAsset(event) {
    event.preventDefault();

    var asset = {
      itemName: $("#itemName").val().trim(),
      category: $("#category").val().trim(),
      make: $("#make").val().trim(),
      model: $("#model").val().trim(),
      serial_num: $("#serialNumber").val().trim(),
      bought: $("#date").val().trim(),
      price: $("#price").val().trim(),
      info: $("#itemInfo").val().trim()
    };

    // Posting the new asset, calling displayAssests when done
    $.post("/api/assets", asset, function() {
      displayAssets();
    });
    //clearing out form after adding to database
    $("#itemName").val(""),
    $("#category").val("");
    $("#make").val("");
    $("#model").val("");
    $("#serialNumber").val("");
    $("#date").val("");
    $("#price").val("");
    $("#itemInfo").val("");
  }

  //code to update asset when edit icon is clicked
  //=================================================================
  //=================================================================
  $(document).on("click", ".itemEdit", editAsset);

  // This function handles showing the form for a user to edit an asset
  function editAsset() {
    alert("hi");
    var currentAsset = $(this).data("asset");
    
    $("#updateCategory").val(currentAsset.category);
    $("#updateItemName").val(currentAsset.itemName);
    $("#updateMake").val(currentAsset.make);
    $("#updateModel").val(currentAsset.model);
    $("#updateSerialNumber").val(currentAsset.serial_num);
    $("#updateDate").val(currentAsset.bought);
    $("#updatePrice").val(currentAsset.price);
    $("#updateItemInfo").val(currentAsset.info);

    $(document).on("submit", "#update-asset-form", updateAsset(currentAsset));
  }

  
  // This function updates assets in our database
  function updateAsset(currentAsset) {
    
    var updateAsset = {
      category: $("#updateCategory").val().trim(),
      itemName: $("#updateItemName").val().trim(),
      make: $("#updateMake").val().trim(),
      model: $("#updateModel").val().trim(),
      serial_num: $("#updateSerialNumber").val().trim(),
      bought: $("#updateDate").val().trim(),
      price: $("#updatePrice").val().trim(),
      info: $("#updateItemInfo").val().trim(),
      id: currentAsset.id
    };

    pushUpdate(updateAsset);
  }

  function pushUpdate(asset){
    $.ajax({
      method: "PUT",
      url: "api/assets",
      data: asset
    }).done(function(){

      displayAssets();
    });
  }


  //code to delete asset when delete icon in clicked
  //=================================================================
  //=================================================================
  $(document).on("click", ".itemRemove", deleteAsset);

  //function to remove asset from the database
  function deleteAsset() {
    var id = $(this).data("id");

    $.ajax({
      method: "DELETE",
      url: "/api/assets/" + id
    }).done(function(){

      displayAssets();
    });
  }
});