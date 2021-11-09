const fs = require('fs')

var controle=0;

function bt_sair_click ()
{
  
}

function bt_iniciar_click ()
{
  if (controle == 0) controle=1;
  if (controle == 1) controle=0;
}

function bt_salvar_1_click ()
{
  fs.writeFileSync('temperatura.txt',temperaturaStr) //salva a leitura de temperatura em um arquivo
}

function bt_salvar_2_click ()
{
  fs.writeFileSync('umidade.txt',umidade) //salva a leitura de umidade em um arquivo
}

function bt_ajuda_click ()
{
  
}
