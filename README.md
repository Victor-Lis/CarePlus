<h1>Care+ 💖</h1>

## Resumo 📋
O projeto "Care+ (CarePlus)" surgiu a partir de um desafio técnico que me propus a desevolver, onde havia a opção de construir um entre os dois seguintes projetos:
- 1 - 🎨 Landing Page - Empresa de Absorventes ✔️
- 2 - 🔧 API REST - Sistema de Chamados ✖️

Embora já tenha desenvolvido os mais variados projetos nas mais distintas stacks, tenho uma preferência pela construção de aplicações web, portanto, escolhi a opção 1. 

https://github.com/user-attachments/assets/a259911a-c162-4fd5-8009-3485f16fa84f

<br>

## Techs 🛠
<div align="center" style="display: flex">
  <img align="center" alt="TypeScript" width="35" height="35" src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg">
  <img align="center" alt="React" width="65" height="35" src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg">
  <img align="center" alt="NextJS" width="65" height="35" src="https://github.com/devicons/devicon/blob/master/icons/nextjs/nextjs-original-wordmark.svg">
  <img align="center" alt="Next Auth" width="35" height="35" src="https://next-auth.js.org/img/logo/logo-xs.png">
  <img align="center" alt="Supabase" width="65" height="35" src="https://github.com/devicons/devicon/blob/master/icons/supabase/supabase-original-wordmark.svg">
  <img align="center" alt="Zustand" width="35" height="35" src="https://github.com/pmndrs/zustand/raw/main/docs/favicon.ico">
  <img align="center" alt="Swiper" width="35" height="35" src="https://github.com/devicons/devicon/blob/master/icons/swiper/swiper-original.svg">
  <img align="center" alt="Tailwind" width="65" height="35" src="https://github.com/devicons/devicon/blob/master/icons/tailwindcss/tailwindcss-original-wordmark.svg">
</div>

<br>
<br>
<br>

## O que é a Care+? - História 📜  
A Care+ é uma empresa brasileira que se dedica a oferecer produtos e serviços para a saúde íntima feminina, oferece uma ampla variedade de produtos, incluindo absorventes, protetores diários, lenços umedecidos e óleos íntimos. Todos os produtos são desenvolvidos com ingredientes naturais e seguros, e são testados dermatologicamente para garantir a máxima segurança e conforto.

A Care+ é uma empresa comprometida com a sustentabilidade e a responsabilidade social, a empresa utiliza embalagens recicláveis e biodegradáveis, e também apoia diversas causas sociais.

A empresa oferece produtos de alta qualidade, seguros e confortáveis!

### Missão 🎯
Oferecer produtos de alta qualidade que proporcionem conforto, segurança e bem-estar durante o período menstrual, promovendo a saúde íntima feminina e a autoestima de nossas consumidoras.

### Visão 👁‍🗨
Ser a marca líder em produtos para higiene feminina, reconhecida pela inovação, qualidade e compromisso com o bem-estar da mulher, contribuindo para um mundo mais consciente e igualitário.

### Valores 🎖
Nossos valores são: Cuidado, Inovação, Qualidade, Sustentabilidade e Empoderamento Feminino.

<br>

### ⚠️ AVISO ⚠️
A Care+ é apenas uma empresa fictícia, sendo assim não é uma empresa real, com isso toda sua construção de branding e postura como marca **NÃO** existem!

<br>

