function formProcess() {
  var collect = document.forms["jsinput"]["hname"].value+ ": ";
  collect += document.forms["jsinput"]["hero_type"].value;
  document.getElementById("outputDiv").innerHTML = collect;

}
