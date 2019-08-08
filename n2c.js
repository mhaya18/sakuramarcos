var w = Editor.GetSelectedString(0);
var arr =w.split(/\r\n|\r|\n/);
var r = '(' + arr + ')';
Editor.InsText(r);