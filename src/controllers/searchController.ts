import { Request, Response } from "express";

import { Pet } from "../models/pet";

export const search = (req: Request, res: Response) => {
   let query: string = req.query.q as string // form url

   if (!query){
      res.redirect('back')
      return
   }
   res.render('pages/page', {
      menu: '',
      list: Pet.getFromName(query),
      query
   })
}