var w = Editor.GetSelectedString(0);
var arr =w.split(/\r\n|\r|\n/);
var t = "";
var arr2 = new Array;
for (var i = 0; i <= arr.length -1; i++) {
  arr2[i] = "'" + arr[i] + "'";
}
var r = '(' + arr2 + ')';
Editor.InsText(r);