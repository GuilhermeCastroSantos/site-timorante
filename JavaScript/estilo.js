function submitNews() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (title && content) {
        const newsContainer = document.getElementById('newsContainer');

        // Cria uma div para a notícia
        const newsDiv = document.createElement('div');
        newsDiv.style.border = "1px solid #007BFF";
        newsDiv.style.borderRadius = "10px";
        newsDiv.style.padding = "15px";
        newsDiv.style.marginBottom = "10px";
        newsDiv.style.backgroundColor = "#FFFFFF";

        // Define o conteúdo da notícia
        newsDiv.innerHTML = `
            <h3 style="color: #007BFF; margin-bottom: 5px;">${title}</h3>
            <p style="color: #333;">${content}</p>
        `;

        // Adiciona a div ao container
        newsContainer.appendChild(newsDiv);

        // Armazena a notícia no localStorage
        const savedNews = JSON.parse(localStorage.getItem('news')) || [];
        savedNews.push({ title, content });
        localStorage.setItem('news', JSON.stringify(savedNews));

        // Limpa os campos do formulário
        document.getElementById('title').value = '';
        document.getElementById('content').value = '';
    } else {
        alert('Por favor, preencha todos os campos antes de enviar.');
    }
}