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

$ git log
# exibe o histórico de commits

$ git diff
# mostra as diferenças entre o código atual e o último commit
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

# Mesclar
$ git checkout main
# Isso te levar para a outra <branch>

$ git merge --no-ff <branch> 
# Mescla as branches sem torna las 1 só, caso seja removido o --no-ff uni elas 
```
### Sincronização e limpeza de branches

```sh
$ git branch -a
# lista todas as branches (locais e remotas)

$ git branch -r
# lista apenas as branches remotas

$ git push origin --delete <branch>
# remove uma branch no repositório remoto

$ git fetch --prune
# atualiza a lista de branches e remove referências a branches remotas que já foram apagadas

$ git remote prune origin
# limpa referências antigas de branches remotas não existentes

$ git branch -D <branch>
# força a exclusão de uma branch local (mesmo sem merge)
```
### Diagnóstico e navegação

```sh
$ git branch --show-current
# mostra em qual branch você está atualmente

$ git remote -v
# mostra os repositórios remotos configurados (como o 'origin')

$ git remote show origin
# exibe detalhes da conexão com o repositório remoto (branches rastreadas, push/pull, etc.)

$ git log --oneline --graph --all
# exibe o histórico de commits de forma resumida e visual (muito útil para entender merges)

$ git reflog
# mostra o histórico de tudo que foi feito (inclusive commits "perdidos")
```
### Correções e restaurações

```sh
$ git restore <arquivo>
# restaura um arquivo modificado ao último commit

$ git restore --staged <arquivo>
# remove o arquivo da área de staging (depois do git add)

$ git checkout -- <arquivo>
# descarta alterações em um arquivo específico (antes do commit)

$ git reset --soft <id>
# volta commits mantendo as alterações no staging (antes do commit)

$ git reset --hard <id>
# volta commits e apaga alterações locais (⚠️ irreversível)

$ git revert <id>
# cria um novo commit que desfaz o commit especificado (modo seguro)
```
### Ferramentas de sincronização e controle remoto

```sh
$ git fetch
# busca as atualizações do repositório remoto, mas sem alterar o código local

$ git fetch --all
# busca atualizações de todos os remotos configurados

$ git pull origin main
# atualiza o código local com as alterações da main remota

$ git push origin main
# envia commits locais da main para o repositório remoto

$ git remote add origin <url>
# adiciona um repositório remoto ao projeto

$ git remote remove origin
# remove o repositório remoto atual

$ git clone <url>
# clona um repositório remoto para sua máquina

$ git remote rename origin upstream
# renomeia o repositório remoto (útil em forks)
```
### Comandos avançados e produtividade

```sh
$ git stash
# guarda alterações não commitadas temporariamente

$ git stash pop
# reaplica as alterações guardadas pelo stash

$ git tag <nome>
# cria uma tag para marcar uma versão específica

$ git tag
# lista todas as tags criadas

$ git cherry-pick <id>
# aplica um commit específico de outra branch na branch atual

$ git rebase <branch>
# reescreve o histórico de commits da branch atual sobre outra branch (mantém histórico linear)

$ git rebase -i HEAD~3
# reescreve os últimos 3 commits (para editar mensagens, unir ou apagar commits)

$ git shortlog -sn
# mostra quantos commits cada autor fez (estatísticas rápidas)

$ git blame <arquivo>
# mostra quem alterou cada linha de um arquivo
```
### Fluxo de trabalho sugerido (Git Flow simplificado)

```sh
# 1. Criar uma nova branch de feature
$ git checkout -b feature/nova-funcionalidade

# 2. Adicionar alterações e commitar
$ git add .
$ git commit -m "Implementa nova funcionalidade X"

# 3. Enviar branch para o repositório remoto
$ git push -u origin feature/nova-funcionalidade

# 4. Mesclar alterações na main
$ git checkout main
$ git pull
$ git merge --no-ff feature/nova-funcionalidade
$ git push origin main

# 5. Deletar branches que já foram mescladas
$ git branch -d feature/nova-funcionalidade
$ git push origin --delete feature/nova-funcionalidade
```

### Copiar arquivos entre repositórios (Bash)

```sh
# Acessar o repositório de origem
cd /caminho/do/repo-origem

# Copiar um arquivo específico para outro repositório
cp arquivo.ext /caminho/do/repo-destino/

# Copiar vários arquivos para outro repositório
cp arquivo1.ext arquivo2.ext /caminho/do/repo-destino/

# Copiar uma pasta inteira para outro repositório
cp -r pasta/ /caminho/do/repo-destino/

# Copiar apenas arquivos alterados (recomendado)
rsync -av pasta/ /caminho/do/repo-destino/pasta/

# Acessar o repositório de destino
cd /caminho/do/repo-destino
```