import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articles: Article[] = [
    {
      Id: "d4f5c8c4-92b4-11eb-a8b3-0242ac130003",
      Title: "Estudo Revela Novos Benefícios do Chá Verde",
      Headlight: "Recentes descobertas científicas lançaram nova luz sobre os notáveis benefícios do chá verde, ampliando ainda mais o seu perfil de saúde além dos efeitos antioxidantes já bem estabelecidos.",
      Content: "Recentes descobertas científicas lançaram nova luz sobre os notáveis benefícios do chá verde, ampliando ainda mais o seu perfil de saúde além dos efeitos antioxidantes já bem estabelecidos. Um estudo abrangente realizado por pesquisadores de uma renomada universidade indicou que o consumo regular de chá verde pode exercer um papel significativo na promoção da saúde cardiovascular e metabólica. Especificamente, os cientistas encontraram evidências de que os compostos bioativos do chá verde, como as catequinas, ajudam a reduzir os níveis de colesterol LDL, comumente conhecido como 'colesterol ruim', e melhoram a função endotelial, que é vital para a manutenção da elasticidade e saúde das artérias. Esse efeito protetor pode reduzir o risco de doenças cardiovasculares graves, como a aterosclerose, que está associada a ataques cardíacos e derrames. Além disso, os pesquisadores observaram que o chá verde pode melhorar a sensibilidade à insulina e ajudar no controle dos níveis de glicose no sangue, oferecendo benefícios significativos na prevenção e manejo do diabetes tipo 2. O estudo também sugere que o chá verde possui propriedades neuroprotetoras, com potencial para retardar o declínio cognitivo e apoiar a saúde cerebral ao longo do envelhecimento. Esses achados reforçam a posição do chá verde como uma poderosa ferramenta na promoção de uma vida saudável e na prevenção de doenças crônicas.",
      ImageUrl: "./assets/img/cha-verde.png"
    },
    {
      Id: "f2b6a3e6-92b4-11eb-a8b3-0242ac130003",
      Title: "Exercícios Regulares Podem Melhorar a Saúde Mental",
      Headlight: "A prática regular de exercícios físicos tem se mostrado uma aliada poderosa não apenas para a saúde física, mas também para a saúde mental.",
      Content: "A prática regular de exercícios físicos tem se mostrado uma aliada poderosa não apenas para a saúde física, mas também para a saúde mental, conforme evidências científicas acumuladas nas últimas décadas. Estudos apontam que atividades como caminhada, corrida, ioga, ciclismo e musculação podem desempenhar um papel significativo na redução de sintomas de ansiedade e depressão, promovendo uma sensação geral de bem-estar e equilíbrio emocional. A liberação de endorfinas e outros neurotransmissores durante o exercício atua como um potente antidepressivo natural, proporcionando uma melhora no humor e uma redução do estresse. Além disso, o exercício regular pode ajudar a regular o sono, aumentar a energia e a autoconfiança, fatores que contribuem para uma melhor gestão do estresse diário. Pesquisas também sugerem que a prática de atividades físicas pode contribuir para a neuroplasticidade, ou seja, a capacidade do cérebro de se adaptar e criar novas conexões, o que é essencial para a resiliência emocional e a capacidade de enfrentar desafios psicológicos. Assim, incorporar o exercício físico na rotina diária não só promove um corpo mais saudável, mas também fortalece a mente, oferecendo uma abordagem holística para a melhoria da qualidade de vida e do bem-estar mental.",
      ImageUrl: "./assets/img/escalada.jpg"
    },
    {
      Id: "0593ec56-92b5-11eb-a8b3-0242ac130003",
      Title: "Dieta Mediterrânea: O Segredo para uma Vida Longa",
      Headlight: "A dieta mediterrânea, amplamente reconhecida por seus inúmeros benefícios à saúde, é frequentemente citada como um dos segredos para uma vida longa e saudável.",
      Content: "A dieta mediterrânea, amplamente reconhecida por seus inúmeros benefícios à saúde, é frequentemente citada como um dos segredos para uma vida longa e saudável. Originária dos países que circundam o Mar Mediterrâneo, como Itália, Grécia e Espanha, esta dieta se caracteriza pelo consumo abundante de frutas, verduras, legumes, grãos integrais, nozes e azeite de oliva, com uma moderada ingestão de peixe, aves, laticínios e vinho tinto, e um consumo muito reduzido de carnes vermelhas e alimentos processados. Diversos estudos científicos têm demonstrado que esse padrão alimentar está associado a uma redução significativa no risco de doenças crônicas, como doenças cardiovasculares, diabetes tipo 2 e certos tipos de câncer. Além disso, a dieta mediterrânea tem mostrado efeitos positivos na saúde mental, contribuindo para a prevenção de depressão e demência.",
      ImageUrl: "./assets/img/dietamediterranea.png"
    },
    {
      Id: "11d1748a-92b5-11eb-a8b3-0242ac130003",
      Title: "Novo Tratamento para Diabetes é Desenvolvido",
      Headlight: "Recentemente, um avanço significativo no campo da medicina trouxe esperança para milhões de pessoas que vivem com diabetes.",
      Content: "Recentemente, um avanço significativo no campo da medicina trouxe esperança para milhões de pessoas que vivem com diabetes. Pesquisadores de uma renomada universidade anunciaram o desenvolvimento de um novo tratamento revolucionário que promete transformar a gestão da doença. Este tratamento inovador utiliza uma combinação de terapia genética e biomateriais avançados para restaurar a função das células beta pancreáticas, responsáveis pela produção de insulina. Ao contrário das abordagens convencionais que apenas gerenciam os sintomas, este novo método visa tratar a causa raiz do diabetes, oferecendo a possibilidade de uma remissão a longo prazo. Nos ensaios clínicos iniciais, os pacientes que receberam o tratamento demonstraram uma melhora significativa nos níveis de glicose no sangue e, em muitos casos, foram capazes de reduzir ou até eliminar a necessidade de insulina exógena.",
      ImageUrl: "./assets/img/diabetes.png"
    },
    {
      Id: "1eb8c3d8-92b5-11eb-a8b3-0242ac130003",
      Title: "A Importância da Saúde Mental na Era Digital",
      Headlight: "Na era digital contemporânea, a saúde mental emerge como um tema crucial e urgente, dado o impacto profundo das tecnologias digitais em nossas vidas diárias.",
      Content: "Na era digital contemporânea, a saúde mental emerge como um tema crucial e urgente, dado o impacto profundo das tecnologias digitais em nossas vidas diárias. Enquanto a conectividade instantânea e a acessibilidade à informação promovem avanços significativos, também trazem consigo desafios complexos para o bem-estar psicológico. A constante exposição a telas, redes sociais e dispositivos eletrônicos pode levar ao desenvolvimento de problemas como ansiedade, depressão e dependência digital. A pressão para manter uma presença online perfeita, acompanhada pela comparação constante com os outros, cria um ambiente propenso ao estresse e à autoestima prejudicada. Além disso, a falta de limites claros entre trabalho e vida pessoal, exacerbada pela cultura do 'sempre ligado', pode levar a uma maior incidência de esgotamento e distúrbios do sono.",
      ImageUrl: "./assets/img/saudemental.png"
    },
    {
      Id: "2c0b8f6c-92b5-11eb-a8b3-0242ac130003",
      Title: "Caminhar 10 Mil Passos por Dia: Mito ou Verdade?",
      Headlight: "Caminhar 10 mil passos por dia tem sido promovido como uma meta saudável para a atividade física diária, mas sua eficácia como padrão universal pode ser questionada.",
      Content: "Caminhar 10 mil passos por dia tem sido promovido como uma meta saudável para a atividade física diária, mas sua eficácia como padrão universal pode ser questionada. Embora seja um objetivo alcançável para muitas pessoas, a verdadeira importância está na promoção de um estilo de vida ativo e na manutenção da saúde cardiovascular. A atividade física regular, seja através de caminhadas, corridas ou outras formas de exercício, é fundamental para a saúde geral, ajudando a controlar o peso, melhorar a saúde do coração e fortalecer músculos e ossos. Portanto, enquanto caminhar 10 mil passos por dia pode servir como um guia útil, o mais importante é encontrar um equilíbrio entre atividade física e hábitos saudáveis, adaptados às necessidades individuais e às circunstâncias pessoais.",
      ImageUrl: "./assets/img/caminhada.png"
    },
    {
      Id: "3aef947e-92b5-11eb-a8b3-0242ac130003",
      Title: "Os Benefícios do Sono para a Saúde Geral",
      Headlight: "Os benefícios do sono para a saúde geral são vastos e essenciais para o bem-estar físico, mental e emocional.",
      Content: "Os benefícios do sono para a saúde geral são vastos e essenciais para o bem-estar físico, mental e emocional. Durante o sono, o corpo passa por processos vitais de recuperação e regeneração, essenciais para a manutenção da saúde. Fisiologicamente, o sono adequado contribui para a consolidação da memória, o funcionamento cognitivo otimizado e a regulação do humor. Além disso, o sono adequado fortalece o sistema imunológico, ajudando a prevenir doenças e infecções. A nível cardiovascular, dormir o suficiente está associado à redução do risco de condições como hipertensão e doenças cardíacas. A longo prazo, a qualidade do sono está ligada à saúde metabólica, influenciando diretamente o controle do peso e a regulação dos níveis de açúcar no sangue. Portanto, priorizar um sono de qualidade é fundamental para promover uma vida saudável e equilibrada, reforçando a importância de hábitos de sono regulares e consistentes para o bem-estar duradouro.",
      ImageUrl: "./assets/img/saudesono.png"
    },
    {
      Id: "4a2382a6-92b5-11eb-a8b3-0242ac130003",
      Title: "Vacinação Contra a Gripe: O Que Você Precisa Saber",
      Headlight: "A vacinação contra a gripe desempenha um papel crucial na proteção da saúde pública, especialmente durante os meses de outono e inverno, quando a gripe é mais prevalente.",
      Content: "A vacinação contra a gripe desempenha um papel crucial na proteção da saúde pública, especialmente durante os meses de outono e inverno, quando a gripe é mais prevalente. Esta vacina anual é projetada para ajudar o sistema imunológico a reconhecer e combater os vírus da gripe mais comuns, reduzindo assim o risco de contrair a doença e suas complicações. É importante notar que a vacina contra a gripe não causa a gripe, pois geralmente é composta por vírus inativados ou fragmentados que não são capazes de causar infecção. Embora a eficácia da vacina possa variar de ano para ano devido à mutabilidade dos vírus da gripe, ela continua sendo a melhor medida preventiva disponível. Grupos de alto risco, como idosos, crianças pequenas, gestantes e pessoas com condições médicas crônicas, são particularmente encorajados a se vacinar para reduzir o risco de complicações graves da gripe. Além da vacinação, medidas simples como lavar as mãos regularmente e cobrir a boca ao tossir ou espirrar também são fundamentais para prevenir a propagação da gripe na comunidade.",
      ImageUrl: "./assets/img/vacinacao.png"
    },
    {
      Id: "58e2d6b2-92b5-11eb-a8b3-0242ac130003",
      Title: "Alimentos que Ajudam a Fortalecer o Sistema Imunológico",
      Headlight: "Alimentos que ajudam a fortalecer o sistema imunológico desempenham um papel vital na manutenção da saúde e na prevenção de doenças.",
      Content: "Alimentos que ajudam a fortalecer o sistema imunológico desempenham um papel vital na manutenção da saúde e na prevenção de doenças. Entre eles estão frutas cítricas como laranjas, tangerinas e limões, ricos em vitamina C, essencial para aumentar a produção de células de defesa do corpo. Vegetais verdes escuros, como espinafre e brócolis, são fontes de vitaminas A, C e E, antioxidantes que combatem os radicais livres e fortalecem o sistema imunológico. Alho, cebola e gengibre são conhecidos por suas propriedades antimicrobianas e anti-inflamatórias, enquanto iogurte e kefir contêm probióticos que promovem a saúde intestinal, crucial para uma resposta imunológica eficaz. Amêndoas, sementes de girassol e azeite de oliva são ricos em vitamina E, que ajuda a regular e fortalecer a resposta imunológica do corpo. Incorporar esses alimentos em uma dieta equilibrada não apenas melhora a imunidade, mas também contribui para uma saúde geral melhor e mais resiliente.",
      ImageUrl: "./assets/img/comida.png"
    },
    {
      Id: "67a536ea-92b5-11eb-a8b3-0242ac130003",
      Title: "A Relação Entre Estresse e Doenças Cardíacas",
      Headlight: "A relação entre estresse e doenças cardíacas é complexa e multifacetada, refletindo a interação entre fatores físicos, emocionais e comportamentais.",
      Content: "A relação entre estresse e doenças cardíacas é complexa e multifacetada, refletindo a interação entre fatores físicos, emocionais e comportamentais. O estresse crônico pode desencadear uma série de reações no corpo, incluindo aumento da pressão arterial, inflamação sistêmica e disfunção do sistema imunológico, todos contribuindo para o desenvolvimento e agravamento de condições cardiovasculares. Além disso, o estresse pode levar a comportamentos prejudiciais à saúde, como consumo excessivo de álcool, tabagismo e dieta inadequada, que são fatores de risco adicionais para doenças cardíacas. A resposta ao estresse também desempenha um papel na regulação do ritmo cardíaco e na saúde dos vasos sanguíneos, afetando diretamente a saúde cardiovascular a longo prazo. Portanto, gerenciar o estresse através de técnicas de relaxamento, exercícios físicos, apoio social e mudanças no estilo de vida é crucial não apenas para melhorar o bem-estar emocional, mas também para proteger o coração e reduzir o risco de doenças cardíacas.",
      ImageUrl: "./assets/img/estresse.png"
    },
    {
      Id: "7769481a-92b5-11eb-a8b3-0242ac130003",
      Title: "Impacto da Poluição do Ar na Saúde Respiratória",
      Headlight: "A poluição do ar exerce um impacto significativo na saúde respiratória, representando uma séria ameaça para pessoas em todo o mundo.",
      Content: "A poluição do ar exerce um impacto significativo na saúde respiratória, representando uma séria ameaça para pessoas em todo o mundo. Partículas finas e gases tóxicos provenientes de fontes industriais, veículos automotores e queima de combustíveis fósseis são inalados diariamente, comprometendo a saúde dos pulmões e do sistema respiratório. Esses poluentes podem causar uma variedade de problemas, desde irritação aguda das vias respiratórias até condições crônicas como bronquite, enfisema e asma. Além disso, a exposição prolongada à poluição do ar está associada a um aumento significativo no risco de doenças cardiovasculares, câncer de pulmão e morte prematura. Crianças, idosos e pessoas com condições respiratórias preexistentes são particularmente vulneráveis, sofrendo um impacto ainda maior na qualidade de vida e na capacidade pulmonar. Reduzir a poluição do ar requer políticas ambientais rigorosas, investimentos em tecnologias limpas e a adoção de práticas sustentáveis ​​para proteger a saúde respiratória global e mitigar os efeitos devastadores da poluição atmosférica.",
      ImageUrl: "./assets/img/poluicaoar.png"
    },
    {
      Id: "877de808-92b5-11eb-a8b3-0242ac130003",
      Title: "Como Prevenir a Osteoporose em Idosos",
      Headlight: "A prevenção da osteoporose em idosos é fundamental para manter a saúde óssea e a qualidade de vida.",
      Content: "A prevenção da osteoporose em idosos é fundamental para manter a saúde óssea e a qualidade de vida. Medidas preventivas incluem uma dieta rica em cálcio e vitamina D, nutrientes essenciais para a saúde dos ossos. Além disso, é crucial praticar exercícios físicos regularmente, especialmente atividades que fortaleçam os ossos e melhorem o equilíbrio para reduzir o risco de quedas. Evitar o tabagismo e o consumo excessivo de álcool também é recomendado, pois esses hábitos podem comprometer a densidade óssea. Realizar exames de densitometria óssea periodicamente para monitorar a saúde dos ossos e consultar regularmente um médico para discutir estratégias individuais de prevenção são passos importantes para garantir a saúde óssea ao longo da vida adulta e na terceira idade.",
      ImageUrl: "./assets/img/exercicios.png"
    },
    {
      Id: "96b52b4e-92b5-11eb-a8b3-0242ac130003",
      Title: "A Importância da Hidratação Adequada",
      Headlight: "A importância da hidratação adequada transcende a simples necessidade de saciar a sede; é essencial para a saúde e o bem-estar geral do corpo humano.",
      Content: "A importância da hidratação adequada transcende a simples necessidade de saciar a sede; é essencial para a saúde e o bem-estar geral do corpo humano. A água desempenha papéis vitais em várias funções corporais, desde regular a temperatura até facilitar a digestão e eliminar toxinas através da urina. Manter-se hidratado também é fundamental para o funcionamento eficaz do cérebro, melhorando a concentração, o foco e o desempenho cognitivo. Além disso, a hidratação adequada é crucial para a saúde da pele, ajudando a mantê-la hidratada, flexível e com aparência saudável. Em termos de saúde geral, beber água regularmente pode ajudar a prevenir condições como pedras nos rins e constipação. Portanto, é recomendável que as pessoas mantenham um consumo adequado de água ao longo do dia, ajustando a ingestão de acordo com a atividade física, clima e necessidades individuais para promover uma saúde ótima e o bem-estar contínuo.",
      ImageUrl: "./assets/img/hidratacao.png"
    },
    {
      Id: "a4e69518-92b5-11eb-a8b3-0242ac130003",
      Title: "Saúde Bucal: Mais que um Sorriso Bonito",
      Headlight: "A saúde bucal vai além de um sorriso bonito, sendo um componente fundamental para o bem-estar geral do corpo humano.",
      Content: "A saúde bucal vai além de um sorriso bonito, sendo um componente fundamental para o bem-estar geral do corpo humano. Uma boa saúde oral não apenas promove dentes e gengivas saudáveis, mas também está diretamente ligada à saúde cardiovascular, digestiva e respiratória. Infecções bucais, como cáries e doenças periodontais, podem não só causar dor e desconforto, mas também aumentar o risco de condições graves como doenças cardíacas, diabetes e pneumonia. Além disso, uma boca saudável facilita a alimentação adequada, contribuindo para a nutrição e a saúde geral do organismo. Portanto, cuidar da saúde bucal com escovação regular, uso de fio dental e visitas periódicas ao dentista não é apenas uma questão estética, mas essencial para manter um estilo de vida saudável e prevenir complicações médicas sérias no futuro.",
      ImageUrl: "./assets/img/saudebucal.png"
    },
    {
      Id: "b3e6c726-92b5-11eb-a8b3-0242ac130003",
      Title: "Benefícios do Consumo Moderado de Café",
      Headlight: "Sim, o consumo moderado de café pode trazer diversos benefícios à saúde, de acordo com estudos científicos.",
      Content: "Sim, o consumo moderado de café pode trazer diversos benefícios à saúde, de acordo com estudos científicos. O café é uma bebida rica em antioxidantes e compostos bioativos que têm demonstrado efeitos positivos em várias áreas da saúde. Entre os benefícios associados ao consumo moderado de café estão a redução do risco de certas doenças crônicas. Por exemplo, estudos sugerem que o café pode ajudar a proteger contra doenças neurodegenerativas, como o Mal de Alzheimer e o Parkinson. Os antioxidantes presentes no café podem combater o estresse oxidativo e a inflamação, processos que estão relacionados ao desenvolvimento dessas doenças. Além disso, o consumo moderado de café também foi associado a um menor risco de desenvolvimento de diabetes tipo 2. A cafeína pode melhorar a sensibilidade à insulina e a regulação da glicose no sangue, ajudando a prevenir o desenvolvimento da doença em algumas pessoas.",
      ImageUrl: "./assets/img/cafe.png"
    }
  ];

  constructor() { }

  GetAll(): Promise<Article[]> {
    return new Promise((resolve, reject) => {
      if (this.articles && this.articles.length > 0) {
        resolve(this.articles);
      } else {
        reject('No articles found');
      }
    });
  }

  GetById(id: string): Article {
    let artigo: Article = this.articles[0];

    return artigo;
  }

  GetByTitleLike(title: string): Article {
    let artigo: Article = this.articles[0];

    return artigo;
  }
}
