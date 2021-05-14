"<td><input name='btnRemove' type='button' value='Remove'class='btnRemove btn btn-danger' data-projectID='" + projectID  + "'>" +
"</td>"

"<td><input name='btnUpdate' type='button' value='Update' "
+ "class='btnUpdate btn btn-secondary' data-projectID='" + projectID + "'></td>"

var type = ($("#hidprojectIDSave").val() == "") ? "POST" : "PUT";

$.ajax(
		{
		url : "ProjectAPI",
		type : type,
		data : $("#formProject").serialize(),
		dataType : "text",
		complete : function(response, status)
		{
		onItemSaveComplete(response.responseText, status);
		}
		});

$(document).on("click", "#btnSave", function(event)
		{
		// Clear alerts---------------------
		$("#alertSuccess").text("");
		$("#alertSuccess").hide();
		$("#alertError").text("");
		$("#alertError").hide();
		// Form validation-------------------
		var status = validateProjectForm();
		if (status != true)
		{
		$("#alertError").text(status);
		$("#alertError").show();
		return;
		}
		// If valid------------------------
		var type = ($("#hidprojectIDSave").val() == "") ? "POST" : "PUT";
		$.ajax(
		{
		url : "ProjectAPI",
		type : type,
		data : $("#formProject").serialize(),
		dataType : "text",
		complete : function(response, status)
		{
		onProjectSaveComplete(response.responseText, status);
		}
		});
		});

function onProjectSaveComplete(response, status)
{
	if(status == "success"){
		var resultSet = JSON.parse(response);
		
		if(resultSet.status.trim() == "success"){
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();
			
			$("#colProject").html(resultSet.data);
		}else if(resultSet.status.trim() == "error"){
			$("#alertDanger").text(resultSet.data)
			$("#alertDanger").show();
		}
	}else if(status == "error"){
		$("#alertDanger").text("Error while saving.");
		$("#alertDanger").show();
	}else{
		$("#alertDanger").text("Unknown error while saving.");
		$("#alertDanger").show();
	}
	$("#hidprojectIDSave").val("");
	$("#formProject")[0].reset();
}

var resultSet = JSON.parse(response);
if (resultSet.status.trim() == "success")
{
$("#alertSuccess").text("Successfully saved.");
$("#alertSuccess").show();
$("#divProjectGrid").html(resultSet.data);
} else if (resultSet.status.trim() == "error")
{
$("#alertError").text(resultSet.data);
$("#alertError").show();
}

else if (status == "error")
{
$("#alertError").text("Error while saving.");
$("#alertError").show();
} else
{
$("#alertError").text("Unknown error while saving..");
$("#alertError").show();
}

$("#hidprojectIDSave").val("");
$("#formProject")[0].reset();


function onProjectSaveComplete(response, status)
{
if (status == "success")
{
var resultSet = JSON.parse(response);
if (resultSet.status.trim() == "success")
{
$("#alertSuccess").text("Successfully saved.");
$("#alertSuccess").show();
$("#divProjectGrid").html(resultSet.data);
} else if (resultSet.status.trim() == "error")
{
$("#alertError").text(resultSet.data);
$("#alertError").show();
}
} else if (status == "error")
{
$("#alertError").text("Error while saving.");
$("#alertError").show();
} else
{
$("#alertError").text("Unknown error while saving..");
$("#alertError").show();
}
}

$("#hidprojectIDSave").val("");
$("#formProject")[0].reset();



$(document).on("click", ".btnUpdate", function(event)
		{
	$("#hidprojectIDSave").val($(this).closest("tr").find('#hidprojectIDUpdate').val());
		$("#projectCode").val($(this).closest("tr").find('td:eq(0)').text());
		$("#projectName").val($(this).closest("tr").find('td:eq(1)').text());
		$("#projectDetails").val($(this).closest("tr").find('td:eq(2)').text());
		$("#projectDesc").val($(this).closest("tr").find('td:eq(3)').text());
		$("#projectAuthor").val($(this).closest("tr").find('td:eq(4)').text());

		});

$(document).on("click", ".btnRemove", function(event)
		{
		$.ajax(
		{
		url : "ProjectAPI",
		type : "DELETE",
		data : "projectID=" + $(this).data("projectid"),
		dataType : "text",
		complete : function(response, status)
		{
		onProjectDeleteComplete(response.responseText, status);
		}
		});
		})

function onProjectDeleteComplete(response, status)
{
if (status == "success")
{
var resultSet = JSON.parse(response);
if (resultSet.status.trim() == "success")
{
$("#alertSuccess").text("Successfully deleted.");
$("#alertSuccess").show();
$("#divProjectGrid").html(resultSet.data);
} else if (resultSet.status.trim() == "error")
{
$("#alertError").text(resultSet.data);
$("#alertError").show();
}
} else if (status == "error")
{
$("#alertError").text("Error while deleting.");
$("#alertError").show();
} else
{
$("#alertError").text("Unknown error while deleting..");
$("#alertError").show();
}
}

