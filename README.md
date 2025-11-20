 Projeto Integrador – Parte 2  
 Trabalho de Front-end | [Universidade Catolica de Brasilia]

Informações Gerais  
Nome do Projeto NDS STORE  
Integrante  
 Arthur Kalleb de Oliveira Xavier – Desenvolvedor, Designer e Criador do Projeto  
Data:Novembro de 2025  


 Descrição do Negócio  
A NDS STORE é uma loja de roupas criada com o objetivo de levar marcas nacionais e internacionais para todo o Brasil, promovendo estilo e acessibilidade para todos os públicos.  

O site foi desenvolvido como uma plataforma online base para a loja, permitindo aos usuários visualizar produtos e conhecer a proposta da marca.  

Público-alvo pessoas de todas as idades que valorizam o estilo e buscam roupas de qualidade.    


 Objetivos do Projeto  
- Criar um site funcional e intuitivo para representar a NDS STORE online.  
- Aplicar boas práticas de HTML, CSS e responsividade.  
- Garantir acessibilidade para diferentes usuários.  
- Adicionar recursos e integrações úteis para contato e localização.  
- Documentar o processo e aplicar os conceitos do curso de Front-end.  



 Wireframe  
 [Link para o protótipo no Figma](https://www.figma.com/design/7pdHG2cZ3PIZTq9TIFcAYm/projeto-integrador?node-id=0-1&t=HKjsB38mXiSVdwbN-1)



 


  1. Revisão e Diagnóstico da Parte 1  

O que estava funcionando bem  
- Layout responsivo e atrativo.  
- Estrutura de conteúdo clara e bem organizada.  
- Paleta de cores equilibrada (preto e amarelo).  

Elementos repetidos  
- Cabeçalho (header), menu de navegação e rodapé (footer).  

Onde o layout quebrava
- Pequenas diferenças de espaçamento em telas menores.  

Melhorias sugeridas  
- Padronizar o menu entre as páginas.  
- Modularizar elementos repetitivos.  
- Melhorar contraste e foco visual.  



  2. Modularização do Código HTML  

Componentes identificados  
- Header  
- Menu de navegação  
- Footer  
- Cards de produtos  

Status:   
Os componentes estão padronizados, mas ainda não modularizados em arquivos separados  

Próximo passo separar o cabeçalho e rodapé em arquivos independentes e importá-los via JavaScript para reduzir a repetição.  


 3. Consolidação de Acessibilidade  

Boas práticas implementadas  
- Uso de tags semânticas: `<header>`, `<main>`, `<section>`, `<footer>`.  
- Todas as imagens possuem `alt` descritivo.  
- Formulários com `label for` e campos `required`.  
- Hierarquia correta de títulos (`h1`, `h2`, `h3`).  
- Contraste adequado entre preto e amarelo.  

O que falta implementar  
- Skip link (“Pular para o conteúdo principal”).  
- Estilo visual de foco (`:focus`) mais evidente.  
- Atributos ARIA opcionais em botões e links.  

Teste de acessibilidade:
- Realizado no Lighthouse com resultado satisfatório.  

 Classificação Proficiente (5–6 pontos)  



 4. Consolidação de Responsividade  

Testes realizados em:
- 375px (Mobile)  
- 768px (Tablet)  
- 1280px (Desktop)  

Ajustes aplicados  
- Layout com Flexbox e **Media Queries**.  
- Imagens fluidas com `max-width: 100%; height: auto;`.  
- Estrutura mobile-first no CSS.  
- Fontes em `rem` para melhor escala.  

Resultado  
O site se adapta bem em todas as resoluções, mantendo legibilidade e harmonia visual.  

 Classificação Proficiente a Avançado (6–8 pontos) 



 5. Integrações Externas  

Atualmente, o site contém **formulário de contato** funcional em HTML.  
Ainda serão adicionadas integrações como:  
- Google Maps (iframe de localização).  
- Formulário Formspree (envio de mensagens sem backend).  
- Link para WhatsApp comercial.
    
 Justificativa: facilitar o contato e melhorar a usabilidade do cliente.



 6. Organização e Código Limpo  

- Estrutura de pastas clara e lógica.  
- Nomenclatura consistente (`assets`, `style.css`, etc.).  
- Comentários explicando seções principais.  
- Códigos bem indentados e legíveis.
  
Classificação: *Proficiente (6 pts)  



 7. Design Visual e Hierarquia  

Cores:
- Preto: representa sofisticação e neutralidade.  
- Amarelo:transmite energia e destaque.  

Tipografia: 
- Fontes simples e legíveis, priorizando clareza e conforto visual.  

Layout:
- Estrutura funcional e responsiva, com foco em destacar produtos.  
- Uso equilibrado de espaços em branco para legibilidade.  

Classificação:** Proficiente (6–7 pts)



 8. Alinhamento com o Negócio  

O design reflete perfeitamente o conceito da **NDS STORE** — moderno, jovem e acessível.  
A identidade visual comunica estilo e credibilidade, fortalecendo a imagem do negócio.  

Classificação: Avançado (8 pts) 



 9. Autoavaliação (Rubrica Integrada)

| Critério | Pontuação | Máximo | Justificativa |
|-----------|------------|---------|----------------|
| Modularização do Código HTML** | 4 | 8 | Estrutura padronizada, faltando apenas modularização completa. |
| Acessibilidade | 6 | 8 | HTML semântico e formulários acessíveis; faltam skip link e foco visível. |
| Responsividade | 7 | 8 | Layout fluido e adaptável a todos os dispositivos. |
| Organização e Manutenibilidade | 6 | 8 | Código limpo e organizado em pastas claras. |
| Design Visual Coerente** | 6 | 8 | Cores e tipografia alinhadas à identidade da marca. |
| Hierarquia Visual e Layout | 6 | 8 | Estrutura visual clara e equilibrada. |
| Usabilidade e Experiência do Usuário | 6 | 8 | Navegação intuitiva e fluida. |
| Alinhamento com o Negócio** | 8 | 8 | Design reflete perfeitamente o conceito da loja. |
| TOTAL | 49 | 64 | Proficiente |

 Interpretação  
44–55 pontos → Proficiente: Projeto sólido com boas práticas aplicadas, pronto para evolução para nível avançado.



 10. Reflexão e Plano de Ação  

 O Que Funcionou Bem  
1. Layout limpo, funcional e atrativo.  
2. Responsividade bem implementada.  
3. Identidade visual consistente e alinhada à marca.  

 Maiores Desafios  
- Garantir total modularização dos componentes.  
- Implementar integrações externas (Formspree, Maps, WhatsApp).  
- Ajustar detalhes visuais de foco e contraste para acessibilidade total.  

 O Que Precisa Melhorar  
| Critério | Ação para Melhorar |
|-----------|--------------------|
| Modularização | Separar header e footer em arquivos reutilizáveis. |
| Acessibilidade | Adicionar skip link e estados de foco visíveis. |
| Integrações | Implementar Maps, Formspree e WhatsApp. |

 Próximos Passos  
- [ ] Adicionar backend básico para cadastro de produtos.  
- [ ] Integrar API de gerenciamento de vendas.  
- [ ] Realizar testes com usuários e aplicar feedbacks.  
- [ ] Implementar sistema completo de carrinho e pedidos reais.  



 11. Testes Finais  
- [x] Site totalmente responsivo (mobile, tablet e desktop).  
- [x] Código limpo e organizado.  
- [x] Testado no Chrome e Firefox.  
- [ ] Integrações externas a serem adicionadas.  
- [x] Acessibilidade básica validada no Lighthouse.  
- [x] README.md completo com autoavaliação.  



 12. Notas Finais  
Este projeto representa a aplicação prática dos conhecimentos adquiridos durante o curso, unindo design, código e identidade visual de uma marca real.  

 “O aprendizado prático de HTML, CSS e design responsivo neste projeto consolidou a base para a criação de sites modernos e funcionais.”  
Arthur Kalleb de Oliveira Xavier.





Parte final do projeto com todas as suas devidas atualizaçôes.
Projeto Integrador – Parte 3  

Trabalho de front end | [Universidade Católica de Brasília ]



Informações Gerais  
Nome do Projeto: NDS STORE  
Integrante: Arthur Kalleb de Oliveira Xavier (Desenvolvedor, Designer e Criador do Projeto )
Data de Publicação:Novembro de 2025  



Acesso ao Site  
O site está publicado no GitHub Pages:  
[https://tutuziim.github.io/ndss/](https://tutuziim.github.io/ndss/)  



Objetivos do Projeto  
- Criar um site para representar a NDS STORE online.  
- Utilizar HTML5, CSS3 e JavaScript para construir uma experiência fluida e responsiva.  
- Garantir boa experiência em diferentes dispositivos e navegadores.  
- Documentar todo o processo de desenvolvimento, testes e reflexão.



Wireframe  
Link para o protótipo:  https://www.figma.com/design/7pdHG2cZ3PIZTq9TIFcAYm/projeto-integrador?node-id=0-1&t=HKjsB38mXiSVdwbN-1



Otimizações Realizadas  
- Imagens otimizadas com TinyPNG/Squoosh e convertidas para .webp quando possível.  
- Implementado loading="lazy" nas imagens para melhorar o tempo de carregamento.  
- CSS e JS minificados (style.min.css, main.min.js) para reduzir tamanho.  
- Metadados (charset, viewport, descrição, keywords, autor) adicionados em cada página.  
- Favicon configurado.



Testes de Compatibilidade e Responsividade

Navegadores testados  
- Google Chrome  
- Firefox  
- Edge  
- Safari (se aplicável)  

Dispositivos / resoluções testadas  
- 375×667 (iPhone SE)  
- 390×844 (iPhone 12 Pro)  
- 768×1024 (iPad)  
- 1024×1366 (iPad Pro)  
- 1280×720 (Desktop HD)  
- 1920×1080 (Desktop Full HD)  

Reflexões

Reflexão Individual  
Durante o desenvolvimento da NDS STORE, adquiri habilidades avançadas em HTML, CSS e JavaScript. Um dos maiores desafios foi garantir responsividade em múltiplos dispositivos, mas isso me permitiu aprender a testar sistematicamente e ajustar o design. Trabalhar sozinho exigiu disciplina e autonomia, e acredito que hoje tenho uma visão mais profissional sobre criação e publicação de sites.

 Reflexão sobre o Projeto  
Mesmo sendo um projeto individual, adotei uma metodologia de trabalho bem estruturada. A evolução do projeto foi clara: da primeira versão simples ao site otimizado e publicado. Os feedbacks recebidos levaram a ajustes importantes, como melhorias no layout e na usabilidade. Acredito que esse site tem potencial real para apoiar a NDS STORE e servirá como um excelente ponto no meu portfólio.



Próximos Passos e Melhorias Futuras  
Implementar carrinho de compras com JS  
Conectar a uma API para listagem de produtos   
Trabalhar na acessibilidade (WCAG)  
Implementar animações com CSS  
Estudar frameworks (ex: React) para futuras versões  

Áreas para aprofundar:  
- Acessibilidade  
- SEO  
- Performance Web  
- JavaScript Avançado  
- Componentização  


Créditos  
- Ícones: Flaticon  
- Imagens: (especifique fontes, se usou imagens de terceiros)  
- Ferramentas de otimização: TinyPNG, Squoosh  
- Inspiração: sites de moda nacionais e internacionais  



Checklist Final de Entrega  
Site publicado e funcionando no GitHub Pages  
Testes de navegadores concluídos  
Testes de responsividade realizados Avaliações entre pares completas  
Reflexão individual e de projeto escrita  
Documentação no docs/ organizada  
Código limpo e bem estruturado  
Arquivos minificados e otimizados  



Conclusão  
Esse projeto representa o ápice do que desenvolvi durante o curso: um site real, funcional, otimizado e documentado. A NDS STORE agora tem presença online profissional — e esse trabalho serve como uma peça forte do meu portfólio.
