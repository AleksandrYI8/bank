let cards_userc = [
    {
        card_type: "Visa",
        current: "RUB"
    },
    {
        card_type: "Visa",
        current: "RUB"
    },
    {
        card_type: "Visa",
        current: "RUB"
    },
    {
        card_type: "Visa",
        current: "RUB"
    },
    {
        card_type: "Visa",
        current: "RUB"
    },
    {
        card_type: "Visa",
        current: "RUB"
    }
]

let users_pay = [
    {
        id: Math.random(),
        card: "visa",
        catigory: "Автомоиль",
        price: 400000000,
        date: "4 дня назад"

    }
]


let card_box = document.querySelector('.card_box')
let table = document.querySelector('table')

function reload() {
    for(let item of cards_userc){
        let card = document.createElement('div')
        let h4 = document.createElement('h4')
        let p = document.createElement('p')

        card.classList.add('card')
        h4.innerHTML = item.card_type
        p.innerHTML = item.current

        card_box.append(card)
        card.append(h4,p)
    }
}


function reload_table() {
    for(let item of users_pay){
        let tr = document.createElement('tr')
        let td_f = document.createElement('td')
        let td_s = document.createElement('td')
        let td_th = document.createElement('td')
        let td_fth = document.createElement('td')
        let td_sx = document.createElement('td')

        td_f.innerHTML = item.id
        td_s.innerHTML = item.card
        td_th.innerHTML = item.catigory
        td_fth.innerHTML = item.price
        td_sx.innerHTML = item.date

        table.append(tr)
        tr.append(td_f,td_s,td_th,td_fth,td_sx)
    }
}

reload()
reload_table()