## UI/UX 🎨
Construí a aplicação buscando trazer uma sensação de leveza e conforto para os usuários com foco no público alvo feminino, para isso apliquei alguns dos conceitos relacionados a design e tipografia que aprendi com os cursos que realizei ao longo da minha trajetória na programação, e mais recentemente reforcei durante minha leitura do livro ["Design pra quem não é designer"](https://www.linkedin.com/posts/victor-lis-bronzo_ol%C3%A1-rede-hoje-vim-compartilhar-uma-experi%C3%AAncia-activity-7274045545764044800-CeAs?utm_source=share&utm_medium=member_desktop).

### Cores
| Cor               | Hexadecimal                                                |
| ----------------- | ---------------------------------------------------------------- |
| Primary |  ![#F3EFE0](https://via.placeholder.com/10/f3efe0?text=+) #f3efe0 |
| Primary Strong |  ![#EEE8D3](https://via.placeholder.com/10/EEE8D3?text=+) #EEE8D3 |
| Secondary |  ![#F6A2B4](https://via.placeholder.com/10/F6A2B4?text=+) #F6A2B4 |
| Secondary Strong |  ![#EE5879](https://via.placeholder.com/10/EE5879?text=+) #EE5879 |
| Tertiary |  ![#D9E4FC](https://via.placeholder.com/10/D9E4FC?text=+) #D9E4FC |
| Tertiary Strong |  ![#517FF6](https://via.placeholder.com/10/517FF6?text=+) #517FF6 |

### Fontes
| Fonte               | Link                                                |
| ----------------- | ---------------------------------------------------------------- |
| Dosis        | [Google Fonts](https://fonts.google.com/specimen/Dosis?query=dosis) |
| Sour Gummy       | [Google Fonts](https://fonts.google.com/specimen/Sour+Gummy?query=Sour+Gummy) |

<br>
<br>  

## Database - Supabase 
Para facilitar o entendimento do projeto deixo aqui o Schema do Banco de Dados construido através do Supabase, para facilitar o entendimento do Supabase compartilho também a [documentação dele](https://supabase.com/) e um [PDF](https://github.com/user-attachments/files/18278009/Supabase.pdf) sobre de autoria própria.

### Schema
![Schema](https://github.com/user-attachments/assets/3ab3469f-47d5-48bd-b42f-d15eca86b474)

<br>
<br>

## Resumo das Páginas

### Home - /home 🏠
Rota inicial da aplicação, cumpre os principais requisitos da vaga, contendo vagamente a banner, produtos, história da empresa, formulário de contato...

https://github.com/user-attachments/assets/a8a7cbab-7f33-4754-bc0c-7bcd3b4e0e01

<br>

#### Contato 📧
Sua principal funcionalidade é no formulário de contato, através da biblioteca "EmailJS" é enviado um email para o endereço victorlisbronzo1@gmail.com, meu email, com as informações da pessoa e sua mensagem.

A construção desse foi bem simples, a "grande" dificuldade foi realizar as devidas configurações no [site do EmailJS](https://dashboard.emailjs.com/sign-in), depois disso bastou criar a função abaixo.

<br>

#### Configurações
<div className="width: 100%; display: flex; justify-content: center; align-items: center;">
  <img alt="Configurações 1" src="https://github.com/user-attachments/assets/c88c3c46-5c29-443f-8805-f327a1066e73">
  <img alt="Configurações 2" src="https://github.com/user-attachments/assets/4294353a-7316-4830-a848-e51ccb74d5e4">
</div>

<br>

#### Código
```ts
  // Importação:
  import emailjs from "@emailjs/browser";

  // O principal requisito é usar um useRef para referenciar o forms
  // No caso também utilizei 3 useStates para verificar se os campos foram preenchidos, mas não é uma necessidade
  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!form.current) {
      console.error("Form element not found");
      return;
    }

    if (!name || !email || !message) {
      alert("Preencha os campos para entrar em contato!")
      return
    }

    const formData = new FormData(form.current);
    const formValues: Record<string, string> = {};

    formData.forEach((value, key) => {
      formValues[key] = value as string;
    });

    // Basta adicionar minha chave da API configurada no site
    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID as string, process.env.NEXT_PUBLIC_TEMPLATE_ID as string, form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY as string,
        ...formValues,
      })
      .then(() => {
        alert("Contato realizado!")
        form?.current?.reset();
        clearForm()
      })
      .catch((error) => {
        alert("Erro ao realizar contato, tente novamente...")
        form?.current?.reset();
        clearForm()
        console.error(error)
      });
  }
```
Com isso as informações do forms, também configuradas no site, conseguem ser lidas e então enviadas ao meu email!

<br>
<br>

### Produtos - /produtos 🛍
A tela produtos tem como sua principal função tornar fácil para o usuário encontrar todos os produtos em um único lugar, incluindo inclusive um mecanismo de pesquisa e de filtro, para tornar mais ágil o processo de encontrar o produto desejado

https://github.com/user-attachments/assets/08022bc8-206b-4ff8-98cd-847f80fcd2fa

<br>

#### Filtro e Pesquisa 🔍
O código a ser destacado aqui nessa tela pode ser dividido em 2 que se destacam, com o primeiro sendo o mecanismo de pesquisa, que com o Zustand possibilita uma pesquisa rápida, sem delay e agradável para o usuário.

Com o uso do Zustand os componentes tem suas funções mais "nichadas", deixando o código mais limpo, seria com utilizar um Context ou o Redux, mas com mais desempenho, sendo assim é possível conectar vários componentes sem o "Apocalipse de Props"

<br>

##### FilterStore - Zustand 🐻
```ts
import type { CategoryType } from '@/@types/category'
import { create } from 'zustand'

type FilterStore = {
  categories: CategoryType[]
  addCategory: (category: CategoryType) => void
  removeCategory: (category: CategoryType) => void
  inputText: string,
  updateInputText: (text: string) => void,
}

export const useFilterStore = create<FilterStore>((set) => ({
  categories: [],
  addCategory: (category: CategoryType) => set((state) => ({
    categories: [ ...state.categories, category ]
  })),
  removeCategory: (category: CategoryType) => set((state) => ({
    categories: state.categories.filter((cat) => cat.id !== category.id)
  })),
  inputText: "",
  updateInputText: (text: string) => set(() => ({inputText: text}))
}))
```

<br>

##### Input de Pesquisa
```ts
export default function InputFilter() {
  const { updateInputText, inputText } = useFilterStore();

  return (
    <input
      className="bg-white px-2 py-1 min-[850px]:px-4 min-[850px]:py-2 rounded-sm outline-none border-2 border-white flex-[4]"
      placeholder="Produto"
      name="product"
      onChange={(e) => updateInputText(e.target.value)}
      value={inputText}
    />
  );
}
```

<br>

##### CheckBox Component
```ts
export default function CategoryCheckbox({ category }:{ category: CategoryType }) {
  const { categories, addCategory, removeCategory } = useFilterStore()

  const [checked, setChecked] = useState<boolean>(false)

  const toggleChecked = () => { 
    setChecked(!checked)
  }

  function handleChange(){
    if(checked){
      addCategory(category)
    } else {
      removeCategory(category)
    }
  }

  useEffect(() => {
    function isAlreadyChecked(){
      categories.find((cat) => cat.id === category.id) ? setChecked(true) : ''
    }
    isAlreadyChecked()
  }, [])

  useEffect(() => { handleChange() }, [checked])

  return (
    <div className="flex justify-start items-center" key={category.name}>
      <button
        type="button"
        className="p-0.5 mr-1 cursor-pointer flex justify-center items-center"
        onClick={toggleChecked}
      >
        {checked ? <LuCheck size={20} color="#517FF6"/> : <MdOutlineCheckBoxOutlineBlank size={20} color="#517FF6"/>}
      </button>
      <h2 className="text-tertiary-strong">{category.name}</h2>
    </div>
  );
}
```

<br>

Após os componentes anteriores definirem os filtros no store do Zustand, basta mapear os items que se adequam aos filtros
```ts
export default function ProductsGrid() {
  const { products, getProducts } = useProductsStore();
  const { categories, inputText } = useFilterStore();

  useEffect(() => {
    !products.length ? getProducts() : "";
  }, []);

  const filteredProducts = products.filter((product) => {
    return (
      (!categories.length || !!categories.find((category) => category.id === product.categoria)) &&
      (!inputText.length || product.name.toLowerCase().includes(inputText.toLowerCase()))
    )
  });

  return (
    <div className="w-full px-16 max-[850px]:px-8 max-sm:px-2 py-4 min-[850px]:py-2.5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 justify-start content-start items-start gap-4">
      {filteredProducts.map((produto) => {
        return <Product key={produto.id} {...produto} />;
      })}
    </div>
  );
}
```

<br>
<br>

### Produto - /produto/[...id] 📦
Essa tela visualmente falando é uma das mais simples, porém por de trás de seu devido funcionamento utilizei um recurso muito interessante interligando o funcionamento base do NextJS, com o React Router por debaixo dos panos do framework, e o uso do Zustand, para garantir que a experiência do usuário seja fluida e prazerosa!

https://github.com/user-attachments/assets/781f6f7f-0e8b-4f31-a13b-14ba3ef09513

<br>

#### Zustand && [...id] 
Afinal, qual foi a estratégia utilizada para obter um tempo de resposta ainda mais rápido a adaptável para o usuário? 

Com o **Zustand** é possível **acessar rapidamente dados armazenados** durante a execução da aplicação, ou seja, se o usuário já estiver no site e clicar em um produto, aquele produto já está pre-carregado e com isso se torna quase instantâneo o processo de construção da tela daquele produto puxando seus valores. 

Entretando, em **qualquer site/e-commerce que se preze** tem a possibilidade de **compartilhar um produto entre os usuários**, e nossa aplicação não poderia ser diferente! 

Afinal, supondo que uma usuária esteja pensando em comprar um produto, mas ainda não tem certeza se vai finalizar a compra e decide **salvar o link**, ou ainda se ela simplesmente quiser **compartilhar com alguém**, o que iria acontecer usando apenas o Zustand? A aplicação não conseguira saber qual foi o produto escolhido, afinal não teria o "id" (Parâmetro da URL), a única forma de acessar o produto seria através da navegação do usuário pela aplicação e então clique nesse. 

Porém pegar o produto usando apenas o **"id" via parâmetro da URL seria um desperdício**, pois o **Zustand já está com os dados disponiveis** para uso (sem nem precisar carregar esses em um modelo SSR para otimizar).

Qual foi a solução então? **Implementar os 2 recursos**

Mas como? A aplicação de maneira inteligente consegue discernir entre qual forma puxar dados utilizar, caso o produto em cache no Zustand seja nulo(null), significa que o usuário entrou via link diretamente naquela tela e não há dados em cache, portanto, a tela precisará puxar os dados diretamente da database, se o produto em cache estiver presente, basta utilizar!

Segue o código desse trecho
```ts
export default function Produto() {
  const { product, setProduct } = useProductStore();
  const params = useParams<ProdutoParams>()

  async function handleGetProduct() {
    if (!product) {
      const { id } = await params;
      if (!id) redirect("/");

      const { product } = await getProduct({ id });
      if (!product) redirect("/");
      setProduct(product);
    }
  }

  useEffect(() => {
    handleGetProduct();
  }, []);

  if (product) {
    return (
      <div className="min-h-svh w-full bg-primary px-24 max-md:px-10 pt-16">
        <Main produto={product} />
        <Products category_id={product.categoria} product_id={product.id} />
        <Footer type="primary-strong" />
      </div>
    );
  }

  return <Loader/>
}
```

<br>
<br>

### Carrinho - /carrinho 🛒
Na tela carrinho o principal destaque vai para a função em SQL 'get_user_cart', criada para conseguir correlacionar as informações das tabelas "produto" e "carrinho" na database, antes de implentar essa função a manipulação de dados era realizada no front-end, com a função responsável por isso tendo mais de 100 linhas (desde puxar os dados e então adaptar) além de uma queda de desempenho bem impactante, porém utilizando o incrível comando SQL "WITH()" foi possível deixar toda essa manipulação de dados em SQL e, portanto, tendo mais desempenho, deixo ela abaixo e seu uso:

#### Função 'get_user_cart()' - Supabase
```SQL

WITH CarrinhoUsuario AS (
  SELECT 
    c.id,
    c.amount,
    c.final_price,
    c.product_id,
    c.user_email
  FROM public.carrinho AS c
  WHERE c.user_email = email_param
),
FormattedCart AS (
  SELECT
    c.id,
    c.amount,
    c.final_price,
    c.product_id,
    c.user_email,
    json_build_object(
      'id', p.id,
      'created_at', p.created_at,
      'name', p.name,
      'price', p.price,
      'description', p.description,
      'image_id', p.image_id,
      'image_url', p.image_url,
      'categoria', p.categoria
    ) AS produto
  FROM CarrinhoUsuario c
  INNER JOIN public.produto p ON c.product_id = p.id
)
SELECT json_agg(f.*)::JSONB
FROM FormattedCart f;
```

<br>

#### Criando função que conecta ao Supabase - src/lib/supabase/getCartUserProduts.ts
```ts
import { supabase } from "./supabase";

export async function getUserCartProducts({ email }: { email: string }) {
  const { data, error } = await supabase.rpc("get_user_cart", {
    email_param: email,
  });
  if (error) console.error(error);
  return !!data ? data : []
}
``` 

<br>

#### Chamando função que armazena os dados no Storage do Zustand - src/lib/zustand/productsInCart.ts
```ts
import { create } from "zustand";

import type { FormattedCartItemType } from "@/@types/formattedCart";
import type { ProductType } from "@/@types/product";
import type { CartItemType } from "@/@types/cartItemType";
import { getUserCartProducts } from "../supabase/getUserCartProducts";

type FormattedProductsStore = {
  formattedProducts: FormattedCartItemType[];
  getFormattedProducts: (email: string) => Promise<boolean>;
};

export const useFormattedProductsStore = create<FormattedProductsStore>(
  (set) => ({
    formattedProducts: [],
    getFormattedProducts: async (email) => {
      const formattedProducts = await getUserCartProducts({email});
      set(() => ({ formattedProducts }));
      return true;
    },
  })
);
``` 
Com isso de maneira fácil consigo os dados formatados e prontos para serem utilizados! 

<br>
<br>

### Perfil - /perfil 👥
A rota realiza um reajuste de acordo com a sessão do user, se o usuário não estiver logado a página exibe um componente que pede o login dele, se estiver logado são exibidos seus dados. Mesmo não sendo uma funcionalidade exclusiva dessa rota, é destacável o uso do [Next-Auth](https://next-auth.js.org/) para permitir uma integração segura, robusta e fácil com os mais diversos modelos de OAuth 2.0, o escolhido para o caso foi o mais comum e presente no dia a dia das pessoas hoje em dia, o Google OAuth.

<br>

#### /perfil/page.tsx
```ts
"use client"

import Loader from "@/components/global/Loader";
import NoSignIn from "@/components/perfil/NoSignIn";
import WithSignIn from "@/components/perfil/WithSignIn";
import { useSession } from "next-auth/react";

export default function perfil() {
  const { data: session, status } = useSession();

 return (
  <div>
    {status === "loading" ? <Loader/> : session?.user?.email ? <WithSignIn/> : <NoSignIn/>}
  </div>
 );
}
```

<br>

#### WithSignIn - src/components/perfil/WithSignIn.tsx
![WithSignIn](https://github.com/user-attachments/assets/f180ae4b-0cef-4310-baeb-86b158196348)

<br>

#### NoSignIn - src/components/perfil/NoSignIn.tsx
![NoSignIn](https://github.com/user-attachments/assets/8d52746d-042b-41e4-9107-75972ede6f99)

<br>
<br>

## Instalação 📲
Para instalar a aplicação em ambiente de desenvolvimento basta seguir o passo a passo abaixo:
<br>

**1- Com as dependências do git já presentes**
```cmd
  git clone https://github.com/Victor-Lis/CarePlus 
```
<br>

**2- Com as dependências do npm já presentes**
```cmd
  cd CarePlus & npm i
```
<br>

**3- Colar o arquivo .env na raiz do projeto e preencher o .env com suas credenciais**
```dir
  CarePlus/.env
```
```.env
# EMAILJS
NEXT_PUBLIC_SERVICE_ID=
NEXT_PUBLIC_TEMPLATE_ID=
NEXT_PUBLIC_PUBLIC_KEY=

# NextAuth
SECRET=
NEXTAUTH_SECRET=
NEXT_AUTH_URL=
NEXT_PUBLIC_HOST_URL=
NEXT_AUTH_SECRET=

# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# Google
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```
<br>

**4- Agora basta rodar!**
```cmd
npm run dev
```
<br>

<br>

# Autores 🧑‍💼
- [@Victor-Lis](https://www.linkedin.com/in/victor-lis-bronzo)
