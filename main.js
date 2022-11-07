function createGame(group, player1, hour, player2) {
  return `
    
  <h3><br>${group}</br></h3><li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira ${player1}" aria-label="${player1}" >
        <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira ${player2}">
    </li>
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <!--span dá espaço entre os itens-->
      <h2>${date} <span>${day}</span></h2>
      
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "20/11",
    "domingo",
    createGame("Grupo A", "qatar", "12:00", "ecuador")
  ) +
  createCard(
    "21/11",
    "segunda",
    createGame("Grupo B", "england", "09:00", "iran") +
    createGame("Grupo A", "senegal", "12:00", "netherlands") +
    createGame("Grupo B", "unitedstates", "12:00", "wales")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("Grupo C", "argentina", "06:00", "saudiarabia") +
    createGame("Grupo D", "denmark", "09:00", "tunisia") +
    createGame("Grupo C", "mexico", "12:00", "poland") +
    createGame("Grupo D", "france", "06:00", "australia")
  ) +

  createCard(
    "23/11",
    "quarta",
    createGame("Grupo F", "morocco", "06:00", "croatia") +
    createGame("Grupo E", "germany", "09:00", "japan") +
    createGame("Grupo E", "spain", "12:00", "costarica") +
    createGame("Grupo F", "belgium", "06:00", "canada")
  ) +

  createCard(
    "24/11",
    "quinta",
    createGame("Grupo G", "switzerland", "06:00", "cameroon") +
    createGame("Grupo H", "uruguay", "09:00", "southkorea") +
    createGame("Grupo H", "portugal", "12:00", "ghana") +
    createGame("Grupo G", "brazil", "06:00", "serbia")
  ) +

  createCard(
    "25/11",
    "sexta",
    createGame("Grupo B", "wales", "06:00", "iran") +
    createGame("Grupo A", "qatar", "09:00", "senegal") +
    createGame("Grupo A", "netherlands", "12:00", "ecuador") +
    createGame("Grupo B", "england", "06:00", "unitedstates")
  )

