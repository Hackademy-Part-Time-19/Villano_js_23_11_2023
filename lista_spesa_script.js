
let lista=["pere","kiwi","banane","forbici","giravite"]





    function aggiungiElemento() {
      let elemento = prompt("Inserisci l'elemento da aggiungere:").toLowerCase();
      lista.push(elemento);
      alert(`'${elemento}' è stato aggiunto alla lista.`);

      eseguiAzione();
    }

    function eliminaElemento() {
      let elemento = prompt("Inserisci l'elemento da eliminare:").toLowerCase();
      const indice = lista.indexOf(elemento);
      if (indice !== -1) {
        lista.splice(indice, 1);
        alert(`'${elemento}' è stato eliminato dalla lista.`);
      } else {
        alert(`'${elemento}' non trovato nella lista.`);
      }

      eseguiAzione();
    }

    function ordinaLista() {
      lista.sort();
      alert("La lista è stata ordinata in modo alfabetico.");

      eseguiAzione();
    }

    function modificaElemento() {
      let vecchioElemento = prompt("Inserisci l'elemento da modificare:").toLowerCase();
      const indice = lista.indexOf(vecchioElemento);
      if (indice !== -1) {
        let nuovoElemento = prompt("Inserisci il nuovo valore:");
        lista[indice] = nuovoElemento;
        alert(`L'elemento è stato modificato: '${vecchioElemento}' -> '${nuovoElemento}'.`);
      } else {
        alert(`L'elemento '${vecchioElemento}' non trovato nella lista.`);
      }

      eseguiAzione();
    }

    function eliminaLista() {
      lista = [];
      alert("La lista è stata eliminata.");

      eseguiAzione();
    }

    function visualizzaLista() {
      if (lista.length > 0) {
        let output = "Lista:\n";
        lista.forEach(elemento => output += `- ${elemento}\n`);
        alert(output);
      } else {
        alert("La lista è vuota.");
      }

      eseguiAzione();
    }


    function eseguiAzione() {
      let scelta = prompt("\n Menù:\n\n 1. Aggiungi un elemento alla lista\n2. Elimina un elemento dalla lista\n3. Ordina la lista in ordine alfabetico\n4. Modifica un elemento della lista\n5. Elimina l'intera lista\n6. Visualizza la lista\n0. Chiudi il programma\nInserisci il numero corrispondente all'azione desiderata:");
      switch (scelta) {
        case "1":
          aggiungiElemento();
          break;
        case "2":
          eliminaElemento();
          break;
        case "3":
          ordinaLista();
          break;
        case "4":
          modificaElemento();
          break;
        case "5":
          eliminaLista();
          break;
        case "6":
          visualizzaLista();
          break;
        case "0":
          alert("Programma chiuso.");
          break;
        default:
          alert("Scelta non valida. Riprova.");
          eseguiAzione();
      }
    }


    eseguiAzione();