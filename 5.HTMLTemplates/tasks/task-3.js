/* globals handlebars */
function solve(){
  return function(){
    $.fn.listview = function(data){
      var templateHolderId = this.attr('data-template'),
          template = $('#' + templateHolderId).html(),
          compiledHTML = handlebars.compile(template),
          i,
          len;
      console.log(templateHolderId);
      for(i = 0, len = data.length; i < len; i += 1){
        this.append(compiledHTML(data[i]));
      }

      return this;
    };
  };
}


 var books = [{
     id: 1,
     title: 'JS1'
 }, {
     id: 2,
     title: 'JS2'
 }, {
     id: 3,
     title: 'JS3'
 }, ];

solve()();
$('#books-list').listview(books);

module.exports = solve;