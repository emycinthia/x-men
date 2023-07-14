//     passo 1 - pegar os personagens no JS para verificar quando o usuário passar o mouse em cima de um deles
const personagens = document.querySelectorAll('.personagem');

//      passo 2 = adicionar a classe "selecionado" no personagem que o usuário passar o cursor do mouse
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        if (window.innerWidth < 450) {
           window.scrollTo({top: 0, behavior: 'smooth'});
        }

        //      passo 3 - verificar se já existe um personagem selecionado e, se sim, remover a seleção dele
        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')
        personagem.classList.add('selecionado');

        //      passo 4 - pegar o elemento do personagem grande para adicionar as informações nele
        const imgPersonagemGrande = document.querySelector('.personagem-grande')

        //      passo 5 - alterar a imagem do personagem grande
        const idPersonagem = personagem.attributes.id.value;
        imgPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`

        //      passo 6 - alterar o nome do personagem grande
        const nomePersonagem = document.getElementById('nome-personagem')
        nomePersonagem.innerText = personagem.getAttribute('data-name')

        //      passo 7 - alterar a descrição do personagem grande
        const descricaoPersonagem = document.getElementById('descricao-personagem')
        descricaoPersonagem.innerText = personagem.getAttribute('data-description')
    })
})