import { createRef } from "react"

const state = {
  sections: 9,
  pages: 8,
  zoom: 75,
  paragraphs: [
    {
      offset: 1,
      factor: 1.75,
      header: "Meet My Love",
      image: "/darshi.jpg",
      aspect: 1.51,
      text:
        "26th Oct, 2019! the historic date as one would say - mausam bhi tha diwali bhi market saja hua tha aur uske beech ati hain ye ufff.... mtatlab kamaal si lagti hui aur mai ladkada gaya! loving everything about you baby"
    },
    {
      offset: 2,
      factor: 2.0,
      header: "When we met",
      image: "/us1.jpg",
      aspect: 1.5,
      text:
        "Pagli si pyaari si bilkul jaisa chaha tum usse bhi nyaari thi.Tumse sukoon tha tumhare age to poori jagg hari thi. sorry but bear my poems plz . Not just today or tomorrow but every single day."
    },
    {
      offset: 3,
      factor: 2.25,
      header: "Bunk/Date",
      image: "/us2.jpg",
      aspect: 1.5037,
      text: "You manage to look good in every photo thats cheating mai badi mehnat se kuch gandi photo doondh ra hahahahahaa lub yo."
    },
    {
      offset: 4,
      factor: 2.0,
      header: "Romantic",
      image: "/rom.jpg",
      aspect: 0.665,
      text: "Romance ka mauka nahi chorte hum ahmm ahmmm.!"
    },
    {
      offset: 5,
      factor: 1.75,
      header: "Tastyyy",
      image: "/us3.jpg",
      aspect: 1.55,
      text: "our tasty dates , i miss them a lottt now!"
    },
    { offset: 7, factor: 1.05, header: "Most importantly", image: "/most.jpg", aspect: 1.77, text: "I have you. Reminder - Eat healthy" }
  ],

  top: createRef()
}

export default state
