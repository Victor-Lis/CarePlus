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

## Resumo das Páginas

### Home - /home 🏠
Rota inicial da aplicação, cumpre os principais requisitos da vaga, contendo vagamente a banner, produtos, história da empresa, formulário de contato...

https://github.com/user-attachments/assets/a8a7cbab-7f33-4754-bc0c-7bcd3b4e0e01

#### Contato 📧
Sua principal funcionalidade é no formulário de contato, através da biblioteca "EmailJS" é enviado um email para o endereço victorlisbronzo1@gmail.com, meu email, com as informações da pessoa e sua mensagem.

A construção desse foi bem simples, a "grande" dificuldade foi realizar as devidas configurações no [site do EmailJS](https://dashboard.emailjs.com/sign-in), depois disso bastou criar a função abaixo:
#### Configurações
<div className="width: 100%; display: flex; justify-content: center; align-items: center;">
  <img alt="Configurações 1" src="https://github.com/user-attachments/assets/c88c3c46-5c29-443f-8805-f327a1066e73">
  <img alt="Configurações 2" src="https://github.com/user-attachments/assets/4294353a-7316-4830-a848-e51ccb74d5e4">
</div>

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

### Produtos - /produtos 🛍
A tela produtos tem como sua principal função tornar fácil para o usuário encontrar todos os produtos em um único lugar, incluindo inclusive um mecanismo de pesquisa e de filtro, para tornar mais ágil o processo de encontrar o produto desejado

https://github.com/user-attachments/assets/08022bc8-206b-4ff8-98cd-847f80fcd2fa

#### Filtro e Pesquisa 🔍
O código a ser destacado aqui nessa tela pode ser dividido em 2 que se destacam, com o primeiro sendo o mecanismo de pesquisa, que com o Zustand possibilita uma pesquisa rápida, sem delay e agradável para o usuário.

Com o uso do Zustand os componentes tem suas funções mais "nichadas", deixando o código mais limpo, seria com utilizar um Context ou o Redux, mas com mais desempenho, sendo assim é possível conectar vários componentes sem o "Apocalipse de Props"

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



# Autores 🧑‍💼
- [@Victor-Lis](https://www.linkedin.com/in/victor-lis-bronzo)
