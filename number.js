var w = Editor.GetSelectedString(0);
var ar = w.split(/\n/);
var r;
for(var i in ar) {
  if ( ar[i].match(/"kaibetu/)) {
    r += ar[i];
  }
}

Editor.InsText(r);