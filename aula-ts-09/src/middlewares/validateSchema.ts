import { Request, Response } from "express";

function validateSchema(schema: any) {
    return (req: Request, res: Response, next: any) => {
      const validation = schema.validate(req.body, { abortEarly: false });
      if (validation.error) {
        const errors = validation.error.details.map((detail:{ message: string}) => detail.message);
        return res.status(422).send(errors);
      }
      next();
    };
}

export default validateSchema;