var w = Editor.GetSelectedString(0);
var r = '';
var len = w.length;
for (i = 0; i < len ; i++) {
  if (w.substr(i, 2) != '  ') {
    r += w.substr(i, 1);
  }
}
Editor.InsText(r);