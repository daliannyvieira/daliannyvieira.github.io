---
title:  "Você deveria - realmente - aprender HTML"
description: >-
  Na fase atual da web, não trafegamos mais documentos o tempo inteiro como foi por muito tempo, trafegamos mais dados…
date:  2018-04-21T03:45:03.995Z
categories:
  - código
  - html
keywords:
  - html
  - code
  - web
published: true
cover: ./01.jpeg
coverAuthor: Alfons Morales
coverOriginalUrl: https://unsplash.com/photos/YLSwjSy7stw
---

Na fase atual da web, não trafegamos mais documentos o tempo inteiro como foi por muito tempo, trafegamos mais dados, e uma das consequências naturais disso na forma atual como trabalhamos é que agora passamos a precisar dedicar mais tempo e atenção na forma como tratamos esses dados e como comunicamos as coisas dentro dos componentes do sistema do que propriamente desenhando páginas, como fazíamos antigamente.

Se você é leigo e chegou até aqui, observe um fenômeno bem comum que acontece enquanto você usa as aplicações mais populares, como o Facebook ou Twitter por exemplo. Perceba que o desenho da tela muda muito pouco, apenas dados são atualizados o tempo todo. Sabe quando a sua conexão com a internet está lenta, você clica em algo, e ai a página muda mas os tweets novos não aparecem? E aí a sua conexão melhora e buuum eles aparecem, é mais ou menos disso que eu estou falando.

Tivemos toda uma ascensão de novos frameworks e bibliotecas para o desenvolvimento moderno de interfaces na web, e cada uma dessas ferramentas trata o desenho das telas de alguma determinada forma. Na maior parte dessas biblioteca que usamos, é comum que mal precisamos escrever HTML, ou até escrevemos, mas o código nem se parece realmente com HTML, não é verdade? Se você teve experiência com alguma dessas ferramentas sabe do que estou falando.

Basicamente, estamos todos tão viciados em criar do zero esses componentes, que mal lembramos que os elementos nativos da web já nos oferecem muitos recursos bacanas, que não necessariamente precisam ser criados novamente. Todavia sempre que possível, é bom usarmos esses elementos, assim podemos usar seus comportamentos, ou usa-los por razões semânticas.

Resolvi escrever este post após uma conversa com uma amiga, em que percebemos o quanto as pessoas estão reinventando coisas que já existem. Conseguimos citar vários projetos onde isto acontecia. Eu mesma, só fui perceber parte disso quando precisei estudar e revisar meus conhecimentos sobre HTML para ensinar no [VaiNaWeb](http://www.vainaweb.com.br/). Alguns exemplos:

## Poster

O atributo poster com certeza foi o campeão em esquecimento e por isso ele é o primeiro da lista. Ele é usado para atribuir um background que pode ser mostrado em um vídeo até que ele seja baixado ou esteja em reprodução.

```html
<video controls poster="URL"></video>
```

## Content Editable

Um exemplo que eu vejo o tempo inteiro sendo re-escrito usando Javascript é o contentEditable. É uma propriedade para tornar um determinado conteúdo com editável. Esse em especial eu já deixei de usar em um projeto usando React porque naquela época a biblioteca estava com problemas em dar suporte a esse recurso, mas não sei sei se isso já foi resolvido, é capaz que sim.

```html
<p contentEditable="true"></p>
```

## FigCaption 

Frequentemente as pessoas usam elementos como span, por exemplo para marcar uma legenda de uma imagem ou gráfico. O esquecido da vez é o figcaption que serve basicamente para adicionar uma legenda associada a uma figure.

```html
<figure>
	<img src="URL">	
	<figcaption>Legenda</figcaption>
</figure>
```

## Disabled

O atributo disabled é também bem pouco usado, eu precisei usa-lo recentemente em um projeto e achei muito útil. Ele permite que possamos desabilitar um elemento. Pode ser usado nos elementos button, fieldset, input, select, textarea, option, e optgroup.

```html
<button disabled>Clique em mim</button>
```

## Table

Um elemento que as pessoas evitam usar também é o table, e acabam usando listas ou divs e spans para construí-las. Eu já ouvi algumas pessoas comentando que não gostam dele por serem trabalhosos para estilizar, mas isso não tão verdade, pelo menos não hoje.

```html
<table>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
</table>

```

## Considerações finais

O objetivo desse post não é criticar a forma como alguém desenvolve, ou insinuar que as pessoas não sabem o suficiente quanto deveriam, apesar do título que parece sugerir isso. A minha intenção foi apenas citar alguns casos que eu julguei interessantes, que se repetem com frequência, e que podem eventualmente ser uteis para quem ainda não conhece.  
