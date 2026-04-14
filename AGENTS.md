# Dr. Aquiles Rodrigues — Contexto do Projeto

> Leia este arquivo inteiro antes de fazer qualquer coisa neste projeto.

## Quem é o cliente

**Dr. Aquiles Rodrigues** — Cirurgião-Dentista, Master em Harmonização Orofacial (HOF)  
Registro: CROMG 42004  
Localização: Montes Claros (MG) e Belo Horizonte (MG)  
Instagram: @draquilesrodrigues — ~302.000 seguidores  
Agendamento: WhatsApp (sem sistema próprio)  
Ticket médio: R$10.000  
Perfil: tranquilo, discreto, gosta de piada, não gosta de exposição

## Especialidades

**Pública (Instagram já valida):**
- Harmonização orofacial completa
- Rinomoderação (nariz — especialidade reconhecida pela delicadeza)
- Botox, HA facial, mandíbula, contorno facial
- Alectomia (redução de asa do nariz)

**Nicho alto valor (sem exposição pública ainda):**
- Preenchimento peniano com ácido hialurônico
- Destravamento peniano e escrotal
- Público: alta intenção, pesquisa privada, à noite, sozinho

## O que é esse site

**NÃO é** um site de dentista. Não tem tabela de preços, não tem "agende sua consulta", não tem fundo branco com texto azul, não tem ícones de dente.

**É** um site de autoridade em procedimentos estéticos premium. Minimal, sofisticado, direto. Quando o visitante entra, ele sabe exatamente onde está e vai reto para o que procura.

O site tem **duas verticais separadas** que nunca se misturam visualmente:
1. Harmonização facial — a face pública, 302k seguidores validam, é o topo do funil
2. Procedimentos íntimos — nicho separado, tom discreto, educativo, sem sensacionalismo

**O motor de tráfego** é o antes/depois — o público entra porque quer ver resultados reais. O site abraça isso com classe, dentro das regras do CFO (Resolução 196/2019: antes/depois permitido com TCLE, nome do profissional e CRO).

**O CTA único é WhatsApp.** Sem formulário, sem agendamento online, sem email. Um botão flutuante em todas as páginas, e CTAs contextuais em cada seção.

## Direção de design

**Estilo:** minimal premium. Dark ou neutro profundo. Não clínico, não branco hospitalar.  
**Tipografia:** display forte, refinada. Nada de Inter/Roboto. Algo com caráter — serif elegante para headlines ou sans-serif com personalidade.  
**Cores:** paleta contida, 2-3 cores. Ouro/champagne como acento funciona bem para o nicho.  
**Motion:** sutil. Entradas suaves, hover states que confirmam interatividade.  
**Layout:** espaço generoso. Imagens grandes. Texto curto e direto — nenhum parágrafo longo.  
**Imagens:** placeholders de alta qualidade (unsplash). Estrutura pronta para fotos reais do Dr. Aquiles (com TCLE, ele tem banco de antes/depois).

**Referências de tom:** clínicas de estética premium em SP/Miami, não UBS.

## Estrutura de rotas

```
/                          → Hero com gancho visual (antes/depois elegante), 2 verticais, CTA WhatsApp
/harmonizacao-facial       → Procedimentos, credenciais, galeria de casos, CTA
/procedimentos-intimos     → Vertical separada, discreta, educativa, FAQ embutido, CTA
/resultados                → Galeria de antes/depois — estrutura com TCLE implícito, placeholder
/sobre                     → Dr. Aquiles, CROMG 42004, formação, personalidade, 302k
/faq                       → Perguntas que o paciente não pergunta em voz alta (long-tail SEO)
/contato                   → WhatsApp direto, localização (Montes Claros + BH), sem formulário
```

## SEO e GEO (embutir no código desde o início)

- JSON-LD por página: `MedicalBusiness` + `Person` na home; `MedicalProcedure` nas páginas de serviço
- Meta title/description únicos por rota
- OG tags para compartilhamento
- `sitemap.ts` dinâmico
- FAQ page usa `FAQPage` schema — isso é o que aparece no Google SGE e IAs
- Performance: LCP < 2s, imagens com `next/image`, lazy load exceto hero

## Restrições do CFO

**Proibido:**
- Fotos durante o procedimento
- Identificar equipamentos/materiais
- Conteúdo de casos de terceiros sem autorização

