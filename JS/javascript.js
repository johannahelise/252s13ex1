function validateForm()
{
var x=document.forms["MyWebpage"]["streetaddress1"].value;

var y=document.forms["MyWebpage"]["email"].value;
var atpos=y.indexOf("@");
var dotpos=y.lastIndexOf(".");

var z=document.forms["MyWebpage"]["city"].value;

var a=document.forms["MyWebpage"]["zipcode"].value;

var b= /^\(?([0-9]{3})\)?[-.]?([0-9]{3})[-.]?([0-9]{4})$/;
if (x==null || x=="")
  {
  	alert("Street Address 1 must be filled out");
  	return false;
  }

else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=y.length)
  {
  	alert("Not a valid e-mail address");
  	return false;
  }
  else if (c==null || c=="")
  {
  	alert("Please fill in your state");
  	return false;
  	}
  
  
  
  
else if (z==null || y=="")
  {
  	alert("City must be filled out");
  	return false;
  }

else if (a==<5 || a==>5)
	{
		alert("Not a valid zipcode");
		return false;
	}

else (b==<10 || b==>10)
	{
		alert("Not a valid phone number");
		return false;
	}
}



  
