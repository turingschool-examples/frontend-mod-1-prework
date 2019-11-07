function formProcess() {
  var collect = document.forms["input"]["hname"].value+ ": ";
  collect += document.forms["input"]["hero_type"].value;
  document.getElementById("outputDiv").innerHTML = collect;

}
