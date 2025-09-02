import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Gestão Empresarial API",
      version: "1.0.0",
      description: "Documentação rápida da API",
    },
  },
  apis: ["./src/routes.ts"], 
};

export const swaggerSpec = swaggerJSDoc(options);
export { swaggerUi };