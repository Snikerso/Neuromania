export const importantDatesData = [
  {
    id:0,
    title:"Registration start", 
    description:"13.09.2021",
  },
  {
    id:1,
    title:"Finish registration for active participants", 
    description:"22.10.2021",
  },
  {
    id:3,
    title:"Finish registration for passive participants", 
    description:"29.10.2021",
  },
  {
    id:4,
    title:"Start conference", 
    description:"20-21.11.2021",
  },
]

export const sheduleData = [
  {
    id:0,
    room: "21",
    day:"1",
    time_start:"10:00",
    time_duration:"45",
    keynote:true,
    session:1,
    author:
    [
      {
        id:0,
        name:"Irene Pepperberg",
        bio:"Professor Irene Pepperberg is a Research Associate and lecturer at Harvard University, where she received her degree in Chemical Physics back in 1976. She is a pioneer in investigating animal cognition, particularly in relation to parrots. At the Conference, professor Pepperberg will give a lecture entitled: “Cognitive and Communicative Abilities of Grey Parrots”." ,
        keynote:true,
        link:"https://alexfoundation.org/about/dr-irene-pepperberg/",
        img:"irene.png",
      },
      {
        id:1,
        name:"Don Lee Fred Nilsen",
        bio:"Don Lee Fred Nilsen is a Professor of Linguistics in the Department of English at the Arizona State University. He completed a PhD in Linguistics at the University of Michigan in 1971. His area of interest include irony, paradox, symbolism, humor and tragi-comedy. In 2014 together with his wife Alleen Nilsen they received the Doug Fletcher Lifetime Achievement Award for their significant contribution to the understanding and application of humor. Professor Nilsen will give a presentation at the conference co-authored by his wife, Alleen Nilsen - Emeritus Professor at the Arizona State University." ,
        keynote:true,
        link:"",
        img:"nielsen.png",
      },
      {
        id:2,
        name:"Daniel L. Everett",
        bio:"Daniel L. Everett is a Professor of Cognitive Sciences in the Department of Sociology at Bentley University. He holds a ScD and a Masters of Linguistics both from the Universidade Estadual in Campinas. He has spent nearly eight years living in the Amazonian Jungle and studying local languages, specially language of Amazon Basin’s Pirah people. He is a well-known author of many scientific articles and eleven books. His book, “Don't Sleep There are Snakes: Life and Language in the Amazonian Jungle” was published in eight languages and became a best-seller in English, Japanese, Mandarin, Korean and German." ,
        keynote:true,
        link:"",
        img:"everet.png",
      }
    ],
    paper:{
      author:0,
      title:"Paper 1",
      slug:"paper-1",
      abstract:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
  },
  {
    id:1,
    room: "21",
    day:"2",
    time_start:"11:00",
    time_duration:"40",
    session:1,
    author:[
      {
        id:2,
        name:"Name1 Surname1",
        img:"",
        bio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        slug:"name-surname",
      },
    ],
    paper:{
        author:1,
        title:"Paper 2",
        slug:"paper-2",
        abstract:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
    },
  {
    id:2,
    room: "21",
    day:"2",
    time_start:"12:00",
    time_duration:"60",
    session:1,
    author:[
      {
        id:3,
        name:"Name3 Surname3",
        img:"",
        bio:"Staż zdobyłem w ramach konkursu organizowanego przez UMK i trwał on jeden miesiąc. W ramach stażu stworzyłem frontend za pomocą React'a podłączonego do wcześniej stworzonego REST Api w ASP.Net Core. Oprócz trenowania wcześniejszych umiejętności podczas tworzenia tej strony nauczyłem się dwóch kolejnych bibliotek: React Query i React Formik oraz rozwinąłem swoje umiejętności w tworzeniu własnych hooków. Pracowalimy przy tym projekcie zdalnie w grupie czterech osób.",
        slug:"name-surname",
      }
    ]
    ,
    paper:{
      author:1,
      title:"Paper 3",
      slug:"paper-1",
      abstract:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
  },
  {
    id:3,
    room: "2",
    day:"3",
    time_start:"9:00",
    time_duration:"60",
    session:1,
    author:[
      {
        id:3,
        name:"Name4 Surname4",
        img:"",
        bio:"Staż zdobyłem w ramach konkursu organizowanego przez UMK i trwał on jeden miesiąc. W ramach stażu stworzyłem frontend za pomocą React'a podłączonego do wcześniej stworzonego REST Api w ASP.Net Core. Oprócz trenowania wcześniejszych umiejętności podczas tworzenia tej strony nauczyłem się dwóch kolejnych bibliotek: React Query i React Formik oraz rozwinąłem swoje umiejętności w tworzeniu własnych hooków. Pracowalimy przy tym projekcie zdalnie w grupie czterech osób.",
        slug:"name-surname",
      }
    ]
    ,
    paper:{
      author:1,
      title:"Paper 3",
      slug:"paper-1",
      abstract:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
  },
]