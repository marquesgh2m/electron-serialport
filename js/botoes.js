//const fs = require('fs')

var controle=0;

function bt_sair_click ()
{
  window.close()
}

function bt_iniciar_click ()
{
  if (controle) controle=0;
  else controle=1;
}

function bt_salvar_1_click ()
{
  fs.writeFileSync('log_temperatura.txt', historyTemp) //salva a leitura de temperatura em um arquivo
}

function bt_salvar_2_click ()
{
  fs.writeFileSync('log_umidade.txt', historyUmid) //salva a leitura de umidade em um arquivo
}

function bt_ajuda_click ()
{
  window.open('help.html')
}
