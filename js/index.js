let input2txt,
  storage2txt,
  totalword = 0,
  totalline = 0;

// Load text from local Storage
if (input2txt == null) {
  input2txt = localStorage.getItem(storage2txt);
  document.getElementById("input-txt").value =
    localStorage.getItem(storage2txt);
  textboxlive();
}

function textboxlive() {
  // Store Text in local Storage
  input2txt = document.getElementById("input-txt").value;
  localStorage.setItem(storage2txt, input2txt);

  // Playground live status
  if (input2txt != "") {
    totalword = input2txt.match(/\w+/g).length;
    totalline = (input2txt.match(/\n/g) || "").length + 1;
  }
  var curstatus = "Line " + totalline + ", Word " + totalword;
  document.getElementById("status").innerHTML = curstatus;
}

// Copy text on clipboard
function txt2clipboard() {
  var copyText = document.getElementById("input-txt");
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  var tooltip = document.getElementById("copyTooltip");
  tooltip.innerHTML = "Copied";
}

function outFunc() {
  var tooltip = document.getElementById("copyTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}

// Text functions
function txt2upper() {
  document.getElementById("input-txt").value = input2txt.toUpperCase();
}

function txt2lower() {
  document.getElementById("input-txt").value = input2txt.toLowerCase();
}

function txt2sentence() {
  var ans = "";
  const txt2split = input2txt.split(".");
  for (var i = 0; i < txt2split.length; i++) {
    var element = txt2split[i];
    element = element.trim();
    if (element == "") continue;
    ans = ans + element.charAt(0).toUpperCase() + element.substr(1) + ". ";
  }
  document.getElementById("input-txt").value = ans.trim();
}

function txt2title() {
  document.getElementById("input-txt").value = input2txt
    .toLowerCase()
    .replace(/\b\w/g, (s) => s.toUpperCase());
}

function txt2alternat() {
  var ans = "";
  for (var i = 0; i < input2txt.length; i++) {
    var letter = input2txt.charAt(i);
    if (i % 2 == 1) letter = letter.toUpperCase();
    else letter = letter.toLowerCase();
    ans = ans + letter;
  }
  document.getElementById("input-txt").value = ans;
}

function txt2linebr() {
  var ans = "";
  const txt2split = input2txt.split(".");
  for (var i = 0; i < txt2split.length; i++) {
    var element = txt2split[i];
    if (element == "") continue;
    element = element.trim();
    ans = ans + element.charAt(0).toUpperCase() + element.substr(1) + ".\n";
  }
  document.getElementById("input-txt").value = ans.trim();
}

function txt2paragraph() {
  txt2sentence();
  var temp = document.getElementById("input-txt").value;
  ans = " ".repeat(5) + temp;
  document.getElementById("input-txt").value = ans;
}

function spaceRemover() {
  var ans = "";
  for (var i = 0; i < input2txt.length; i++) {
    if (input2txt.charAt(i) == " " && input2txt.charAt(i + 1) == " ") continue;
    ans = ans + input2txt.charAt(i);
  }
  document.getElementById("input-txt").value = ans;
}
