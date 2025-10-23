# Projetos Prontos

## Git

### Comandos básicos
```sh
$ git status
# mostra o status do repositório atual

$ git add <params>
# adiciona arquivos no track para commit e enviar para o repositorio
$ git add main.js # adiciona um arquivo especifico
$ git add -A | --all # adiciona todos os arquivos untracked para tracked
$ git add assets/ # adiciona uma pasta inteira para tracked

$ git commit -m "mensagem"
# adiciona a mensagem para o commmit atual, com os arquivos marcados como tracked

$ git push 
# envia os commits ainda não sincronizados com o repositorio

$ git pull
# atualiza a base local com o repositório remoto
```

### Gerenciamento de branchs e GitFlow

```sh
$ git checkout -b nome_da_branch
```