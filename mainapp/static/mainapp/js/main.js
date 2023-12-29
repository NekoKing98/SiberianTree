$('.dropdown-content a').click(function(event) {
    event.preventDefault(); // Предотвращает стандартное действие ссылки
    var linkName = this.name; // Получает имя ссылки
    
    $.ajax({
      type: 'POST',
      url: '/change_template/', // URL, куда отправляется запрос
      data: { 'link_name': linkName }, // Отправляемые данные
      success: function(response) {
          
      $('#content').html(response); // Обновляем содержимое блока <div id="content">
        // Скролл к элементу с id "content"
      
        // Скролл до элемента с id "content"
        $('html, body').animate({
            scrollTop: $("#content").offset().top
        }, 200);
        
      }
    });
});
document.getElementById('scrollToTopButton').addEventListener('click', function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
 });
