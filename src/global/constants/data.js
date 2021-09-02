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
      // {
      //   id:0,
      //   name:"Irene Pepperberg",
      //   bio:"Professor Irene Pepperberg is a Research Associate and lecturer at Harvard University, where she received her degree in Chemical Physics back in 1976. She is a pioneer in investigating animal cognition, particularly in relation to parrots. At the Conference, professor Pepperberg will give a lecture entitled: “Cognitive and Communicative Abilities of Grey Parrots”." ,
      //   keynote:true,
      //   link:"https://alexfoundation.org/about/dr-irene-pepperberg/",
      //   img:"irene.png",
      // }
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