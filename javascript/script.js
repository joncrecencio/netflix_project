const filmes = document.querySelector('#filme-cartaz')
const acao = document.querySelector('#acao')
const modalOverlay = document.querySelector('#modalOverlay')

const urlsCartaz = [
    {
        link:"https://image.tmdb.org/t/p/w220_and_h330_face/oaLXsduGoDOOftWziIOvyZzrR4T.jpg",
        nome: "Arrow"
    }, 

    {
        link:"https://image.tmdb.org/t/p/w220_and_h330_face/xLxgVxFWvb9hhUyCDDXxRPPnFck.jpg",
        nome:"joker"
    },

    {
        link:"https://image.tmdb.org/t/p/w220_and_h330_face/geyu6rplpbp7OUeOfB2uRVf1LpG.jpg",
        nome:"Liga da Justiça"
    },

    {
        link:"https://image.tmdb.org/t/p/w220_and_h330_face/f496cm9enuEsZkSPzCwnTESEK5s.jpg",
        nome:"Friends"
    },

    {
        link:"https://image.tmdb.org/t/p/w220_and_h330_face/811j0Jf2D0mK1U6RxXJoZgOB29n.jpg",
        nome:"Harry Potter"
    },

    {
        link:"https://image.tmdb.org/t/p/w220_and_h330_face/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg",
        nome: "Flash"
    },

    {
        link:"https://image.tmdb.org/t/p/w220_and_h330_face/38teDX74nsxkv2ysWvNT5EPXQ9E.jpg",
        nome:"Power"
    },

    {
        link:"https://image.tmdb.org/t/p/w220_and_h330_face/64gq5GavH3wAIxbFeyE5qpoTKxC.jpg",
        nome:"Senhor dos Anéis"
    },

    {
        link:"https://image.tmdb.org/t/p/w220_and_h330_face/oktTNFM8PzdseiK1X0E0XhB6LvP.jpg",
        nome:"Vikings"
    },

    {
        link:"https://image.tmdb.org/t/p/w220_and_h330_face/iSNdwFauC1QODm1ntk07wqJV1pf.jpg",
        nome:"Star Wars"
    }]

const urlsAcao =  [
    {
        link:"https://image.tmdb.org/t/p/w220_and_h330_face/oaLXsduGoDOOftWziIOvyZzrR4T.jpg",
        nome: "Arrow"
    }, 

    {
        link:"https://image.tmdb.org/t/p/w220_and_h330_face/xLxgVxFWvb9hhUyCDDXxRPPnFck.jpg",
        nome:"joker"
    },

    {
        link:"https://image.tmdb.org/t/p/w220_and_h330_face/geyu6rplpbp7OUeOfB2uRVf1LpG.jpg",
        nome:"Liga da Justiça"
    },

    {
        link:"https://image.tmdb.org/t/p/w220_and_h330_face/f496cm9enuEsZkSPzCwnTESEK5s.jpg",
        nome:"Friends"
    },

    {
        link:"https://image.tmdb.org/t/p/w220_and_h330_face/811j0Jf2D0mK1U6RxXJoZgOB29n.jpg",
        nome:"Harry Potter"
    },

    {
        link:"https://image.tmdb.org/t/p/w220_and_h330_face/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg",
        nome: "Flash"
    },

    {
        link:"https://image.tmdb.org/t/p/w220_and_h330_face/38teDX74nsxkv2ysWvNT5EPXQ9E.jpg",
        nome:"Power"
    },

    {
        link:"https://image.tmdb.org/t/p/w220_and_h330_face/64gq5GavH3wAIxbFeyE5qpoTKxC.jpg",
        nome:"Senhor dos Anéis"
    },

    {
        link:"https://image.tmdb.org/t/p/w220_and_h330_face/oktTNFM8PzdseiK1X0E0XhB6LvP.jpg",
        nome:"Vikings"
    },

    {
        link:"https://image.tmdb.org/t/p/w220_and_h330_face/iSNdwFauC1QODm1ntk07wqJV1pf.jpg",
        nome:"Star Wars"
    }]   

urlsCartaz.forEach((valorAtual) => {
    filmes.innerHTML += `<div class="item"><img class="box-filme" src="${valorAtual.link}" alt="${valorAtual.nome}"></div>`
})

urlsAcao.forEach((valorAtual) => {
    acao.innerHTML += `<div class="item"><img class="box-filme" src="${valorAtual.link}" alt="${valorAtual.nome}"></div>`
})

function clicar(){
    modalOverlay.innerHTML = `<iframe src="https://www.youtube.com/embed/Ws9X6I5CvcE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
}

function informacao(){
    alert("Assista agora a nova temporada")
}

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:7
        }
    }
})










        

