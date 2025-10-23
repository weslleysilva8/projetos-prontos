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
$ git branch --list
# lista todas as branchs locais ou sincronizadas com local

$ git branch <branch>
# cria uma nova branch local

$ git checkout -b <branch>
# cria uma nova branch local e navega para ela

# git add + git commit 

$ git push -u origin <branch>
$ git push --set-upstream origin <branch>
# envia o commit atual para o upstream remoto com o nome da branch

$ git checkout <branch>
# navega entre branchs

$ git -d <branch>
# remove uma branch local

# remove uma branch remoto
```