<h1 align="center"> Star-Wars </h1> 

> Este projeto tem o intuito de entregar as seguintes funcionalidades: criar lista de personagens com base no consumo da API: https://swapi.dev/
A ideia se consiste em permitir o usuário ter acesso à página com a lista referente. Contudo, para acesso de seus detalhes, o usuário deve estar logado no servidor.

### Demonstração
>Para o início, como padrão, defini a Home, permitindo o usuário decidir por onde gostaria começar, lhe dando as opções como demonstrado abaixo...

<div align="center"> 
  <img align="center" alt="HomePage" height="350" width="600" src="https://user-images.githubusercontent.com/108142146/201440323-8e5965f5-3e02-4432-93c8-07cc1ac3c487.png" />
</div>

>> Uma coisa no qual percebi durante os dois dias de desenvolvimento deste projeto é que a API tinha uma certa demora para entregar os dados. De início não foi uma preocupação, e pelo pouco tempo previsto para a conclusão, pensei em não "perder tempo" com esta funcionalidade. Porém, a demora da entrega dos dados de fato era incômodo, então implementei um login usando a bilioteca <a href='https://www.radix-ui.com/'> Radix-Ui</a>. Estilizei adicionando um efeito de brilho e estava pronto...

<div align="center"> 
  <img align="center" alt="HomePage" height="350" width="600" src="https://user-images.githubusercontent.com/108142146/201440734-16cd7506-f263-4a77-8895-dd4ab430dd34.png" />
</div>

> Em seguida, o usuário, como projetado, terá acesso à lista escolhida e também uma navbar para facilitar a navegabilidade...

<div align="center"> 
  <img align="center" alt="HomePage" height="350" width="600" src="https://user-images.githubusercontent.com/108142146/201440470-6f67dda4-bb0a-418b-adee-87fc93dbfe69.png" />
</div>

> O usuário pode, através da home, fazer login. Mas caso forsse e tente acesso aos dados de cada item listado, será imediatamente redirecionado à área de login...

<div align="center"> 
  <img align="center" alt="HomePage" height="350" width="600" src="https://user-images.githubusercontent.com/108142146/201440979-d972ef85-2327-4cef-9081-cb19edfc8fe1.png" />
</div>

> Caso não tenha um e-mail cadastrada, ele poderá facilmente criar uma clicando no botão abaixo e sendo redirecionado...

<div align="center"> 
  <img align="center" alt="HomePage" height="350" width="600" src="https://user-images.githubusercontent.com/108142146/201441110-aa299fbe-e523-4f0a-b08a-50d30d9c9604.png" />
</div>

>> E, neste caso, com a criação de sua conta (no qual usei <a href='https://nodejs.org/en/'>Node</a> com <a href='https://jwt.io/'>JWT</a> para a criação da API e o banco de dados da <a href='https://www.mongodb.com/'>MongoDB Atlas</a> como backend), poderá acessar os detalhes de cada item da lista específica...

<div align="center"> 
  <img align="center" alt="HomePage" height="350" width="600" src="https://user-images.githubusercontent.com/108142146/201441568-cb402e19-c1bb-4b48-8cd0-38a3f54b7176.png" />
</div>

> Caso o usuário cause um 404, o mesmo voltará para a Home Page assim que o contador chegar a 0, ativando o hiperespaço XD...

<div align="center"> 
  <img align="center" alt="HomePage" height="350" width="600" src="https://user-images.githubusercontent.com/108142146/201441959-bc765dc3-136e-4b86-ab85-a09cc5cc61d8.png" />
</div>

>> E por último, mas tão importante quanto todo o restante, todo o designe foi criado com o metodo <a href='https://bityli.com/xSyDmyzzK'>Mobile-First</a>, o que nos permite responsividade completa da aplicação...

<div align="center"> 
  <img align="center" alt="HomePage" height="667" width="375" src="https://user-images.githubusercontent.com/108142146/201442126-94b1c5e6-c445-43b8-a5e8-d0e70da03f58.png" />
</div>

### Conclusão
> Em dois dias de muito código e muito estudo, foi implementado Login, Logout, Criação de Contas com os dados sendo recebido por um backend para o tratamento dos dados, checagem de senhas iguais, campos obrigatórios e email já cadastrado.

>> #### Um adendo: as imagens não vieram da API https://swapi.dev/ e um <a href='https://github.com/Felipe-Emanuel/Star-Wars/blob/main/sw.json'> arquivo JSON </a> pode ser encontrado com os links para cada imagem tratada neste estudo.

>>> #### Algumas stacks que usei neste projeto:
>>> <ul> <li> <a href='https://reactjs.org/'>ReactJS</a> </li> <li> <a href='https://www.radix-ui.com/'>Radix-UI</a> </li> <li> <a href='https://tailwindcss.com/'>TailwindCss</a> </li> <li> <a href='https://vitejs.dev/'>Vite</a> </li> <li> <a href='https://nodejs.org/en/'>NodeJS</a> </li> <li> <a href='https://www.javascript.com/'>JavaScript</a> </li> </ul>
