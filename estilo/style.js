document.getElementById('newsForm').addEventListener('submit', function(event)
{
    event.preventDefault(); // impede o reload da página

    const title = document.getElementById('title').Value;

    const content = document.getElementById('content').Value;

    const newsContainer = getElementById('newsContainer');

    const newArticle = document.createElement('div');
    newArticle.innerHTML = '<h3>${title}</h3><p>${content}</p>';
    newsContainer.appendChild(newArticle); // Limpa os campos após o envio

    document.getElementById('newsForm').reset();
});