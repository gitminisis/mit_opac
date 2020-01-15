function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function getPageSize() {
  let currentURL = window.location.href;

  // BY DEFAULT PAGE SIZE = 10
  let pageSize = 10;
  // IF PAGESIZE IS IN THE URL
  if (currentURL.indexOf("PAGESIZE") !== -1) {
    pageSize = currentURL.split("PAGESIZE=")[1];
  }
  return pageSize;
}

var selectOptionsYear = "";
var yearCounter = 0;
var CurrentYearDatePickerID = "";
limitYear = new Date().getFullYear() + 50;
for (var i = 1699; i < limitYear; i++) {
  attrToAdd = "";
  scrollTo = "";
  if (i == 1699) {
    selectOptionsYear +=
      "<option value='' disabled selected" +
      attrToAdd +
      ">Select year</option>";
  } else if (i == new Date().getFullYear()) {
    CurrentYearDatePickerID = yearCounter;
    selectOptionsYear +=
      "<option value='" +
      i +
      "'" +
      attrToAdd +
      " id='scrollTo'>" +
      i +
      "</option>";
  } else {
    selectOptionsYear +=
      "<option value='" + i + "'" + attrToAdd + ">" + i + "</option>";
  }
  yearCounter += 1;
}

var HOME_SESSID = getCookie("HOME_SESSID");

var searchHistoryCookie = getCookie("USEARCH_HISTORY");
searchHistory = [];
function designSearchHistory() {
  if (searchHistoryCookie.length > 0) {
    raw_detail = searchHistoryCookie.split("||");
    for (i = 0; i < raw_detail.length; i++) {
      temp_arr = [];
      if (i % 3 === 0 || i == 0) {
        temp_arr = {
          hit: raw_detail[i],
          search_term: raw_detail[i + 1],
          keyword: raw_detail[i + 2]
        };
        searchHistory.push(temp_arr);
      }
    }
  }

  var textToAdd = "";
  for (var i = 0; i < searchHistory.length - 1; i++) {
    var modifiedHit = "";
    if (i == 0) {
      modifiedHit = searchHistory[i].hit.substring(2);
    } else {
      modifiedHit = searchHistory[i].hit;
    }
    textToAdd +=
      "<tr><td><a href='" +
      HOME_SESSID +
      "?UNIONSEARCH&application=UNION_VIEW&exp=" +
      searchHistory[i].keyword +
      "'>" +
      searchHistory[i].search_term +
      "</a></td><td>" +
      modifiedHit +
      "</td></tr>";
  }
  $("#search-history-table tbody").html(textToAdd);
}

designSearchHistory();
var isLoggedIn;
var username = getCookie("BOOKMARK");
if (username.length > 0) {
  isLoggedIn = true;
} else {
  isLoggedIn = false;
}
if (isLoggedIn) {
  $("#user-name").html('"' + username + '"');
  $(".not-loggedIn-section").attr("hidden", true);
  $(".loggedIn-section").attr("hidden", false);
  $("#logIn-notify").attr("hidden", true);
} else {
  $(".not-loggedIn-section").attr("hidden", false);
  $(".loggedIn-section").attr("hidden", true);
}

$(document).ready(function() {
  // PRINTINT FUNCTION
  $("#resultsNumber option[value='100']").prop("selected", true);
  // FOR DETAIL PAGE
  $(".sort.printBtn").on("click", function() {
    window.print();
  });
  $(function() {
    //Calls the selectBoxIt method on your HTML select box.
    $("select").selectBoxIt({
      showFirstOption: false
    });
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $("#back-to-top").fadeIn();
    } else {
      $("#back-to-top").fadeOut();
    }
  });
  // scroll body to 0px on click
  $("#back-to-top").click(function() {
    $("body,html").animate(
      {
        scrollTop: 0
      },
      400
    );
    return false;
  });
});
var searchFieldsLength = $(".search-fields>.row");

function addSearchField() {
  var fieldToadd =
    ' <div class="row"><div class="col-sm-2"><label for="field2">Select Field:</label></div><div class="col-sm-6"><select title="Field to search" name="mnemonic3"> <option value="">Select</option> <option value="REFD">Reference ID</option> <option value="LEVEL_DESC">Level</option> <option value="D_ACCNO">Accession Number</option> <option value="RST_LEVEL">Classification</option> <option value="TITLE">Title</option> <option value="DATE_CR_INC">Date Span</option> <option value="LOCATION">Location</option> <option value="BOX_NO">Box #</option> <option value="FORM">Material Type</option> <option value="REP_DIGITAL">Digital</option> <option value="RESTRICTIONS">Conditions Governing Access </option> <option value="OTHER_FORMATS">Location of Copies</option> <option value="RELATED_MAT">Related Material </option> <option value="SCOPE">Scope Note </option> <option value="OTHER_CONTEXT">Other Context </option> <option value="NOTES">General Notes </option> <option value="CONSERVATION">General Physical Description Notes </option> <option value="TITLE_NOTES">Physical and Technical Requirements Notes </option> <option value="ORIGINATOR">Creator</option> <option value="INDEXPROV">Donor/Source</option> <option value="SUBJECT">Subject Taxonomy Term(s)</option> <option value="CORPORATE">Corporate Taxonomy Term(s)</option> <option value="INDEXSUB">People Subjects</option> </select><input type="text" class="form-control"></div><div class="col-sm-4"><div class="row"><div class="col-sm-3"><input type="radio" value="and">and</div><div class="col-sm-3"><input type="radio" value="or">or</div><div class="col-sm-3" ><input type="radio" value="not">not </div><span class=" right remove" style=" font-size:16px; cursor:pointer">Remove</span></div></div></div>';

  $(".search-fields").append(fieldToadd);
  $(".search-fields select").selectBoxIt();
}

