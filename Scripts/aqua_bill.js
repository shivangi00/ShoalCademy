    var total = 0;
    var check = 1;
    var gw;
    var course;
    var adder = document.querySelector("#getme");
    adder.addEventListener("click", getMe);
    var by = document.querySelector("#out");
    by.addEventListener("click", checkOut);
    var cme = document.querySelector("#clr");
    cme.addEventListener("click", clearMe);

    function getMe() {
      course = document.querySelector("#sf").value;
      //perkg = parseFloat(document.querySelector("#entrybox").value);
      gw = document.querySelector("#writeme");
      check = 1;
      if (check == 1) {
     
        switch (course) {
          case "Hostel":
            var hostel = 30;
            gw.value += "Hostel Facility" + " = " + hostel + " $\r";
            total += hostel;
            break;
          case "Mess":
            var mess = 20;
            gw.value += "Mess Service" + " = " + mess + "$\r";
            total += mess;
            break;
          case "App":
            var app = 25;
            gw.value += "App Development" + " = " + app + " $\r";
            total += app;
            break;
          case "Web":
            var web = 30;
            gw.value += "Web Development" + " = " + web + " $\r";
            total += web;
            break;
          case "JS":
            var js = 44;
            gw.value += "JavaScript: Beginner to Advanced " + " = " + js + " $\r";
            total += js;
            break;
          case "Python":
            var py = 29;
            gw.value += "Game Development with Python " + " = " + py + " $\r";
            total += py;
            break;
          case "AI":
            var AI = 39;
            gw.value += "Introduction to Artificial Intelligence " + " = " + AI + " $\r";
            total += AI;
            break;
          case "React":
            var React = 25;
            gw.value += "React for Web Developers " + " = " + React + " $\r";
            total += React;
            break;
          case "Java":
            var java = 29;
            gw.value += "Java for Programmers " + " = " + java + " $\r";
            total += java;
            break;
          case "Interview":
            var Interview = 49;
            gw.value += "Ace the Job Interviews " + " = " + Interview + " $\r";
            total += Interview;
            break;
          case "ML":
            var ML = 35;
            gw.value += "Machine Learning for All " + " = " + ML + " $\r";
            total += ML;
            break;
        }

      }
    }

    function checkOut() {
      gw.value += "\r--------------------------------------------------------------\r";
      gw.value += "Your Total Bill Is = " + total + " $ \r";
      gw.value += "Thanks For Surfing by! :)\r";
      gw.value += "--------------------------------------------------------------\r";
      total = 0;
    }
    function clearMe () {
      gw.value = "";
    }

    function printDocument(elemid) {

        //Check if element is empty
        if (elemid == "") {
            window.print();
        }else {
            //array to store ids separated with comma if available
            var arrelemid = elemid.split(',');
            var htmlContent = "";
            for (var i = 0; i < arrelemid.length; i++) {
                htmlContent += document.getElementById(arrelemid[i]).innerHTML;
            }
        //Window Width (ww) and Window Height (wh) of the user's screen, in pixels
        var ww = screen.availWidth;
        var wh = screen.availHeight - 90;
        //Print Window (pw)
        var pw = window.open("", "newWin", "width=" + ww + ",height=" + wh);
        pw.document.write('<html><title>Printed Page</title><body>');
        pw.document.write('</head><body>');
        pw.document.write(htmlContent);
        pw.document.write('</body></html>');
        pw.document.close();
        pw.print();
        pw.close();
        }
    }