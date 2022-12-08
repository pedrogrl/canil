import { Request, Response } from "express";

import { Pet } from "../models/pet";

export const home = (req: Request, res: Response) => {

   res.render('pages/page', {
      menu: 'all',
      banner: {
         title: 'Todos os animais',
         background: 'allanimals.jpg'
      },
      list: Pet.getAll()
   })
}
export const dogs = (req: Request, res: Response) => {

   res.render('pages/page', {
      menu: 'dogs',
      banner: {
         title: 'Cachorros',
         background: 'banner_dog.jpg'
      },
      list: Pet.getFromType('dog')
   })
}
export const cats = (req: Request, res: Response) => {

   res.render('pages/page', {
      menu: 'cats',
      banner: {
         title: 'Gatos',
         background: 'banner_cat.jpg'
      },
      list: Pet.getFromType('cat')
   })
}
export const fishes = (req: Request, res: Response) => {
   
   res.render('pages/page', {
      menu: 'fishes',
      banner: {
         title: 'Peixes',
         background: 'banner_fish.jpg'
      },
      list: Pet.getFromType("fish")
   })
}