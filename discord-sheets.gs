function onEdit_form_maquinas(eventInfo) {
  if (eventInfo.range.getColumn() == 9 && eventInfo.value == "Publicar")
  {
    var ss = SpreadsheetApp.getActiveSheet();
    var row = eventInfo.range.getRow();
    var dataRange = ss.getRange(row, 1, 1, 18);
    var data = dataRange.getValues()[0];
    if (data[3] == "Fácil") {
      var color = 3066993
    }
    if (data[3] == "Media") {
      var color = 15105570
    }
    if (data[3] == "Difícil") {
      var color = 15158332
    }
    if (data[3] == "Insane") {
      var color = 10038562
    }
    var discordWebhookUrl = '';
    var payload = {
        "avatar_url": "https://1.bp.blogspot.com/-47_3ty1aTL8/X7AVf9ETQMI/AAAAAAAAAXQ/kzU6tTMzvK0jXMfPbNT5BVDHK_6kKxAOACNcBGAsYHQ/s680/testinglogo.png",
        "embeds": [
    {
      "author": {
        "name": "Hack4u Machines DB",
        "url": "https://docs.google.com/spreadsheets/d/1dzvaGlT_0xnT-PGO27Z_4prHgA8PHIpErmoWdlUrSoA/edit#gid=0",
        "icon_url": "https://pbs.twimg.com/media/EzdCLJOXoAEO6FS.jpg"
      },
      "title": "HTB: " + data[0],
      "color": color,
      "fields": [
        {
          "name": "Dirección IP:",
          "value": data[1],
          "inline": true
        },
        {
          "name": "S.O:",
          "value": data[2],
          "inline": true
        },
        {
          "name": "Dificultad:",
          "value": data[3],
          "inline": true
        },
        {
          "name": "Técnicas Vistas:",
          "value": data[4],
          "inline": true
        },
        {
          "name": "Certs:",
          "value": data[5],
          "inline": true
        }
      ],
      "footer": {
        "text": "Se tensa fuerte tito eh"
        }
      }
    ],
    }
    var options = {
        'method': 'post',
     gger.log('Error');
        Logger.log(err);
      }
  }
}