**Zona cinza — preenchimento peniano:**
<!-- - CFO regula cabeça/pescoço explicitamente. Procedimentos íntimos = zona cinza. --> Ignorar
<!-- - Conteúdo educativo é seguro. Fotos explícitas: somente via TCLE + canal privado (não indexado).  --> Estrategia montada num topico abaixo


## Stack

Next.js 14 (App Router) + Tailwind CSS + TypeScript  
Deploy: Vercel  
Imagens: `next/image` com otimização automática  
Sem CMS — conteúdo em MDX ou JSON local por enquanto

## Contato do Frank (não do cliente)

Frank é o responsável pelo projeto. Qualquer dúvida de conteúdo, decisão de CTA ou imagem real → Frank decide.  
O cliente (Dr. Aquiles) ainda não viu o site — Frank vai apresentar em ~12/04/2026.
## === ATUALIZAÇÕES E DISCUSSÕES (em ordem cronológica - tudo que falamos depois) ===

**Suas intenções principais (resumo das suas mensagens):**
- O público da vertical íntima é majoritariamente homens gays (e alguns curiosos) que pesquisam à noite, sozinhos, e querem VER resultados visuais de pênis (volume, grosor, contorno, veias preservadas, sem efeito balão).
- Não queremos um site vulgar ou “pervert dentist”, mas também não queremos fingir que o público não quer ver o que realmente interessa.
- O site deve dar o que eles querem (sensação crua de poder visual) sem over-explaining ou tom de “vou te provar que sou bom”.
- Manter tudo dentro das regras do CFO (nada explícito no site público).
- Foco em conversão forte via WhatsApp.

**Discussões sobre tom e copy:**
- Tom: masculino, direto, empoderador, maduro, raw power. Sem explicação excessiva.
- Enfatizar: aspecto natural preservado, veias visíveis e autênticas, volume harmônico, brilho saudável da pele, sensibilidade mantida, sem efeito balão.
- Frases chave: “Volume real. Espessura natural. Veias preservadas.” “O que você quer ver — e sentir.” “Sem balão. Sem perda de sensibilidade. Só mais presença.”

**Estratégia de galeria e segmentação (Revisão Final)**

A galeria da página /procedimentos-intimos será um **único feed infinito** com visual semelhante ao Twitter/Instagram (cards verticais, scroll contínuo, experiência familiar e viciante). Não terá likes, comentários ou interações sociais — apenas visual limpo e focado em resultados.

**Como será organizado o feed:**

- Um único feed contínuo (infinite scroll).
- Os cards serão misturados, mas ordenados de forma inteligente para facilitar a navegação:
  - Primeiro agrupamento: **Mini** (pênis pequenos)
  - Depois: **Average** (pênis médios)
  - Por último: **Hung / Performance** (pênis grandes / estilo porn actor)

- Dentro de cada grupo (Mini → Average → Hung), a ordem dos cards será:
  - Começar com os **menores volumes** aplicanos no penis (ex: 10 ml) e ir subindo até os **maiores volumes** (20 ml+, 25 ml+). Lembrando que a legenda pode conter volumes para glande, saco e penis, mas vamos ordenar baseado no volume aplicano nos penis. Isso é importante por vai ser esse o padrao de nomecao das imagens aplicado as fotos do google drive para dar controle ao dentista das fotos publicadas.
  - Ou seja: dentro do grupo Mini, primeiro mostra todos os casos com menos ml no penis, depois os com mais ml no penis. O mesmo vale para Average e Hung.

- Cada card terá:
  - Imagem principal (antes/depois não-ereto, forte visual de volume, contorno, perpectiva e veias quando possível)
  - Legenda curta e direta embaixo:
    - “10 ml – Mini”
    - “15 ml – Average – Glande + Pênis”
    - “22 ml – Hung – Volume total”
  - Informação sutil: quantidade de ml usada e áreas tratadas (pênis, glande, escroto, etc.)
  - Botão “Ver em ereção” no card

- Possibilidade futura: menu flutuante ou âncoras no topo (“Ir para Mini”, “Ir para Average”, “Ir para Hung”) que fazem scroll suave até a seção correspondente, mantendo tudo em um único feed contínuo.

Essa estrutura é melhor para visualização mobile e desktop, mantém o usuário rolando por bastante tempo e entrega a sensação de “quanto mais eu desço, mais eu vejo”.

**Fluxo para conteúdo ereto (o mais importante)**

