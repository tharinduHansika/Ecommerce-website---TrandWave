import { Request, RequestHandler, Response } from "express";
import { Item } from "../models/Item";

export default class ItemController{
    saveItem:RequestHandler = async (
        req:Request, 
        res:Response
        ):Promise<Response> => {
            try{
                let item =  new Item(req.body);
                let savedItem = await item.save();
    
                return res
                .status(200)
                .json({message: "Sucessfully saved..!", responseData: savedItem});
            }catch(error: unknown){
                if(error instanceof Error){
                    return res.status(500).json({message: error});
                } else {
                    return res.status(500).json({message: "Unknown Error!"});
                }
            }     
    };

    retriveAllItems: RequestHandler = async (
        req:Request,
        res:Response
    ): Promise<Response> => {
        try{
             let items =  await Item.find();
             return res
                .status(200)
                .json({ message: "Successfully Loaded..!", responseData: items})
        }catch(error: unknown){
            if(error instanceof Error){
                return res.status(500).json({message: error});
            } else {
                return res.status(500).json({message: "Unknown Error!"});
            }

        }
    };

    updateItem: RequestHandler = async (
        req: Request,
        res: Response
    ): Promise<Response> =>{
        try{
            let {id} = req.params;
            let updateItem = await Item.findByIdAndUpdate(id, req.body, {
                //to dispaly updated new object 
                new: true, 

            });
            return res.status(200).json({
                message: "Successfully Updated..!",
                responseData: updateItem,
            });

        }catch(error: unknown) {
            if(error instanceof Error){
                return res.status(500).json({message: error});
            } else {
                return res.status(500).json({message: "Unknown Error!"});
            }
        }
    };

    deleteItem: RequestHandler = async (
        req: Request,
        res: Response
    ): Promise<Response> =>{
        try{
            let { id } = req.params;
            let deleteItem = await Item.findByIdAndDelete(id);

            if(!deleteItem){
                throw new Error("Failed to Delete Item..!")
            }
            return res
                .status(200)
                .json({
                    message: "successfully Deleted..!",
                    responseData: deleteItem,
                });
        }catch (error: unknown) {
            if(error instanceof Error){
                return res.status(500).json({message: error});
            } else {
                return res.status(500).json({message: "Unknown Error!"});
            }
        }
    }
}