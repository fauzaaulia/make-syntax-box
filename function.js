<script src='https://cdn.rawgit.com/fauzaaulia/make-syntax-box/63d5e7c0/syntax.js' type='text/javascript'/> <script> $(&#39;pre&#39;).attr(&#39;class&#39;, &#39;line-numbers&#39;); Prism.hooks.add(&quot;after-highlight&quot;,function(e){var t=e.element.parentNode;if(!t||!/pre/i.test(t.nodeName)||t.className.indexOf(&quot;line-numbers&quot;)===-1){return}var n=1+e.code.split(&quot;\n&quot;).length;var r;lines=new Array(n);lines=lines.join(&quot;<span/>&quot;);r=document.createElement(&quot;span&quot;);r.className=&quot;line-numbers-rows&quot;;r.innerHTML=lines;if(t.hasAttribute(&quot;data-start&quot;)){t.style.counterReset=&quot;linenumber &quot;+(parseInt(t.getAttribute(&quot;data-start&quot;),10)-1)}e.element.appendChild(r)}) </script> <script type='text/javascript'> var pres = document.getElementsByTagName(&quot;pre&quot;); for (var i = 0; i &lt; pres.length; i++) { pres[i].addEventListener(&quot;dblclick&quot;, function () { var selection = getSelection(); var range = document.createRange(); range.selectNodeContents(this); selection.removeAllRanges(); selection.addRange(range); }, false); } </script>

<script type='text/javascript'>
//<![CDATA[
//Pre Auto Selection Highlighter 
$('i[rel="pre"]').replaceWith(function() {
    return $('<pre><code>' + $(this).html() + '</code></pre>');
});
var pres = document.querySelectorAll('pre,kbd,blockquote');
for (var i = 0; i < pres.length; i++) {
  pres[i].addEventListener("dblclick", function () {
    var selection = getSelection();
    var range = document.createRange();
    range.selectNodeContents(this);
    selection.removeAllRanges();
    selection.addRange(range);
  }, false);
}
//]]>
</script>
