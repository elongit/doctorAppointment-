const Cities = [
    "All",
    "Rabat",
    "Casablanca",
    "Marrakech",
    "Fes",
    "Meknes",
    "Tangier",
    "Kenitra",
    "Al Hoceima",
    "Dakhla",
    "Laayoune",
    "Azilal",
    "Ifrane",
    "Tétouan",
    "Imintanoute",
    "Ouarzazate",
    "Ouezzane",
    "Rissani",
    "Sidi Ifni",
    "Tafraoute",
    "Zagora",

  ];

  const Options = [
    "All",
    "Cardiology",
    "Dermatology",
    "Neurology",
    "Pediatrics",
    "Psychiatry",
    "Orthopedics",
    "General Practice",
  ];
 


  
  const DoctorsData = [
    {
      name: "Nadia Talbi",
      specialty: "Cardiology",
      imageUrl:
        "https://static.vecteezy.com/ti/photos-gratuite/t1/28287555-un-indien-jeune-femelle-medecin-isole-sur-vert-ai-genere-photo.jpg",
      city: "Nador",
      gender: "female",
    },
    {
      name: "Fatima Zahra",
      specialty: "Dermatology",
      imageUrl:
        "https://img.freepik.com/photos-gratuite/heureux-jeune-femme-medecin-portant-robe-medicale-stethoscope-autour-du-cou-debout-posture-fermee_409827-254.jpg",
      city: "Agadir",
      gender: "female",
    },
    {
      name: "Ahmed Benali",
      specialty: "Neurology",
      imageUrl:
        "https://cdn.pixabay.com/photo/2024/03/25/18/35/ai-generated-8655320_640.png",
      city: "Laayoune",
      gender: "male",
    },
    {
      name: "Meriem El Amrani",
      specialty: "Pediatrics",
      imageUrl: "https://www.findablackdoctor.com/wp-content/themes/fabd/src/assets/hp-hero.jpg",
      city: "Tangier",
      gender: "female",
    },
    {
      name: "Mohamed El Fassi",
      specialty: "Orthopedics",
      imageUrl:
        "https://t4.ftcdn.net/jpg/03/05/41/27/360_F_305412791_XRNiWaFCREjLLpSQfj0e736foBoYXXYv.jpg",
      city: "Casablanca",
      gender: "male",
    },
    {
      name: "Amina Rami",
      specialty: "Psychiatry",
      imageUrl:
        "https://static.vecteezy.com/ti/photos-gratuite/t1/28287555-un-indien-jeune-femelle-medecin-isole-sur-vert-ai-genere-photo.jpg",
      city: "Nador",
      gender: "female",
    },
    {
      name: "Youssef Azzouz",
      specialty: "General Practice",
      imageUrl:
        "https://media.istockphoto.com/id/1364917551/photo/handsome-doctor-smiling-and-standing-on-white-background.jpg?s=612x612&w=0&k=20&c=-iqDHBMrl3oNGqqU9c65AUxVTRnhQHOej1uuIEmAYD0=",
      city: "Rabat",
      gender: "male",
    },
    {
      name: "Samira Bensalem",
      specialty: "Gynecology",
      imageUrl:
        "https://d1i4t8bqe7zgj6.cloudfront.net/04-20-2020/t_f10e92d6a37746ffbd5fa1f343ed23a9_name_01_arabdoctors.jpg",
      city: "Marrakech",
      gender: "female",
    },
    {
      name: "Tariq El Hadi",
      specialty: "Anesthesiology",
      imageUrl:
        "https://arabdoctors.ae/wp-content/uploads/2024/09/6.jpg",
      city: "Fes",
      gender: "male",
    },
    {
      name: "Zahra El Khouja",
      specialty: "Ophthalmology",
      imageUrl:
     "https://www.abouther.com/sites/default/files/styles/360x240/public/2021/07/08/arab_female_surgeon_cancer.png?itok=3hG9jzuZ",
      city: "Tétouan",
      gender: "female",
    },
    {
      name: "Hassan Dabbagh",
      specialty: "Urology",
      imageUrl:
        "https://img1.wsimg.com/isteam/ip/ae99a59c-60dc-459b-9043-a3dfcc84cff4/Dr.%20Muhammad%20Abdullah.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:400,cg:true",
      city: "Oujda",
      gender: "male",
    },
    // Doctors with the same specialty:
    {
      name: "Imane Bakkali",
      specialty: "Cardiology",
      imageUrl:
        "https://media.istockphoto.com/id/643890860/photo/arab-muslim-female-doctor-wearing-white-coat.jpg?s=612x612&w=0&k=20&c=fyuO0_Qug-32f2nK06qKZxOaMWw09CPJnGq2rhxcJGg=",
      city: "Meknes",
      gender: "female",
    },
    {
      name: "Ali Amrani",
      specialty: "Dermatology",
      imageUrl:
        "https://media.istockphoto.com/id/1364917551/photo/handsome-doctor-smiling-and-standing-on-white-background.jpg?s=612x612&w=0&k=20&c=-iqDHBMrl3oNGqqU9c65AUxVTRnhQHOej1uuIEmAYD0=",
      city: "Casablanca",
      gender: "male",
    },
  ];
  



export { Cities , DoctorsData , Options}