- Nunca mostrar fotos eretas no site público.
- Em cada card existe o botão **“Ver resultado em ereção”**.
- Ao clicar:
  1. Abre um **form simples, bonito e sedutor** (campos opcionais + tom convidativo):
     - “Quantos ml você está pensando?” Opcional
     - “Qual seu orçamento aproximado?” Obrigatorio
     - Form bacana, bonito, simpatico, quente, seduzente, que da vontade de voce preencher que fala com cliente: “faça algo especial pra mim com meu budget", "a gente vai tentar colocar o máximo de mls pro seu orgaçamento"/"vou dar um jeitinho pra voce"
  2. Após enviar o form , aparece um passo discreto de confirmação + os **dois botões grandes**:
     - **“Ver fotos em ereção agora”** → abre outra pagina, um link privado (Página hidden do site, que so abre se for atraves daquele botao e apos o form preenchido, ou seja, quem copiar o link e compartilhar nao vai conseguir abrir).
     Caso o link seja aberto em outro browser, ele nao vai te dar o prompt para preencher o form. O form inicial dessa pagina so aparece se voce tiver vindo do fluxo do site, ou seja, precisa ter clicado no card de antes/depois que tem nos botoes "ver em ereção".
     - **“Falar com o Dr. Aquiles no WhatsApp”** → abre WA com mensagem pré-preenchida com os dados do form preenchido.

**Tratamento de TCLE e Segurança Jurídica**

- Nunca mencionar “TCLE”, “consentimento”, “autorizado pelo paciente” ou qualquer termo jurídico nas legendas ou textos públicos da galeria.
- O site deve permanecer neutro e limpo.

- Abaixo do botão “Ver em ereção”, após o form principal, incluir um informativo, que ao clicar:

  > “Confirmo que desejo ver imagens mais detalhadas para fins de consulta privada e entendo que elas são protegidas.”

- Essa confirmação é registrada (enviada para o gdrive para o Dr. Aquiles) e adicionada aos dados formulario inicial so que agora para a questao juridica do TCLE.  
  Isso cria um rastro claro de que o usuário solicitou ativamente o conteúdo mais explícito, dando tempo de reação caso haja qualquer reclamação futura.

**Fluxo para conteúdo ereto (o mais importante):**
- Nunca mostrar fotos eretas no site público.
- Botão “Ver resultado em ereção” em cada card.
- Ao clicar → abre **form simples** (opcional: ml pensados + obrigatorio: orçamento aproximado). Form bacana, bonito, simpatico, quente, seduzente, que da vontade de voce preencher que fala com cliente: “faça algo especial pra mim com meu budget", "a gente vai tentar colocar o máximo de mls pro seu orgaçamento"/"vou dar um jeitinho pra voce"
- Após o form  → mostrar **dois botões grandes**:
  1. “Ver fotos em ereção agora” → abre link privado (Página hidden do site, que so abre se for atraves daquele botao, ou seja, quem copiar o link e compartilhar nao vai conseguir abrir).
  2. “Falar com o Dr. Aquiles no WhatsApp” → abre WA com mensagem pré-preenchida.
- Isso reduz trabalho manual e qualifica o lead por orçamento (“faça algo especial pra mim com meu budget”).

**Outros pontos discutidos:**
- O site não prova valor o tempo todo. O visitante já sabe o valor. Mostre o poder visual.
- Branding: quiet luxury + raw masculine power.
- SEO: precisamos de pesquisa real de long-tail (exemplos reais encontrados: “preenchimento peniano antes e depois”, “harmonização peniana fotos antes e depois”, “aumento de circunferência com ácido hialurônico”, “preenchimento peniano 10ml 15ml 20ml”, etc.). Sugestão: rodar pesquisa dedicada antes de finalizar metas.
- Manter CTA principal como WhatsApp, mas usar o form como qualificador opcional.

**Minhas recomendações adicionais (que você pode aceitar ou rejeitar):**
- Manter o site elegante e discreto para o Dr. Aquiles aprovar.
- Usar imagens estéticas fortes no público.
- No futuro: automatizar o envio de links privados via bot ou ferramenta (Zapier/Make + Telegram).

**Long-tail keywords observadas em buscas reais (2026):**
- preenchimento peniano antes e depois
- harmonização peniana fotos antes e depois
- aumento de pênis com ácido hialurônico
- engrossamento peniano resultado natural
- bioplastia peniana antes e depois
- destravamento peniano
- preenchimento peniano 10ml 15ml 20ml
- harmonização íntima masculina
