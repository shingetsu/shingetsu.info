
var IncrementalFilter = function() {
   this.initialize.apply(this, arguments);
}

IncrementalFilter.prototype = {
   _timer: false,

   initialize: function(input, lists, callback) {
      this.lists = lists;
      this.input = input;
      this._func = callback;
      addEvent(input, 'focus', this.start.bind(this));
      addEvent(input, 'blur',  this.stop.bind(this));
   },

   start: function() {
      this._timer = setInterval(this.update.bind(this), 500);
   },

   stop: function() {
      clearInterval(this._timer);
      this.update();
   },

   update: function(e) {
      var val = this.input.value;
      try { ''.match(val); } catch(e) { return; }

      for(var line, i = 0; line = this.lists[i];i++) {
         this._func.call(this, val, line);
      }
   }
}

initFunc.push(function() {
   if(!location.pathname.match(/\/gateway\.cgi\/.*/)) {
      return;
   }

   // フィルタ
   var tpt = $('filterform').filter;
   if(tpt) {
      new IncrementalFilter(tpt, $('thread_index').getElementsByTagName('li'),
         function(val, line) {
            var name = (line.getElementsByTagName('a'))[0].innerHTML;
            line.style.display = (name.match(val, 'i')) ? '' : 'none';
         });
   }

   // タグ
   var tag = $('tagform').tag;
   if(tag) {
      new IncrementalFilter(tag, $('thread_index').getElementsByTagName('li'),
         function(val, line) {
            var result;
            var span = $C('sugtags', line, 'span');
            if(span[0]) {
               var a = span[0].getElementsByTagName('a');
               for(var elm, i = 0; elm = a[i];i++) {
                  if(elm.innerHTML.match(val, 'i')) {
                     result = 1;
                     break;
                  }
               }
            } else if(val.length == 0) {
               result = 1;
            }
            line.style.display = (result) ? '' : 'none';
         });
   }
});

