document.addEventListener("DOMContentLoaded", function () {
  const qButton = document.querySelectorAll(".pytanie");
  const qElements = document.querySelectorAll(".q1, .q2, .q3, .q4, .q5, .q6");
  const chooseSection = document.querySelector(".choose");
    // Baza kamer
    const kamery = [
      { model: 'ORLLO Z12', link:'https://orllo.pl/kamera-zewnetrzna-wifi-goodcam-z12.html',zdj:'https://orllo.pl/media/catalog/product/cache/481935a1c822f44bdf200af318d63e8a/k/a/kamera_zewn_trzna_orllo_z12_orllo.pl.png'},
      { model: 'ORLLO TZ2', link:'https://orllo.pl/kamera-zewnetrzna-obrotowa-wifi-orllo-tz2.html',zdj:'https://orllo.pl/media/catalog/product/cache/481935a1c822f44bdf200af318d63e8a/k/a/kamera-wifi-ip-zewnetrzna-obrotowa-tz2-orllo-01.png'},
      { model: 'ORLLO Z16', link:'https://orllo.pl/kamera-obrotowa-zewnetrzna-wifi-ip-orllo-z16.html',zdj:'https://orllo.pl/media/catalog/product/cache/481935a1c822f44bdf200af318d63e8a/m/i/mini_kamera_orllo_z16_orllo.pl_1.png'},
      { model: 'ORLLO Z16', link:'https://orllo.pl/kamera-obrotowa-zewnetrzna-wifi-ip-orllo-z16.html',zdj:'https://orllo.pl/media/catalog/product/cache/481935a1c822f44bdf200af318d63e8a/m/i/mini_kamera_orllo_z16_orllo.pl_1.png'},
      { model: 'ORLLO E9',  link:'https://orllo.pl/kamera-wifi-na-baterie-orllo-e9.html',zdj:'https://orllo.pl/media/catalog/product/cache/481935a1c822f44bdf200af318d63e8a/k/a/kamera_zewn_trzna_obrotowa_na_bateri_orllo_e9.png'},
      { model: 'ORLLO Z8 PRO', link:'https://orllo.pl/kamera-zewnetrzna-obrotowa-z8.html',zdj:'https://orllo.pl/media/catalog/product/cache/481935a1c822f44bdf200af318d63e8a/k/a/kameraz-zewnetrzna-podczerwien-kolor-chmura-z8-orllo-pl.png'},
      { model: 'ORLLO TZ3',  link:'https://orllo.pl/orllo-tz3-kamera-zewnetrzna.html',zdj:'https://orllo.pl/media/catalog/product/cache/481935a1c822f44bdf200af318d63e8a/k/a/kamera_zewn_trzna_wifi_ip_poe_orllo_tz3.png'},
      { model: 'ORLLO E4 PRO', link:'https://orllo.pl/kamera-zewnetrzna-wifi-powercam-e4.html',zdj:'https://orllo.pl/media/amasty/webp/catalog/product/cache/481935a1c822f44bdf200af318d63e8a/k/a/kamera-zewn_trzna-ip-wifi-podczerwie_-orlloe4_orllopl_png.webp'},
      { model: 'ORLLO TZ4', link:'https://orllo.pl/kamera-zewnetrzna-wifi-ip-tz4.html',zdj:'https://orllo.pl/media/catalog/product/cache/481935a1c822f44bdf200af318d63e8a/k/a/kamera_wifi_zewn_trzna_tuya_orllo_tz4.jpg'},
      { model: 'ORLLO W9',  link:'https://orllo.pl/mini-kamera-do-domu-orllo-w9.html',zdj:'https://orllo.pl/media/catalog/product/cache/481935a1c822f44bdf200af318d63e8a/k/a/kamera_wewn_trzna_orllo_w9_orllo.pl.png'},
      { model: 'ORLLO E8',  link:'https://orllo.pl/mini-kamera-orllo-e8.html',zdj:'https://orllo.pl/media/catalog/product/cache/481935a1c822f44bdf200af318d63e8a/k/a/kamera_wifi_wewn_trzna_obrotowa_orllo_e8.png'},
      { model: 'ORLLO E7',  link:'https://orllo.pl/kamera-solarna-orllo-e7-sim.html',zdj:'https://orllo.pl/media/catalog/product/cache/481935a1c822f44bdf200af318d63e8a/k/a/kamera_zewn_trzna_solarna_bezprzewodowa_orllo_e7_pro.jpg'},
      { model: 'ORLLO Z10',  link:'https://orllo.pl/kamera-zewnetrzna-obrotowa-zoom-wifi-goodcam-z10.html',zdj:'https://orllo.pl/media/catalog/product/cache/481935a1c822f44bdf200af318d63e8a/k/a/kamera_zewn_trzna_orllo_z10_orllo.pl_1.png'},
      { model: 'ORLLO Z9 PRO',  link:'https://orllo.pl/kamera-zewnetrzna-obrotowa-wifi-goodcam-z9.html',zdj:'https://orllo.pl/media/amasty/webp/catalog/product/cache/481935a1c822f44bdf200af318d63e8a/k/a/kamera-zewnetrzna-orllo-pl_png.webp'},
      { model: 'ORLLO Z9 z Panelem', link:'https://orllo.pl/zestaw-solarny-ap-fotowoltaiczny-bez-internetu.html',zdj:'https://orllo.pl/media/catalog/product/cache/481935a1c822f44bdf200af318d63e8a/z/d/zdj_cie_g_wne.jpg'},
      { model: 'ORLLO Z1 2K', link:'https://orllo.pl/kamera-zewnetrzna-ip-full-hd-mini.html',zdj:'https://orllo.pl/media/catalog/product/cache/481935a1c822f44bdf200af318d63e8a/o/r/orllo_z_1_2k_kamera_zewn_trzna_sklep_orllo.pl_1_.jpg'},
      { model: 'ORLLO Z7',  link:'https://orllo.pl/kamera-zewnetrzna-obrotowa-gsm-goodcam-z7.html',zdj:'https://orllo.pl/media/catalog/product/cache/481935a1c822f44bdf200af318d63e8a/k/a/kameraz-zewnetrzna-obrotowa-z7-orllo-pl_1.png'},
      { model: 'ORLLO TZ1 PRO', link:'https://orllo.pl/orllo-tz-1.html',zdj:'https://orllo.pl/media/amasty/webp/catalog/product/cache/481935a1c822f44bdf200af318d63e8a/k/a/kamera-z-panelem-solarnym-orllo-wifi-tuya_1__2_png.webp'},
      { model: 'ORLLO Z18',  link:'https://orllo.pl/kamera-zewnetrzna-obrotowa-sim-z18.html',zdj:'https://orllo.pl/media/catalog/product/cache/481935a1c822f44bdf200af318d63e8a/k/a/kamera_zewn_trzna_orllo_z10_orllo.pl_1_4.png'},
      { model: 'ORLLO Z18 z Panelem',  link:'https://orllo.pl/system-solarny-gsm-sim.html',zdj:'https://orllo.pl/media/catalog/product/cache/481935a1c822f44bdf200af318d63e8a/k/a/kamera_bezprzewodowa_obrotowa_zdj_cie_g_wne.jpg'},
      { model: 'ORLLO W8 PRO', link:'https://orllo.pl/mini-kamera-gsm-sim.html',zdj:'https://orllo.pl/media/catalog/product/cache/481935a1c822f44bdf200af318d63e8a/m/i/mini_kamera_domowa_orllo_w8_pro_orllo.pl.png'},
      { model: 'ORLLO W10',  link:'https://orllo.pl/mini-kamera-gsm-orllo-w10.html',zdj:'https://orllo.pl/media/catalog/product/cache/481935a1c822f44bdf200af318d63e8a/o/r/orllo_w10_mini_kamera_na_kart_sim_orllo.pl.png'},
      { model: 'ORLLO Z17',  link:'https://orllo.pl/kamera-zewnetrzna-obrotowa-gsm-z17.html',zdj:'https://orllo.pl/media/catalog/product/cache/481935a1c822f44bdf200af318d63e8a/k/a/kamera_zewn_trzna_orllo_z17_orllo.pl_1.png'},
      { model: 'ORLLO Z17 z Panelem',  link:'https://orllo.pl/kamera-zewnetrzna-obrotowa-gsm-z17-1.html',zdj:'https://orllo.pl/media/catalog/product/cache/481935a1c822f44bdf200af318d63e8a/k/a/kamera_bezprzewodowa_z17zdj_cie_g_wne.jpg'},
      { model: 'ORLLO E-SET-W1', link:'https://orllo.pl/zestaw-do-monitoringu-4-kamery-3mpx-orllo-e-set-w1.html',zdj:'https://orllo.pl/media/amasty/webp/catalog/product/cache/481935a1c822f44bdf200af318d63e8a/z/e/zestaw_4_kamer_wifi_ip_png.webp'},
      
    ];

  let currentQIndex = 0;
  const selectedAnswers = {}; // Przechowywanie odpowiedzi

  qButton.forEach((button, index) => {
    button.addEventListener("click", function () {
      const question = button.getAttribute("name");
      const answer = button.value;
      selectedAnswers[question] = answer; // Zapisywanie odpowiedzi

      qElements[currentQIndex].style.display = "none";
      currentQIndex++;

      if (currentQIndex < qElements.length) {
        qElements[currentQIndex].style.display = "block";
      } else {
        chooseCamera();
        chooseSection.style.display = "block";
      }
    });
  });

  function chooseCamera() {
    // Sprawdzanie, czy użytkownik wybrał odpowiednie opcje
    if (
      selectedAnswers["apka"] === "pierwszy" &&
      selectedAnswers["prad"] === "tak" &&
      selectedAnswers["miejsce"] === "zewnetrzna" &&
      selectedAnswers["wifi"] === "tak" &&
      selectedAnswers["zasieg"] === "do_10m"
    ) {
      // Losowanie między ORLLO POWERCAM E4 PRO a ORLLO Z1 2K
      const selectedModel = Math.random() < 0.5 ? "ORLLO POWERCAM E4 PRO" : "ORLLO Z1 2K";
  
      // Wybieranie kamery na podstawie losowania
      const selectedCamera = kamery.find((camera) => {
        return (
          camera.model === selectedModel 
        );
      });
  
      if (selectedCamera) {
        // Wyświetlanie wybranej kamery
        const kameryImg = document.getElementById("kamery");
        const nameKamera = document.getElementById("nazwa_kamery");
        const linkPrzejdz = document.getElementById("link_przejdz");
  
        kameryImg.src = selectedCamera.zdj;
        nameKamera.textContent = selectedCamera.model;
        linkPrzejdz.href = selectedCamera.link;
      }
    } 
    else if (
      selectedAnswers["apka"] === "pierwszy" &&
      selectedAnswers["prad"] === "tak" &&
      selectedAnswers["miejsce"] === "zewnetrzna" &&
      selectedAnswers["wifi"] === "tak" &&
      selectedAnswers["zasieg"] === "do_20m"
  ) {
      // Wybieranie kamery ORLLO E4 PRO
      const selectedModel = Math.random() < 0.5 ? "ORLLO Z12" : "ORLLO Z8 PRO";
  
      // Wybieranie kamery na podstawie losowania
      const selectedCamera = kamery.find((camera) => {
        return (
          camera.model === selectedModel
            
          );
      });

      if (selectedCamera) {
          // Wyświetlanie wybranej kamery
          const kameryImg = document.getElementById("kamery");
          const nameKamera = document.getElementById("nazwa_kamery");
          const linkPrzejdz = document.getElementById("link_przejdz");

          kameryImg.src = selectedCamera.zdj;
          nameKamera.textContent = selectedCamera.model;
          linkPrzejdz.href = selectedCamera.link;
      } 
  } 
    else if (
      selectedAnswers["apka"] === "pierwszy" &&
      selectedAnswers["prad"] === "tak" &&
      selectedAnswers["miejsce"] === "zewnetrzna" &&
      selectedAnswers["wifi"] === "tak" &&
      selectedAnswers["zasieg"] === "powyzej_30m"
  ) {
    const selectedModel = Math.random() < 0.5 ? "ORLLO Z9" : "ORLLO Z10";
  
    // Wybieranie kamery na podstawie losowania
    const selectedCamera = kamery.find((camera) => {
      return (
        camera.model === selectedModel 
          
        );
    });

      if (selectedCamera) {
          // Wyświetlanie wybranej kamery
          const kameryImg = document.getElementById("kamery");
          const nameKamera = document.getElementById("nazwa_kamery");
          const linkPrzejdz = document.getElementById("link_przejdz");

          kameryImg.src = selectedCamera.zdj;
          nameKamera.textContent = selectedCamera.model;
          linkPrzejdz.href = selectedCamera.link;
      } 
  } 
    else if (
      selectedAnswers["apka"] === "pierwszy" &&
      selectedAnswers["prad"] === "tak" &&
      selectedAnswers["miejsce"] === "zewnetrzna" &&
      selectedAnswers["wifi"] === "nie" &&
      selectedAnswers["zasieg"] === "do_10m"
  ) {
    const selectedModel = Math.random() < 0.5 ? "ORLLO E9" : "ORLLO Z17";
  
    // Wybieranie kamery na podstawie losowania
    const selectedCamera = kamery.find((camera) => {
      return (
        camera.model === selectedModel 
            
        );
    });

      if (selectedCamera) {
          // Wyświetlanie wybranej kamery
          const kameryImg = document.getElementById("kamery");
          const nameKamera = document.getElementById("nazwa_kamery");
          const linkPrzejdz = document.getElementById("link_przejdz");

          kameryImg.src = selectedCamera.zdj;
          nameKamera.textContent = selectedCamera.model;
          linkPrzejdz.href = selectedCamera.link;
      } 
  } 
    else if (
      selectedAnswers["apka"] === "pierwszy" &&
      selectedAnswers["prad"] === "tak" &&
      selectedAnswers["miejsce"] === "zewnetrzna" &&
      selectedAnswers["wifi"] === "nie" &&
      selectedAnswers["zasieg"] === "do_20m"
  ) {
    const selectedModel = Math.random() < 0.5 ? "ORLLO E9" : "ORLLO Z17";
  
    // Wybieranie kamery na podstawie losowania
    const selectedCamera = kamery.find((camera) => {
      return (
        camera.model === selectedModel 
        );
    });

      if (selectedCamera) {
          // Wyświetlanie wybranej kamery
          const kameryImg = document.getElementById("kamery");
          const nameKamera = document.getElementById("nazwa_kamery");
          const linkPrzejdz = document.getElementById("link_przejdz");

          kameryImg.src = selectedCamera.zdj;
          nameKamera.textContent = selectedCamera.model;
          linkPrzejdz.href = selectedCamera.link;
      } 
  } 
  else if (
    selectedAnswers["apka"] === "pierwszy" &&
    selectedAnswers["prad"] === "tak" &&
    selectedAnswers["miejsce"] === "zewnetrzna" &&
    selectedAnswers["wifi"] === "nie" &&
    selectedAnswers["zasieg"] === "powyzej_30m"
  ) {
  
    // Wybieranie kamery na podstawie losowania
    const selectedCamera = kamery.find((camera) => {
      return (
        camera.model === "ORLLO Z18" 
      );
    });
  
    if (selectedCamera) {
      // Wyświetlanie wybranej kamery
      const kameryImg = document.getElementById("kamery");
      const nameKamera = document.getElementById("nazwa_kamery");
      const linkPrzejdz = document.getElementById("link_przejdz");
  
      kameryImg.src = selectedCamera.zdj;
      nameKamera.textContent = selectedCamera.model;
      linkPrzejdz.href = selectedCamera.link;
    }
  }
  
  else if (
    selectedAnswers["apka"] === "pierwszy" &&
    selectedAnswers["prad"] === "nie" &&
    selectedAnswers["miejsce"] === "zewnetrzna" &&
    selectedAnswers["wifi"] === "tak" &&
    selectedAnswers["zasieg"] === "do_10m"
  ) {
    const selectedModel = Math.random() < 0.5 ? "ORLLO E9" : "ORLLO Z16";

    // Wybieranie kamery na podstawie losowania
    const selectedCamera = kamery.find((camera) => {
      return (
        camera.model === selectedModel 
      );
    });

    if (selectedCamera) {
      // Wyświetlanie wybranej kamery
      const kameryImg = document.getElementById("kamery");
      const nameKamera = document.getElementById("nazwa_kamery");
      const linkPrzejdz = document.getElementById("link_przejdz");

      kameryImg.src = selectedCamera.zdj;
      nameKamera.textContent = selectedCamera.model;
      linkPrzejdz.href = selectedCamera.link;

      if (selectedModel === "ORLLO Z16") {
        // Wyświetl drugie zdjęcie (ORLLO SM6030 PRO)
        const panel = document.getElementById("panel");
        const panelImg = document.getElementById("zdj_panel");
        panel.style.display = "block";
        panelImg.src = "https://orllo.pl/media/catalog/product/cache/481935a1c822f44bdf200af318d63e8a/p/a/panel_solarny_do_kamer_do_monitoringu_orllo_sm6030_pro.jpg"; // Tutaj możesz ustawić zdjęcie ORLLO SM6030 PRO
        const panelKamera = document.getElementById("nazwa_panel");
        panelKamera.textContent = "ORLLO SM6030 PRO";
        const panelPrzejdz = document.getElementById("panel_przejdz");
        panelPrzejdz.href = "https://orllo.pl/panel-solarny-sm6030.html"; // Tutaj możesz ustawić link do ORLLO SM6030 PRO
      } else {
        // Ukryj drugie zdjęcie, jeśli nie jest wyświetlane
        const panel = document.getElementById("panel");
        panel.style.display = "none";
      }
    }
  }

  else if (
    selectedAnswers["apka"] === "pierwszy" &&
    selectedAnswers["prad"] === "nie" &&
    selectedAnswers["miejsce"] === "zewnetrzna" &&
    selectedAnswers["wifi"] === "tak" &&
    selectedAnswers["zasieg"] === "do_20m"
  ) {
    const selectedModel = Math.random() < 0.5 ? "ORLLO Z8 PRO" : "ORLLO Z12";

    // Wybieranie kamery na podstawie losowania
    const selectedCamera = kamery.find((camera) => {
      return (
        camera.model === selectedModel 
      );
    });

    if (selectedCamera) {
      // Wyświetlanie wybranej kamery
      const kameryImg = document.getElementById("kamery");
      const nameKamera = document.getElementById("nazwa_kamery");
      const linkPrzejdz = document.getElementById("link_przejdz");

      kameryImg.src = selectedCamera.zdj;
      nameKamera.textContent = selectedCamera.model;
      linkPrzejdz.href = selectedCamera.link;

        // Wyświetl drugie zdjęcie (ORLLO SM6030 PRO)
        const panel = document.getElementById("panel");
        const panelImg = document.getElementById("zdj_panel");
        panel.style.display = "block";
        panelImg.src = "https://orllo.pl/media/catalog/product/cache/481935a1c822f44bdf200af318d63e8a/p/a/panel_solarny_do_kamer_do_monitoringu_orllo_sm6030_pro.jpg"; // Tutaj możesz ustawić zdjęcie ORLLO SM6030 PRO
        const panelKamera = document.getElementById("nazwa_panel");
        panelKamera.textContent = "ORLLO SM6030 PRO";
        const panelPrzejdz = document.getElementById("panel_przejdz");
        panelPrzejdz.href = "https://orllo.pl/panel-solarny-sm6030.html"; // Tutaj możesz ustawić link do ORLLO SM6030 PRO
      } 
    }

    else if (
      selectedAnswers["apka"] === "pierwszy" &&
      selectedAnswers["prad"] === "nie" &&
      selectedAnswers["miejsce"] === "zewnetrzna" &&
      selectedAnswers["wifi"] === "tak" &&
      selectedAnswers["zasieg"] === "powyzej_30m"
    ) {
      const selectedModel = Math.random() < 0.5 ? "ORLLO Z9 z Panelem" : "ORLLO Z10";
  
      // Wybieranie kamery na podstawie losowania
      const selectedCamera = kamery.find((camera) => {
        return (
          camera.model === selectedModel 
        );
      });
  
      if (selectedCamera) {
        // Wyświetlanie wybranej kamery
        const kameryImg = document.getElementById("kamery");
        const nameKamera = document.getElementById("nazwa_kamery");
        const linkPrzejdz = document.getElementById("link_przejdz");
  
        kameryImg.src = selectedCamera.zdj;
        nameKamera.textContent = selectedCamera.model;
        linkPrzejdz.href = selectedCamera.link;
  
        if (selectedModel === "ORLLO Z10") {
          // Wyświetl drugie zdjęcie (ORLLO SM6030 PRO)
          const panel = document.getElementById("panel");
          const panelImg = document.getElementById("zdj_panel");
          panel.style.display = "block";
          panelImg.src = "https://orllo.pl/media/catalog/product/cache/481935a1c822f44bdf200af318d63e8a/p/a/panel_solarny_do_kamer_do_monitoringu_orllo_sm6030_pro.jpg"; // Tutaj możesz ustawić zdjęcie ORLLO SM6030 PRO
          const panelKamera = document.getElementById("nazwa_panel");
          panelKamera.textContent = "ORLLO SM6030 PRO";
          const panelPrzejdz = document.getElementById("panel_przejdz");
          panelPrzejdz.href = "https://orllo.pl/panel-solarny-sm6030.html"; // Tutaj możesz ustawić link do ORLLO SM6030 PRO
        } else {
          // Ukryj drugie zdjęcie, jeśli nie jest wyświetlane
          const panel = document.getElementById("panel");
          panel.style.display = "none";
        }
      }
    }

    else if (
      selectedAnswers["apka"] === "pierwszy" &&
      selectedAnswers["prad"] === "nie" &&
      selectedAnswers["miejsce"] === "zewnetrzna" &&
      selectedAnswers["wifi"] === "nie" &&
      selectedAnswers["zasieg"] === "do_10m"
    ) {
    
      const randomValue = Math.random();
    let selectedModel = "";

    if (randomValue < 0.33) {
        selectedModel = "ORLLO E7";
    } else if (randomValue < 0.66) {
        selectedModel = "ORLLO TZ1 PRO";
    } else {
        selectedModel = "ORLLO Z17 z Panelem";
    }
  
      // Wybieranie kamery na podstawie losowania
      const selectedCamera = kamery.find((camera) => {
        return (
          camera.model === selectedModel 
        );
      });
    
      if (selectedCamera) {
        // Wyświetlanie wybranej kamery
        const kameryImg = document.getElementById("kamery");
        const nameKamera = document.getElementById("nazwa_kamery");
        const linkPrzejdz = document.getElementById("link_przejdz");
    
        kameryImg.src = selectedCamera.zdj;
        nameKamera.textContent = selectedCamera.model;
        linkPrzejdz.href = selectedCamera.link;
      }
    }

    else if (
      selectedAnswers["apka"] === "pierwszy" &&
      selectedAnswers["prad"] === "nie" &&
      selectedAnswers["miejsce"] === "zewnetrzna" &&
      selectedAnswers["wifi"] === "nie" &&
      selectedAnswers["zasieg"] === "do_20m"
    ) {
    
      // Wybieranie kamery na podstawie losowania
      const selectedCamera = kamery.find((camera) => {
        return (
          camera.model === "ORLLO Z17 z Panelem" 
        );
      });
    
      if (selectedCamera) {
        // Wyświetlanie wybranej kamery
        const kameryImg = document.getElementById("kamery");
        const nameKamera = document.getElementById("nazwa_kamery");
        const linkPrzejdz = document.getElementById("link_przejdz");
    
        kameryImg.src = selectedCamera.zdj;
        nameKamera.textContent = selectedCamera.model;
        linkPrzejdz.href = selectedCamera.link;
      }
    }

    else if (
      selectedAnswers["apka"] === "pierwszy" &&
      selectedAnswers["prad"] === "nie" &&
      selectedAnswers["miejsce"] === "zewnetrzna" &&
      selectedAnswers["wifi"] === "nie" &&
      selectedAnswers["zasieg"] === "powyzej_30m"
    ) {
    
      // Wybieranie kamery na podstawie losowania
      const selectedCamera = kamery.find((camera) => {
        return (
          camera.model === "ORLLO Z18 z Panelem" 
        );
      });
    
      if (selectedCamera) {
        // Wyświetlanie wybranej kamery
        const kameryImg = document.getElementById("kamery");
        const nameKamera = document.getElementById("nazwa_kamery");
        const linkPrzejdz = document.getElementById("link_przejdz");
    
        kameryImg.src = selectedCamera.zdj;
        nameKamera.textContent = selectedCamera.model;
        linkPrzejdz.href = selectedCamera.link;
      }
    }
    else if (
      selectedAnswers["apka"] === "tuya" &&
      selectedAnswers["prad"] === "tak" &&
      selectedAnswers["miejsce"] === "zewnetrzna" &&
      selectedAnswers["wifi"] === "tak" &&
      selectedAnswers["zasieg"] === "do_10m"
    ) {
    
      // Wybieranie kamery na podstawie losowania
      const selectedCamera = kamery.find((camera) => {
        return (
          camera.model === "ORLLO TZ4" 
        );
      });
    
      if (selectedCamera) {
        // Wyświetlanie wybranej kamery
        const kameryImg = document.getElementById("kamery");
        const nameKamera = document.getElementById("nazwa_kamery");
        const linkPrzejdz = document.getElementById("link_przejdz");
    
        kameryImg.src = selectedCamera.zdj;
        nameKamera.textContent = selectedCamera.model;
        linkPrzejdz.href = selectedCamera.link;
      }
    }
    else if (
      selectedAnswers["apka"] === "tuya" &&
      selectedAnswers["prad"] === "tak" &&
      selectedAnswers["miejsce"] === "zewnetrzna" &&
      selectedAnswers["wifi"] === "tak" &&
      selectedAnswers["zasieg"] === "do_20m"
    ) {
    
      // Wybieranie kamery na podstawie losowania
      const selectedCamera = kamery.find((camera) => {
        return (
          camera.model === "ORLLO TZ2" 
        );
      });
    
      if (selectedCamera) {
        // Wyświetlanie wybranej kamery
        const kameryImg = document.getElementById("kamery");
        const nameKamera = document.getElementById("nazwa_kamery");
        const linkPrzejdz = document.getElementById("link_przejdz");
    
        kameryImg.src = selectedCamera.zdj;
        nameKamera.textContent = selectedCamera.model;
        linkPrzejdz.href = selectedCamera.link;
      }
    }
    else if (
      selectedAnswers["apka"] === "tuya" &&
      selectedAnswers["prad"] === "tak" &&
      selectedAnswers["miejsce"] === "zewnetrzna" &&
      selectedAnswers["wifi"] === "tak" &&
      selectedAnswers["zasieg"] === "powyzej_30m"
    ) {
    
      // Wybieranie kamery na podstawie losowania
      const selectedCamera = kamery.find((camera) => {
        return (
          camera.model === "ORLLO TZ3" 
        );
      });
    
      if (selectedCamera) {
        // Wyświetlanie wybranej kamery
        const kameryImg = document.getElementById("kamery");
        const nameKamera = document.getElementById("nazwa_kamery");
        const linkPrzejdz = document.getElementById("link_przejdz");
    
        kameryImg.src = selectedCamera.zdj;
        nameKamera.textContent = selectedCamera.model;
        linkPrzejdz.href = selectedCamera.link;
      }
    }
    else if (
      selectedAnswers["apka"] === "tuya" &&
      selectedAnswers["prad"] === "tak" &&
      selectedAnswers["miejsce"] === "zewnetrzna" &&
      selectedAnswers["wifi"] === "nie"
    ) {
    
      // Wybieranie kamery na podstawie losowania
      const selectedCamera = kamery.find((camera) => {
        return (
          camera.model === "ORLLO TZ1 PRO" 
        );
      });
    
      if (selectedCamera) {
        // Wyświetlanie wybranej kamery
        const kameryImg = document.getElementById("kamery");
        const nameKamera = document.getElementById("nazwa_kamery");
        const linkPrzejdz = document.getElementById("link_przejdz");
    
        kameryImg.src = selectedCamera.zdj;
        nameKamera.textContent = selectedCamera.model;
        linkPrzejdz.href = selectedCamera.link;
      }
    }
    else if (
      selectedAnswers["apka"] === "tuya" &&
      selectedAnswers["prad"] === "nie" &&
      selectedAnswers["miejsce"] === "zewnetrzna" &&
      selectedAnswers["wifi"] === "nie"
    ) {
    
      // Wybieranie kamery na podstawie losowania
      const selectedCamera = kamery.find((camera) => {
        return (
          camera.model === "ORLLO TZ1 PRO" 
        );
      });
    
      if (selectedCamera) {
        // Wyświetlanie wybranej kamery
        const kameryImg = document.getElementById("kamery");
        const nameKamera = document.getElementById("nazwa_kamery");
        const linkPrzejdz = document.getElementById("link_przejdz");
    
        kameryImg.src = selectedCamera.zdj;
        nameKamera.textContent = selectedCamera.model;
        linkPrzejdz.href = selectedCamera.link;
      }
    }
    else if (
      selectedAnswers["apka"] === "tuya" &&
      selectedAnswers["miejsce"] === "wewnetrzne"
    ) {
    
      // Wybieranie kamery na podstawie losowania
      const selectedCamera = kamery.find((camera) => {
        return (
          camera.model === "ORLLO TZ2" 
        );
      });
    
      if (selectedCamera) {
        // Wyświetlanie wybranej kamery
        const kameryImg = document.getElementById("kamery");
        const nameKamera = document.getElementById("nazwa_kamery");
        const linkPrzejdz = document.getElementById("link_przejdz");
    
        kameryImg.src = selectedCamera.zdj;
        nameKamera.textContent = selectedCamera.model;
        linkPrzejdz.href = selectedCamera.link;
      }
    }
    else if (
      selectedAnswers["apka"] === "o-kam" &&
      selectedAnswers["prad"] === "tak" &&
      selectedAnswers["miejsce"] === "zewnetrzna" &&
      selectedAnswers["wifi"] === "tak" &&
      selectedAnswers["zasieg"] === "do_10m"
  ) {
    const selectedModel = Math.random() < 0.5 ? "ORLLO Z16" : "ORLLO Z12";
  
    // Wybieranie kamery na podstawie losowania
    const selectedCamera = kamery.find((camera) => {
      return (
        camera.model === selectedModel 
        );
    });

      if (selectedCamera) {
          // Wyświetlanie wybranej kamery
          const kameryImg = document.getElementById("kamery");
          const nameKamera = document.getElementById("nazwa_kamery");
          const linkPrzejdz = document.getElementById("link_przejdz");

          kameryImg.src = selectedCamera.zdj;
          nameKamera.textContent = selectedCamera.model;
          linkPrzejdz.href = selectedCamera.link;
      } 
  } 
    else if (
      selectedAnswers["apka"] === "o-kam" &&
      selectedAnswers["prad"] === "tak" &&
      selectedAnswers["miejsce"] === "zewnetrzna" &&
      selectedAnswers["wifi"] === "tak" &&
      selectedAnswers["zasieg"] === "do_20m"
  ) {
    const selectedModel = Math.random() < 0.5 ? "ORLLO Z8 PRO" : "ORLLO Z9 PRO";
  
    // Wybieranie kamery na podstawie losowania
    const selectedCamera = kamery.find((camera) => {
      return (
        camera.model === selectedModel 
        );
    });

      if (selectedCamera) {
          // Wyświetlanie wybranej kamery
          const kameryImg = document.getElementById("kamery");
          const nameKamera = document.getElementById("nazwa_kamery");
          const linkPrzejdz = document.getElementById("link_przejdz");

          kameryImg.src = selectedCamera.zdj;
          nameKamera.textContent = selectedCamera.model;
          linkPrzejdz.href = selectedCamera.link;
      } 
  } 
    else if (
      selectedAnswers["apka"] === "o-kam" &&
      selectedAnswers["prad"] === "tak" &&
      selectedAnswers["miejsce"] === "zewnetrzna" &&
      selectedAnswers["wifi"] === "tak" &&
      selectedAnswers["zasieg"] === "do_30m"
  ) {
    const selectedModel = Math.random() < 0.5 ? "ORLLO Z10" : "ORLLO Z9 PRO";
  
    // Wybieranie kamery na podstawie losowania
    const selectedCamera = kamery.find((camera) => {
      return (
        camera.model === selectedModel 
        );
    });

      if (selectedCamera) {
          // Wyświetlanie wybranej kamery
          const kameryImg = document.getElementById("kamery");
          const nameKamera = document.getElementById("nazwa_kamery");
          const linkPrzejdz = document.getElementById("link_przejdz");

          kameryImg.src = selectedCamera.zdj;
          nameKamera.textContent = selectedCamera.model;
          linkPrzejdz.href = selectedCamera.link;
      } 
  } 
    else if (
      selectedAnswers["apka"] === "o-kam" &&
      selectedAnswers["prad"] === "tak" &&
      selectedAnswers["miejsce"] === "zewnetrzna" &&
      selectedAnswers["wifi"] === "nie" &&
      selectedAnswers["zasieg"] === "do_10m"
  ) {
    const selectedModel = Math.random() < 0.5 ? "ORLLO Z17" : "ORLLO Z7";
  
    // Wybieranie kamery na podstawie losowania
    const selectedCamera = kamery.find((camera) => {
      return (
        camera.model === selectedModel 
        );
    });

      if (selectedCamera) {
          // Wyświetlanie wybranej kamery
          const kameryImg = document.getElementById("kamery");
          const nameKamera = document.getElementById("nazwa_kamery");
          const linkPrzejdz = document.getElementById("link_przejdz");

          kameryImg.src = selectedCamera.zdj;
          nameKamera.textContent = selectedCamera.model;
          linkPrzejdz.href = selectedCamera.link;
      } 
  } 
    else if (
      selectedAnswers["apka"] === "o-kam" &&
      selectedAnswers["prad"] === "tak" &&
      selectedAnswers["miejsce"] === "zewnetrzna" &&
      selectedAnswers["wifi"] === "nie" &&
      selectedAnswers["zasieg"] === "do_20m"
  ) {
    const selectedModel = Math.random() < 0.5 ? "ORLLO Z17" : "ORLLO Z7";
  
    // Wybieranie kamery na podstawie losowania
    const selectedCamera = kamery.find((camera) => {
      return (
        camera.model === selectedModel 
        );
    });

      if (selectedCamera) {
          // Wyświetlanie wybranej kamery
          const kameryImg = document.getElementById("kamery");
          const nameKamera = document.getElementById("nazwa_kamery");
          const linkPrzejdz = document.getElementById("link_przejdz");

          kameryImg.src = selectedCamera.zdj;
          nameKamera.textContent = selectedCamera.model;
          linkPrzejdz.href = selectedCamera.link;
      } 
  } 
  else if (
    selectedAnswers["apka"] === "o-kam" &&
    selectedAnswers["prad"] === "tak" &&
    selectedAnswers["miejsce"] === "zewnetrzna" &&
    selectedAnswers["wifi"] === "nie"&&
    selectedAnswers["zasieg"] === "powyzej_30m"
  ) {
  
    // Wybieranie kamery na podstawie losowania
    const selectedCamera = kamery.find((camera) => {
      return (
        camera.model === "ORLLO Z18" 
      );
    });
  
    if (selectedCamera) {
      // Wyświetlanie wybranej kamery
      const kameryImg = document.getElementById("kamery");
      const nameKamera = document.getElementById("nazwa_kamery");
      const linkPrzejdz = document.getElementById("link_przejdz");
  
      kameryImg.src = selectedCamera.zdj;
      nameKamera.textContent = selectedCamera.model;
      linkPrzejdz.href = selectedCamera.link;
    }
  }
  else if (
    selectedAnswers["apka"] === "o-kam" &&
    selectedAnswers["prad"] === "nie" &&
    selectedAnswers["miejsce"] === "zewnetrzna" &&
    selectedAnswers["wifi"] === "tak"&&
    selectedAnswers["zasieg"] === "do_10m"
  ) {
  
    // Wybieranie kamery na podstawie losowania
    const selectedCamera = kamery.find((camera) => {
      return (
        camera.model === "ORLLO Z9 z Panelem" 
      );
    });
  
    if (selectedCamera) {
      // Wyświetlanie wybranej kamery
      const kameryImg = document.getElementById("kamery");
      const nameKamera = document.getElementById("nazwa_kamery");
      const linkPrzejdz = document.getElementById("link_przejdz");
  
      kameryImg.src = selectedCamera.zdj;
      nameKamera.textContent = selectedCamera.model;
      linkPrzejdz.href = selectedCamera.link;
    }
  }
  else if (
    selectedAnswers["apka"] === "o-kam" &&
    selectedAnswers["prad"] === "nie" &&
    selectedAnswers["miejsce"] === "zewnetrzna" &&
    selectedAnswers["wifi"] === "tak" &&
    selectedAnswers["zasieg"] === "do_20m"
) {
  const selectedModel = Math.random() < 0.5 ? "ORLLO Z16" : "ORLLO Z12";

  // Wybieranie kamery na podstawie losowania
  const selectedCamera = kamery.find((camera) => {
    return (
      camera.model === selectedModel 
      );
  });

    if (selectedCamera) {
        // Wyświetlanie wybranej kamery
        const kameryImg = document.getElementById("kamery");
        const nameKamera = document.getElementById("nazwa_kamery");
        const linkPrzejdz = document.getElementById("link_przejdz");

        kameryImg.src = selectedCamera.zdj;
        nameKamera.textContent = selectedCamera.model;
        linkPrzejdz.href = selectedCamera.link;
    } 
} 
  else if (
    selectedAnswers["apka"] === "o-kam" &&
    selectedAnswers["prad"] === "nie" &&
    selectedAnswers["miejsce"] === "zewnetrzna" &&
    selectedAnswers["wifi"] === "tak" &&
    selectedAnswers["zasieg"] === "powyzej_30m"
) {
  const selectedModel = Math.random() < 0.5 ? "ORLLO Z9 PRO" : "ORLLO Z10";

  // Wybieranie kamery na podstawie losowania
  const selectedCamera = kamery.find((camera) => {
    return (
      camera.model === selectedModel 
      );
  });

    if (selectedCamera) {
        // Wyświetlanie wybranej kamery
        const kameryImg = document.getElementById("kamery");
        const nameKamera = document.getElementById("nazwa_kamery");
        const linkPrzejdz = document.getElementById("link_przejdz");

        kameryImg.src = selectedCamera.zdj;
        nameKamera.textContent = selectedCamera.model;
        linkPrzejdz.href = selectedCamera.link;
    } 
} 
else if (
  selectedAnswers["apka"] === "0-kam" &&
  selectedAnswers["prad"] === "nie" &&
  selectedAnswers["miejsce"] === "zewnetrzna" &&
  selectedAnswers["wifi"] === "nie" &&
  selectedAnswers["zasieg"] === "do_10m"
) {
  const selectedModel = Math.random() < 0.5 ? "ORLLO Z17" : "ORLLO Z7";

  // Wybieranie kamery na podstawie losowania
  const selectedCamera = kamery.find((camera) => {
    return (
      camera.model === selectedModel 
    );
  });

  if (selectedCamera) {
    // Wyświetlanie wybranej kamery
    const kameryImg = document.getElementById("kamery");
    const nameKamera = document.getElementById("nazwa_kamery");
    const linkPrzejdz = document.getElementById("link_przejdz");

    kameryImg.src = selectedCamera.zdj;
    nameKamera.textContent = selectedCamera.model;
    linkPrzejdz.href = selectedCamera.link;

    if (selectedModel === "ORLLO Z7") {
      // Wyświetl drugie zdjęcie (ORLLO SM6030 PRO)
      const panel = document.getElementById("panel");
      const panelImg = document.getElementById("zdj_panel");
      panel.style.display = "block";
      panelImg.src = "https://orllo.pl/media/catalog/product/cache/481935a1c822f44bdf200af318d63e8a/p/a/panel_solarny_do_kamer_do_monitoringu_orllo_sm6030_pro.jpg"; // Tutaj możesz ustawić zdjęcie ORLLO SM6030 PRO
      const panelKamera = document.getElementById("nazwa_panel");
      panelKamera.textContent = "ORLLO SM6030 PRO";
      const panelPrzejdz = document.getElementById("panel_przejdz");
      panelPrzejdz.href = "https://orllo.pl/panel-solarny-sm6030.html"; // Tutaj możesz ustawić link do ORLLO SM6030 PRO
    } else {
      // Ukryj drugie zdjęcie, jeśli nie jest wyświetlane
      const panel = document.getElementById("panel");
      panel.style.display = "none";
    }
  }
}
else if (
  selectedAnswers["apka"] === "0-kam" &&
  selectedAnswers["prad"] === "nie" &&
  selectedAnswers["miejsce"] === "zewnetrzna" &&
  selectedAnswers["wifi"] === "nie" &&
  selectedAnswers["zasieg"] === "do_10m"
) {
  const selectedModel = Math.random() < 0.5 ? "ORLLO Z17" : "ORLLO Z7";

  // Wybieranie kamery na podstawie losowania
  const selectedCamera = kamery.find((camera) => {
    return (
      camera.model === selectedModel 
    );
  });

  if (selectedCamera) {
    // Wyświetlanie wybranej kamery
    const kameryImg = document.getElementById("kamery");
    const nameKamera = document.getElementById("nazwa_kamery");
    const linkPrzejdz = document.getElementById("link_przejdz");

    kameryImg.src = selectedCamera.zdj;
    nameKamera.textContent = selectedCamera.model;
    linkPrzejdz.href = selectedCamera.link;

    if (selectedModel === "ORLLO Z17") {
      // Wyświetl drugie zdjęcie (ORLLO SM6030 PRO)
      const panel = document.getElementById("panel");
      const panelImg = document.getElementById("zdj_panel");
      panel.style.display = "block";
      panelImg.src = "https://orllo.pl/media/catalog/product/cache/481935a1c822f44bdf200af318d63e8a/p/a/panel_solarny_do_kamer_do_monitoringu_orllo_sm6030_pro.jpg"; // Tutaj możesz ustawić zdjęcie ORLLO SM6030 PRO
      const panelKamera = document.getElementById("nazwa_panel");
      panelKamera.textContent = "ORLLO SM6030 PRO";
      const panelPrzejdz = document.getElementById("panel_przejdz");
      panelPrzejdz.href = "https://orllo.pl/panel-solarny-sm6030.html"; // Tutaj możesz ustawić link do ORLLO SM6030 PRO
    } else {
      // Ukryj drugie zdjęcie, jeśli nie jest wyświetlane
      const panel = document.getElementById("panel");
      panel.style.display = "none";
    }
  }
}
else if (
  selectedAnswers["apka"] === "o-kam" &&
  selectedAnswers["prad"] === "tak" &&
  selectedAnswers["miejsce"] === "wewnetrza" &&
  selectedAnswers["wifi"] === "tak"
) {

// Wybieranie kamery na podstawie losowania
const selectedCamera = kamery.find((camera) => {
  return (
    camera.model === "ORLLO W9"
    );
});

  if (selectedCamera) {
      // Wyświetlanie wybranej kamery
      const kameryImg = document.getElementById("kamery");
      const nameKamera = document.getElementById("nazwa_kamery");
      const linkPrzejdz = document.getElementById("link_przejdz");

      kameryImg.src = selectedCamera.zdj;
      nameKamera.textContent = selectedCamera.model;
      linkPrzejdz.href = selectedCamera.link;
  }}
else if (
  selectedAnswers["apka"] === "o-kam" &&
  selectedAnswers["prad"] === "tak" &&
  selectedAnswers["miejsce"] === "wewnetrza" &&
  selectedAnswers["wifi"] === "nie"
) {

// Wybieranie kamery na podstawie losowania
const selectedCamera = kamery.find((camera) => {
  return (
    camera.model === "ORLLO W10"
    );
});

  if (selectedCamera) {
      // Wyświetlanie wybranej kamery
      const kameryImg = document.getElementById("kamery");
      const nameKamera = document.getElementById("nazwa_kamery");
      const linkPrzejdz = document.getElementById("link_przejdz");

      kameryImg.src = selectedCamera.zdj;
      nameKamera.textContent = selectedCamera.model;
      linkPrzejdz.href = selectedCamera.link;
  }}
else if (
  selectedAnswers["apka"] === "o-kam" &&
  selectedAnswers["prad"] === "nie" &&
  selectedAnswers["miejsce"] === "wewnetrza" &&
  selectedAnswers["wifi"] === "nie"
) {

// Wybieranie kamery na podstawie losowania
const selectedCamera = kamery.find((camera) => {
  return (
    camera.model === "ORLLO W8"
    );
});

  if (selectedCamera) {
      // Wyświetlanie wybranej kamery
      const kameryImg = document.getElementById("kamery");
      const nameKamera = document.getElementById("nazwa_kamery");
      const linkPrzejdz = document.getElementById("link_przejdz");

      kameryImg.src = selectedCamera.zdj;
      nameKamera.textContent = selectedCamera.model;
      linkPrzejdz.href = selectedCamera.link;
  }}
else if (
  selectedAnswers["apka"] === "orllocam" &&
  selectedAnswers["prad"] === "tak" &&
  selectedAnswers["miejsce"] === "zewnetrzna" &&
  selectedAnswers["wifi"] === "tak" &&
  selectedAnswers["zasieg"]==="do_10m"
) {

// Wybieranie kamery na podstawie losowania
const selectedCamera = kamery.find((camera) => {
  return (
    camera.model === "ORLLO E4 PRO"
    );
});

  if (selectedCamera) {
      // Wyświetlanie wybranej kamery
      const kameryImg = document.getElementById("kamery");
      const nameKamera = document.getElementById("nazwa_kamery");
      const linkPrzejdz = document.getElementById("link_przejdz");

      kameryImg.src = selectedCamera.zdj;
      nameKamera.textContent = selectedCamera.model;
      linkPrzejdz.href = selectedCamera.link;
  }}
else if (
  selectedAnswers["apka"] === "orllocam" &&
  selectedAnswers["prad"] === "tak" &&
  selectedAnswers["miejsce"] === "zewnetrzna" &&
  selectedAnswers["wifi"] === "tak" &&
  selectedAnswers["zasieg"]==="do_20m" || selectedAnswers["zasieg"]==="powyzej_30m"
) {

// Wybieranie kamery na podstawie losowania
const selectedCamera = kamery.find((camera) => {
  return (
    camera.model === "ORLLO E-SET-W1"
    );
});

  if (selectedCamera) {
      // Wyświetlanie wybranej kamery
      const kameryImg = document.getElementById("kamery");
      const nameKamera = document.getElementById("nazwa_kamery");
      const linkPrzejdz = document.getElementById("link_przejdz");

      kameryImg.src = selectedCamera.zdj;
      nameKamera.textContent = selectedCamera.model;
      linkPrzejdz.href = selectedCamera.link;
  }}
  else if (
    selectedAnswers["apka"] === "orllocam" &&
    selectedAnswers["prad"] === "tak" &&
    selectedAnswers["miejsce"] === "zewnetrzna" &&
    selectedAnswers["wifi"] === "nie" &&
    selectedAnswers["zasieg"]==="do_10m"
  ) {
  
  // Wybieranie kamery na podstawie losowania
  const selectedCamera = kamery.find((camera) => {
    return (
      camera.model === "ORLLO E9"
      );
  });
  
    if (selectedCamera) {
        // Wyświetlanie wybranej kamery
        const kameryImg = document.getElementById("kamery");
        const nameKamera = document.getElementById("nazwa_kamery");
        const linkPrzejdz = document.getElementById("link_przejdz");
  
        kameryImg.src = selectedCamera.zdj;
        nameKamera.textContent = selectedCamera.model;
        linkPrzejdz.href = selectedCamera.link;
    }}
else if (
  selectedAnswers["apka"] === "orllocam" &&
  selectedAnswers["prad"] === "tak" &&
  selectedAnswers["miejsce"] === "zewnetrzna" &&
  selectedAnswers["wifi"] === "nie" &&
  selectedAnswers["zasieg"]==="do_20m" || selectedAnswers["zasieg"]==="powyzej_30m"
) {

// Wybieranie kamery na podstawie losowania
const selectedCamera = kamery.find((camera) => {
  return (
    camera.model === "ORLLO E-SET-W1"
    );
});

  if (selectedCamera) {
      // Wyświetlanie wybranej kamery
      const kameryImg = document.getElementById("kamery");
      const nameKamera = document.getElementById("nazwa_kamery");
      const linkPrzejdz = document.getElementById("link_przejdz");

      kameryImg.src = selectedCamera.zdj;
      nameKamera.textContent = selectedCamera.model;
      linkPrzejdz.href = selectedCamera.link;
  }}
  else if (
    selectedAnswers["apka"] === "orllocam" &&
    selectedAnswers["prad"] === "nie" &&
    selectedAnswers["miejsce"] === "zewnetrzna" &&
    selectedAnswers["wifi"] === "tak"
  ) {
  
  // Wybieranie kamery na podstawie losowania
  const selectedCamera = kamery.find((camera) => {
    return (
      camera.model === "ORLLO E7"
      );
  });
  
    if (selectedCamera) {
        // Wyświetlanie wybranej kamery
        const kameryImg = document.getElementById("kamery");
        const nameKamera = document.getElementById("nazwa_kamery");
        const linkPrzejdz = document.getElementById("link_przejdz");
  
        kameryImg.src = selectedCamera.zdj;
        nameKamera.textContent = selectedCamera.model;
        linkPrzejdz.href = selectedCamera.link;
    }}
    else if (
      selectedAnswers["apka"] === "orllocam" &&
      selectedAnswers["prad"] === "nie" &&
      selectedAnswers["miejsce"] === "zewnetrzna" &&
      selectedAnswers["wifi"] === "nie"
    ) {
    
    // Wybieranie kamery na podstawie losowania
    const selectedCamera = kamery.find((camera) => {
      return (
        camera.model === "ORLLO E9"
        );
    });
    
      if (selectedCamera) {
          // Wyświetlanie wybranej kamery
          const kameryImg = document.getElementById("kamery");
          const nameKamera = document.getElementById("nazwa_kamery");
          const linkPrzejdz = document.getElementById("link_przejdz");
    
          kameryImg.src = selectedCamera.zdj;
          nameKamera.textContent = selectedCamera.model;
          linkPrzejdz.href = selectedCamera.link;
      }}
      else if (
        selectedAnswers["apka"] === "orllocam" &&
        selectedAnswers["miejsce"] === "wewnetrzna" 
      ) {
      
      // Wybieranie kamery na podstawie losowania
      const selectedCamera = kamery.find((camera) => {
        return (
          camera.model === "ORLLO E8"
          );
      });
      
        if (selectedCamera) {
            // Wyświetlanie wybranej kamery
            const kameryImg = document.getElementById("kamery");
            const nameKamera = document.getElementById("nazwa_kamery");
            const linkPrzejdz = document.getElementById("link_przejdz");
      
            kameryImg.src = selectedCamera.zdj;
            nameKamera.textContent = selectedCamera.model;
            linkPrzejdz.href = selectedCamera.link;
        }}
    

    else {
        const kameryImg = document.getElementById("kamery");
        const nameKamera = document.getElementById("nazwa_kamery");
        const linkPrzejdz = document.getElementById("link_przejdz");
        const header = document.getElementById("h3");
    
        kameryImg.style.display = 'none';
        header.style.display = 'none';
        nameKamera.innerHTML = "Niestety żadna kamera nie pasuje pod twoje wymagania </br> <p>Zadzwoń na infolinię tam pomogą Ci wybrać kamerę dla Ciebie</p><br> <a href='tel:222431717'>22 243 17 17</a>";
        linkPrzejdz.style.display = 'none';
      }
    }


  }
);


