
$(document).ready(function(){
  var nav = document.getElementById("navBar")

  var toolcontainer= $(".tool-container");
  var electronicscontainer = $(".electronics-container");
  var carContainer = $(".car-container");
  var appliancesContainer = $(".appliances-container");
  var antiquesContainer = $(".antiques-container");
  var clothingContainer = $(".clothing-container");
  var jewelryContainer = $(".jewelry-container");





  var assets;
  
    $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });

  $(document).on("click", ".itemRemove", function(){
    $("#itemDetail").hide();
  });

	$(document).on('click','.itemRowClick',function(){
		$("#itemDetail").toggle("blind", 1000);
		nav.style.opacity = 0.25;
		$("#displayItemName").empty();
	});

	$("#closeItemDetail").click(function(){
		$("#itemDetail").hide();
		nav.style.opacity = 1;
  });
  
$(".tools").on("click", function(){
//  $(".tool-container").text("placing info in from javascript");
  toolsQuery();
 })

$(".proper").on("click", function(){
/// will be working on adding properties u can then click to see items at each property
 $(".property-container").text("placing info in from javascript");
})

$(".car").on("click", function(){
  carQuery();

})

$(".electronics").on("click", function(){
  electronicsQuery();

})

$(".antiques").on("click", function(){
  antiquesQuery();

})

$(".clothing").on("click", function(){
  clothingQuery();
  
})

$(".jewelry").on("click", function(){
  jewelryQuery();

})

$(".appliances").on("click", function(){
  appliancesQuery();
 
})

  // This function constructs a asset row
  function createNewRow(asset) {

      var newItemRow = $("<tr>");
      newItemRow.addClass("itemRowClick");
      newItemRow.data("asset", asset);

      var newIndex = $("<td>");
      newIndex.text(asset.id);
      newItemRow.append(newIndex);

      var newAsset = $("<td>");
      newAsset.text(asset.itemName);
      newItemRow.append(newAsset);

      var newLinkRowContainer = $("<td>");

      var newLinksRow = $("<div>");
      newLinksRow.attr("id", "manageLinks")
      newLinkRowContainer.append(newLinksRow);

      var editIcon = $("<span>");
      editIcon.addClass("glyphicon glyphicon-pencil itemEdit");
      editIcon.attr("aria-hidden", "true");
      newLinksRow.append(editIcon);

      var deleteIcon = $("<span>");
      deleteIcon.addClass("glyphicon glyphicon-remove itemRemove");
      deleteIcon.data("id", asset.id);
      newLinksRow.append(deleteIcon);

      newItemRow.append(newLinkRowContainer);

      return newItemRow;
    }

    var assetContainer = $(".asset-container");
    var assets;
    var specificSearch;

    // var element = document.getElementsByClassName("alphabet");
    // element.onclick = search();


    function toolsQuery(){
      $.get("/api/assets", function(data){
         assets = data;
        initializeRows();
      });
    }


    function initializeRows(){
      toolcontainer.empty();
      var rowsToAdd = [];
      for (var i =0; i<assets.length; i ++){
        if(assets[i].category == "Tools"){
          rowsToAdd.push(createNewRow(assets[i]));
        }
        toolcontainer.append(rowsToAdd);
      }
    }


     function appliancesQuery(){
      $.get("/api/assets", function(data){
         assets = data;
        initializeRowsAPP();
      });
    }


    function initializeRowsAPP(){
      appliancesContainer.empty();
      var rowsToAdd = [];
      for (var i =0; i<assets.length; i ++){
        if(assets[i].category == "Appliances"){
          rowsToAdd.push(createNewRow(assets[i]));
        }
        appliancesContainer.append(rowsToAdd);
      }
    }
         

  function electronicsQuery(){
      $.get("/api/assets", function(data){
         assets = data;
        initializeRowsEL();
      });
    }


    function initializeRowsEL(){
      electronicscontainer.empty();
      var rowsToAdd = [];
      for (var i =0; i<assets.length; i ++){
        if(assets[i].category == "Electronics"){
          rowsToAdd.push(createNewRow(assets[i]));
        }
        electronicscontainer.append(rowsToAdd);
      }
    }


    function carQuery(){
      $.get("/api/assets", function(data){
         assets = data;
        initializeRowsCA();
      });
    }


    function initializeRowsCA(){
         carContainer.empty();
      var rowsToAdd = [];
      for (var i =0; i<assets.length; i ++){
        if(assets[i].category == "Vehicles"){
          rowsToAdd.push(createNewRow(assets[i]));
        }
        carContainer.append(rowsToAdd);
      }
    }



    function jewelryQuery(){
      $.get("/api/assets", function(data){
         assets = data;
        initializeRowsJE();
      });
    }


    function initializeRowsJE(){
          jewelryContainer.empty();
      var rowsToAdd = [];
      for (var i =0; i<assets.length; i ++){
        if(assets[i].category == "Jewelry"){
          rowsToAdd.push(createNewRow(assets[i]));
        }
        jewelryContainer.append(rowsToAdd);
      }
    }


function clothingQuery(){
      $.get("/api/assets", function(data){
         assets = data;
        initializeRowsCL();
      });
    }


    function initializeRowsCL(){
        clothingContainer.empty();
      var rowsToAdd = [];
      for (var i =0; i<assets.length; i ++){
        if(assets[i].category == "Clothing"){
          rowsToAdd.push(createNewRow(assets[i]));
        }
        clothingContainer.append(rowsToAdd);
      }
    }


    function antiquesQuery(){
      $.get("/api/assets", function(data){
         assets = data;
        initializeRowsAN();
      });
    }


    function initializeRowsAN(){
          antiquesContainer.empty();
      var rowsToAdd = [];
      for (var i =0; i<assets.length; i ++){
        if(assets[i].category == "Antiques"){
          rowsToAdd.push(createNewRow(assets[i]));
        }
        antiquesContainer.append(rowsToAdd);
      }
    }







    
    // function search(){
    //   $.get("/api/assets", function(data) {
    //         console.log("Assets", data);
    //         assets = data;
    //   }.then(function(){
    //     assetContainer.empty();
    //         for (var i= 0; i< assets.length; i++){
    //           var letter = $(".alphabet").value;
    //           if (letter == assets[i].itemName.charAt(0).toLowerCase() ) {
    //             // assetContainer.empty();
    //             // createNewRow();
    //             assetContainer.append(createNewRow());
    //           }
    //         }
    //     })
    //       // assetContainer.append(specificSearch);
    //   );
      
      
    // };
    
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



    $(document).on("click", ".alphabet", function(){
      search(this);
    });

});



