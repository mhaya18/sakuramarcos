var w = Editor.GetSelectedString(0);
var len = w.length;
var r = '';
var w1, de, bi, w0;
for (i = 0; i < len ; i++) {
  w1 = w.substr(i, 1);
  de = parseInt(w1, 16);
  bi = de.toString(2);
  w0 = ('0000' + bi).slice(-4);
  r += w0;
}
Editor.InsText(r);