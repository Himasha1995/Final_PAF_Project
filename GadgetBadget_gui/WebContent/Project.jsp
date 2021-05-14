
<%@page import="com.Project"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Project Management</title>
<link rel="stylesheet" href="views/bootstrap.min.css">
<script src="components/jquery-3.5.0.min.js"></script>
<script src="components/Project.js"></script>
</head>
<body>

<div class="container"><div class="row"><div class="col-6">
<h1>Project Management</h1>

	<form id="formProject" name="formProject">
	Project code:
	<input id="projectCode" name="projectCode" type="text"class="form-control form-control-sm">
			
	<br> Project name:
	<input id="projectName" name="projectName" type="text"class="form-control form-control-sm">

	<br> Project Details:
	<input id="projectDetails" name="projectDetails" type="text"class="form-control form-control-sm">

	<br> Project Description:
	<input id="projectDetails" name="projectDetails" type="text"class="form-control form-control-sm">

	<br>Project Author
	<input id="projectAuthor" name="projectAuthor" type="text"class="form-control form-control-sm">
	
<br>
 <input id="btnSave" name="btnSave" type="button" value="Save"class="btn btn-primary">
 
 <input type="hidden" id="hidprojectIDSave"
 name="hidprojectIDSave" value="">
</form>
<div id="alertSuccess" class="alert alert-success"></div>
<div id="alertError" class="alert alert-danger"></div>
<br>
<div id="divProjectGrid">
<%
Project projectObj = new Project();
out.print(projectObj.readProjects());
%>
</div>
</div> </div> </div>
</body>
</html>