import { ProductsProps } from "../@types/typeProducts";
import { prisma } from "../database";
import { Request, Response } from "express";

export const controllers = { 
  async create(req: Request, res: Response) {
    const { name, description, image, validity, price, amount, created_at, updated_at }: ProductsProps = req.body

    const requireFields = ['name', 'amount', 'descripition', 'image', 'price', 'vailidity']
    for (const field of requireFields)
    if(!req.body[field].json({message: `${field} is required`}))

    await prisma.products.create({
      data: {
        name,
        description,
        image,
        validity,
        price,
        amount,
        created_at,
        updated_at,
      }
    })
    return res.status(201).json('Product created with sucesso')
  },

  async read(req: Request, res: Response) {
    const { id } = req.query
    if (id) {
      const listProduct = await prisma.products.findUnique({
        where: {id:id as string}
      })
      return listProduct ? res.status(200).json(listProduct) : res.status(404).json({message: 'Product not found'})
    } 
    const listProducts = await prisma.products.findMany()
    res.status(200).json(listProducts)
  },
  async update(req: Request, res: Response) {
    const { id } = req.params
    const { name, description, image, validity, price, amount }: ProductsProps = req.body
    await prisma.products.update({
      where: {
        id: id as string
      },
      data: {
        name: name as string,
        amount: amount as number,
        description: description as string,
        image: image as string,
        price: price as number,
        validity: new Date(validity),
      }
    })
    return res.status(201).json('Product updated with sucess')
  },
  async delete(req: Request, res: Response) {
    const { id } = req.params
    if (id) {
      await prisma.products.delete({
        where: { id:id as string }
      }) 
      return res.status(204).json({message: 'Product deleted with sucess'})
    } 
    
    res.status(404).json('Product not found')
  },
 }