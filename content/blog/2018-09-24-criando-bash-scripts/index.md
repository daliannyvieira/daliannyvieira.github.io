---
title: "Criando Bash Scripts"
description: >-
  Eu sempre tive muita curiosidade sobre esse assunto, mas nunca tinha parado para pesquisar sobre…
date:  2018-09-24T03:45:03.995Z
categories:
  - linux
keywords:
  - bash
  - terminal
  - linux
published: true
cover: ./00.jpg
coverAuthor: Dalianny Vieira
coverOriginalUrl: https://unsplash.com/photos/o4-YyGi5JBc
---

Eu sempre tive muita curiosidade sobre esse assunto, mas nunca tinha parado para pesquisar sobre, talvez por ainda não ter encontrado essa necessidade durante os projetos que me envolvi até aqui. De uns tempos para cá a curiosidade tem voltado, e eu fiquei tão entusiasmada com o assunto que resolvi compartilhar sobre ele aqui.

O Bash é um interpretador de linhas de comando para interagir com um sistema operacional, se você já teve alguma experiência com programação, provavelmente já teve que aprender alguns comandos dele e sabe o quão são úteis e legais. Se você não conhece nenhum comando ainda, recomendo a [leitura desse material](https://github.com/VaiNaWeb/primeiros-passos-na-web/blob/master/capitulos/05/aula.md) de apoio de um dos módulos disponíveis no VaiNaWeb.

Podemos criar scripts com basicamente qualquer comando que pode ser executado no bash, essa pode ser uma ferramenta interessante, pois assim podemos executar uma sequência de comandos em um único script e nos poupar de algum trabalho chato que envolva repetir sempre os mesmos comandos, ou ainda nos auxiliar em rotinas de administração de um sistema.

Já tagarelei demais, vamos aos comandos! Antes de tudo crie um diretório chamado bin essa é uma convenção que diz basicamente que esse repositório guarda arquivos executáveis. Você pode criar essa pasta onde você quiser, eu vou criar no meu diretório home, você pode conferir onde você está usando o seguinte comando:
```bash
pwd
```

Eu criei a minha pasta bin usando o comando mkdir, entrei dentro dela usando o cd, agora estou exatamente em: /home/dali/bin e aqui dentro vou criar meus scripts, wee! Como manda a tradição, vamos seguir com um Olá mundo.

Precisamos antes de tudo exportar esse diretório para o PATH. Para isso basta criar um arquivo chamado .bash-profile e adicionar o caminho da pasta para exportar, no meu caso ficou algo como:
```bash
export PATH=$PATH:/home/dali/bin
```
Finalmente, chegou a hora de criar o arquivo do primeiro script!
```
touch ola-mundo
```

Abra o arquivo no seu editor de texto de sua escolha e digite o seguinte:
```bash
#!/bin/bash
```

Essas linhas indicam que o script deve ser executado com o bash. Agora é hora de exibir olá mundo na tela, adicione essa linha ao script usando o comando echo:
```bash
#!/bin/bash
echo Hello, World!
```

Arquivo pronto, é hora de torná-lo executável, para isso usamos o comando:
```bash
chmod u+x ola-mundo
```

TCHANARAAAAN! Agora temos um arquivo pronto para ser executado não somente no diretório que criamos, como em qualquer lugar do computador!

```bash
ola-mundo
```

Há vários comandos úteis que podem ser usados no script, como variáveis, comandos de leitura de entrada do usuário, loops, condicionais, e operadores de comparação. Exemplo usando variável:

```bash
#!/bin/bash
who='Dali'
echo Oláaa, $who!
```

Exemplo usando leitura de entrada:

```bash
#!/bin/bash
echo Olá, como você se chama?
read resposta
echo Prazer em te conhecer, $resposta!
```

Podemos criar scripts com basicamente qualquer comando que pode ser executado no bash, meeeeeesmo! Esses comandos parecem familiares para você?

```bash
#!/bin/bash
echo 'rodando...'
python /home/dali/scripts-python/run.py
echo 'prontinhoo!'
```

Eu queria um script que entrasse em alguns diretorios, para executar alguns scripts em python, o que era uma tarefa repetitiva que eu estava sempre precisando fazer, e agora não preciso mais. 

Esse é um conteúdo bem útil apesar de bem básico e iniciante, mas se você assim como eu nunca tinha criado nenhum script assim, espero que esse artigo tenha despertado em você a curiosidade de começar a criar alguns scripts e pesquisar mais sobre eles.
