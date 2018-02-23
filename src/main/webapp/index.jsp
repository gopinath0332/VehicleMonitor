<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<body>
<%
    boolean isAuthenticated = false;
    if( session.getAttribute("isAuthenticated") != null)
        isAuthenticated = (Boolean) session.getAttribute("isAuthenticated");
%>
<% if(isAuthenticated){ %>
<%@include file="./resources/index.html"%>
<% }else{ %>
<%@include file="./resources/login.html" %>
<% } %>

</body>
</html>