$("body").on("click", ".remove", function() {
  $(this)
    .parent()
    .parent()
    .parent()

    .remove();
});
$(".record-selection").change(function() {
  if ($(this).is(":checked")) {
    $(".level-line input[type=checkbox").prop("checked", true);
  } else {
    $(".level-line input[type=checkbox").prop("checked", false);
  }
});
$(".bookmark").on("click", function(e) {
  var checkedItems = $("#bookmark-form input[type=checkbox]:checked");
  console.log(checkedItems.length);
  if (checkedItems.length > 0) {
    $("form#bookmark-form").submit();
  } else {
    $("#noselection").modal("show");
    e.preventDefault();
    return false;
  }
});
$("#deleteBookmark").on("click", function(e) {
  var checkedItems = $("#bookmark-form input[type=checkbox]:checked");
  console.log(checkedItems.length);
  if (checkedItems.length > 0) {
    console.log("test");
    $("form#bookmark-form").submit();
  } else {
    $("#noselection").modal("show");
    e.preventDefault();
    return false;
  }
});
var buttons = $(".sort-bar a");
buttons.each(function() {
  $(this).addClass("btn btn-default sort");
});
$(".filter-list-checkbox").change(function() {
  window.location = $(this)
    .parent()
    .attr("href");
});

if (!isLoggedIn) {
  $("body").on("click", function(e) {
    if (!$(e.target).is("#login-modal button[type=submit]")) {
      e.preventDefault();
      $("#login-modal").modal("show");
    }
  });
}

function logOffRequest() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {};
  xhttp.open(
    "GET",
    HOME_SESSID + "?LOGOFF&file=[MIT_ROOT]home.html&cookie=BOOKMARK"
  );
  xhttp.send();
}
$("form#advanceSearchForm").on("submit", function(e) {
  arrangeAdvanceSearchCluster();
});
var firstDate = "";
var secondDate = "";
function arrangeAdvanceSearchCluster(fields) {
  var fields = $("#advanceSearchForm .search-fields input[type=text]");
  var searchPhrase = "";
  fields.each(function() {
    var $selectedOption = $(this)
      .parent()
      .find("select")
      .val();
    var $selectedBool =
      $(this)
        .parent()
        .parent()
        .find("input[type=radio]:checked").length > 0
        ? $(this)
            .parent()
            .parent()
            .find("input[type=radio]:checked")
            .val()
        : "";
    searchPhrase +=
      $selectedOption + " " + $(this).val() + " " + $selectedBool + " ";
  });
  $("#hiddenKeywords").val(searchPhrase);
  console.log(firstDate);
  $("#hidden-date").val(firstDate + "-" + secondDate);
}
$("#datepickerOne").on("change", function() {
  firstDate = $(this).val();
});
$("#datepickerTwo").on("change", function() {
  secondDate = $(this).val();
});

var plusSigns = $("ul#top>li>a");
$("ul#top>li>a").on("click", function() {
  if ($(this).attr("aria-expanded") == "true") {
    $(this)
      .find("i.fa-plus")
      .show();
    $(this)
      .find("i.fa-minus")
      .hide();
  }
  if ($(this).attr("aria-expanded") == "false") {
    $(this)
      .find("i.fa-plus")
      .hide();
    $(this)
      .find("i.fa-minus")
      .show();
  }
});
$("#datepickerOne")
  .html(selectOptionsYear)
  .selectBoxIt();
$("#datepickerTwo")
  .html(selectOptionsYear)
  .selectBoxIt();

$("#datepickerOneSelectBoxItContainer").on("click", function() {
  list = $("ul#datepickerOneSelectBoxItOptions li");
  list.each(function() {
    if ($(this).data("id") == CurrentYearDatePickerID) {
      $(this).css("background-color", "#5c788f");
      $(this)
        .parent()
        .animate({
          scrollTop: $(this).position().top
        });
    }
  });
});
$("#datepickerTwoSelectBoxItContainer").on("click", function() {
  list = $("ul#datepickerTwoSelectBoxItOptions li");
  list.each(function() {
    if ($(this).data("id") == CurrentYearDatePickerID) {
      $(this).css("background-color", "#5c788f");
      $(this)
        .parent()
        .animate({
          scrollTop: $(this).position().top
        });
    }
  });
  $("#datepickerOne")
    .html(selectOptionsYear)
    .selectBoxIt();
  $("#datepickerTwo")
    .html(selectOptionsYear)
    .selectBoxIt();

  $("#datepickerOneSelectBoxItContainer").on("click", function() {
    list = $("ul#datepickerOneSelectBoxItOptions li");
    list.each(function() {
      if ($(this).data("id") == CurrentYearDatePickerID) {
        $(this).css("background-color", "#5c788f");
        $(this)
          .parent()
          .animate({
            scrollTop: $(this).position().top
          });
      }
    });
  });
  $("#datepickerTwoSelectBoxItContainer").on("click", function() {
    list = $("ul#datepickerTwoSelectBoxItOptions li");
    list.each(function() {
      if ($(this).data("id") == CurrentYearDatePickerID) {
        $(this).css("background-color", "#5c788f");
        $(this)
          .parent()
          .animate({
            scrollTop: $(this).position().top
          });
      }
    });
  });
});

// ADDED read
$(document).ready(function() {});
