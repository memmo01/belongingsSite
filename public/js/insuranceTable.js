$(document).ready(function(){

 

  //will retrieve insurance information from database and display list insurance when insurance tab is clicked
  //====================================================================
  //====================================================================
  var autoinsurcontainer = $(".auto-insur-container");

  var insurances;

  function displayInsurance(){

    $.get("/api/insurance", function(data) {

        console.log("Insurance", data);
        insurances = data;
        initializeInsuranceRows();
      });
  }

  function initializeInsuranceRows() {
      autoinsurcontainer.empty();
      var rowsToAdds = [];
      for (var i = 0; i < insurances.length; i++) {
      
        rowsToAdds.push(createNewInsuranceRow(insurances[i]));
        console.log(rowsToAdds);
      }


      autoinsurcontainer.append(rowsToAdds);
  }

    // This function constructs a new insurance row for each insurance user has submitted
  function createNewInsuranceRow(insurance) {

var newInsuranceRow = ("<div>");
newInsuranceRow.addClass("middless");
newInsuranceRow.text("here is some stuff");

      // var categoryTag = $("<h5>");
      // newItemRow.addClass("rowClicks");
      

      // var newIndex = $("<td>");
      // newIndex.addClass("insurSomething");
      // newIndex.text(insurance.id);
      
      // newItemRow.append(newIndex);

      // var newAsset = $("<td>");
      // newAsset.addClass("insurSomething");
      
      // newAsset.text(insurance.company);
      // newItemRow.append(newAsset);

      // var newLinkRowContainer = $("<td>");

      // var newLinksRow = $("<div>");
      // newLinksRow.attr("id", "manageLinks")
      // newLinkRowContainer.append(newLinksRow);

      // // var editIcon = $("<span>");
      // // editIcon.addClass("glyphicon glyphicon-pencil itemEdit");
      // // editIcon.attr("aria-hidden", "true");
      // // newLinksRow.append(editIcon);

     

      // newItemRow.append(newLinkRowContainer);

      return newInsuranceRow;
    }

  //Code to submit new insurance to database via insurance form
  //======================================================================
  //======================================================================
	$(document).on("submit", "#insurance-form", insertInsurance);

  //function to add insurance to the database
  function insertInsurance(event) {
    event.preventDefault();


    var insurance = {
      insur_type: $("#insur_type").val().trim(),
      company: $("#companyName").val().trim(),
      phone_num: $("#phoneNum").val().trim(),
      agent: $("#agent").val().trim(),
      policy_num: $("#policyNum").val().trim(),
      start_date: $("#startDate").val().trim(),
      info: $("#insurInfo").val().trim()
    };

    // Posting the new insurance, calling displayInsurance when done
    $.post("/api/insurance", insurance, function() {
      
    });
    //clearing out form after adding to database
    $("#insur_type").val(""),
    $("#companyName").val("");
    $("#phoneNum").val("");
    $("#agent").val("");
    $("#policyNum").val("");
    $("#startDate").val("");
    $("#insurInfo").val("");
  }

  $(".auto").on("click", function(){
//  $(".tool-container").text("placing info in from javascript");
  displayInsurance();
 })






var assets;




  function autoInsurQuery(){
    alert("query");
      $.get("/api/insurance", function(data){
         assets = data;
         alert(assets);
        initializeInsuranceRows1();
      });
    }


    function initializeInsuranceRows1(){
      autoinsurcontainer.empty();
      var rowsToAdd = [];
      for (var i =0; i<assets.length; i ++){
        if(assets[i].company == "gieco"){
          alert(assets[i].company);
          rowsToAdd.push(createNewInsuranceRow(assets[i]));
          alert("aa"+ rowsToAdd);
        }
        autoinsurcontainer.text("rowsToAdd");
      }
    }

  //code to update insurance when edit icon is clicked
  //=================================================================
  //=================================================================
  // $(document).on("click", ".insuranceEdit", editInsurance);

  // // This function handles showing the form for a user to edit an asset
  // function editInsurance() {
  //   var currentInsurance = $(this).data("insurance");
    
  //   $("#updateInsur_type").val(currentInsurance.insur_type);
  //   $("#updateCompanyName").val(currentInsurance.company);
  //   $("#updatePhoneNum").val(currentInsurance.phone_num);
  //   $("#updateAgent").val(currentInsurance.agent);
  //   $("#updatePolicyNum").val(currentInsurance.policy_num);
  //   $("#updateStartDate").val(currentInsurance.start_date);
  //   $("#updateInsurInfo").val(currentInsurance.info);

  //   $(document).on("submit", "#update-insurance-form", updateInsurance(currentInsurance));
  // }

  
  // // This function updates assets in our database
  // function updateInsurance(currentInsurance) {
    
  //   var updateInsurance = {
  //     insur_type: $("#updateInsur_type").val().trim(),
  //     company: $("#updateCompanyName").val().trim(),
  //     phone_num: $("#updatePhoneNum").val().trim(),
  //     agent: $("#updateAgent").val().trim(),
  //     policy_num: $("#updatePolicyNum").val().trim(),
  //     start_date: $("#updateStartDate").val().trim(),
  //     info: $("#updateInsurInfo").val().trim(),
  //     id: currentInsurance.id
  //   };

  //   pushInsuranceUpdate(updateInsurance);
  // }

  // function pushInsuranceUpdate(insurance){
  //   $.ajax({
  //     method: "PUT",
  //     url: "api/insurance",
  //     data: insurance
  //   }).done(function(){

  //     displayInsurance();
  //   });
  // }


  //code to delete insurance when delete icon in clicked
  //=================================================================
  //=================================================================
  $(document).on("click", ".insuranceRemove", deleteInsurance);

  //function to remove asset from the database
  function deleteInsurance() {
    var id = $(this).data("id");

    $.ajax({
      method: "DELETE",
      url: "/api/insurance/" + id
    }).done(function(){

      displayInsurance();
    });
  }
});