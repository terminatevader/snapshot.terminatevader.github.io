 var twenty = localStorage.getItem('eighteen') || '';
    if (twenty != 'yes') {
     if (confirm("New Blog Entry")==true) {
  location.href = "https://www.terminatevader.com/blog";
} 
    else{
     alert("Understandable, Have A Great Day")
    }
      localStorage.setItem('twenty','yes');
      localStorage.removeItem("eighteen");
    }
