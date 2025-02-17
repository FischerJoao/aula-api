/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../server/shared/middlewares";

interface ICidade {
    nome: string;
    estado: string;
}

interface IFilter {
    filter?: string;
}


export const createValidation = validation((getSchema) => ({

    body: getSchema<ICidade>(yup.object().shape({
        nome: yup.string().required().min(3),
        estado: yup.string().required().min(3),
    })),

    query: getSchema<IFilter>(yup.object().shape({
        filter: yup.string().required().min(3)
    }))
}))

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {

    console.log(req.body);
    res.send(`Create`);
};

