$(document).ready(function(){

  displayInsurance();

  //will retrieve insurance information from database and display list insurance when insurance tab is clicked
  //====================================================================
  //====================================================================
  var insuranceContainer = $(".insurance-container");

  var insurances;

  function displayInsurance(){

    $.get("/api/insurance", function(data) {

        console.log("Insurance", data);
        insurances = data;
        initializeInsuranceRows();
      });
  }

  function initializeInsuranceRows() {
      insuranceContainer.empty();
      var rowsToAdd = [];
      for (var i = 0; i < insurances.length; i++) {
        rowsToAdd.push(createNewInsuranceRow(insurances[i]));
      }

      insuranceContainer.prepend(rowsToAdd);
  }

    // This function constructs a new insurance row for each insurance user has submitted
  function createNewInsuranceRow(insurance) {

      var x = Math.floor((Math.random() * 50000) + 1);

      var newInsuranceRow = $("<div>");
      newInsuranceRow.addClass("panel");

      var newPanelHeading = $("<div>");
      newPanelHeading.addClass("panel-heading");
      newPanelHeading.attr("role", "tab");
      newPanelHeading.attr("id", "headingOne" + x);
      newInsuranceRow.append(newPanelHeading);

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
      newPanelHeadingTitleText.text(insurance.company);
      newPanelHeadingTitle.append(newPanelHeadingTitleText);

  
      var newCollapsePanel = $("<div>");
      newCollapsePanel.attr("id", "collapseOne" + x);
      newCollapsePanel.addClass("panel-collapse collapse");
      newCollapsePanel.attr("role", "tabpanel");
      newCollapsePanel.attr("aria-labelledby", "headingOne" + x);
      newInsuranceRow.append(newCollapsePanel);

      var newPanelBody = $("<div>");
      newPanelBody.addClass("panel-body");
      newCollapsePanel.append(newPanelBody);

      var newDiv2 = $("<div>");
      newPanelBody.append(newDiv2);

      var newCenter = $("<center>");
      newDiv2.append(newCenter);

      var insuranceType = $("<h4>");
      insuranceType.text("Insurance Type");
      var insuranceTypeText = $("<p>");
      insuranceTypeText.text(insurance.insur_type);
      insuranceType.append(insuranceTypeText);
      newCenter.append(insuranceType);

      var break1 = $("<br>");
      newCenter.append(break1);

      var companyName = $("<h4>");
      companyName.text("Company Name");
      var companyNameText = $("<p>");
      companyNameText.text(insurance.company);
      companyName.append(companyNameText);
      newCenter.append(companyName);

      var break2 = $("<br>");
      newCenter.append(break2);

      var policyNumber = $("<h4>");
      policyNumber.text("Policy Number");
      var policyNumberText = $("<p>");
      policyNumberText.text(insurance.policy_num);
      policyNumber.append(policyNumberText);
      newCenter.append(policyNumber);

      var break3 = $("<br>");
      newCenter.append(break3);

      var startingDate = $("<h4>");
      startingDate.text("Start Date");
      var startDateText = $("<p>");
      startDateText.text(insurance.start_date);
      startingDate.append(startDateText);
      newCenter.append(startingDate);

      var break4 = $("<br>");
      newCenter.append(break4);

      var phoneNumber = $("<h4>");
      phoneNumber.text("Phone Number");
      var phoneNumberText = $("<p>");
      phoneNumberText.text(insurance.phone_num);
      phoneNumber.append(phoneNumberText);
      newCenter.append(phoneNumber);

      var break5 = $("<br>");
      newCenter.append(break5);

      var newAgent = $("<h4>");
      newAgent.text("Agent");
      var newAgentText = $("<p>");
      newAgentText.text(insurance.agent);
      newAgent.append(newAgentText);
      newCenter.append(newAgent);

      var break6 = $("<br>");
      newCenter.append(break6);

      var newAddInfo = $("<h4>");
      newAddInfo.text("Additional Comments");
      var newAddInfoText = $("<p>");
      newAddInfoText.text(insurance.info);
      newAddInfo.append(newAddInfoText);
      newCenter.append(newAddInfo);

      var break7 = $("<br>");
      newCenter.append(break7);

      var editInsuranceIcon = $("<span>");
      editInsuranceIcon.addClass("glyphicon glyphicon-pencil insuranceEdit");
      editInsuranceIcon.attr("aria-hidden", "true");
      editInsuranceIcon.attr("data-target", "#updateInsuranceInfoForm")
      editInsuranceIcon.data("insurance", insurance);
      newCenter.append(editInsuranceIcon);

      var deleteInsuranceIcon = $("<span>");
      deleteInsuranceIcon.addClass("glyphicon glyphicon-remove insuranceRemove");
      deleteInsuranceIcon.data("id", insurance.id);
      newCenter.append(deleteInsuranceIcon);

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
      displayInsurance();
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