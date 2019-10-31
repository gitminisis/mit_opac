var filtersTag = document.getElementsByTagName("filter");
var fileToAdd = "<div class='accordion' id='filterListAccordion'>";
for (var i = 0; i < filtersTag.length; i++) {
  title = filtersTag[i].getAttribute("title");
  fileToAdd +=
    "<div class='card'><div class='card-header' id='heading" +
    i +
    "'><h5 class='mb-0'><button class='btn btn-link' type='button' aria-expanded='true' aria-controls='collapse" +
    i +
    "'>" +
    title +
    "<span class='caret-holder'><i class='fa fa-caret-down'></i></span></button></h5></div><div id='collapse" +
    i +
    "' class='collapse show' aria-labelledby='heading" +
    i +
    "' ><div class='card-body'><ul class='list-group list-group-flush'>";
  items = filtersTag[i].getElementsByTagName("item_group");
  for (var j = 0; j < items.length; j++) {
    link = items[j].getElementsByTagName("item_link")[0].childNodes[0]
      .nodeValue;
    frequency = items[j].getElementsByTagName("item_frequency")[0].childNodes[0]
      .nodeValue;
    value = items[j].getElementsByTagName("item_value")[0].childNodes[0]
      .nodeValue;
    var isSelected =
      items[j].getElementsByTagName("item_selected")[0].childNodes[0]
        .nodeValue == "N"
        ? ""
        : "checked";
    fileToAdd +=
      "<li class='list-group-item'><a href='" +
      link +
      "'><input type='checkbox' class='filter-list-checkbox'" +
      isSelected +
      "><span class='filterValue'>" +
      value +
      " (" +
      frequency +
      ")</span></a></li>";
  }
  fileToAdd += "</ul></div></div></div>";
}
fileToAdd += "</div>";
$("#filter-list-items").html(fileToAdd);
