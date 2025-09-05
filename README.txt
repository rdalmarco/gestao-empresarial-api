*Como rodar aplicação:

1 - Baixar repositório
2 - Navegar até a pasta raiz
3 - Rodar docker-compose up --build

*Os endpoints foram descritos através de documentação utilizando o Swagger Api Doc:

1 - Para acessar o swagger basta com o backend rodando, navegar até o endpoint http://localhost:3000/api-docs/

*Decisões técnicas:

1 - Typescript/Express: Conforme requisito do desafio técnico.
2 - TypeORM: Utilizado Mapeamento Objeto Relacional com banco Postgres, facilitando a criação do CRUD e a gestão das entidades/modelagem do banco.
3 - Zod: Utilizado para criação de validação campos das requisições, garantindo a chegada correta dos dandos.
4 - Middleware ErorHandler: Utilizado para lançar erros padronizados através da criação de um mapeamento das possíveis exceções (ErrorAPI e classes que a extendem), além de fazer a captura de erros inesperados automaticamente.
5 - Clean Architecture: Utilizado para organização de projeto, através da separação de camadas com useCases, deixando a lógica de negócio organizada e testável separadamente da lógica de execução e acesso a banco de dados.
6 - Swagger: Utilizado para documentação interativa da API disponibilizada, permite testar os endpoints separadamente, assim como deixar parâmetros e respostas de exemplo.
7 - Docker Compose: Utilizado para orquestrar os dois conteiners da aplicação, garantindo funcionamento consistente e maior versatilidade entre ambientes.
8 - Github: Utilizado para versionamento do projeto, mantendo um histórico das alterações e facilitando a rastreabilidade do desenvolvimento. Além da possibilidade de futura colaboração em equipe.