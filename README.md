Este é um aplicativo de Quiz desenvolvido com React Native e Expo. O projeto permite o cadastro de temas e perguntas, que são armazenados localmente em um banco de dados SQLite. Esta documentação cobre o estado atual do projeto, incluindo as dependências e os passos necessários para a sua execução.
Recursos Atuais

    Tela Inicial: Mensagem de boas-vindas e botão para navegar para a área de cadastro.

    Tela de Cadastro: Formulários para cadastrar novos temas e novas perguntas (com 4 alternativas e a resposta correta).

    Persistência de Dados: Utilização do expo-sqlite para salvar, ler e gerenciar todos os dados localmente no dispositivo.

    Navegação: Navegação em pilha (Stack Navigation) entre a tela inicial e a tela de cadastro.

Pré-requisitos

Antes de começar, certifique-se de que você tem o seguinte ambiente configurado em sua máquina de desenvolvimento:

    Node.js: É necessário para rodar o JavaScript fora de um navegador. A versão LTS (Long-Term Support) é a mais recomendada. Você pode baixar em nodejs.org.

    NPM (ou Yarn): Um gerenciador de pacotes para JavaScript, que é instalado automaticamente junto com o Node.js.

    Expo CLI: A ferramenta de linha de comando para criar e gerenciar projetos Expo. Instale-a globalmente com o seguinte comando no seu terminal:
    code Bash

    npm install -g expo-cli

    Aplicativo Expo Go: Para testar o projeto em um dispositivo físico (Android ou iOS), instale o aplicativo "Expo Go" pela Play Store ou App Store.

Instalação e Configuração

Siga os passos abaixo para instalar todas as dependências e deixar o projeto pronto para ser executado.

    Navegue até a pasta raiz do seu projeto no terminal.

    Instale as dependências do projeto: O arquivo package.json já lista todas as bibliotecas necessárias. Execute o seguinte comando para instalá-las:
    code Bash

        
    npm install
    ```    Este comando irá ler o `package.json` e baixar todas as bibliotecas listadas na pasta `node_modules`.

      

Dependências Principais do Projeto

Abaixo estão as dependências-chave utilizadas até o momento e uma breve explicação sobre o papel de cada uma:
Navegação

    @react-navigation/native: O núcleo da biblioteca de navegação, responsável por gerenciar o estado da navegação.

    @react-navigation/native-stack: Fornece a estratégia de navegação em "pilha", onde novas telas são colocadas no topo e podem ser removidas (com o botão de voltar).

    react-native-screens e react-native-safe-area-context: Dependências de suporte que otimizam o uso de memória e garantem que a interface não fique sob áreas do sistema (como o "notch" do iPhone).

Banco de Dados

    expo-sqlite: A biblioteca oficial do Expo que permite criar e interagir com um banco de dados SQLite local, essencial para armazenar os temas e as perguntas de forma persistente.

Componentes de UI

    @react-native-picker/picker: Um componente que fornece uma interface de seleção (dropdown/seletor), utilizado nos formulários para escolher o tema de uma pergunta e a alternativa correta.

Core do Expo e React Native

    expo: O framework principal que gerencia o projeto e facilita o desenvolvimento.

    react e react-native: As bibliotecas fundamentais para a construção de interfaces de usuário com componentes React.

    expo-status-bar: Um componente para controlar a aparência da barra de status do dispositivo (hora, bateria, etc.).

Como Executar o Projeto

Após a instalação bem-sucedida das dependências, execute o seguinte comando no terminal (na pasta raiz do projeto):
code Bash

    
npx expo start

  

Isso iniciará o servidor de desenvolvimento do Metro e exibirá um QR Code no terminal.

    Para rodar em um dispositivo físico: Abra o aplicativo Expo Go em seu celular e escaneie o QR Code.

    Para rodar em um emulador Android/iOS: Com o emulador já aberto, pressione a (para Android) ou i (para iOS) no terminal onde o Expo está rodando.
