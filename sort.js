<script>
// initializing counter and array
var numbernames=0;
var names = new Array();
function SortNames() {
  //get name from text field
  thename=document.theform.newname.value;
  //add to array
  names[numbernames]=thename;
  //increment counter
  numbernames++;
  //sort the array
  names.sort();
  document.theform.sorted.value=names.join("\n");
  }
</script>
