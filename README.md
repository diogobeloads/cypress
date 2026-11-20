# 🧪 Testes E2E com Cypress — Login SauceDemo

Projeto de automação de testes end-to-end (E2E) utilizando **Cypress** para validar o fluxo de login da aplicação [Sauce Demo](https://www.saucedemo.com).

## 📋 Sobre o projeto

Este repositório contém testes automatizados que verificam o comportamento da tela de login, cobrindo cenários de sucesso e de falha. Os testes seguem o padrão **AAA (Arrange, Act, Assert)**, o que torna o código mais legível e fácil de manter.

## ✅ Cenários cobertos

| # | Cenário | Resultado esperado |
|---|---------|--------------------|
| 1 | Realizar login com sucesso | Usuário é redirecionado para `/inventory.html` |
| 2 | Realizar login informando credenciais inválidas | Mensagem de erro é exibida e o usuário permanece na página de login |

## 🛠️ Tecnologias

- [Cypress](https://www.cypress.io/)
- JavaScript
- Node.js

## 📁 Estrutura do projeto

```
├── cypress/
│   └── e2e/
│       └── spec.cy.js      # Testes de login
├── cypress.config.js
├── package.json
└── README.md
```

## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- npm ou yarn

## 🚀 Como executar

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Abra o Cypress em modo interativo**
   ```bash
   npx cypress open
   ```

4. **Ou execute em modo headless (terminal)**
   ```bash
   npx cypress run
   ```

## 🔑 Dados de teste

Os testes utilizam as credenciais públicas disponibilizadas pelo próprio Sauce Demo:

- **Usuário válido:** `standard_user`
- **Senha:** `secret_sauce`
- **Usuário inválido (cenário negativo):** `user.invalid`

## 📝 Exemplo de teste

```javascript
it("Realizar login com sucesso", () => {
  // Arrange
  cy.visit("https://www.saucedemo.com");

  // Act
  cy.get('[data-test="username"]').type("standard_user");
  cy.get("[data-test=password]").type("secret_sauce");
  cy.get('[data-test="login-button"]').click();

  // Assert
  cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
});
```

## ⚠️ Observação

O segundo teste está marcado com `it.only`, o que faz o Cypress executar **apenas** esse cenário. Para rodar todos os testes, remova o `.only`.

## 🔮 Próximos passos

- [ ] Adicionar testes para usuário bloqueado (`locked_out_user`)
- [ ] Validar campos vazios (usuário e senha)
- [ ] Mover a URL base para o `baseUrl` do `cypress.config.js`
- [ ] Implementar Page Objects ou comandos customizados
- [ ] Configurar execução em CI com GitHub Actions

## 👩‍💻 Autor

Desenvolvido por **Seu Nome** — [LinkedIn](https://linkedin.com/in/seu-perfil) | [GitHub](https://github.com/seu-usuario)
